# ReliabilityBench weekly growth review — 2026-11-19

## Final decision

**EXISTING-UPGRADE GO — J1939 BAM Capture Checker: per-session DM1 interpretation.**

Priority B, not a technical fix or a new cluster. Reassembly already worked;
moving its payload manually into the separate DM1 decoder was a missing workflow
step. Add numeric interpretation only after internally consistent transport,
without changing transport judgments or implying equipment health. Search samples
are small; this is a bounded usefulness improvement, not a forecast of traffic.

## Repository and current inventory

- Repository `https://github.com/canghun13/reliabilitybench`, branch `main`.
- Start local HEAD, cached origin/main and actual remote main all
  `576545fe9fe4bc3f9961f93f540b213e36323cd6`.
- Actual ls-remote before fetch; fetch completed, equal SHAs, ahead/behind 0/0,
  clean. No pull needed. No existing work overwritten, reset/stash/clean/force,
  installations or environment changes.
- Inventory before/after: **111 public HTML /110 indexable /110 sitemap URLs /
  42 calculators /22 workflow tools /17 Guide HTML /13 Reference HTML**, hubs
  included. Workflow groups CMMS5, fault4, demand5, operating-profile4, J1939 4.
- Latest implemented cluster remains J1939 October16. Latest existing upgrade
  becomes this November19 BAM improvement, following October23 Failure Rate.
- Protected footer object `51ba08263d2ceca4b3b88c3be2cc409765afe58a` unchanged.

## Current-session attachments

All five exact user-provided references accessible, classified by their contents.
ZIP CSV members read directly, without extraction, directory discovery or source
changes. Pasted operating instructions are the user's request; report rows are
data, not instructions. Operating text is line-equivalent to November11.

| Source filename | Actual range / qualification |
| --- | --- |
| `reliabilitybench.com-Performance-on-Search-2026-11-19.zip` | GSC Web, August17–November16, 92 daily rows |
| `reliabilitybench.com-Coverage-Drilldown-2026-11-19.zip` | Discovered—not indexed only, August21–November13, 5 URLs |
| `reliabilitybench.com_KeywordReport_2026. 11. 19..csv` | November19 filename; internal Bing period absent |
| `reliabilitybench.com_PageTrafficReport_2026. 11. 19..csv` | November19 filename; internal Bing period absent |
| `보고서_개요.csv` | GA4 October22–November18, multisection export |

SHA-256 in the same order:

```text
d859316e266a99a50d60207d0432a4f0ab647baeca6fc52f5a9b766d88b189a6
a5b5a25bd32f9f4c3cfffef8ddf24ea20fb6faa22c693bcabbd5231c74bc1262
2c3fcd2e6e122985819053ef9e3be59b261a786b0b19a2dc59dbda11dbc50cb3
fbddeff2b3bbc56532ac6c9f09e708a9c95d2b88a00b2329430dc26263a78bd7
41d158b328933539dcf769653ad828c568bb2b00cc83cfafa03c26b4be5ec0f5
```

## GSC and equal-window comparison

- Chart **45 clicks /3,344 impressions /1.345694% CTR /approximately34.142793
  impression-weighted position**. Position reconstructed from rounded daily
  exports is approximate, not a new exact property metric.
- Query209 rows sum6 clicks/1,197 impressions; page98 rows/98 canonical-merged
  pages sum47/3,886. Dimension totals are not interchangeable with the chart.
  Only exported clicked query is brand6/39/1.92; not proof all45 clicks are branded.
- Desktop40/2,895; mobile5/438; tablet0/11.

| Equal seven days inside this export | Clicks | Impressions | CTR | Approx. position |
| --- | ---: | ---: | ---: | ---: |
| November10–16 | 2 | 207 | 0.966184% | 28.693237 |
| November3–9 | 1 | 189 | 0.529101% | 24.021693 |
| October27–November2 | 3 | 199 | 1.507538% | 26.287437 |

Latest equal week: impressions +18/+9.523810%, clicks +1, CTR +0.437083 percentage
points, position +4.671544 worse. Do not celebrate a meaningful 100% click growth.
The attachment gap is eight days: last review's November2–8 is not the immediately
preceding equal interval. Its rolling August9–November8 totals46/3,489/36.431184
and225 queries are not a matched-week baseline. Current rolling totals lose old
August data; -1 click/-145 impressions and225→209 queries are not new weekly loss.

