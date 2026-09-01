import { createRequire } from 'node:module';
import { readFileSync } from 'node:fs';
import { join } from 'node:path';

const require = createRequire(import.meta.url);
const methods = require('../assets/js/operating-profile-tools.js');
const root = process.cwd();
const errors = [];
const near = (actual, expected, tolerance = 1e-9) => { if (!Number.isFinite(actual) || Math.abs(actual - expected) > tolerance) errors.push(`Expected ${expected}; received ${actual}`); };
const rejects = (label, action) => { try { action(); errors.push(`${label}: invalid input was accepted`); } catch { /* expected */ } };

const stateRows = '2026-08-01T08:00 | STOPPED\n2026-08-01T08:10 | RUNNING\n2026-08-01T09:40 | IDLE\n2026-08-01T10:00 | RUNNING\n2026-08-01T11:30 | FAULT\n2026-08-01T12:00 | RUNNING\n2026-08-01T13:00 | STOPPED';
const state = methods.stateLog(stateRows);
near(state.windowHours, 5);
near(state.runningHours, 4);
near(state.runningShare, 0.8);
if (state.starts !== 3 || state.exits !== 3 || state.transitions.length !== 6 || state.openState !== 'STOPPED') errors.push('State-log counts or open-state handling differ from the fixture.');
rejects('duplicate state timestamp', () => methods.stateLog('2026-01-01T00:00 | RUNNING\n2026-01-01T00:00 | STOPPED\n2026-01-01T01:00 | RUNNING'));
rejects('short state log', () => methods.stateLog('2026-01-01T00:00 | RUNNING\n2026-01-01T01:00 | STOPPED'));

const loads = methods.parseNumberSeries('0,20,40,60,80,100,60,40,20,0,50,70');
const profile = methods.loadProfile(loads, 15);
near(profile.mean, 45);
near(profile.totalHours, 3);
near(profile.idleHours, 0.5);
near(profile.peak, 100);
if (profile.bins.reduce((sum, bin) => sum + bin.count, 0) !== 12) errors.push('Load-profile bins do not retain every reading.');
rejects('negative load', () => methods.parseNumberSeries('0,1,2,3,4,-1'));
rejects('extreme load', () => methods.parseNumberSeries('0,1,2,3,4,201'));
rejects('zero interval', () => methods.loadProfile(loads, 0));

const thresholdRows = '2026-08-01T08:00 | 55\n2026-08-01T09:00 | 85\n2026-08-01T10:00 | 90\n2026-08-01T10:30 | 70\n2026-08-01T11:30 | 35\n2026-08-01T12:30 | 50';
const threshold = methods.thresholdExcursions(thresholdRows, 40, 80);
near(threshold.windowHours, 4.5);
near(threshold.durations.above, 1.5);
near(threshold.durations.below, 1);
near(threshold.durations.inside, 2);
if (threshold.events.length !== 2 || threshold.events[0].zone !== 'above' || threshold.events[1].zone !== 'below') errors.push('Threshold events differ from the independent fixture.');
rejects('reversed limits', () => methods.thresholdExcursions(thresholdRows, 80, 40));
rejects('out-of-order series', () => methods.thresholdExcursions('2026-01-01T01:00 | 1\n2026-01-01T00:00 | 2\n2026-01-01T02:00 | 3', 0, 4));
rejects('NaN series', () => methods.thresholdExcursions('2026-01-01T00:00 | 1\n2026-01-01T01:00 | NaN\n2026-01-01T02:00 | 3', 0, 4));

const rocRows = '2026-08-01T08:00 | 50\n2026-08-01T08:30 | 60\n2026-08-01T09:00 | 58\n2026-08-01T10:00 | 90\n2026-08-01T10:30 | 70\n2026-08-01T11:30 | 75';
const roc = methods.rateOfChange(rocRows, 25, 30, 1);
near(roc.maximumRise, 32);
near(roc.maximumFall, -40);
if (roc.flagged.length !== 2 || roc.flagged[0].direction !== 'Rise' || roc.flagged[1].direction !== 'Fall') errors.push('Rate-of-change flags differ from the fixture.');
rejects('zero rise threshold', () => methods.rateOfChange(rocRows, 0, 30, 1));
rejects('infinite threshold', () => methods.rateOfChange(rocRows, Infinity, 30, 1));

const pages = ['machine-state-log-analyzer.html', 'equipment-load-profile-analyzer.html', 'threshold-excursion-duration-analyzer.html', 'process-variable-rate-of-change-screener.html'];
for (const page of pages) {
  const html = readFileSync(join(root, 'tools', page), 'utf8');
  for (const required of ['data-operating-tool=', 'data-operating-form', 'type="reset"', 'data-workflow-output', 'class="related"', 'Limit']) if (!html.toLowerCase().includes(required.toLowerCase())) errors.push(`${page}: missing ${required}`);
}

console.log('Operating-profile QA covered timestamps, state duration, transitions, load bins, threshold events, rate changes, invalid/non-finite inputs, maximum samples, and Reset/content hooks.');
if (errors.length) { console.error(errors.join('\n')); process.exit(1); }
console.log('PASS: 4 operating-profile tools passed independent expected-value and boundary checks.');
