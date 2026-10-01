import assert from 'node:assert/strict';
import { analyzeParallel, failurePercent, reliabilityPercent } from '../assets/js/calculators/parallel.js';

const near = (actual, expected) => assert.ok(Math.abs(actual - expected) < 1e-12, `${actual} != ${expected}`);
near(analyzeParallel([.9, .8]).reliability, .98);
near(analyzeParallel([.9, .8, .7]).reliability, .994);
near(analyzeParallel([.9, .8]).gain, .08);
near(analyzeParallel([.1, .2, .3, .4]).failure, .3024);
near(analyzeParallel([0, 0]).reliability, 0);
near(analyzeParallel([0, .83]).reliability, .83);
near(analyzeParallel([1, .83]).reliability, 1);
near(analyzeParallel([.5, .5, .5, .5]).reliability, .9375);
near(analyzeParallel(Array(100).fill(.01)).reliability, 1 - .99 ** 100);
assert.ok(Math.abs(analyzeParallel([1e-15, 1e-15]).reliability / 2e-15 - 1) < 1e-12);
for (const values of [[], [.9], Array(101).fill(.9), ['', .8], [null, .8], [NaN, .8], [Infinity, .8], [-Infinity, .8], [-.1, .8], [1.1, .8], ['bad', .8]]) {
  assert.throws(() => analyzeParallel(values));
}
const extreme = analyzeParallel(Array(100).fill(.999999));
assert.ok(failurePercent(extreme).includes('10^'));
assert.ok(reliabilityPercent(extreme).startsWith('≈100'));
assert.equal(failurePercent(analyzeParallel([1, .9])), '0%');
assert.equal(reliabilityPercent(analyzeParallel([1, .9])), '100%');
assert.equal(failurePercent(analyzeParallel([0, 0])), '100%');
assert.equal(failurePercent(analyzeParallel([.9, .8, .7])), '0.6%');
for (let run = 0; run < 10; run++) near(analyzeParallel([.9, .8]).reliability, .98);
for (const values of [[0,0], [1,1], [.9,.8], Array(100).fill(.999999)]) {
  const result = analyzeParallel(values);
  assert.doesNotMatch(reliabilityPercent(result) + failurePercent(result), /NaN|Infinity/);
}
console.log('PASS: parallel calculator independent fixtures: unequal paths, 2/3/4/100 paths, endpoints, tiny probabilities, precision, malformed and non-finite inputs, repeat execution.');
