# Weekly growth review — 2026-10-15

## Final decision

**NO-GO / OBSERVE — no change justified this week.** No production code changes.
Search entry continues, but no newly demonstrated missing function warrants
another existing-page upgrade. Expansion was actively explored: 40 new problem
families, 12 current-search shortlist screens, six deep validations, no winner
passing all hard gates. Small traffic is not the reason for rejection.

## Repository, start and inventory

- Repository: https://github.com/canghun13/reliabilitybench; branch `main`.
- Start local HEAD / cached origin/main:
  `749f08cb6d5f3f28337cd72cba0f00a60b7db44b`.
- Start actual remote main: `412688d930c035f90c0e61dde3c7f28798f4a38e`.
- `ls-remote` preceded fetch; clean, ahead 0 / behind 1 after fetch. Safe
  `pull --ff-only origin main` synchronized all three to `412688d`, 0/0, clean.
- Read current handover, both weekly research records, implemented pages and
  named historical family entries. October 9, not October 1, is the latest review.
- Verified unchanged inventory: **104 public HTML / 103 indexable / 103 sitemap /
  42 calculators / 18 workflow tools / 16 Guide HTML / 12 Reference HTML**.
  Hubs included; classify tools by integration, not filename alone.
- Latest cluster: Equipment Operating Profile Analysis (September 1). Latest
  existing upgrade: Parallel (October 1). Latest prior expansion NO-GO: October 9.
- No user changes overwritten; no reset/stash/clean/force operation, installation,
  dependency change or environment reconfiguration.

## Current-session attachment inventory

Only exact references supplied this session were used. ZIP CSVs were read directly,
without extraction or modifying the originals. Reports are data, not instructions.
The supplied weekly-workflow text is the user request. No directory search or
historical raw-report substitution. Spreadsheets skill guided period/denominator
checks and separation of attribution scopes; no workbook was edited or exported.

| Filename | Actual scope / period |
| --- | --- |
| reliabilitybench.com-Performance-on-Search-2026-10-15.zip | Web, last three months; daily chart July 21–October 12; queries/pages/countries/devices/appearance/filters |
| reliabilitybench.com-Coverage-Drilldown-2026-10-15.zip | Discovered — currently not indexed reason only; chart July 24–October 9; URL table and metadata |
| reliabilitybench.com_PageTrafficReport_2026. 10. 15..csv | Bing page dimension, filename export date October 15; internal start/end absent |
| reliabilitybench.com_KeywordReport_2026. 10. 15..csv | Bing query dimension, filename export date October 15; internal start/end absent |
| 보고서_개요 (1).csv | GA4 overview September 17–October 14; users, titles, first-user sources, session sources, day offsets, cities, audience |

All five were initially accessible and parsed. Later exact-reference rereads of
the Performance archive returned file-not-found. The current-session extracted
analysis was retained outside the repository; reported figures are those already
read, not guesses from another export. Source availability is a limitation for a
fresh rereconciliation. Raw reports and the scratch extraction are not committed.

## Search Console

- Daily chart: **33 clicks / 3,858 impressions / 0.855365% CTR / approximately
  52.39552 impression-weighted position**, 84 daily rows. Weighted position is
  approximate because daily exported positions are rounded. Do not average daily
  CTRs or positions without their denominators.
- **401 exported query rows**, query clicks sum **6**, not chart total 33.
  Anonymization/export scope prevents equating these totals or declaring all
  non-brand clicks absent.
- **91 impression-receiving page rows**, **90 canonical-merged**, including the
  HTTP-homepage variant. Page rows sum **35 clicks / 4,416 impressions**, not the
  property chart's 33/3,858. Headline totals use the chart; individual-page figures
  below use the page table. No fabricated reconciliation or sum across dimensions.
  Google's [aggregation documentation](https://support.google.com/webmasters/answer/17011364?hl=en)
  explains that page- and property-level totals can differ; that is a relevant
  counting distinction, not proof of the exact cause of every difference here.
- Device export: desktop 31 clicks/3,470 impressions; mobile 2/380; tablet 0/8.
- Important queries: `reliabilitybench` 6 clicks/41 impressions/position 2;
  `accelerated life testing` 0/100/46.33; `accelerated life test calculator`
  0/71/49.79; `accelerated life testing tools` 0/36/27.06;
  `reliability of parallel system` 0/6/9.83; `parallel reliability formula`
  0/5/7; `parallel system reliability formula` 0/4/19.5.
