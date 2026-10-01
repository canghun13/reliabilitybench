# Weekly growth review — 2026-10-01

## Decision

**EXISTING-UPGRADE GO — Parallel System Reliability Calculator.** One existing
indexed URL is improved. This is a scoped search-intent/output upgrade, not a
technical-indexability fix or a new cluster. No ranking or traffic lift is claimed.

## Repository and inventory

- Repository: https://github.com/canghun13/reliabilitybench; branch: `main`.
- Start local HEAD and cached origin/main: `fc2a97c43a2a1848b0c42e2f9f940698b262d652`.
- Start actual remote main: `16711d85558e5814b232f8ff9d1368ea4338f623`.
- Clean worktree, behind 1; fast-forwarded without overwriting user changes.
- Synchronized implementation baseline: `16711d85558e5814b232f8ff9d1368ea4338f623`.
- Before/after: 104 public HTML, 103 indexable/sitemap URLs, 42 calculators,
  18 workflow tools, 16 Guide HTML pages and 12 Reference HTML pages (including hubs).
- Latest implemented cluster: Equipment Operating Profile Analysis, 2026-09-01.
- Latest expansion NO-GO: 2026-09-25. Its 48 additional screens extend the previous
  182-family exclusion boundary to 230 named families, plus foundational/protected
  labels not double-counted. Existing handover and its recent shortlist/deep gates
  were reviewed; no excluded family is renamed and relaunched here.

## Current-session attachments and scope

Only the five reports explicitly supplied in this session were used; no Downloads
directory search or substitute historical export was performed. Archives were read
without modifying/extracting the user's files. Analysis used the spreadsheet skill.

| Report filename | Internal scope |
| --- | --- |
| reliabilitybench.com-Performance-on-Search-2026-10-01.zip | Web / last three months; daily rows 2026-07-21–2026-09-28 |
| reliabilitybench.com-Coverage-Drilldown-2026-10-01.zip | Discovered — currently not indexed only; chart 2026-07-24–2026-09-21 |
| reliabilitybench.com_PageTrafficReport_2026. 10. 1..csv | Bing page export dated October 1; internal reporting period not supplied |
| reliabilitybench.com_KeywordReport_2026. 10. 1..csv | Bing keyword export dated October 1; internal reporting period not supplied |
| 보고서_개요 (1).csv | GA4 overview, 2026-09-03–2026-09-30 |

The current-session extraction was retained across the continuation checkpoint.
Later exact-reference rereads of the three CSVs returned file-not-found. Previously
extracted values are reported, not reconstructed from other files. Bing first-page
page count and keyword weighted position were not retained/calculated and are
unavailable; do not invent them or infer a reporting period from the export date.
Raw user exports are not committed.

## Search Console metrics

- Daily-chart aggregate: 26 clicks / 3,175 impressions; CTR 0.8189%; approximate
  impression-weighted position 57.57 (computed from rounded daily positions).
- Exported queries: 372 rows; exported pages receiving impressions: 89 rows,
  including a four-impression HTTP-homepage variant (88 after apex canonical merge).
- Query clicks sum to 5, not the daily-chart total of 26; anonymized/export-limited
  query rows must not be substituted for chart totals or assumed to cover every click.
- Important queries: `reliabilitybench` 5 clicks / 33 impressions / position 2.03;
  `accelerated life testing` 100 impressions / 46.33;
  `accelerated life test calculator` 71 / 49.79;
  `reliability of parallel system` 3 / 10.67;
  `parallel system reliability formula` 2 / 31;
  `reliability parallel system formula` 2 / 40.
- Brand traffic is not evidence for a new workflow; irrelevant similarly named
  software/LLM benchmark queries are not counted as engineering demand.

| Existing page | Clicks | Impressions | Average position |
| --- | ---: | ---: | ---: |
| tools/parallel-system-reliability-calculator.html | 4 | 109 | 19.00 |
| tools/k-out-of-n-reliability-calculator.html | 5 | 32 | 17.97 |
| tools/coffin-manson-acceleration-calculator.html | 3 | 25 | 7.84 |
| tools/mtbf-calculator.html | 2 | 154 | 75.06 |
| tools/mttf-calculator.html | 0 | 234 | 73.26 |
| tools/accelerated-life-testing/index.html | 0 | 411 | 53.11 |

Coverage: 12 discovered-not-indexed URLs at the last chart date, versus 13 on
September 15–18 and 12 on September 19–21. This is a reason-specific drilldown, not
the total Coverage report. Indexed total and crawled-not-indexed total are **not
available**. The twelve include the seven Equipment Operating Profile pages plus
about/contact/privacy and two other guide/reference pages. `1970-01-01` last-crawl
values are sentinel/missing values, not proof of a real 1970 crawl. Preserve the
previous Type 4 / no-site-defect diagnosis; do not rewrite seven pages to chase this
count. The chart movement cannot identify which individual URL left this reason.

