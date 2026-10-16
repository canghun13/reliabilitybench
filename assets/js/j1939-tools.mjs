import { filterCheck, diagnosticPayload, bamAudit, claimAudit, hex } from './j1939-core.mjs';

const form = document.querySelector('[data-j1939-form]');
const output = document.querySelector('[data-j1939-output]');
const status = document.querySelector('[data-j1939-status]');
const report = document.querySelector('[data-j1939-report]');
const reportDetails = report.closest('details');
const copy = document.querySelector('[data-j1939-copy]');
const print = document.querySelector('[data-j1939-print]');
const mode = document.body.dataset.j1939;
let currentReport = '';
let generation = 0;
let reportWasOpen = false;

function element(tag, text, parent) {
  const node = document.createElement(tag);
  if (text !== undefined) node.textContent = text;
  if (parent) parent.append(node);
  return node;
}
function paragraph(text) { element('p', text, output); }
function section(title) { element('h3', title, output); }
function table(headers, rows) {
  if (!rows.length) { paragraph('None observed in the supplied input.'); return; }
  const region = element('div', undefined, output);
  region.className = 'j1939-table-wrap'; region.tabIndex = 0; region.setAttribute('role', 'region'); region.setAttribute('aria-label', headers.join(', '));
  const tableNode = element('table', undefined, region), head = element('thead', undefined, tableNode), headRow = element('tr', undefined, head);
  headers.forEach(text => { const th = element('th', text, headRow); th.scope = 'col'; });
  const body = element('tbody', undefined, tableNode);
  let shortened = false;
  rows.slice(0, 200).forEach(cells => {
    const row = element('tr', undefined, body);
    cells.forEach(text => {
      const value = text == null ? 'Unavailable / withheld' : String(text);
      if (value.length > 480) shortened = true;
      element('td', value.length > 480 ? `${value.slice(0, 480)}… [full value in report]` : value, row);
    });
  });
  if (rows.length > 200) paragraph(`Showing 200 of ${rows.length} rows. Copy result includes the complete bounded result.`);
  if (shortened) paragraph('Long table cells are shortened on screen. The plain-text report and Copy retain the full values.');
}
function invalidate(message = 'Inputs changed. Run the analysis to create a current result.') {
  generation += 1; currentReport = ''; report.textContent = ''; reportDetails.open = false; output.replaceChildren();
  status.textContent = message; status.classList.remove('j1939-error');
  copy.disabled = true; print.disabled = true;
  document.body.classList.remove('j1939-ready');
}
function render(result) {
  if (mode === 'filter') {
    status.textContent = `${result.matches} of ${result.rows.length} IDs match`;
    paragraph(`PGN ${result.base.pgn} (0x${hex(result.base.pgn, 5)}), ${result.base.pdu1 ? 'PDU1: PS is destination' : 'PDU2: PS is group extension'}. Source 0x${hex(result.base.sa)}; priority ${result.base.priority}.`);
    element('pre', `Mask  0x${result.mask}\nValue 0x${result.value}\n(received ID & mask) === value`, output);
    if (result.base.reserved) paragraph('Reserved/page bit 25 is set. The mask preserves it; confirm the protocol revision and logger format.');
    table(['CAN ID (hex)', 'PGN (decimal)', 'SA (hex)', 'Priority', 'PS (hex)', 'Match', 'Different fields'], result.rows.map(row => [row.canId, row.pgn, row.source, row.priority, row.ps, row.matches ? 'Yes' : 'No', row.differences]));
    paragraph('This is a 29-bit mathematical match test, not ready-to-install controller configuration. IDE/extended-frame flags and driver mask semantics must be checked separately.');
  } else if (mode === 'dm1') {
    status.textContent = result.noDtcMarker ? 'No-DTC marker observed' : `${result.codes.length} DTC records`;
    paragraph(`${result.length} supplied bytes; ${result.padding} trailing single-frame padding bytes excluded. A no-DTC marker is not proof that the equipment is healthy.`);
    section('Raw lamp fields'); table(['Lamp', 'Status', 'Flash'], result.lamps.map(lamp => [lamp.name, `${lamp.status}: ${lamp.statusText}`, `${lamp.flash}: ${lamp.flashText}`]));
    section('Diagnostic records'); table(['Record', 'Raw bytes', 'SPN', 'FMI', 'OC', 'CM', 'Interpretation'], result.codes.map(code => [code.record, code.bytes, code.spn, code.fmi, code.oc, code.cm, code.note]));
    result.warnings.forEach(paragraph);
    paragraph('Numeric fields only: no proprietary SPN lookup, P-code conversion, repair recommendation, DTC clearing, or dashboard-lamp aggregation. Retain the original source address alongside this payload.');
  } else if (mode === 'bam') {
    const complete = result.sessions.filter(session => session.payload !== null).length;
    status.textContent = `${complete} complete / ${result.sessions.length} BAM sessions`;
    paragraph(`${result.frames} frames read; ${result.ignored} unrelated frames; ${result.unsupported} directed or unsupported TP frames not analyzed. No timestamp-based timeout or compliance verdict is applied.`);
    table(['Start–end row', 'Bus / SA', 'Target PGN', 'Bytes', 'Packets unique / announced', 'Result'], result.sessions.map(session => [`${session.startRow}–${session.endRow}`, `${session.bus} / ${session.source}`, session.pgn, session.length, `${session.receivedPackets} / ${session.announcedPackets}`, session.status]));
    result.sessions.slice(0, 200).forEach(session => {
      section(`Row ${session.startRow} · ${session.bus} / ${session.source} · PGN ${session.pgn}`);
      if (session.payload !== null) element('pre', session.payload, output);
      else {
        paragraph(session.issues.slice(0, 50).join('; '));
        if (session.issues.length > 50) paragraph(`${session.issues.length - 50} additional findings are included in the full report.`);
      }
    });
    if (result.sessions.length > 200) paragraph('Session details are limited to the first 200 on screen; Copy includes every result.');
    if (result.events.length || result.warnings.length) { section('Capture findings'); table(['Finding'], [...result.events, ...result.warnings].map(text => [text])); }
    paragraph('Only an internally consistent observed sequence gets a payload. Missing bytes are never invented. Capture loss, logger duplication and actual bus errors cannot be distinguished here; retain and review the original trace.');
  } else {
    const conflicts = result.groups.filter(group => group.potentialConflict).length;
    status.textContent = `${conflicts} address groups need review`;
    paragraph(`${result.frames} frames; ${result.claims.length} claim events; ${result.ignored} unrelated frames; ${result.cannotClaim} Cannot Claim events. Different NAMEs at one address across a capture window are potential contention or sequential reuse, not proof of simultaneous collision.`);
    section('Observed address groups');
    table(['Bus / SA', 'Distinct NAMEs', 'Rows', 'Review', 'Lowest observed NAME'], result.groups.map(group => [`${group.bus} / ${group.source}`, group.names.join(', '), group.rows.join(', '), group.potentialConflict ? 'Multiple identities — review timeline' : 'One identity observed', group.lowestObservedName]));
    section('Same NAME at different addresses');
    table(['Bus', 'NAME', 'Addresses (hex)', 'Rows'], result.movements.map(move => [move.bus, move.name, move.addresses.join(', '), move.rows.join(', ')]));
    section('Claim event history');
    table(['Row / time (s)', 'Bus / SA', 'NAME (hex)', 'Kind', 'Identity / manufacturer', 'ECU / function instance', 'Function / system / system instance', 'Industry / AAC / reserved'], result.claims.map(claim => [`${claim.row} / ${claim.time ?? 'not supplied'}`, `${claim.bus} / ${claim.source}`, claim.name, claim.kind, `${claim.identity} / ${claim.manufacturer}`, `${claim.ecuInstance} / ${claim.functionInstance}`, `${claim.function} / ${claim.vehicleSystem} / ${claim.vehicleSystemInstance}`, `${claim.industryGroup} / ${claim.arbitraryAddressCapable} / ${claim.reserved}`]));
    if (result.warnings.length) { section('Capture findings'); table(['Finding'], result.warnings.map(text => [text])); }
    paragraph('The lower numeric NAME has arbitration priority, but this passive capture cannot establish successful ownership, settlement timing, physical ECU count, or a safe replacement address. Address movement may be legitimate; no configuration changes are recommended.');
  }
}

