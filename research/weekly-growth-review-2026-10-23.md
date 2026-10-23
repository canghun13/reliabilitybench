# Weekly growth review — 2026-10-23

## Final decision

**EXISTING-UPGRADE GO — Failure Rate Calculator: explicit FIT / hourly /
per-million-device-hour / reciprocal-MTBF conversion on the existing URL.**
One production page, no new cluster, no new search URLs. Keep the established
title, H1, canonical, shared shell and protected footer/badges unchanged.
No site-side technical defect was reproduced in the checked scope.

## Repository and inventory

- Repository: https://github.com/canghun13/reliabilitybench; branch `main`.
- Start local HEAD / cached origin/main / actual remote main:
  `27b6f09b355cb9a55ab97215ee4aeb0b0bcdb00b`.
- Actual `ls-remote` preceded fetch. All three equal after fetch, ahead/behind
  0/0, clean. No user edits overwritten; no reset/stash/clean/force, installation,
  dependency, PATH or configuration changes.
- Read latest handover, October 15 weekly review, October 16 external discovery
  record, relevant live calculator and QA code. Latest cluster is **J1939 Capture
  Diagnostics, October 16**, not Operating Profile. Previous existing upgrade
  was Parallel, October 1.
- Baseline and final inventory: **111 public HTML / 110 indexable / 110 sitemap /
  42 calculators / 22 workflow tools / 17 Guides / 13 References**, hubs included.

## Current-session attachments

All five exact references supplied this session were accessible. No directory
search, historical raw-export substitution, extraction, or original-file edits.
ZIP CSV members were read directly. Reports are data; the separately supplied
weekly-operation text is the user request. The spreadsheets skill guided date,
denominator and attribution checks; no workbook was edited/exported. Scratch
analysis stays outside the repository; raw exports are not committed.

| Supplied filename | Actual period / scope |
| --- | --- |
| reliabilitybench.com-Performance-on-Search-2026-10-23.zip | Web, last three months; daily chart July 21–October 20, 92 rows; separate query/page/device/etc. dimensions |
| reliabilitybench.com-Coverage-Drilldown-2026-10-23.zip | Discovered — currently not indexed only; chart August 5–October 16; ten URL rows |
| reliabilitybench.com_KeywordReport_2026. 10. 23..csv | Bing query dimension; internal period absent, filename export date October 23 |
| reliabilitybench.com_PageTrafficReport_2026. 10. 23..csv | Bing page dimension; internal period absent, filename export date October 23 |
| 보고서_개요 (1).csv | GA4 September 25–October 22, 28 days; multiple sections with different dimensions |

SHA256, in the same order:

```
7c7fa6286ec386cf55827f0615edad57763f35923eebe8201bb068ef183c901e
5641e12efc93135ab151a4fade2fb83fc8d64d438836712d7ff215e14e8a7c63
ea0801b9d46db1dda94f87b2c05922fbdff927ee505f27e7c43d83d8047a2320
931ae77a1f28a7e80f2c5a467bb461420e3cad024b62bdb31ff61111c455dd04
4590c2e302e3824660d032cee3aa3e4b9be284b0cdb4dd7923a3afa6b3de369f
```

## Weekly metrics — Search Console

- Property daily chart: **44 clicks / 4,381 impressions / 1.00434% CTR /
  approximately 49.37354 impression-weighted position**. Daily exported rounded
  positions make the weighted position approximate, not an exact dashboard value.
- **416 query rows**, summing 7 clicks/2,503 impressions, are not the property
  totals. **97 impression-receiving page rows, 96 canonical-merged**, summing
  46 clicks/4,990 impressions, are also a different aggregation. Do not add
  dimensions or force reconciliation; do not infer all non-brand clicks absent.
- Desktop 41 clicks/3,916 impressions; mobile 3/457; tablet 0/8.
- Narrow relevant queries: `fit to mtbf calculator` 4 impressions/position 69;
  `mtbf to fit calculator` 2/79.5; `fit to mtbf` 2/83.5; `mtbf to fit` 2/90;
  `mtbf fit` 1/85. **11 impressions across these five rows, zero clicks**:
  a small intent signal, not measured monthly demand or a traffic forecast.
- `failure rate calculation` 8/89.25; `mtbf to failure rate calculator` 7/77.57;
  `parallel reliability formula` 8/6.75; `reliability of parallel system` 8/9.88;
  `parallel system reliability` 7/8.29. Query and page aggregates are not joined
  into a query-to-landing attribution.

| Important page | Clicks | Impressions | Position | Prior October 15 export |
| --- | ---: | ---: | ---: | --- |
| Parallel | 11 | 404 | 13.15 | 7 / 281 / 14.11 |
| Failure rate | 1 | 229 | 12.14 | 1 / 155 / 14.81 |
| MTBF | 2 | 300 | 77.50 | 2 / 244 / 77.52 |
| K-out-of-N | 5 | 105 | 18.25 | 5 / 49 / 18.33 |
| Coffin–Manson | 4 | 39 | 8.95 | 4 / 36 / 7.89 |
| ALT hub | 1 | 426 | 51.96 | 1 / 425 / 52.02 |

