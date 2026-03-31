# Landing Page Repo Execution Spec

## 1. Purpose
이 문서는 현재 랜딩페이지 업그레이드 작업을 위해 **개인적으로 보관하고 운영 판단 기준으로 사용할 문서**다.

목적은 다음과 같다.
- 이미 합의된 Phase 1 방향을 흔들리지 않게 유지한다.
- 전략 문서와 실제 구현 사이의 애매함을 줄인다.
- 개발 Agent 투입 전, 무엇을 바꾸고 무엇을 건드리지 않을지 명확히 고정한다.
- 추후 회고 시, 왜 이런 구조와 카피를 선택했는지 다시 추적할 수 있게 한다.

이 문서는 **repo에 바로 넣는 공식 스펙 문서**라기보다, 대형님이 개인적으로 들고 가는 **운영 기준 문서**다.

---

## 2. Current Situation
현재 랜딩페이지는 이미 완전히 빈 상태가 아니다.

이미 갖고 있는 것:
- one-page landing 구조
- hero / trust / services / proof / contact 기본 뼈대
- `#contact` anchor 기반 CTA 흐름
- featured proof와 supporting proof 자산
- 이메일 문의 fallback

즉, 지금 해야 할 일은 **새로 만드는 것**보다 **기존 페이지를 conversion 방향으로 sharper하게 정리하는 것**이다.

핵심 진단:
- 현재 페이지는 포트폴리오형 소개 페이지로는 꽤 괜찮다.
- 하지만 sales asset 관점에서는 몇 가지 마찰이 남아 있다.
- 이번 작업의 목표는 디자인을 갈아엎는 것이 아니라, **문의 전환 구조와 구매자 이해도를 높이는 것**이다.

---

## 3. Phase 1 Goal
이번 라운드의 목표는 아래 4가지다.

1. **포지셔닝 선명화**
   - 누구를 위한 서비스인지 더 빨리 이해되게 만든다.
   - “무엇이든 만드는 개발자”가 아니라, manual ops → usable system에 강한 사람으로 보이게 한다.

2. **문의 마찰 감소**
   - email-only 구조를 줄이고, form-first로 전환한다.
   - scope가 덜 정리된 사람도 문의할 수 있게 만든다.

3. **신뢰 강화**
   - proof를 단순 스크린샷이 아니라 case narrative로 보이게 한다.
   - 작업 방식과 scope handling을 명확히 보여준다.

4. **qualification 개선**
   - 나와 잘 맞는 팀 / 맞지 않는 팀을 더 빨리 구분한다.
   - broad inquiry보다 fit이 맞는 inbound를 늘리는 방향으로 간다.

---

## 4. Non-Goal
이번 Phase 1에서 하지 않는 것:
- full redesign
- public pricing 공개
- SEO/schema 작업
- analytics 삽입
- A/B testing
- heavy animation
- 새 testimonial 추가
- 새로운 서비스 라인 확장
- 전체 사이트 구조 리빌드

원칙:
> 이번 라운드는 “더 멋있게”가 아니라 “더 잘 팔리게”를 목표로 한다.

---

## 5. Core Positioning
이 랜딩페이지의 핵심 포지셔닝은 아래 한 줄로 정리된다.

> **스프레드시트, Slack, 이메일로 굴러가던 수작업 운영을 작게라도 실제로 쓰이는 시스템으로 바꾼다.**

강조할 것:
- spreadsheet / Slack / email-driven workflows
- admin tools
- internal workflow structure
- backend logic with operational stability
- small scoped MVPs that can actually be used

약화시킬 것:
- I build anything 식의 broad claim
- generic freelancer framing
- portfolio-first framing
- 디자인/브랜딩 중심 작업자 인상

---

## 6. Current Section Map
현재 index.html 기준 구조는 아래와 같다.

- Header / Nav
- Hero `#hero`
- Trust strip `#trust-strip`
- Services `#services`
- Who this is for `#who`
- Featured proof `#proof`
- Why work with me `#why`
- Process `#approach`
- Contact `#contact`
- Sticky mobile CTA → `#contact`

