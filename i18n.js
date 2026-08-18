/**
 * ProblemSolverArc — Lightweight i18n (KO / EN / JA)
 * No dependencies. Stores preference in localStorage.
 *
 * Buyer-facing copy source of truth:
 * - positioning / hero
 * - services / ICP
 * - proof / trust
 * - engagement / FAQ / contact
 *
 * Keep the Korean fallback strings in index.html aligned with the ko dictionary.
 */
(function () {
  'use strict';

  var translations = {
    ko: {
      'page-title': 'ProblemSolverArc — 백엔드 · AI 워크플로우 · 운영 시스템 프리랜서',
      'meta-desc': '수동 워크플로우를 운영 가능한 시스템으로 전환하고, 필요한 구간에 AI를 연결합니다. 내부 도구, 워크플로우 자동화, 백엔드 MVP 프리랜서 서비스.',

      'nav-services': '서비스',
      'nav-projects': '사례',
      'nav-why': '소개',
      'nav-contact': '문의하기',

      'hero-label': 'Backend · AI Workflow · 운영 시스템',
      'hero-h1': '스프레드시트·Slack·수작업으로 운영 중인 팀을 위해, AI가 필요한 곳에만 연결된 내부 도구·워크플로우·백엔드 MVP를 만듭니다.',
      'hero-sub': '반복 업무를 먼저 구조화하고, 분류·요약·검색·의사결정 보조처럼 AI가 실제 이득을 주는 구간에만 연결합니다.<br />보기 좋은 AI 데모보다, 사람이 계속 운영할 수 있는 첫 시스템을 만드는 데 집중합니다.',
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
      'services-lead': '작게 시작해 실제로 쓰일 수 있는 운영 시스템을 만듭니다. 먼저 업무 흐름과 범위를 잠그고, AI가 효과적인 구간이 있으면 그때 연결합니다.',
      'service1-audience': '파운더 · 오퍼레이터',
      'service1-problem': '스프레드시트, Slack, 이메일로 이어 붙인 반복 업무를 더 이상 수작업으로 돌리기 어렵다.',
      'service1-inc1': '현재 업무 흐름 정리',
      'service1-inc2': '승인·추적·알림 + 필요한 경우 AI 분류·요약 구조화',
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
      'service3-problem': 'API, 백엔드 로직, AI·외부 서비스 연동, 운영 파이프라인을 빠르게 만들어야 한다.',
      'service3-inc1': 'MVP 범위 백엔드 아키텍처',
      'service3-inc2': 'API · 데이터 흐름 · AI/외부 서비스 통합 구현',
      'service3-inc3': '인수인계 지향 납품 + 코드 인계',
      'service3-exc1': '전사 엔터프라이즈 전환',
      'service3-exc2': '프론트엔드 중심 UI 디자인',
      'service3-exc3': '범위 없는 장기 유지보수',
      'includes-label': '제공 내용',
      'excludes-label': '포함 안 됨',
      'service-cta-contact': '범위 확인 후 견적 →',

      'who-eyebrow': '이런 팀을 위한 서비스',
      'who-h2': '이런 팀과 가장 잘 맞습니다',
      'who-lead': '작고 명확한 범위에서, 수작업을 실제 운영 가능한 시스템으로 바꾸려는 팀과 잘 맞습니다.',
      'icp-profile1-title': '1–10인 SaaS 팀',
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

      'portfolio-eyebrow': '추가 검증 사례',
      'card-seoulgyeol-desc': '문제: 상담 전 진단과 리포트 전달이 수작업이라 응답이 느렸습니다. 시스템: 동의 기반 설문→점수화→리포트→이메일 전달을 자동화했습니다.',
      'card-seoulgyeol-proof': '운영 결과: 상담 준비 시간이 줄고, 고객별 리포트를 누락 없이 일관되게 전달할 수 있게 됐습니다.',
      'card-restricted-desc': '문제: 민감한 운영 요청이 채팅에 흩어져 승인/추적이 어려웠습니다. 시스템: 승인된 Slack 요청만 접수해 구조화된 객체로 변환했습니다.',
      'card-restricted-proof': '운영 결과: 요청 누락·중복을 줄이고, 감사 가능한 기록 기반으로 후속 처리 속도를 높였습니다.',
      'card-papyrus-desc': '문제: 팀 지식이 문서와 메시지에 분산돼 최신 기준 확인에 시간이 들었습니다. 시스템: 실시간 공동 편집, 권한 구조, AI 보조 흐름을 결합한 팀 위키를 구축했습니다.',
      'card-papyrus-proof': '운영 결과: 같은 정보를 반복 정리하는 시간을 줄이고, 팀이 같은 기준으로 더 빠르게 협업할 수 있는 구조를 만들었습니다.',

      'why-eyebrow': '강점',
      'why-h2': '웹 제작보다 운영 시스템에 가까운 이유',
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
      'why-card6-title': 'AI를 기능이 아니라 워크플로우 일부로',
      'why-card6-desc': 'LLM을 독립 데모처럼 붙이지 않습니다. 입력 검증, 분류·추출, 검색/RAG, 사람이 확인하는 의사결정 단계와 연결해 운영 흐름 안에서 사용합니다.',

      'engagement-eyebrow': '협업 방식',
      'engagement-h2': '이런 방식으로 진행합니다',
      'engagement-timeline-title': '일정',
      'engagement-timeline-desc': '보통 2–6주 내의 작고 명확한 범위에서 가장 잘 맞습니다. 첫 단계는 전체를 크게 만들기보다, 실제 운영에 바로 도움이 되는 핵심 흐름 1개를 먼저 닫는 방식으로 진행합니다.',
      'engagement-deliverables-title': '납품물',
      'engagement-deliverables-desc': '작동하는 MVP 또는 범위가 명확한 구현물을 제공합니다. 보통 핵심 백엔드 로직, 워크플로우 구조, 필요한 경우 내부 UI/어드민 화면, 그리고 인계용 설명을 함께 포함합니다.',
      'engagement-communication-title': '소통 방식',
      'engagement-communication-desc': '이메일과 문서 중심으로 진행합니다. 중간 공유는 텍스트, 스크린샷, 짧은 데모 영상 위주로 드리고, 꼭 필요할 때만 짧은 미팅을 잡습니다.',
      'engagement-scope-title': '범위 관리',
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
      'faq-a4': '기본 강점은 백엔드, 운영 시스템, 내부 도구, 워크플로우 구조화에 있습니다. 프로젝트 목적에 맞는 스택을 우선하며, AI도 효과가 있는 구간에만 선택적으로 적용합니다.',
      'faq-q5': '납품 후 지원도 가능한가요?',
      'faq-a5': '가능합니다. 다만 처음부터 무기한 운영 계약을 전제로 하기보다, 현재 단계 납품 범위와 이후 고도화 단계를 분리해서 보는 편이 더 명확합니다.',
      'faq-q6': '코드와 산출물의 소유권은 어떻게 되나요?',
      'faq-a6': '별도 합의가 없다면, 납품 범위에 포함된 코드와 산출물은 클라이언트가 인계받아 운영 가능한 형태로 전달하는 것을 기본으로 합니다. 세부 조건은 프로젝트 시작 전에 명확히 정리하는 것이 좋습니다.',
      'faq-q7': '민감한 운영 데이터도 다룰 수 있나요?',
      'faq-a7': '가능합니다. 다만 실제 운영 데이터, 권한, 접근 범위는 프로젝트 초기에 명확히 정리되어야 합니다. 필요 시 더미 데이터 기반 검증이나 최소 권한 접근 원칙으로 진행하는 방식을 우선합니다.',

      'contact-h2': '이메일 문의로 바로 시작하세요',
      'contact-intro': '현재 운영 병목과 원하는 결과를 이메일로 보내주시면,<br />범위를 검토한 뒤 적합한 첫 단계를 회신드립니다.',
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
      'form-helper-label': '아래 5가지만 보내주시면 범위 판단이 빠릅니다.',
      'form-helper-1': '현재 수작업으로 처리 중인 업무 1–2개',
      'form-helper-2': '누가, 얼마나 자주 그 업무를 처리하는지',
      'form-helper-3': '지금 가장 큰 운영 병목 1개',
      'form-helper-4': '이번 단계에서 원하는 운영 결과 1개',
      'form-helper-5': '희망 일정 또는 마감 시점',
      'form-submit': '문의 보내기',
      'form-success': '문의가 정상적으로 접수되었습니다. 보통 24–48시간 내 답변드립니다.',
      'form-fail': '문의 전송에 실패했습니다. 잠시 후 다시 시도하시거나, 아래 이메일로 바로 보내주세요.',
      'contact-fallback': '문의 이메일',
      'contact-reply-time': '보통 24–48시간 내에 첫 답변을 드립니다.',
      'contact-reassurance': '범위가 아직 구체적이지 않아도 괜찮습니다. 현재 상태와 원하는 결과만 보내주셔도 첫 단계를 함께 정리할 수 있습니다.',

      'sticky-cta': '문의하기',
      'footer-tagline': '수동 워크플로우를 운영 시스템으로 — AI는 필요한 곳에만.',
      'prev-image': '이전 이미지',
      'next-image': '다음 이미지',
      'ts-years-suffix': '년',
      'experience-stat-3': '수백만 건',
      'experience-stat-5': '레거시→',
      'form-timeline-placeholder': '예: 4주 내',
      'nav-toggle-aria': '메뉴 열기'
    },

    en: {
      'page-title': 'ProblemSolverArc — Backend · AI Workflows · Ops Systems Freelancer',
      'meta-desc': 'I turn manual workflows into operational systems and add AI only where it creates practical leverage. Internal tools, workflow automation, and backend MVP freelance services.',

      'nav-services': 'Services',
      'nav-projects': 'Cases',
      'nav-why': 'About',
      'nav-contact': 'Contact',

      'hero-label': 'Backend · AI Workflow · Ops Systems',
      'hero-h1': 'I build internal tools, workflow systems, and backend MVPs for teams still running operations through spreadsheets, Slack, and manual work — with AI only where it earns its place.',
      'hero-sub': 'I structure the workflow first, then add AI where classification, summarization, retrieval, or decision support creates real leverage.<br />The goal is not a flashy AI demo. It is a first system your team can actually operate.',
      'hero-why-now': 'If your team is still spending time copy-pasting, manually checking, and reorganizing information, you are likely already paying for it in speed and error rates.',
      'hero-btn-contact': 'Discuss a project',
      'hero-btn-services': 'View services',
      'hero-trust-micro': 'Usually reply within 24–48 hours · You can reach out even if the scope is not fully defined',

      'ts-label1': 'enterprise backend experience',
      'ts-label2': 'API latency reduction',
      'ts-label3': 'concurrency improvement',
      'ts-label4': 'real production environments',
      'ts-val4': 'Enterprise · Public Sector',

      'services-eyebrow': 'Services',
      'services-h2': 'Problems I solve, and how',
      'services-lead': 'I build small operational systems that can actually be used. We lock the workflow and scope first, then add AI only when a specific step benefits from it.',
      'service1-audience': 'Founders · Operators',
      'service1-problem': 'Repetitive work stitched together with spreadsheets, Slack, and email is no longer sustainable to run manually.',
      'service1-inc1': 'Current workflow mapping',
      'service1-inc2': 'Approval, tracking, notifications + AI classification/summarization when useful',
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
      'service3-problem': 'You need to quickly build APIs, backend logic, AI or third-party integrations, and an operational pipeline.',
      'service3-inc1': 'MVP-scoped backend architecture',
      'service3-inc2': 'API · data flow · AI/third-party integration implementation',
      'service3-inc3': 'Handoff-oriented delivery + code handoff',
      'service3-exc1': 'Enterprise-wide transformation',
      'service3-exc2': 'Frontend-heavy UI design',
      'service3-exc3': 'Long-term maintenance without scope',
      'includes-label': 'What is included',
      'excludes-label': 'Not included',
      'service-cta-contact': 'Review scope, then quote →',

      'who-eyebrow': 'Who this is for',
      'who-h2': 'Teams I work best with',
      'who-lead': 'I work best with teams replacing manual work with a real operational system in a small, clearly scoped engagement.',
      'icp-profile1-title': '1–10 person SaaS teams',
      'icp-profile1-desc': 'Operational bottlenecks are already visible, but it is too early to hire a dedicated platform team',
      'icp-profile2-title': 'Founders validating a workflow MVP',
      'icp-profile2-desc': 'Want to systematize spreadsheet- or message-based operations within 2–4 weeks',
      'icp-profile3-title': 'Teams moving approval and tracking off spreadsheets',
      'icp-profile3-desc': 'Looking to replace repetitive tasks with a reusable internal tool or backend flow',
      'icp-notfit': 'Branding-focused marketing sites, large platforms with undefined scope, and long-term embedded positions are not a current fit.',

      'featured-eyebrow': 'Featured Case',
      'featured-h2': 'Manual product research → repeatable operational pipeline',
      'case-baseline-label': 'Baseline',
      'case-baseline': 'Cross-border product opportunity research is usually scattered across spreadsheets, manual searches, and repeated criteria cleanup. Even a small criteria change can mean starting from scratch, and results vary by person.',
      'case-change-label': 'What changed',
      'case-change': 'Price collection, product matching, margin calculation, and report output were structured into a single repeatable pipeline. Change the input criteria and the same flow can be re-run, with a review dashboard and structured output included.',
      'case-result-label': 'Result',
      'case-result': 'Research became a re-runnable operational flow instead of a one-off task. Collection, processing, review, and reporting were separated so the workflow can be repeated when criteria change.',
      'case-fit-label': 'Good fit',
      'case-fit': 'A useful pattern for teams replacing repetitive human-driven work — such as market research, approvals, or reconciliation — with a small reusable system.',

      'proof-caption-1': 'Market Overview — scan results and market comparison data',
      'proof-caption-2': 'Product Opportunities — opportunity list ranked by margin',
      'proof-caption-3': 'Market Intelligence — market analysis insights',
      'proof-points-label': 'What this case demonstrates',
      'proof-point-1': 'Manual process → repeatable, structured workflow',
      'proof-point-2': 'Data collection · processing · review · report pipeline design',
      'proof-point-3': 'Admin dashboard · back-office interface implementation',
      'proof-point-4': 'Backend MVP with clear scope and real operational logic',

      'portfolio-eyebrow': 'More Validated Cases',
      'card-seoulgyeol-desc': 'Problem: intake and report delivery were manual, slowing response to new customers. System: consent-based survey → scoring → report → email pipeline.',
      'card-seoulgyeol-proof': 'Operational outcome: faster consultation preparation and consistent report delivery without manual follow-up.',
      'card-restricted-desc': 'Problem: sensitive operational requests were buried in chat, making approval and tracking unreliable. System: only approved Slack requests were converted into structured operational records.',
      'card-restricted-proof': 'Operational outcome: fewer missed or duplicate requests and faster downstream handling with an auditable trail.',
      'card-papyrus-desc': 'Problem: team knowledge was fragmented across documents and messages. System: a real-time collaborative wiki combining permissions, shared editing, and AI-assisted workflow support.',
      'card-papyrus-proof': 'Operational outcome: less repeated clarification work and a faster shared workflow around one source of truth.',

      'why-eyebrow': 'Why work with me',
      'why-h2': 'Closer to operations engineering than generic web production',
      'why-lead': 'My work draws on 4.8 years building production systems in enterprise and public-sector environments. I design for real operational conditions, not demos.',
      'why-card1-title': '~30% API latency reduction',
      'why-card1-desc': 'Cut core API response time by about 30% through service decomposition and architecture restructuring. I address performance problems at their root.',
      'why-card2-title': '20× concurrency improvement',
      'why-card2-desc': 'Resolved DB connection pool bottlenecks on authentication/session paths, lifting concurrent capacity from 100 to 2,000+.',
      'why-card3-title': 'Oracle → MySQL zero-downtime migration',
      'why-card3-desc': 'Migrated millions of records from Oracle to MySQL while maintaining service continuity.',
      'why-card4-title': 'Authentication & security systems',
      'why-card4-desc': 'Designed and implemented OAuth 2.0 SSO systems using Java, Quarkus, and Keycloak in production environments.',
      'why-card5-title': 'Incremental modernization',
      'why-card5-desc': 'Decomposed a monolithic platform into modular Spring Boot services incrementally — improving the system while it stayed in production.',
      'why-card6-title': 'AI as part of the workflow, not a feature badge',
      'why-card6-desc': 'I connect LLMs to validated inputs, extraction/classification, retrieval/RAG, and human review steps so AI lives inside the operational flow instead of beside it.',

      'engagement-eyebrow': 'Engagement Model',
      'engagement-h2': 'How we work together',
      'engagement-timeline-title': 'Timeline',
      'engagement-timeline-desc': 'I work best on small, clearly scoped engagements that usually close within 2–6 weeks. The first phase focuses on one operational flow that can deliver immediate value.',
      'engagement-deliverables-title': 'Deliverables',
      'engagement-deliverables-desc': 'You receive a working MVP or clearly scoped implementation, typically including core backend logic, workflow structure, internal/admin UI where needed, and handoff notes.',
      'engagement-communication-title': 'Communication',
      'engagement-communication-desc': 'Email and documentation first. Progress is shared through text, screenshots, and short demo videos, with short meetings only when useful.',
      'engagement-scope-title': 'Scope handling',
      'engagement-scope-desc': 'I keep the initial scope intentionally small. New requests are separated into the current phase or a next phase instead of expanding the engagement indefinitely.',

      'faq-eyebrow': 'FAQ',
      'faq-h2': 'Frequently Asked Questions',
      'faq-q1': 'Can I reach out before the scope is fully defined?',
      'faq-a1': 'Yes. At the beginning, the most useful information is what is still manual, where the workflow gets stuck, and what outcome you want. That is enough to shape a first scope.',
      'faq-q2': 'Do you take small projects?',
      'faq-a2': 'Yes. Small, clearly scoped projects that can close in roughly 2–6 weeks are often the best fit. I prefer to finish one useful operational flow before expanding the system.',
      'faq-q3': 'How many meetings are required?',
      'faq-a3': 'The default is email and documentation. I share progress with text, screenshots, and short demos. A short meeting may be useful sometimes, but meeting-heavy delivery is not the default.',
      'faq-q4': 'What technology stack do you use?',
      'faq-a4': 'My core strengths are backend systems, operational workflows, internal tools, and structured automation. I choose the stack around the project and use AI selectively where it produces a measurable workflow benefit.',
      'faq-q5': 'Can you support the system after handoff?',
      'faq-a5': 'Yes. I prefer to separate the delivery scope from later improvement or support phases rather than starting with an open-ended maintenance commitment.',
      'faq-q6': 'Who owns the code and deliverables?',
      'faq-a6': 'Unless we agree otherwise, code and deliverables in the project scope are handed over so the client can continue operating and extending them. Detailed terms should be agreed before kickoff.',
      'faq-q7': 'Can you work with sensitive operational data?',
      'faq-a7': 'Yes, but access, permissions, and data boundaries should be explicit from the start. When possible, I prefer dummy-data validation and least-privilege access.',

      'contact-h2': 'Start with an email inquiry',
      'contact-intro': 'Email your current operational bottleneck and desired outcome.<br />I will review the scope and reply with the most practical first step.',
      'form-label-name': 'Name *',
      'form-label-email': 'Email *',
      'form-label-problem': 'What problem are you trying to improve? *',
      'form-label-type': 'Project type *',
      'form-label-timeline': 'Desired timeline *',
      'form-type-placeholder': 'Select one',
      'form-type-workflow': 'Workflow Automation',
      'form-type-tool': 'Internal Tool',
      'form-type-backend': 'Backend MVP',
      'form-type-unsure': 'Not sure yet',
      'form-error-name': 'Please enter your name.',
      'form-error-email': 'Please enter a valid email.',
      'form-error-problem': 'Please describe the problem.',
      'form-error-type': 'Please select a project type.',
      'form-error-timeline': 'Please enter a timeline.',
      'form-helper-label': 'These five points are enough for a useful first review:',
      'form-helper-1': '1–2 tasks still handled manually',
      'form-helper-2': 'Who handles them and how often',
      'form-helper-3': 'Your biggest operational bottleneck',
      'form-helper-4': 'One outcome you want from this phase',
      'form-helper-5': 'Target timeline or deadline',
      'form-submit': 'Submit inquiry',
      'form-success': 'Your inquiry has been sent. I will usually reply within 24–48 hours.',
      'form-fail': 'Failed to send. Please try again or use the email link below.',
      'contact-fallback': 'Inquiry email',
      'contact-reply-time': 'I usually send a first reply within 24–48 hours.',
      'contact-reassurance': 'The scope does not need to be fully defined. Your current workflow and desired outcome are enough to shape a first step.',

      'sticky-cta': 'Contact',
      'footer-tagline': 'Manual workflows into operational systems — AI only where it earns its place.',
      'prev-image': 'Previous image',
      'next-image': 'Next image',
      'ts-years-suffix': ' yrs',
      'experience-stat-3': 'Millions',
      'experience-stat-5': 'Legacy →',
      'form-timeline-placeholder': 'e.g. within 4 weeks',
      'nav-toggle-aria': 'Open menu'
    },

    ja: {
      'page-title': 'ProblemSolverArc — バックエンド · AIワークフロー · 運用システム フリーランサー',
      'meta-desc': '手作業のワークフローを運用可能なシステムに変え、必要な箇所だけにAIを組み込みます。社内ツール、ワークフロー自動化、バックエンドMVPのフリーランスサービス。',

      'nav-services': 'サービス',
      'nav-projects': '実績',
      'nav-why': '紹介',
      'nav-contact': 'お問い合わせ',

      'hero-label': 'Backend · AI Workflow · 運用システム',
      'hero-h1': 'スプレッドシート・Slack・手作業で回っているチーム向けに、必要な箇所だけAIを組み込んだ社内ツール・ワークフロー・バックエンドMVPを作ります。',
      'hero-sub': 'まず業務フローを構造化し、分類・要約・検索・意思決定支援などAIが実際に効果を出せる箇所だけに組み込みます。<br />見栄えの良いAIデモではなく、継続して運用できる最初のシステムを作ることに集中します。',
      'hero-why-now': 'コピー＆ペースト、手動確認、再整理に時間を使っているなら、すでに速度とエラー率の面でコストが発生している可能性があります。',
      'hero-btn-contact': 'プロジェクトを相談する',
      'hero-btn-services': 'サービスを見る',
      'hero-trust-micro': '通常24〜48時間以内に返信 · スコープが完全に決まっていなくてもご相談いただけます',

      'ts-label1': 'エンタープライズ バックエンド経験',
      'ts-label2': 'API応答速度改善',
      'ts-label3': '同時処理量改善',
      'ts-label4': '実運用環境での経験',
      'ts-val4': 'エンタープライズ · 公共機関',

      'services-eyebrow': 'サービス',
      'services-h2': 'どんな問題をどのように解決するか',
      'services-lead': '小さく始めて実際に使える運用システムを作ります。まず業務フローとスコープを固め、AIが効果を出せる箇所がある場合だけ組み込みます。',
      'service1-audience': '創業者 · オペレーター',
      'service1-problem': 'スプレッドシート、Slack、メールをつないだ反復業務を手作業で回し続けるのが難しい。',
      'service1-inc1': '現在の業務フロー整理',
      'service1-inc2': '承認・追跡・通知 + 必要に応じたAI分類・要約',
      'service1-inc3': '再実行可能なMVP + コード引き渡し',
      'service1-exc1': '全社システムの全面置き換え',
      'service1-exc2': 'スコープのない大型プロダクト企画',
      'service1-exc3': '無期限の運用代行',
      'service2-audience': '小規模チーム · スタートアップ',
      'service2-problem': '主要な運営業務をきちんとした社内ツールや管理画面に変えたい。',
      'service2-inc1': 'スコープ定義 · ワークフロー設計',
      'service2-inc2': '管理ロジック · データ処理',
      'service2-inc3': 'レビュー可能なMVP + コード引き渡し',
      'service2-exc1': '組織全体のシステム置き換え',
      'service2-exc2': 'スコープ未定のマルチチーム製品',
      'service2-exc3': 'オープンエンドの無期限サポート',
      'service3-audience': 'プロダクトチーム · 創業者',
      'service3-problem': 'API、バックエンドロジック、AI・外部サービス連携、運用パイプラインを素早く構築したい。',
      'service3-inc1': 'MVPスコープのバックエンドアーキテクチャ',
      'service3-inc2': 'API · データフロー · AI/外部サービス統合実装',
      'service3-inc3': '引き渡しを前提とした納品 + コード引き渡し',
      'service3-exc1': '全社規模のエンタープライズ変革',
      'service3-exc2': 'フロントエンド中心のUIデザイン',
      'service3-exc3': 'スコープのない長期保守',
      'includes-label': '提供内容',
      'excludes-label': '含まれないもの',
      'service-cta-contact': 'スコープ確認後に見積もり →',

      'who-eyebrow': '対象',
      'who-h2': 'こんなチームと最も合います',
      'who-lead': '小さく明確なスコープで、手作業を実際に運用可能なシステムに変えたいチームと相性が良いです。',
      'icp-profile1-title': '1〜10人規模のSaaSチーム',
      'icp-profile1-desc': '運用ボトルネックが見えているが、専任プラットフォームチームを置くにはまだ早い',
      'icp-profile2-title': 'ワークフローMVPを検証中の創業者',
      'icp-profile2-desc': 'スプレッドシートやメッセージベースの運用を2〜4週間で素早くシステム化したい',
      'icp-profile3-title': '承認・追跡・整理業務を手作業から移行したいチーム',
      'icp-profile3-desc': '反復業務を再利用可能な社内ツールやバックエンドフローに置き換えたい',
      'icp-notfit': 'ブランディング中心のマーケティングサイト、スコープ未定の大型プラットフォーム、長期常駐型ポジションは現在の対象外です。',

      'featured-eyebrow': '代表実績',
      'featured-h2': '手作業の商品調査を繰り返し実行可能な運用パイプラインへ',
      'case-baseline-label': 'Baseline',
      'case-baseline': '国をまたぐ商品機会調査は、スプレッドシート・手動検索・基準の再整理に分散しがちです。基準が少し変わるだけで最初からやり直しになり、結果も担当者ごとにばらつきます。',
      'case-change-label': 'What changed',
      'case-change': '価格収集、商品マッチング、マージン計算、レポート出力を一つの再実行可能なパイプラインに構造化しました。入力条件を変えて同じフローを再実行でき、レビュー用ダッシュボードと構造化出力も含めました。',
      'case-result-label': 'Result',
      'case-result': '調査を「一度やって終わり」の作業から、再実行可能な運用フローに変えました。収集→処理→レビュー→レポートを分離し、基準変更時にも同じ流れを再利用できます。',
      'case-fit-label': 'Good fit',
      'case-fit': '市場調査、承認、照合作業など、人が繰り返している運用プロセスを小さな再利用可能システムに変えたいチームに適したパターンです。',

      'proof-caption-1': 'Market Overview — スキャン結果と市場比較データ',
      'proof-caption-2': 'Product Opportunities — マージン基準の商品機会リスト',
      'proof-caption-3': 'Market Intelligence — 市場分析インサイト',
      'proof-points-label': 'この実績が証明する能力',
      'proof-point-1': '手作業プロセス → 繰り返し実行可能な構造化ワークフロー',
      'proof-point-2': 'データ収集 · 処理 · レビュー · レポートパイプライン設計',
      'proof-point-3': '管理ダッシュボード · バックオフィスインターフェース実装',
      'proof-point-4': '明確なスコープと運用ロジックを持つバックエンドMVP',

      'portfolio-eyebrow': '追加の検証済み実績',
      'card-seoulgyeol-desc': '課題: 事前診断とレポート送付が手作業で、初回対応が遅れていました。システム: 同意取得アンケート→スコア化→レポート→メール配信を自動化。',
      'card-seoulgyeol-proof': '運用成果: 相談準備が速くなり、顧客ごとのレポート配信を漏れなく安定運用できるようになりました。',
      'card-restricted-desc': '課題: 機微な運用依頼がチャットに埋もれ、承認と追跡が不安定でした。システム: 承認済みSlack依頼のみを構造化された運用レコードに変換。',
      'card-restricted-proof': '運用成果: 依頼の漏れ・重複を減らし、監査可能な履歴で後続処理を高速化しました。',
      'card-papyrus-desc': '課題: チーム知識が文書とメッセージに分散していました。システム: リアルタイム共同編集、権限構造、AI支援フローを組み合わせたチームWikiを構築。',
      'card-papyrus-proof': '運用成果: 情報の再整理を減らし、一つの基準を中心にチームがより速く協業できる構造を作りました。',

      'why-eyebrow': '強み',
      'why-h2': '一般的なWeb制作より、運用システムに近い理由',
      'why-lead': '4.8年間、エンタープライズ・公共分野のプロダクションシステムで積んだ経験をベースに作業します。デモではなく実運用環境の基準で設計します。',
      'why-card1-title': 'API応答速度 約30%改善',
      'why-card1-desc': 'サービス分離とアーキテクチャ再構成によりコアAPIの応答速度を約30%短縮。パフォーマンス問題を根本から対処します。',
      'why-card2-title': '同時処理量20倍改善',
      'why-card2-desc': '認証/セッション経路のDBコネクションプールのボトルネックを解消し、同時処理量を100から2,000+に改善しました。',
      'why-card3-title': 'Oracle → MySQL無停止移行',
      'why-card3-desc': '数百万件のレコードをサービス継続性を維持しながらOracleからMySQLへ移行しました。',
      'why-card4-title': '認証 · セキュリティシステム',
      'why-card4-desc': 'Java · Quarkus · KeycloakベースのOAuth 2.0 SSOシステムを設計・実装。認証境界を実務環境で扱ってきました。',
      'why-card5-title': '段階的モダナイゼーション',
      'why-card5-desc': 'モノリシックプラットフォームをSpring Bootベースのモジュール型サービスへ段階的に分離し、運用を止めずに改善しました。',
      'why-card6-title': 'AIを機能ラベルではなくワークフローの一部に',
      'why-card6-desc': 'LLMを独立したデモとして置かず、入力検証、抽出・分類、検索/RAG、人による確認ステップに接続し、運用フローの中で使います。',

      'engagement-eyebrow': '進め方',
      'engagement-h2': 'このように進めます',
      'engagement-timeline-title': '期間',
      'engagement-timeline-desc': '通常2〜6週間で閉じられる、小さく明確なスコープと最も相性が良いです。最初のフェーズでは全体を大きく作るより、実運用に直接役立つ一つのコアフローを先に完成させます。',
      'engagement-deliverables-title': '成果物',
      'engagement-deliverables-desc': '動作するMVPまたはスコープが明確な実装物を提供します。通常、コアバックエンドロジック、ワークフロー構造、必要に応じた社内UI/管理画面、引き渡し説明を含みます。',
      'engagement-communication-title': 'コミュニケーション',
      'engagement-communication-desc': 'メールとドキュメント中心です。進捗はテキスト、スクリーンショット、短いデモ動画で共有し、必要な場合だけ短いミーティングを行います。',
      'engagement-scope-title': 'スコープ管理',
      'engagement-scope-desc': '最初からスコープを小さく固定します。途中の新しい要望は無限に追加せず、現在フェーズと次フェーズに分けて管理します。',

      'faq-eyebrow': 'FAQ',
      'faq-h2': 'よくあるご質問',
      'faq-q1': 'スコープがまだ完全に決まっていなくても相談できますか？',
      'faq-a1': 'はい。最初に必要なのは全機能一覧より、どの業務がまだ手作業で、どこが一番詰まっていて、どんな結果を望むかです。それだけでも最初のスコープを整理できます。',
      'faq-q2': '小さなプロジェクトも対応しますか？',
      'faq-a2': 'はい。むしろ2〜6週間程度で閉じられる小さく明確なプロジェクトと相性が良いです。大きなシステム全体を一度に作るより、すぐ使える一つのコアフローを先に完成させます。',
      'faq-q3': 'ミーティングはどれくらい必要ですか？',
      'faq-a3': '基本はメールとドキュメント中心です。進捗もテキスト、スクリーンショット、短いデモで共有します。短いミーティングが必要な場合はありますが、会議中心の進め方ではありません。',
      'faq-q4': 'どんな技術スタックを使いますか？',
      'faq-a4': '強みはバックエンド、運用システム、社内ツール、ワークフロー構造化です。プロジェクト目的に合わせてスタックを選び、AIも効果がある箇所だけに選択的に適用します。',
      'faq-q5': '引き渡し後のサポートも可能ですか？',
      'faq-a5': '可能です。ただし最初から無期限の運用契約にするより、現在の納品範囲と後続の改善フェーズを分けて考える方が明確です。',
      'faq-q6': 'コードや成果物の所有権はどうなりますか？',
      'faq-a6': '別途合意がなければ、プロジェクト範囲に含まれるコードと成果物は、クライアント側で運用・拡張できる形で引き渡すことを基本とします。詳細条件は開始前に明確にします。',
      'faq-q7': '機微な運用データも扱えますか？',
      'faq-a7': '可能です。ただし実データ、権限、アクセス範囲は初期に明確にする必要があります。可能な場合はダミーデータ検証と最小権限アクセスを優先します。',

      'contact-h2': 'メールでのお問い合わせから始めましょう',
      'contact-intro': '現在の運用ボトルネックと望む結果をメールでお送りください。<br />スコープを確認し、最も現実的な最初のステップをご返信します。',
      'form-label-name': 'お名前 *',
      'form-label-email': 'メールアドレス *',
      'form-label-problem': '改善したい問題は何ですか？ *',
      'form-label-type': 'プロジェクトの種類 *',
      'form-label-timeline': '希望スケジュール *',
      'form-type-placeholder': '選択してください',
      'form-type-workflow': 'ワークフロー自動化',
      'form-type-tool': '社内ツール',
      'form-type-backend': 'バックエンドMVP',
      'form-type-unsure': 'まだ決まっていない',
      'form-error-name': 'お名前を入力してください。',
      'form-error-email': '有効なメールアドレスを入力してください。',
      'form-error-problem': '内容を入力してください。',
      'form-error-type': '種類を選択してください。',
      'form-error-timeline': 'スケジュールを入力してください。',
      'form-helper-label': '最初の確認には次の5点で十分です。',
      'form-helper-1': 'まだ手作業で処理している業務を1〜2件',
      'form-helper-2': '誰が、どの頻度で担当しているか',
      'form-helper-3': '現在の最大ボトルネック1つ',
      'form-helper-4': 'このフェーズで得たい結果1つ',
      'form-helper-5': '希望時期または締切',
      'form-submit': 'お問い合わせを送る',
      'form-success': 'お問い合わせが送信されました。通常24〜48時間以内にご返信します。',
      'form-fail': '送信に失敗しました。もう一度お試しいただくか、下のメールリンクをご利用ください。',
      'contact-fallback': 'お問い合わせメール',
      'contact-reply-time': '通常24〜48時間以内に初回返信をお送りします。',
      'contact-reassurance': 'スコープがまだ具体的でなくても問題ありません。現在の業務フローと望む結果だけでも最初のステップを整理できます。',

      'sticky-cta': 'お問い合わせ',
      'footer-tagline': '手作業のワークフローを運用システムへ — AIは必要な箇所だけに。',
      'prev-image': '前の画像',
      'next-image': '次の画像',
      'ts-years-suffix': '年',
      'experience-stat-3': '数百万件',
      'experience-stat-5': 'レガシー→',
      'form-timeline-placeholder': '例：4週間以内',
      'nav-toggle-aria': 'メニューを開く'
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

    document.documentElement.lang = lang;
    document.title = dict['page-title'];

    var meta = document.querySelector('meta[name="description"]');
    if (meta) meta.setAttribute('content', dict['meta-desc']);

    document.querySelectorAll('[data-i18n]').forEach(function (el) {
      var key = el.getAttribute('data-i18n');
      if (dict[key] !== undefined) el.textContent = dict[key];
    });

    document.querySelectorAll('[data-i18n-html]').forEach(function (el) {
      var key = el.getAttribute('data-i18n-html');
      if (dict[key] !== undefined) el.innerHTML = dict[key];
    });

    document.querySelectorAll('[data-i18n-aria]').forEach(function (el) {
      var key = el.getAttribute('data-i18n-aria');
      if (dict[key] !== undefined) el.setAttribute('aria-label', dict[key]);
    });

    document.querySelectorAll('[data-i18n-placeholder]').forEach(function (el) {
      var key = el.getAttribute('data-i18n-placeholder');
      if (dict[key] !== undefined) el.setAttribute('placeholder', dict[key]);
    });

    document.querySelectorAll('.lang-btn').forEach(function (btn) {
      btn.classList.toggle('lang-btn--active', btn.getAttribute('data-lang') === lang);
    });

    localStorage.setItem(STORAGE_KEY, lang);
  }

  document.addEventListener('DOMContentLoaded', function () {
    applyLang(getInitialLang());

    document.querySelectorAll('.lang-btn').forEach(function (btn) {
      btn.addEventListener('click', function () {
        applyLang(btn.getAttribute('data-lang'));
      });
    });
  });
})();