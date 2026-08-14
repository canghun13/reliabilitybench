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

---

## 2026-08-11 — New search-cluster discovery and external SERP validation (NO-GO)

### Repository sync and starting inventory

- Target repository: `https://github.com/canghun13/reliabilitybench.git`; branch `main`.
- Starting local HEAD: `ea83873a3e2068e0907749febb52094782d55d9e`; starting `origin/main`: `ea83873a3e2068e0907749febb52094782d55d9e`.
- `git fetch origin` completed before any file change. Local HEAD, `origin/main`, and ahead/behind were verified as equal with a clean working tree (`0/0`). No pull, reset, stash, checkout, merge, rebase, or overwrite was used.
- Starting verified inventory: 74 public HTML pages excluding the two shared partials; 73 indexable canonical/sitemap URLs; 42 calculator configurations; 12 Guide HTML pages including the hub; 8 Reference HTML pages including the hub.
- Existing calculators, hubs, Guide/Reference pages, formulas, sitemap, `llms.txt`, and the complete prior handover were inventoried before research.

### Protected exclusion list

- Existing site boundaries: basic and system reliability, exponential and Weibull life calculations, availability, Maintenance Planning & Scheduling, maintenance KPIs, downtime/economics, MRO inventory, Reliability Growth / Duane, and Accelerated Life Testing / acceleration models.
- Prior NO-GO boundaries: Reliability Demonstration Test Planning; Asset Criticality / FMEA Scoring; Critical / Repairable Spares; Maintenance Staffing and Workload; Advanced Life & Failure Analysis adjacency; Maintainability Prediction; Reliability Allocation; PM/CBM Age Replacement and Inspection / Failure-Finding Intervals.
- The research below did not rename or subdivide any of those topics into a nominally new cluster.

### First-pass candidate families

1. **Rotating-equipment spectral marker diagnostics.** User: vibration analyst, condition-monitoring technician, rotating-equipment engineer. Job: calculate expected mechanical/electrical frequencies before comparing them with a measured spectrum. Situation: pump, motor, bearing, fan, belt, or gearbox vibration with uncertain peak identity. Core queries: `bearing fault frequency calculator`, `gear mesh frequency calculator`, `vane pass frequency calculator`, `belt passing frequency calculator`, `motor slip frequency calculator`. Expected tools: bearing BPFO/BPFI/BSF/FTF, gear mesh/sidebands, blade or vane pass, belt pass, and induction-motor slip/pole-pass frequencies. Difference from the site: diagnosis support from equipment geometry and RPM, not failure probability, life, or maintenance KPI calculation.
2. **Condition-trend and remaining-useful-life screening.** User: condition-monitoring engineer or predictive-maintenance planner. Job: fit a degradation trend to inspection/sensor readings and estimate threshold crossing. Situation: incomplete run-to-failure data but an engineering alarm/failure threshold is known. Core queries: `remaining useful life calculator`, `degradation trend calculator`, `equipment threshold forecast`, `RUL spreadsheet`. Expected tools: linear threshold crossing, exponential degradation, confidence-bound screening, and trend/change-point screening. Difference: condition-data prognosis rather than distribution-based life probability.
3. **Warranty and field-return analytics.** User: field reliability, quality, warranty, or service-cost analyst. Job: normalize claims, compare cohorts, forecast returns, and estimate financial exposure. Situation: shipped populations, reported failures, right censoring, reporting delay, and mixed product cohorts. Core queries: `warranty claim rate calculator`, `warranty data analysis calculator`, `warranty return forecast`, `warranty reserve calculator`, `field failure rate calculator`. Expected tools: claim-rate normalization, cohort return forecast, expected claims/cost reserve, and no-trouble-found rate. Difference: post-sale cohort and cost workflow rather than laboratory reliability or MRO stock policy.
4. **Rolling-bearing selection and life verification.** User: machine designer or rotating-equipment engineer. Job: check equivalent load, L10 life, required dynamic rating, and reliability adjustment. Situation: bearing catalog selection under radial/axial load and speed. Core queries: `bearing L10 life calculator`, `required dynamic load rating calculator`, `equivalent bearing load calculator`, `adjusted bearing life calculator`. Expected tools: equivalent dynamic load, L10 hours, required C rating, and adjusted life. Difference: component-selection workflow, but with direct adjacency to the existing B10/Weibull life pages.
5. **Bearing lubrication route planning.** User: lubrication technician or planner. Job: estimate grease quantity, interval, viscosity adequacy, and automatic-lubricator feed rate. Situation: over-greasing, high temperature, contamination, vertical shafts, or missing route settings. Core queries: `bearing grease quantity calculator`, `relubrication interval calculator`, `viscosity ratio kappa calculator`, `lubricator setting calculator`. Expected tools: grease quantity, interval screening, kappa ratio, and dispense rate. Difference: physical maintenance execution rather than work-order compliance.
6. **Repairable-system deterioration and bad-actor screening.** User: reliability engineer or fleet asset manager. Job: decide whether failure intensity is worsening and which assets dominate frequency, downtime, and cost. Situation: recurrent failures after minimal repair and competing bad-actor rankings. Core queries: `Laplace trend test calculator`, `repairable system trend calculator`, `maintenance bad actor ranking`, `Jackknife plot maintenance`. Expected tools: Laplace trend test, repairable-system ROCOF, frequency-versus-downtime screening, and cost-concentration ranking. Difference: field deterioration/prioritization, but potentially adjacent to the existing Duane power-law workflow.

### Search-demand and SERP evidence

- No paid keyword-volume dataset was available, so no numeric search-volume claim was made. Demand labels below are qualitative and based on exact/near-exact result depth, recurring professional documentation, commercial software coverage, calculator/spreadsheet intent, and practitioner discussion.
- Exact and long-tail queries were run for calculator, formula, spreadsheet/template, how-to, planning, and troubleshooting intent. The searched groups included all core queries listed above plus `bearing fault frequency spreadsheet`, `remaining useful life spreadsheet degradation trend threshold`, `warranty claim analysis spreadsheet template`, `bearing relubrication interval calculator`, and `bad actor analysis calculator maintenance`.
- Rotating spectral diagnostics demand: **Strong.** Exact calculators and professional guidance recur for bearings, gears, fans/pumps, belts, and induction motors. Spreadsheet/manual-formula and practitioner troubleshooting traces also recur. However, this same evidence shows a crowded current SERP rather than a workbench gap.
- Condition-trend/RUL demand: **Moderate to Strong.** RUL is a recurring predictive-maintenance task covered by NIST degradation guidance, MathWorks tooling, commercial PdM content, academic work, and practitioner questions. Exact browser tools are now present, and trustworthy use requires a defensible condition indicator and engineering threshold.
- Warranty/field-return demand: **Moderate.** Warranty rate, return forecasting, reserve, cohort, and spreadsheet/software intents are all visible. The serious workflow is data-heavy and dominated by life-data/warranty software; the lightweight metric/calculator intents already have exact free results.
- Bearing selection/life demand: **Strong**, but exact free ISO-281-style calculators are saturated and several combine load, required rating, life, reliability adjustment, and frequency analysis in one page.
- Lubrication-route demand: **Moderate to Strong**, but OEM/manufacturer calculators and specialist tools already cover fill, quantity, and interval. Interval models depend on manufacturer diagrams, grease properties, bearing type, temperature, load, contamination, orientation, and application-specific corrections.
- Repairable-system/bad-actor demand: **Moderate.** The formal trend-test intent is real, but it intersects the existing Reliability Growth / Duane model. Bad-actor ranking is operationally common, yet weighting/ranking conventions are organization-specific and often delivered as CMMS dashboards or spreadsheets.

### Competitors and source checks