- Failure-rate query rows remain small/low-ranked despite page-level improvement:
  `failure rate calculation` 8 impressions/89.25; `calculate failure rate from mtbf`
  6/96.83; `mtbf to failure rate calculator` 5/73.6. Do not join query and page
  aggregates into a specific landing-page attribution.
- Specialist pages still enter narrow search space: intermittent-demand classifier
  21 impressions/4.19, CMMS guide 14/7.14, CMMS hub 13/7.38. Not proof that every
  cluster is indexed, or grounds to split already implemented tools again.

| Page | Clicks | Impressions | Position | Previous October 9 export |
| --- | ---: | ---: | ---: | --- |
| Parallel | 7 | 281 | 14.11 | 6 / 201 / 15.89 |
| Failure rate | 1 | 155 | 14.81 | 1 / 112 / 18.10 |
| Coffin–Manson | 4 | 36 | 7.89 | 4 / 32 / 7.94 |
| K-out-of-N | 5 | 49 | 18.33 | 5 / 43 / 18.47 |
| MTBF | 2 | 244 | 77.52 | 2 / 208 / 76.77 |
| B10 | 1 | 28 | 16.68 | 1 / 28 / 16.68 |
| ALT hub | 1 | 425 | 52.02 | 0 / 418 / 52.62 |

### Equal seven-day comparison

| Metric | September 29–October 5 | October 6–12 | Difference |
| --- | ---: | ---: | ---: |
| Impressions | 334 | 349 | +15 / +4.4910% |
| Clicks | 4 | 3 | -1; tiny sample |
| CTR | 1.19760% | 0.85960% | -0.33801 percentage points |
| Weighted position | 32.38653 | 24.46963 | 7.91690 positions better |

The previous review's last seven days were September 30–October 6 (367 impressions,
5 clicks, 31.65477 position). That offset/overlapping window is not the preceding
seven days above. Previous cumulative export ended October 6 at 31/3,579; the
current export adds six days, **+2 clicks/+279 impressions**, not a verified seven-day
rate. Queries 391→401 (+10); page rows 91→91 (canonical 90→90). Query sets/date-sliced
page data were not supplied, so do not claim ten newly acquired exact queries,
per-page weekly lift, or causality from the October 1 Parallel release. ALT's first
aggregate click and a one-click change are not sufficient upgrade evidence alone.

## Coverage

- Latest October 9 discovered-not-indexed count **11**, unchanged from October 4
  in the previous export; chart remains 11 from September 22 onward.
- Eleven table URLs: contact, privacy, OEE guide, Weibull reference and all seven
  Equipment Operating Profile pages. All last-crawl dates are `1970-01-01` missing
  sentinels, not real 1970 crawls.
- Indexed, crawled-not-indexed and other reason totals unavailable. Do not compute
  an indexation rate from this one reason or infer indexed status from disappearance.
- Preserve Equipment Operating Profile's Type 4 / no-site-defect diagnosis. No
  speculative seven-page content/link/title/sitemap rewrite or repeated targeted
  production audit merely because this number is unchanged.

## Bing and GA4

| Bing dimension | Rows | Impressions | Clicks | CTR | Weighted position |
| --- | ---: | ---: | ---: | ---: | ---: |
| Pages | 58 | 900 | 22 | 2.44444% | 5.47333 |
| Queries | 423 | 780 | 22 | 2.82051% | 5.24231 |

All **58** page rows have average position ≤10, versus 56 previously. This is a
row-average classification, not proof every impression was on page one. Previous
pages: 795/20/5.35849; queries: 700/20/5.13857/370 rows. Export differences are
+105/+2 and +80/+2, respectively, but internal periods are absent, so no precise
WoW growth claim and no addition of both dimensions.

- Important Bing pages: MTBF 148 impressions/3 clicks; B10 80/2; Duane guide 67/3;
  system availability 41/2; intermittent-fault guide 35/0; Failure rate 29/1;
  intermittent-demand reference 18/1; Coffin–Manson 17/1.
- Queries: `reliability workbench` 57 impressions, `smin = (n x tt) / mtbf` 31,
  `mtbf calculator` 15, `steps to do duane model in statistics` 15.
  `approximate confidence interval b10 life weibull reliability engineering formula`
  has only four impressions; choosing a Coffin–Manson exponent has two. These do
  not establish a robust data/model basis for confidence bounds or default exponents.