## Bing and GA4

- Bing page table: 55 rows, 627 impressions, 18 clicks, CTR 2.8708%,
  impression-weighted average position 5.30.
- Bing keyword table: 286 rows, 565 impressions, 18 clicks. Different dimensional
  tables have different impression totals; do not sum or force them to reconcile.
- Important Bing pages: MTBF 148 impressions / 3 clicks; Duane guide 49 / 3;
  B10 47 / 1; system availability 23 / 1; Coffin–Manson 12 / 1;
  Parallel 6 / 0 / position 3.83; K-out-of-N 2 / 0 / position 3.
- Relevant narrow Bing query: a question about two parallel components with
  reliabilities 0.80 and 0.90 has 1 impression / 0 clicks / position 3; `parallel
  reliability calc` also has 1 / 0 / 3. These are supporting examples, not sufficient
  standalone demand or a query-to-page join. `reliability workbench` has 39
  impressions and `smin = (n x tt) / mtbf` has 31; assess intent rather than counting
  every occurrence of the word "parallel" as demand.
- GA4: 195 active / 194 new users, 859 events; average engagement 11.13 seconds.
- First-user source/medium active users: direct 172; Bing organic 11; Google organic
  5; ChatGPT AI-assistant 2; cn.bing.com referral 1; Ecosia organic 1;
  KittyLaunch referral 1; Qwant organic 1; twelve.tools directory 1.
- Session-source session counts: direct 173; Bing organic 14; Google organic 8;
  ChatGPT AI-assistant 5; cn.bing.com referral 2; other listed sources 1 each.
  These are sessions, not users. Keep attribution scopes separate.
- Direct represents 88.2% of active users, and one daily row shows 113 new users.
  QA-like all-site pageviews, short engagement and this concentration can contaminate
  totals. They do not establish that every direct visitor is a bot. Parallel's three
  pageviews/three users with bounce 1 are not a growth signal.
- This overview does not establish engaged-organic users or organic landing-page
  attribution. GSC/Bing carry the selection; GA4 is a small corroborating signal.

## Week-over-week

Use equal seven-day windows from the same GSC daily chart:

| Metric | September 15–21 | September 22–28 | Change |
| --- | ---: | ---: | ---: |
| Impressions | 144 | 233 | +89 / +61.81% |
| Clicks | 1 | 3 | +2; very small sample |
| CTR | 0.6944% | 1.2876% | +0.5931 percentage points |
| Weighted position | 25.49 | 30.37 | 4.88 positions worse |

More impressions do not prove rank improvement or causality. Query/page expansion,
individual page movement, prior Bing movement and prior GA4 organic movement are
unavailable: current dimension exports are aggregate and no comparable prior export
was supplied. Coverage reason count fell 13 to 12 on its own older dates; do not
align it with the later performance window or call it overall indexed growth.

## Technical health

Baseline and final static checks pass. Googlebot HTTPS checks of home, Parallel,
K-out-of-N, Equipment Operating Profile hub, robots and sitemap returned 200.
Sampled pages have self-canonical, index/follow, no blocking X-Robots header.
HTTP apex and HTTPS www requests terminate at HTTPS apex with 200. The sitemap has
103 URLs; this upgrade changes none. No technical action is required.

## Existing growth candidates (maximum three)

Selection scores are judgment, not forecasts: evidence 30, exact gap 25, expected
value/cost 20, intent/workflow fit 15, bounded implementation risk 10.

| Candidate | Evidence / exact weakness | Score breakdown | Decision |
| --- | --- | --- | --- |
| Parallel calculator | 109 impressions, 4 clicks, position 19; fixed three inputs exclude a direct two-path task and larger independent paths; only success probability, no failure/gain breakdown | 26+23+18+10+7 = 84/100 | Selected: narrow existing-output upgrade |
| K-out-of-N calculator | 32 impressions, 5 clicks, position 17.97; already accepts variable n/k and solves its identical-component intent; no equally concrete high-value missing function established | 19+10+14+10+8 = 61/100 | Observe; do not conflate unequal parallel with identical k-out-of-n |
| ALT hub | 411 impressions, 0 clicks, position 53.11; potentially broad intent, but no comparable specific output/navigation defect and low rank | 20+7+12+8+8 = 55/100 | Observe; no title/H1 churn or bulk expansion |

