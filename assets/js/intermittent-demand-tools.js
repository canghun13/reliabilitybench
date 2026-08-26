(() => {
  const EPS = 1e-12;
  const mean = values => values.reduce((sum, value) => sum + value, 0) / values.length;
  const fmt = value => Number(value).toLocaleString('en-US', { maximumFractionDigits: 4 });

  function parseDemandSeries(raw, minimum = 6, maximum = 240) {
    const tokens = String(raw || '').split(/[\s,;|]+/).filter(Boolean);
    if (tokens.length < minimum || tokens.length > maximum) throw new Error(`Enter ${minimum}–${maximum} equally spaced demand values.`);
    const values = tokens.map(Number);
    if (values.some(value => !Number.isFinite(value) || value < 0)) throw new Error('Demand values must be finite numbers of zero or more.');
    return values;
  }

  function demandPattern(values) {
    const nonzero = values.filter(value => value > 0);
    if (nonzero.length < 2) return { sufficient: false, periods: values.length, nonzero: nonzero.length };
    const adi = values.length / nonzero.length;
    const nzMean = mean(nonzero);
    const variance = nonzero.reduce((sum, value) => sum + (value - nzMean) ** 2, 0) / nonzero.length;
    const cv2 = variance / (nzMean ** 2);
    const highAdi = adi >= 1.32;
    const highCv2 = cv2 >= 0.49;
    const classification = highAdi ? (highCv2 ? 'Lumpy' : 'Intermittent') : (highCv2 ? 'Erratic' : 'Smooth');
    return { sufficient: true, periods: values.length, nonzero: nonzero.length, zeroShare: 1 - nonzero.length / values.length, adi, cv2, classification, nonzeroMean: nzMean };
  }

  function croston(values, alpha = 0.1, beta = alpha, variant = 'croston') {
    if (!(alpha > 0 && alpha <= 1) || !(beta > 0 && beta <= 1)) throw new Error('Smoothing values must be greater than 0 and no more than 1.');
    const first = values.findIndex(value => value > 0);
    if (first < 0) throw new Error('At least one nonzero demand is required.');
    let size = values[first];
    if (variant === 'tsb') {
      let probability = 1 / (first + 1);
      for (let t = first + 1; t < values.length; t += 1) {
        const occurred = values[t] > 0 ? 1 : 0;
        probability += beta * (occurred - probability);
        if (occurred) size += alpha * (values[t] - size);
      }
      return { forecast: size * probability, size, probability, interval: 1 / probability };
    }
    let interval = first + 1;
    let last = first;
    for (let t = first + 1; t < values.length; t += 1) {
      if (values[t] > 0) {
        size += alpha * (values[t] - size);
        interval += alpha * ((t - last) - interval);
        last = t;
      }
    }
    const base = size / interval;
    return { forecast: variant === 'sba' ? (1 - alpha / 2) * base : base, size, interval };
  }

  function forecastMethods(values, alpha = 0.1, beta = 0.1) {
    return {
      historicalMean: mean(values),
      croston: croston(values, alpha, alpha, 'croston').forecast,
      sba: croston(values, alpha, alpha, 'sba').forecast,
      tsb: croston(values, alpha, beta, 'tsb').forecast
    };
  }

  function rollingBacktest(values, initial, alpha = 0.1, beta = 0.1) {
    if (!Number.isInteger(initial) || initial < 6 || initial >= values.length) throw new Error('Initial training periods must be a whole number from 6 to one less than the series length.');
    const names = ['historicalMean', 'croston', 'sba', 'tsb'];
    const results = Object.fromEntries(names.map(name => [name, { absolute: 0, bias: 0, forecasts: [] }]));
    for (let origin = initial; origin < values.length; origin += 1) {
      const training = values.slice(0, origin);
      if (!training.some(value => value > 0)) throw new Error(`No nonzero demand exists before test period ${origin + 1}. Increase the training window or add valid history.`);
      const forecasts = forecastMethods(training, alpha, beta);
      names.forEach(name => {
        const error = forecasts[name] - values[origin];
        results[name].absolute += Math.abs(error);
        results[name].bias += error;
        results[name].forecasts.push(forecasts[name]);
      });
    }
    const tests = values.length - initial;
    names.forEach(name => {
      results[name].mae = results[name].absolute / tests;
      results[name].meanBias = results[name].bias / tests;
    });
    const ranking = [...names].sort((a, b) => results[a].mae - results[b].mae || Math.abs(results[a].meanBias) - Math.abs(results[b].meanBias));
    return { tests, results, ranking };
  }

  function parseDelimitedRows(raw, columns, minimum = 4, maximum = 120) {
    const lines = String(raw || '').split(/\r?\n/).map(line => line.trim()).filter(Boolean);
    if (lines.length < minimum || lines.length > maximum) throw new Error(`Enter ${minimum}–${maximum} rows.`);
    return lines.map((line, index) => {
      const fields = line.split('|').map(value => value.trim());
      if (fields.length !== columns || fields.some(value => value === '')) throw new Error(`Row ${index + 1} must contain ${columns} nonblank fields separated by |.`);
      return fields;
    });
  }

  function censoringAudit(raw) {
    const rows = parseDelimitedRows(raw, 2, 6, 120).map((fields, index) => {
      const sales = Number(fields[0]);
      const flag = fields[1].toLowerCase();
      if (!Number.isFinite(sales) || sales < 0) throw new Error(`Row ${index + 1} sales must be a finite number of zero or more.`);
      if (!['yes', 'no', 'y', 'n', '1', '0'].includes(flag)) throw new Error(`Row ${index + 1} stockout flag must be Yes or No.`);
      return { period: index + 1, sales, censored: ['yes', 'y', '1'].includes(flag) };
    });
    const flagged = rows.filter(row => row.censored);
    let longestRun = 0;
    let currentRun = 0;
    rows.forEach(row => { currentRun = row.censored ? currentRun + 1 : 0; longestRun = Math.max(longestRun, currentRun); });
    return {
      rows,
      flagged,
      censoredShare: flagged.length / rows.length,
      ambiguousZeros: flagged.filter(row => row.sales === 0).length,
      longestRun,
      observedSales: rows.reduce((sum, row) => sum + row.sales, 0)
    };
  }

  function fvaAudit(raw) {
    const rows = parseDelimitedRows(raw, 3, 4, 120).map((fields, index) => {
      const values = fields.map(Number);
      if (values.some(value => !Number.isFinite(value) || value < 0)) throw new Error(`Row ${index + 1} must contain three finite numbers of zero or more.`);
      const [baseline, final, actual] = values;
      return { period: index + 1, baseline, final, actual, overridden: Math.abs(baseline - final) > EPS };
    });
    const summarize = selected => {
      const baseErrors = selected.map(row => row.baseline - row.actual);
      const finalErrors = selected.map(row => row.final - row.actual);
      const baselineMae = mean(baseErrors.map(Math.abs));
      const finalMae = mean(finalErrors.map(Math.abs));
      return {
        baselineMae,
        finalMae,
        fva: baselineMae - finalMae,
        relative: baselineMae > EPS ? (baselineMae - finalMae) / baselineMae : null,
        baselineBias: mean(baseErrors),
        finalBias: mean(finalErrors)
      };
    };
    const overrides = rows.filter(row => row.overridden);
    const wins = overrides.filter(row => Math.abs(row.final - row.actual) < Math.abs(row.baseline - row.actual)).length;
    const losses = overrides.filter(row => Math.abs(row.final - row.actual) > Math.abs(row.baseline - row.actual)).length;
    return { rows, overrides, all: summarize(rows), changed: overrides.length ? summarize(overrides) : null, wins, losses, ties: overrides.length - wins - losses };
  }

  const api = { parseDemandSeries, demandPattern, croston, forecastMethods, rollingBacktest, censoringAudit, fvaAudit };
  if (typeof module !== 'undefined' && module.exports) module.exports = api;
  if (typeof window !== 'undefined') window.ReliabilityBenchIntermittentDemand = api;
  if (typeof document === 'undefined') return;

  const form = document.querySelector('[data-demand-form]');
  if (!form) return;
  form.noValidate = true;
  const tool = document.body.dataset.demandTool;
  const score = document.querySelector('[data-workflow-score]');
  const output = document.querySelector('[data-workflow-output]');
  const esc = value => String(value).replace(/[&<>"']/g, char => ({ '&': '&amp;', '<': '&lt;', '>': '&gt;', '"': '&quot;', "'": '&#39;' }[char]));
  const field = name => String(form.elements[name]?.value ?? '').trim();
  const number = name => Number(form.elements[name]?.value);
  const set = (headline, html) => { score.textContent = headline; output.innerHTML = html; };
  const invalid = message => set('Check inputs', `<p>${esc(message)}</p><p>No forecast or inventory decision has been made.</p>`);
  const methodLabel = { historicalMean: 'Historical mean', croston: 'Croston', sba: 'SBA', tsb: 'TSB' };

  const handlers = {
    pattern() {
      const values = parseDemandSeries(field('series'), 6);
      const result = demandPattern(values);
      if (!result.sufficient) return set('Insufficient nonzero demand', `<p>${result.nonzero} nonzero period was found in ${result.periods} periods. At least two nonzero observations are required to calculate nonzero-size variability.</p><h3>Next action</h3><p>Do not force an ADI/CV² class. Review installed base, stockout censoring, supersession, and engineering demand drivers.</p>`);
      set(`${result.classification} pattern`, `<p>${result.nonzero} of ${result.periods} periods contain demand; zero-demand share is ${(result.zeroShare * 100).toFixed(1)}%.</p><table><thead><tr><th>Measure</th><th>Result</th><th>Declared convention</th></tr></thead><tbody><tr><td>ADI</td><td>${fmt(result.adi)}</td><td>${result.adi >= 1.32 ? '≥ 1.32' : '< 1.32'}</td></tr><tr><td>CV² of nonzero sizes</td><td>${fmt(result.cv2)}</td><td>${result.cv2 >= 0.49 ? '≥ 0.49' : '< 0.49'}</td></tr><tr><td>Mean nonzero size</td><td>${fmt(result.nonzeroMean)}</td><td>Observed units per demand occurrence</td></tr></tbody></table><h3>Next decision</h3><p>Use this descriptive class to challenge a model choice, not to select one automatically. Check censoring and backtest candidate methods before releasing a baseline.</p>`);
    },
    forecast() {
      const values = parseDemandSeries(field('series'), 6);
      if (values.filter(value => value > 0).length < 2) throw new Error('At least two nonzero demand observations are required.');
      const alpha = number('alpha');
      const beta = number('beta');
      const horizon = number('horizon');
      if (!Number.isInteger(horizon) || horizon < 1 || horizon > 60) throw new Error('Forecast horizon must be a whole number from 1 to 60 periods.');
      const methods = forecastMethods(values, alpha, beta);
      set(`${fmt(methods.sba)} units/period SBA baseline`, `<p>These are level forecasts, not order quantities or service guarantees. Over ${horizon} periods, the SBA baseline totals ${fmt(methods.sba * horizon)} units.</p><table><thead><tr><th>Method</th><th>Per-period baseline</th><th>${horizon}-period total</th></tr></thead><tbody>${Object.entries(methods).map(([name, value]) => `<tr><td>${methodLabel[name]}</td><td>${fmt(value)}</td><td>${fmt(value * horizon)}</td></tr>`).join('')}</tbody></table><h3>Next decision</h3><p>Backtest these methods on held-out periods. Use TSB's decaying occurrence probability as an obsolescence review signal only; it does not prove an item obsolete.</p>`);
    },
    backtest() {
      const values = parseDemandSeries(field('series'), 12);
      if (values.filter(value => value > 0).length < 3) throw new Error('At least three nonzero observations are required for this backtest.');
      const result = rollingBacktest(values, number('initial'), number('alpha'), number('beta'));
      const winner = result.ranking[0];
      set(`${methodLabel[winner]} has the lowest MAE`, `<p>${result.tests} one-step-ahead forecasts were generated using only history available at each origin. A single short series can still produce an unstable ranking.</p><table><thead><tr><th>Method</th><th>MAE</th><th>Mean bias</th><th>Rank</th></tr></thead><tbody>${result.ranking.map((name, index) => `<tr><td>${methodLabel[name]}</td><td>${fmt(result.results[name].mae)}</td><td>${fmt(result.results[name].meanBias)}</td><td>${index + 1}</td></tr>`).join('')}</tbody></table><h3>Next decision</h3><p>Prefer no method solely from one SKU. Repeat across comparable items and horizons, inspect bias and operational cost, and retain the historical mean when a complex method does not beat it.</p>`);
    },
    censoring() {
      const result = censoringAudit(field('rows'));
      if (!result.flagged.length) return set('No declared stockout periods', `<p>All ${result.rows.length} rows are marked uncensored. This does not prove availability was complete; verify the flag against inventory and lost-demand evidence.</p><h3>Next action</h3><p>If the availability record is reliable, continue to pattern classification and rolling validation.</p>`);
      set(`${result.flagged.length} censored period${result.flagged.length === 1 ? '' : 's'} found`, `<p>${(result.censoredShare * 100).toFixed(1)}% of the history is marked as stocked out; the longest run is ${result.longestRun} period${result.longestRun === 1 ? '' : 's'}. Observed sales of ${fmt(result.observedSales)} do not include unobserved demand.</p><table><thead><tr><th>Flagged periods</th><th>Sales shown</th></tr></thead><tbody>${result.flagged.map(row => `<tr><td>${row.period}</td><td>${fmt(row.sales)}</td></tr>`).join('')}</tbody></table><h3>Interpretation boundary</h3><p>${result.ambiguousZeros} flagged period${result.ambiguousZeros === 1 ? '' : 's'} also shows zero sales. Do not convert those rows into confirmed zero demand or impute lost demand with an arbitrary uplift. Recover requests, backorders, substitutions, downtime calls, or stockout timing before model approval.</p>`);
    },
    fva() {
      const result = fvaAudit(field('rows'));
      if (!result.overrides.length) return set('No effective overrides', `<p>Baseline and final forecasts are identical in all ${result.rows.length} rows, so judgmental forecast value added cannot be evaluated.</p><h3>Next action</h3><p>Retain this as a no-override baseline or enter periods where the released forecast actually differed.</p>`);
      const changed = result.changed;
      const direction = changed.fva > EPS ? 'added value' : changed.fva < -EPS ? 'reduced accuracy' : 'was neutral';
      const relative = changed.relative === null ? 'not defined because baseline MAE is zero' : `${(changed.relative * 100).toFixed(1)}%`;
      set(`Overrides ${direction}`, `<p>${result.overrides.length} of ${result.rows.length} periods were changed: ${result.wins} improved, ${result.losses} worsened, and ${result.ties} tied on absolute error.</p><table><thead><tr><th>Scope</th><th>Baseline MAE</th><th>Final MAE</th><th>FVA</th></tr></thead><tbody><tr><td>Changed periods</td><td>${fmt(changed.baselineMae)}</td><td>${fmt(changed.finalMae)}</td><td>${fmt(changed.fva)} (${relative})</td></tr><tr><td>All periods</td><td>${fmt(result.all.baselineMae)}</td><td>${fmt(result.all.finalMae)}</td><td>${fmt(result.all.fva)}</td></tr></tbody></table><p>Changed-period mean bias moved from ${fmt(changed.baselineBias)} to ${fmt(changed.finalBias)} units per period.</p><h3>Next decision</h3><p>Investigate adjustment reasons by category. Do not reward a favorable aggregate if a few large periods hide repeated harmful overrides.</p>`);
    }
  };

  const run = () => {
    try { handlers[tool]?.(); }
    catch (error) { invalid(error.message || 'The input could not be processed.'); }
  };
  form.addEventListener('submit', event => { event.preventDefault(); run(); });
  form.addEventListener('reset', () => setTimeout(run));
  document.querySelector('[data-copy-workflow]')?.addEventListener('click', async () => {
    try { await navigator.clipboard.writeText(`${score.textContent}\n${output.innerText}`); }
    catch { output.insertAdjacentHTML('afterbegin', '<p>Copy is unavailable in this browser.</p>'); }
  });
  run();
})();
