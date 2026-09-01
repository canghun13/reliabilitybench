(() => {
  const fmt = value => Number(value).toLocaleString('en-US', { maximumFractionDigits: 4 });
  const esc = value => String(value).replace(/[&<>"']/g, char => ({ '&': '&amp;', '<': '&lt;', '>': '&gt;', '"': '&quot;', "'": '&#39;' }[char]));

  function parseTimestamp(value, row) {
    const time = Date.parse(value);
    if (!Number.isFinite(time)) throw new Error(`Row ${row} has an invalid timestamp.`);
    return time;
  }

  function parseRows(raw, columns, minimum = 3, maximum = 240) {
    const lines = String(raw || '').split(/\r?\n/).map(line => line.trim()).filter(Boolean);
    if (lines.length < minimum || lines.length > maximum) throw new Error(`Enter ${minimum}–${maximum} rows.`);
    return lines.map((line, index) => {
      const fields = line.split('|').map(value => value.trim());
      if (fields.length !== columns || fields.some(value => value === '')) throw new Error(`Row ${index + 1} must contain ${columns} nonblank fields separated by |.`);
      return fields;
    });
  }

  function parseTimeValueRows(raw, minimum = 3, maximum = 240) {
    const rows = parseRows(raw, 2, minimum, maximum).map((fields, index) => {
      const value = Number(fields[1]);
      if (!Number.isFinite(value)) throw new Error(`Row ${index + 1} value must be a finite number.`);
      return { label: fields[0], time: parseTimestamp(fields[0], index + 1), value };
    });
    for (let i = 1; i < rows.length; i += 1) if (rows[i].time <= rows[i - 1].time) throw new Error(`Row ${i + 1} timestamp must be later than the previous row.`);
    return rows;
  }

  function stateLog(raw) {
    const rows = parseRows(raw, 2, 3, 240).map((fields, index) => ({
      label: fields[0],
      time: parseTimestamp(fields[0], index + 1),
      state: fields[1].trim().toUpperCase()
    }));
    for (let i = 1; i < rows.length; i += 1) if (rows[i].time <= rows[i - 1].time) throw new Error(`Row ${i + 1} timestamp must be later than the previous row.`);
    const durations = new Map();
    const transitions = [];
    let starts = 0;
    let exits = 0;
    for (let i = 0; i < rows.length - 1; i += 1) {
      const hours = (rows[i + 1].time - rows[i].time) / 3600000;
      durations.set(rows[i].state, (durations.get(rows[i].state) || 0) + hours);
      if (rows[i].state !== rows[i + 1].state) {
        transitions.push({ time: rows[i + 1].label, from: rows[i].state, to: rows[i + 1].state });
        if (rows[i + 1].state === 'RUNNING') starts += 1;
        if (rows[i].state === 'RUNNING') exits += 1;
      }
    }
    const windowHours = (rows.at(-1).time - rows[0].time) / 3600000;
    const runningHours = durations.get('RUNNING') || 0;
    return { rows, durations: [...durations].map(([state, hours]) => ({ state, hours, share: hours / windowHours })).sort((a, b) => b.hours - a.hours), transitions, starts, exits, windowHours, runningHours, runningShare: runningHours / windowHours, openState: rows.at(-1).state };
  }

  function parseNumberSeries(raw, minimum = 6, maximum = 240) {
    const tokens = String(raw || '').split(/[\s,;|]+/).filter(Boolean);
    if (tokens.length < minimum || tokens.length > maximum) throw new Error(`Enter ${minimum}–${maximum} load values.`);
    const values = tokens.map(Number);
    if (values.some(value => !Number.isFinite(value) || value < 0 || value > 200)) throw new Error('Load values must be finite percentages from 0 to 200.');
    return values;
  }

  function loadProfile(values, intervalMinutes) {
    if (!Number.isFinite(intervalMinutes) || intervalMinutes <= 0 || intervalMinutes > 1440) throw new Error('Sample interval must be greater than 0 and no more than 1,440 minutes.');
    const labels = ['Idle (0%)', '0–10%', '10–20%', '20–30%', '30–40%', '40–50%', '50–60%', '60–70%', '70–80%', '80–90%', '90–100%', 'Above 100%'];
    const counts = Array(labels.length).fill(0);
    values.forEach(value => {
      if (value === 0) counts[0] += 1;
      else if (value > 100) counts[11] += 1;
      else counts[Math.ceil(value / 10)] += 1;
    });
    const totalHours = values.length * intervalMinutes / 60;
    const mean = values.reduce((sum, value) => sum + value, 0) / values.length;
    return {
      values,
      mean,
      peak: Math.max(...values),
      totalHours,
      idleHours: counts[0] * intervalMinutes / 60,
      above100Hours: counts[11] * intervalMinutes / 60,
      bins: labels.map((label, index) => ({ label, count: counts[index], hours: counts[index] * intervalMinutes / 60, share: counts[index] / values.length }))
    };
  }

  function thresholdExcursions(raw, lower, upper) {
    if (![lower, upper].every(Number.isFinite) || lower >= upper) throw new Error('Lower limit must be less than the upper limit.');
    const rows = parseTimeValueRows(raw);
    const durations = { below: 0, inside: 0, above: 0 };
    const events = [];
    let active = null;
    for (let i = 0; i < rows.length - 1; i += 1) {
      const hours = (rows[i + 1].time - rows[i].time) / 3600000;
      const zone = rows[i].value < lower ? 'below' : rows[i].value > upper ? 'above' : 'inside';
      durations[zone] += hours;
      if (zone === 'inside') active = null;
      else if (!active || active.zone !== zone) {
        active = { zone, start: rows[i].label, end: rows[i + 1].label, hours, extreme: rows[i].value };
        events.push(active);
      } else {
        active.end = rows[i + 1].label;
        active.hours += hours;
        active.extreme = zone === 'above' ? Math.max(active.extreme, rows[i].value) : Math.min(active.extreme, rows[i].value);
      }
    }
    const windowHours = durations.below + durations.inside + durations.above;
    return { rows, lower, upper, durations, events, windowHours, maximum: Math.max(...rows.map(row => row.value)), minimum: Math.min(...rows.map(row => row.value)), finalValue: rows.at(-1).value };
  }

  function rateOfChange(raw, risingLimit, fallingLimit, timeBaseHours = 1) {
    if (![risingLimit, fallingLimit, timeBaseHours].every(Number.isFinite) || risingLimit <= 0 || fallingLimit <= 0 || timeBaseHours <= 0) throw new Error('Rise limit, fall limit, and time base must be finite numbers greater than zero.');
    const rows = parseTimeValueRows(raw);
    const segments = [];
    for (let i = 1; i < rows.length; i += 1) {
      const elapsedHours = (rows[i].time - rows[i - 1].time) / 3600000;
      const rate = (rows[i].value - rows[i - 1].value) / elapsedHours * timeBaseHours;
      const direction = rate > risingLimit ? 'Rise' : rate < -fallingLimit ? 'Fall' : 'Within';
      segments.push({ from: rows[i - 1].label, to: rows[i].label, elapsedHours, rate, direction });
    }
    const flagged = segments.filter(segment => segment.direction !== 'Within');
    return { rows, segments, flagged, risingLimit, fallingLimit, timeBaseHours, maximumRise: Math.max(...segments.map(segment => segment.rate)), maximumFall: Math.min(...segments.map(segment => segment.rate)) };
  }

  const api = { parseRows, parseTimeValueRows, stateLog, parseNumberSeries, loadProfile, thresholdExcursions, rateOfChange };
  if (typeof module !== 'undefined' && module.exports) module.exports = api;
  if (typeof window !== 'undefined') window.ReliabilityBenchOperatingProfile = api;
  if (typeof document === 'undefined') return;

  const form = document.querySelector('[data-operating-form]');
  if (!form) return;
  form.noValidate = true;
  const tool = document.body.dataset.operatingTool;
  const score = document.querySelector('[data-workflow-score]');
  const output = document.querySelector('[data-workflow-output]');
  const field = name => String(form.elements[name]?.value ?? '').trim();
  const number = name => Number(form.elements[name]?.value);
  const set = (headline, html) => { score.textContent = headline; output.innerHTML = html; };
  const invalid = message => set('Check inputs', `<p>${esc(message)}</p><p>No operating, maintenance, or safety decision has been made.</p>`);
  const hours = value => `${fmt(value)} h`;

  const handlers = {
    state() {
      const result = stateLog(field('rows'));
      set(`${(result.runningShare * 100).toFixed(1)}% observed running`, `<p>${hours(result.windowHours)} were reconstructed from the first timestamp to the last. The final ${esc(result.openState)} state has no duration because no closing timestamp follows it.</p><table><thead><tr><th>State</th><th>Duration</th><th>Share</th></tr></thead><tbody>${result.durations.map(row => `<tr><td>${esc(row.state)}</td><td>${hours(row.hours)}</td><td>${(row.share * 100).toFixed(1)}%</td></tr>`).join('')}</tbody></table><h3>Transitions</h3><p>${result.transitions.length} state changes, ${result.starts} entries into RUNNING, and ${result.exits} exits from RUNNING were observed.</p><table><thead><tr><th>Time</th><th>Change</th></tr></thead><tbody>${result.transitions.slice(0, 20).map(row => `<tr><td>${esc(row.time)}</td><td>${esc(row.from)} → ${esc(row.to)}</td></tr>`).join('')}</tbody></table><h3>Next decision</h3><p>Reconcile unexpected states and missing closing events before using this log for availability, downtime, or cycling analysis.</p>`);
    },
    load() {
      const result = loadProfile(parseNumberSeries(field('series')), number('interval'));
      set(`${fmt(result.mean)}% mean load`, `<p>${result.values.length} equally spaced readings represent ${hours(result.totalHours)}. Peak load is ${fmt(result.peak)}%; idle exposure is ${hours(result.idleHours)}; exposure above 100% is ${hours(result.above100Hours)}.</p><table><thead><tr><th>Load band</th><th>Readings</th><th>Hours</th><th>Share</th></tr></thead><tbody>${result.bins.map(row => `<tr><td>${row.label}</td><td>${row.count}</td><td>${fmt(row.hours)}</td><td>${(row.share * 100).toFixed(1)}%</td></tr>`).join('')}</tbody></table><h3>Next decision</h3><p>Compare the exposure distribution with the declared design and operating basis. The histogram does not establish damage, efficiency, or a maintenance interval.</p>`);
    },
    threshold() {
      const result = thresholdExcursions(field('rows'), number('lower'), number('upper'));
      const outHours = result.durations.below + result.durations.above;
      set(`${(outHours / result.windowHours * 100).toFixed(1)}% outside limits`, `<p>Using a left-hold interval convention, ${hours(result.windowHours)} were classified: ${hours(result.durations.below)} below, ${hours(result.durations.inside)} inside, and ${hours(result.durations.above)} above. The final reading is not assigned duration.</p><table><thead><tr><th>Zone</th><th>Start</th><th>End</th><th>Duration</th><th>Extreme</th></tr></thead><tbody>${result.events.length ? result.events.slice(0, 20).map(row => `<tr><td>${row.zone}</td><td>${esc(row.start)}</td><td>${esc(row.end)}</td><td>${fmt(row.hours)} h</td><td>${fmt(row.extreme)}</td></tr>`).join('') : '<tr><td colspan="5">No below- or above-limit event was reconstructed.</td></tr>'}</tbody></table><h3>Interpretation boundary</h3><p>Limits are user supplied. Verify units, sensor quality, limit revisions, interpolation needs, and operating mode before escalating an excursion.</p>`);
    },
    roc() {
      const result = rateOfChange(field('rows'), number('rise'), number('fall'), number('timebase'));
      set(`${result.flagged.length} rate event${result.flagged.length === 1 ? '' : 's'}`, `<p>${result.segments.length} timestamp intervals were evaluated. Maximum rise was ${fmt(result.maximumRise)} and maximum fall was ${fmt(result.maximumFall)} units per selected time base.</p><table><thead><tr><th>Direction</th><th>From</th><th>To</th><th>Elapsed</th><th>Rate</th></tr></thead><tbody>${result.flagged.length ? result.flagged.slice(0, 20).map(row => `<tr><td>${row.direction}</td><td>${esc(row.from)}</td><td>${esc(row.to)}</td><td>${fmt(row.elapsedHours)} h</td><td>${fmt(row.rate)}</td></tr>`).join('') : '<tr><td colspan="5">No interval exceeded the declared rise or fall limit.</td></tr>'}</tbody></table><h3>Next decision</h3><p>Review flagged raw intervals, sample timing, resolution, filtering, and process context. This screen does not configure or replace a control-system alarm.</p>`);
    }
  };

  const run = () => { try { handlers[tool]?.(); } catch (error) { invalid(error.message || 'The input could not be processed.'); } };
  form.addEventListener('submit', event => { event.preventDefault(); run(); });
  form.addEventListener('reset', () => setTimeout(run));
  document.querySelector('[data-copy-workflow]')?.addEventListener('click', async () => {
    try { await navigator.clipboard.writeText(`${score.textContent}\n${output.innerText}`); }
    catch { output.insertAdjacentHTML('afterbegin', '<p>Copy is unavailable in this browser.</p>'); }
  });
  run();
})();