Expansion considered: **Yes**, but Priority B has a better-supported one-page
action. The current exclusion set was reviewed. No new-family discovery funnel was
executed (counts not applicable, not a claim of zero possible new opportunities).
Traffic size itself is not an expansion veto. No repeated 230-family search, renamed
excluded workflow, or artificial four-tool cluster was created.

## Current external evidence and model boundary

- [NIST parallel model](https://www.itl.nist.gov/div898/handbook/apr/section1/apr183.htm)
  gives independent active paths with one sufficient for success and a product of
  failure probabilities. All inputs must describe the same mission.
- [NIST k-out-of-n model](https://www.itl.nist.gov/div898/handbook/apr/section1/apr184.htm)
  distinguishes the identical independent component case with k needed for success.
- Current first-party competitor tools
  [ReliabilityCalc](https://reliabilitycalc.com/system-reliability) and
  [Pingdo redundancy calculator](https://pingdo.net/tools/redundancy-calc/) expose
  variable components, supporting the conclusion that three fixed fields are a
  utility limitation. This is a capability comparison, not a claim of an empty SERP.

## Implementation and QA

- One production page: `tools/parallel-system-reliability-calculator.html`.
- Dedicated module `assets/js/calculators/parallel.js`, scoped
  `assets/css/parallel.css`; no global engine/CSS/partials/generator change.
- 2–100 unequal path probabilities; preserve leading inputs, new inputs blank;
  blank/non-finite/out-of-range inputs rejected; editing invalidates stale output.
- Outputs: system reliability, all-path failure probability, best single path,
  percentage-point gain, and complete input table. Copy includes inputs, units,
  results, assumptions and canonical URL. Reset restores three-path sample.
- Log-domain product with log1p/expm1 handles tiny reliability and failure values.
  Rounded ~100% is marked approximate; nonzero failure remains scientific even
  when the ordinary floating-point product underflows. Exactly one certain path
  is distinguished from rounded certainty.
- Print-specific CSS retains inputs/results/assumptions/URL and hides forms, nav,
  footer/buttons; no stale calculated report is printable after an edit.
- Limits explicitly exclude common cause, switching/standby starts, changing loads
  and repairs. This is neither repairable availability nor an equipment recommendation.
- Title/H1/URL unchanged. Meta description reflects the actual function. Added
  existing K-out-of-N/RBD guide links and NIST method source, not a new public page.
- Sufficient content; no duplicate new pages or incomplete independent tools.
- `tools/parallel-qa.mjs`: independent 2/3/4/100-path fixtures, endpoints, unequal
  paths, tiny values, malformed/non-finite input, extreme precision and repeat runs.
  It is imported by `tools/calculator-qa.mjs`, which also retains the legacy engine
  regression including its unused parallel configuration. New-page behavior is
  verified against the dedicated module, not merely that old configuration.
- Passed: calculator QA (42 page/config checks plus live Parallel module fixtures),
  final-site QA (104/103/103), qa-check (103), four operating-profile tool fixtures,
  five intermittent-demand tool fixtures, and git diff --check.
- Actual local browser: 98% two-path result and copied report; 99.4% sample;
  100 paths with 100 input rows and nonzero 1 x 10^-598% failure; blank/out-of-range
  rejection, disabled stale Copy, Reset and rerun. Console warnings/errors: 0.
- Viewports 1440/1280/1024/900/768/600/480/390: header/H1 overlap 0, horizontal
  overflow 0, clipped/off-screen tested inputs/buttons/results/table cells 0.
  Bounding boxes, DOM states and desktop/mobile screenshots supplement scrollWidth.
  Existing header navigation wraps on mobile; footer retained. No blanket hiding.
- Print button was invoked, but the in-app browser stalled its CDP control;
  the printed/preview page could not be inspected. Record **preview unverified**,
  not Print PASS. A fresh tab successfully reran calculation/copy afterward.

## Production and next state

Production verification and implementation SHA are appended after push. Final
documentation commit SHA is reported in the task result (not self-referenced here).

1. Compare the next equal seven-day GSC window and Parallel page/query evidence;
   allow crawling time and do not attribute every change to this upgrade.
2. Obtain a comparable prior/current Bing export, full Coverage summary and GA4
   organic landing/engagement slice; retain the no-site-defect indexing diagnosis
   unless a new site-side issue is reproduced.
3. Inspect actual print preview in a normal browser; revisit expansion only when
   a genuinely new workflow passes all gates beyond the 230-family boundary.

Risks: HIGH introduced 0; MEDIUM print preview not visually verified, tiny search
sample and pre-existing jurisdiction-dependent GA4 consent; LOW changing SERPs and
independence assumptions. This release adds no trackers or external input transfer.
