(() => {
  const form = document.querySelector('[data-intermittent-form]');
  if (!form) return;

  form.noValidate = true;
  const tool = document.body.dataset.intermittentTool;
  const score = document.querySelector('[data-workflow-score]');
  const output = document.querySelector('[data-workflow-output]');
  const esc = value => String(value).replace(/[&<>"']/g, char => ({ '&': '&amp;', '<': '&lt;', '>': '&gt;', '"': '&quot;', "'": '&#39;' }[char]));
  const text = name => String(form.elements[name]?.value ?? '').trim();
  const num = name => Number(form.elements[name]?.value);
  const checked = name => Boolean(form.elements[name]?.checked);
  const set = (headline, html) => { score.textContent = headline; output.innerHTML = html; };
  const invalid = message => set('Check inputs', `<p>${esc(message)}</p><p>No investigation or test decision has been made.</p>`);
  const percent = (part, total) => total ? part / total * 100 : 0;
  const groupCounts = (items, key) => {
    const counts = new Map();
    items.forEach(item => counts.set(item[key], (counts.get(item[key]) || 0) + 1));
    return [...counts.entries()].sort((a, b) => b[1] - a[1] || a[0].localeCompare(b[0]));
  };
  const rows = values => `<table><thead><tr><th>Pattern</th><th>Events</th></tr></thead><tbody>${values.map(([label, count]) => `<tr><td>${esc(label)}</td><td>${count}</td></tr>`).join('')}</tbody></table>`;

  const handlers = {
    eventReport() {
      const asset = text('asset');
      const eventTime = text('eventTime');
      const symptom = text('symptom');
      const phase = text('phase');
      const duration = num('duration');
      const durationUnit = text('durationUnit');
      const faultCode = text('faultCode') || 'Not captured';
      const operatingState = text('operatingState') || 'Not captured';
      const environment = text('environment') || 'Not captured';
      const recovery = text('recovery');
      const actions = text('actions') || 'None recorded';
      if (!asset || asset.length > 64) return invalid('Asset or unit ID is required and must be 64 characters or fewer.');
      if (!eventTime || Number.isNaN(Date.parse(eventTime))) return invalid('Enter a valid event date and time.');
      if (symptom.length < 12 || symptom.length > 600) return invalid('Describe the observable symptom in 12–600 characters without asserting an unverified cause.');
      if (phase.length < 3 || phase.length > 120) return invalid('Describe the operating phase in 3–120 characters.');
      if (!Number.isFinite(duration) || duration <= 0 || duration > 1000000) return invalid('Duration must be greater than zero and no more than 1,000,000 in the selected unit.');
      if (operatingState.length < 3 || operatingState.length > 300) return invalid('Describe the load or operating state in 3–300 characters.');

      const evidence = [...form.querySelectorAll('[data-evidence]')];
      const present = evidence.filter(item => item.checked);
      const missing = evidence.filter(item => !item.checked).map(item => item.dataset.label);
      const completeness = Math.round((7 + present.length) / (7 + evidence.length) * 100);
      const report = [
        `INTERMITTENT FAULT EVENT — ${asset}`,
        `Event time: ${eventTime}`,
        `Observable symptom: ${symptom}`,
        `Operating phase: ${phase}`,
        `Duration: ${duration} ${durationUnit}`,
        `Fault code / alarm: ${faultCode}`,
        `Load / operating state: ${operatingState}`,
        `Environment: ${environment}`,
        `Recovery: ${recovery}`,
        `Actions before capture: ${actions}`
      ].join('\n');
      set(`${completeness}% capture coverage`, `<p>This is a handoff-quality screen, not a diagnosis or release-to-service decision.</p><code>${esc(report)}</code><h3>Evidence gaps</h3>${missing.length ? `<ul>${missing.map(item => `<li>${esc(item)}</li>`).join('')}</ul>` : '<p>All declared evidence controls are present. Preserve the original files and accountable source.</p>'}<h3>Next action</h3><p>Compare this event with prior events before changing multiple components or conditions. Follow approved safety, troubleshooting, and release procedures.</p>`);
    },

    patternAnalyzer() {
      const raw = text('events');
      const lines = raw.split(/\r?\n/).map(line => line.trim()).filter(Boolean);
      if (lines.length < 3 || lines.length > 100) return invalid('Enter 3–100 event rows, one event per line.');
      const parsed = [];
      for (const [index, line] of lines.entries()) {
        const fields = line.split('|').map(value => value.trim());
        if (fields.length !== 5 || fields.some(value => !value)) return invalid(`Row ${index + 1} must contain five nonblank fields separated by |.`);
        if (Number.isNaN(Date.parse(fields[0]))) return invalid(`Row ${index + 1} does not begin with a valid date or date-time.`);
        parsed.push({ date: new Date(fields[0]), unit: fields[1], phase: fields[2], code: fields[3], recovery: fields[4] });
      }
      parsed.sort((a, b) => a.date - b.date);
      const units = groupCounts(parsed, 'unit');
      const phases = groupCounts(parsed, 'phase');
      const codes = groupCounts(parsed, 'code');
      const recoveries = groupCounts(parsed, 'recovery');
      const signatures = groupCounts(parsed.map(item => ({ signature: `${item.phase} / ${item.code} / ${item.recovery}` })), 'signature');
      const repeats = signatures.filter(([, count]) => count > 1);
      const topShare = percent(signatures[0][1], parsed.length);
      set(`${parsed.length} events · ${repeats.length} repeated signatures`, `<p>Observation window: ${esc(parsed[0].date.toISOString().slice(0, 10))} to ${esc(parsed.at(-1).date.toISOString().slice(0, 10))}. The leading phase/code/recovery signature contains ${topShare.toFixed(1)}% of events.</p><h3>Units</h3>${rows(units.slice(0, 6))}<h3>Operating phases</h3>${rows(phases.slice(0, 6))}<h3>Fault codes</h3>${rows(codes.slice(0, 6))}<h3>Repeated signatures</h3>${repeats.length ? rows(repeats.slice(0, 8)) : '<p>No exact phase/code/recovery signature repeats.</p>'}<h3>Interpretation boundary</h3><p>These are event counts, not exposure-normalized rates or proof of cause. Add no-fault operating exposure before claiming that a condition raises occurrence probability.</p>`);
    },

    historyScreener() {
      const allEvents = num('allEvents');
      const targetEvents = num('targetEvents');
      const shopReturns = num('shopReturns');
      const nffReturns = num('nffReturns');
      const swaps = num('swaps');
      const repeats = num('repeats');
      const threshold = num('threshold');
      const values = [allEvents, targetEvents, shopReturns, nffReturns, swaps, repeats];
      if (!values.every(Number.isInteger) || values.some(value => value < 0)) return invalid('All event, return, and replacement counts must be whole numbers of zero or more.');
      if (allEvents < 1 || targetEvents > allEvents) return invalid('Comparable events must be at least one, and target-unit events cannot exceed them.');
      if (shopReturns < 1 || nffReturns > shopReturns) return invalid('Shop returns must be at least one, and NFF outcomes cannot exceed them.');
      if (swaps < 1 || repeats > swaps) return invalid('Component swaps must be at least one, and repeat symptoms cannot exceed them.');
      if (!Number.isFinite(threshold) || threshold <= 0 || threshold > 100) return invalid('The local review threshold must be greater than 0% and no more than 100%.');
      const metrics = [
        ['Target-unit event concentration', percent(targetEvents, allEvents)],
        ['No-fault-found share of shop returns', percent(nffReturns, shopReturns)],
        ['Symptom recurrence after component swap', percent(repeats, swaps)]
      ];
      const flags = metrics.filter(([, value]) => value >= threshold);
      set(flags.length ? `${flags.length} declared review trigger${flags.length === 1 ? '' : 's'}` : 'No declared trigger reached', `<p>The threshold is your local screening convention (${threshold.toFixed(1)}%), not an FAA, Airbus, or ReliabilityBench acceptance limit.</p><table><thead><tr><th>Metric</th><th>Result</th><th>Screen</th></tr></thead><tbody>${metrics.map(([label, value]) => `<tr><td>${label}</td><td>${value.toFixed(1)}%</td><td>${value >= threshold ? 'Review' : 'Below threshold'}</td></tr>`).join('')}</tbody></table><h3>Next action</h3><p>${flags.length ? 'Open a controlled review of serial history, installation context, wiring/connectors, configuration, test coverage, and prior actions. Do not declare the removed component faulty from concentration alone.' : 'Retain the history and review absolute consequence, trend, and safety obligations even when a percentage stays below the local threshold.'}</p>`);
    },

    reproductionPlan() {
      const symptom = text('symptom');
      const baseline = text('baseline');
      const instrumentation = text('instrumentation');
      const cycles = num('cycles');
      const dwell = num('dwell');
      const dwellUnit = text('dwellUnit');
      const stopCriteria = text('stopCriteria');
      const triggers = [...form.querySelectorAll('[data-trigger]')].filter(item => item.checked).map(item => item.dataset.label);
      if (symptom.length < 12 || symptom.length > 600) return invalid('Describe the observable symptom in 12–600 characters.');
      if (baseline.length < 8 || baseline.length > 400) return invalid('Describe a known-good or as-found baseline in 8–400 characters.');
      if (!triggers.length) return invalid('Select at least one suspected trigger to build the test sequence.');
      if (instrumentation.length < 8 || instrumentation.length > 500) return invalid('Describe the measurements and logging in 8–500 characters.');
      if (!Number.isInteger(cycles) || cycles < 1 || cycles > 10000) return invalid('Cycles or repetitions must be a whole number from 1 to 10,000.');
      if (!Number.isFinite(dwell) || dwell <= 0 || dwell > 1000000) return invalid('Observation duration must be greater than zero and no more than 1,000,000 in the selected unit.');
      if (stopCriteria.length < 8 || stopCriteria.length > 500) return invalid('State approved stop criteria in 8–500 characters.');
      const limitsConfirmed = checked('limitsConfirmed');
      const oneFactor = checked('oneFactor');
      const plan = [
        `1. Preserve the as-found state and original logs before changing configuration.`,
        `2. Confirm baseline: ${baseline}`,
        ...triggers.map((trigger, index) => `${index + 3}. Apply ${trigger}${oneFactor ? ' as the only intentional change from baseline' : ' under the approved combined-condition sequence'}; observe for ${dwell} ${dwellUnit}, up to ${cycles} repetitions.`),
        `${triggers.length + 3}. Record continuously with: ${instrumentation}`,
        `${triggers.length + 4}. Stop or hold when: ${stopCriteria}`,
        `${triggers.length + 5}. Restore and document the approved baseline after each stage; retain negative as well as positive results.`
      ];
      set(limitsConfirmed ? `${triggers.length} trigger stage${triggers.length === 1 ? '' : 's'} planned` : 'Planning hold', `<p><strong>Target symptom:</strong> ${esc(symptom)}</p><ol>${plan.map(step => `<li>${esc(step.replace(/^\d+\.\s*/, ''))}</li>`).join('')}</ol><h3>Authorization boundary</h3><p>${limitsConfirmed ? 'The user declared that approved procedures, equipment limits, stop criteria, and qualified review are available. This output still does not authorize testing or release equipment.' : 'Do not execute this draft. Confirm approved procedures, equipment limits, stop criteria, hazards, and qualified authorization first.'}</p>`);
    }
  };

  const run = () => handlers[tool]?.();
  form.addEventListener('submit', event => { event.preventDefault(); run(); });
  form.addEventListener('reset', () => setTimeout(run));
  document.querySelector('[data-copy-workflow]')?.addEventListener('click', async () => {
    try { await navigator.clipboard.writeText(`${score.textContent}\n${output.innerText}`); }
    catch { output.insertAdjacentHTML('afterbegin', '<p>Copy is unavailable in this browser.</p>'); }
  });
  run();
})();
