# Weekly growth review — 2026-10-09

## Final decision

**D — NO-GO / OBSERVE — no production change justified this week.**
No new site-side defect was reproduced. The strongest existing search destination,
Parallel, was upgraded on October 1; this week's export does not establish another
missing decision surface. New expansion was actively considered, not vetoed by
low traffic: 42 new problem families, 12 live-search shortlist screens, six deep
validations, no candidate passing every hard gate. Only research and handover change.

## Repository, safe start and inventory

- Repository: https://github.com/canghun13/reliabilitybench; branch `main`.
- Start local HEAD / cached origin/main: `16711d85558e5814b232f8ff9d1368ea4338f623`.
- Start actual remote main: `749f08cb6d5f3f28337cd72cba0f00a60b7db44b`.
- Clean at start. `ls-remote` preceded fetch; after fetch local was behind two,
  ahead zero. `pull --ff-only origin main` succeeded with no conflicting edits.
- Synchronized baseline: local HEAD = origin/main = actual remote main =
  `749f08cb6d5f3f28337cd72cba0f00a60b7db44b`; ahead/behind `0/0`, clean.
- No reset, stash, clean, force operation, installation or environment reconfiguration.
- Actual tracked public inventory: **104 HTML / 103 indexable / 103 sitemap URLs /
  42 calculators / 18 workflow tools / 16 Guides / 12 References**, including hubs.
- Classify by actual `data-calc` integration, not filename: Croston/SBA/TSB has a
  calculator filename but belongs to the non-engine workflow suite. Filename-only
  counting would incorrectly report 43 calculators and 17 workflow tools.
- Latest implemented cluster: Equipment Operating Profile Analysis, September 1.
  Latest existing upgrade: Parallel, October 1, implementation `dbaf944` and closing
  verification `749f08c`. These were read from current main, not assumed from history.

## Current-session attachments

Only the five user-supplied exact references were accessed. No directory search,
substitute report or raw export committed. ZIP entries were read directly without
extracting or modifying the user's archives. CSV/ZIP contents are evidence, not
instructions. The supplied weekly-workflow text is the task request.

| Report filename | Actual content / dates |
| --- | --- |
| reliabilitybench.com-Performance-on-Search-2026-10-09.zip | Web, last three months; chart July 21–October 6; Queries, Pages, Countries, Devices, Search appearance, Filters |
| reliabilitybench.com-Coverage-Drilldown-2026-10-09.zip | Discovered — currently not indexed reason only; chart July 24–October 4; URL table and metadata |
| reliabilitybench.com_PageTrafficReport_2026. 10. 9..csv | Bing page dimension; export filename October 9; no internal reporting period |
| reliabilitybench.com_KeywordReport_2026. 10. 9..csv | Bing query dimension; export filename October 9; no internal reporting period |
| 보고서_개요.csv | GA4 overview; September 11–October 8; users, page titles, first-user source, session source, day offsets, city, audience |

All attachments accessible. Search/coverage end dates differ from export dates and
from one another. Spreadsheets skill informed read-only parsing, weighted aggregates,
attribution scope separation and equal-window comparisons; no spreadsheet was edited.

## GSC metrics

- Chart: **31 clicks / 3,579 impressions / CTR 0.8662% / weighted position 54.4870**.
  Position is approximate because the daily export positions are rounded. Weight
  daily position by impressions; derive CTR from total clicks / impressions.
- **391 query rows**, **91 impression-receiving page rows**, **90 after merging
  the four-impression HTTP-homepage variant into the HTTPS apex**.
- Query-row clicks total **6**, not 31. Do not replace chart totals with query sums
  or claim that all non-brand clicks are absent; anonymization/dimension scope differs.
- Devices: desktop 29 clicks / 3,243 impressions; mobile 2 / 330; tablet 0 / 6.
- Queries: brand `reliabilitybench` 6/35/2.03; `accelerated life testing`
  0/100/46.33; `accelerated life test calculator` 0/71/49.79; `accelerated life
  testing tools` 0/32/27.19; `reliability of parallel system` 0/5/10;
  `parallel system reliability` 0/3/12.67; `parallel system reliability formula`
  0/3/23.33. Format here is clicks / impressions / position.
- Failure-rate queries remain small and low-ranking: `failure rate calculation`
  8 impressions/89.25; `calculate failure rate from mtbf` 6/96.83;
  `mtbf to failure rate calculator` 5/73.6; exact calculator 4/89.75.
  Page position and query position are different aggregates, not a joined table.
- Recent specialist entries include intermittent-demand classifier 21 impressions /
  4.19; Croston/SBA/TSB 13 / 8.46; CMMS hub 13 / 7.38. These support long-tail entry,
  not a claimed traffic breakthrough or proof that every new cluster is indexed.