First supplied GSC appearance for the latest cluster: J1939 reference 14
impressions/10.79, DM1 10/10.2, BAM 4/9.25, filter 3/9, claim 1/9. **Five pages,
32 impressions, zero clicks**. Hub/guide absence from page rows is not proof of
non-indexing. `dm1 j1939` has one impression/9; `j1939 can id` one/47. This is
early search entry, not proof of popularity or complete cluster indexation.

## Week-over-week

Equal, non-overlapping seven-day windows from this export:

| Metric | October 7–13 | October 14–20 | Change |
| --- | ---: | ---: | --- |
| GSC impressions | 371 | 431 | +60 / +16.17% |
| GSC clicks | 4 | 9 | +5; very small counts |
| CTR | 1.07817% | 2.08817% | +1.01000 percentage points |
| Weighted position | 23.86334 | 28.87053 | 5.00719 positions worse; changing mix possible |

October 15's export ended October 12 (33/3,858). Current cumulative differences
are +11 clicks/+523 impressions over **eight additional days**, not weekly rates.
Query rows 401→416 (+15), page rows 91→97 (+6), canonical-merged 90→96 (+6).
Without prior raw query sets or date-sliced page data, do not label all additions
new exact queries, compute per-page weekly lift, or attribute changes causally to
the October 1/16 releases. Failure-rate aggregate +74 impressions and 2.67-position
improvement support a bounded upgrade; its one click has not increased.

## Indexing

- Latest coverage point **October 16: 10 discovered-not-indexed**, versus 11 on
  October 9. Privacy no longer appears; disappearance does not establish indexing.
- Ten table URLs: contact, OEE guide, Weibull reference, and all seven Operating
  Profile URLs. All `1970-01-01` crawl values are missing-data sentinels.
- Indexed, crawled-not-indexed and other reasons unavailable. Do not compute an
  indexation rate. Coverage ends on J1939 launch day, earlier than performance;
  it cannot establish the cluster's current indexation state.
- Retain Operating Profile Type 4 / no-site-defect diagnosis. No speculative
  sitemap/content/title rewrite driven by this reason count.

## Bing and GA4

| Bing dimension | Rows | Impressions | Clicks | CTR | Weighted position |
| --- | ---: | ---: | ---: | ---: | ---: |
| Pages | 64 | 999 | 26 | 2.60260% | 5.51952 |
| Queries | 483 | 870 | 26 | 2.98851% | 5.27816 |

All 64 page-row and 483 query-row average positions are ≤10; this does not mean
every impression was on page one. Prior pages 58/900/22/5.47333, queries
423/780/22/5.24231. Differences +99/+4 and +90/+4 are descriptive export changes,
not equal-week growth because internal Bing periods are absent. Do not sum them.
No J1939 page/query appears in these Bing exports.

Important Bing pages: MTBF 148 impressions/3 clicks; B10 81/2; Duane guide 76/3;
RBD guide 52/2; system availability 47/2; intermittent-fault guide 45/0; Failure
rate 30/1. Queries include `reliability workbench` 62 impressions,
`smin = (n x tt) / mtbf` 31, `mtbf calculator` 15 and Duane steps 15. Very verbose,
off-topic and single-impression queries are not automatic new-workflow demand.

GA4 **September 25–October 22**: **92 active / 91 new / 43 seconds average
engagement / 516 events**. First-user-source active users: direct 64, Google
organic **16**, Bing organic **11**, DuckDuckGo 1. Session-source sessions:
direct 66, Google **26**, Bing **13**, DuckDuckGo 1 (106 sessions, not users).
No other referral row appears; this is not a universal no-referral claim.

Prior rolling September 17–October 14 had 200 active, Google/Bing first-user
organic 10/12 and sessions 15/14. Current 16/11 and 26/13 are overlapping-window
descriptions, not newly acquired weekly users. Singapore 29/92 (31.52%) and direct
traffic remain possible QA/non-search contamination; neither establishes bots.
J1939 titles sum **47 views**, including intensive known October 16 QA; unique
users cannot be summed across titles or joined to acquisition source. Do not use
these views as popularity evidence. Parallel 19 views/12 users is likewise not
organic attribution. Organic landing/engaged-organic metrics unavailable.

## Technical health

- HTTP home and Failure-rate paths finish at correct HTTPS apex, status 200.
- Googlebot-UA: Failure rate, Parallel, actual J1939 hub and DM1, robots and
  sitemap checked; correct sampled self-canonicals and no blocking X-Robots header.