- Rotating diagnostics direct competition: [FrequencyDetector bearing fault frequency](https://frequencydetector.com/bearing-fault-frequency-calculator/), [FrequencyDetector gear mesh frequency](https://frequencydetector.com/gear-mesh-frequency-calculator/), [VibCloud fault-frequency suite](https://vib.cloud/fault-calculator.html), [Mobius vibration calculators](https://www.mobiusinstitute.com/calculators-simulations-severity-charts/), [RITEC belt passing frequency](https://www.ritec-eg.com/Library%20%26%20Tools/Belt-Vibration-Frequency-Calculator.html), [Vibromera blade/vane pass](https://vibromera.eu/scn/calculators/blade-pass-frequency/), and [RF Tools induction-motor slip](https://rftools.io/calculators/motor/induction-motor-slip/). Formula corroboration included [MathWorks rotating-machinery vibration analysis](https://www.mathworks.com/help/signal/ug/vibration-analysis-of-rotating-machinery.html), [AIHA blade passing frequency](https://www.aiha.org/ih-calculator-app/calcs/blade-passing-frequency.html), and SKF spectrum-analysis material surfaced in the SERP. Source quality is high enough to implement marker calculations, but not to turn marker coincidence into an automatic diagnosis.
- Condition/RUL direct competition: [Vibromera RUL prognostics calculator](https://vibromera.eu/ml/calculators/rul-prognostics-calculator/), [Simulations4All degradation/RUL estimator](https://simulations4all.com/simulations/degradation-remaining-useful-life-estimator), and [MathWorks `predictRUL`](https://www.mathworks.com/help/predmaint/ref/lineardegradationmodel.predictrul.html). Primary technical basis reviewed: [NIST degradation-data modeling](https://www.itl.nist.gov/div898/handbook/apr/section4/apr423.htm). NIST explicitly frames the simple case around a measurable monotonic parameter, a critical threshold, and a defensible linearizing model; a generic tool cannot establish those prerequisites for the user.
- Warranty direct competition: [MetricGate warranty data analysis](https://metricgate.com/docs/warranty-data-analysis/), [CalcBee warranty claim rate](https://calcbee.com/calculators/manufacturing/quality/warranty-claim-rate/), [CalcoI warranty reserve](https://calcoi.com/en/calculator/warranty-reserve-calculator/), [ReliaSoft warranty data analysis](https://help.reliasoft.com/reference/life_data_analysis/lda/warranty_data_analysis.html), [PTC warranty analysis](https://support.ptc.com/help/wrr/r12.0.0.0/en/wrr/ReferenceGuide/weibull/warranty_analysis.html), and [Relyence Weibull/field data](https://relyence.eu/weibull-analysis/). These results cover simple rates, free parametric forecasts, censored-data conversion, conditional return prediction, and commercial field-data workflows.
- Bearing-selection direct competition: [Fault Ledger bearing life](https://faultledger.com/bearing-life-calculator/), [ToolGrit L10 calculator](https://www.toolgrit.com/tools/bearing-life-calculator), [Reuven bearing life](https://reuven.tools/tools/bearing-life/), and [Calculator Academy bearing load](https://calculator.academy/bearing-load-calculator/). Manufacturer/technical corroboration included [NSK bearing-life guidance](https://www.nsk.com/content/dam/nsk/eu/en_gb/documents/bearings-europe/P_TI-0102_EN.pdf) and Timken design material.
- Lubrication direct competition: [Timken grease lubrication tool](https://engineering.timken.com/engineering-tool/grease-lubrication-tool/), [Fault Ledger lubrication calculator](https://faultledger.com/lubrication-calculator/), [ToolGrit lubrication interval](https://www.toolgrit.com/tools/lube-interval-calculator), [Interlub relubrication frequency](https://interlub.com/en/lubrication-tools/bearing-grease-fill-frequency/), and [Vibromera grease quantity](https://vibromera.eu/calculators/bearing-grease-quantity/). [Schaeffler rolling-bearing lubrication](https://www.schaeffler.com/remotemedien/media/_shared_media/08_media_library/01_publications/schaeffler_2/publication/downloads_18/wl_81115_4_de_en.pdf) confirms that quantity varies with interval and application; generic interval multipliers would require a declared local approximation rather than a universal formula.
- Repairable-system/bad-actor competition: [MetricGate repairable-system trend test](https://metricgate.com/docs/repairable-system-trend-test/), [NIST reliability trend test](https://itl.nist.gov/div898/software/dataplot/refman1/auxillar/trentest.htm), [Python reliability ROCOF](https://reliability.readthedocs.io/en/stable/API/Repairable_systems/ROCOF.html), and the commercial [ReliabilityX bad-actor ranking spreadsheet](https://reliabilityx.com/product/bad-actor-ranking-tool/). NIST also confirms the [NHPP power-law relationship](https://www.itl.nist.gov/div898/handbook/apr/section1/apr191.htm), which is already a protected overlap boundary because ReliabilityBench has a Duane/reliability-growth cluster.

### Deep validation candidate 1 — Rotating-equipment spectral marker diagnostics

- User workflow: enter known geometry, element counts, RPM/supply frequency, and compare calculated marker lines with a measured vibration/current spectrum during fault investigation.
- Core intent and long-tail groups: bearing-geometry-specific BPFO/BPFI/BSF/FTF; single/multistage gear mesh and shaft-spaced sidebands; pump/fan blade or vane pass; belt length/pass; induction-motor synchronous speed, slip, and electrical sidebands.
- Demand: **Strong** qualitative evidence. The problem is repeated in condition monitoring, OEM training, calculators, and practitioner discussions.
- Competition: **Strong.** Exact modern free calculators exist for every proposed sub-intent. VibCloud already advertises one free suite spanning bearings, gearboxes, belts, motor electrical frequencies, planetary gears, and blade/vane pass; FrequencyDetector and Mobius add modern multi-tool coverage.
- Competition gap: formula explanation and warnings vary, but there is no defensible broad workflow gap. A new suite would compete on presentation rather than an unserved decision. Automatic interpretation would be unsafe because speed variation, slip, resonance, modulation, sensor position, load, and spectrum quality affect the observed peaks.
- Existing-site overlap: **NO OVERLAP** for the direct diagnostic inputs/results; adjacency only through reliability and maintenance audiences.
- Independent tools: five legitimate tools were identified (bearing, gear, blade/vane, belt, motor), each with different geometry and outputs. Expansion passes the count test but fails the SERP-gap test.
- Formula/source quality: **Strong** for kinematic marker frequencies; **insufficient for automated diagnosis**. Source warnings consistently frame calculated frequencies as places to inspect, not proof of a defect.
- Repeat-use/commercial relevance: strong; naturally adjacent to condition-monitoring and predictive-maintenance software.
- Implementation/maintenance: moderate static implementation; low data maintenance if geometry is user-entered, but meaningful diagnostic UX would be substantially more than arithmetic.
- Key risk: publishing an apparently differentiated suite that is already directly available from multiple current free competitors.
- Decision: **NO-GO.** Criterion B (SERP gap/free-workbench differentiation) is not met despite A, C, E, F, H, I, and J being plausible.

### Deep validation candidate 2 — Condition-trend and remaining-useful-life screening

- User workflow: supply a time series of condition readings, choose a justified degradation form and engineering threshold, inspect fit/uncertainty, and estimate time to threshold.
- Core intent and long-tail groups: linear versus exponential degradation, limited data, known upper/lower threshold, vibration/temperature/wear indicators, confidence bounds, and change-point/trend onset.
- Demand: **Moderate to Strong** qualitative evidence. Exact calculator and how-to results coexist with commercial predictive-maintenance documentation and recurring professional questions.
- Competition: **Strong at the head intent.** Vibromera offers a free multi-model RUL calculator with trend points, threshold, and confidence level; Simulations4All advertises linear, exponential, power-law, Wiener, Gamma, and Paris-law models; MathWorks provides mature commercial model workflows.
- Competition gap: simplified browser screening could be easier than commercial software, but the strongest free calculators already occupy that position. Equipment-specific thresholds cannot be supplied responsibly without OEM/process evidence.
- Existing-site overlap: **PARTIAL OVERLAP.** The condition-data workflow is new, but Weibull reliability/B10, ALT degradation assumptions, and maintenance planning already occupy life and intervention-adjacent decisions.
- Independent tools: only two clearly independent static decisions emerged—fit/threshold prognosis and trend-onset screening. Linear, exponential, and polynomial pages would reuse the same inputs and return the same threshold-crossing decision, so they count as model modes, not independent tools. Fleet similarity/survival prognosis would require much heavier datasets and algorithms.
- Formula/source quality: **Moderate.** NIST supports the narrow monotonic-threshold case, but the user must validate the indicator, transformation, failure threshold, operating regime, and extrapolation. A generic calculator cannot verify them.
- Repeat-use/commercial relevance: strong for mature condition-monitoring programs; weak for users without stable sensors, baselines, or thresholds.
- Implementation/maintenance: moderate to high for regression, diagnostics, uncertainty, pasted-series UX, and tests; a credible multi-model suite is beyond the site's current simple-scalar engine.
- Key risk: false confidence in an RUL number driven by an arbitrary threshold, short/noisy trend, or regime change.
- Decision: **NO-GO.** It fails B, E, and the safe/maintainable part of F/G; a four-page cluster would be model-splitting rather than four independent workflows.

### Deep validation candidate 3 — Warranty and field-return analytics

- User workflow: combine shipments/installed population, return timing/status, warranty horizon, and claim cost to monitor field quality and forecast claims/cost.
- Core intent and long-tail groups: claims per population/PPM, shipment-cohort/Nevada charts, right-censored field data, expected returns, claim-cost reserve, no-trouble-found, and product/failure-mode comparison.
- Demand: **Moderate** qualitative evidence. Exact calculators, specialist statistical software, warranty-management SaaS, spreadsheet traces, and field-reliability documentation recur.
- Competition: simple calculator intents are already served by CalcBee and CalcoI; MetricGate exposes a free parametric warranty-data workflow; ReliaSoft, PTC, Relyence, and warranty-management systems cover serious cohort/censoring workflows.
- Competition gap: a no-login cohort workbench might differ from enterprise systems, but MetricGate closes much of the free statistical gap. The remaining real gap is data ingestion/cleaning/cohort transformation and reporting, not a set of simple static calculators.
- Existing-site overlap: **PARTIAL to STRONG.** Claim rate closely overlaps Failure Rate when exposure is population-based; Weibull forecast and expected returns reuse existing Weibull Reliability and Expected Failures models; cost reserve is adjacent to lifecycle/downtime economics. Nevada/cohort transformation would be new but is a data application rather than a scalar calculator.
- Independent tools: claim-rate normalization, cohort conversion/forecast, cost reserve, and no-trouble-found rate can be named separately, but only the cohort workflow is mathematically substantial. The others are simple ratios/products, and forecast/cost pages would chain the same existing failure probability.
- Formula/source quality: **Strong** for basic ratios and expected cost; **specialized** for censored/cohort forecasts. Correct use needs shipment cohorts, units at risk, censoring, reporting delay, model fit, and homogeneous failure-mode review.
- Repeat-use/commercial relevance: strong for manufacturers with structured warranty data; lower for the site's broader maintenance-operations audience.
- Implementation/maintenance: high for table/file input, censoring, cohort transformation, model fitting, and validation; simple scalar pages would be thin.
- Key risk: either duplicating existing ReliabilityBench formulas under warranty labels or under-building a data workflow that users expect to handle cohorts and censoring correctly.
- Decision: **NO-GO.** Criteria C/E are not met cleanly and B/G are weak; the differentiated product would require a data-analysis application beyond the current static calculator pattern.

### Remaining candidate decisions

- **Rolling-bearing selection and life verification — NO-GO.** Demand and sources are strong, but current SERPs contain numerous complete free ISO-281-style tools. The core L10/B10 survival decision is also adjacent to the existing B10 and Weibull pages. Splitting equivalent load, life, required rating, and reliability adjustment would not create a defensible gap against competitors already combining them.
- **Bearing lubrication route planning — NO-GO.** Four apparent tools exist, but interval and viscosity decisions depend on OEM/manufacturer charts and application corrections, while Timken and several specialist sites already provide direct free workflows. A static local approximation would be less authoritative than the SERP leaders and could be misapplied as a work instruction.
- **Repairable-system deterioration and bad-actor screening — NO-GO.** Laplace/ROCOF formulas have strong sources, but the formal statistical half overlaps the recent Duane/power-law cluster and has an exact modern free competitor. The operational ranking half lacks a universal scoring rule; separate frequency, downtime, and cost ranks are spreadsheet/dashboard features rather than four independent calculators.

### Final decision and release scope

- Final decision: **NO-GO**.
- GO criteria not met: every candidate failed at least the defensible SERP-gap criterion; RUL and warranty also failed independent-tool and/or existing-overlap criteria. The best tool-count candidate, rotating diagnostics, was directly pre-empted by complete current free suites.
- New production pages: **0**. No HTML, CSS, JavaScript, calculator configuration, hub, Guide, Reference, sitemap, `llms.txt`, homepage, badge block, branding, CNAME, GA4, or existing URL was changed.
- This task did not turn into a maintenance audit. Only the required repository/inventory checks and NO-GO release QA were performed.
- Reconsider rotating diagnostics only if competitor suites disappear, real GSC queries show persistent spectral-marker demand on ReliabilityBench, or a differentiated measured-spectrum workflow (not just formula calculators) becomes safely implementable.
- Reconsider condition/RUL only with a narrowly supported equipment/indicator/threshold use case and at least four genuinely different decisions, or with evidence that a pasted-series analysis application is the intended product direction.
- Reconsider warranty analytics only if users provide cohort/censored field datasets or queries that justify a dedicated table/file-based application distinct from existing Weibull and Expected Failures tools.
- Remaining HIGH risk: 0 introduced. Remaining MEDIUM risk: pre-existing immediate GA4 loading may require consent management in opt-in jurisdictions. Remaining LOW risk: demand was validated qualitatively without paid volume data; fast-moving 2026 calculator SERPs should be rechecked before any later implementation.
- Final static QA: `tools/final-site-qa.mjs` passed for 74 public / 73 indexable / 73 sitemap URLs; `tools/calculator-qa.mjs` passed all 42 calculators; `tools/qa-check.mjs`, both shared JavaScript syntax checks, and `git diff --check` passed. The final commit and synchronized local/origin/actual-remote hashes are verified after push and reported in the task result.

---

## 2026-08-13 — Aggressive new-cluster discovery and live SERP validation (NO-GO)

### Repository sync and starting state

- Target repository: `https://github.com/canghun13/reliabilitybench.git`; branch `main`.
- Starting local HEAD: `fb4fad1d300e55c50215e839e1f786bd816fc399`.
- Starting `origin/main`: `fb4fad1d300e55c50215e839e1f786bd816fc399`.
- Starting actual remote `refs/heads/main`: `fb4fad1d300e55c50215e839e1f786bd816fc399`.
- `git fetch origin main` completed before any file change. Local HEAD, fetched `origin/main`, and the actual remote hash were equal; ahead/behind was `0/0`; the working tree was clean. No pull was needed, and no reset, stash, checkout, merge, rebase, overwrite, or destructive command was used.
- Starting verified inventory: 74 public HTML pages excluding the two shared partials; 73 indexable canonical/sitemap URLs; 42 calculator configurations; 12 Guide HTML pages including the hub; 8 Reference HTML pages including the hub.
- The complete current `handover.md`, public-page inventory, calculator engine/configurations, hubs, formulas, sitemap, and `llms.txt` were reviewed before candidate research.

### Protected exclusion list

- Existing site boundaries remained protected: basic/system reliability, exponential and Weibull life calculations, availability, maintenance KPIs and planning/scheduling, downtime/economics, MRO inventory, Reliability Growth / Duane, and Accelerated Life Testing / acceleration models.
- Explicitly excluded prior clusters and NO-GO families were not renamed or subdivided: Reliability Demonstration Testing; Asset Criticality / FMEA; Critical / Repairable Spares; Maintainability Prediction; Reliability Allocation; PM/CBM Age Replacement and Inspection Interval; Maintenance Planning & Scheduling; Reliability Growth / Duane; ALT variants; Rotating Machinery Spectrum Marker Diagnostics; Condition Trending / RUL; Warranty / Field Return; Bearing Selection / Life; Bearing Lubrication; and Repairable-System Degradation / Bad-Actor analysis.

### Candidate families and first-pass decisions

1. **Fault-tree quantification and minimal-cut-set screening.** Queries included `fault tree probability calculator`, `minimal cut set calculator`, `Birnbaum importance calculator`, and `common cause beta factor calculator`. Demand is strong and the workflow is reliability-specific. Four real decisions are possible—gate/top-event quantification, minimal cut sets, event importance, and common-cause sensitivity—but current free tools already combine them. **NO-GO: direct free-suite competition and safety-context risk.**
2. **Variable-amplitude fatigue and mission-profile damage.** Queries included `Palmgren Miner calculator`, `fatigue equivalent load calculator`, `Goodman correction calculator`, `Basquin S-N calculator`, and `rainflow fatigue calculator`. Demand is strong and four independent technical steps exist, but free competitors already bundle S-N/Basquin life, mean-stress correction, Marin factors, and Miner damage. It also moves toward mechanical design/safety rather than the site's core maintenance decision surface. **NO-GO: saturated integrated SERP and domain-boundary risk.**
3. **Lubricant and used-oil condition analytics.** Queries included `ASTM D2270 viscosity index calculator`, `ASTM D341 viscosity temperature calculator`, `ISO 4406 cleanliness calculator`, `TAN TBN trend used oil`, and `viscosity change alarm calculator`. Demand is moderate to strong. VI, viscosity-temperature conversion, cleanliness coding, and trend normalization appear separable, but the first three already have exact free tools and interpretation thresholds depend on equipment, lubricant, OEM, lab, and operating context. **NO-GO: exact-tool saturation and non-universal action thresholds.**
4. **Fleet and asset-renewal wave forecasting.** Queries included `fleet replacement forecast age cohort`, `equipment replacement 20 year spreadsheet`, `capital replacement plan calculator`, and `fleet replacement budget smoothing`. Demand is moderate and spreadsheet/SaaS intent repeats. Age-cohort waves, annual capital profile, backlog/deferred replacement, and budget smoothing are possible, but replacement criteria are local policy inputs and keep/replace economics overlaps the existing Repair vs Replace workflow. **NO-GO: weak universal formula core and material existing overlap.**
5. **Acceptance sampling and receiving/commissioning plans.** Queries included `acceptance sampling calculator`, `OC curve calculator`, `AQL sample size calculator`, `c=0 sampling calculator`, and `MIL-STD-105 calculator`. Demand is strong, but Texas Instruments, MetricGate, Vibromera, Industrial Engineering Calculators, and eAuditor already cover the exact free intents. The family is also adjacent to the excluded Reliability Demonstration Testing cluster and quality assurance rather than maintenance. **NO-GO: saturated exact SERP and protected adjacency.**
6. **Post-maintenance precision and performance verification.** Queries covered `post maintenance verification calculator`, `pump performance test calculator`, `shaft alignment tolerance calculator`, `compressor performance acceptance`, and `maintenance commissioning checklist`. Real practice exists, but the SERP fragments by equipment type and applicable code/tolerance. Pump, alignment, compressor, and electrical checks are not one coherent search cluster or one trustworthy shared formula family. **NO-GO: no coherent Hub/Tools/Guide/Reference architecture.**
7. **Compressed-air leak survey and repair economics.** Queries included `compressed air leak calculator`, `receiver pressure decay leak calculator`, `orifice air leak cost calculator`, `compressed air leak repair payback`, and `compressor specific power calculator`. Demand is strong and four tools are technically plausible. However, the free DOE/ORNL MEASUR suite already supports estimate, decibel, bag, and orifice leak methods plus annual cost, while Ensign and CPP PREMA provide overlapping free workflows. **NO-GO: an authoritative free integrated solution already owns the workflow.**
8. **Corrosion-rate, remaining-life, and thickness planning.** Queries included `corrosion rate remaining life calculator`, `API 570 inspection interval calculator`, `minimum required thickness calculator`, and `pressure vessel MAWP calculator`. Demand is strong and the arithmetic is established, but WeldFabWorld, GammaTec, AsInt, and other tools already provide integrated free calculations. Responsible outputs depend on current pressure-equipment codes, design details, damage mechanisms, and qualified review. **NO-GO: exact competition plus unacceptable code/safety dependence for a generic static suite.**
9. **Heat-exchanger fouling performance and cleaning economics.** Queries included `heat exchanger fouling resistance calculator`, `U value clean dirty calculator`, `fouling energy loss calculator`, and `heat exchanger cleaning payback optimal interval`. This was the strongest late candidate because it directly connects condition, performance, energy, and maintenance decisions. Live SERPs now contain a free fouling/cleaning simulator covering fouling factor, degradation tracking, energy penalty, and optimal cleaning interval, plus exact single-purpose calculators and commercial monitoring workflows. **NO-GO: the apparent gap is already closed.**

### Deep validation candidate 1 — Fault-tree quantification

- **User workflow:** build or enter a small Boolean failure structure, quantify the top event, identify minimal cut sets, rank basic events, and test common-cause sensitivity.
- **Demand:** **Strong qualitative evidence.** Exact calculator, minimal-cut-set, importance, software, training, and safety-analysis results recur. No paid keyword-volume dataset was available, so no numeric volume claim is made.
- **Direct competition:** [MetricGate minimal cut set and fault-tree quantification](https://metricgate.com/docs/minimal-cut-set-fault-tree-quantification/) already exposes exact/rare-event probability, cut sets, and Birnbaum/criticality importance. [ISO 26262 Academy FTA tools](https://iso26262.academy/features/concepts/fta) offers six interactive tools. [Ansys FTA documentation](https://ansyshelp.ansys.com/public/Views/Secured/medini/v25202/en/medini_analyze_ug/fta.html), [Relyence Fault Tree](https://relyence.com/products/fault-tree/metrics), and [ITEM ToolKit](https://www.fault-tree-analysis.com/) demonstrate mature workflow coverage.
- **SERP gap:** weak. A friendlier static interface could improve presentation, but current free tools already cover the proposed calculations. The differentiated remainder would be a graphical tree editor, import/export, dependency modeling, and auditability—not four simple calculator pages.
- **Existing-site overlap:** low for cut sets and importance; partial for simple series/parallel probability because ReliabilityBench already has system-reliability calculators.
- **Independent tools:** four can be named, but top-event probability and minimal-cut-set quantification share the same model, while common-cause and importance results need careful modeling assumptions. The count passes narrowly; differentiation does not.
- **Formula/source quality:** strong. The [U.S. NRC Fault Tree Handbook, NUREG-0492](https://www.nrc.gov/reading-rm/doc-collections/nuregs/staff/sr0492/index) is authoritative for construction/evaluation. Independence, mutually exclusive-event handling, repeated events, and rare-event approximations must be explicit.
- **Free/no-login differentiation:** insufficient against current MetricGate and ISO 26262 Academy results.
- **Static maintainability:** arithmetic is maintainable, but a trustworthy tree authoring/validation interface is a materially larger application.
- **Decision:** **NO-GO.** Criteria B and G fail; safety-facing interpretation also weakens F/J.

### Deep validation candidate 2 — Variable-amplitude fatigue and mission-profile damage

- **User workflow:** define an S-N/Basquin relationship, correct alternating stress for mean stress, accumulate block damage, and translate a variable spectrum into damage or an equivalent load.
- **Demand:** **Strong qualitative evidence.** Calculator, spreadsheet, formula, simulator, and engineering-software results recur for each intent.
- **Direct competition:** [SteelSolver fatigue calculator](https://www.steelsolver.com/p/fatigue-calculator.html) combines Basquin, Goodman/Gerber/Soderberg, Marin factors, and Miner damage. [ConductScience S-N calculator](https://conductscience.com/tools/fatigue-life-calculator), [MechSimulator fatigue-life simulator](https://mechsimulator.com/tools/fatigue-life/), [Quadco S-N and Haigh calculator](https://www.quadco.engineering/en/know-how/sn-haigh-diagram-calculator.htm), [EngBench Goodman calculator](https://engbench.com/fatigue.php), and the [DTU Wind Energy Toolbox fatigue-equivalent-load notebook](https://toolbox.pages.windenergy.dtu.dk/windenergytoolbox/notebooks/Fatigue.html) cover the same chain.
- **SERP gap:** poor. The proposed cluster would mostly reorganize calculations already bundled by modern free competitors. Rainflow/time-history ingestion could differentiate, but that is a data-analysis application with material algorithm, visualization, and validation scope.
- **Existing-site overlap:** low in formulas, but audience alignment is only partial because the outputs are mechanical-design fatigue estimates rather than maintenance/reliability operating metrics.
- **Independent tools:** S-N/Basquin life, mean-stress correction, Miner block damage, and fatigue-equivalent load are legitimate separate steps. Tool count passes.
- **Formula/source quality:** strong for narrow model forms, with important limitations. [NASA's cumulative-fatigue report](https://ntrs.nasa.gov/archive/nasa/casi.ntrs.nasa.gov/19640020692.pdf) documents Palmgren-Miner and its limitations; [COMSOL stress-life guidance](https://doc.comsol.com/6.3/doc/com.comsol.help.fatigue/fatigue_ug_sme.4.04.html) covers Basquin and mean-stress methods; [COMSOL cumulative-damage guidance](https://doc.comsol.com/6.4/doc/com.comsol.help.fatigue/fatigue_ug_sme.4.25.html) pairs rainflow counting with Palmgren-Miner. Trustworthy use still requires validated material curves, geometry/notch treatment, stress definition, environment, surface/manufacturing effects, and load history.
- **Free/no-login differentiation:** insufficient; SteelSolver and MechSimulator already provide integrated free workflows.
- **Static maintainability:** scalar modes are maintainable, but the differentiated time-series/rainflow product is not a small static-cluster addition.
- **Decision:** **NO-GO.** B, F, G, and J are not met strongly enough despite A/C/E.

### Deep validation candidate 3 — Heat-exchanger fouling and cleaning economics

- **User workflow:** use measured temperatures/flows and a clean baseline to estimate duty/U degradation and fouling resistance, quantify energy or throughput penalty, and evaluate cleaning payback/interval.
- **Demand:** **Strong qualitative evidence.** Monitoring, fouling factor, U-value, cleaning ROI, and optimal-cleaning searches return industry guidance, calculators, simulators, and practitioner questions.
- **Direct competition:** [Simulations4All's free fouling and cleaning simulator](https://simulations4all.com/simulations/heat-exchanger-fouling-cleaning-simulator) already advertises fouling factor, degradation tracking, energy penalty, and optimal cleaning schedule. [Calculator Web Tools fouling factor](https://calculatorwebtools.com/engineering-calculators/heat-and-mass-transfer/fouling-factor-calculator/) serves the exact `1/Udirty - 1/Uclean` intent. [Oxmaint fouling predictive-maintenance guidance](https://oxmaint.com/industries/manufacturing-plant/heat-exchanger-fouling-predictive-maintenance-manufacturing) exposes fouling, daily energy loss, cleaning payback, and cycle logic. [AFPM monitoring guidance](https://www.afpm.org/data-reports/technical-papers/qa-search/question-44-how-do-you-monitor-exchanger-fouling-how-do-you) describes operational ROI/payback decisions and commercial monitoring.
- **SERP gap:** initially promising but closed on live validation. An integrated condition-to-cleaning workflow is already free and no-login. A serious network-level cleaning optimizer would require exchanger interactions, plant simulation, constraints, and uncertain cost models beyond the current site pattern.
- **Existing-site overlap:** moderate. Thermal performance is new, but cleaning payback overlaps existing maintenance ROI/downtime/economics calculations.
- **Independent tools:** measured duty/U, fouling resistance, normalized performance loss, and cleaning economics are separable. However, duty/U/fouling are a chained diagnostic calculation, and cleaning interval optimization depends on a defensible fouling-growth model and local cost/throughput attribution.
- **Formula/source quality:** strong for thermal resistance and basic energy balance; context-sensitive for normalization and economic causality. The [OSTI online monitoring report](https://www.osti.gov/servlets/purl/832717) states the clean/dirty U-value fouling relationship, and [OSTI's industrial fouling-cost record](https://www.osti.gov/biblio/6574086) documents energy, maintenance, production, and capital effects. Flow-dependent U, changing inlet conditions, instrumentation error, bypass/leakage, and network interactions can create misleading raw comparisons.
- **Free/no-login differentiation:** insufficient after the Simulations4All and Oxmaint checks.
- **Static maintainability:** basic calculators are maintainable, but a credible normalized monitor or network optimizer is not a small scalar implementation.
- **Decision:** **NO-GO.** B and G fail; C/E also weaken when chained substeps are counted honestly.

### Additional competition and source checks

- Lubricant tools: [TriboTech ASTM D2270](https://www.tribotech.dk/en/tools/viscosity-index-d2270), [Tribonet viscosity index](https://www.tribonet.org/viscosity-index-vi-calculator-from-kinematic-viscosities-at-40c-and-100c-astm-d2270/), [Vibromera ISO 4406](https://vibromera.eu/calculators/hydraulic-oil-cleanliness-iso4406/), [Olezol](https://olezol.com/), and [Functional Products digital tools](https://functionalproducts.com/io/) were reviewed alongside [Intertek oil-condition trend analysis](https://www.intertek.com/automotive/oil-condition-monitoring-trend-analysis/).
- Fleet renewal: [MotoWatchdog replacement calculator](https://www.motowatchdog.com/free-tools/fleet-vehicle-replacement-calculator-free), [Fleetio replacement projections](https://help.fleetio.com/en_US/vehicle-replacement-create-policies-and-projections-8), [NTEA lifecycle tool](https://lifecycle.ntea.com/), and a recurring [Microsoft spreadsheet-forecast question](https://learn.microsoft.com/en-us/answers/questions/5272824/help-building-model-to-forecast-spend-over-20-year) were reviewed. Official methodology examples included the [PennDOT equipment lifecycle report](https://gis.penndot.gov/BPR_PDF_FILES/Documents/Research/Complete%20Projects/Operations/110601%20-%20Optimizing%20the%20Life%20Cycle%20of%20PennDOT%20Equipment%20-%20Final%20Report.pdf) and [AER pooled-asset replacement methodology](https://www.aer.gov.au/system/files/PWC%20-%2015.7%20-%20Pooled%20Asset%20Replacement%20Forecasting%20Model%20Methodology%20-%2028%20February%202018.pdf).
- Acceptance sampling: [Texas Instruments acceptance sample size](https://www.ti.com/support-quality/reliability/acceptance-sample-size.html), [MetricGate MIL-STD-105/ANSI Z1.4](https://metricgate.com/docs/acceptance-sampling-mil-std-105/), [Vibromera AQL](https://vibromera.eu/calculators/aql-sampling-calculator/), [Industrial Engineering Calculators](https://iecalculators.online/acceptancesamplingplan), [eAuditor c=0](https://eauditor.app/sample-size-calculator/), and [Minitab formulas](https://support.minitab.com/en-us/minitab/help-and-how-to/quality-and-process-improvement/acceptance-sampling/how-to/attributes-acceptance-sampling/methods-and-formulas/methods-and-formulas/) confirmed strong but saturated intent.
- Post-maintenance verification: [DOE Pumping System Assessment Tool manual](https://www.energy.gov/eere/amo/downloads/pumping-system-assessment-tool-user-manual), [KSB operation and maintenance tools](https://www.ksb.com/en-es/tools/operation-and-maintenance), [Vibromera shaft-alignment tolerance](https://vibromera.eu/calculators/shaft-alignment-tolerance/), and [MechanixCalc ASME PTC 10](https://www.mechanixcalc.com/standards/asme-ptc-10) confirmed equipment-specific rather than cluster-coherent intent.
- Compressed air: the [DOE/ORNL MEASUR compressed-air leak survey calculator](https://industrialresources.ornl.gov/measur/suite/docs/group__compressed__air__leak__survey__calculator), [Ensign receiver leakage calculator](https://ensign.software/free-calculators/compressed-air-receiver-leakage-calculator/), [CPP PREMA compressor calculators](https://cpp-prema.pl/en/compressor-calculators/), and [CAGI compressed-air handbook](https://www.cagi.org/assets/documents/pdfs/handbook/CAGI-Handbook_Chap2Mar19PostedtoWebsite.pdf?updated=1659810710) closed the free-workflow gap.
- Corrosion/thickness: [WeldFabWorld API 570 calculator](https://www.weldfabworld.com/corrosion-rate/), [GammaTec corrosion rate/remaining life](https://www.gammatecsa.com/corrosion-rate-remaining-life-calculator/), [AsInt CORE Calculator](https://asint.net/products/core-calculator/), and the [API 570 Body of Knowledge](https://www.api.org/-/media/files/certification/icp/icp-certification-programs/570/bok_feburary%202023_570_final.pdf?hash=8AECDE1E8FA1C40B74F29F8C5F49D0AC586F133F&la=en) confirmed both direct competition and code dependence.

### Final decision and production scope

- Final decision: **NO-GO**.
- Every candidate failed at least one required threshold. The strongest three all had real demand, four plausible tools, and trustworthy narrow formulas, but none had a defensible current SERP gap plus meaningful free/no-login differentiation. The only differentiated versions would require a graphical/data-analysis/simulation product beyond the site's static scalar-calculator model.
- New production pages: **0**. No HTML, CSS, JavaScript, calculator configuration, hub, Guide, Reference, sitemap, `llms.txt`, homepage, badge block, branding, CNAME, GA4 ID, or existing URL was changed.
- This task remained a cluster-discovery exercise; it did not become a maintenance audit or opportunistic site rewrite.

### QA and release state

- Browser QA used the local site through the in-app browser at 1440, 1280, 1024, 768, and 390px. Fourteen representative existing pages across Home, Tools, Reliability, Maintenance, MRO, ALT hub/calculator, Guides, Reference, Weibull, B10, and 404 produced 70 valid page/viewport combinations after correcting three initially mistyped test URLs.
- Every valid combination had one H1, loaded main/footer shell, zero header-main or main-footer overlap, zero broken images, and zero page-level horizontal overflow. Horizontal overflow by width: 1440 = 0; 1280 = 0; 1024 = 0; 768 = 0; 390 = 0. The 390px header retains its intentional internally scrollable navigation track without causing page-level overflow.
- Visual samples at all five widths confirmed the homepage composition; additional Tools, Guide, Reference, and calculator samples confirmed cards, breadcrumbs, formula blocks, inputs, labels, units, buttons, result panel, and responsive stacking. Browser console warnings/errors: 0.
- Final automated QA passed: `tools/final-site-qa.mjs` scanned 74 public / 73 indexable / 73 sitemap URLs and passed structure, SEO, metadata, JSON-LD, links, partials, sitemap, robots, `llms.txt`, CNAME, GA4, and favicon checks; `tools/calculator-qa.mjs` passed all 42 calculators; `tools/qa-check.mjs` passed all 73 indexable pages; all shared JavaScript syntax checks and `git diff --check` passed.
- Final inventory remains 74 public HTML pages; 73 indexable canonical URLs; 73 sitemap URLs; 42 calculators; 12 Guide HTML pages including the hub; 8 Reference HTML pages including the hub.
- Remaining HIGH risk: 0 introduced.
- Remaining MEDIUM risk: pre-existing immediate GA4 loading may require consent management in opt-in jurisdictions; unchanged by this research-only release.
- Remaining LOW risk: demand was validated qualitatively without a paid keyword-volume dataset; fast-moving calculator SERPs should be rechecked before later implementation; some strongest candidates require context-specific engineering judgment that a generic tool cannot validate.
- Immediate additional work required: no. Do not create a new cluster from these families unless direct free competition materially changes or ReliabilityBench's own query/use evidence demonstrates a narrower unmet workflow.
- Future reconsideration: fault trees only with a safely scoped graphical/import workflow; variable-amplitude fatigue only with an explicitly authorized time-history/rainflow product direction and material-data governance; heat-exchanger fouling only with a defensible normalized monitoring/network-optimization product distinct from the current free simulators.
- Implementation/final commit: this entry is committed by the release commit that contains it; the final local, fetched `origin/main`, and actual remote hash are verified after push and reported in the task result.

## 2026-08-14 — CMMS Data Readiness & Record Quality workflow cluster (GO)

### Repository start and synchronization

- Target repository: `https://github.com/canghun13/reliabilitybench`; working directory: `C:\Users\cangh\OneDrive\문서\reliabilitybench 2`; branch: `main`; remote: `origin` points to the target repository.
- Starting local HEAD: `2c6b0f8ed0de15560cf75f962518b5c386f2723a`; starting fetched `origin/main` and actual remote `refs/heads/main`: `7327c0dd1b5ff67fdb1293e404528ef0b7159e50`.
- The working tree was clean and local was three commits behind. Per the clean/behind rule, `git pull --ff-only origin main` completed before any task file changed. After synchronization, local HEAD, `origin/main`, and actual remote main were all `7327c0dd1b5ff67fdb1293e404528ef0b7159e50`; ahead/behind was `0/0`.
- No reset, stash, checkout overwrite, merge, rebase, force push, or destructive command was used.
- Starting verified inventory after synchronization: 74 public HTML pages excluding the two shared partials; 73 indexable canonical/sitemap URLs; 42 calculator configurations; 12 Guide HTML pages including the hub; 8 Reference HTML pages including the hub.
- The complete current `handover.md`, public-page inventory, 42 calculator configurations, category hubs, sitemap, and `llms.txt` were reviewed before research.

### Protected exclusion list

- Existing site boundaries remained protected: basic and system reliability; MTBF/MTTR/MTTF/failure rate; availability/OEE; series/parallel/k-out-of-n; Weibull/B10/hazard/expected failures; downtime/economics/repair-replace/ROI/lifecycle; MRO/ROP/safety stock/EOQ/inventory; Maintenance Planning & Scheduling; Reliability Growth / Duane; and Accelerated Life Testing / acceleration models.
- Prior or recently researched families were not renamed, subdivided, or reconsidered: Reliability Demonstration Testing; Asset Criticality / FMEA; Critical / Repairable Spares; Maintainability Prediction; Reliability Allocation; PM/CBM Age Replacement / Inspection / Failure Finding; Rotating Machinery Spectrum Marker Diagnostics; Condition Trending / RUL; Warranty / Field Return; Bearing Selection / Life; Bearing Lubrication; Repairable-System Degradation / Bad Actor; Fault Tree / Minimal Cut Sets; Variable-Amplitude Fatigue / Miner; Heat Exchanger Fouling / Cleaning; used-oil analytics; fleet renewal; acceptance sampling / commissioning plans; post-maintenance equipment-specific verification; compressed-air leaks; and corrosion / thickness / remaining life.

### New candidate families

1. **CMMS Data Readiness & Record Quality.** Primary users: reliability engineers, maintenance engineers, CMMS administrators, planners, and asset managers. Repeated job: audit and improve asset and work-order records before reporting, migration, or analysis. Problem: incomplete IDs, hierarchy, failure fields, timestamps, and closure notes undermine downstream decisions. Search intent: `CMMS data quality audit`, `asset register completeness checker`, `work order quality checker`, `failure code taxonomy`, `CMMS migration readiness`. Expected tools: checker, identifier generator, record evaluator, taxonomy builder, migration planner. Distinct because it screens the evidence beneath existing KPIs rather than recalculating them. Expected independent tools: 5. **GO candidate.**
2. **Calibration Interval Governance.** Primary users: metrologists, quality engineers, and maintenance engineers. Repeated job: review recalibration history and justify maintain/shorten/extend decisions. Problem: fixed intervals ignore instrument stability and use. Search intent: interval optimizer, ILAC G24 staircase calculator, out-of-tolerance trend, calibration interval review worksheet. Expected tools: history checker, staircase evaluator, drift reviewer, decision record generator. Distinct from asset reliability but exact free tools already exist. Expected tools: 4. **NO-GO.**
3. **FRACAS / Corrective Action Closure.** Primary users: reliability, quality, test, and field-service engineers. Repeated job: report a failure, classify it, route analysis/action, verify effectiveness, and close the record. Problem: recurrence continues when reporting and corrective action are disconnected. Search intent: FRACAS template, failure report, corrective-action effectiveness, CAPA closure. Expected tools: report generator, classification worksheet, action-plan builder, effectiveness checker, closure record. Distinct from FMEA and existing metrics. Expected tools: 5, but the actual repeated workflow depends on persistent records, ownership, approvals, escalation, attachments, and audit trail. **NO-GO.**
4. **Alarm Performance & Nuisance-Alarm Review.** Primary users: control, operations, and reliability engineers. Repeated job: baseline alarm rates, detect floods/bad actors, rationalize priority, and review standing/chattering alarms. Search intent: alarm KPI calculator, alarm flood tool, rationalization worksheet. Expected tools: KPI evaluator, flood checker, bad-actor ranker, priority worksheet. Distinct from maintenance KPIs, but exact free calculators/simulators and safety-standard context dominate. Expected tools: 4. **NO-GO.**
5. **Maintenance Repair Quality / First-Time Fix.** Primary users: maintenance supervisors and field-service managers. Repeated job: measure repeat work, screen closure quality, estimate callback burden, and plan corrective coaching. Search intent: first-time-fix calculator, maintenance rework rate, repeat-visit cost, closeout audit. Expected tools: rate calculator, cost estimator, record checker, action planner. Distinct from schedule compliance but exact integrated calculators and templates already cover the intent. Expected tools: 4. **NO-GO.**
6. **Equipment Preservation / Layup / Recommissioning.** Primary users: plant, commissioning, storage, and maintenance engineers. Repeated job: select preservation controls, schedule inspections, record deviations, and prepare return to service. Search intent: equipment preservation plan, layup checklist, recommissioning checklist. Expected tools: method selector, inspection-plan generator, deviation checker, recommissioning worksheet. Distinct from maintenance scheduling, but trustworthy rules are equipment-, OEM-, environment-, duration-, and project-specific. Expected tools: 4. **NO-GO.**
7. **Maintenance Shift-Handover Record Quality.** Primary users: operations and maintenance shift leads. Repeated job: transfer equipment status, defects, isolations, unfinished work, and priorities. Search intent: maintenance shift handover checklist, equipment status handover generator, log quality checker. Expected tools: handover generator, completeness checker, escalation selector, open-item worksheet. Distinct from schedule compliance, but generic form builders and local operating procedures determine most fields; reliability-specific search depth is weak. Expected tools: 4. **NO-GO.**
8. **Maintenance Competency Coverage & Authorization.** Primary users: maintenance managers and training coordinators. Repeated job: map role requirements, verify proficiency, expose shift coverage gaps, and assign development. Search intent: maintenance competency matrix, technician skills assessment, training matrix. Expected tools: matrix builder, coverage checker, gap evaluator, development-plan generator. Distinct from equipment calculations, but current free templates and CMMS/workforce modules already serve the workflow, while authorization criteria are organization- and jurisdiction-specific. Expected tools: 4. **NO-GO.**
9. **Maintenance Technical-Document Readiness.** Primary users: maintenance engineers, planners, and document-control teams. Repeated job: verify current manuals, drawings, procedures, revisions, approvals, and asset links before work. Search intent: maintenance document-control checklist, OEM manual register, job-instruction readiness. Expected tools: document-register checker, revision comparator, work-pack evidence checklist, gap-action generator. Distinct from planning metrics, but serious value requires document repositories, revision comparison, configuration control, and approval history rather than isolated static pages. Expected tools: 4. **NO-GO.**

### Deep validation candidate 1 — CMMS Data Readiness & Record Quality

- **Workflow:** declare the asset/work-order population and data dictionary; screen field coverage; create stable identifiers; improve closeout records; structure problem/cause/remedy lists; clean, map, test, reconcile, and approve migration data.
- **Demand:** **Strong qualitative evidence.** Exact audit, asset hierarchy, data cleanup, work-order closeout, failure-code, and migration queries recur. Practitioner discussions describe wrong asset data, generic closure comments, paper/digital divergence, and reports users no longer trust. No paid keyword-volume dataset was available, so no numeric search-volume claim is made.
- **Long-tail groups:** asset-register completeness, asset hierarchy and naming, work-order closure quality, maintenance data-quality audit, failure-code taxonomy, source-to-target mapping, CMMS migration checklist, reconciliation, and go-live readiness.
- **SERP:** broad vendor guides, checklists, consultations, and CMMS modules rank, but exact queries for a free `asset register completeness checker`, `work order quality checker`, and `failure code taxonomy generator` did not produce an integrated no-login maintenance workbench.
- **Free alternatives:** [Oxmaint's CMMS data-quality checklist](https://oxmaint.ai/industries/manufacturing-plant/cmms-data-quality-audit-checklist), [Maintoro's migration checklist and free templates](https://maintoro.com/et/templates/migration-checklist), [AssetStage](https://assetstage.io/), and [MangoApps work-order quality audit template](https://www.mangoapps.com/templates/inspections/field-work-order-quality-audit) are useful alternatives. They are primarily articles/templates, vendor onboarding surfaces, trials, or full data-staging applications rather than this exact five-tool, local-browser workflow.
- **Competition gap:** **Medium and actionable.** The gap is not another CMMS. It is transparent pre-CMMS and pre-analysis screening that requires no login, upload, database, or vendor selection and states that completeness does not prove accuracy.
- **Existing overlap:** low. Existing calculators assume the source counts and times are meaningful; this cluster evaluates record readiness beneath those calculations. Work-order closeout links naturally to schedule/backlog tools without duplicating their formulas.
- **Independent tools:** 5: asset-register completeness checker; asset-ID convention builder; work-order closeout quality checker; failure-code taxonomy builder; migration-readiness planner. Each has different inputs, processing, outputs, use moment, and next decision.
- **Tool types:** checker, generator, evaluator, taxonomy worksheet/builder, and planner.
- **Formula/data dependency:** no paid data, API, database, or proprietary formula. Counts, field rules, controlled lists, and declared gating logic run locally. Public sources include the [UK Government FM Asset Data Standard](https://www.gov.uk/government/publications/facilities-management-standards-for-govs-004-property/facilities-management-standard-002-asset-data), [IAEA TECDOC 1922](https://www-pub.iaea.org/MTCD/Publications/PDF/TE-1922web.pdf), and the [DLA MIL-HDBK-2155 record](https://quicksearch.dla.mil/qsDocDetails.aspx?ident_number=207200). ReliabilityBench thresholds are explicitly labeled as screening conventions, not compliance claims.
- **Paid/API/DB dependency:** none for the implemented tools. Real system remediation and migration still occur in the user's governed environment.
- **Repeat-use potential:** strong: monthly/quarterly audits, sampled closeout review, taxonomy governance, hierarchy onboarding, and every test migration/cutover.
- **ReliabilityBench fit:** strong. It connects maintenance records to reliability evidence, exposes assumptions, and supports decisions without pretending to validate physical condition or compliance.
- **Implementation feasibility:** strong with static HTML/CSS/Vanilla JS; all logic is deterministic and bounded.
- **Maintenance burden:** low to moderate. Public source links and declared local field conventions require occasional review; no live dataset must be refreshed.
- **Key risks:** field requirements vary by organization; English keyword screening cannot understand technical truth; populated values may still be inaccurate; migration gates do not cover every integration or regulatory constraint. All are shown prominently in-page.
- **Decision:** **GO.** All 14 required gates pass.

### Deep validation candidate 2 — Calibration Interval Governance

- **Workflow:** establish an initial interval, record calibration outcomes, review pass/fail or drift history, and document whether to maintain, shorten, or lengthen the interval.
- **Demand:** **Strong qualitative evidence.** Interval optimizer, ILAC G24, staircase, calibration history, and drift searches recur across metrology vendors and practitioners.
- **Long-tail groups:** calibration interval calculator, ILAC G24 staircase method, out-of-tolerance history, instrument drift, interval extension, calibration recall review.
- **SERP / free alternatives:** [CalibrationOS](https://calibrationos.com/tools) already provides a free no-signup ILAC G24 staircase interval optimizer alongside measurement-uncertainty and Gage R&R tools. [DeltaMu Optimu](https://www.deltamu.com/en/software-optimu/) includes multiple interval-optimization methods. [NIST](https://www.nist.gov/calibrations/recommended-calibration-interval) explains that one fixed interval is not generally recommended and depends on accuracy needs, stability, environment, and history.
- **Competition gap:** weak. A static four-page cluster would reorganize methods already available in an exact free tool or would need more sophisticated inventory history and control charts to differentiate.
- **Existing overlap:** low, but audience fit is narrower than the selected maintenance-data workflow.
- **Independent Tools:** four can be named—initial risk worksheet, staircase evaluator, drift reviewer, and interval decision record—but they share the same instrument history and decision.
- **Tool types:** selector, evaluator, trend checker, record generator.
- **Formula/data dependency:** public guidance is strong in [OIML D 10 / ILAC G24 2022](https://www.oiml.org/en/files/pdf_d/d010-e22.pdf) and NIST publications, but no single method is universally ideal. Proper results need validated history and local accuracy/risk requirements.
- **ReliabilityBench fit:** moderate; relevant to maintenance assurance but exact competition is stronger.
- **Decision:** **NO-GO.** The current SERP gap and free/no-login differentiation gates fail.

### Deep validation candidate 3 — FRACAS / Corrective Action Closure

- **Workflow:** report and identify a failure, analyze and verify it, assign corrective action, monitor effectiveness, close the record, and share lessons.
- **Demand:** **Strong qualitative evidence.** FRACAS software, templates, failure reports, corrective-action plans, CAPA effectiveness, and closure-checklist searches recur.
- **Long-tail groups:** FRACAS template, failure report generator, failure classification, corrective-action effectiveness, recurrence check, closure checklist, audit trail.
- **SERP / free alternatives:** the [DLA MIL-HDBK-2155 record](https://quicksearch.dla.mil/qsDocDetails.aspx?ident_number=207200) defines the disciplined closed-loop purpose; [Relyence FRACAS](https://relyence.com/products/fracas/process-control/) and [PTC Windchill FRACAS](https://support.ptc.com/help/wrr/r12.0.1.0/en/wrr/ReferenceGuide/fracas/windchill_fracas.html) cover customizable workflows, records, reports, graphs, and audit trails; [pHKapa](https://phkapa.net/) offers an open-source CAPA option; free corrective-action templates are also abundant.
- **Competition gap:** there is room for education and isolated worksheets, but the true repeated workflow is a shared system of record, not five disconnected static generators.
- **Existing overlap:** low with existing calculators and protected FMEA; it is process-adjacent to failure analysis but not a formula duplicate.
- **Independent Tools:** five pages are superficially possible, yet reporting, classification, action ownership, effectiveness monitoring, and closure all require the same persistent case record. Counting them as independent tools would split one database workflow artificially.
- **Tool types:** report generator, worksheet, planner, effectiveness checker, closure evaluator.
- **Formula/data dependency:** public procedural sources are available, but useful operation needs user accounts, attachments, history, ownership, approvals, notifications, and immutable audit evidence.
- **ReliabilityBench fit:** conceptually strong, implementation fit weak for the current static architecture.
- **Decision:** **NO-GO.** Independent-tool honesty, static feasibility, and no-DB gates fail.

### Additional SERP evidence

- Alarm management exact competition includes the [ISA alarm-performance metrics](https://www.isa.org/intech-home/2020/march-april/features/alarm-management-questions-that-everyone-asks), [Simulations4All alarm-flood estimator](https://simulations4all.com/simulations/alarm-flood-impact-estimator), [ResistanceZero alarm rationalization calculator](https://resistancezero.com/article-2.html), and [InstruNexus simulation](https://instrunexus.com/alarm-management-simulation/).
- Repair-quality exact competition includes the [ServiceWorks first-time-fix and repeat-visit cost calculator](https://blog.service.works/business-topics/first-time-fix-rate-calculator/) and current closeout-quality templates/checklists.
- Competency coverage is served by current maintenance-specific matrices and workforce modules such as [Oxmaint's HVAC competency matrix](https://oxmaint.com/industries/hvac/hvac-maintenance-competency-matrix-assessment) and [Dozuki maintenance training](https://www.dozuki.com/maintenance-management-connected-worker-use-cases).
- Equipment preservation searches produced equipment/OEM-specific procedures and services rather than a trustworthy universal selection logic; shift handover searches were dominated by generic form generators; technical-document readiness differentiated only when connected to repository, revision, configuration, and approval workflows.

### Final GO decision and implemented architecture

- Final decision: **GO**.
- Selected cluster: **CMMS Data Readiness & Record Quality**.
- Hub: `/tools/cmms-data-readiness/`.
- Tools: `/tools/asset-register-completeness-checker.html`; `/tools/asset-id-convention-builder.html`; `/tools/work-order-closeout-quality-checker.html`; `/tools/failure-code-taxonomy-builder.html`; `/tools/cmms-migration-readiness-planner.html`.
- Guide: `/guides/cmms-data-readiness.html`.
- Reference: `/reference/cmms-data-quality-fields.html`.
- Shared implementation: `/assets/js/cmms-data-tools.js` provides bounded deterministic logic, validation, results, reset, and copy behavior; scoped additions in `/assets/css/site.css` preserve the existing operations-console design and calculator layout.
- Integration: Tools hub category 05, Guide hub, Reference hub, breadcrumbs, related-page links, `sitemap.xml`, and `llms.txt` were updated. No URL, logo, favicon, palette, CNAME, GA4 ID, directory badge, or unrelated production content was changed.

### Tool decision contracts

1. **Asset Register Completeness Checker:** user asks which declared asset fields have the largest gaps; inputs are total assets and six completed-field counts; processing validates integer/population bounds and averages six completion percentages; output is a transparent score, field table, and ranked cleanup queue; use before reporting/migration and then verify against independent sources.
2. **Asset ID Convention Builder:** user asks how a stable ID convention will render; inputs are site/area/system/type codes, delimiter, sequence width/start/count; processing normalizes and bounds syntax/length/count; output is 1–100 generated IDs plus release checks; use during register design or onboarding and then compare against the live uniqueness constraint.
3. **Work Order Closeout Quality Checker:** user asks whether one record is useful for later analysis; inputs are eight structured-field flags and one note; processing assigns 80 declared field points and up to 20 deterministic specificity points; output identifies missing elements and note gaps; use for coaching or spot checks, never repair validation or personnel surveillance.
4. **Failure Code Taxonomy Builder:** user asks how to separate observation, cause, and action values; inputs are three controlled lists; processing trims, deduplicates, bounds each list, and assigns draft codes; output is three pick-list tables and governance checks; use before CMMS configuration and pilot on historical records.
5. **CMMS Migration Readiness Planner:** user asks which cutover gates are open; inputs are scope, target date, and 12 evidence gates; processing calculates completion and applies blocking overrides; output is blocker list and phased remediation plan; use before test/cutover reviews and assign effort/owners locally.

### QA and final inventory

- Functional boundary QA covered all five new workflow tools: normal sample, invalid range or syntax, minimum/blank state, maximum 100-ID generation, all-gates-ready, blocking gates, repeated submission, and Reset. All tests passed after setting the shared forms to use the tool's explicit validation path instead of leaving an invalid native form with a stale prior result.
- Browser QA used the local site through the in-app browser at 1440, 1280, 1024, 768, and 390px. Twelve pages were tested at every width: the new hub, all five tools, new Guide, new Reference, Tools hub, Maintenance hub, Schedule Compliance, and Maintenance Backlog. All 60 page/viewport combinations loaded header/main/footer in order, kept forms within the viewport, and had zero page-level horizontal overflow and zero console errors.
- Visual samples at 1440px (new hub), 768px (register checker), and 390px (closeout checker) confirmed typography, breadcrumbs, cards/rows, form controls, responsive stacking, and output layout. The 390px header retains its intentional internally scrollable navigation track without page-level overflow.
- Automated QA: `tools/final-site-qa.mjs` scanned 82 public / 81 indexable / 81 sitemap URLs and passed structure, HTML nesting, SEO, title/meta/canonical/robots/OG/JSON-LD, links, orphan checks, partials, sitemap, `llms.txt`, CNAME, GA4, and favicon paths. `tools/calculator-qa.mjs` passed all 42 calculators and existing calculator regression cases. `tools/qa-check.mjs` passed all 81 indexable pages. Shared JavaScript syntax and `git diff --check` passed.
- Final inventory: 82 public HTML pages; 81 indexable canonical URLs; 81 sitemap URLs; 42 calculators plus 5 non-calculator interactive workflow tools; 13 Guide HTML pages including the hub; 9 Reference HTML pages including the hub.
- Remaining HIGH risk: 0.
- Remaining MEDIUM risk: 0 introduced. The tools do not auto-approve safety, compliance, physical condition, root cause, or migration acceptance.
- Remaining LOW risk: English keyword screening in the closeout checker is intentionally narrow; the 90/70 bands and field set are declared local conventions that organizations must tailor; external source/vendor URLs and fast-moving SERPs should be rechecked during future maintenance; pre-existing immediate GA4 loading may require consent management in opt-in jurisdictions.
- Immediate additional work required: no after successful release verification. Organizations using the tools must supply their own data dictionary, acceptance rules, accountable reviewers, and source-system controls.
- Implementation/final commit: this entry is committed by the release commit that contains it; final local, fetched `origin/main`, and actual remote hashes are verified after push and reported in the task result.
