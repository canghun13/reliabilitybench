# ReliabilityBench Handover

## 1. 프로젝트 개요

- 프로젝트명: ReliabilityBench
- 도메인: `reliabilitybench.com`
- 목적: Reliability & Maintenance Engineering 분야의 전문 계산기/참고자료/가이드 사이트 구축
- 주요 수익화: Google AdSense + 향후 CMMS/EAM/maintenance software 제휴 또는 리드
- 호스팅: GitHub Pages
- DNS/CDN: Cloudflare
- 구조: Static HTML/CSS/JavaScript only
- 데이터베이스: 사용하지 않음
- 기본 언어: 영어
- 개발/운영 지시 문서: 한국어 사용

---

## 2. 핵심 포지셔닝

단순 Maintenance KPI 계산기 모음이 아니라 아래 4개 축을 통합한 전문 산업 툴 사이트로 구축한다.

1. Reliability Engineering
2. Maintenance Performance
3. Asset & Downtime Economics
4. MRO Spare Parts Planning

HVAC Tools Hub 및 PlasticsCalc와 구조/디자인/콘텐츠 인상을 확실히 분리한다.

---

## 3. 절대 규칙

### 3.1 PlasticsCalc식 사후 대수술 금지

초기 구축 단계부터 아래 항목을 반드시 반영한다.

- 디자인 독립성
- 충분한 본문 콘텐츠
- 명확한 페이지 계층
- 모바일 반응형
- 계산기 입력/결과 UX
- Formula / Method / Example / Notes 구조
- 내부 링크
- canonical/meta/OG/JSON-LD
- About / Contact / Privacy
- robots.txt / sitemap.xml / llms.txt
- favicon
- GA4
- GSC 대응 구조

### 3.2 Thin Content 방지

계산기 페이지는 계산기 UI만 두지 않는다.

각 툴 페이지는 가능한 범위에서 다음을 포함한다.

- 목적 설명
- 입력값 설명
- 계산 공식 또는 방법론
- 계산 절차
- 결과 해석
- 실무 예시
- 주의사항 / 한계
- 관련 계산기
- 관련 가이드 또는 reference

불필요하게 같은 설명을 복제하지 않는다.

### 3.3 검색 의도 중복 금지

비슷한 계산을 URL만 나누어 중복 생성하지 않는다.

독립 페이지는 아래 조건 중 하나 이상을 만족해야 한다.

- 입력값이 실질적으로 다름
- 계산 목적이 다름
- 사용자가 기대하는 결과가 다름
- 검색 의도가 명확히 다름
- 실무 활용 맥락이 다름

---

## 4. 초기 콘텐츠 클러스터

### Reliability Engineering
- MTBF Calculator
- MTTR Calculator
- MTTF Calculator
- Failure Rate Calculator
- Reliability Probability Calculator
- Mission Reliability Calculator
- Series System Reliability Calculator
- Parallel System Reliability Calculator
- K-out-of-N Reliability Calculator
- System Availability Calculator
- Inherent Availability Calculator
- Operational Availability Calculator

### Failure & Life Analysis
- Weibull Reliability Calculator
- Weibull Failure Probability Calculator
- B10 Life Calculator
- B50 Life Calculator
- Hazard Rate Calculator
- Probability of Failure Calculator
- Expected Failures Calculator

### Maintenance Performance
- OEE Calculator
- TEEP Calculator
- OOE Calculator
- Planned Maintenance Percentage Calculator
- Preventive Maintenance Compliance Calculator
- Schedule Compliance Calculator
- Maintenance Backlog Calculator
- Wrench Time Calculator
- Reactive vs Planned Maintenance Ratio Calculator

### Asset & Downtime Economics
- Downtime Cost Calculator
- Lost Production Calculator
- Breakdown Cost Calculator
- Maintenance Cost per Asset Calculator
- Maintenance Cost as % of RAV Calculator
- Repair vs Replace Calculator
- Maintenance ROI Calculator

### MRO Spare Parts
- Reorder Point Calculator
- Safety Stock Calculator
- Lead-Time Demand Calculator
- EOQ Calculator
- Annual Holding Cost Calculator
- Stockout Cost Calculator
- Spare Parts Service Level Calculator
- Critical Spare Quantity Calculator
- Inventory Turnover Calculator

실제 구축 시 중복성/공식 정확성/검색 의도를 검토하고 최종 공개 툴 수를 확정한다.

---

## 5. 권장 디렉터리 구조

```text
/
├─ index.html
├─ about.html
├─ contact.html
├─ privacy.html
├─ robots.txt
├─ sitemap.xml
├─ llms.txt
├─ CNAME
├─ README.md
├─ handover.md
├─ assets/
│  ├─ css/
│  │  └─ style.css
│  ├─ js/
│  │  ├─ common.js
│  │  └─ calculators/
│  └─ icons/
├─ partials/
│  ├─ header.html
│  └─ footer.html
├─ tools/
├─ guides/
├─ reference/
└─ compare/
```

---

## 6. 디자인 원칙

ReliabilityBench는 기존 프로젝트와 완전히 다른 시각 체계를 사용한다.

### 목표 인상
- 산업 현장용 engineering workbench
- 신뢰성 분석
- maintenance operations
- 전문 B2B 도구

### 금지
- HVAC Tools Hub 카드/히어로/헤더 복제
- PlasticsCalc 카드/섹션/레이아웃 복제
- 과도한 둥근 카드
- 동일한 버튼 스타일 재사용
- 템플릿 복사 느낌
- 불필요한 장식 이미지

### 권장
- 데이터 중심 UI
- 표와 수치가 잘 읽히는 구조
- compact but readable spacing
- calculator input/output 구분 명확
- 결과 해석을 바로 확인할 수 있는 패널
- 전문 reference table 스타일
- desktop/mobile 모두 실사용 우선

---

## 7. Mandatory Quality Gate

모든 주요 배포 전 반드시 수행한다.

### 자동 검사
- broken internal links
- malformed HTML
- duplicate IDs
- JavaScript syntax/runtime errors
- missing canonical
- sitemap URL consistency
- internal link consistency
- orphan public pages
- missing title/meta description
- calculator 기본 동작
- invalid or exposed anchor markup
- `.html">` 같은 깨진 문자열 노출
- unclosed/mis-nested anchors
- partial insertion 오류
- mobile overflow

### 시각 샘플 검사
최소 아래 페이지 직접 렌더링 확인.

- Homepage
- Tools hub
- Reliability category
- Maintenance category
- MRO category
- 대표 calculator 5개 이상
- Guide 대표 1개
- Reference 대표 1개
- About
- Privacy / Contact

### Calculator 샘플
서로 다른 유형 최소 5개 확인.

- 단순 비율형
- 시간/고장 데이터형
- 시스템 reliability형
- 경제성/비용형
- 재고/MRO형

### 배포 조건
위 검사에서 HIGH 위험이 남아 있으면 commit/push 금지.

---

## 8. SEO 기본 규칙

모든 공개 페이지:

- unique `<title>`
- unique meta description
- canonical
- robots meta
- Open Graph
- viewport
- semantic heading hierarchy
- breadcrumb 또는 명확한 계층
- 관련 내부 링크
- 필요한 경우 JSON-LD

홈페이지 canonical:

`https://reliabilitybench.com/`

도메인 표기는 항상 소문자 `reliabilitybench.com` 사용.

---

## 9. Analytics / Search Console

GA4 Measurement ID는 생성 후 이 문서에 추가한다.

```text
GA4: TBD
GSC: Domain Property - reliabilitybench.com
```

GA 스크립트는 공통 구조에서 누락 없이 전체 공개 페이지에 적용한다.