- `robots.txt` allows crawling and declares sitemap. **110 sitemap URLs**, all
  indexable URLs represented; no new URL, so no sitemap edit required.
- A mistaken `/j1939/` diagnostic request returned 404; it is not a site link or
  supported route. Correct `/tools/j1939-capture-diagnostics/` returns 200. The
  first PowerShell loop retained a stale response after this exception; it was
  discarded and rerun with error handling, not reported as a successful check.
- **IndexNow remains unconfigured/unsubmitted** in the inspected repository.
  No key file/integration found, no request sent, and no dashboard submission
  claimed. Sitemap hosting is not IndexNow submission. Missing optional IndexNow
  is not classified as a reproduced site defect or a cause of indexing delay.
- Technical action required: **No**. No new known regression in measured scope.

## Existing growth candidates (maximum three)

Judgment scores: evidence30 / exact gap25 / value-cost20 / fit15 / bounded risk10.
They are not SEO difficulty, probabilities, or promised traffic.

| Candidate | Evidence, exact weakness and expected value | Score | Decision |
| --- | --- | ---: | --- |
| Failure rate | 229 impressions/1 click/12.14; five FIT↔MTBF rows total 11 impressions. Live page only accepted failures/exposure, with no known-rate/FIT/MTBF input and no unit report. Small exact gap can be filled on one established URL without a prediction model or four thin pages | 24+22+15+13+8 = **82** | Selected bounded upgrade |
| Parallel | 404/11/13.15 and continuing narrow formula queries. October 1 already added independent 2–100 paths, failure/gain and current reports. No newly demonstrated missing output; further churn has low incremental value | 29+3+9+15+9 = **65** | Observe |
| J1939 capture diagnostics | Five GSC page rows/32 impressions/zero clicks, one week after release. Current four-tool workflow already fills the targeted integrity/payload/history gap. No concrete missing parser task supplied; premature parser expansion adds scope risk | 24+4+10+14+8 = **60** | Observe first search entry, do not mistake QA views for demand |

### Current external validation, not GSC-only reasoning