운영 판단:
- Hero, Proof, Contact는 뼈대를 유지한다.
- `#who`는 sharper ICP 구조로 바꾼다.
- `#approach`는 engagement model로 재구성한다.
- FAQ는 새로 추가한다.
- Contact는 form-first + email fallback 구조로 바꾼다.

---

## 7. Approved Section Flow
이번 라운드에서 의도하는 이상적인 scan flow:

1. Hero
2. Trust strip
3. Target clients
4. Service packages
5. Featured case
6. Supporting proof cards
7. Engagement model
8. FAQ
9. Contact form + email fallback

단, 현재 DOM 구조를 억지로 뒤흔들지는 않는다.
원칙은 **layout churn 최소화 + conversion clarity 최대화**다.

---

## 8. Hero Decision
### Final Direction
Hero는 완전 교체가 아니라, **더 sharp한 문제/대상/긴급성**을 주는 방향으로 수정한다.

### Locked Korean Copy
- Label: `Backend · 운영 시스템 · 내부 도구`
- H1: `스프레드시트와 수작업으로 굴러가던 운영을\n작게라도 실제로 쓰이는 시스템으로 바꿉니다`
- Subheadline: `Slack, 이메일, 스프레드시트에 흩어진 반복 업무를 내부 도구, 운영 워크플로우, 백엔드 MVP로 구조화합니다. 빠르게 보기 좋은 데모보다, 실제로 운영 가능한 첫 구조를 만드는 데 집중합니다.`
- Why-now: `지금도 복붙, 수동 확인, 재정리에 시간을 쓰고 있다면 이미 속도와 오류율에서 비용을 내고 있을 가능성이 큽니다.`
- Trust microcopy: `보통 24–48시간 내 답변합니다 · 범위가 완전히 정리되지 않아도 문의 가능합니다`

### Intent
Hero는 아래를 한 번에 전달해야 한다.
- 누구를 위한지
- 어떤 문제를 해결하는지
- 왜 지금 의미가 있는지
- 문의해도 되는지

---

## 9. Service Package Decision
현재 첫 카드 `Validation Landing`은 현재 핵심 포지셔닝과 약간 어긋난다.
따라서 서비스 카드는 아래 3개로 고정한다.

### Final Package Labels
1. `Workflow Automation Sprint`
2. `Internal Tool Starter`
3. `Backend MVP Sprint`

### Card 1 — Workflow Automation Sprint
- Audience: 파운더 · 오퍼레이터
- Problem: 스프레드시트, Slack, 이메일로 이어 붙인 반복 업무를 더 이상 수작업으로 돌리기 어렵다.
- Includes:
  - 현재 업무 흐름 정리
  - 승인/추적/알림 중심 워크플로우 구조화
  - 재실행 가능한 MVP + 코드 인계
- Excludes:
  - 전사 시스템 전면 교체
  - 범위 없는 대형 제품 기획
  - 장기 무기한 운영 대행

### Card 2 — Internal Tool Starter
- Audience: 소규모 팀 · 스타트업
- Problem: 핵심 운영 업무를 제대로 된 내부 도구나 어드민 화면으로 바꾸고 싶다.
- Includes:
  - 범위 정의 · 워크플로우 설계
  - 어드민 로직 · 데이터 처리
  - 검토 가능한 내부 도구 MVP + 코드 인계
- Excludes:
  - 조직 전체 시스템 교체
  - 범위 미정 멀티팀 제품
  - 오픈엔드 무기한 지원

### Card 3 — Backend MVP Sprint
- Audience: 제품팀 · 창업자
- Problem: API, 백엔드 로직, 외부 연동, 운영 파이프라인을 빠르게 만들어야 한다.
- Includes:
  - MVP 범위 백엔드 아키텍처
  - API · 데이터 흐름 · 통합 구현
  - 인수인계 지향 납품 + 코드 인계
- Excludes:
  - 전사 엔터프라이즈 전환
  - 프론트엔드 중심 UI 디자인
  - 범위 없는 장기 유지보수