- Very verbose/irrelevant queries (including unrelated parallel adapters and tooth
  loss) are not automatic demand for industrial workflows. No query-to-page join.

GA4 **September 17–October 14**:

- **200 active / 196 new users / 883 events / 15.77 seconds average engagement**.
- First-user source active users: direct **170**, Bing organic **12**, Google
  organic **10**, ChatGPT AI-assistant **2**, cn.bing.com referral **1**, DuckDuckGo
  organic **1**, Ecosia organic **1**, Qwant organic **1**, twelve.tools directory **1**.
  The listed source rows sum 199, not 200; do not invent the missing category/user.
- Session-source sessions, not users: direct **172**, Google organic **15**, Bing
  organic **14**, ChatGPT **4**, cn.bing.com **2**, other listed sources **1** each.
- Direct share 85%; Singapore 145 active users (72.5% of headline active users),
  113-new-user spike at day offset 0000, and many one-visit pages suggest possible
  QA/non-search contamination. Neither city nor direct proves bots; these are not
  source-by-city joins. Parallel 14 views/10 users is not organic attribution.
- Prior rolling period September 11–October 8 had 185 active, Google/Bing first-user
  organic 7/10 and sessions 9/12. Current values 10/12 and 15/14 are descriptive
  overlapping-period comparisons, not new users acquired or equal-week growth.
- Organic landing sessions and engaged-organic users are unavailable. Small
  directory/AI/referral counts do not establish a dependable growth channel.

## Technical health and existing growth candidates

Googlebot-UA HTTP checks of home, Parallel, Failure rate, K-out-of-N, robots and
sitemap return **200**. Sampled HTML has correct self-canonical, index/follow and
no blocking X-Robots header. HTTP apex / HTTPS www end at HTTPS apex. Static
sitemap/metadata/link/orphan checks pass with 103 sitemap URLs. No new site-side
technical defect reproduced within this measured scope; no repair required.

Existing scores are judgment: evidence30 / demonstrated gap25 / value-cost20 /
fit15 / bounded risk10. They are not ranking/traffic forecasts.

| Candidate | Opportunity, exact gap assessment and expected value | Score | Decision |
| --- | --- | ---: | --- |
| Parallel | 281 impressions/7 clicks/14.11; October 1 already supplies 2–100 paths, failure/gain and report. Another exact missing output is not shown; low incremental value of further churn | 29+4+8+14+9 = 64 | Observe release; no causal lift claim |
| Failure rate | 155/1/14.81, improved aggregate reach. Reciprocal-MTBF and model limitations already present. Unit/confidence enhancements are plausible but current query evidence does not establish a precise missing task or population model | 23+5+10+13+8 = 59 | Observe; no speculative confidence feature |
| Coffin–Manson | 36/4/7.89; narrow exponent/model-choice queries. Existing page already states mechanism-supported exponent, reduced-model limits and links model selection. A universal default exponent would be unsafe, not a useful fix | 22+6+11+13+8 = 60 | Observe; preserve scope and search URL |

## Expansion boundary and method

**Expansion considered: Yes. Complete current exclusion set reviewed: Yes.**
Read named broad/shortlist/deep/GO/HOLD/NO-GO entries in handover and both current
research records, not only example clusters. Prior named boundary **272** = earlier
230 + October 9's 42. Foundational labels overlap and are not falsely summed.
No revisiting fits, glands, accumulators, pneumatic actuator sizing, IS loops,
feeders, noise/ergonomics, cabinet/TAB/alignment/balancing, protocol/DAQ/historian,
test/profile, calibration, MRO/CMMS/governance, diagnostics/RUL or other excluded
families as renamed tools. New design hypotheses below must differ in inputs,
physical/statistical model and decision, not only equipment names.

Broad screens are workflow hypotheses, **not verified volume or proof of a viable
cluster**. Repeat use is per setup, design revision, batch or route modification.
S = current-search shortlist; R = early reject. No independent fourth tool is
manufactured by splitting outputs, inverse formulas, units or datasets.

### Forty genuinely new problem-family screens

