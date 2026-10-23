export const RATE_UNITS = Object.freeze({
  hour: { divisor: 1, label: 'failures / device-hour' },
  million: { divisor: 1e6, label: 'failures / 10^6 device-hours' },
  fit: { divisor: 1e9, label: 'FIT (failures / 10^9 device-hours)' }
});
export const REPORT_URL = 'https://reliabilitybench.com/tools/failure-rate-calculator.html';
export const LIMITS = 'Same population, failure definition and operating conditions. Reciprocal MTBF is not guaranteed service life; an exponential lifetime interpretation needs a constant rate. Unit conversion adds no confidence or acceleration correction. Zero observed failures does not prove zero risk.';

function validNumber(value, name, positive = false) {
  if (typeof value !== 'number' || !Number.isFinite(value) || value < 0 || (positive && value === 0)) {
    throw new Error(`${name} must be a finite ${positive ? 'positive' : 'non-negative'} number.`);
  }
  return value;
}

export function parseNumeric(raw) {
  if (typeof raw !== 'string' || !raw.trim()) throw new Error('Complete every visible numeric input. Blank is not zero.');
  const text = raw.trim(), value = Number(text);
  if (!/^[+-]?(?:\d+(?:\.\d*)?|\.\d+)(?:e[+-]?\d+)?$/i.test(text) || !Number.isFinite(value)) {
    throw new Error('Enter a finite decimal number in every visible numeric input.');
  }
  if (value === 0 && /[1-9]/.test(text.split(/[eE]/)[0])) {
    throw new Error('An input is too small for browser arithmetic. It has not been treated as zero.');
  }
  return value;
}

export function analyzeFailureRate(input) {
  let hourly, inputs, basis, positiveSource;
  if (input?.mode === 'observed') {
    const failures = validNumber(input.failures, 'Failure count');
    if (!Number.isSafeInteger(failures)) throw new Error('Failure count must be a whole, safely representable number of events.');
    const hours = validNumber(input.hours, 'Total device-hours', true);
    hourly = failures / hours; positiveSource = failures > 0;
    inputs = [['Qualifying failures', `${failures} events`], ['Total operating exposure', `${hours} device-hours`]];
    basis = 'Observed failures / exposure (point estimate)';
  } else if (input?.mode === 'rate') {
    const rate = validNumber(input.rate, 'Known failure rate');
    if (!Object.hasOwn(RATE_UNITS, input.unit)) throw new Error('Choose an hourly, per-million-hour, or FIT rate unit.');
    hourly = rate / RATE_UNITS[input.unit].divisor; positiveSource = rate > 0;
    inputs = [['Known failure rate', `${rate} ${RATE_UNITS[input.unit].label}`]];
    basis = 'Known rate (unit conversion only)';
  } else if (input?.mode === 'mtbf') {
    const mtbf = validNumber(input.mtbf, 'MTBF', true);
    hourly = 1 / mtbf; positiveSource = true;
    inputs = [['Known MTBF', `${mtbf} hours`]];
    basis = 'Known MTBF (reciprocal conversion only)';
  } else throw new Error('Choose an input basis.');
  const million = hourly * 1e6, fit = hourly * 1e9, mtbf = hourly === 0 ? null : 1 / hourly;
  if (![hourly, million, fit].every(Number.isFinite) ||
      (positiveSource && (![hourly, million, fit, mtbf].every(value => Number.isFinite(value) && value > 0)))) {
    throw new Error('These values exceed the supported numeric range. No zero or unbounded conversion has been reported.');
  }
  const note = hourly === 0
    ? (input.mode === 'observed' ? 'Zero observed failures: zero point estimate only. No finite reciprocal MTBF can be estimated; this is not proof of zero risk or infinite life.' : 'A supplied zero rate has no finite reciprocal MTBF. This is a nominal input, not evidence of zero risk or infinite life.')
    : (input.mode === 'observed' ? 'Historical point estimate; the reciprocal does not establish a constant failure rate.' : 'Unit conversion only; keep the source assumptions and operating conditions.');
  return { hourly, million, fit, mtbf, inputs, basis, note };
}

export function formatRate(value) {
  if (value === null) return 'Not finite / not estimated';
  if (value === 0) return '0';
  return value < 1e-4 || value >= 1e9
    ? value.toExponential(6).replace(/\.?(0+)(e)/, '$2')
    : new Intl.NumberFormat('en-US', { maximumSignificantDigits: 7 }).format(value);
}