| Existing page | Clicks | Impressions | Position |
| --- | ---: | ---: | ---: |
| Parallel calculator | 6 | 201 | 15.89 |
| K-out-of-N | 5 | 43 | 18.47 |
| Coffin–Manson | 4 | 32 | 7.94 |
| Failure rate | 1 | 112 | 18.10 |
| MTBF | 2 | 208 | 76.77 |
| B10 life | 1 | 28 | 16.68 |
| ALT hub | 0 | 418 | 52.62 |

### Equal-window comparison from this same chart

| Metric | September 23–29 | September 30–October 6 | Change |
| --- | ---: | ---: | ---: |
| Impressions | 234 | 367 | +133 / +56.84% |
| Clicks | 2 | 5 | +3; small sample |
| CTR | 0.8547% | 1.3624% | +0.5077 percentage points |
| Weighted position | 27.6765 | 31.6548 | 3.9783 positions worse |

Previous review (October 1) ended September 28: total 26/3,175/0.8189%/57.57,
372 queries, 89 page rows (88 canonical-merged). Current totals extend that report
by eight days, not one identical reporting week: +5 clicks, +404 impressions,
+19 query rows and +2 page rows. These are export differences, not causal lift.
The previous latest seven days were September 22–28 (233 impressions, 3 clicks,
30.37); do not mislabel comparison against that overlapping/offset period as the
equal-window result above.

Parallel aggregate changed 109→201 impressions, 4→6 clicks, 19→15.89 position;
K-out-of-N 32→43, 5→5, 17.97→18.47; ALT hub 411→418, 0→0, 53.11→52.62;
MTBF 154→208, 2→2, 75.06→76.77. Dimension exports lack date slices and query-to-page
joins. Parallel's change cannot be attributed to the October 1 release, especially
because the current performance cutoff is October 6.

## Coverage / indexing

- Reason metadata: **Discovered — currently not indexed**, all known pages.
- Latest chart October 4: **11**; previous October 1 export ended September 21 at
  **12**. Chart drops to 11 on September 22 and remains there through October 4.
- Table contains 11 URLs: contact, privacy, OEE guide, Weibull reference and the
  seven Equipment Operating Profile pages. About no longer appears in this reason
  table, but that alone does **not** prove it is indexed rather than moved to another
  reason. No indexed/crawled-not-indexed totals are supplied.
- All `1970-01-01` crawl dates are missing/sentinel values, not actual crawl history.
- The seven-page Type 4 / no-site-side-defect diagnosis remains governing. No new
  4xx, robots, canonical, discovery or render evidence warrants repeating that audit.
  No content, internal link, sitemap or title churn to chase this count.

## Bing and GA4

| Bing dimension | Rows | Impressions | Clicks | CTR | Impression-weighted position |
| --- | ---: | ---: | ---: | ---: | ---: |
| Pages | 56 | 795 | 20 | 2.5157% | 5.35849 |
| Queries | 370 | 700 | 20 | 2.8571% | 5.13857 |

All 56 page rows have average position ≤10; this is a row-average classification,
not proof that every impression was on page one. Do not sum page and query totals.
Bing exports supply no start/end date, so comparison with October 1 is descriptive,
not a verified same-window growth rate: pages 627→795 impressions, 18→20 clicks,
55→56 rows, position 5.30→5.36; queries 565→700, 18→20, 286→370 rows. Prior
first-page count and query-weighted position were unavailable and are not invented.

Important pages: MTBF 148 impressions/3 clicks/7.0000; B10 70/2/5.5714; Duane guide
63/3/4.9524; system availability 34/1/4.8235; Failure rate 28/1/6.8571; intermittent
fault guide 24/0/4.2917; intermittent-demand reference 18/1/4.5556; Coffin–Manson
16/1/5.75; Parallel 7/0/4.2857. Queries include `reliability workbench` 50/0/4.18,
`smin = (n x tt) / mtbf` 31/0/6; `mtbf calculator` 15/0/8.1333;
`steps to do duane model in statistics` 15/0/5; `adi intermittent descriptor`
6/1/2.1667. Irrelevant or extremely verbose queries are not automatic market demand.

GA4 September 11–October 8:

- **185 active / 182 new users / 818 events / 16.4811 seconds average engagement**.
- First-user source active users: direct 160, Bing organic **10**, Google organic
  **7**, data unavailable 2, ChatGPT AI-assistant 2, cn.bing.com referral 1,
  Ecosia organic 1, Qwant organic 1, twelve.tools directory 1.
- Session-source **sessions**, not users: direct 162, Bing organic **12**, Google
  organic **9**, ChatGPT 4, unavailable 2, cn.bing.com 2, other listed sources 1 each.
- Referral/directory samples are too small to call a meaningful recurring channel;
  cn.bing.com referral and directory visits are not silently relabeled organic.
- Direct is 86.49% of active users; Singapore is 135 users (72.97%), with a
  113-new-user daily spike at offset 0006. Broad all-page single visits and QA can
  contaminate popularity judgments. City/source are not joined; neither geography
  nor direct alone proves bots. Parallel's 9 views/6 users are not organic attribution.