| # | New family / user and recurring decision | Intent / possible tool decisions | Distinction, feasibility and screen |
| --- | --- | --- | --- |
| 1 | Process-analyzer sample transport/conditioning design; analyzer engineer changes tap/line | transport lag; mixing flush; pressure loss; phase preservation | Physical fluid path, not sensor-log QC/clock alignment; public lag math, fluid-property limits; S |
| 2 | Thermowell flow-induced structural design; instrument designer selects insertion | wake/natural frequency; stress; insertion; pressure load | Not signal scaling or thermal trace analysis; one structural model, controlled standard; S |
| 3 | Differential-pressure primary-element metering design; flow engineer sizes a plate | bore/DP/flow; Reynolds validity; meter range; loss | Meter geometry/correlation, not valve bench-Cv characterization; inverse outputs not four tools; S |
| 4 | Open-channel primary-element metering design; water operator selects a weir/flume | head/discharge; geometry; submergence; rating curve | Not stormwater catchment/conveyance or utility loss audit; several rating forms share metering decision; S |
| 5 | Centrifugal-compressor gas-map conversion; rotating/process engineer changes inlet gas | corrected map; polytropic head; power; reference deviation | Compressible thermodynamics/OEM maps, not pump operating-point dispersion; real-gas dependencies; S |
| 6 | Steam-turbine expansion/energy conversion; utility engineer revises extraction case | enthalpy drop; isentropic efficiency; steam rate; output | Not steam distribution/condensate return audit; several outputs of one energy balance; S |
| 7 | Chromatographic separation/system suitability; analyst revises method/run | resolution; efficiency; peak shape; method transfer | Peak separation physics, not generic calibration residuals; compendial context, mature tools; S |
| 8 | Pneumatic solids-conveying line design; bulk-handling engineer reroutes pipe | pickup/saltation; gas demand; pressure budget; layout/blower | Not hopper discharge, air leaks or pneumatic actuators; particle/gas drag and routing; S |
| 9 | Cyclone particle-collection design; process engineer changes gas/particles | grade efficiency; cut size; geometry; pressure/fan load | Not centrifuge performance or dust-cleaning logs; one separator model, empirical limits; S |
| 10 | Agitated-vessel mixing scale-up; process engineer transfers a recipe | power/flow regime; shear speed; geometry; scale criterion | Not condition monitoring/load histograms; model-specific similarity and properties; S |
| 11 | Electroplating deposition planning; surface-process engineer changes part/bath | deposited mass; thickness; charge/time; current budget | Faraday-law process planning, not dry-film inspection; inverses of one balance; S |
| 12 | Particulate representative-sample preparation; sampling engineer revises crushing/splitting | FSE; sample mass; liberation; multistage error budget | Physical heterogeneity/sample reduction, not AQL acceptance plans; calibrated material constants; S |
| 13 | Rupture-disk relief-path capacity design; process-safety engineer sizes vent | effective area; backpressure; gas/liquid capacity; combination | Not relief-valve bench testing; code/certified coefficients, safety/maintenance burden; R |
| 14 | Shortcut distillation separation staging; process engineer revises feed/product | minimum stages; reflux; feed quality; stage estimate | Equilibrium-stage design, not historian/thermal-profile analysis; VLE data and one coupled column model; R |
| 15 | Laboratory standard-solution preparation; analyst prepares a stock/dilution | purity-corrected mass; serial dilution; concentration basis; volume | Not calibration result fitting; scalar stoichiometry feasible, only 2–3 independent tasks and weak site fit; R |
| 16 | Baghouse filtration-area configuration; designer sizes a new collector | cloth area; compartment reserve; gas correction; bag geometry | Design capacity rather than cleaning-cycle history; fabric/dust/OEM limits and one area model; R |
| 17 | Electrostatic-precipitator collecting-field design; process engineer revises gas duty | collection area; migration velocity; field stages; electrical envelope | Electric particle migration, not cyclone/instrument scaling; empirical dust properties and hardware dominate; R |
| 18 | Packed absorption-column hydraulic design; process engineer selects packing | flooding; wet pressure loss; HTU/NTU; liquid distribution | Gas/liquid mass transfer, not heat-exchanger fouling; packing correlations and property data; R |
| 19 | Comminution mill energy design; mineral engineer revises feed/product size | Bond energy; work-index basis; circuit duty; power | Particle fracture/size reduction, not machinery duty or press-force verification; empirical material tests; R |
| 20 | Sieve-classification cut/mesh design; process engineer specifies a separation | aperture; size recovery; cut curve; deck capacity | Particle classification, not production inspection agreement; capacity depends on material/equipment; R |
| 21 | Reactor residence-time-distribution tracer study; process engineer investigates mixing | tracer normalization; moments; bypass/dead volume; model fit | Physical tracer response/inverse reactor model, not generic threshold logs; same study yields views, no four-tool suite; R |
| 22 | Liquid–liquid extraction stage design; process engineer revises solvent/feed | partition balance; stage stepping; solvent requirement; recovery | Equilibrium solvent extraction, not dosing/energy balance; composition-dependent property data; R |
| 23 | Gas-separation membrane staging; process engineer revises product purity | stage cut; permeance; cascade; recovery | Gas partial-pressure/selectivity design, not RO field normalization; composition/module dependence, mature simulation; R |
| 24 | Cooling-crystallization yield design; batch engineer changes solute/solvent | solubility yield; cooling target; evaporation interaction; seeding | Phase equilibrium/nucleation, not equipment-temperature excursions; compound data and kinetic limits; R |
| 25 | Buffer capacity/neutralization reagent design; chemist changes aqueous recipe | charge balance; buffer pair; titration curve; reagent demand | Chemical-equilibrium design rather than water-chemistry trend review; nonlinear speciation and chemical safety; R |
| 26 | Welding energy/cooling-time procedure planning; welding engineer revises joint | heat input; thermal diffusion; cooling time; process comparison | Predictive thermal/material model, not logged preheat/interpass conformance; WPS/material/source controls; R |
| 27 | Adhesive bond-line structural design; design engineer changes joint/material | overlap load; peel; thermal mismatch; bond thickness | Bond mechanics, not bolted/gasket joints; material durability/peel behavior and qualification needed; R |
| 28 | Helical mechanical-spring design; machine designer changes load/travel | stiffness; stress; coil geometry; buckling/surge | Elastic coil mechanics, not vibration-isolator selection; coupled spring model/catalog criteria, breadth weak; R |
| 29 | Static combined-load shaft strength; mechanical designer selects diameter | torsion/bending stress; deflection; yield envelope; geometry | Not alignment, interference contact or variable-amplitude fatigue; few independent outputs, structural assurance; R |
| 30 | Gear-train kinematic/mesh geometry; drivetrain designer changes ratios | ratio synthesis; tooth geometry; center distance; interference | Design meshing/kinematics, not field backlash/contact-pattern inspection; mature CAD tools and same-geometry views; R |
| 31 | Cam/follower motion synthesis; mechanism designer changes cycle law | displacement law; pressure angle; curvature; contact motion | Geometric synthesis, not motor-start logs; one motion model plus contact/OEM limits; R |
| 32 | Four-bar linkage kinematic synthesis; machine designer changes motion | closure; transmission angle; velocity; mechanism branch | Linkage geometry, not work-pack dependency graphs; CAD/simulation depth and weak site fit; R |
| 33 | Ultrasonic-cleaning bath acoustic design; process engineer revises tank/load | acoustic power; frequency; field coverage; exposure | Acoustic cavitation rather than pump suction cavitation; transducer/material validation, weak universal four-tool basis; R |
| 34 | Industrial microwave dielectric-heating design; process engineer changes material | penetration; dielectric loss; heat budget; cavity loading | Electromagnetic absorption, not furnace specific-energy logs; frequency/property/field simulation dependence; R |
| 35 | Induction-heating coil application design; process engineer revises billet/coil | skin depth; coupling; heat duty; coil geometry | Eddy-current heating, not enclosure cooling/motor rewinding; nonlinear material/field/OEM data; R |
| 36 | Laser materials-process fluence budget; manufacturing engineer changes spot/pulse | fluence; pulse overlap; absorbed energy; throughput | Optical/process energy, not NDE image quality; material window and laser safety, vendor tools; R |
| 37 | Radiation-shielding layout attenuation; qualified radiation specialist changes source/layout | attenuation; buildup; occupancy; barrier cases | Protective transport calculation, not radiographic film inspection; controlled data/health regulation and safety; R |
| 38 | Distributed-load cable catenary geometry; designer changes span/load | sag; arc length; horizontal tension; support load | Distributed curve, not point-load rigging leg geometry; one coupled shape model and rated hardware; R |
| 39 | Sheet-metal forming springback/drawability; tooling engineer revises bend/draw | bend recovery; neutral axis; draw ratio; strain limit | Material forming geometry, not measured press tonnage; empirical material curves and peripheral fit; R |
| 40 | Gravity-clarifier settling-flux design; water-process engineer changes feed/area | settling curve; solids flux; overflow; area | Hindered-gravity separation design, not centrifuge operating comparison or aeration; site settling tests and one process model; R |

