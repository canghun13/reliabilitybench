import assert from 'node:assert/strict';
import { analyzeFailureRate, formatRate, failureRateReport, parseNumeric } from '../assets/js/calculators/failure-rate.js';

let assertions = 0;
const check = (actual, expected) => { assertions++; assert.equal(actual, expected); };
const near = (actual, expected) => { assertions++; assert.ok(Math.abs(actual / expected - 1) < 1e-12, `${actual} != ${expected}`); };
const observed = analyzeFailureRate({ mode: 'observed', failures: 12, hours: 6000 });
check(observed.hourly, .002); check(observed.million, 2000); check(observed.fit, 2000000); check(observed.mtbf, 500);
for (const input of [
  { mode: 'rate', rate: 250, unit: 'fit' },
  { mode: 'rate', rate: .25, unit: 'million' },
  { mode: 'rate', rate: .00000025, unit: 'hour' },
  { mode: 'mtbf', mtbf: 4000000 },
  { mode: 'observed', failures: 5, hours: 20000000 }
]) {
  const result = analyzeFailureRate(input);
  near(result.hourly, 2.5e-7); near(result.million, .25); near(result.fit, 250); near(result.mtbf, 4000000);
  assertions++; assert.match(failureRateReport(result), /Failure Rate Calculator[\s\S]*Input basis:[\s\S]*Reciprocal MTBF:[\s\S]*https:\/\/reliabilitybench.com\/tools\/failure-rate-calculator.html/);
}
// Manufacturer unit example: 5 failures / (one million devices * 1,000 hours) = 5 FIT.
near(analyzeFailureRate({ mode: 'observed', failures: 5, hours: 1e9 }).fit, 5);
for (const input of [{ mode: 'observed', failures: 0, hours: 6000 }, { mode: 'rate', rate: 0, unit: 'fit' }]) {
  const result = analyzeFailureRate(input);
  check(result.hourly, 0); check(result.fit, 0); check(result.mtbf, null);
  assertions++; assert.match(result.note, /not.*(?:proof|evidence)/);
  assertions++; assert.doesNotMatch(failureRateReport(result), /Infinity|NaN/);
}
for (const invalid of [undefined, {}, { mode: 'cycles' },
  ...[-1, .5, NaN, Infinity, -Infinity, '', null, '2', 1e100].map(failures => ({ mode: 'observed', failures, hours: 6000 })),
  ...[0, -1, NaN, Infinity, '', null].map(hours => ({ mode: 'observed', failures: 2, hours })),
  ...[0, -1, NaN, Infinity, '', null, '100'].map(mtbf => ({ mode: 'mtbf', mtbf })),
  ...[-1, NaN, Infinity, '', null].map(rate => ({ mode: 'rate', rate, unit: 'fit' })),
  ...['', 'cycle', '__proto__', 'toString'].map(unit => ({ mode: 'rate', rate: 10, unit })),
  { mode: 'rate', rate: Number.MIN_VALUE, unit: 'fit' },
  { mode: 'rate', rate: 1e308, unit: 'hour' },
  { mode: 'observed', failures: 1, hours: Number.MIN_VALUE },
  { mode: 'rate', rate: 1e-320, unit: 'hour' },
  { mode: 'mtbf', mtbf: Number.MIN_VALUE }
]) { assertions++; assert.throws(() => analyzeFailureRate(invalid)); }
for (const rate of [1e-200, 1e-15, 1e-6, 1, 1e100]) {
  const result = analyzeFailureRate({ mode: 'rate', rate, unit: 'hour' });
  near(result.mtbf * result.hourly, 1);
  assertions++; assert.doesNotMatch(formatRate(result.hourly), /^(?:0|Infinity|NaN)$/);
  near(analyzeFailureRate({ mode: 'rate', rate: result.fit, unit: 'fit' }).hourly, rate);
}
check(formatRate(0), '0'); check(formatRate(.002), '0.002'); check(formatRate(2.5e-7), '2.5e-7');
check(formatRate(4e6), '4,000,000'); check(formatRate(2e9), '2e+9'); check(formatRate(1.002e-10), '1.002e-10');
for (const raw of ['', ' ', 'NaN', 'Infinity', '1e309', '1e-400', '-1e-400', '0x10', 'bad', null]) {
  assertions++; assert.throws(() => parseNumeric(raw));
}
check(parseNumeric('0e-400'), 0); check(parseNumeric(' 2.5e-7 '), 2.5e-7); check(parseNumeric('.25'), .25);
for (let run = 0; run < 10; run++) check(analyzeFailureRate({ mode: 'observed', failures: 12, hours: 6000 }).fit, 2000000);
console.log(`PASS: failure-rate live-module QA (${assertions} assertions): three bases, three rate units, zero events, independent examples, reciprocal/round-trip checks, malformed inputs, numeric bounds, precision and current report contents.`);
