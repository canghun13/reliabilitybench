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