### Section Title
- H2: `어떤 문제를 이런 형태로 해결합니다`
- Lead: `작게 시작해 실제로 쓰일 수 있는 내부 시스템, 운영 워크플로우, 백엔드 MVP를 만듭니다. 범위를 먼저 확인한 뒤 가장 현실적인 첫 단계를 제안합니다.`

---

## 10. ICP Decision
현재 broad한 fit/not-fit 표현을 sharper profile 구조로 정리한다.

### Final ICP Structure
- Eyebrow: `Who this is for`
- H2: `이런 팀과 가장 잘 맞습니다`
- Lead: `작고 명확한 범위에서, 수작업을 실제 운영 가능한 시스템으로 바꾸려는 팀과 잘 맞습니다.`

### 3 Sharper Profiles
1. **0–10인 SaaS 팀**  
   운영 병목이 이미 보이는데, 전담 플랫폼 팀을 두기엔 아직 이른 팀

2. **2–4주 안에 내부 워크플로우 MVP를 검증해야 하는 파운더**  
   스프레드시트나 메시지 기반 운영을 빠르게 시스템화해 보고 싶은 경우

3. **승인·추적·정리 업무를 스프레드시트에서 벗기려는 팀**  
   반복 업무를 재실행 가능한 내부 도구나 백엔드 흐름으로 바꾸고 싶은 경우

### Not-fit Line
`브랜딩 중심 마케팅 사이트, 범위가 아직 열려 있는 대형 플랫폼, 장기 상주형 포지션은 현재 범위와 맞지 않습니다.`

---

## 11. Featured Case Decision
대표 사례는 **E-Commerce Scanner**로 고정한다.

이유:
- 이미 현재 페이지에서 대표 proof로 배치돼 있다.
- manual research → repeatable pipeline narrative가 가장 선명하다.
- supporting image asset이 이미 있다.
- 현재 포지셔닝과 가장 자연스럽게 연결된다.

### Final Narrative Structure
#### H2
`수작업 상품 조사를 반복 실행 가능한 운영 파이프라인으로`

#### Baseline
`국가 간 상품 기회 조사는 보통 스프레드시트, 수동 검색, 기준 재정리로 흩어져 있습니다. 기준이 조금만 바뀌어도 처음부터 다시 조사해야 하고, 결과도 사람마다 달라지기 쉽습니다.`

#### What changed
`가격 수집, 상품 매칭, 마진 계산, 리포트 출력을 하나의 반복 가능한 파이프라인으로 구조화했습니다. 입력 조건을 바꾸면 같은 흐름으로 다시 실행할 수 있고, 검토를 위한 대시보드와 결과 출력도 함께 정리했습니다.`

#### Result
`조사 과정을 “한 번 하고 끝나는 작업”이 아니라, 다시 돌릴 수 있는 운영 흐름으로 바꿨습니다. 수집 → 처리 → 검토 → 리포트까지의 단계가 분리되면서 기준 변경에도 다시 실행 가능한 구조를 확보했습니다.`

#### Good fit
`시장 조사, 승인 흐름, 정리 업무처럼 사람이 반복해서 처리하던 운영 과정을 작은 시스템으로 바꾸고 싶은 팀에 잘 맞는 패턴입니다.`

원칙:
- metrics를 날조하지 않는다.
- qualitative result를 우선 사용한다.
- 기존 proof carousel은 유지 가능하면 유지한다.

---

## 12. Supporting Proof Decision
추가 사례는 유지한다.

현재 supporting proof:
- SeoulGyeol Skin Lab
- Restricted Ops Intake MVP
- Papyr.us

운영 원칙:
- proof volume을 줄이지 않는다.
- 다만 featured case만 더 강하게 narrative화한다.
- supporting cards는 가능하면 challenge → built → impact 톤으로 약하게만 보정한다.

---

## 13. Engagement Model Decision
현재 `#approach`는 process 설명에 가깝다.
이를 **buyer uncertainty를 줄이는 engagement model**로 재구성한다.

### Final Structure
- Eyebrow: `Engagement model`
- H2: `이런 방식으로 진행합니다`