---

## 10. 구축 단계

### 1차
- 공통 구조
- 독립 디자인 시스템
- header/footer
- homepage
- Tools hub
- About/Contact/Privacy
- robots/sitemap/llms
- favicon
- SEO base
- 핵심 계산기 12~15개
- QA

### 2차
- Reliability Engineering 확장
- Failure/Life Analysis
- guides/reference
- 내부 링크 강화
- QA

### 3차
- Asset Economics
- MRO Spare Parts
- compare/commercial-intent content
- final sitewide QA

---

## 11. 작업 기록 규칙

모든 주요 작업 후 아래 형식으로 기록한다.

### YYYY-MM-DD
- 작업 내용:
- 추가/수정 페이지:
- QA 결과:
- 남은 HIGH 위험:
- 남은 MEDIUM 위험:
- 남은 LOW 위험:
- 다음 추천 작업:
- commit:

---

## 12. 현재 상태

- 도메인 확정: `reliabilitybench.com`
- 니치 확정: Reliability & Maintenance Engineering Tools
- 초기 구조 준비 단계
- 다음 작업: GitHub repo 생성 및 1차 구축 시작

---

## 2026-07-22 — Phase 1 implementation

- Public pages created: 27 total (26 indexable pages plus a noindex 404 page).
- Calculators: 15 distinct calculators across reliability, maintenance performance, asset economics, and MRO planning.
- Guides / reference: 2 hub pages, containing four practical guide entries and a formula reference table.
- Implemented: independent industrial-workbench design system; responsive shared header/footer partials; 4 category hubs; complete homepage; About, Contact, Privacy, robots.txt, sitemap.xml, llms.txt, favicon, 404 page; GA4 `G-6Z73P5MMNS` on every public HTML page; SEO metadata, canonical URLs, Open Graph, and JSON-LD where appropriate.
- CNAME: retained unchanged as `reliabilitybench.com`.
- QA: `node tools/qa-check.mjs` passed for all 26 indexable pages (links, title/meta, canonical, GA4, duplicate IDs, malformed document/anchor checks, sitemap). JavaScript syntax checks passed. Browser QA passed on desktop representative pages and 390px mobile homepage/calculator with no horizontal overflow; tested MTBF, series reliability, OEE, downtime cost, and reorder point outputs. No browser console errors.
- Remaining HIGH risk: none identified.
- Remaining MEDIUM risk: GA4 loads immediately; before serving regions that require opt-in analytics consent, implement and validate a jurisdiction-appropriate consent-management flow. Full lifecycle-cost and probabilistic life-data tools are intentionally deferred.
- Remaining LOW risk: guides and reference are strong hub content in this phase, but later phases should publish independently addressable long-form guides and cited technical references.
- Recommended next step: add technical guide pages and expanded reliability/life-analysis tools, then introduce a compliant analytics-consent strategy if required by target visitor jurisdictions.
- Implementation commit: `202cdf2` (`Build ReliabilityBench engineering workbench`).

---

## 2026-07-22 — Design independence rework

- Reason: the first-phase visual system was rejected because its dark header, accented two-column hero, and grid/card rhythm could be read as too close to PlasticsCalc.
- Reworked: header into a two-tier operations status console; homepage into a three-zone work surface with a vertical station marker, operational readout, decision-routing rail, linear tool ledger, and evidence record; category navigation into workstation routing; buttons into terminal-style action controls; type hierarchy into condensed uppercase display headings and monospaced operational labels; spacing into a compact console scale.
- Reworked component system: calculator pages now use a horizontal input field bank and a separate high-contrast result band; formulas use a `// METHOD` technical strip; related links, notes, and tables use line-ledger and control-panel treatments; footer is a system/documentation strip. Rounded-card styling and marketing-card grids were removed.
- QA: compared a locally rendered PlasticsCalc homepage with the redesigned ReliabilityBench homepage. Rendered and inspected ReliabilityBench homepage, Tools hub, MTBF, Series Reliability, OEE, Downtime Cost, Reorder Point, Guides, Reference, and About at desktop size; inspected homepage and OEE calculator at 390px. No horizontal overflow observed. Five calculator default results were verified (100 hours, 93.14%, 79.17%, 22,500, 81 units). Automated HTML/metadata/link/sitemap QA and JavaScript syntax checks passed; browser console had no errors.
- Independence judgment: approved. ReliabilityBench now reads as an industrial reliability operations console with a light control-panel shell, status/readout hierarchy, ledger navigation, and horizontal calculation console; it no longer shares PlasticsCalc's dark/orange reference-desk hero or its card-grid page rhythm.
- Remaining HIGH risk: none identified.
- Remaining MEDIUM risk: GA4 consent management remains a jurisdiction-dependent implementation decision; it is unrelated to this design rework.
- Remaining LOW risk: desktop condensed display fonts rely on local system availability; CSS fallbacks preserve hierarchy but may vary slightly between devices.
- Recommended next step: establish a small screenshot regression set for the console layout before future content expansion.
- Design implementation commit: `ae03c6c` (`Redesign as reliability operations console`).

---

## 2026-07-22 — Logo and favicon independence rework

- Reason: the previous square `RB` header mark and square favicon still resembled PlasticsCalc's badge/monogram system despite the page-level design rework.
- Reworked: removed the letter badge entirely. The shared header and favicon symbol is now a standalone reliability curve: a cyan survival/uptime curve crossing toward a dark engineering baseline and ending at a lime system-state node. It is an engineering signal, not a typographic monogram.
- Implementation: the header uses the same SVG asset as the favicon; a dedicated `logo-system.css` establishes the symbol and wordmark treatment without changing the workbench layout.
- QA: rendered the new header on ReliabilityBench and verified the loaded SVG symbol. Opened ReliabilityBench and PlasticsCalc in adjacent visible browser tabs, then compared the rendered headers. ReliabilityBench shows a curve/baseline/node symbol; PlasticsCalc shows an orange `PC` square badge. The silhouette, semantic concept, and color structure are clearly distinct. The curve has deliberately simplified strokes and endpoint dots so it remains legible at favicon scale.
- Automated QA: `node tools/qa-check.mjs`, JavaScript syntax checks, and `git diff --check` passed. Browser console reported no errors.
- Remaining HIGH risk: none identified.
- Remaining MEDIUM risk: none introduced by this logo-only work.
- Remaining LOW risk: SVG favicon rendering can vary slightly between legacy browser favicon implementations; modern browser support is the deployment target.
- Recommended next step: no logo changes unless a real-browser deployment check shows a browser-specific favicon cache or rendering issue.
- Logo implementation commit: `dcf21e0` (`Create reliability curve logo system`).

---

## 2026-07-22 — Phase 1 final closure

