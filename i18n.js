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
      'hero-h1': '수동으로 돌아가던 업무를<br />반복 실행 가능한 시스템으로 바꿉니다.',
      'hero-sub': '스프레드시트, Slack 메시지, 수작업 정리를 구조화된 워크플로우·내부 도구·백엔드 파이프라인으로 전환합니다.<br />4.8년 엔터프라이즈·공공 부문 백엔드 경력 기반.',
      'hero-btn-contact': '프로젝트 문의하기',
      'hero-btn-services': '서비스 보기',

      'ts-label1': '엔터프라이즈 백엔드 경력',
      'ts-label2': 'API 응답속도 개선',
      'ts-label3': '동시 처리량 개선',
      'ts-label4': '실제 운영 환경 경험',
      'ts-val4': '엔터프라이즈 · 공공',

      'services-eyebrow': '서비스',
      'services-h2': '어떤 걸 만들어 드리나요',
      'services-lead': '범위를 함께 확인한 후 견적을 제안합니다. 아래는 주요 서비스 유형입니다.',
      'service1-audience': '파운더 · 오퍼레이터',
      'service1-problem': '아이디어나 서비스를 검증할 랜딩 페이지가 필요한데, 완성도 있게 만들 시간이 없다.',
      'service1-inc1': '구조 설계 · CTA 최적화',
      'service1-inc2': '증거 자산 통합',
      'service1-inc3': '배포 가능한 구현 + 코드 인계',
      'service1-exc1': '브랜딩 · 로고 · 디자인 시안',
      'service1-exc2': '대형 마케팅 사이트',
      'service1-exc3': '지속 마케팅 운영',
      'service2-audience': '소규모 팀 · 스타트업',
      'service2-problem': 'Slack이나 스프레드시트로 처리하던 핵심 업무를 제대로 된 내부 도구로 바꾸고 싶다.',
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
      'who-h2': '이런 분께 맞습니다',
      'who-lead': '소규모 팀과 오퍼레이터 — 더 명확한 시스템, 더 빠른 실행이 필요한 분들과 잘 맞습니다.',
      'who-fit-label': '잘 맞는 상황',
      'who-fit-1': '핵심 업무가 아직 수작업 · 스프레드시트로 돌아가고 있다',
      'who-fit-2': '내부 도구 · 어드민 패널이 필요하지만 개발자 고용은 과도하다',
      'who-fit-3': '백엔드 MVP를 빠르게 만들어 시장 반응을 확인해야 한다',
      'who-fit-4': '레거시 워크플로우를 점진적으로 개선하고 싶다',
      'who-fit-5': 'Slack 또는 노션으로 운영하던 걸 시스템으로 만들고 싶다',
      'who-notfit-label': '맞지 않는 상황',
      'who-notfit-1': '범위가 아직 정해지지 않은 대형 플랫폼',
      'who-notfit-2': '브랜딩 · 마케팅 사이트 제작',
      'who-notfit-3': '풀타임 팀원이 필요한 장기 embedded 포지션',
      'who-notfit-4': '범위 없는 무기한 지원 계약',

      'featured-eyebrow': '대표 사례',
      'featured-h2': '수작업 상품 조사를 운영 파이프라인으로',
      'featured-problem': '국가 간 상품 기회 분석은 보통 스프레드시트와 수작업 조사에 머뭅니다. 기준이 달라지면 처음부터 다시 해야 합니다.',
      'featured-solution': '가격 수집 · 매칭 · 마진 계산 · 리포트 출력을 반복 가능한 파이프라인으로 구조화했습니다. 설정을 바꾸면 언제든 같은 흐름으로 재실행됩니다.',

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

      'approach-eyebrow': '작업 방식',
      'approach-h2': '어떻게 진행되나요',
      'step1-title': '범위 확인',
      'step1-desc': '이메일로 프로젝트 개요를 공유해 주시면 범위를 검토합니다. 적합하면 킥오프 미팅을 제안합니다.',
      'step2-title': '구조 설계',
      'step2-desc': '워크플로우와 데이터 흐름을 먼저 정리합니다. 불필요한 기능을 걷어내고 핵심에 집중합니다.',
      'step3-title': '구축 · 검증',
      'step3-desc': '백엔드 중심으로 구조적으로 개발합니다. 중간 검토 지점을 두어 방향을 맞춰갑니다.',
      'step4-title': '인계',
      'step4-desc': '소스코드 + 구조 설명과 함께 납품합니다. 이후 확장이 가능한 형태로 전달합니다.',

      'contact-h2': '간단한 이메일로 시작하세요',
      'contact-intro': '프로젝트를 고려 중이라면 아래 내용을 적어 보내주세요.<br />범위를 확인하고 적합하면 바로 다음 단계를 제안합니다.',
      'contact-template-label': '이메일에 포함할 내용',
      'contact-template-1': '프로젝트 유형',
      'contact-template-2': '해결하고 싶은 문제',
      'contact-template-3': '필요하다고 생각하는 기능 2–3가지',
      'contact-template-4': '원하는 일정',
      'contact-template-5': '예산 범위 (대략적으로)',
      'contact-reassurance': '24–48시간 내 회신합니다. 범위가 맞으면 명확한 다음 단계를 제안합니다. 아직 구체적이지 않아도 괜찮습니다.',
      'contact-note': '현재 이메일로만 문의를 받습니다.',

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
      'hero-h1': 'Replace manual operations<br />with repeatable, structured systems.',
      'hero-sub': 'Turning spreadsheets, Slack messages, and manual workflows into structured workflows, internal tools, and backend pipelines.<br />Based on 4.8 years of enterprise & public-sector backend experience.',
      'hero-btn-contact': 'Discuss a project',
      'hero-btn-services': 'View services',

      'ts-label1': 'enterprise backend experience',
      'ts-label2': 'API latency reduction',
      'ts-label3': 'concurrency improvement',
      'ts-label4': 'real production environments',
      'ts-val4': 'Enterprise · Public Sector',

      'services-eyebrow': 'Services',
      'services-h2': 'What I build',
      'services-lead': 'I review scope together, then propose a quote. These are the main service types.',
      'service1-audience': 'Founders · Operators',
      'service1-problem': 'You need a landing page to validate an idea or service, but don\'t have time to make it polished.',
      'service1-inc1': 'Structure design · CTA optimization',
      'service1-inc2': 'Proof asset integration',
      'service1-inc3': 'Deployable implementation + code handoff',
      'service1-exc1': 'Branding · logo · design concepts',
      'service1-exc2': 'Large marketing sites',
      'service1-exc3': 'Ongoing marketing operations',
      'service2-audience': 'Small teams · Startups',
      'service2-problem': 'You want to replace key work currently done via Slack or spreadsheets with a proper internal tool.',
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
      'who-h2': 'Who I work best with',
      'who-lead': 'Small teams and operators — I work best with people who need clearer systems and faster execution.',
      'who-fit-label': 'Good fit',
      'who-fit-1': 'Core work still running on manual processes or spreadsheets',
      'who-fit-2': 'Need internal tools / admin panel but hiring a dev is excessive',
      'who-fit-3': 'Need a backend MVP fast to test market response',
      'who-fit-4': 'Looking to incrementally improve legacy workflows',
      'who-fit-5': 'Want to turn Slack- or Notion-based ops into a real system',
      'who-notfit-label': 'Not a fit',
      'who-notfit-1': 'Large platform with undefined scope',
      'who-notfit-2': 'Branding or marketing site projects',
      'who-notfit-3': 'Long-term embedded position needing a full-time team member',
      'who-notfit-4': 'Indefinite support contracts without scope',

      'featured-eyebrow': 'Featured Case',
      'featured-h2': 'Manual product research → operational pipeline',
      'featured-problem': 'Cross-border product opportunity analysis usually stays stuck in spreadsheets and one-off manual research. Change the criteria and you start over.',
      'featured-solution': 'Price collection, matching, margin calculation, and report output were structured into a repeatable pipeline. Change the config, re-run the same flow anytime.',

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

      'approach-eyebrow': 'Process',
      'approach-h2': 'How it works',
      'step1-title': 'Scope review',
      'step1-desc': 'Share a project overview by email and I\'ll review the scope. If it\'s a fit, I\'ll propose a kickoff.',
      'step2-title': 'Structure design',
      'step2-desc': 'Workflows and data flows first. Strip out unnecessary features and focus on the core.',
      'step3-title': 'Build & verify',
      'step3-desc': 'Backend-focused, structured development. Checkpoints along the way to stay aligned.',
      'step4-title': 'Handoff',
      'step4-desc': 'Delivered with source code and structural notes. Handed off in a form ready for future extension.',

      'contact-h2': 'Start with a simple email',
      'contact-intro': 'If you\'re considering a project, send a short note with the points below.<br />I\'ll review the scope and suggest the next step if it\'s a fit.',
      'contact-template-label': 'What to include in your email',
      'contact-template-1': 'Project type',
      'contact-template-2': 'The problem you want to solve',
      'contact-template-3': '2–3 features you think are needed',
      'contact-template-4': 'Desired timeline',
      'contact-template-5': 'Approximate budget range',
      'contact-reassurance': 'I reply within 24–48 hours. If the scope fits I\'ll suggest a clear next step. It\'s fine if things aren\'t fully defined yet.',
      'contact-note': 'Currently accepting inquiries via email only.',

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
      'hero-h1': '手動で動いていた業務を<br />繰り返し実行できるシステムに変えます。',
      'hero-sub': 'スプレッドシート、Slackメッセージ、手作業の整理を構造化されたワークフロー・社内ツール・バックエンドパイプラインに転換します。<br />4.8年のエンタープライズ・公共機関バックエンド経験に基づきます。',
      'hero-btn-contact': 'プロジェクトを相談する',
      'hero-btn-services': 'サービスを見る',

      'ts-label1': 'エンタープライズ バックエンド経験',
      'ts-label2': 'API応答速度改善',
      'ts-label3': '同時処理量改善',
      'ts-label4': '実運用環境での経験',
      'ts-val4': 'エンタープライズ · 公共機関',

      'services-eyebrow': 'サービス',
      'services-h2': '何を作りますか',
      'services-lead': 'スコープを一緒に確認してから見積もりを提案します。以下は主なサービス種別です。',
      'service1-audience': 'ファウンダー · オペレーター',
      'service1-problem': 'アイデアやサービスを検証するランディングページが必要だが、完成度高く作る時間がない。',
      'service1-inc1': '構造設計 · CTA最適化',
      'service1-inc2': '証拠資産の統合',
      'service1-inc3': 'デプロイ可能な実装 + コード引き渡し',
      'service1-exc1': 'ブランディング · ロゴ · デザイン案',
      'service1-exc2': '大規模マーケティングサイト',
      'service1-exc3': '継続的なマーケティング運用',
      'service2-audience': '小規模チーム · スタートアップ',
      'service2-problem': 'Slackやスプレッドシートでやっていたコアなことをちゃんとしたツールに変えたい。',
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
      'who-h2': 'こんな方に向いています',
      'who-lead': '小規模チームとオペレーター — より明確なシステム、より速い実行が必要な方に合っています。',
      'who-fit-label': '向いている状況',
      'who-fit-1': 'コア業務がまだ手作業・スプレッドシートで動いている',
      'who-fit-2': '社内ツール・管理パネルが必要だが開発者を雇うのは過剰',
      'who-fit-3': 'バックエンドMVPを素早く作って市場反応を確認したい',
      'who-fit-4': 'レガシーワークフローを段階的に改善したい',
      'who-fit-5': 'SlackやNotionで運用していたものをシステム化したい',
      'who-notfit-label': '向いていない状況',
      'who-notfit-1': 'スコープが定まっていない大型プラットフォーム',
      'who-notfit-2': 'ブランディング · マーケティングサイト制作',
      'who-notfit-3': 'フルタイムメンバーが必要な長期embedded',
      'who-notfit-4': 'スコープのない無期限サポート契約',

      'featured-eyebrow': '代表実績',
      'featured-h2': '手作業の商品調査を運用パイプラインへ',
      'featured-problem': '国際間の商品機会分析は通常スプレッドシートと手作業の調査に留まります。基準が変われば最初からやり直しです。',
      'featured-solution': '価格収集・マッチング・マージン計算・レポート出力を繰り返し可能なパイプラインに構造化しました。設定を変えればいつでも同じフローで再実行できます。',

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

      'approach-eyebrow': '作業方法',
      'approach-h2': 'どのように進めますか',
      'step1-title': 'スコープ確認',
      'step1-desc': 'メールでプロジェクト概要を共有いただければスコープを検討します。適合すればキックオフを提案します。',
      'step2-title': '構造設計',
      'step2-desc': 'ワークフローとデータフローをまず整理します。不要な機能を取り除きコアに集中します。',
      'step3-title': '構築 · 検証',
      'step3-desc': 'バックエンド中心で構造的に開発します。中間チェックポイントを設けて方向性を合わせます。',
      'step4-title': '引き渡し',
      'step4-desc': 'ソースコード + 構造説明とともに納品します。今後の拡張が可能な形で引き渡します。',

      'contact-h2': 'シンプルなメールから始めましょう',
      'contact-intro': 'プロジェクトを検討中であれば、以下の内容をメールでお送りください。<br />スコープを確認し、適合すればすぐに次のステップをご提案します。',
      'contact-template-label': 'メールに含める内容',
      'contact-template-1': 'プロジェクトの種類',
      'contact-template-2': '解決したい問題',
      'contact-template-3': '必要だと思う機能2〜3つ',
      'contact-template-4': '希望するスケジュール',
      'contact-template-5': '予算の目安',
      'contact-reassurance': '24〜48時間以内にご返信します。スコープが合えば明確な次のステップをご提案します。まだ具体的でなくても大丈夫です。',
      'contact-note': '現在メールのみでお問い合わせを受け付けています。',

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