form.addEventListener('input', () => invalidate());
form.addEventListener('change', () => invalidate());
form.addEventListener('reset', () => invalidate('Sample inputs restored. Run to analyze them.'));
form.addEventListener('submit', event => {
  event.preventDefault(); invalidate();
  try {
    const data = new FormData(form), inputs = Object.fromEntries(data);
    let result;
    if (mode === 'filter') {
      const options = { source: data.has('source'), priority: data.has('priority'), destination: data.has('destination') };
      inputs.matchOptions = options;
      result = filterCheck(data.get('target'), data.get('comparisons'), options);
    }
    else if (mode === 'dm1') result = diagnosticPayload(data.get('payload'));
    else if (mode === 'bam') result = bamAudit(data.get('capture'));
    else result = claimAudit(data.get('capture'));
    render(result);
    const inputReport = Object.entries(inputs).map(([name, value]) => `${name}:\n${typeof value === 'string' ? value : JSON.stringify(value, null, 2)}`).join('\n\n');
    currentReport = `${document.querySelector('h1').textContent}\n${location.href}\n\nINPUTS\n${inputReport}\n\nRESULTS\n${JSON.stringify(result, null, 2)}\n\nLIMITS\nPassive interpretation of supplied bytes only. No equipment connection, safety clearance, protocol certification, proprietary fault lookup or proof of capture completeness. Time, where supplied, is seconds. IDs, NAMEs and displayed byte strings are hexadecimal; PGNs and decoded fields are decimal unless marked otherwise.`;
    report.textContent = currentReport; copy.disabled = false; print.disabled = false;
    document.body.classList.add('j1939-ready');
  } catch (error) {
    status.textContent = error.message; status.classList.add('j1939-error');
  }
});
copy.addEventListener('click', async () => {
  if (!currentReport) return;
  const snapshot = currentReport, revision = generation;
  try {
    await navigator.clipboard.writeText(snapshot);
    if (generation === revision) status.textContent = 'Current result copied';
  } catch {
    if (generation === revision) {
      reportDetails.open = true; report.focus(); status.textContent = 'Clipboard unavailable. Select and copy the plain-text report below.';
    }
  }
});
print.addEventListener('click', () => { if (currentReport) window.print(); });
window.addEventListener('beforeprint', () => {
  reportWasOpen = reportDetails.open;
  if (!currentReport) document.body.classList.remove('j1939-ready');
  else reportDetails.open = true;
});
window.addEventListener('afterprint', () => { reportDetails.open = currentReport ? reportWasOpen : false; });
invalidate('Sample ready. Run to analyze; no result is calculated until requested.');