| Existing page | Current impressions /clicks /position | November11 export |
| --- | --- | --- |
| Parallel | 438 /9 /11.53 | 426 /9 /10.53 |
| Failure Rate | 323 /1 /7.49 | 301 /1 /7.67 |
| MTBF | 273 /0 /77.68 | 260 /0 /77.02 |
| ALT hub | 232 /1 /54.92 | 441 /1 /50.83 |
| K-out-of-N | 132 /7 /18.25 | 116 /8 /18.06 |
| Coffin–Manson | 37 /5 /7.03 | 42 /5 /8.79 |

All are rolling comparisons. ALT's expired older traffic is not a reproduced site
regression. Five FIT/MTBF query variants total11 impressions versus9 and already
have outputs in Failure Rate. ALT tools46/25.72, ALT44/70.14, ALT calculator23/56.78,
OEE41/82.39, parallel formula8/6.75 are separate query evidence, not page joins.

### J1939 evidence

**Seven pages /196 impressions /3 clicks**, versus7/153/1. Reference51/1/36.16,
filter44/1/24.45, address30/0/7.73, hub27/0/43.7, BAM22/0/9.14, DM1 20/1/8.05,
guide2/0/34. GSC BAM query1/17 and BAM message1/77 are very small signals.
PGN format11/89.45, lookup8/64.38, 65226 5/81.8, address claim3/7, DM1 2/28.5
do not justify a licensed SPN dictionary or prove which queries generated clicks.
Three different cluster pages now have clicks; page and query exports cannot be
joined to assert exact clicked-query intent.

## Coverage / technical health

Genuinely newer snapshot through November13 versus November6; still **five
Discovered—currently not indexed**: contact, OEE guide, Weibull reference,
Operating Profile hub and Machine State Log. Last crawl1970 means missing.
Crawled—not indexed, other reasons and total indexed are not in this export.
Retain prior Type4/no site-side defect assessment; no speculative indexability
rewrite, content padding or URL changes.

Before implementation, current production21-resource Googlebot/source checks
passed HTTP200, correct canonical/no noindex and HTTP→HTTPS apex. Controls included
home, Failure Rate's three resources, Parallel, K-out-of-N, all seven J1939 pages,
all five Coverage URLs, footer, sitemap and robots. CRLF/LF normalization only.
Static audits passed metadata, JSON-LD, local links/reachability, robots, llms,
CNAME, GA4 and sitemap110. No reproducible hard defect and no technical fix.
**IndexNow remains absent, unconfigured and unsubmitted.** No key creation,
API submission or dashboard resubmission is claimed.

## Bing

- Pages72 rows, **1,490 impressions /42 clicks /2.818792% CTR /5.636240 weighted
  position**. Queries698 rows, **1,254/42/3.349282%/5.453749**.
- All72 page average positions ≤10;697/698 query averages ≤10. B10 Excel's one
  impression at20 remains. This is not proof every impression was on page one.
- Versus November11 exports: page rows +2, impressions +166, clicks +4; query
  rows +58, impressions +115, clicks +4. Internal periods missing: these are
  export deltas, not equal-week rates.
- MTBF169/6/7.0414, Duane106/5/4.8491, availability103/3/5.5922, B10 113/3/5.7257,
  Failure Rate54/1/6.3704, Coffin30/2. Home173/2 is not all branded search.
- Queries reliability workbench107/1/4.6449, brand18/0, smin31/0, MTBF17/0,
  Duane steps15/0, inherent availability10/0, ADI6/1.
- J1939 DM1 page6 impressions/0 clicks/7.8333, previously3/0. Seven related query
  rows total8 impressions/0 clicks; three DM1 multiframe/multi-package variants
  contribute three impressions at7–9. Not high-volume demand or a full PGN lookup
  market estimate, but relevant to the actual reassembly→DM1 output gap.
- Raw Slovenian MTBF query still3 impressions/4 clicks/133.33% CTR. Preserve it,
  do not cap/drop/repair counts. Definitions/deduplication unresolved; not four
  unique visitors, not a proved site bug or a joined explanation of MTBF traffic.

## GA4 and contamination

October22–November18: **155 active /154 new /13.722581 seconds /679 events**.
First-user source users: direct126, Bing15, Google6, TechBaseDirectory2,
twelve.tools2, ChatGPT1, cn.bing.com1, DuckDuckGo1, thejoai/(not set)1 =155.
Session-source counts: direct125, Bing18, Google8, Tech2, twelve2 and four1s =159
sessions, not159 users. Last overlapping window had172 active, Google12 users/
19 sessions and Bing15/18: Google now6/8, Bing unchanged. Not independent weeks.
Small referrals are discovery clues, not conversions or proven engineering users.

