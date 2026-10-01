export const MAX_PATHS = 100;

export function analyzeParallel(values) {
  if (!Array.isArray(values) || values.length < 2 || values.length > MAX_PATHS ||
      values.some(value => typeof value !== 'number' || !Number.isFinite(value) || value < 0 || value > 1)) {
    throw new Error('Enter 2–100 path reliabilities, each between 0 and 1.');
  }
  const certain = values.includes(1);
  const logFailure = certain ? -Infinity : values.reduce((sum, value) => sum + Math.log1p(-value), 0);
  const failure = certain ? 0 : Math.exp(logFailure);
  const reliability = certain ? 1 : -Math.expm1(logFailure);
  const best = Math.max(...values);
  return { reliability, failure, logFailure, certain, best, gain: Math.max(0, reliability - best), count: values.length };
}

const number = value => new Intl.NumberFormat('en-US', { maximumFractionDigits: 6 }).format(value);
export function failurePercent(result) {
  if (result.certain) return '0%';
  const logPercent = result.logFailure / Math.LN10 + 2;
  if (logPercent < -4) {
    const exponent = Math.floor(logPercent);
    return `${number(10 ** (logPercent - exponent))} × 10^${exponent}%`;
  }
  return `${number(result.failure * 100)}%`;
}

export function reliabilityPercent(result) {
  const formatted = number(result.reliability * 100);
  return `${formatted === '100' && !result.certain ? '≈' : ''}${formatted}%`;
}

export function initParallel(doc = document) {
  const form = doc.querySelector('[data-calculator]');
  if (!form) return;
  const paths = doc.querySelector('[data-parallel-paths]');
  const count = doc.querySelector('#path-count');
  const output = doc.querySelector('[data-result]');
  const message = doc.querySelector('[data-result-message]');
  const details = doc.querySelector('[data-parallel-details]');
  const copy = doc.querySelector('[data-copy-result]');
  const print = doc.querySelector('[data-print-result]');
  const status = doc.querySelector('[data-parallel-status]');
  const sample = ['0.90', '0.80', '0.70'];
  let report = '';
  function clear(text = 'Inputs changed. Calculate to update the result.') {
    output.textContent = '—'; message.textContent = text;
    details.hidden = true; details.replaceChildren(); report = '';
    copy.disabled = true; print.disabled = true;
    doc.body.removeAttribute('data-parallel-ready');
    status.textContent = '';
  }
  function renderPaths(values) {
    paths.replaceChildren();
    values.forEach((value, index) => {
      const field = doc.createElement('div'); field.className = 'field';
      const label = doc.createElement('label'); label.htmlFor = `path-${index + 1}`;
      label.textContent = `Path ${index + 1} reliability`;
      const unit = doc.createElement('small'); unit.textContent = 'probability 0 to 1'; label.append(unit);
      const input = doc.createElement('input');
      Object.assign(input, { id: `path-${index + 1}`, name: `path-${index + 1}`, type: 'number', min: '0', max: '1', step: 'any', required: true, value });
      input.inputMode = 'decimal'; field.append(label, input); paths.append(field);
    });
  }
  doc.querySelector('[data-apply-path-count]').addEventListener('click', () => {
    const raw = count.value.trim(), desired = Number(raw);
    if (!raw || !Number.isInteger(desired) || desired < 2 || desired > MAX_PATHS) {
      clear('Path count must be a whole number from 2 to 100.'); count.focus(); return;
    }
    const previous = Array.from(paths.querySelectorAll('input'), input => input.value);
    renderPaths(Array.from({ length: desired }, (_, index) => previous[index] ?? ''));
    clear(`Enter reliability for all ${desired} paths, then calculate.`);
  });
  form.addEventListener('input', () => clear());
  form.addEventListener('invalid', () => clear('Check the highlighted input. Each path needs a probability from 0 to 1.'), true);
  form.addEventListener('submit', event => {
    event.preventDefault();
    try {
      const desired = Number(count.value);
      const inputs = Array.from(paths.querySelectorAll('input'));
      if (!Number.isInteger(desired) || desired !== inputs.length) throw new Error('Apply the path count before calculating.');
      if (inputs.some(input => !input.value.trim())) throw new Error('Enter a reliability for every path. Blank is not zero.');
      const values = inputs.map(input => Number(input.value));
      const result = analyzeParallel(values);
      const reliability = reliabilityPercent(result), failure = failurePercent(result);
      output.textContent = reliability;
      message.textContent = `At least one of ${result.count} independent paths completes the same mission. ${reliability.startsWith('≈') ? 'Reliability is rounded; the failure probability below remains non-zero.' : ''}`;
      details.hidden = false;
      const summary = doc.createElement('dl'); summary.className = 'parallel-summary';
      [['Path count', String(result.count)], ['All-path failure probability', failure], ['Best single-path reliability', `${number(result.best * 100)}%`], ['Gain over best single path', `${number(result.gain * 100)} percentage points`]].forEach(([term, value]) => {
        const group = doc.createElement('div'), dt = doc.createElement('dt'), dd = doc.createElement('dd');
        dt.textContent = term; dd.textContent = value; group.append(dt, dd); summary.append(group);
      });
      const table = doc.createElement('table'); table.className = 'data-table';
      const caption = doc.createElement('caption'); caption.textContent = 'Calculated path inputs (same mission duration)'; table.append(caption);
      const head = doc.createElement('thead'), header = doc.createElement('tr');
      ['Path', 'Reliability (probability)', 'Failure (probability)'].forEach(text => { const th = doc.createElement('th'); th.scope = 'col'; th.textContent = text; header.append(th); });
      head.append(header); table.append(head);
      const body = doc.createElement('tbody');
      values.forEach((value, index) => {
        const row = doc.createElement('tr');
        [String(index + 1), String(value), String(Number((1 - value).toPrecision(15)))].forEach(text => { const cell = doc.createElement('td'); cell.textContent = text; row.append(cell); }); body.append(row);
      });
      table.append(body);
      details.replaceChildren(summary, table);
      report = [`Parallel System Reliability Calculator`, ...values.map((value, index) => `Path ${index + 1}: ${value} (probability)`), `System reliability: ${reliability}`, `All-path failure probability: ${failure}`, `Best single path: ${number(result.best * 100)}%`, `Gain: ${number(result.gain * 100)} percentage points`, 'Independent paths; at least one operates; all inputs use the same mission duration.', 'https://reliabilitybench.com/tools/parallel-system-reliability-calculator.html'].join('\n');
      copy.disabled = false; print.disabled = false; doc.body.setAttribute('data-parallel-ready', 'true');
      status.textContent = '';
    } catch (error) { clear(error.message); }
  });
  form.addEventListener('reset', event => {
    event.preventDefault(); count.value = '3'; renderPaths(sample); clear('Sample restored. Calculate to run the sample again.');
  });
  copy.addEventListener('click', async () => {
    if (!report) return;
    try { await navigator.clipboard.writeText(report); status.textContent = 'Inputs and results copied.'; }
    catch { status.textContent = 'Copy is unavailable. Select the result text or print the report.'; }
  });
  print.addEventListener('click', () => { if (report) window.print(); });
}

if (typeof document !== 'undefined') initParallel();