- Phase 1 completion date: 2026-07-22.
- Final public pages: 27 HTML pages total; 26 indexable canonical URLs in `sitemap.xml`; one noindex `404.html`.
- Final calculators: 15.
- Final guides: 1 public Guides hub containing 4 practical guide records.
- Final references: 1 public Formula Reference hub/table.
- Legal / trust pages: 3 (About, Contact, Privacy).
- Major implementation: static GitHub Pages foundation, shared partial shell, four workstations, 15 calculator workflows, sitewide GA4, SEO metadata and JSON-LD, robots/sitemap/llms, CNAME, 404, responsive workbench UI, and reusable final QA scripts.
- Design independence: complete. The site uses the light reliability operations console, station rail, tool ledger, horizontal calculator input bank, result band, and control-panel reference treatments; final rendered comparison confirms it does not present as a PlasticsCalc template.
- Logo / favicon independence: complete. The square monogram was replaced with the shared reliability-curve/baseline/system-node symbol. Final comparison confirms it is distinct from the PlasticsCalc orange PC badge.
- Final automated QA: `node tools/final-site-qa.mjs`, `node tools/calculator-qa.mjs`, and `node tools/qa-check.mjs` all passed. Checks cover HTML/tag/anchor structure, links, IDs, title/meta/canonical/robots/OG/JSON-LD, sitemap, orphan pages, robots, llms, CNAME, GA4, favicon/partial paths, calculator configuration and outputs, validation guards, content sections, JavaScript syntax, and diff whitespace.
- Final visual QA: all 27 public pages rendered on desktop and at 390px mobile. Homepage, Tools, all four category hubs, 8 representative calculator types, Guides, Reference, About, Contact, Privacy, and 404 were specifically reviewed. No desktop or final mobile horizontal overflow, text clipping, broken controls, input overflow, table overflow, missing header/footer, or console errors remain. One mobile Privacy heading overflow was found, corrected, and rechecked in the full 27-page mobile pass.
- Final calculator QA: all 15 calculators initialized in the browser with visible units and interpreted results. Normal sample results were verified for every calculator. Engine tests verified zero, blank-required control, negative, NaN, Infinity, and extreme-value safeguards; reset handler, formula outputs, and content/related-link coverage passed.
- Remaining HIGH risk: 0.
- Remaining MEDIUM risk: GA4 still loads immediately; before targeting jurisdictions that require prior analytics consent, implement and validate an appropriate consent-management flow.
- Remaining LOW risk: display-font fallback and legacy SVG favicon rendering may vary slightly by browser; future traffic and search-console data should guide content prioritization.
- Is immediate additional work required: No.
- Phase 1 completion judgment: Approved and officially closed. The current foundation is sufficient; Phase 2 expansion can occur later without blocking public use.
- Recommended next step: use real traffic/search data to prioritize a small number of standalone deep guides and advanced life-analysis tools, while adding consent management if the target visitor jurisdictions require it.
- Quality-gate implementation commit: `5b5532c` (`Complete phase one quality gate`).

---

## 2026-07-22 — Phase 2 expansion and quality closure

- Phase 2 completion date: 2026-07-22.
- Final public pages: 53 HTML pages total; 52 indexable canonical URLs in `sitemap.xml`; one noindex `404.html`.
- Final calculators: 29 (15 Phase 1 calculators plus 14 distinct Phase 2 calculators).
- Final guides: 9 public guide pages (one guide hub plus eight independent guides).
- Final references: 5 public reference pages (one reference hub plus four technical references).
- New calculator pages: Weibull Reliability, B10 Life, Weibull Hazard Rate, Expected Failures, K-out-of-N Reliability, Operational Availability, Reliability to MTBF, Lost Production, Maintenance Cost per Asset, Maintenance Cost as % of RAV, Lifecycle Maintenance Cost, Lead-Time Demand, Economic Order Quantity, and Inventory Turnover.
- New guide pages: MTBF vs MTTF vs MTTR, Equipment Availability, Reliability Block Diagrams, Weibull Analysis, OEE Loss Categories, Downtime Cost Framework, Repair vs Replace Framework, and MRO Safety Stock Planning.
- New reference pages: Maintenance KPI Formulas, Availability Definitions, Weibull Parameter Reference, and MRO Inventory Formulas.
- Implementation: expanded category hubs and tool ledger; natural calculator-to-guide/reference links; static SEO, canonical URLs, robots, Open Graph metadata, JSON-LD, GA4 `G-6Z73P5MMNS`, and sitemap entries on all new public pages. The Phase 1 industrial reliability operations-console design and reliability-curve favicon/logo system were retained without reverting to the PlasticsCalc/HVAC visual pattern.
- Final automated QA: `node tools/final-site-qa.mjs`, `node tools/calculator-qa.mjs`, and `node tools/qa-check.mjs` passed. They scanned 53 public HTML pages / 52 indexable URLs and verified links, malformed or mis-nested HTML/anchors, duplicate IDs, static SEO, JSON-LD, sitemap, orphan pages, robots, llms, CNAME, GA4, favicon/partials, calculator initialization, validation, normal/zero/extreme samples, units, reset, formula outputs, content coverage, and JavaScript syntax.
- Final visual QA: rendered homepage, Tools hub, all major category hubs, seven representative new calculators, three existing calculators, Guides hub, three new guides, Reference hub, two new references, About, Contact, Privacy, and 404 at desktop and 390px mobile. The console/workbench hierarchy, curve logo/favicon system, responsive input/result panels, mobile table treatment, text wrapping, and navigation were visually checked. No blocking clipping, overlap, input overflow, or page-level horizontal overflow was observed.
- Calculator QA: all 29 calculator configurations passed independent expected-output tests and zero/extreme/invalid guards. Browser rendering confirmed initialized fields, visible units, interpreted result bands, reset controls, and sample outputs for representative reliability, maintenance, economics, and MRO tools.
- Remaining HIGH risk: 0.
- Remaining MEDIUM risk: GA4 loads immediately. Before targeting jurisdictions requiring opt-in analytics consent, implement and validate an appropriate consent-management flow.
- Remaining LOW risk: condensed display font fallback and legacy SVG favicon rendering can vary slightly by browser; use real traffic, Search Console, and on-site behavior data to prioritize future content and UI refinements.
- Is immediate additional work required: No.
- Phase 2 completion judgment: Approved. The site now has a substantive 52-URL indexable technical foundation with differentiated calculator intent, independent guide/reference content, and maintained design independence.
- Recommended next step: monitor search demand and calculator usage, then selectively add advanced life-data topics, cited standards-oriented references, or comparison content. Do not add further pages until those signals justify a distinct search intent.
- Phase 2 implementation commit: `1cf1021` (`Expand ReliabilityBench phase two`).

---

## 2026-07-22 — Header brand-area stability fix

- Issue: desktop screenshots showed the `ReliabilityBench` wordmark area competing with the long `WORKBENCH / RELIABILITY + MAINTENANCE` status context, making the shared header feel compressed.
- Implementation: increased the desktop brand column to a protected 350–390px range; made the wordmark and subtitle non-wrapping; added a deliberate gap between the curve symbol and wordmark; converted the header to a three-zone grid with a bounded console region and a max-content navigation region.
- Responsive behavior: the full status context remains at wide desktop widths; it becomes `R+M WORKBENCH` at 1350px and below; at 1199px and below the navigation moves to a dedicated second row; at 700px and below the status console is hidden so the brand block has the full row.
- Visual QA: rendered the homepage header at 1440px, 1280px, 1024px, and 390px. The logo, subtitle, context/status, and navigation remain separated with no wordmark wrapping, compression, or overlap. Mobile retains the logo and horizontally scrollable navigation without page-level overflow.
- Automated QA: `node tools/final-site-qa.mjs`, `node tools/qa-check.mjs`, and `git diff --check` passed after the CSS and shared-header update.
- Remaining HIGH risk: 0.
- Remaining MEDIUM risk: unchanged GA4 consent-management decision for applicable jurisdictions.
- Remaining LOW risk: condensed display font fallback may change exact wordmark width slightly on uncommon systems; the new protected column and non-wrapping rules preserve separation.
- Header-fix commit: `2b40886` (`Stabilize header brand layout`).

---

## 2026-07-26 — Final content audit and Phase 1 closure confirmation