#### 1. Typical timeline
`보통 2–6주 내의 작고 명확한 범위에서 가장 잘 맞습니다. 첫 단계는 전체를 크게 만들기보다, 실제 운영에 바로 도움이 되는 핵심 흐름 1개를 먼저 닫는 방식으로 진행합니다.`

#### 2. Deliverables
`작동하는 MVP 또는 범위가 명확한 구현물을 제공합니다. 보통 핵심 백엔드 로직, 워크플로우 구조, 필요한 경우 내부 UI/어드민 화면, 그리고 인계용 설명을 함께 포함합니다.`

#### 3. Communication
`이메일과 문서 중심으로 진행합니다. 중간 공유는 텍스트, 스크린샷, 짧은 데모 영상 위주로 드리고, 꼭 필요할 때만 짧은 미팅을 잡습니다.`

#### 4. Scope handling
`처음부터 범위를 작게 잠그는 것을 우선합니다. 중간에 새 요청이 생기면 무한 확장하지 않고, 현재 단계와 다음 단계를 분리해 안정적으로 진행합니다.`

핵심 의도:
- 고객이 “어떻게 같이 일하지?”라는 불안을 빨리 해소하게 만든다.
- 시간, 납품, 소통, 범위 handling을 명확히 보여준다.

---

## 14. FAQ Decision
FAQ는 새로 추가한다.

### Final FAQ
#### Q1. 범위가 아직 완전히 정리되지 않았는데 문의해도 되나요?
네. 오히려 초기에 가장 필요한 건 모든 기능 목록보다도, 지금 어떤 업무가 수작업이고 어디가 가장 막히는지 정리하는 것입니다. 현재 상태와 원하는 결과만 있어도 첫 범위를 함께 잡을 수 있습니다.

#### Q2. 작은 프로젝트도 맡나요?
네. 오히려 2–6주 안에 닫을 수 있는 작고 명확한 범위의 프로젝트와 가장 잘 맞습니다. 처음부터 큰 시스템 전체를 한 번에 만들기보다, 실제로 바로 쓰일 핵심 흐름 1개를 먼저 구현하는 쪽을 선호합니다.

#### Q3. 미팅은 얼마나 필요한가요?
기본은 이메일/문서 중심입니다. 진행 중 공유도 텍스트, 스크린샷, 짧은 데모 중심으로 드립니다. 짧은 미팅이 필요할 수는 있지만, 회의가 많은 방식은 지향하지 않습니다.

#### Q4. 어떤 기술 스택으로 작업하나요?
기본 강점은 백엔드, 운영 시스템, 내부 도구, 워크플로우 구조화에 있습니다. 프로젝트 목적에 맞는 스택을 우선하며, 특정 기술을 과하게 밀기보다 유지 가능한 구조를 만드는 데 집중합니다.

#### Q5. 납품 후 지원도 가능한가요?
가능합니다. 다만 처음부터 무기한 운영 계약을 전제로 하기보다, 현재 단계 납품 범위와 이후 고도화 단계를 분리해서 보는 편이 더 명확합니다.

#### Q6. 코드와 산출물의 소유권은 어떻게 되나요?
별도 합의가 없다면, 납품 범위에 포함된 코드와 산출물은 클라이언트가 인계받아 운영 가능한 형태로 전달하는 것을 기본으로 합니다. 세부 조건은 프로젝트 시작 전에 명확히 정리하는 것이 좋습니다.

#### Q7. 민감한 운영 데이터도 다룰 수 있나요?
가능합니다. 다만 실제 운영 데이터, 권한, 접근 범위는 프로젝트 초기에 명확히 정리되어야 합니다. 필요 시 더미 데이터 기반 검증이나 최소 권한 접근 원칙으로 진행하는 방식을 우선합니다.

---

## 15. Contact Decision
현재 email-only contact를 form-first 구조로 바꾼다.