- Previous overview was September 3–30: 195 users, first-user Google 5/Bing 11,
  sessions Google 8/Bing 14. Current rolling window shifts eight days; overlapping
  distinct-user counts cannot be subtracted into new-user or equal-week growth.
- Organic landing-page sessions, engaged-organic users and source-specific page
  popularity are unavailable. GSC/Bing carry the decision, GA4 is supplemental.

## Technical health and existing growth options

Googlebot-UA HTTP checks: home, Parallel, K-out-of-N, robots and sitemap **200**.
HTTP apex and HTTPS www finish at HTTPS apex. Sampled HTML has correct self-canonical,
index/follow and no X-Robots blocking header. Production sitemap contains 103 URLs.
Robots allows crawling and names the correct sitemap. All current automated suites
pass (details below). No reproduced technical action required within observed scope.
This does not claim a fresh full-browser or seven-page indexing re-audit.

Existing scores are judgment, not traffic forecasts: evidence /30, demonstrated
gap /25, value-cost /20, fit /15, bounded risk /10.

| Candidate | Evidence / search opportunity | Exact weakness and expected value | Score | Decision |
| --- | --- | --- | ---: | --- |
| Parallel | 201 impressions, 6 clicks, 15.89; related parallel queries | October 1 already removed fixed-three-path limitation and added failure/gain/input report; no second unmet output demonstrated. Another change now has weak incremental evidence | 28+3+7+14+9 = 61 | Observe release, not repeat upgrade |
| K-out-of-N | 43 impressions, 5 clicks, 18.47; narrow Bing 2-of-3 example | Existing N/K/identical-path input already solves that task. Unequal-path distribution might be useful but no current query establishes it; expanding model scope would be speculative | 21+6+11+12+8 = 58 | Observe, keep identical-path contract |
| Failure rate | 112 impressions, 1 click, 18.10; Bing 28/1/6.86 | Reciprocal-MTBF and zero-failure caveat already exist. Confidence bounds/units could help, but query evidence is small/low-ranked and population model must be established first | 20+5+10+12+8 = 55 | Observe; no arbitrary confidence feature |

## Expansion boundary and method

Current handover's complete named boundary, foundational/protected labels and the
October 1 research were reviewed. Prior normalized total is **230 families**;
do not add overlapping broad protected labels to this number. In particular all
earlier protocol/DAQ/historian/control-loop, cabinet thermal/shaft alignment/rotor
balance/TAB/heat tracing/tank settlement, data-QC/profile/forecast, diagnostics,
proof-test and maintenance governance families are excluded, not renamed.

This pass screens **42 distinct new problems**, advances **12** to current external
search, and deep-validates **6**. Broad rows are workflow hypotheses, not validated
keyword volumes; only shortlist demand labels have current qualitative SERP/tool
evidence. Rejecting an early hypothesis does not establish nonexistent demand.
Related equipment is not itself disqualifying: a new force/geometry/energy design
decision can differ from a previously reviewed inspection history. Conversely no
reused time-series algorithm or swapped equipment noun is counted as new.
All 42 become a named do-not-repeat boundary; prior 230 + these 42 = **272**.
Do not mistake a broad-screen boundary for 272 viable clusters.

### Broad discovery: 42 new workflow/problem families

Each row fixes the user/problem, exact intent and possible decision surface before
judging scope. Tools are provisional; outputs of one model are not four tools.
Repeat frequency is per job/revision unless stated otherwise. S = live shortlist;
R = early reject. Static feasibility is mathematical, not engineering authorization.