export function conversionRows(result) {
  return [
    ['Hourly failure rate', `${formatRate(result.hourly)} failures / device-hour`],
    ['Per million device-hours', `${formatRate(result.million)} failures / 10^6 device-hours`],
    ['FIT', `${formatRate(result.fit)} failures / 10^9 device-hours`],
    ['Reciprocal MTBF', result.mtbf === null ? 'No finite estimate' : `${formatRate(result.mtbf)} hours`]
  ];
}

export function failureRateReport(result) {
  return ['Failure Rate Calculator', `Input basis: ${result.basis}`,
    ...result.inputs.map(([key, value]) => `${key}: ${value}`),
    ...conversionRows(result).map(([key, value]) => `${key}: ${value}`),
    result.note, LIMITS, REPORT_URL].join('\n');
}

export function initFailureRate(doc = document) {
  const form = doc.querySelector('[data-calculator]');
  if (!form) return;
  const mode = doc.querySelector('#fr-mode'), output = doc.querySelector('[data-result]');
  const message = doc.querySelector('[data-result-message]'), details = doc.querySelector('[data-fr-details]');
  const copy = doc.querySelector('[data-copy-result]'), print = doc.querySelector('[data-print-result]');
  const status = doc.querySelector('[data-fr-status]');
  let report = '', revision = 0;
  function clear(text = 'Inputs changed. Calculate to update the result.') {
    revision++; report = ''; output.textContent = '—'; message.textContent = text;
    details.hidden = true; details.replaceChildren(); copy.disabled = print.disabled = true;
    status.textContent = ''; doc.body.removeAttribute('data-fr-ready');
  }
  function showMode() {
    doc.querySelectorAll('[data-mode-fields]').forEach(group => {
      group.hidden = group.dataset.modeFields !== mode.value;
      group.querySelectorAll('input, select').forEach(field => { field.disabled = group.hidden; });
    });
  }
  function numeric(id) {
    return parseNumeric(doc.querySelector(id).value);
  }
  form.addEventListener('input', () => clear());
  form.addEventListener('change', () => { showMode(); clear(); });
  form.addEventListener('invalid', () => clear('Check the highlighted input. Complete visible fields with valid non-negative numbers.'), true);
  form.addEventListener('submit', event => {
    event.preventDefault(); clear();
    try {
      const input = mode.value === 'observed' ? { mode: mode.value, failures: numeric('#fr-failures'), hours: numeric('#fr-hours') }
        : mode.value === 'rate' ? { mode: mode.value, rate: numeric('#fr-rate'), unit: doc.querySelector('#fr-unit').value }
          : { mode: mode.value, mtbf: numeric('#fr-mtbf') };
      const result = analyzeFailureRate(input);
      output.textContent = formatRate(result.hourly); message.textContent = result.note;
      const heading = doc.createElement('h2'); heading.textContent = 'Current conversion report';
      const basis = doc.createElement('p'); basis.textContent = `Input basis: ${result.basis}`;
      const summary = doc.createElement('dl'); summary.className = 'fr-summary';
      [...result.inputs, ...conversionRows(result)].forEach(([term, value]) => {
        const group = doc.createElement('div'), dt = doc.createElement('dt'), dd = doc.createElement('dd');
        dt.textContent = term; dd.textContent = value; group.append(dt, dd); summary.append(group);
      });
      const note = doc.createElement('p'); note.textContent = `${result.note} ${LIMITS}`;
      details.replaceChildren(heading, basis, summary, note); details.hidden = false;
      report = failureRateReport(result); copy.disabled = print.disabled = false;
      doc.body.setAttribute('data-fr-ready', 'true');
    } catch (error) { clear(error.message); }
  });
  form.addEventListener('reset', event => {
    event.preventDefault(); mode.value = 'observed';
    [['#fr-failures', '12'], ['#fr-hours', '6000'], ['#fr-rate', '250'], ['#fr-unit', 'fit'], ['#fr-mtbf', '4000000']]
      .forEach(([id, value]) => { doc.querySelector(id).value = value; });
    showMode(); clear('Sample restored. Calculate to run it again.');
  });
  copy.addEventListener('click', async () => {
    if (!report) return;
    const currentRevision = revision;
    try {
      await navigator.clipboard.writeText(report);
      if (revision === currentRevision) status.textContent = 'Current inputs, units and results copied.';
    } catch {
      if (revision === currentRevision) status.textContent = 'Copy unavailable. Select the report text or use Print report.';
    }
  });
  print.addEventListener('click', () => { if (report) window.print(); });
  showMode();
}

if (typeof document !== 'undefined') initFailureRate();
