import { createRequire } from 'node:module';
import { readFileSync } from 'node:fs';
import { join } from 'node:path';

const require = createRequire(import.meta.url);
const methods = require('../assets/js/intermittent-demand-tools.js');
const root = process.cwd();
const errors = [];
const near = (actual, expected, tolerance = 1e-9) => {
  if (!Number.isFinite(actual) || Math.abs(actual - expected) > tolerance) errors.push(`Expected ${expected}; received ${actual}`);
};
const rejects = (label, action) => {
  try { action(); errors.push(`${label}: invalid input was accepted`); }
  catch { /* expected */ }
};

const series = methods.parseDemandSeries('0, 0; 4 | 0\n0 4', 6);
if (series.length !== 6 || series[2] !== 4) errors.push('Series parser did not preserve values and zero periods.');
rejects('negative demand', () => methods.parseDemandSeries('0,0,-1,0,2,0', 6));
rejects('NaN demand', () => methods.parseDemandSeries('0,0,NaN,0,2,0', 6));
rejects('Infinity demand', () => methods.parseDemandSeries('0,0,Infinity,0,2,0', 6));
rejects('short series', () => methods.parseDemandSeries('0,1,0', 6));

const pattern = methods.demandPattern([0, 0, 4, 0, 0, 4]);
near(pattern.adi, 3);
near(pattern.cv2, 0);
if (pattern.classification !== 'Intermittent') errors.push(`Expected Intermittent; received ${pattern.classification}`);
if (methods.demandPattern([0, 0, 0, 0, 4, 0]).sufficient) errors.push('Single nonzero observation should be insufficient for CV² classification.');

near(methods.croston([0, 0, 4, 0, 0, 4], 0.1, 0.1, 'croston').forecast, 4 / 3);
near(methods.croston([0, 0, 4, 0, 0, 4], 0.1, 0.1, 'sba').forecast, 4 / 3 * 0.95);
near(methods.croston([0, 0, 4, 0, 0, 4], 0.1, 0.1, 'tsb').forecast, 1.372);
rejects('zero smoothing', () => methods.croston([0, 1, 0, 1], 0, 0.1, 'sba'));
rejects('all-zero forecast', () => methods.croston([0, 0, 0, 0], 0.1, 0.1, 'sba'));

const history = [0, 0, 3, 0, 0, 0, 2, 0, 0, 4, 0, 0, 0, 3, 0, 0, 2, 0, 0, 0, 5, 0, 0, 3];
const backtest = methods.rollingBacktest(history, 12, 0.1, 0.1);
if (backtest.tests !== 12 || backtest.ranking.length !== 4) errors.push('Rolling-origin test count or method ranking is incomplete.');
for (const result of Object.values(backtest.results)) if (![result.mae, result.meanBias].every(Number.isFinite)) errors.push('Backtest emitted a non-finite metric.');
rejects('invalid training window', () => methods.rollingBacktest(history, history.length, 0.1, 0.1));

const censoring = methods.censoringAudit('0 | No\n3 | Yes\n0 | Yes\n2 | No\n0 | No\n1 | No');
if (censoring.flagged.length !== 2 || censoring.ambiguousZeros !== 1 || censoring.longestRun !== 2) errors.push('Censoring audit counts differ from the fixture.');
rejects('bad censoring flag', () => methods.censoringAudit('0 | No\n3 | Maybe\n0 | Yes\n2 | No\n0 | No\n1 | No'));

const fva = methods.fvaAudit('2 | 3 | 3\n2 | 1 | 0\n2 | 2 | 2\n2 | 5 | 3');
if (fva.overrides.length !== 3 || fva.wins !== 2 || fva.losses !== 1) errors.push('FVA win/loss counts differ from the fixture.');
near(fva.all.baselineMae, 1);
near(fva.all.finalMae, 0.75);
const noOverride = methods.fvaAudit('1 | 1 | 0\n1 | 1 | 2\n1 | 1 | 1\n1 | 1 | 0');
if (noOverride.changed !== null) errors.push('No-override input should not fabricate changed-period FVA.');

const pages = [
  'intermittent-demand-pattern-classifier.html',
  'croston-sba-tsb-forecast-calculator.html',
  'intermittent-demand-backtest-comparator.html',
  'stockout-censored-demand-auditor.html',
  'forecast-value-added-auditor.html'
];
for (const page of pages) {
  const html = readFileSync(join(root, 'tools', page), 'utf8');
  for (const required of ['data-demand-tool=', 'data-demand-form', 'type="reset"', 'data-workflow-output', 'class="related"', 'limit']) {
    if (!html.toLowerCase().includes(required.toLowerCase())) errors.push(`${page}: missing ${required}`);
  }
}

console.log('Intermittent-demand QA covered parsing, classification, Croston/SBA/TSB, rolling origins, censoring, FVA, invalid states, finite outputs, and Reset/content hooks.');
if (errors.length) {
  console.error(errors.join('\n'));
  process.exit(1);
}
console.log('PASS: 5 intermittent-demand tools passed independent method and boundary checks.');