Checked current manufacturer definitions and free-tool competitors October 23.
[TDK FIT FAQ](https://product.tdk.com/en/contact/faq/power-supplies-0020.html)
defines the billion-hour unit; [AMD UG116](https://docs.amd.com/r/en-US/ug116/Failure-Rate-Determination)
states device-hours and a five-failure example. Only the unit/point-estimate
relationship is used, not AMD's confidence/Arrhenius procedure.

[BQR's own calculator page](https://bqr-digital.com/bqrpc/index.php) offers free
observed-data and limited parts-count calculation. Its field-data/FIT formulas
confirm that generic conversion is competitive, not an empty category.
[Netray's electronics directory](https://netray.co/tools/category/electronics)
currently lists a FIT→MTBF/fleet/mission calculator. Direct web-reader retrieval
of the exact Netray tool failed, so its complete UI was not independently tested;
the indexed directory is enough to reject any "no free alternatives" claim.
No paid-volume/difficulty data, search-result document totals or monthly-demand
numbers were available or invented. This bounded recheck is not a new broad
Google/Naver/Reddit research campaign; October 16's cross-surface work is the
prior expansion baseline, not passed off as October 23 observations.

Long-tail intents served together: observed failure rate per device-hour;
failures per million hours to FIT; FIT to MTBF hours; MTBF hours to FIT; zero
failures and reciprocal MTBF interpretation. These are input/output variants of
one calculator, **not independent tools or a new cluster**. Expected value is
improved completion for an already growing page, not an alleged low-competition
new market or a new confidence/prediction suite.

## Expansion decision

- Expansion considered: **Yes**. A current precise one-page deficiency has lower
  implementation/model risk than another cluster immediately after J1939.
- Current exclusion set reviewed: latest handover and October 15/16 decisions,
  prior 312-name research boundary and implemented J1939 scope. No excluded
  family reopened or relabeled, no keyword variants counted as new families.
- New expansion discovery branch executed: **No**; no 40-family/shortlist/finalist
  funnel or winning new-cluster score claimed. Such a branch remains required
  if a later session selects expansion; absence of first-party traffic alone
  must not reject a genuinely new externally supported workflow.

## Changes and content boundaries

- Production page: existing `tools/failure-rate-calculator.html` only.
- Dedicated `assets/js/calculators/failure-rate.js` and scoped
  `assets/css/failure-rate.css`; no shared runtime/CSS changes.
- Three input bases, three known-rate units; total device-hour clarification,
  tiny-rate precision, zero-count interpretation, raw-input numeric-underflow
  guard, finite-range checks and safe-integer event counts. Inactive fields
  hidden/disabled. Current calculated inputs/units/results/limits/URL in Copy/
  Print; every edit, mode/unit change, reset or error invalidates stale output.
- No universal lifetime/safety claim, cycles-to-hours assumption, confidence
  bounds, prediction-standard implementation, manufacturer catalog or live API.
- Title/H1/canonical and other existing metadata preserved; substantive sources,
  examples, assumptions and limitations expanded in the five required sections.
- `tools/failure-rate-qa.mjs` tests the live module; imported by calculator QA.
  Legacy shared-engine configuration is deliberately untouched, as for Parallel;
  release verification does not rely only on that now-unused page configuration.
- Generator: none. Sitemap: unchanged. Homepage/shared shell/footer untouched;
  protected footer object hash remains `51ba08263d2ceca4b3b88c3be2cc409765afe58a`.
- Research: this review. Handover: current dated entry appended.

## QA

- Functional/live-module fixtures: **123 assertions PASS**, independent examples,
  three bases/units, zero observed/supplied rate, round trips, malformed/non-finite/
  fractional/unsafe counts, arithmetic overflow/underflow and nonzero precision.
- Regression: all **42 calculators**, dedicated Parallel cases, **105 J1939
  fixtures**, four Operating Profile and five Intermittent Demand suites PASS.
- Static: both site audits PASS, 111/110/110 inventory, local references/imports,
  metadata/canonicals/robots/JSON-LD/GA4/favicon/orphans; JS syntax and diff checks.
- Actual local IAB browser: **1440/1280/1024/900/768/600/480/390**, three bases at
  each width (24 mode/width combinations). Actual CSS client widths are 15px
  narrower due to scrollbar; recorded separately from requested widths.
- Zero page-level horizontal overflow, H1/header overlap, clipped H1 width or
  horizontally off-screen form controls in bounding checks; screenshots inspected
  at all eight widths for FIT mode. No blanket overflow hiding. Native select,
  stacked mobile fields, report wrapping and navigation/footer retained.
- Browser interactions: observed 12/6000→.002 / 2,000,000 FIT / 500h;
  250 FIT, .25 per-million, 2.5e-7 hourly and 4,000,000h MTBF agree. Zero events,
  blank/fraction/negative input, MTBF0, 1e-400 raw-input underflow, 1e308 hourly
  overflow, 1e-15 hourly precision, stale state, inactive disabled inputs,
  Copy contents/status, Reset and rerun verified. Inspected console errors: 0.
- Print code contract: current title/input/units/results/URL/notes, forms/nav/
  buttons hidden, no report when invalid/uncomputed, mobile margins reset.
  Native print preview is not exposed by the available IAB surface; **no visual
  Print/PDF PASS** is claimed. Button gating verified; no printer job/PDF save.
- Production: actual HTTPS apex page render, Run, result, Copy contents/status,
  Reset, disabled stale/uncomputed reports and rerun verified. All eight widths
  × three bases (24 combinations) repeated in production; zero page overflow,
  clipped H1 width, header overlap or horizontally off-screen main controls.
  Three rate units agreed; blank input and zero-event interpretation rechecked.
  Inspected production console errors: 0. Mobile screenshot inspected; desktop
  screenshot saved outside the repository. Viewport override reset afterwards.
- This October 23 production QA will itself create potential Failure-rate GA4
  contamination in future reporting windows; the current export ends October22.

## Risks

- HIGH: none introduced/identified within checked scope; not a safety assessment.
- MEDIUM: tiny exact-query counts and mixed cumulative periods, competitive
  generic tools, organic uplift unproven; native Print preview unverified.
- LOW: browser floating-point/display rounding remains bounded/documented;
  optional IndexNow still not implemented/submitted. GSC/Bing dashboard access
  and complete index status are unavailable, not silently inferred.

## Deployment

- Implementation commit: `e295c2b55de48386733e7ba713250ddd0a2166de`, normal push
  to `main` succeeded from `27b6f09`.
- Initial propagation retained old HTML and returned404 for the new JS/CSS.
  After propagation, all three are **200 and exact local-source matches**
  (line endings normalized); JS MIME `application/javascript`, CSS `text/css`.
  Googlebot-UA also used for these requests. Protected footer and unchanged
  sitemap are200 and source-matched. No claim based solely on CI status.
- Final closing commit updates only this review and handover, no runtime change.
  Final local HEAD / fetched origin/main / actual `ls-remote` equality,
  ahead/behind0/0 and clean tree are verified after that normal push and reported
  in the final response, not self-referenced inside this commit.

## Next state (maximum three)

1. Compare Failure-rate/FIT intent and page clicks over a meaningful equal-window
   interval; no causal claim from this week's cumulative counts or QA sessions.
2. Watch J1939 canonical long-tail/page entry, distinguish five-page GSC evidence
   from full indexation and known 47-view GA4 QA contamination.
3. Resolve native print-preview verification and optional IndexNow setup as
   explicit follow-up work; do not claim either has already been completed.