| # | Family / user and repeat problem | Query / possible decision tools | Distinction, feasibility and early verdict |
| --- | --- | --- | --- |
| 1 | Interference-fit assembly design; machinist checks a new shaft/hub joint | press fit force; fit envelope, elastic contact, thermal assembly, retained-load check | Not shaft alignment or bearing-life prediction; static geometry/material math good; tools collapse to one joint model; S |
| 2 | Elastomer gland geometry design; seal engineer revises a groove | O-ring gland calculator; squeeze/fill, stretch, tolerance, extrusion screen | Not seal-support fluid balance; static geometry good, compound/OEM dependence; S |
| 3 | Machinery vibration-isolation design; installer selects mounts | mount natural frequency; load distribution, transmissibility, motion clearance, resonance screen | Not spectral fault identification/balancing; SDOF feasible, four outputs not four independent visits; S |
| 4 | Gas-loaded hydraulic accumulator application sizing; fluid-power designer revises reserve | accumulator sizing; gas volume, precharge temperature, energy delivery, transient application | Not battery autonomy or actuator drift history; static gas law feasible, fast-cycle/OEM limits; S |
| 5 | Pneumatic actuator and feed-path sizing; machine designer changes a stroke | cylinder force/air consumption/cushion/tube flow calculator | Not compressed-air leak survey or motor-start analysis; distinct force/flow/impact decisions, vendor curves matter; S |
| 6 | Intrinsic-safety entity-loop verification; instrumentation engineer changes a barrier/device/cable | IS entity calculator; electrical match, cable envelope, mixed reactance, documentation | Not electronic derating or relay trip test; same certificate loop produces several views; paid standards/certification; S |
| 7 | Cable-tray fill and structural capacity; electrical installer changes cable schedule | tray fill/load/span/segregation checker | Not enclosure cooling; local schedule processing possible, code/product span tables; S |
| 8 | Occupational noise-dose/control planning; hygienist reviews changing tasks | noise dose, hearing protection, source sum, control comparison | Not equipment acoustic diagnosis; repeated shift/survey math possible, health/jurisdiction limits; S |
| 9 | Manual-handling ergonomic assessment; ergonomist reviews a redesigned maintenance task | NIOSH lifting, RULA, REBA, push/pull | Not labor scheduling/fatigue-hour plan; different human biomechanical models, observational/safety context; S |
| 10 | Power-screw drive design; designer checks loaded travel | lead screw torque, backdrive, buckling, critical speed | Not wear-trend RUL; first-principles geometry/load design, several methods but integrated competitors; S |
| 11 | Motor branch-feeder design; electrical designer sizes supply circuit | conductor ampacity, voltage drop, overload, starting voltage | Not motor-start event measurement; code/OEM data not universal; S |
| 12 | Power-factor correction bank design; electrical engineer revises reactive load | capacitor kvar, staging, resonance, discharge | Not power-quality event screening; load design rather than event logs, source impedance/standards needed; S |
| 13 | Keyed/splined shaft connection sizing; mechanical designer checks torque transfer | key shear/bearing/spline load; geometry selector and capacity check | Not gear backlash inspection; nominal stress feasible, load sharing/material criteria; fewer than four strong tools; R |
| 14 | Tapped-thread engagement/strip design; designer selects dissimilar fastener joint | thread strip, engagement, external/internal shear | Not torque-tool calibration or flange bolt-up; static strength feasible, one joint model and standard geometry; R |
| 15 | Flywheel inertial-energy sizing; machine designer limits speed ripple | inertia, cyclic-energy deficit, speed range, overspeed stress | Not field rotor balancing; mechanical stored-energy design, only 2–3 independent decisions and safety; R |
| 16 | Retaining-ring/groove axial-load design; designer selects retention | snap ring thrust/groove edge margin/corner capacity | Not hardware accountability; manufacturer formulas possible but catalog-dependent, same retention model; R |
| 17 | Hydraulic reservoir deaeration/layout sizing; fluid-power designer changes circuit | reservoir residence/baffle/air release/thermal capacity | Not tank stock reconciliation; multiphase geometry/CFD and oil-property dependence, weak universal four-tool basis; R |
| 18 | Vacuum handling grip design; automation designer picks suction cups | cup holding force, acceleration, leakage supply, release time | Not vacuum pump-down characterization; workpiece friction/porosity and product curves, OEM selectors; R |
| 19 | Flexible hydraulic-hose routing geometry; installer designs a moving hose path | bend radius, length/slack, twist, movement envelope | Not hose proof-test history; geometry possible but universal decisions need catalog/kinematics, fewer than four; R |
| 20 | Liquid-line pressure-transient protection; pipe designer changes closure time | water hammer, wave transit, surge vessel, transient comparison | Not pump suction/NPSH; transient model needs topology and boundary conditions, specialist validation; R |
| 21 | Liquid-transfer electrostatic ignition control; process engineer changes conductive/nonconductive transfer | charge relaxation, conductivity, fill velocity, bonding evidence | Not grounding test history; flammability/product/safety dependencies, no generic safe authorization; R |
| 22 | Power-system fault-current topology study; electrical designer changes network | symmetrical/asymmetrical current, motor contribution, impedance network, duty comparison | Not protection-relay test verification; network/model data and electrical codes, mature tools; R |
| 23 | Arc-flash incident-energy study; qualified electrical engineer changes protection | incident energy, clearing-time sensitivity, boundary, electrode configuration | Different from fault-current calculation; proprietary/paid method and life-safety, not four safe generic tools; R |
| 24 | Harmonic-load transformer/neutral design; designer changes nonlinear loads | K-factor, neutral loading, winding losses, capacity | Not transformer field-test comparison; spectrum-to-thermal design model, derating/ratings needed; R |
| 25 | Regenerative-drive braking-resistor selection; drive engineer changes stop duty | braking energy, pulse/continuous power, chopper resistance, duty fit | Not equipment-load histogram; energy-to-hardware selection, drive-specific limits/thermal curves; R |
| 26 | VFD reflected-wave output-filter design; drive engineer changes cable/motor | wave travel, peak reflection, dv/dt, filter comparison | Not insulation-resistance test; distributed cable/motor impedance and OEM pulse limits, source/model dependency; R |
| 27 | Industrial EMC filter/leakage design; designer changes converter grounding/filter | common-mode attenuation, leakage current, impedance, routing | Not OT network loss or electronic derating; distributed/high-frequency model and layout, hard static accuracy; R |
| 28 | Motor rewinding geometry; rewind engineer develops a winding | turns/conductor section/slot fill/coil pitch | Not motor diagnostics; topology/magnetic/material data and qualified craft review, proprietary motor details; R |
| 29 | Instrument-air dryer specification; utility engineer changes pressure/temperature demand | pressure dewpoint, moisture load, dryer correction, purge need | Not refrigeration superheat or water chemistry; OEM flow corrections/adsorbent data, 2–3 independent visits; R |
| 30 | Compressed-air aftercooler/condensate separator design; designer changes inlet air | moisture condensed, cooling load, drain duty, separator rating | Not leak-repair economics; psychrometric/hardware selection, shared mass-energy balance and vendor tools; R |
| 31 | Industrial lighting photometric layout; facility designer relocates fixtures | maintained illuminance, spacing/uniformity, glare, depreciation | Not emergency-light discharge tests; IES files/geometric optics and lighting standards, peripheral fit; R |
| 32 | Room acoustic-treatment design; facility acoustician changes absorption | RT60, absorption schedule, octave-band response, treatment coverage | Not worker dose or equipment diagnosis; room model/material data, generic calculators and weak site fit; R |
| 33 | Secondary-containment bund capacity; environmental designer changes stored volume | net retention, displacement, rainfall allowance, shared containment | Not inventory reconciliation; site/jurisdiction rules and one volume envelope, fewer than four tools; R |
| 34 | Site stormwater conveyance design; civil engineer changes catchment | rational runoff, time concentration, channel capacity, detention | Not groundwater dewatering campaign; new rainfall/catchment algorithms, climate/code/live data and peripheral fit; R |
| 35 | Equipment seismic-restraint design; structural engineer changes installation | seismic demand, anchor group, overturning, sliding | Not anchor proof-test result review; structural/code/material design, paid criteria/life safety; R |
| 36 | Rigging lift geometry; lift engineer plans a new load path | center of gravity, leg tension, spreader reactions, lift-point force | Not sling inspection lifecycle; geometry/static force feasible, qualified lift plan/product capacities; R |
| 37 | Temporary scaffold load/layout design; competent designer stages access | platform loading, support reactions, tie pattern, class selection | Not workfront readiness checklist; structural geometry/codes, safety-critical and peripheral; R |
| 38 | Hazardous-chemical storage segregation; EHS designer revises storage layout | incompatible-group mapping, quantity limits, spacing, containment | Not shelf-life/quarantine inventory; chemical/regulatory databases required, high maintenance, weak static feasibility; R |
| 39 | Combustible-dust deflagration protection design; process-safety specialist modifies vessel | vent area, duct penalty, isolation, suppression comparison | Not dust-collector cleaning-cycle analysis; explosion model/test parameters/standards/safety; R |
| 40 | Process inerting/purge design; process-safety engineer prepares a system transition | dilution/pressure purge, oxygen target, gas quantity, leakage effect | Not nitrogen generator capacity sizing; mixture/concentration procedure, measured oxygen and safety interlocks essential; R |
| 41 | Facility lightning interception/risk design; protection designer changes structure | collection area, risk components, rolling sphere, bonding plan | Not grounding/bonding test history; exposure/geometric code model, paid criteria and peripheral fit; R |
| 42 | Pressure-test stored-energy containment design; test-safety engineer plans exclusion | gas/liquid stored energy, failure release, barrier/exclusion, residual depressurization | Not hydrotest stabilization analysis; compressible energy/release physics, qualified hazard assessment, no universal exclusion radius; R |

