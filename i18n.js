/**
 * ProblemSolverArc — Lightweight i18n (KO / EN / JA)
 * No dependencies. Stores preference in localStorage.
 */
(function () {
  'use strict';

  var translations = {
    ko: {
      'page-title': 'ProblemSolverArc — 백엔드 · 운영 시스템 · 내부 도구 프리랜서',
      'meta-desc': '수동 워크플로우를 구조화된 시스템으로 전환합니다. 백엔드 MVP, 내부 도구, 운영 파이프라인 프리랜서 서비스.',

      'nav-services': '서비스',
      'nav-projects': '사례',
      'nav-why': '소개',
      'nav-contact': '문의하기',

      'hero-label': 'Backend · 운영 시스템 · 내부 도구',
      'hero-h1': '스프레드시트와 수작업으로 굴러가던 운영을<br />작게라도 실제로 쓰이는 시스템으로 바꿉니다',
      'hero-sub': 'Slack, 이메일, 스프레드시트에 흩어진 반복 업무를 내부 도구, 운영 워크플로우, 백엔드 MVP로 구조화합니다.<br />빠르게 보기 좋은 데모보다, 실제로 운영 가능한 첫 구조를 만드는 데 집중합니다.',
      'hero-why-now': '지금도 복붙, 수동 확인, 재정리에 시간을 쓰고 있다면 이미 속도와 오류율에서 비용을 내고 있을 가능성이 큽니다.',
      'hero-btn-contact': '프로젝트 문의하기',
      'hero-btn-services': '서비스 보기',
      'hero-trust-micro': '보통 24–48시간 내 답변합니다 · 범위가 완전히 정리되지 않아도 문의 가능합니다',

      'ts-label1': '엔터프라이즈 백엔드 경력',
      'ts-label2': 'API 응답속도 개선',
      'ts-label3': '동시 처리량 개선',
      'ts-label4': '실제 운영 환경 경험',
      'ts-val4': '엔터프라이즈 · 공공',

      'services-eyebrow': '서비스',
      'services-h2': '어떤 문제를 이런 형태로 해결합니다',
      'services-lead': '작게 시작해 실제로 쓰일 수 있는 내부 시스템, 운영 워크플로우, 백엔드 MVP를 만듭니다. 범위를 먼저 확인한 뒤 가장 현실적인 첫 단계를 제안합니다.',
      'service1-audience': '파운더 · 오퍼레이터',
      'service1-problem': '스프레드시트, Slack, 이메일로 이어 붙인 반복 업무를 더 이상 수작업으로 돌리기 어렵다.',
      'service1-inc1': '현재 업무 흐름 정리',
      'service1-inc2': '승인/추적/알림 중심 워크플로우 구조화',
      'service1-inc3': '재실행 가능한 MVP + 코드 인계',
      'service1-exc1': '전사 시스템 전면 교체',
      'service1-exc2': '범위 없는 대형 제품 기획',
      'service1-exc3': '장기 무기한 운영 대행',
      'service2-audience': '소규모 팀 · 스타트업',
      'service2-problem': '핵심 운영 업무를 제대로 된 내부 도구나 어드민 화면으로 바꾸고 싶다.',
      'service2-inc1': '범위 정의 · 워크플로우 설계',
      'service2-inc2': '어드민 로직 · 데이터 처리',
      'service2-inc3': '검토 가능한 MVP + 코드 인계',
      'service2-exc1': '조직 전체 시스템 교체',
      'service2-exc2': '범위 미정 멀티팀 제품',
      'service2-exc3': '오픈엔드 무기한 지원',
      'service3-audience': '제품팀 · 창업자',
      'service3-problem': 'API, 백엔드 로직, 외부 연동, 운영 파이프라인을 빠르게 만들어야 한다.',
      'service3-inc1': 'MVP 범위 백엔드 아키텍처',
      'service3-inc2': 'API · 데이터 흐름 · 통합 구현',
      'service3-inc3': '인수인계 지향 납품 + 코드 인계',
      'service3-exc1': '전사 엔터프라이즈 전환',
      'service3-exc2': '프론트엔드 중심 UI 디자인',
      'service3-exc3': '범위 없는 장기 유지보수',
      'includes-label': '제공 내용',
      'excludes-label': '포함 안 됨',
      'service-cta-contact': '범위 확인 후 견적 →',

      'who-eyebrow': 'Who this is for',
      'who-h2': '이런 팀과 가장 잘 맞습니다',
      'who-lead': '작고 명확한 범위에서, 수작업을 실제 운영 가능한 시스템으로 바꾸려는 팀과 잘 맞습니다.',
      'icp-profile1-title': '0–10인 SaaS 팀',
      'icp-profile1-desc': '운영 병목이 이미 보이는데, 전담 플랫폼 팀을 두기엔 아직 이른 팀',
      'icp-profile2-title': '워크플로우 MVP를 검증해야 하는 파운더',
      'icp-profile2-desc': '스프레드시트나 메시지 기반 운영을 2–4주 안에 빠르게 시스템화해 보고 싶은 경우',
      'icp-profile3-title': '승인·추적·정리 업무를 벗기려는 팀',
      'icp-profile3-desc': '반복 업무를 재실행 가능한 내부 도구나 백엔드 흐름으로 바꾸고 싶은 경우',
      'icp-notfit': '브랜딩 중심 마케팅 사이트, 범위가 아직 열려 있는 대형 플랫폼, 장기 상주형 포지션은 현재 범위와 맞지 않습니다.',

      'featured-eyebrow': '대표 사례',
      'featured-h2': '수작업 상품 조사를 반복 실행 가능한 운영 파이프라인으로',
      'case-baseline-label': 'Baseline',
      'case-baseline': '국가 간 상품 기회 조사는 보통 스프레드시트, 수동 검색, 기준 재정리로 흩어져 있습니다. 기준이 조금만 바뀌어도 처음부터 다시 조사해야 하고, 결과도 사람마다 달라지기 쉽습니다.',
      'case-change-label': 'What changed',
      'case-change': '가격 수집, 상품 매칭, 마진 계산, 리포트 출력을 하나의 반복 가능한 파이프라인으로 구조화했습니다. 입력 조건을 바꾸면 같은 흐름으로 다시 실행할 수 있고, 검토를 위한 대시보드와 결과 출력도 함께 정리했습니다.',
      'case-result-label': 'Result',
      'case-result': '조사 과정을 "한 번 하고 끝나는 작업"이 아니라, 다시 돌릴 수 있는 운영 흐름으로 바꿨습니다. 수집 → 처리 → 검토 → 리포트까지의 단계가 분리되면서 기준 변경에도 다시 실행 가능한 구조를 확보했습니다.',
      'case-fit-label': 'Good fit',
      'case-fit': '시장 조사, 승인 흐름, 정리 업무처럼 사람이 반복해서 처리하던 운영 과정을 작은 시스템으로 바꾸고 싶은 팀에 잘 맞는 패턴입니다.',

      'proof-caption-1': 'Market Overview — 스캔 결과와 시장 비교 데이터',
      'proof-caption-2': 'Product Opportunities — 마진 기준 상품 기회 리스트',
      'proof-caption-3': 'Market Intelligence — 시장 분석 인사이트',

      'proof-points-label': '이 사례가 증명하는 역량',
      'proof-point-1': '수작업 프로세스 → 반복 실행 가능한 구조화된 워크플로우',
      'proof-point-2': '데이터 수집 · 처리 · 검토 · 리포트 파이프라인 설계',
      'proof-point-3': '어드민 대시보드 · 백오피스 인터페이스 구현',
      'proof-point-4': '명확한 범위와 운영 로직을 갖춘 백엔드 MVP',

      'portfolio-eyebrow': '추가 사례',

      'card-seoulgyeol-desc': '동의 기반 설문 → 점수 산출 → 리포트 생성 → 이메일 전달 파이프라인. 다국어 피부 분석 MVP.',
      'card-seoulgyeol-proof': '전체 흐름 구현 · 동의 기반 데이터 처리 · 다국어 이메일 전송 확인',
      'card-restricted-desc': '승인된 Slack 요청 → 구조화된 운영 객체. 서명 검증 · 중복 방지 · 감사 로그 포함.',
      'card-restricted-proof': '웹훅 서명 검증 · 채널 허용목록 · 감사 로그 · 통합 테스트 확인',
      'card-papyrus-desc': '실시간 공동 편집 + AI 워크플로우 통합 팀 위키. CRDT 기반 동시 편집, RBAC 구조.',
      'card-papyrus-proof': 'Yjs + Socket.IO · Drizzle 스키마 · Vitest + Playwright 테스트 확인',

      'why-eyebrow': 'Why work with me',
      'why-h2': '일반 웹 프리랜서와 다른 이유',
      'why-lead': '4.8년간 엔터프라이즈 · 공공 부문 프로덕션 시스템에서 쌓은 경험을 바탕으로 작업합니다. 데모가 아닌 실제 운영 환경 기준으로 설계합니다.',
      'why-card1-title': 'API 응답속도 개선',
      'why-card1-desc': '서비스 분리와 아키텍처 재구성을 통해 핵심 API 응답 속도를 약 30% 단축. 성능 문제를 원인에서 접근합니다.',
      'why-card2-title': '동시 처리량 20배 개선',
      'why-card2-desc': '인증/세션 경로의 DB 커넥션 풀 병목을 해결해 동시 처리량을 100에서 2,000+ 수준으로 개선했습니다.',
      'why-card3-title': 'Oracle → MySQL 무중단 이전',
      'why-card3-desc': '수백만 건 레코드의 Oracle → MySQL 마이그레이션을 서비스 연속성을 유지하면서 완료했습니다.',
      'why-card4-title': '인증 · 보안 시스템',
      'why-card4-desc': 'Java · Quarkus · Keycloak 기반 OAuth 2.0 SSO 시스템 설계 및 구현. 인증 경계를 실무 환경에서 다뤄왔습니다.',
      'why-card5-title': '점진적 현대화',
      'why-card5-desc': '모놀리식 플랫폼을 Spring Boot 기반 모듈형 서비스로 단계적으로 분리. 전면 교체 없이 운영하면서 개선합니다.',
      'why-card6-title': '운영 워크플로우에 통합된 AI',
      'why-card6-desc': 'LLM을 독립 데모가 아닌 백엔드 이벤트 흐름 · RAG 파이프라인 · 실제 워크플로우 컴포넌트로 통합합니다.',

      'engagement-eyebrow': 'Engagement model',
      'engagement-h2': '이런 방식으로 진행합니다',
      'engagement-timeline-title': 'Typical timeline',
      'engagement-timeline-desc': '보통 2–6주 내의 작고 명확한 범위에서 가장 잘 맞습니다. 첫 단계는 전체를 크게 만들기보다, 실제 운영에 바로 도움이 되는 핵심 흐름 1개를 먼저 닫는 방식으로 진행합니다.',
      'engagement-deliverables-title': 'Deliverables',
      'engagement-deliverables-desc': '작동하는 MVP 또는 범위가 명확한 구현물을 제공합니다. 보통 핵심 백엔드 로직, 워크플로우 구조, 필요한 경우 내부 UI/어드민 화면, 그리고 인계용 설명을 함께 포함합니다.',
      'engagement-communication-title': 'Communication',
      'engagement-communication-desc': '이메일과 문서 중심으로 진행합니다. 중간 공유는 텍스트, 스크린샷, 짧은 데모 영상 위주로 드리고, 꼭 필요할 때만 짧은 미팅을 잡습니다.',
      'engagement-scope-title': 'Scope handling',
      'engagement-scope-desc': '처음부터 범위를 작게 잠그는 것을 우선합니다. 중간에 새 요청이 생기면 무한 확장하지 않고, 현재 단계와 다음 단계를 분리해 안정적으로 진행합니다.',

      'faq-eyebrow': 'FAQ',
      'faq-h2': '자주 묻는 질문',
      'faq-q1': '범위가 아직 완전히 정리되지 않았는데 문의해도 되나요?',
      'faq-a1': '네. 오히려 초기에 가장 필요한 건 모든 기능 목록보다도, 지금 어떤 업무가 수작업이고 어디가 가장 막히는지 정리하는 것입니다. 현재 상태와 원하는 결과만 있어도 첫 범위를 함께 잡을 수 있습니다.',
      'faq-q2': '작은 프로젝트도 맡나요?',
      'faq-a2': '네. 오히려 2–6주 안에 닫을 수 있는 작고 명확한 범위의 프로젝트와 가장 잘 맞습니다. 처음부터 큰 시스템 전체를 한 번에 만들기보다, 실제로 바로 쓰일 핵심 흐름 1개를 먼저 구현하는 쪽을 선호합니다.',
      'faq-q3': '미팅은 얼마나 필요한가요?',
      'faq-a3': '기본은 이메일/문서 중심입니다. 진행 중 공유도 텍스트, 스크린샷, 짧은 데모 중심으로 드립니다. 짧은 미팅이 필요할 수는 있지만, 회의가 많은 방식은 지향하지 않습니다.',
      'faq-q4': '어떤 기술 스택으로 작업하나요?',
      'faq-a4': '기본 강점은 백엔드, 운영 시스템, 내부 도구, 워크플로우 구조화에 있습니다. 프로젝트 목적에 맞는 스택을 우선하며, 특정 기술을 과하게 밀기보다 유지 가능한 구조를 만드는 데 집중합니다.',
      'faq-q5': '납품 후 지원도 가능한가요?',
      'faq-a5': '가능합니다. 다만 처음부터 무기한 운영 계약을 전제로 하기보다, 현재 단계 납품 범위와 이후 고도화 단계를 분리해서 보는 편이 더 명확합니다.',
      'faq-q6': '코드와 산출물의 소유권은 어떻게 되나요?',
      'faq-a6': '별도 합의가 없다면, 납품 범위에 포함된 코드와 산출물은 클라이언트가 인계받아 운영 가능한 형태로 전달하는 것을 기본으로 합니다. 세부 조건은 프로젝트 시작 전에 명확히 정리하는 것이 좋습니다.',
      'faq-q7': '민감한 운영 데이터도 다룰 수 있나요?',
      'faq-a7': '가능합니다. 다만 실제 운영 데이터, 권한, 접근 범위는 프로젝트 초기에 명확히 정리되어야 합니다. 필요 시 더미 데이터 기반 검증이나 최소 권한 접근 원칙으로 진행하는 방식을 우선합니다.',

      'contact-h2': '간단한 문의로 시작해보세요',
      'contact-intro': '아래 폼에 현재 운영 방식과 가장 큰 병목을 적어주시면,<br />범위를 검토한 뒤 적합한 첫 단계를 제안드립니다.',
      'form-label-name': '이름 *',
      'form-label-email': '이메일 *',
      'form-label-problem': '어떤 문제를 개선하고 싶으신가요? *',
      'form-label-type': '프로젝트 유형 *',
      'form-label-timeline': '희망 일정 *',
      'form-type-placeholder': '선택해주세요',
      'form-type-workflow': '워크플로우 자동화',
      'form-type-tool': '내부 도구',
      'form-type-backend': '백엔드 MVP',
      'form-type-unsure': '아직 잘 모르겠음',
      'form-error-name': '이름을 입력해주세요.',
      'form-error-email': '유효한 이메일을 입력해주세요.',
      'form-error-problem': '내용을 입력해주세요.',
      'form-error-type': '유형을 선택해주세요.',
      'form-error-timeline': '일정을 입력해주세요.',
      'form-helper-label': '아래 내용을 간단히 적어주시면 충분합니다.',
      'form-helper-1': '지금 어떤 업무가 아직 수작업인지',
      'form-helper-2': '누가 그 업무를 하고 있는지',
      'form-helper-3': '가장 큰 병목 1개',
      'form-helper-4': '원하는 결과 1개',
      'form-helper-5': '대략적인 일정',
      'form-submit': '문의 보내기',
      'form-success': '문의가 정상적으로 접수되었습니다. 보통 24–48시간 내 답변드립니다.',
      'form-fail': '문의 전송에 실패했습니다. 잠시 후 다시 시도하시거나, 아래 이메일로 바로 보내주세요.',
      'contact-fallback': '이메일로 바로 보내고 싶다면',

      'sticky-cta': '문의하기',
      'footer-tagline': '수동 워크플로우를 시스템으로 — 구현으로 증명합니다.',

      'prev-image': '이전 이미지',
      'next-image': '다음 이미지'
    },

    en: {
      'page-title': 'ProblemSolverArc — Backend · Ops Systems · Internal Tools Freelancer',
      'meta-desc': 'I turn manual workflows into structured, repeatable systems. Backend MVP, internal tools, and ops pipeline freelance services.',

      'nav-services': 'Services',
      'nav-projects': 'Cases',
      'nav-why': 'About',
      'nav-contact': 'Contact',

      'hero-label': 'Backend · Ops Systems · Internal Tools',
      'hero-h1': 'Turn spreadsheet-and-manual operations<br />into small systems that actually get used.',
      'hero-sub': 'Structuring scattered tasks across Slack, email, and spreadsheets into internal tools, operational workflows, and backend MVPs.<br />Focused on building the first usable structure, not flashy demos.',
      'hero-why-now': 'If your team is still spending time copy-pasting, manually checking, and re-organizing, you\'re likely already paying for it in speed and error rates.',
      'hero-btn-contact': 'Discuss a project',
      'hero-btn-services': 'View services',
      'hero-trust-micro': 'Usually reply within 24–48 hours · You can reach out even if scope isn\'t fully defined',

      'ts-label1': 'enterprise backend experience',
      'ts-label2': 'API latency reduction',
      'ts-label3': 'concurrency improvement',
      'ts-label4': 'real production environments',
      'ts-val4': 'Enterprise · Public Sector',

      'services-eyebrow': 'Services',
      'services-h2': 'Problems I solve, and how',
      'services-lead': 'I build small internal systems, operational workflows, and backend MVPs that can actually be used. I review scope first, then propose the most realistic first step.',
      'service1-audience': 'Founders · Operators',
      'service1-problem': 'Repetitive work stitched together with spreadsheets, Slack, and email is no longer sustainable to run manually.',
      'service1-inc1': 'Current workflow mapping',
      'service1-inc2': 'Approval/tracking/notification workflow structuring',
      'service1-inc3': 'Repeatable MVP + code handoff',
      'service1-exc1': 'Full system replacement',
      'service1-exc2': 'Large-scope product planning',
      'service1-exc3': 'Indefinite ongoing operations',
      'service2-audience': 'Small teams · Startups',
      'service2-problem': 'You want to turn core operations into a proper internal tool or admin interface.',
      'service2-inc1': 'Scope definition · workflow design',
      'service2-inc2': 'Admin logic · data processing',
      'service2-inc3': 'Reviewable MVP + code handoff',
      'service2-exc1': 'Org-wide system replacement',
      'service2-exc2': 'Undefined multi-team product scope',
      'service2-exc3': 'Open-ended indefinite support',
      'service3-audience': 'Product teams · Founders',
      'service3-problem': 'You need to quickly build APIs, backend logic, third-party integrations, or an ops pipeline.',
      'service3-inc1': 'MVP-scoped backend architecture',
      'service3-inc2': 'API · data flow · integration implementation',
      'service3-inc3': 'Handoff-oriented delivery + code handoff',
      'service3-exc1': 'Enterprise-wide transformation',
      'service3-exc2': 'Frontend-heavy UI design',
      'service3-exc3': 'Long-term maintenance without scope',
      'includes-label': 'What\'s included',
      'excludes-label': 'Not included',
      'service-cta-contact': 'Review scope, then quote →',

      'who-eyebrow': 'Who this is for',
      'who-h2': 'Teams I work best with',
      'who-lead': 'I work best with teams looking to replace manual work with real, operational systems — in a small, clearly scoped engagement.',
      'icp-profile1-title': '0–10 person SaaS teams',
      'icp-profile1-desc': 'Ops bottlenecks are already visible, but it\'s too early to hire a dedicated platform team',
      'icp-profile2-title': 'Founders validating a workflow MVP',
      'icp-profile2-desc': 'Want to quickly systematize spreadsheet- or message-based operations within 2–4 weeks',
      'icp-profile3-title': 'Teams moving approval/tracking off spreadsheets',
      'icp-profile3-desc': 'Looking to replace repetitive tasks with a reusable internal tool or backend flow',
      'icp-notfit': 'Branding-focused marketing sites, large platforms with undefined scope, and long-term embedded positions are not a current fit.',

      'featured-eyebrow': 'Featured Case',
      'featured-h2': 'Manual product research → repeatable operational pipeline',
      'case-baseline-label': 'Baseline',
      'case-baseline': 'Cross-border product opportunity research is usually scattered across spreadsheets, manual searches, and criteria re-organization. Even a small criteria change means starting from scratch, and results vary by person.',
      'case-change-label': 'What changed',
      'case-change': 'Price collection, product matching, margin calculation, and report output were structured into a single repeatable pipeline. Change the input criteria and re-run the same flow. A review dashboard and structured output were also included.',
      'case-result-label': 'Result',
      'case-result': 'Turned research from a "do it once and throw away" task into a re-runnable operational flow. Steps from collection → processing → review → report were separated, making the entire flow re-executable even when criteria changed.',
      'case-fit-label': 'Good fit',
      'case-fit': 'A good pattern for teams that want to replace repetitive human-driven operational processes — like market research, approval flows, or manual reconciliation — with a small reusable system.',

      'proof-caption-1': 'Market Overview — Scan results and market comparison data',
      'proof-caption-2': 'Product Opportunities — Opportunity list ranked by margin',
      'proof-caption-3': 'Market Intelligence — Market analysis insights',

      'proof-points-label': 'What this case demonstrates',
      'proof-point-1': 'Manual process → repeatable, structured workflow',
      'proof-point-2': 'Data collection · processing · review · report pipeline design',
      'proof-point-3': 'Admin dashboard · back-office interface implementation',
      'proof-point-4': 'Backend MVP with clear scope and real operational logic',

      'portfolio-eyebrow': 'More Cases',

      'card-seoulgyeol-desc': 'Consent-based survey → scoring → report generation → email delivery pipeline. Multilingual skin analysis MVP.',
      'card-seoulgyeol-proof': 'Full flow implemented · consent-based data handling · multilingual email delivery confirmed',
      'card-restricted-desc': 'Approved Slack requests → structured ops objects. Includes signature verification, deduplication, and audit logging.',
      'card-restricted-proof': 'Webhook signature verification · channel allowlist · audit log · integration tests confirmed',
      'card-papyrus-desc': 'Real-time collaborative editing + AI workflow integration team wiki. CRDT-based concurrent editing, RBAC structure.',
      'card-papyrus-proof': 'Yjs + Socket.IO · Drizzle schema · Vitest + Playwright tests confirmed',

      'why-eyebrow': 'Why work with me',
      'why-h2': 'Not a generic web freelancer',
      'why-lead': 'My work draws on 4.8 years building production systems in enterprise and public-sector environments. I design for real operational conditions, not demos.',
      'why-card1-title': '~30% API latency reduction',
      'why-card1-desc': 'Cut core API response time ~30% through service decomposition and architecture restructuring. I address performance problems at their root.',
      'why-card2-title': '20× concurrency improvement',
      'why-card2-desc': 'Resolved DB connection pool bottlenecks on auth/session paths, lifting concurrent capacity from 100 to 2,000+.',
      'why-card3-title': 'Oracle → MySQL zero-downtime migration',
      'why-card3-desc': 'Migrated millions of records from Oracle to MySQL while maintaining service continuity.',
      'why-card4-title': 'Auth & security systems',
      'why-card4-desc': 'Designed and implemented OAuth 2.0 SSO systems using Java, Quarkus, and Keycloak in production environments.',
      'why-card5-title': 'Incremental modernization',
      'why-card5-desc': 'Decomposed a monolithic platform into modular Spring Boot services incrementally — improving while staying in production.',
      'why-card6-title': 'AI integrated into operational workflows',
      'why-card6-desc': 'I integrate LLMs as backend event flow components, RAG pipelines, and real workflow parts — not isolated demos.',

      'approach-eyebrow': 'Engagement Model',
      'approach-h2': 'How we work together',
      'engagement-eyebrow': 'Engagement Model',
      'engagement-h2': 'How we work together',
      'engagement-timeline-title': 'Timeline',
      'engagement-timeline-desc': 'Projects typically run 2–4 weeks. Scope is fixed before kickoff, so there are no surprises.',
      'engagement-deliverables-title': 'Deliverables',
      'engagement-deliverables-desc': 'Working code + handoff docs. Ready for your team to extend or maintain without me.',
      'engagement-communication-title': 'Communication',
      'engagement-communication-desc': 'Slack or email, async-first. Weekly checkpoint + final review — no unnecessary meetings.',
      'engagement-scope-title': 'Scope handling',
      'engagement-scope-desc': 'If something is out of scope, I flag it early and propose a separate phase. Scope grows only by explicit agreement.',

      'faq-eyebrow': 'FAQ',
      'faq-h2': 'Frequently Asked Questions',
      'faq-q1': 'How does the project start?',
      'faq-a1': 'Once you share a short overview of your project, I review the scope and suggest a next step if it\'s a fit.',
      'faq-q2': 'What do I actually get delivered?',
      'faq-a2': 'Working code, deployment docs, and structural notes. Handed off in a form your team can immediately extend.',
      'faq-q3': 'What about ongoing support after handoff?',
      'faq-a3': 'I can optionally provide support for 1–2 weeks post-handoff, scoped and priced separately.',
      'faq-q4': 'Can I see intermediate progress?',
      'faq-a4': 'Yes. I share a weekly checkpoint with status, blockers, and next-step plans.',
      'faq-q5': 'What if the scope changes mid-project?',
      'faq-a5': 'I flag scope changes immediately and propose a separate phase. No budget surprises.',
      'faq-q6': 'What tech stack do you use?',
      'faq-a6': 'Primarily Java/Spring and Python. Details depend on the project — I recommend what fits your operational needs.',
      'faq-q7': 'Do you take on long-term contracts?',
      'faq-a7': 'I focus on scoped 2–4 week engagements. Multi-phase work is possible by mutual agreement.',

      'contact-h2': 'Start with a quick inquiry',
      'contact-intro': 'Describe the problem you want to solve. I\'ll review the scope and suggest a next step.',
      'form-label-name': 'Name *',
      'form-label-email': 'Email *',
      'form-label-problem': 'What problem are you trying to solve? *',
      'form-label-type': 'Project type *',
      'form-label-timeline': 'Desired timeline *',
      'form-type-placeholder': '— Select —',
      'form-type-workflow': 'Workflow Automation',
      'form-type-tool': 'Internal Tool',
      'form-type-backend': 'Backend MVP',
      'form-type-unsure': 'Other / Not sure',
      'form-error-name': 'Please enter your name.',
      'form-error-email': 'Please enter a valid email.',
      'form-error-problem': 'Please describe the problem.',
      'form-error-type': 'Please select a project type.',
      'form-error-timeline': 'Please enter a timeline.',
      'form-helper-label': 'A few lines covering these points is enough:',
      'form-helper-1': 'Which tasks are still manual',
      'form-helper-2': 'Who handles them today',
      'form-helper-3': 'The biggest bottleneck',
      'form-helper-4': 'One desired outcome',
      'form-helper-5': 'Rough timeline',
      'form-submit': 'Submit inquiry',
      'form-success': 'Your inquiry has been sent. I\'ll reply within 24–48 hours.',
      'form-fail': 'Failed to send. Please try the email link below.',
      'contact-fallback': 'Or send a direct email',
      'contact-reassurance': 'I reply within 24–48 hours. If the scope fits I\'ll suggest a clear next step. It\'s fine if things aren\'t fully defined yet.',

      'sticky-cta': 'Contact',
      'footer-tagline': 'Manual workflows into systems — proven through implementation.',

      'prev-image': 'Previous image',
      'next-image': 'Next image'
    },

    ja: {
      'page-title': 'ProblemSolverArc — バックエンド · 運用システム · 社内ツール フリーランサー',
      'meta-desc': '手動ワークフローを構造化されたシステムに転換します。バックエンドMVP、社内ツール、運用パイプラインのフリーランスサービス。',

      'nav-services': 'サービス',
      'nav-projects': '実績',
      'nav-why': '紹介',
      'nav-contact': 'お問い合わせ',

      'hero-label': 'Backend · 運用システム · 社内ツール',
      'hero-h1': 'スプレッドシートと手作業で回していた運用を<br />小さくても実際に使えるシステムに変えます',
      'hero-sub': 'Slack、メール、スプレッドシートに散らばった繰り返し業務を社内ツール・運用ワークフロー・バックエンドMVPに構造化します。見栄えの良いデモではなく、実際に運用可能な最初の構造を作ることに集中します。',
      'hero-btn-contact': 'プロジェクトを相談する',
      'hero-btn-services': 'サービスを見る',
      'hero-why-now': 'チームは小さく、やることは多い時 — 自動化への第一歩を一緒に踏み出します。',
      'hero-trust-micro': '4.8年エンタープライズ・公共機関バックエンド経験 · 2〜4週間スコープ固定 · 引き渡し型納品',

      'ts-label1': 'エンタープライズ バックエンド経験',
      'ts-label2': 'API応答速度改善',
      'ts-label3': '同時処理量改善',
      'ts-label4': '実運用環境での経験',
      'ts-val4': 'エンタープライズ · 公共機関',

      'services-eyebrow': 'サービス',
      'services-h2': 'どんな問題をどのように解決しますか',
      'services-lead': '小さく始めて実際に使える社内システム・運用ワークフロー・バックエンドMVPを作ります。スコープを確認してから最も現実的な第一歩を提案します。',
      'service1-audience': 'オペレーター · 小規模チーム',
      'service1-problem': 'コア業務がSlack・スプレッドシート・手作業で回っており、変更のたびに最初からやり直し。',
      'service1-inc1': '反復業務の構造化 · 自動化設計',
      'service1-inc2': 'トリガー → 処理 → 出力パイプライン構築',
      'service1-inc3': '運用テスト + コード引き渡し',
      'service1-exc1': '組織全体のDX推進',
      'service1-exc2': 'ノーコードツール設定の代行',
      'service1-exc3': 'スコープ未定の長期運用',
      'service2-audience': '小規模チーム · スタートアップ',
      'service2-problem': 'Slackやスプレッドシートでやっていた業務をきちんとしたツールに変えたい。',
      'service2-inc1': 'スコープ定義 · ワークフロー設計',
      'service2-inc2': '管理ロジック · データ処理',
      'service2-inc3': 'レビュー可能なMVP + コード引き渡し',
      'service2-exc1': '組織全体のシステム置き換え',
      'service2-exc2': 'スコープ未定のマルチチーム製品',
      'service2-exc3': 'オープンエンドの無期限サポート',
      'service3-audience': '製品チーム · 創業者',
      'service3-problem': 'API、バックエンドロジック、外部連携、運用パイプラインを素早く作らなければならない。',
      'service3-inc1': 'MVPスコープのバックエンドアーキテクチャ',
      'service3-inc2': 'API · データフロー · 統合実装',
      'service3-inc3': '引き渡し指向の納品 + コード引き渡し',
      'service3-exc1': '全社エンタープライズ転換',
      'service3-exc2': 'フロントエンド重視のUIデザイン',
      'service3-exc3': 'スコープのない長期保守',
      'includes-label': '提供内容',
      'excludes-label': '含まれないもの',
      'service-cta-contact': 'スコープ確認後に見積もり →',

      'who-eyebrow': 'Who this is for',
      'who-h2': 'こんなチームと最も合います',
      'who-lead': '小さく明確なスコープで、手作業を実際に運用可能なシステムに変えようとするチームと合います。',
      'icp-profile1-title': '0〜10人規模のSaaSチーム',
      'icp-profile1-desc': '運用ボトルネックが見えているが、専任プラットフォームチームを雇うには早い',
      'icp-profile2-title': 'ワークフローMVPを検証中の創業者',
      'icp-profile2-desc': 'スプレッドシートやメッセージベースの運用を2〜4週間で素早くシステム化したい',
      'icp-profile3-title': '承認・追跡をスプレッドシートから移行するチーム',
      'icp-profile3-desc': '繰り返しタスクを再利用可能な社内ツールやバックエンドフローに置き換えたい',
      'icp-notfit': 'ブランディング重視のマーケティングサイト、スコープ未定の大型プラットフォーム、長期embedded案件は現在お受けしていません。',

      'featured-eyebrow': '代表実績',
      'featured-h2': '手作業の商品調査を繰り返し実行可能な運用パイプラインへ',
      'case-baseline-label': 'ベースライン',
      'case-baseline': '国際間の商品機会調査は通常スプレッドシートと手作業に依存しています。基準が少し変わるだけでも最初からやり直しで、結果は担当者によって異なります。',
      'case-change-label': '何が変わったか',
      'case-change': '価格収集、商品マッチング、マージン計算、レポート出力を1つの繰り返し可能なパイプラインに構造化。入力基準を変えて同じフローを再実行できます。レビューダッシュボードと構造化された出力も含みます。',
      'case-result-label': '結果',
      'case-result': '調査を「一度やって終わり」から再実行可能な運用フローに転換。収集→処理→レビュー→レポートの各段階を分離し、基準が変わっても全体フローをそのまま再実行可能にしました。',
      'case-fit-label': '向いているパターン',
      'case-fit': '市場調査、承認フロー、手動突合など、繰り返し発生する人手依存の運用プロセスを小さな再利用可能なシステムに置き換えたいチームに適したパターンです。',

      'proof-caption-1': 'Market Overview — スキャン結果と市場比較データ',
      'proof-caption-2': 'Product Opportunities — マージン基準の商品機会リスト',
      'proof-caption-3': 'Market Intelligence — 市場分析インサイト',

      'proof-points-label': 'この実績が証明する能力',
      'proof-point-1': '手作業プロセス → 繰り返し実行可能な構造化ワークフロー',
      'proof-point-2': 'データ収集 · 処理 · レビュー · レポートパイプライン設計',
      'proof-point-3': '管理ダッシュボード · バックオフィスインターフェース実装',
      'proof-point-4': '明確なスコープと運用ロジックを持つバックエンドMVP',

      'portfolio-eyebrow': '追加実績',

      'card-seoulgyeol-desc': '同意ベースのアンケート → スコア算出 → レポート生成 → メール配信パイプライン。多言語肌分析MVP。',
      'card-seoulgyeol-proof': '全フロー実装 · 同意ベースのデータ処理 · 多言語メール配信確認',
      'card-restricted-desc': '承認済みSlackリクエスト → 構造化された運用オブジェクト。署名検証・重複防止・監査ログ含む。',
      'card-restricted-proof': 'Webhook署名検証 · チャンネル許可リスト · 監査ログ · 統合テスト確認',
      'card-papyrus-desc': 'リアルタイム共同編集 + AIワークフロー統合チームWiki。CRDT同時編集、RBAC構造。',
      'card-papyrus-proof': 'Yjs + Socket.IO · Drizzleスキーマ · Vitest + Playwrightテスト確認',

      'why-eyebrow': 'Why work with me',
      'why-h2': '一般的なWebフリーランサーとの違い',
      'why-lead': '4.8年間、エンタープライズ・公共機関のプロダクションシステムで積んだ経験をベースに作業します。デモではなく実運用環境の基準で設計します。',
      'why-card1-title': 'API応答速度~30%改善',
      'why-card1-desc': 'サービス分離とアーキテクチャ再構成でコアAPIの応答速度を約30%短縮。パフォーマンス問題を根本から対処します。',
      'why-card2-title': '同時処理量20倍改善',
      'why-card2-desc': '認証/セッション経路のDBコネクションプールのボトルネックを解消し、同時処理量を100から2,000+に改善しました。',
      'why-card3-title': 'Oracle → MySQL無停止移行',
      'why-card3-desc': '数百万件のレコードのOracle → MySQLマイグレーションをサービス継続性を維持しながら完了しました。',
      'why-card4-title': '認証 · セキュリティシステム',
      'why-card4-desc': 'Java · Quarkus · KeycloakベースのOAuth 2.0 SSOシステムを設計・実装。認証の境界を実務環境で扱ってきました。',
      'why-card5-title': '段階的近代化',
      'why-card5-desc': 'モノリシックプラットフォームをSpring Bootベースのモジュール型サービスに段階的に分離。全面置き換えなく運用しながら改善します。',
      'why-card6-title': '運用ワークフローに統合されたAI',
      'why-card6-desc': 'LLMを独立したデモではなくバックエンドイベントフロー・RAGパイプライン・実際のワークフローコンポーネントとして統合します。',

      'approach-eyebrow': '協業モデル',
      'approach-h2': 'どのように進めますか',
      'engagement-eyebrow': '協業モデル',
      'engagement-h2': 'どのように進めますか',
      'engagement-timeline-title': 'タイムライン',
      'engagement-timeline-desc': 'プロジェクトは通常2〜4週間。スコープはキックオフ前に固定するため、想定外の追加はありません。',
      'engagement-deliverables-title': '成果物',
      'engagement-deliverables-desc': '動くコード + 引き渡しドキュメント。チームが私なしでも拡張・保守できる形で納品します。',
      'engagement-communication-title': 'コミュニケーション',
      'engagement-communication-desc': 'SlackまたはEメール、非同期中心。週次チェックポイント + 最終レビュー — 不要な会議はなし。',
      'engagement-scope-title': 'スコープ管理',
      'engagement-scope-desc': 'スコープ外の要素は早期にフラグし、別フェーズとして提案。スコープは明示的な合意の上でのみ拡大します。',

      'faq-eyebrow': 'FAQ',
      'faq-h2': 'よくあるご質問',
      'faq-q1': 'プロジェクトはどう始まりますか？',
      'faq-a1': 'プロジェクト概要を共有いただければスコープを検討し、適合する場合は次のステップを提案します。',
      'faq-q2': '具体的に何が納品されますか？',
      'faq-a2': '動くコード、デプロイドキュメント、構造説明書。チームがすぐに拡張できる形で引き渡します。',
      'faq-q3': '引き渡し後のサポートはありますか？',
      'faq-a3': '引き渡し後1〜2週間のサポートをオプションで提供可能です。別途スコープ・料金で対応します。',
      'faq-q4': '途中経過を確認できますか？',
      'faq-a4': 'はい。週次チェックポイントで状況・ブロッカー・次のステップを共有します。',
      'faq-q5': '途中でスコープが変わったらどうなりますか？',
      'faq-a5': 'スコープ変更はすぐにフラグし、別フェーズとして提案します。予算の想定外はありません。',
      'faq-q6': '技術スタックは何を使いますか？',
      'faq-a6': '主にJava/SpringとPython。詳細はプロジェクトに合わせて最適なものを提案します。',
      'faq-q7': '長期契約は可能ですか？',
      'faq-a7': '2〜4週間のスコープ型エンゲージメントを基本としています。複数フェーズの継続は相互合意で可能です。',

      'contact-h2': '簡単なお問い合わせから始めましょう',
      'contact-intro': '解決したい問題を教えてください。スコープを確認し、次のステップを提案します。',
      'form-label-name': 'お名前 *',
      'form-label-email': 'メールアドレス *',
      'form-label-problem': '解決したい問題は何ですか？ *',
      'form-label-type': 'プロジェクトの種類 *',
      'form-label-timeline': '希望スケジュール *',
      'form-type-placeholder': '— 選択してください —',
      'form-type-workflow': 'ワークフロー自動化',
      'form-type-tool': '社内ツール',
      'form-type-backend': 'バックエンドMVP',
      'form-type-unsure': 'その他 / 未定',
      'form-error-name': 'お名前を入力してください。',
      'form-error-email': '有効なメールアドレスを入力してください。',
      'form-error-problem': '内容を入力してください。',
      'form-error-type': '種類を選択してください。',
      'form-error-timeline': 'スケジュールを入力してください。',
      'form-helper-label': '以下の内容を簡単にご記入いただければ十分です。',
      'form-helper-1': 'どの業務がまだ手作業か',
      'form-helper-2': '誰がその業務を担当しているか',
      'form-helper-3': '最大のボトルネック1つ',
      'form-helper-4': '望む結果1つ',
      'form-helper-5': 'おおよそのスケジュール',
      'form-submit': 'お問い合わせを送る',
      'form-success': 'お問い合わせが送信されました。24〜48時間以内にご返信します。',
      'form-fail': '送信に失敗しました。下のメールリンクをご利用ください。',
      'contact-fallback': 'または直接メールを送る',
      'contact-reassurance': '24〜48時間以内にご返信します。スコープが合えば明確な次のステップをご提案します。まだ具体的でなくても大丈夫です。',

      'sticky-cta': 'お問い合わせ',
      'footer-tagline': '手動ワークフローをシステムに — 実装で証明します。',

      'prev-image': '前の画像',
      'next-image': '次の画像'
    }
  };

  var SUPPORTED = ['ko', 'en', 'ja'];
  var STORAGE_KEY = 'psa-lang';

  function getInitialLang() {
    var stored = localStorage.getItem(STORAGE_KEY);
    if (stored && SUPPORTED.indexOf(stored) !== -1) return stored;
    return 'ko';
  }

  function applyLang(lang) {
    var dict = translations[lang];
    if (!dict) return;

    /* Update <html lang> */
    document.documentElement.lang = lang;

    /* Update <title> */
    document.title = dict['page-title'];

    /* Update meta description */
    var meta = document.querySelector('meta[name="description"]');
    if (meta) meta.setAttribute('content', dict['meta-desc']);

    /* Swap text content */
    document.querySelectorAll('[data-i18n]').forEach(function (el) {
      var key = el.getAttribute('data-i18n');
      if (dict[key] !== undefined) el.textContent = dict[key];
    });

    /* Swap inner HTML (elements with <br> etc.) */
    document.querySelectorAll('[data-i18n-html]').forEach(function (el) {
      var key = el.getAttribute('data-i18n-html');
      if (dict[key] !== undefined) el.innerHTML = dict[key];
    });

    /* Swap aria-label */
    document.querySelectorAll('[data-i18n-aria]').forEach(function (el) {
      var key = el.getAttribute('data-i18n-aria');
      if (dict[key] !== undefined) el.setAttribute('aria-label', dict[key]);
    });

    /* Update active button state */
    document.querySelectorAll('.lang-btn').forEach(function (btn) {
      btn.classList.toggle('lang-btn--active', btn.getAttribute('data-lang') === lang);
    });

    localStorage.setItem(STORAGE_KEY, lang);
  }

  /* Bind language switcher buttons */
  document.addEventListener('DOMContentLoaded', function () {
    applyLang(getInitialLang());

    document.querySelectorAll('.lang-btn').forEach(function (btn) {
      btn.addEventListener('click', function () {
        applyLang(btn.getAttribute('data-lang'));
      });
    });
  });
})();