- Audit scope: latest `main`, full `handover.md`, 53 public HTML pages, 29 calculator pages and calculator engine, 9 guide pages, 5 reference pages, shared partials, shared CSS/JS, SEO files, and CNAME.
- Audited public pages: 53 total HTML pages; 52 indexable canonical URLs; one noindex 404 page.
- Content inventory: Homepage 1; Tools/category hubs 6; calculators 29; guide pages 9; reference pages 5; legal/trust pages 3; 404 page 1.
- Content audit result before remediation: sufficient 24; reinforcement needed 29 calculator pages because input definitions, unit boundaries, decision use, and common-mistake guidance were not presented consistently; thin 0.
- Content audit result after remediation: sufficient 53; reinforcement needed 0; thin 0. Existing calculator-specific formulas, worked examples, interpretations, notes, and related links were retained, while the shared calculator briefing now adds visible per-input unit definitions, decision use, model limits, and invalid-input guidance for all 29 tools.
- Calculator content audit: all 29 pages now expose purpose, use case, input definitions and units, method/formula, worked example, result interpretation, practical decision use, assumptions/limitations/common mistakes, related calculators, and related guide/reference routes. The briefing is grouped by reliability, maintenance, economics, or MRO context so the operating guidance is not a repeated one-size-fits-all paragraph.
- Guide audit: 9 guide pages retained as independent method or operating-decision content; each has its own intent and links back to relevant calculators. No guide is a calculator-page copy.
- Reference audit: 5 reference pages retained as formula/definition lookup material, distinct from the explanatory guides and interactive calculators.
- Formula and boundary corrections: Failure Rate no longer reports an infinite reciprocal MTBF for a zero-failure sample; OEE rejects zero ideal cycle time; Weibull Hazard Rate rejects the age-zero / shape-below-one singularity; K-out-of-N limits N to 100 to prevent impractical computation. Existing sample-output formula checks remain unchanged and pass.
- Duplicate/near-duplicate audit: all calculator URLs retained. Each has a distinct input structure, result purpose, or intended user decision; no consolidation, deletion, canonical merge, or noindex action is recommended. Guides and references remain complementary rather than duplicate.
- Internal-link and navigation audit: automated local-link, orphan-page, breadcrumb, category hub, guide/reference hub, partial, and sitemap checks passed. All indexable pages are reachable through normal HTML links; no fragment-only or JavaScript-only dependency was introduced.
- SEO and technical audit: unique title/meta, canonical domain/path, robots, Open Graph, JSON-LD syntax, GA4 `G-6Z73P5MMNS`, CNAME `reliabilitybench.com`, robots.txt, llms.txt, sitemap consistency, favicon path, duplicate IDs, malformed HTML, and partial loading checks passed.
- Visual and mobile QA: all 53 pages were checked at 1280px, 1024px, and 390px for one H1, common shell presence, and horizontal overflow; no failures. The non-calculator pages also passed at 1440px. All 29 calculators rendered with fields, result, briefing content, and no console errors at desktop; representative reliability and MRO calculators were visually inspected at desktop and mobile.
- Calculator QA: all 29 normal samples, zero/extreme guards, unit labels, reset handler, calculated output, content headings, and new boundary assertions passed. Browser test confirmed the zero-failure rate result is `0 failures / hour` with the correct non-finite MTBF explanation.
- Final HIGH risk: 0.
- Final MEDIUM risk: GA4 loads immediately. Add and validate consent management before targeting visitor jurisdictions that require opt-in analytics consent.
- Final LOW risk: system display-font fallback and legacy SVG favicon rendering can vary slightly; continued Search Console and actual-use monitoring should guide only evidence-based future updates.
- ReliabilityBench Phase 1 completion judgment: confirmed complete and suitable for ongoing public operation. No immediate content or structural expansion is required.
- Immediate additional work required: No.
- Next recommended work and timing: after sufficient search and calculator-use data exists, prioritize only demonstrably distinct topics or standards-backed references; separately schedule consent management if the target audience requires it.
- Final audit commit: `abd487b` (`Complete final content audit`).

---

## 2026-08-01 — Maintenance Planning & Scheduling validation and expansion

- Start local HEAD: `fd91f4532e0504d1b939bcb112270b81dfd59a0e` (`Update index.html`).
- Start origin/main: `fd91f4532e0504d1b939bcb112270b81dfd59a0e`.
- Pull performed: no. The freshly cloned local `main` equaled `origin/main`; `git fetch origin` confirmed there was no divergence or behind state.
- Repository inventory from files, sitemap, and HTML links before expansion: 53 public HTML pages (52 indexable URLs), 29 calculator pages, 9 guide pages, and 5 reference pages. The prior handover’s suggested maintenance KPI list was not treated as evidence: current files contained OEE and Maintenance Backlog but none of Schedule Compliance, PM Compliance, Planned Maintenance Percentage, Wrench Time, or Planning Accuracy.

### Candidate validation

- **Maintenance Planning & Scheduling — GO.** Existing overlap: none for the five selected calculators; Maintenance Backlog is adjacent capacity context rather than a duplicate. Independent intent: strong—weekly schedule execution, PM due-date integrity, work mix, execution friction, and labor-estimate quality answer different work-management decisions. Formula verification: Schedule Compliance, PM Compliance, PMP, and Wrench Time use transparent numerator/denominator definitions corroborated by the SMRP metric hierarchy and cross-checked against public maintenance KPI definitions. Planning Accuracy has no single universal formula, so ReliabilityBench declares its local absolute-variance convention and excludes zero planned hours. Practical value: strong and repeatedly usable by planners, schedulers, supervisors, and reliability teams. Implementation difficulty: low in static HTML/vanilla JS. Competition/duplication risk: controlled by preserving scope boundaries and avoiding a separate Reactive vs Planned Ratio page.
- **Advanced Life & Failure Analysis — NO-GO.** Existing Weibull Reliability, B10 Life, Hazard Rate, Expected Failures, Reliability Probability, and related Guide/Reference already cover the proposed base decision intents. No additional candidate with equally clear independent search intent and a verified primary formula was identified in this audit.
- **Critical Spares Decision Support — NO-GO.** Existing Safety Stock, Reorder Point, Lead-Time Demand, EOQ, Inventory Turnover, and MRO Guide/Reference cover the quantitative replenishment decisions. “Critical spare” decisions additionally require local safety, consequence, substitute, repair-loop, and policy inputs; no universal formula was found that would justify a generic calculator without inventing site-specific scores.

### Selected cluster and pages added

- Final selected cluster: Maintenance Planning & Scheduling.
- New calculator pages: `tools/schedule-compliance-calculator.html`, `tools/preventive-maintenance-compliance-calculator.html`, `tools/planned-maintenance-percentage-calculator.html`, `tools/wrench-time-calculator.html`, and `tools/maintenance-planning-accuracy-calculator.html`.
- New guide: `guides/maintenance-planning-and-scheduling.html`.
- New reference: `reference/maintenance-planning-metrics.html`.
- Integration: Maintenance hub, Guides hub, Reference hub, calculator engine, calculator QA expectations, sitemap, and llms.txt were updated. Existing URLs, CNAME, GA4 `G-6Z73P5MMNS`, favicon, visual system, and the user-managed directory-badge area were preserved.
- Final inventory after expansion: 60 public HTML pages, 59 indexable canonical URLs, 34 calculators, 10 guides, and 6 references.

### Formula and definition verification