### Final Korean Copy
- H2: `간단한 문의로 시작해보세요`
- Intro: `아래 폼에 현재 운영 방식과 가장 큰 병목을 적어주시면, 범위를 검토한 뒤 적합한 첫 단계를 제안드립니다.`
- Helper line: `아래 내용을 간단히 적어주시면 충분합니다.`

### Helper Prompts
- 지금 어떤 업무가 아직 수작업인지
- 누가 그 업무를 하고 있는지
- 가장 큰 병목 1개
- 원하는 결과 1개
- 대략적인 일정

### Email fallback
`이메일로 바로 보내고 싶다면 joeylife94@gmail.com 으로도 가능합니다.`

### Success / Failure Copy
- Success: `문의가 정상적으로 접수되었습니다. 보통 24–48시간 내 답변드립니다.`
- Failure: `문의 전송에 실패했습니다. 잠시 후 다시 시도하시거나, 아래 이메일로 바로 보내주세요.`

### Required Fields
1. Name
2. Email
3. What are you trying to improve?
4. Project type
5. Target timeline
6. Budget range (optional)

---

## 16. Form Backend Decision
현재 폼 백엔드는 **확정하지 않고 placeholder 상태로 둔다.**

이유:
- 이번 단계의 핵심은 contact path를 form-first 구조로 바꾸는 것이다.
- 실제 provider는 Formspree 또는 Google Form 계열 등으로 나중에 바꿔도 된다.
- 지금은 구현 구조와 UI/validation/state 설계를 먼저 닫는 것이 우선이다.

### Current Policy
- form backend path: `MOCK / PENDING`
- action URL: placeholder 허용
- email fallback: 반드시 유지
- success/failure state: mock 기준으로도 UI 구현 가능

### Future Options
- Formspree
- Google Form
- 기타 가벼운 외부 form backend
- 나중의 custom endpoint

운영 원칙:
> 지금은 provider를 확정하는 것보다, “form-first UX”를 먼저 완성하는 것이 더 중요하다.

---

## 17. CTA Flow Decision
현재 CTA 흐름은 유지한다.

### Required Flow
- Hero CTA → `#contact`
- Nav CTA → `#contact`
- Sticky mobile CTA → `#contact`

원칙:
- CTA 위치는 유지
- destination clarity만 강화
- contact section에서 form-first 구조를 보이게 변경

---

## 18. Copy Lock Status
### Final로 잠근 것
- Service package labels
- ICP 3 profiles
- Engagement model
- FAQ
- Contact helper copy
- Featured case structure and selected project

### Directional로 둔 것
- Hero exact nuance는 소폭 polish 가능
- success/failure wording은 소폭 polish 가능

### TODO(copy)
- EN 최종 문구
- JA 최종 문구
- backend provider 확정 후 provider-specific 문구

---

## 19. Dev Implementation Priority
개발 Agent에게 넘길 때 우선순위는 아래 순서다.

1. Hero / Services / ICP 카피 업데이트
2. Featured case narrative rewrite
3. `#approach` → Engagement model 재구성
4. FAQ section 추가
5. Contact section을 form-first 구조로 변경
6. CTA anchor consistency / QA

---

## 20. Success Criteria
이번 작업이 성공했다고 볼 기준:
- 첫 화면에서 대상/문제/가치가 더 빨리 이해된다.
- email-only 구조보다 문의 진입 마찰이 줄어든다.
- 대표 사례가 단순 스크린샷보다 trust narrative로 보인다.
- 작업 방식이 clearer하게 보인다.
- 나와 맞는 고객 / 맞지 않는 고객의 구분이 더 빨라진다.
- 디자인 리빌드 없이 sales clarity가 올라간다.

---

## 21. Final Principle
이 페이지는 단순 포트폴리오가 아니라 **sales asset**이어야 한다.

이번 라운드의 핵심은:
- more design
- more screenshots
- more services
- more detail

이 아니라,
- clearer positioning
- lower inquiry friction
- stronger trust
- better qualification
- easier next step

이다.

즉,
> **이번 Landing Page 업그레이드의 본질은 “더 예쁘게”가 아니라 “더 잘 이해되고, 더 쉽게 문의되게” 만드는 것이다.**