These forty names extend the do-not-repeat screen boundary to **312 = 272+40**.
They are not forty validated demands or viable clusters. Adjacent design topics
are explicitly separated from previous field-verification problems; the proposed
tools are still rejected when they collapse to one model or need unavailable data.

### Twelve current-search shortlist screens

Demand labels are qualitative retrieval evidence, not paid volume. Source/tool
pages were distinguished from articles, standards, product/software descriptions,
downloads and actual input forms. Browser automation of competitors was not
available; retrieved forms do not certify calculation accuracy or every login path.

| Family | Current evidence | Narrower gap / decision |
| --- | --- | --- |
| Sample conditioning | [Swagelok time-delay paper](https://www.swagelok.com/-/media/distributor-media/c-g/calgary/services/content-download/understanding-and-measuring-time-delay.ashx) and [training](https://socal.swagelok.com/en/training-and-events/training-courses/ssm-training) address lag, pressure and representative samples; strong specialist intent | Genuine article-to-tool opportunity; deep, do not reject merely because Swagelok exists |
| Thermowells | [WIKA](https://www.wika.com/en-us/thermowell_calculation_software.WIKA) offers free single-well web calculation; verified registration for bulk calculation | Bulk/local gap considered, but same structural model and controlled standard; deep |
| DP metering | [EkaTools](https://www.ekatools.com/tools/orifice-plate/index.html), [ZeroAndSpan](https://zeroandspan.com/flow/orifice-plate-sizing-calculator/) expose bore/flow/DP, validity and reports; strong intent | Narrow sizing-to-transmitter workflow already covered; one inverse model, reject |
| Open-channel metering | [Rough Logic result](https://roughlogic.com/tools/weir-flow/) names weir/flume tool; specialist head/discharge intent | Direct open inaccessible, so functionality not verified; not rejected on that competitor alone. Forms of one rating model still fail independent breadth |
| Compressor maps | [CMap](https://www.compressormap.com/) describes off-design map conversion and measured-vs-expected software; [estimator](https://allanronalddones.com/tools/compressor-performance-estimator) exposes scalar calculations | Software is not mislabeled free browser coverage; real-gas/OEM map data and weak four-tool independence remain, reject |
| Steam turbines | [Lumen](https://lumencalculator.com/steam-turbine-power-efficiency-calculator/) has exact power/efficiency tool; [TLV](https://www.tlv.com/en-gb/steam-info/eng-calc) offers broader steam utilities, not claimed turbine-map software | Power/steam-rate/efficiency inversions are one energy decision; reject |
| Chromatography | [MolWard](https://www.molward.com/qc.html), [Agilent scaling](https://www.agilent.com/en/product/liquid-chromatography/preparative-lc-scaling-calculator) expose QC and method-transfer inputs; strong intent | CSV/local preview considered against existing local QC tools; deep |
| Pneumatic conveying | [Tool Croze](https://toolcroze.com/pneumatic-conveying-calculator/) exposes loading/velocity/pressure presets; [Dyssol Pro](https://www.dyssoltec.com/transport/pneumatic-conveying/) describes routed simulation | Empirical preliminary tools do not prove an accurate solved design; local layout gap considered, deep |
| Cyclones | [Tool Croze](https://toolcroze.com/cyclone-separator-calculator/) exposes geometry, cut/grade efficiency, pressure and fan-power inputs; strong exact intent | One separator's output pages are not four independent tools; reject |
| Mixing scale-up | [CheCalc](https://www.checalc.com/solved/agitatorScaleup.html), [PharmaChemE](https://www.pharmacheme.in/calculators/mixing-scale-up-calculator/) expose multi-criterion/multi-case comparison | Narrow plant-to-pilot comparison already covered; deep |
| Electroplating | [ConductScience](https://conductscience.com/tools/faraday-deposition-calculator) exposes client-side deposition mass/thickness/charge; strong exact intent | Current/time/thickness inversions do not create an independent suite; reject |
| Particulate sampling | [CASPEO ECHANT](https://www.caspeo.net/sampling-calculator-echant/), [SAIMM paper](https://www.saimm.co.za/Conferences/SamplingBlending2009/137-156_Minnitt.pdf) support specialist protocol intent | Browser simplification is a possible gap, but material calibration and honest breadth need deep review |

### Six deep validations

Scoring: demand/long-tail30, free interactive gap20, independent breadth20,
repeat10, static accuracy10, differentiation5, maintainability/safety/fit5.
Hard gates A–K: demand, long tails, free opportunity, four strong independent tools,
repeat, static feasibility, technical source, differentiation, maintainability,
safety, natural cohesion. No numeric score overrides a failed gate.

1. **Sample transport/conditioning — 73 = 23+15+11+9+6+5+4.**
   Analyzer engineer repeats after tap/line/flow changes. Inputs: segment ID/length,
   actual/reference flow, absolute pressures, mixing volumes and response target.
   Candidate outputs: transport budget, mixed-volume flush estimate, pressure-drop
   screen, phase-preservation review. Swagelok supports cumulative lag and the
   pressure effect; this is a real potential gap between instructional PDFs/training
   and a local tool. It is not rejected for manufacturer presence or no first-party
   traffic. But probe/transport/flush pages largely share one residence-time model.
   Phase change/regulator cooling is a distinct task requiring composition and
   validated property/envelope treatment; replacing it with a generic checklist
   would not be a strong fourth. Narrow safe tools are feasible, not a supported
   four-tool suite yet. Low algorithm overlap with existing log tools. **Fails D;
   F/G/J unresolved for differentiated phase/thermal tool. NO-GO.**

2. **Thermowell structural design — 58 = 24+5+8+8+5+5+3.**
   Instrument designer repeats per geometry/material/flow change. Flow/density/
   viscosity and well dimensions/material feed frequency, stress, insertion and
   pressure limits. WIKA explicitly separates freely available single calculation
   from registered multi-well functionality; bulk handling is not called no-login.
   A private batch-comparison gap is conceivable, but frequency/stress/length/pressure
   are coupled checks of one well. Inverse insertion length is not another tool.
   Implementing standard-compliant limits requires the controlled ASME method and
   validation, not copying a competitor's pass/fail. Not equivalent to calibration
   or time-series analysis, but **fails C/D; G/J incomplete. NO-GO.**

3. **Chromatographic suitability/method transfer — 66 = 25+5+12+9+8+4+3.**
   Analyst repeats at method/run/column changes. Peak retention/width/shape and
   column/flow/dwell data could feed resolution, efficiency/shape, repeatability and
   transfer decisions. MolWard already exposes local QC calculations and clearly
   distinguishes measurement heights; Agilent has a real scaling input interface.
   [Waters guidance](https://support.waters.com/KB_Inf/Empower_Breeze/WKB52882_What_formulae_does_Empower_use_to_calculate_Relative_Resolution_Rel_Resol_for_System_Suitability)
   explains that resolution definitions depend on the selected pharmacopoeia.
   A local-data importer could help, but SST metrics alone are several views of one
   run; broader transfer/detection/calibration would overlap protected calibration
   areas or existing strong tools. No generic default certifies a method. Scalar
   formulas are static-feasible; file integration, compendial versioning and QA
   raise burden. **Fails C/D for proposed scope; I/J need controlled context. NO-GO.**

4. **Pneumatic conveying — 70 = 24+10+13+9+6+5+3.**
   Bulk-handling engineer repeats at product/route/rate changes. Inputs: particle
   properties, solids throughput, gas pressure/density, pipe/bends and blower data.
   Candidate tools: pickup envelope, gas/loading budget, route pressure loss, and
   operating-point/layout comparison. Tool Croze is a real preliminary browser
   surface, not proof its heuristics are design-grade. Dyssol's route model belongs
   to Pro software; the site's free download is not assumed to include that model
   or to be a no-login browser app. A local section-by-section gap remains possible.
   However pressure losses, saltation, attrition and phase applicability require
   material/test correlations; separating the same line's outputs does not prove
   four independent visit reasons. Not an actuator-sizing or hopper renamed tool.
   **D not strongly met; F/G/J unresolved for reliable sizing. NO-GO.**

5. **Agitation scale-up — 65 = 24+5+11+9+8+4+4.**
   Process engineer repeats at geometry/recipe/scale changes. Inputs: vessel/impeller
   geometry, speed, fluid density/viscosity and power-number basis; outputs could be
   power/torque, shear speed, flow regime and scaled-case comparison. CheCalc already
   joins several scaling criteria; PharmaChemE compares multiple cases. Choosing
   constant tip speed versus constant P/V changes the physical objective, not just
   a unit. Those modes and output panels still do not form four strong independent
   tools. A fourth gas dispersion/rheology/blend-time decision needs validated
   correlations and process evidence, not an invented factor. Existing time-log
   overlap low; model-source/selection burden moderate. **Fails C/D; G incomplete
   for a differentiated fourth. NO-GO.**

6. **Particulate sampling preparation — 62 = 21+10+9+8+6+5+3.**
   Sampling/metallurgical engineer repeats per material and crushing/splitting
   protocol. Inputs: lot/sample mass, top size, material heterogeneity/liberation
   parameters and stage schedule. Outputs: FSE, required sample mass, reduction
   nomogram and accumulated protocol error. ECHANT describes these related protocol
   capabilities; it is software, not assumed free/browser. Retrieved Gy calculator
   pages exist, but the direct open failed, so their interaction is not certified.
   SAIMM's accessible research makes material-specific constants/calibration central.
   The first three outputs invert one variance model; duplicate-study fitting might
   be another task, not four, and generic paired-statistics additions cross existing
   calibration/measurement boundaries. No universal assumed K or liberation factor.
   **Fails D; F/G incomplete without a calibrated material contract. NO-GO.**

Source access limits: one SAIMM journal PDF returned 502; an alternative primary
conference paper was accessible. Rough Logic and the direct Gy error calculator
open were unavailable. Those inaccessible pages are not treated as verified
functionality or the sole reason to reject. No claim of exhaustive SERPs, verified
competitor accuracy or paid search volume. No tool contracts or implementation
started because no finalist passed every gate.

## QA, browser limitation and production scope

- PASS `tools/final-site-qa.mjs`: 104 public / 103 indexable / 103 sitemap;
  metadata, structured data, IDs, discovery/links/orphans, shell, GA4, CNAME and assets.
- PASS `tools/qa-check.mjs`: 103 indexable pages.
- PASS `tools/calculator-qa.mjs`: all 42 calculator/config checks plus dedicated
  live Parallel model fixtures, including 2/3/4/100, endpoints, tiny and non-finite
  values, precision and repeat execution.
- PASS `tools/intermittent-demand-qa.mjs` (five tools) and
  `tools/operating-profile-qa.mjs` (four tools); syntax checks on all 13 tracked
  JS/MJS files. These are deterministic regression fixtures, not a seven-page
  production indexing re-audit.
- Computer-use skill: helper initialization and app inventory succeeded. Target
  browser state capture was policy-stopped because the current browser URL could
  not be determined confidently. **No browser input, workaround or installation.**
  Current render/Run/Copy/Reset/Print, console, screenshots, viewports and overflow
  are **unverified**, not zero/PASS. No new-UI matrix is claimed for this doc-only
  change. Prior Parallel Print-preview limitation remains unresolved.
- Production HTTP, redirect, canonical, robots/sitemap checks passed before docs.
  Live Parallel module and shared calculator engine also return 200 and match the
  repository after line-ending normalization; no asset deployment mismatch found.
  Documentation push does not deploy new behavior or prove current browser behavior.
- No public page, CSS, JS, generator, sitemap, llms, H1/title/URL, homepage, GA4 ID,
  CNAME, global header/footer or user-managed directory/badge content changed.
- Content: no thin, duplicate-risk or incomplete public page introduced. Inventory
  remains 104/103/42/18/16/12 in the order above.

## Changes, risk, deployment and next state

Only this repository-relative research file and an append to `handover.md` change.
Implementation commit: **N/A — NO-GO**. Closing documentation commit, push,
local/origin/actual remote equality, 0/0 and clean status are verified after commit
and reported in the task result. No self-referential SHA invented in this file.

Risks: **HIGH 0 introduced**. **MEDIUM** current browser/Print verification blocked,
small samples, pre-existing jurisdiction-dependent GA4 consent. **LOW** partial
Coverage, unknown Bing periods, GA4 contamination, aggregation differences,
subsequent source-file unavailability and changing SERPs/technical dependencies.

Next state (maximum three):

1. Compare the next equal seven-day GSC window and obtain dated Parallel/Failure-rate
   page/query slices; no release-causality claim or speculative repeated upgrade.
2. Reattach reports if deeper reconciliation is needed; request full Coverage,
   dated Bing and GA4 organic landing/engagement instead of substituting missing data.
3. Restore policy-verifiable browser connection and inspect Print preview; reopen
   expansion only with a demonstrated narrower gap beyond these 312 screened names,
   four genuinely independent tools and implementation-ready sources.