- Schedule Compliance: completed scheduled work orders within the original schedule window / work orders scheduled in that window. Overdue and carryover work are treated as misses for the original period.
- PM Compliance: PM work orders completed in the locally defined due window / PM work orders due. It is PM-only and is not a substitute for all-work Schedule Compliance.
- Planned Maintenance Percentage: planned maintenance labor hours / total maintenance labor hours. Emergency, corrective, predictive, contractor, and overtime coding must remain consistent.
- Wrench Time: direct hands-on maintenance time / paid maintenance labor time. Travel, waits, materials search, permits, preparation, and administration are excluded; this is not an individual productivity score.
- Planning Accuracy: `max(0, 1 - |actual hours - planned hours| / planned hours) × 100`. This explicitly declared site convention is not presented as a universal standard; zero planned hours are not applicable, and signed variance should be reviewed separately.
- Primary/authoritative corroboration used in the audit: SMRP metric hierarchy material identifies Schedule Compliance Hours and Wrench Time; ISO 23323:2021 confirms planned-maintenance systems must support planning, scheduling, recording, reporting, analysis, and optimisation. Government inventory guidance confirms that reorder points and safety stock are already established quantitative controls, reinforcing the Critical Spares NO-GO decision.

### QA results

- Automated site QA: `node tools/final-site-qa.mjs` passed: 60 public HTML pages, 59 indexable pages, 59 sitemap URLs; structure, links, SEO, canonical, robots, Open Graph, JSON-LD, partials, sitemap, robots.txt, llms.txt, CNAME, GA4, and favicon paths passed.
- Calculator QA: `node tools/calculator-qa.mjs` passed for 34 calculators: independent normal results, zero, blank-required, negative, NaN, Infinity, extreme values, labels/units, reset, formula outputs, content sections, and validation guards.
- JavaScript QA: `node --check assets/js/calculators/engine.js` and `node --check assets/js/site-shell.js` passed. `git diff --check` passed.
- Browser QA: all five new calculators rendered at 1440px and 390px with one H1, visible form/results, no calculator-page horizontal overflow, and no console errors. Default outputs were 90%, 90%, 80%, 43.75%, and 87.5% respectively.
- Existing-page visual QA at 1440px, 1280px, 1024px, 768px, and 390px found two unresolved pre-existing homepage deployment-gate failures: (1) the source has an extra closing `</div>` after the user-managed directory-badge block, which makes `qa-check.mjs` report malformed/mis-nested HTML; (2) the homepage tool ledger has 47px horizontal overflow at 768px. The user-managed badge area was not edited, and no unrelated responsive refactor was made in this task.

### Risks and release state

- Remaining HIGH risk: 2 deployment-gate failures above (homepage malformed source and 768px horizontal overflow). No new cluster-page HIGH risk was found.
- Remaining MEDIUM risk: GA4 loads immediately; implement and validate consent management before targeting jurisdictions requiring opt-in analytics consent.
- Remaining LOW risk: system display-font fallback and legacy SVG favicon rendering may vary slightly by browser.
- Is immediate additional work required: yes, but only to resolve the two pre-existing homepage gate failures with explicit permission to touch the user-managed badge-adjacent markup and the existing ledger CSS.
- Next recommended work and timing: repair and re-run full-site QA before any deployment commit; after that, wait for search/use evidence before considering the excluded life-analysis or critical-spares topics.
- Implementation commit: not created. Final commit: not created. Main push: not attempted, because the required all-site zero-error / zero-overflow deployment gate is not met.


## 2026-07-29
- 메인 페이지 푸터 아래의 디렉토리 뱃지 영역은 사용자가 직접 관리하는 영역이므로 수정·삭제·리팩터링하지 않는다.- https://kittylaunch.com, https://sellwithboost.com 에 등록 (내가 직접함)


## 2026-07-30
- 메인 페이지 푸터 아래의 디렉토리 뱃지 영역은 사용자가 직접 관리하는 영역이므로 수정·삭제·리팩터링하지 않는다.- https://twelve.tools, https://findly.tools 에 등록 (내가 직접함)

---

## 2026-08-01 — Maintenance Planning & Scheduling closure

- Scope: completed the existing uncommitted Maintenance Planning & Scheduling cluster without pull, clone, reset, stash, deletion, or overwrite of the prior implementation.
- Homepage HTML repair: preserved the user-managed directory-badge block exactly (badge links, images, order, position, and inline styles). Removed only the unmatched extra closing `</div>` immediately after that block. Header, main, footer, and badge DOM nesting now pass the HTML structure checker.
- 768px repair: added one bounded `701px–900px` ledger-grid rule. It permits the existing title and description columns to shrink/wrap with `min-width: 0`; desktop widths and mobile layout retain their existing rules.
- Final inventory: 60 public HTML pages; 59 indexable canonical URLs and sitemap entries; 34 calculators; 10 guides; 6 references.
- Automated QA: `node tools/final-site-qa.mjs`, `node tools/calculator-qa.mjs`, `node tools/qa-check.mjs`, JavaScript syntax checks, and `git diff --check` all passed. Checks cover HTML nesting, links, orphans, IDs, title/meta/canonical/robots/OG/JSON-LD, sitemap, llms.txt, CNAME, GA4, calculator boundary and regression cases.
- Browser QA: Homepage, Tools hub, Maintenance hub, all five new calculators, new Guide, new Reference, About, Contact, Privacy, and 404 were rendered at 1440px, 1280px, 1024px, 768px, and 390px. Every sample had one H1, loaded header/main/footer, no overlap, no console errors, and no page-level horizontal overflow.
- Badge preservation check: the five existing directory-badge anchors, image URLs, ordering, and inline presentation remain unchanged.
- Remaining HIGH risk: 0.
- Remaining MEDIUM risk: GA4 loads immediately; add and validate consent management before targeting jurisdictions requiring opt-in analytics consent.
- Remaining LOW risk: display-font fallback and legacy SVG favicon rendering can vary slightly by browser.
- Immediate additional work required: no.
- Implementation commit: `d7a2fee` (`Add maintenance planning tools and close QA gates`).
- Final handover commit: pending.


## 2026-08-06
- 메인 페이지 푸터 아래의 디렉토리 뱃지 영역은 사용자가 직접 관리하는 영역이므로 수정·삭제·리팩터링하지 않는다.- https://boostdomainrating.com/ 에 등록 (내가 직접함)

---

## 2026-08-08 — Reliability Growth / Duane Model cluster

### Repository sync and starting state

- Target repository: `https://github.com/canghun13/reliabilitybench.git`; branch `main`.
- The initial working tree was clean. Local HEAD was `a94467a` and was two commits behind `origin/main`.
- Ran `git fetch origin` followed by `git pull --ff-only origin main`; starting local HEAD and `origin/main` were both `c9edc62907b594189809515072c25e12924b02f3` before any file edit.
- Starting verified inventory: 60 public HTML pages, 59 indexable URLs, 34 calculators, 10 guide HTML pages including the hub, and 6 reference HTML pages including the hub.
- Existing hubs, calculator configurations, guides, references, sitemap, llms.txt, internal links, and the full prior `handover.md` were inventoried before candidate selection. The recently completed Maintenance Planning & Scheduling scope was excluded from re-expansion.

### Candidate research and decisions

- **Reliability demonstration test planning — NO-GO.** Demand signals were strong across zero-failure sample size, reliability demonstration, confidence, and MTBF test-plan queries, but direct free tools already cover the core workflow: MetricGate, Texas Instruments, Reliability Analytics Toolkit, and Minitab methods. A four-tool cluster would enter strong exact-intent competition rather than fill a clear gap.
- **Asset criticality / FMEA scoring — NO-GO.** Search intent is recurrent, but severity/occurrence/detection scales, RPN, criticality matrices, and action-priority rules vary materially by method and organization. Existing FMEA tools and PTC documentation cover the calculation patterns, while a generic score risks false precision and definition conflict.
- **Critical and repairable spares planning — NO-GO.** Fleet quantity, failure rate, lead-time, stockout, and rotable-pool queries are useful, but SpareMind already offers a direct free workflow. Several proposed pages would reuse the same Poisson-demand core with different labels, creating thin mathematical duplication.
- **Maintenance staffing and workload — NO-GO.** Spreadsheet and paid-tool competition is weaker, but the natural inputs (backlog, capacity, wrench time, schedule workload) overlap the just-completed maintenance planning cluster. Extending it now would violate the non-duplication objective.
- **Reliability Growth / Duane Model — GO.** Search demand is narrower but recurrent around “Duane reliability growth calculator,” “reliability growth slope,” “target MTBF test time,” and “achieved MTBF.” Competition is mostly legacy calculators, technical PDFs, or software-library functions; MetricGate is the clearest modern direct tool. ReliabilityBench can differentiate with a free, no-login four-step workflow that keeps cumulative and instantaneous MTBF, model limits, and decision use visible.