Home63 views/56 users, Tools7/4, MTBF6/3, OEE6/2, Failure Rate3/1, Parallel3/3.
J1939 title views14 versus60; **October16 J1939 QA has now aged out of this window**,
so this is not proof of an organic collapse. October23 Failure Rate QA remains
inside. Singapore18/Ashburn16 do not prove bots; direct does not prove genuine
organic. No organic-by-title or landing-session join is available. Chinese zero-
view titles are not newly published local pages or a reproduced runtime bug.
November19 production QA will be outside this export and must be excluded from
future popularity attribution; do not disable analytics or infer clean cohorts.

## Existing growth candidates (maximum three)

Scores are editorial prioritization, not measured keyword difficulty, arbitrary
tool verdict thresholds or quantitative traffic projections.

| Candidate | Evidence and exact weakness | Expected value / cost / decision |
| --- | --- | --- |
| BAM→DM1, score79 | J1939 196/3, BAM22/9.14; three Bing multiframe impressions; current BAM only supplied raw payload while adjacent DM1 required manual transfer | Reuse tested decoder for one missing output step, preserve source and transport gates; bounded shared-JS regression. **GO** |
| K-out-of-N, score66 | 132/7/18.25, current formula/output functioning; no new missing task demonstrated | Existing search strength alone does not justify changing URL/output or another reverse calculator. **HOLD** |
| Failure Rate, score64 | 323/1/7.49, Bing54/1, FIT variants11 impressions; October23 already covers rates/FIT/MTBF | No second new gap proved. Preserve working outputs. **OBSERVE** |

### Current external verification / competition

Current searches and direct supplier documentation confirm multi-frame DM1's
transport→application workflow and source-address context:

- [CSS Electronics DM1 fields and examples](https://www.csselectronics.com/pages/j1939-73-dm1-diagnostic-message-dtc)
- [CSS Electronics J1939/BAM tutorial](https://www.csselectronics.com/pages/j1939-explained-simple-intro-tutorial)
- [python-can-j1939 transport source](https://github.com/juergenH87/python-can-j1939/blob/master/j1939/j1939_21.py)

CSS also advertises webCAN transport reassembly and DM1 support: an integrated
competitor exists. Do not claim a competition-free market, no equivalent free
tool, exact document scarcity or a verified search-volume count. This upgrade
closes our demonstrated manual-transfer gap, not an invented market monopoly.
Source support is for numeric fields and passive interpretation; no proprietary
dictionary, vehicle commands or equipment diagnosis inferred. Source comparison
is not a full audit or executed numerical certification of competitor tools.

## Expansion decision

Expansion considered: yes. Latest handover/research and accumulated named
exclusions, including November11's40 hypotheses/13 comparisons/5 deep rejections,
reviewed. Priority B's concrete output gap is the strongest bounded action now;
no stronger new four-task opportunity established in this review.

**New-cluster discovery branch not entered.** No fresh40-family funnel, shortlist,
finalist scores or hard-gate winner is claimed. Historical counts are not recycled
as current discovery. No new cluster, page, split tool or renamed old candidate.
Low traffic is not an expansion veto; future genuinely new opportunities remain
eligible when the exact independent-task/source/competition gates are met.

## Upgrade contract

- Tool/URL/type: existing passive checker,
  `/tools/j1939-bam-capture-checker.html`; no independent new tool/page.
- Intent: J1939 BAM DM1 multiframe capture checker / reassemble DM1 payload.
- User problem: see numeric application fields after trustworthy reassembly
  without manually transferring bytes and losing bus/source context.
- Inputs unchanged: extended classical CAN compact candump or id,data CSV with
  optional bus/time; 5,000 data rows/500,000 characters, BAM9–1,785 bytes.
- Logic: existing bamAudit first; only non-null observed payload and exact PGN
  65226→existing diagnosticPayload. No full-PGN lookup or new decode formula.
- Outputs: unchanged transport status/raw payload plus per-session raw lamp and
  numeric SPN/FMI/OC/CM; JSON/Copy/Print retain all bounded results. At most200
  session details and200 DTC rows across sessions on screen, with explicit notice.
- States: decoded / withheld / not-dm1 / invalid-dm1. Missing, duplicate, order,
  padding and declaration issues withhold payload and fields. Complete malformed
  DM1 preserves transport completeness/raw payload but withholds application
  fields. Other PGNs, including DM2 and different page bits, remain raw.
- CM=1 SPNs, OC127 and FF unavailable fields stay withheld; no merged ECU lamps,
  inferred bytes, repair advice, DTC clearing or equipment connection.
- Next decision: compare observed numeric records with the authorized ECU/source
  documentation, or resolve the capture gap; not health/safety clearance.
- Related: existing DM1, PGN filter, address-claim tools, guide/reference/hub.
  This is explicitly overlapping reuse, not a claim of four independent tools.
- URL/title/H1/canonical/description retained. CSS/shell/footer/badge/generator/
  sitemap/GA4 untouched. Versioned BAM UI and core imports avoid a cached old
  core lacking the new named export.

## Changes and local QA

- Four implementation files: BAM HTML, shared J1939 core/UI, J1939 fixtures.
  Shared standalone DM1 renderer extracted without changing its default output.
- `j1939-qa.mjs`: **124 fixtures PASS**, prior105 plus19. Covers exact numeric
  expected records, transport equality, missing/late duplicate/order/padding,
  invalid length, exact PGN/page bits, maximum1785-byte invalid DM1,1782-byte445-
  record valid DM1, CM/OC/FF, bus/source separation, report serialization, strict
  malformed input and deterministic repeat execution.
- Actual browser101-session/202-DTC test:200 preview rows, explicit limit notice,
  all202 records in report. Not just a DOM-hook or scrollWidth-only test.
- Both static audits PASS:111 public/110 indexable/110 sitemap, metadata/JSON-LD,
  canonical/links/GA4/etc. All42 calculators, Parallel,123 Failure Rate assertions,
  four Operating Profile and five Intermittent Demand tools PASS.
- Final local actual browser matrix: four J1939 tools ×1440/1280/1024/900/768/
  600/480/390 =32 rendered/run states. Measured innerWidth equals target each
  time; header/H1 overlap0, page overflow0, offscreen form controls0, one H1,
  footer loaded, no rendered NaN/Infinity. Screenshots visually inspected at
  desktop/tablet/mobile; label/form/output/method/footer layout checked.
- Mobile DTC table keyboard horizontal scrolling works inside its focusable
  region (scrollLeft197), page remains bounded; not hidden by global CSS.
- Run/default two DTCs + incomplete withheld session, Copy current report after
  async completion, Reset/cleared report/rerun, input invalidation, malformed
  capture, duplicate, CM1, non-DM1 and malformed-DM1 states checked in browser.
  Standalone DM1/filter/claim regression and console error0 observed.
- An earlier multi-tab viewport attempt did not change three tabs' actual widths;
  discarded, corrected to one selected tab with width assertions. Only the
  corrected final32 states are counted.
- **Native Print/PDF preview remains unverified.** A real Print button attempt
  blocked browser interaction without exposing a usable preview; temporary QA tab
  closed and testing resumed in a new tab. No PDF produced. Current report text
  contains title, URL, inputs, units, results and limits; invalid/uncomputed Print
  disabled and existing print CSS unchanged. Do not report preview/PDF PASS.
- Content: sufficient revised method/example/limitations; no thin new page,
  duplicate URL or incomplete added output identified in tested scope.
- `git diff --check` PASS; footer object unchanged. Deployment verification below
  is pending at the implementation commit, not silently inferred from local QA.

## Deployment and next state

Implementation commit and production verification: pending at this record's first
commit; append observed closure after normal push. Final SHA equality/0/0/clean
must be checked after the closing documentation push; avoid self-referential SHA.

- HIGH: none reproduced within tested scope; passive numeric fields are not
  equipment diagnosis, certification or safety clearance.
- MEDIUM: sparse/anonymous search signals, overlapping windows, GA4 QA traffic,
  Bing3/4 counting qualification, native Print-preview limitation.
- LOW: missing other Coverage reasons/totals, absent Bing internal periods,
  IndexNow unconfigured/unsubmitted; no indexation guarantee.

Next maximum3:

1. Follow equal-week and page-filtered J1939/BAM/DM1 signals after release; do not
   attribute property-level clicks or November19 QA views to the upgrade.
2. Follow genuinely newer Coverage and Bing counting definitions without
   speculative SEO churn or source-count alteration.
3. Preserve all exclusions; reopen a niche only with new independent-task/source
   evidence. Native Print preview and optional IndexNow remain explicit gaps.
