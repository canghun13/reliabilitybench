(() => {
  const form = document.querySelector('[data-workflow-form]');
  if (!form) return;
  form.noValidate = true;
  const tool = document.body.dataset.workflow;
  const score = document.querySelector('[data-workflow-score]');
  const output = document.querySelector('[data-workflow-output]');
  const esc = value => String(value).replace(/[&<>"']/g, char => ({'&':'&amp;','<':'&lt;','>':'&gt;','"':'&quot;',"'":'&#39;'}[char]));
  const num = name => Number(form.elements[name]?.value);
  const checked = name => Boolean(form.elements[name]?.checked);
  const set = (headline, html) => { score.textContent = headline; output.innerHTML = html; };
  const invalid = message => set('Check inputs', `<p>${esc(message)}</p><p>No readiness or quality decision has been made.</p>`);
  const band = value => value >= 90 ? 'Ready for controlled use' : value >= 70 ? 'Review before use' : 'Remediation required';
  const list = value => [...new Set(value.split(/[\n,;]+/).map(item => item.trim()).filter(Boolean))];

  const handlers = {
    assetRegister() {
      const total = num('total');
      const fields = [['uniqueId','Unique asset ID'],['hierarchy','Parent and location'],['makeModel','Make and model'],['criticality','Criticality class'],['installDate','Installation date'],['pmAssignment','PM assignment']];
      if (!Number.isInteger(total) || total < 1 || total > 1000000) return invalid('Total assets must be a whole number from 1 to 1,000,000.');
      const rows = fields.map(([name,label]) => ({label,value:num(name)}));
      if (rows.some(row => !Number.isInteger(row.value) || row.value < 0 || row.value > total)) return invalid('Every completed-field count must be a whole number between zero and total assets.');
      const percentages = rows.map(row => row.value / total * 100);
      const readiness = percentages.reduce((sum,value) => sum + value, 0) / percentages.length;
      const priorities = rows.map((row,index) => ({...row,gap:total-row.value,pct:percentages[index]})).filter(row => row.gap).sort((a,b) => b.gap-a.gap);
      set(`${readiness.toFixed(0)}% · ${band(readiness)}`, `<p>Unweighted completeness across six declared fields. It is a screening result, not proof that values are accurate.</p><table><thead><tr><th>Field</th><th>Complete</th><th>Gap</th></tr></thead><tbody>${rows.map((row,index)=>`<tr><td>${row.label}</td><td>${percentages[index].toFixed(1)}%</td><td>${total-row.value}</td></tr>`).join('')}</tbody></table><h3>Next action</h3>${priorities.length?`<ol>${priorities.slice(0,3).map(row=>`<li>Verify ${row.gap} records missing ${row.label.toLowerCase()}.</li>`).join('')}</ol>`:'<p>Sample records against source documents and confirm duplicate IDs, hierarchy accuracy, and current maintenance status before approval.</p>'}`);
    },
    assetId() {
      const names = ['site','area','system','type'];
      const tokens = Object.fromEntries(names.map(name => [name, form.elements[name].value.trim().toUpperCase()]));
      const delimiter = form.elements.delimiter.value;
      const start = num('start'), count = num('count'), pad = num('pad');
      if (Object.values(tokens).some(value => !/^[A-Z0-9]+$/.test(value))) return invalid('Site, area, system, and asset-type codes must contain only letters and numbers.');
      if (![start,count,pad].every(Number.isInteger) || start < 0 || count < 1 || count > 100 || pad < 2 || pad > 6) return invalid('Use whole numbers: start at zero or higher, generate 1–100 IDs, and choose 2–6 sequence digits.');
      const ids = Array.from({length:count},(_,index)=>[tokens.site,tokens.area,tokens.system,tokens.type,String(start+index).padStart(pad,'0')].join(delimiter));
      if (ids.some(id => id.length > 64)) return invalid('Generated IDs exceed 64 characters. Shorten the component codes.');
      set(`${count} valid ID${count===1?'':'s'}`, `<p>Pattern: <strong>${esc(['SITE','AREA','SYSTEM','TYPE','SEQUENCE'].join(delimiter))}</strong>. Confirm the pattern against your CMMS field length and governance rules.</p><code>${esc(ids.join('\n'))}</code><h3>Release checks</h3><ul><li>Confirm every ID is unique against the live register.</li><li>Do not encode attributes likely to change, such as owner or current condition.</li><li>Keep aliases in a separate field instead of changing the stable ID.</li></ul>`);
    },
    workOrder() {
      const boxes = [...form.querySelectorAll('input[type="checkbox"][data-quality-item]')];
      const complete = boxes.filter(box => box.checked);
      const note = form.elements.note.value.trim();
      let noteScore = note.length >= 30 ? 8 : note.length >= 12 ? 4 : 0;
      if (/replac|repair|adjust|clean|inspect|test|reset|tighten|lubricat/i.test(note)) noteScore += 4;
      if (/because|caus|due to|found|worn|leak|fault|failed/i.test(note)) noteScore += 4;
      if (/verified|tested|monitor|follow|return|next|no recurrence/i.test(note)) noteScore += 4;
      const quality = complete.length * 10 + noteScore;
      const missing = boxes.filter(box => !box.checked).map(box => box.dataset.label);
      const recordBand = missing.length ? (quality < 70 ? 'Remediation required' : 'Review before use') : band(quality);
      const noteGaps = [];
      if (note.length < 30) noteGaps.push('describe the finding and action with at least one specific sentence');
      if (!/replac|repair|adjust|clean|inspect|test|reset|tighten|lubricat/i.test(note)) noteGaps.push('state the action performed');
      if (!/because|caus|due to|found|worn|leak|fault|failed/i.test(note)) noteGaps.push('state the observed or probable cause');
      if (!/verified|tested|monitor|follow|return|next|no recurrence/i.test(note)) noteGaps.push('state verification or follow-up');
      set(`${quality}% · ${recordBand}`, `<p>Record-quality screen: 80 points for eight declared fields and 20 points for note specificity. It does not verify repair correctness.</p><h3>Missing record elements</h3>${missing.length?`<ul>${missing.map(item=>`<li>${esc(item)}</li>`).join('')}</ul>`:'<p>All declared structured fields are present.</p>'}<h3>Closeout note review</h3>${noteGaps.length?`<ul>${noteGaps.map(item=>`<li>${esc(item)}</li>`).join('')}</ul>`:'<p>The note includes an action, a finding or cause, and verification or follow-up language.</p>'}`);
    },
    failureTaxonomy() {
      const groups = [['problem','Problem / symptom'],['cause','Cause'],['remedy','Remedy / action']].map(([name,label]) => ({name,label,items:list(form.elements[name].value)}));
      if (groups.some(group => group.items.length < 1)) return invalid('Enter at least one problem, cause, and remedy category.');
      if (groups.some(group => group.items.length > 20)) return invalid('Limit each list to 20 categories so the taxonomy stays usable in field selection lists.');
      const duplicates = groups.flatMap(group => group.items.filter((item,index,all)=>all.findIndex(value=>value.toLowerCase()===item.toLowerCase())!==index));
      const rows = groups.map(group => `<h3>${group.label}</h3><table><thead><tr><th>Code</th><th>Label</th></tr></thead><tbody>${group.items.map((item,index)=>`<tr><td>${group.name[0].toUpperCase()}${String(index+1).padStart(2,'0')}</td><td>${esc(item)}</td></tr>`).join('')}</tbody></table>`).join('');
      const total = groups.reduce((sum,group)=>sum+group.items.length,0);
      set(`${total} controlled values`, `<p>Three separate pick lists preserve the distinction between what was observed, why it happened, and what was done. Combinations are not automatically declared valid.</p>${rows}<h3>Governance check</h3><p>${duplicates.length?'Remove duplicate or near-duplicate wording before release.':'No exact duplicate labels were found. Pilot the lists with technicians and add definitions before import.'}</p>`);
    },
    migration() {
      const boxes = [...form.querySelectorAll('input[type="checkbox"][data-phase]')];
      const assets = num('assets');
      const goLive = form.elements.goLive.value;
      if (!Number.isInteger(assets) || assets < 1 || assets > 10000000) return invalid('Asset count must be a whole number from 1 to 10,000,000.');
      if (!goLive || Number.isNaN(Date.parse(goLive))) return invalid('Choose a valid target go-live date.');
      const done = boxes.filter(box=>box.checked).length;
      const readiness = done / boxes.length * 100;
      const missing = boxes.filter(box=>!box.checked);
      const phases = ['Governance','Clean and map','Test and reconcile','Cutover'];
      const plan = phases.map(phase => ({phase,items:missing.filter(box=>box.dataset.phase===phase).map(box=>box.dataset.label)})).filter(group=>group.items.length);
      const critical = missing.filter(box=>box.dataset.blocker==='true').map(box=>box.dataset.label);
      set(`${readiness.toFixed(0)}% · ${critical.length?'Hold go-live':band(readiness)}`, `<p>${done} of ${boxes.length} readiness gates are complete for a declared scope of ${assets.toLocaleString('en-US')} assets and target date ${esc(goLive)}.</p><h3>Blocking gaps</h3>${critical.length?`<ul>${critical.map(item=>`<li>${esc(item)}</li>`).join('')}</ul>`:'<p>No declared blocking gate is open. Retain evidence and approvals.</p>'}<h3>Remediation plan</h3>${plan.length?plan.map(group=>`<p><strong>${group.phase}:</strong> ${group.items.map(esc).join('; ')}.</p>`).join(''):'<p>Run a controlled final export, reconcile record counts and critical fields, approve rollback, then release the cutover window.</p>'}<p>Dates and effort are not auto-estimated; assign owners and durations using local system, vendor, and change-control constraints.</p>`);
    }
  };

  const run = () => handlers[tool]?.();
  form.addEventListener('submit', event => { event.preventDefault(); run(); });
  form.addEventListener('reset', () => setTimeout(run));
  document.querySelector('[data-copy-workflow]')?.addEventListener('click', async () => {
    try { await navigator.clipboard.writeText(`${score.textContent}\n${output.innerText}`); }
    catch { output.insertAdjacentHTML('afterbegin','<p>Copy is unavailable in this browser.</p>'); }
  });
  run();
})();