The broad design hypotheses above are rejected or scoped by their own problems;
they are not an attempt to create equipment-named copies of the existing calculators.
Source support is not implementation-complete for early rejects. No GO decision
can be made from this broad table alone.

### Twelve live shortlist screens

Current evidence is a bounded sample of retrieved SERPs/first-party tool pages,
not a paid search-volume estimate, exhaustive SERP census, or competitor accuracy
certification. Articles/PDFs/worksheets/product selectors were distinguished from
interactive tools; manufacturer software was not automatically called no-login.

| Family | Demand / long-tail evidence and current alternative | Gap / breadth decision |
| --- | --- | --- |
| Fits | Strong qualitative press-force, holding-torque and shrink-temperature intent; [Eng Bench](https://engbench.com/pressfit.php), [Rapid Protos](https://www.rapid-protos.com/tools/press-fit-calculator/) integrate outputs | Deep; one joint model, no demonstrated missing browser workflow |
| O-ring glands | Strong squeeze/fill/stretch/groove intent; [Harkesh](https://www.harkesh.com/tools/groove-calculator), [Wayne Rubber](https://waynerubber.com/o-ring-gland-calculator/) expose design/validation | Deep; several metrics of one gland are not independent tools |
| Vibration isolation | Strong specialist mount stiffness/deflection/transmissibility intent; [Eng Bench](https://engbench.com/vib.php), [MegaCalc](https://megacalc.org/calculators/vibration-isolation-calculator) | Deep; integrated inverse/forward selection already present |
| Accumulators | Strong volume/precharge/usable-volume intent; [Accumulators Inc.](https://www.accumulators.com/tool/accumulator-size-calculator/) offers several application paths; [HYDAC](https://www.hydac.com.au/news/post/hydac-online-tools-one-capable-resource.html) describes sizing and temperature tools | Deep; application-specific hardware/model limits and mature coverage |
| Pneumatic sizing | Strong cylinder force/consumption/flow/impact intent; [SMC eTools](https://www.smcusa.com/help-and-support/etools) includes browser selectors plus downloads; [Festo flow application](https://www.festo.com/us/en/s/flowrate-calculation) | Deep; four meaningful decisions possible, but no strong free-workflow gap proved |
| IS loops | Strong specialist entity/cable-length/reactance intent; [ExKnowledge](https://exknowledge.com/pages/intrinsic-safety-calculator.html), [ICE Toolkit](https://www.icetoolkit.com/IntrinsicSafetyCalculator) | Deep; narrow workflow already covered; certification rules not replaced by generic math |
| Cable trays | Strong fill/span/loading intent; [Eaton resources](https://www.eaton.com/us/en-us/products/support-systems/b-line-series-software-and-resources/cable-tray-resources.html) advertises calculators but opens a registration form | Registration gap is real, not mislabeled free no-login; four independent decisions and manufacturer-neutral code/product data still unproven; reject |
| Noise exposure | Strong institutional dose/weekly exposure/protection intent; [HSE calculators](https://www.hse.gov.uk/noise/calculator.htm), [NIOSH resources](https://www.cdc.gov/niosh/noise/communication-resources/index.html) | Authoritative tools serve core task; health/rule context and peripheral site fit; reject |
| Ergonomics | Strong lifting/posture/strain intent; [NC State](https://ergocenter.ncsu.edu/resources-tools/analysis-tools/) supplies several free Excel methods; [NIOSH RNLE](https://cdc.gov/niosh/ergonomics/about/rnle.html) | Methods can be independent, but mature free alternatives, human observation and occupational-health scope; reject |
| Power screws | Strong torque/backdrive/efficiency intent; [TriboNet](https://www.tribonet.org/calculators/power-lead-screw-design-service-life-calculator/) integrates these and a wear screen; Autodesk provides method support | Strength/critical speed could differ, but no coherent unmet four-tool suite established; reject |
| Motor feeders | Strong conductor/starter/transformer sizing intent; [Schneider Motor Data](https://www.se.com/us/en/faqs/FA294498/) documents integrated modules | Code edition, installation and catalog dependencies; not an empty interactive SERP; reject |
| PF banks | Strong kvar/capacitor/staging intent; [Schneider tools](https://www.se.com/us/en/work/support/resources-and-tools/calculators-and-online-tools/) includes PF correction, harmonic and fault-current tools | Only 2–3 genuinely independent simple decisions; resonance/selection requires network data; reject |

Other primary screens: [Rotor Clip retention formulas](https://www.rotorclip.com/formulas-retaining-ring-load-capacity/),
[Parker reservoir CFD case](https://www.parker.com/content/dam/Parker-com/Literature/Hydraulic-Filter-Division-Europe/Websphere-Literature/Hydraulics_case_study.pdf),
[ABB DriveSize](https://www.abb.com/global/en/areas/motion/digital-tools/drivesize),
[Eaton fault-current tools](https://www.eaton.com/us/en-us/products/electrical-circuit-protection/fuses/short-circuit-current-ratings.html),
[HSE dust-explosion guidance](https://www.hse.gov.uk/food/safety-hazards/dustexplosion.htm),
[HSE inerting](https://www.hse.gov.uk/comah/sragtech/techmeasinerting.htm), and
[OSHA scaffold requirements](https://www.osha.gov/laws-regs/regulations/standardnumber/1926/1926.451).
These establish dependency/safety boundaries, not invented universal thresholds.

### Six deep validations and hard gates

Score components: demand/long-tail **30**, free interactive gap **20**, independent
tool breadth **20**, repeat use **10**, static accuracy/feasibility **10**, existing
differentiation **5**, maintainability/safety/fit **5**. Labels/scoring are judgment.
Gates A–K: demand, long tails, free opportunity, four strong independent tools,
repeat use, static feasibility, technical support, site differentiation,
maintainability, safety, natural cohesion. A high score never overrides a failed gate.

1. **Interference-fit assembly design — 66 = 23+7+10+9+8+5+4.**
   User: machinist/mechanical designer; repeated assembly or drawing revision.
   Intents: interference envelope, contact pressure, press force, shrink temperature,
   retained torque/axial load. Candidate inputs are diameters/tolerances, length,
   material elasticity/thermal coefficients, friction and applied load. Outputs
   would be tolerance envelope, pressure/stress, required assembly condition and
   retained-load screen. Eng Bench and Rapid Protos already combine these; the
   narrower tolerance-to-thermal-to-load workflow still has no demonstrated gap.
   Four pages are several outputs of one joint model, not four independent tools.
   Existing bearing/alignment families are adjacent, not reused here. Elastic
   geometry is browser-feasible, but roughness, plasticity, friction, dynamic loads
   and standards control reliability. NormCalc advertises DIN scope; that claim is
   not a substitute for licensed criteria or an audited implementation. **Fails C/D;
   G is not implementation-complete. NO-GO.** One inaccessible Kezuriba open was
   not treated as verified competition; other accessible first-party pages suffice.

2. **O-ring gland geometry — 65 = 24+6+10+9+7+5+4.**
   User: seal/design engineer; repeats per groove/material/application change.
   Intents: squeeze, gland fill, installed stretch, tolerance and extrusion clearance.
   Inputs: cross-section/ID, groove geometry, tolerance and material/application.
   Proposed squeeze/fill validator, stretch corrector, tolerance-envelope checker,
   extrusion/material screen share a gland; only 2–3 strong independent decisions.
   Harkesh already joins recommendation/validation/stretch adjustment, with related
   size/material tools; Wayne Rubber and other first-party calculators cover the
   exact geometry. A local tolerance workflow was considered but not demonstrated
   as an unserved destination. Static geometry is easy; chemistry, swell, hardness,
   temperature, pressure and finish prevent universal approval. Parker ORD-5700 is
   a primary technical source, but its full PDF open exceeded the web tool size
   limit; no complete handbook implementation review is claimed. **Fails C/D;
   G incomplete for execution. NO-GO.**

3. **Hydraulic accumulator applications — 66 = 23+8+11+9+7+5+3.**
   User: fluid-power designer/maintenance engineer; repeated duty/circuit changes.
   Intents: shell volume, precharge-temperature correction, usable fluid/energy,
   pulsation/line-shock application. Inputs would be absolute pressure states,
   temperature, required discharge and cycle assumptions. Candidate outputs are
   volume, corrected precharge, energy/delivery curve and application model review.
   Accumulators Inc. already separates sizing/usable volume/precharge and several
   applications; HYDAC describes ASPlight isothermal/adiabatic sizing and p0 tools.
   The narrower measured-precharge-to-usable-volume path is already served.
   First three tools are parameterizations of a gas-state balance; a trustworthy
   transient fourth needs dynamics, real-gas/heat transfer and OEM limits. Sources
   support public gas arithmetic, not arbitrary precharge policies or pressure
   safety approval. Low current-site overlap, high recurring utility, moderate
   assurance burden. **Fails C/D; F/J unresolved for transient/selection. NO-GO.**

4. **Vibration-isolation design — 63 = 22+7+8+9+9+4+4.**
   User: equipment installer/vibration engineer; repeats at relocation, mount or
   supported-mass change. Intents: mount load, natural frequency/static deflection,
   transmissibility, clearance/resonance. Inputs: supported mass, mount positions/
   stiffness, damping, disturbance and available travel. Proposed load distribution,
   stiffness/deflection, isolation response and clearance checker are useful but
   mostly one oscillator problem. Eng Bench already joins forward/inverse sizing,
   per-mount loading and response; MegaCalc has related dynamics tools. A CSV run-up
   analyzer would reuse protected operating-profile/spectral-analysis boundaries,
   so is not invented as a fourth. [Manufacturer selection guidance](https://novibration.com/wp-content/uploads/2020/10/Step-by-Step-Isolator-Selection.pdf)
   supports frequency/response selection but also requires rating/environment checks.
   Static SDOF screening is viable; rigid-body modes, unequal loading and structure
   flexibility need qualification. **Fails C/D; H would fail the CSV workaround.
   NO-GO.**

5. **Pneumatic actuator/feed sizing — 74 = 24+8+17+9+7+5+4.**
   Highest judgment score, **not a winning cluster**. User: machine designer/controls
   engineer; repeated stroke/payload/pressure/cycle changes. Four plausible
   independent decisions: cylinder force/load sizing (bore/rod/pressure/load →
   force margin); air-consumption budget (stroke/cycle/dead volume → normalized
   demand); feed-path conductance (tube/pressures/length → flow/dynamic constraint);
   stopping/cushion energy (mass/velocity/stroke → energy/OEM comparison).
   They have distinct intents and repeat value, low current-site overlap and good
   natural cohesion. But SMC offers browser product/circuit selectors plus
   downloadable guided-cylinder analysis; Festo offers an actual flow application.
   Product selectors are not mislabeled generic open calculators and downloaded
   tools are not called browser tools. A manufacturer-neutral local suite is
   conceivable, but generic force/consumption calculators plus those selectors leave
   no verified strong four-stage gap. Friction, compressibility, valve sonic
   conductance, cushioning ratings and dynamic load data matter. Public formulas
   support estimates; F/J for precise selection require validation. **Fails C;
   F/G/J not implementation-complete. NO-GO, not rejected merely for a strong brand.**

6. **Intrinsic-safety entity loops — 56 = 21+8+7+8+5+5+2.**
   User: instrumentation/hazardous-area engineer; repeats after barrier/device/cable
   changes. Intents: voltage/current/power match, cable allowance, L/C mixed-circuit
   treatment, loop documentation. Certificate parameters and cable data feed a
   compatibility result and permitted-length envelope; printing/documentation is
   not an independent fourth tool. ExKnowledge and ICE Toolkit already expose
   simplified interactive entity checks, with clear exclusions. The narrow
   certificate-to-cable task is served; nonlinear/multiple-source/temperature-class
   expansion requires controlled standards and certificates, not inferred rules.
   [Pepperl+Fuchs primary guidance](https://blog.pepperl-fuchs.com/en/2024/ensuring-product-safety-in-hazardous-areas-with-intrinsic-safety/)
   makes certification/area classification part of the workflow. Static comparisons
   are possible, but a generic pass must not certify ignition safety. Low existing
   overlap, moderate maintenance burden, high assurance burden. **Fails C/D/G/J.
   NO-GO.**

No cluster passed A–K. No tool contracts or implementation were begun. The decision
does not depend on first-party traffic for these new families, a paid Bing keyword
tool, a fixed score threshold or an assumption that all manufacturer results close
a SERP gap. Each failure is workflow-specific above.

## QA, production scope and risks

- PASS `tools/final-site-qa.mjs`: 104 public / 103 indexable / 103 sitemap;
  structure/nesting, IDs, metadata/canonical/OG/robots/JSON-LD, local links/orphans,
  shell hooks/partials, GA4 exactly once, favicon, llms, CNAME.
- PASS `tools/qa-check.mjs`: all 103 indexable pages.
- PASS `tools/calculator-qa.mjs`: 42 calculators plus actual dedicated Parallel
  module fixtures (2/3/4/100, endpoints, tiny/non-finite/malformed, precision/repeat).
- PASS five intermittent-demand and four operating-profile deterministic suites.
  This runs existing regression fixtures, not the protected seven-page production
  indexing/content/browser re-audit.
- PASS syntax for all 13 tracked JS/MJS files; whitespace/diff check before closing.
- Production HTTP/redirect/canonical/robots/sitemap checks pass as described above.
- Browser connector failed twice with `trusted Node process exited unexpectedly`.
  Current screenshots, console-error and overflow measurements are **unavailable**,
  not zero and not PASS. No browser installation or custom UI workaround used.
- No HTML/CSS/JS/generator/URL/sitemap/llms/GA4/CNAME or footer/badge changes. New UI
  fixtures, responsive viewport matrix, Copy/Reset/Print deployment checks are
  **not applicable to documentation-only changes**. Previous October 1 Print preview
  remains unverified; its browser timeout was not declared a new site defect.
- Content: no new public thin/duplicate/incomplete pages introduced.
- HIGH: 0 introduced, no new hard defect reproduced within measured scope.
- MEDIUM: current browser/console/overflow unverified due connector; previous Print
  preview limitation; small search samples; pre-existing jurisdiction-dependent
  consent handling. No consent changes authorized here.
- LOW: incomplete Coverage reason universe, unknown Bing periods, GA4 contamination,
  external crawl/index selection, qualitative demand and changing SERPs/source tables.

## Changes, deployment and exact next state

- Production: **none**. Research: this file. Handover: append-only October 9 entry.
- Final inventory unchanged: 104/103/42/18/16/12 in the order above.
- Implementation commit: **N/A — NO-GO**. Documentation commit SHA, push,
  ls-remote/fetch equality, ahead/behind and clean tree are verified after commit
  and reported in the task result; no self-referential SHA is fabricated in this file.
- Production verification for this record is limited to unchanged HTTP checks;
  a documentation push does not mean new calculator behavior was deployed/tested.

Next week, maximum three:

1. Compare the next equal GSC seven-day window; obtain date-sliced Parallel
   page/query evidence before attributing movement or proposing another upgrade.
2. Request full Coverage plus dated Bing and organic landing/engagement GA4 exports;
   do not turn reason-list disappearance or QA-like pageviews into organic demand.
3. Restore browser QA/verify actual Print preview, and reopen a named expansion
   family only for a demonstrated narrower unmet workflow; do not rerun these
   272 names or create a weak fourth tool.