### Demand, competition, and technical sources

- Reliability growth demand/competition reviewed: [MetricGate Duane calculator](https://metricgate.com/docs/duane-reliability-growth/), [Reliability Analytics Toolkit growth planning](https://reliabilityanalyticstoolkit.appspot.com/reliability_growth_planning), [Quanterion model overview](https://www.quanterion.com/models-commonly-used-to-measure-reliability-growth/), and the Python `reliability` package documentation.
- Rejected test-planning competition reviewed: [MetricGate reliability demonstration](https://metricgate.com/docs/reliability-demonstration-test/), [Texas Instruments acceptance sample size](https://www.ti.com/support-quality/reliability/acceptance-sample-size.html), [Reliability Analytics Toolkit sample size](https://reliabilityanalyticstoolkit.appspot.com/sample_size), and [Minitab substantiation test methods](https://support.minitab.com/en-us/minitab/help-and-how-to/statistical-modeling/reliability/how-to/demonstration-test-plan/methods-and-formulas/substantiation-testing/).
- Rejected FMEA/criticality and spares examples: [PTC FMEA criticality assessment methods](https://support.ptc.com/help/wrr/r12.0.1.0/en/wrr/ReferenceGuide/fmea/criticality_assessment_methods.html) and [SpareMind](https://www.getsparemind.com/).
- Primary formula basis: NIST Engineering Statistics Handbook sections on [NHPP power-law models](https://www.itl.nist.gov/div898/handbook/apr/section1/apr191.htm), [Duane plots](https://www.itl.nist.gov/div898/handbook/apr/section1/apr192.htm), [reliability growth planning](https://www.itl.nist.gov/div898/handbook/apr/section3/apr313.htm), and [power-law model relationships](https://www.itl.nist.gov/div898/handbook/apr/section4/apr452.htm).

### Implemented cluster

- Hub: `tools/reliability-growth/index.html`.
- Calculators: `tools/reliability-growth-test-time-calculator.html`, `tools/duane-mtbf-projection-calculator.html`, `tools/reliability-growth-slope-calculator.html`, and `tools/achieved-reliability-growth-mtbf-calculator.html`.
- Guide: `guides/reliability-growth-and-duane-model.html`.
- Reference: `reference/duane-reliability-growth-formulas.html`.
- Integration: Tools hub, Reliability hub, Guides hub, Reference hub, calculator engine, calculator QA expectations, sitemap.xml, and llms.txt.
- No new CSS or visual system was introduced. Branding, logo, favicon, header/footer partials, existing URLs, CNAME, GA4 ID, and the homepage were not modified.
- The user-managed homepage directory-badge block remains byte-for-byte outside the diff. Browser QA found the same six anchors and image order: KittyLaunch, Sell With Boost, Twelve Tools, Findly.tools, SaaSGrow, and Boost Domain Rating.

### Formula definitions and boundaries

- Growth test time: `T_target = T0 × (M_target / M0)^(1 / β)`, restricted to positive baseline time/MTBF, target at least baseline, and `0 < β < 1`.
- Duane projection: `M_c(T) = M0 × (T / T0)^β`; instantaneous `M_i(T) = M_c(T) / (1 - β)`, with future time at least baseline and `0 ≤ β < 1`.
- Two-point slope: `β = ln(M2 / M1) / ln(T2 / T1)`, with positive MTBF/time and `T2 > T1`. Negative values remain visible as a deterioration diagnostic; values at or above 1 are explicitly outside the standard improving range.
- Achieved end-of-test MTBF: observed cumulative `T/r`; fitted instantaneous `T / [r × (1 - β)]`, with a positive integer failure count and `0 ≤ β < 1`.
- All four are point-model tools. They do not fit a full failure-time dataset, produce confidence bounds, demonstrate a requirement, or certify corrective-action effectiveness.

### Final QA and inventory

- Final inventory: 67 public HTML pages; 66 indexable canonical URLs; 66 sitemap URLs; 38 calculators; 11 guide HTML pages including the hub; 7 reference HTML pages including the hub.
- Automated site QA: `tools/final-site-qa.mjs` passed structure/nesting, links, orphans, duplicate IDs, unique title/meta, canonical, robots, OG, JSON-LD syntax, partials, sitemap, robots.txt, llms.txt, CNAME, GA4, and favicon-path checks across all 67 pages.
- Calculator QA: all 38 configurations passed independent expected-value checks, initialization, labels/units, normal samples, zero and extreme inputs, NaN/Infinity/negative guards, reset handling, content coverage, and targeted new-domain assertions. JavaScript syntax and `git diff --check` passed.
- New browser sample results: 400 hours required test time, 87.06 hours projected cumulative MTBF, β = 0.4, and 333.04 hours achieved instantaneous MTBF. Existing MTBF and maintenance-planning-accuracy regressions remained 100 hours and 87.5%.
- Browser QA: 19 required/representative pages × 5 viewports = 95 render combinations at 1440, 1280, 1024, 768, and 390px. Every page had one H1, loaded header/footer, non-overlapping header/main/footer, and zero page-level horizontal overflow.
- Browser boundary interactions passed: target below baseline rejected, β = 1 rejected, fractional failure count rejected, negative slope interpreted as deterioration, long projection result rendered without overflow, and Reset restored samples.
- Horizontal overflow: 1440 = 0; 1280 = 0; 1024 = 0; 768 = 0; 390 = 0.
- Browser console errors: 0.
- Remaining HIGH risk: 0.
- Remaining MEDIUM risk: pre-existing immediate GA4 loading may require consent management before use in opt-in jurisdictions.
- Remaining LOW risk: search demand was validated qualitatively rather than with a paid keyword-volume dataset; the deterministic Duane projections remain sensitive to slope and phase changes, which is disclosed on every cluster page.
- Immediate additional work required: no. Wait for Search Console and usage evidence before adding another cluster.
- Next observation point: review impressions, query mix, CTR, calculator interaction, invalid-input frequency, and exits after 60–90 days; do not add a second cluster merely from elapsed time.
- Implementation/final commit: pending until this entry is committed.

---

## 2026-08-08 — Accelerated Life Testing / Acceleration Models cluster

### Repository sync and starting state

- Target repository: `https://github.com/canghun13/reliabilitybench.git`; branch `main`.
- Before any edit, the working tree was clean and local HEAD, `origin/main`, and the fetched remote-tracking state were all `4cbc7f12ff794ae4f09ab7e1896e61fd0e35b2f0` with ahead/behind `0/0`. No pull, clone, reset, stash, or destructive operation was used.
- Starting verified inventory: 67 public HTML pages, 66 indexable URLs and sitemap entries, 38 calculator configurations, 11 guide HTML pages including the hub, and 7 reference HTML pages including the hub.
- All existing hubs, calculators, purposes, inputs, outputs, formulas, guides, references, sitemap entries, llms.txt entries, and internal links were inventoried. Basic reliability, Maintenance Planning & Scheduling, MRO, economics, and Reliability Growth were treated as protected non-duplication boundaries.

### Candidate research and decisions

- **Accelerated Life Testing / acceleration models — GO.** Recurrent intent exists around Arrhenius acceleration factor, accelerated test time, inverse power law, Peck temperature-humidity, and Coffin-Manson thermal-cycle calculations. Exact modern competition is strongest for Arrhenius and temperature-humidity, but a free no-login mechanism-first workbench joining four distinct physical model decisions, equivalent exposure, a selection guide, and a compact reference remains differentiated. The cluster is separate from Weibull life distributions and Duane reliability-growth learning.
- **Maintainability prediction — NO-GO.** Maintainability probability and repair-time percentile are inverse views of the same lognormal SLA decision, while weighted system MTTR adds only one distinct calculation and overlaps the existing MTTR scope. Relyence, MetricGate, and Reliability Analytics already cover the useful workflow; a separate cluster would be thin.
- **Reliability allocation — NO-GO.** Equal, ARINC, and weighted allocation methods are legitimate but mostly variants of one subsystem-target decision. Demand is specialized, assumptions are architecture/program-specific, and splitting variants into separate calculator pages would create filler despite limited free competition.
- **PM/CBM age replacement and inspection intervals — NO-GO.** Demand is real, but age-replacement and failure-finding tools already have exact modern competitors. P-F and hidden-failure intervals depend materially on detection capability, uncertainty, consequence, and safety governance; generic outputs risk false authority and overlap maintenance planning.
- Previously rejected reliability demonstration testing, FMEA/criticality, and critical-spares topics were not reintroduced because no decisive new evidence overcame their earlier competition, overlap, or governance concerns.

### Demand, competition, community, and technical sources

- ALT competition and workflow examples reviewed: [FIRGELLI Arrhenius calculator](https://www.firgelliauto.com/blogs/calculators/accelerated-life-test-arrhenius-calculator), [PackCalc accelerated aging calculator](https://packcalc.com/tools/accelerated-aging-calculator), [MetricGate Peck model](https://metricgate.com/docs/peck-temperature-humidity-bias/), calculatorshub combined ALT tooling, the Python `reliability` package acceleration-factor documentation, and community discussions of spreadsheet/freemium Arrhenius, Coffin-Manson, Peck, and inverse-power workflows.
- Maintainability sources reviewed: MIL-HDBK-472 references, the [NASA system MTTR paper](https://ntrs.nasa.gov/api/citations/20160003131/downloads/20160003131.pdf?attachment=true), Relyence maintainability prediction, MetricGate MTTR/lognormal-percentile tooling, and Reliability Analytics maintainability analysis.
- Reliability-allocation sources reviewed: the [FAA Guide to Reliability Analysis](https://www.faa.gov/sites/faa.gov/files/space/legislation_regulation_guidance/FAA_AST_Guide_to_Reliability_Analysis_v1.pdf), MIL-HDBK allocation references, and [PTC ARINC allocation documentation](https://support.ptc.com/help/wrr/r12.0.1.0/en/wrr/ReferenceGuide/prediction/arinc_alloc_method_calc.html).
- PM/CBM competition and guidance reviewed: MetricGate optimal age replacement, ToolGrit PM Interval Optimizer, Reliability Management failure-finding interval tools, and [ABS Equipment Condition Monitoring guidance](https://ww2.eagle.org/content/dam/eagle/rules-and-guides/current/design_and_analysis/224-GN-EquipCndMonitoring/Equipment_Condition_Monitoring_GN_e.pdf).
- Primary ALT formula and model-selection basis: NIST Engineering Statistics Handbook sections on [choosing an acceleration model](https://www.itl.nist.gov/div898/handbook/apr/section2/apr24.htm), [Arrhenius acceleration](https://www.itl.nist.gov/div898/handbook/apr/section1/apr151.htm), and [other acceleration models](https://www.itl.nist.gov/div898/handbook/apr/section1/apr153.htm). NIST's mechanism-selection warning and model forms are reflected in every cluster page.

### Implemented cluster

- Hub: `tools/accelerated-life-testing/index.html`.
- Calculators: `tools/arrhenius-acceleration-factor-calculator.html`, `tools/inverse-power-law-acceleration-calculator.html`, `tools/temperature-humidity-acceleration-calculator.html`, and `tools/coffin-manson-acceleration-factor-calculator.html`.
- Guide: `guides/accelerated-life-testing-model-selection.html`.
- Reference: `reference/accelerated-life-testing-formulas.html`.
- Integration: Reliability hub, Guides hub, Reference hub, calculator engine, calculator QA expectations, sitemap.xml, and llms.txt.
- The existing visual system and CSS were reused without new styling. Homepage, user-managed six-badge block, header/footer partials, branding, logo, favicon, CNAME, GA4 ID, and every existing URL remain outside the implementation diff.

### Formula definitions and boundaries

- Arrhenius: `AF = exp[(Ea/k) × (1/Tuse − 1/Ttest)]`, using kelvin, eV, and `k = 8.617333262 × 10^-5 eV/K`; test temperature must exceed use temperature.
- Inverse power: `AF = (Stest/Suse)^n`, with one consistent positive stress unit, higher test stress, and a positive mechanism-supported exponent.
- Temperature-humidity: Arrhenius temperature factor multiplied by `(RHtest/RHuse)^gamma`, with both accelerated conditions above their use conditions and RH limited to 100%.
- Reduced Coffin-Manson: `AF = (delta-T-test/delta-T-use)^m`; this implementation deliberately omits frequency and maximum-temperature terms and states that boundary on the calculator, guide, and reference.
- Equivalent accelerated exposure is target use exposure divided by AF. All four are deterministic point-model calculations: no distribution fit, parameter estimation, confidence bound, sample-size decision, qualification proof, or certification is implied.

### Final QA and inventory

- Final inventory: 74 public HTML pages; 73 indexable canonical URLs; 73 sitemap URLs; 42 calculators; 12 guide HTML pages including the hub; 8 reference HTML pages including the hub.
- Automated site QA: `tools/final-site-qa.mjs` passed HTML structure/nesting, links, orphan checks, duplicate IDs, unique title/meta, canonical, robots, OG, JSON-LD syntax, header/footer partials, sitemap, robots.txt, llms.txt, CNAME, GA4, and favicon paths across all 74 public pages. `tools/qa-check.mjs`, JavaScript syntax checks, and `git diff --check` also passed.
- Calculator QA: all 42 configurations passed independent expected-value checks, normal samples, zero/extreme/non-finite guards, required units, reset handling, content coverage, existing calculator regression, and four targeted ALT boundary assertions.
- New browser sample results: Arrhenius AF `95.998`, inverse-power AF `8`, temperature-humidity AF `734.735`, and reduced Coffin-Manson AF `9`. Invalid equal/lower stress, exponent overflow, RH above 100%, and lower accelerated temperature range were blocked; Reset restored sample values.
- Browser QA: 20 required/representative pages × 5 viewports = 100 render combinations at 1440, 1280, 1024, 768, and 390px. Coverage included Home, Tools, Reliability, ALT hub, all four new calculators, new Guide and Reference, Guides and Reference hubs, Reliability Growth hub and calculator, Weibull and B10 regressions, About, Contact, Privacy, and 404.
- Every browser sample had one H1, loaded header/main/footer, no header-main or main-footer overlap, and zero page-level horizontal overflow. The homepage retained the same six user-managed badge images at every viewport.
- Horizontal overflow: 1440 = 0; 1280 = 0; 1024 = 0; 768 = 0; 390 = 0.
- Browser console errors: 0.
- Remaining HIGH risk: 0.
- Remaining MEDIUM risk: pre-existing immediate GA4 loading may require consent management before use in opt-in jurisdictions.
- Remaining LOW risk: demand was validated qualitatively rather than with a paid keyword-volume dataset; acceleration factors can be highly sensitive to fitted activation energy/exponents and mechanism transitions, which is disclosed throughout the cluster.
- Immediate additional work required: no. Observe Search Console query/impression evidence and calculator engagement before considering another cluster.
- Implementation/final commit: pending until this entry is committed.

---

## 2026-08-08 — ALT formula-block readability follow-up

- Scope: corrected only the visual separation between the final Formula/Method block and the following H2 on the four Accelerated Life Testing calculators: Arrhenius, Inverse Power Law, Temperature-Humidity, and Coffin-Manson.
- Selector audit: `.formula` is a shared site-wide calculator selector, so it was not changed. The added rule targets only `body[data-calc]` values for the four ALT calculators and only `.formula + h2`.
- Change: added a 28px `margin-top` to the H2 immediately after the final Formula/Method block. Consecutive Formula blocks remain visually grouped; formula content, borders, typography, color, and equations are unchanged.
- Browser QA: all four calculators rendered at 1440px, 768px, and 390px. Every measured Formula-to-next-H2 gap was 28px; formula internal overflow and page-level horizontal overflow were 0; H1, input form, result panel, and sample calculation results remained normal.
- Console errors: 0 across the browser QA session.
- Static QA: JavaScript syntax, `tools/calculator-qa.mjs` (42 calculators), `tools/final-site-qa.mjs` (74 public HTML / 73 indexable / 73 sitemap), `tools/qa-check.mjs`, and `git diff --check` passed.
- Existing calculator Formula layouts were not changed because the rule cannot match any non-ALT calculator body. No separate broad Formula-style regression was required.
- Remaining HIGH risk: 0. Remaining MEDIUM and LOW risks unchanged from the ALT-cluster entry.
- Implementation/final commit: pending until this entry is committed.

---

## 2026-08-10 — Full audit and homepage inventory-count correction

### Repository sync and starting state

- Target repository: `https://github.com/canghun13/reliabilitybench.git`; branch `main`.
- The workspace began as an empty Git repository with no remote or commits. It was connected to the target repository, `origin` was fetched, and local `main` was created to track `origin/main` without reset, stash, overwrite, merge, or rebase.
- Starting local HEAD and `origin/main`: `2c6b0f8ed0de15560cf75f962518b5c386f2723a`; ahead/behind `0/0`; working tree clean.
- Starting verified inventory: 74 public HTML pages; 73 indexable canonical URLs; 73 sitemap URLs; 42 calculators; 12 guide HTML pages including the hub; 8 reference HTML pages including the hub.
- The complete current `handover.md`, public pages, calculator engine/configurations, shared shell and styles, hubs, sitemap, llms.txt, QA scripts, recent Reliability Growth and ALT scopes, and protected homepage badge area were reviewed before modification.

### Search and analytics evidence

- Search Console: the handover identifies a domain property, but no current GSC query/page export or connector data was available in the repository or supplied files. No impressions, clicks, CTR, average-position, or trend claim was inferred.
- GA4: measurement ID `G-6Z73P5MMNS` is present sitewide and passed static QA, but no GA4 landing-page, engagement, calculator-use, exit, referral, or traffic-quality export was available. Automated QA/direct traffic was not treated as demand evidence.
- Because no current search or behavior evidence was available and the two newest clusters were added on 2026-08-08, no existing search-targeted page was rewritten and no new cluster was proposed as an evidence-backed priority.

### Full audit result

- Baseline automated QA passed before modification: `tools/final-site-qa.mjs` scanned 74 public / 73 indexable / 73 sitemap URLs; `tools/calculator-qa.mjs` passed all 42 calculators; `tools/qa-check.mjs`, JavaScript syntax checks, and `git diff --check` passed.
- Baseline browser QA covered 18 representative pages across Home, hubs, all four workstations, recent and existing calculators, Guide, Reference, trust pages, and 404 at 1440, 1280, 1024, 768, and 390px: 90 render combinations, zero shell/H1 failures, zero overlap, zero page-level horizontal overflow, and zero console warnings/errors.
- Calculator formulas, normal samples, zero/extreme/non-finite/negative guards, units, Reset, content sections, result interpretation, and targeted domain boundaries passed the independent regression suite for all 42 configurations.
- Link, orphan, breadcrumb/hub, metadata, canonical, robots, Open Graph, JSON-LD, sitemap, llms.txt, CNAME, favicon, GA4, duplicate-ID, and HTML nesting checks passed. No evidence-backed consolidation, noindex, canonical merge, link addition, Guide/Reference rewrite, shared CSS/JS change, or calculator change was justified.
- One user-visible factual mismatch remained on the homepage: the status strip said `15 focused tools online` and the primary ledger CTA said `View all 15 tools`, while the verified current inventory contains 42 calculators.

### Candidate decisions

- **Homepage inventory-count correction — SELECTED.** Evidence: two prominent homepage strings contradicted the verified 42-calculator inventory. User value: removes an immediate scope/credibility mismatch on the main entry page. Search value: keeps homepage copy factually aligned without adding keywords or filler. Technical value: two text-only replacements, no layout or routing change. Regression risk: very low and directly testable.
- **Analytics consent management — DEFER.** It remains a conditional MEDIUM risk, but no target-jurisdiction requirement, approved consent policy, or CMP choice was supplied. Implementing legal/analytics behavior by assumption would be materially broader and riskier than the verified defect.
- **New calculator/content cluster — NO-GO.** No current GSC/GA4 evidence was available, recent Reliability Growth and ALT expansions still need observation, and previously considered adjacent topics have documented competition, overlap, or governance concerns. Page-count growth alone is not value.
- **Internal-link or content reinforcement — NO-GO.** All indexable pages are linked and sitemap-consistent, the hubs route correctly, and calculator content coverage passed. Adding links or prose without a user or search failure would create noise rather than a measurable improvement.

### Implemented change and scope

- Updated only `index.html`: `15 focused tools online` → `42 focused tools online`; `View all 15 tools` → `View all 42 tools`.
- No title, description, canonical, URL, sitemap, shared CSS/JS, calculator, Guide, Reference, brand, logo, favicon, CNAME, GA4 ID, or navigation structure changed.
- The user-managed six-badge directory block was not edited, deleted, moved, or refactored. Browser verification retained all six badge images at every tested viewport.

### Final QA and release state

- Final automated QA passed: `tools/final-site-qa.mjs` (74 public / 73 indexable / 73 sitemap), `tools/calculator-qa.mjs` (42 calculators), `tools/qa-check.mjs`, both shared JavaScript syntax checks, and `git diff --check`.
- Final homepage browser QA passed at 1440, 1280, 1024, 768, and 390px: both corrected `42` strings rendered, one H1 remained, horizontal overflow was 0, all six protected badges remained, and console warnings/errors were 0.
- Remaining HIGH risk: 0.
- Remaining MEDIUM risk: pre-existing immediate GA4 loading may require consent management before targeting jurisdictions that require opt-in analytics consent.
- Remaining LOW risk: no current GSC/GA4 export was available, so content/search prioritization remains observational; display-font fallback and legacy SVG favicon behavior remain unchanged.
- Immediate additional work required: no. Do not add another cluster or rewrite stable pages without current query/use evidence.
- Next observation point: review GSC query/page impressions, clicks, CTR, average position, and GA4 organic landing/calculator engagement after the recent clusters have had a meaningful observation window (the prior recommendation remains 60–90 days).
- Implementation/final commit: pending until this entry is committed.
