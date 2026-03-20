/**
 * ProblemSolverArc — Lightweight i18n (KO / EN / JA)
 * No dependencies. Stores preference in localStorage.
 */
(function () {
  'use strict';

  var translations = {
    ko: {
      'page-title': 'ProblemSolverArc — 운영 시스템 빌더 포트폴리오',
      'meta-desc': '운영 문제를 반복 가능한 시스템으로 구조화합니다. 포트폴리오와 프로젝트 증거를 통해 확인하세요.',

      'nav-projects': '프로젝트',
      'nav-approach': '작업 방식',
      'nav-contact': '문의하기',

      'hero-label': '운영 시스템 빌더',
      'hero-h1': '운영 문제를 실행 가능한<br />파이프라인으로 전환합니다.',
      'hero-sub': '수작업 조사·정리를 자동화된 스캔, 분석, 리포트 흐름으로 바꿉니다.<br />클라이언트는 반복 실행 가능한 도구와 검증된 산출물을 받습니다.',
      'hero-btn-projects': '대표 프로젝트 보기',
      'hero-btn-contact': '문의하기',

      'trust-name': '전동윤 · ProblemSolverArc',
      'trust-desc': '운영 워크플로우, 내부 도구, 백엔드 중심 MVP를 설계하고 구현합니다. 범위 정의부터 검증 가능한 산출물까지, 구조적으로 접근합니다.',

      'featured-eyebrow': '대표 프로젝트',
      'credibility-line': '각 프로젝트는 구현 기반 증거 자산과 저장소 기록으로 검증됩니다.',
      'featured-tagline': '한국 도매 상품을 여러 시장에서 비교하고, 마진 분석 결과를 구조화된 리포트와 대시보드로 확인할 수 있는 스캐닝·분석 도구',
      'featured-body': '국가 간 상품 기회 분석은 보통 수작업 중심의 일회성 조사에 머무릅니다. 이 프로젝트는 가격 조사, 마진 계산, 근거 정리를 반복 가능한 파이프라인으로 구조화하여, 같은 기준으로 다시 실행할 수 있는 운영 워크플로우를 구현합니다.',

      'proof-caption-1': 'Market Overview — 스캔 결과와 시장 비교 데이터를 대시보드에서 확인',
      'proof-caption-2': 'Product Opportunities — 마진 기준 상품 기회 리스트',
      'proof-caption-3': 'Market Intelligence — 시장 분석 및 인사이트 뷰',

      'proof-label-pipeline': '파이프라인',
      'proof-value-pipeline': '설정 → 수집 → 매칭 → 마진 분석 → 리포트 출력',
      'proof-label-collection': '수집 구조',
      'proof-value-collection': '비동기 팬아웃, 국가/플랫폼별 세마포어 동시성 제어',
      'proof-label-output': '출력',
      'proof-value-output': 'JSON, Excel, AI 프롬프트, 대시보드 연동',
      'featured-core-msg': '반복 가능한 스캔 흐름. 구조화된 운영 산출물.',

      'portfolio-eyebrow': '포트폴리오',
      'portfolio-h2': '함께 구축한 프로젝트',

      'card-seoulgyeol-desc': '다국어 피부 분석 MVP. 동의 기반 설문 → 점수 산출 → 리포트 생성 → 이메일 전달 파이프라인.',
      'card-seoulgyeol-proof': '저장소 증거: 설문→분석→리포트 전체 흐름 구현, 동의 기반 데이터 처리, 다국어 이메일 전송 구조 확인됨',
      'card-restricted-desc': '승인된 Slack 채널의 요청을 구조화된 운영 객체로 전환. 서명 검증, 중복 방지, 감사 로그 포함.',
      'card-restricted-proof': '저장소 증거: 웹훅 서명 검증, 채널 허용목록 제어, 감사 로그, Vitest 통합 테스트 구조 확인됨',
      'card-papyrus-desc': '실시간 협업과 AI 기능을 갖춘 팀 위키. Socket.IO + Yjs 기반 공동 편집, RBAC, 테스트 구조 포함.',
      'card-papyrus-proof': '저장소 증거: Yjs + Socket.IO 실시간 협업, Drizzle 스키마/마이그레이션, Vitest + Playwright 테스트 구조 확인됨',

      'approach-eyebrow': '작업 방식',
      'approach-h2': '구축 프로세스',
      'step1-title': '범위 정의',
      'step1-desc': '무엇을 만들지 먼저 명확하게 합니다. 불필요한 기능을 제거하고 핵심에 집중합니다.',
      'step2-title': '구축',
      'step2-desc': '워크플로우와 구조를 먼저 설계하고, 백엔드 중심으로 구조적으로 개발합니다.',
      'step3-title': '검증',
      'step3-desc': '실제로 작동하는지 확인합니다. 배포 가능한 상태로 결과물을 만듭니다.',
      'step4-title': '인계',
      'step4-desc': '소스코드와 함께 전달합니다. 이후 확장이 가능한 구조로 넘깁니다.',

      'services-eyebrow': '서비스 범위',
      'service1-desc': '아이디어 검증과 문의 유입을 위한 경량 랜딩 페이지',
      'service2-desc': '운영 워크플로우를 정리하는 내부 도구 또는 어드민 MVP',
      'service3-desc': '실제 운영 가능한 백엔드 중심 MVP를 단기 스프린트로 구축',

      'contact-h2': '문의하기',
      'contact-cta': '프로젝트에 대해 이야기하고 싶으시면 이메일을 보내주세요.<br />프로젝트 유형, 목표, 일정을 간단히 알려주시면 됩니다.',
      'contact-reassurance': '24–48시간 내 회신합니다. 목표, 현재 문제, 일정을 간단히 포함해 주세요.',
      'contact-note': '현재 이메일을 통해서만 문의를 받고 있습니다.',

      'footer-tagline': '운영 문제를 시스템으로 — 포트폴리오로 증명합니다.',

      'prev-image': '이전 이미지',
      'next-image': '다음 이미지'
    },

    en: {
      'page-title': 'ProblemSolverArc — Operations System Builder Portfolio',
      'meta-desc': 'Structuring operational problems into repeatable systems. Verified through portfolio and project evidence.',

      'nav-projects': 'Projects',
      'nav-approach': 'Approach',
      'nav-contact': 'Contact',

      'hero-label': 'Operations System Builder',
      'hero-h1': 'Turning operational problems<br />into executable pipelines.',
      'hero-sub': 'Replacing manual research and cleanup with automated scan, analysis, and reporting flows.<br />Clients receive repeatable tools and verified deliverables.',
      'hero-btn-projects': 'View Featured Project',
      'hero-btn-contact': 'Contact',

      'trust-name': 'Dongyuon Jeon · ProblemSolverArc',
      'trust-desc': 'I design and build operational workflows, internal tools, and backend-focused MVPs. From scope definition to verifiable deliverables — structured approach throughout.',

      'featured-eyebrow': 'Featured Project',
      'credibility-line': 'Each project is backed by implementation-based proof assets and repository records.',
      'featured-tagline': 'A scanning and analysis tool that compares Korean wholesale products across multiple markets, with margin analysis results delivered as structured reports and dashboards.',
      'featured-body': 'Cross-border product opportunity analysis is typically limited to one-off manual research. This project structures price research, margin calculation, and evidence gathering into a repeatable pipeline — an operational workflow that can be re-executed with the same criteria.',

      'proof-caption-1': 'Market Overview — Scan results and market comparison data on the dashboard',
      'proof-caption-2': 'Product Opportunities — Opportunity list ranked by margin',
      'proof-caption-3': 'Market Intelligence — Market analysis and insights view',

      'proof-label-pipeline': 'Pipeline',
      'proof-value-pipeline': 'Config → Collection → Matching → Margin Analysis → Report Output',
      'proof-label-collection': 'Collection',
      'proof-value-collection': 'Async fan-out, per-country/platform semaphore concurrency control',
      'proof-label-output': 'Output',
      'proof-value-output': 'JSON, Excel, AI Prompts, Dashboard Integration',
      'featured-core-msg': 'Repeatable scan flow. Structured operational output.',

      'portfolio-eyebrow': 'Portfolio',
      'portfolio-h2': 'Projects Built Together',

      'card-seoulgyeol-desc': 'Multilingual skin analysis MVP. Consent-based survey → scoring → report generation → email delivery pipeline.',
      'card-seoulgyeol-proof': 'Repo evidence: Full survey→analysis→report flow, consent-based data handling, multilingual email delivery structure verified.',
      'card-restricted-desc': 'Converts requests from approved Slack channels into structured ops objects. Includes signature verification, deduplication, and audit logging.',
      'card-restricted-proof': 'Repo evidence: Webhook signature verification, channel allowlist control, audit log, Vitest integration test structure verified.',
      'card-papyrus-desc': 'Team wiki with real-time collaboration and AI features. Socket.IO + Yjs co-editing, RBAC, and test structure included.',
      'card-papyrus-proof': 'Repo evidence: Yjs + Socket.IO real-time collaboration, Drizzle schema/migrations, Vitest + Playwright test structure verified.',

      'approach-eyebrow': 'Approach',
      'approach-h2': 'Build Process',
      'step1-title': 'Scope',
      'step1-desc': 'Define what to build first. Remove unnecessary features and focus on the core.',
      'step2-title': 'Build',
      'step2-desc': 'Design workflows and structure first, then develop with a backend-focused approach.',
      'step3-title': 'Verify',
      'step3-desc': 'Confirm it actually works. Deliver results in a deployable state.',
      'step4-title': 'Handoff',
      'step4-desc': 'Deliver with source code. Hand over in a structure ready for future extension.',

      'services-eyebrow': 'Services',
      'service1-desc': 'Lightweight landing pages for idea validation and inquiry generation',
      'service2-desc': 'Internal tools or admin MVPs to organize operational workflows',
      'service3-desc': 'Production-ready backend MVPs built in short sprints',

      'contact-h2': 'Contact',
      'contact-cta': 'Want to discuss a project? Send me an email.<br />Include your project type, goals, and timeline.',
      'contact-reassurance': 'Reply within 24–48 hours. Include your goal, current problem, and timeline.',
      'contact-note': 'Currently accepting inquiries via email only.',

      'footer-tagline': 'Operational problems into systems — proven through portfolio.',

      'prev-image': 'Previous image',
      'next-image': 'Next image'
    },

    ja: {
      'page-title': 'ProblemSolverArc — 運用システムビルダーポートフォリオ',
      'meta-desc': '運用課題を繰り返し可能なシステムに構造化します。ポートフォリオとプロジェクト証拠でご確認ください。',

      'nav-projects': 'プロジェクト',
      'nav-approach': 'アプローチ',
      'nav-contact': 'お問い合わせ',

      'hero-label': '運用システムビルダー',
      'hero-h1': '運用課題を実行可能な<br />パイプラインに転換します。',
      'hero-sub': '手作業の調査・整理を自動化されたスキャン、分析、レポートフローに置き換えます。<br />クライアントには繰り返し実行可能なツールと検証済みの成果物を提供します。',
      'hero-btn-projects': '代表プロジェクトを見る',
      'hero-btn-contact': 'お問い合わせ',

      'trust-name': 'Dongyuon Jeon · ProblemSolverArc',
      'trust-desc': '運用ワークフロー、社内ツール、バックエンド中心のMVPを設計・実装します。スコープ定義から検証可能な成果物まで、構造的にアプローチします。',

      'featured-eyebrow': '代表プロジェクト',
      'credibility-line': '各プロジェクトは実装ベースの証拠資産とリポジトリ記録で検証されています。',
      'featured-tagline': '韓国卸売商品を複数市場で比較し、マージン分析結果を構造化レポートとダッシュボードで確認できるスキャニング・分析ツール',
      'featured-body': '国際間の商品機会分析は通常、手作業による一回限りの調査に留まります。本プロジェクトは価格調査、マージン計算、根拠整理を繰り返し実行可能なパイプラインに構造化し、同じ基準で再実行できる運用ワークフローを実現します。',

      'proof-caption-1': 'Market Overview — スキャン結果と市場比較データをダッシュボードで確認',
      'proof-caption-2': 'Product Opportunities — マージン基準の商品機会リスト',
      'proof-caption-3': 'Market Intelligence — 市場分析とインサイトビュー',

      'proof-label-pipeline': 'パイプライン',
      'proof-value-pipeline': '設定 → 収集 → マッチング → マージン分析 → レポート出力',
      'proof-label-collection': '収集構造',
      'proof-value-collection': '非同期ファンアウト、国/プラットフォーム別セマフォ同時実行制御',
      'proof-label-output': '出力',
      'proof-value-output': 'JSON、Excel、AIプロンプト、ダッシュボード連携',
      'featured-core-msg': '繰り返し可能なスキャンフロー。構造化された運用成果物。',

      'portfolio-eyebrow': 'ポートフォリオ',
      'portfolio-h2': '共に構築したプロジェクト',

      'card-seoulgyeol-desc': '多言語肌分析MVP。同意ベースのアンケート → スコア算出 → レポート生成 → メール配信パイプライン。',
      'card-seoulgyeol-proof': 'リポジトリ証拠: アンケート→分析→レポート全フロー実装、同意ベースのデータ処理、多言語メール配信構造確認済み',
      'card-restricted-desc': '承認済みSlackチャンネルのリクエストを構造化された運用オブジェクトに変換。署名検証、重複防止、監査ログを含む。',
      'card-restricted-proof': 'リポジトリ証拠: Webhook署名検証、チャンネル許可リスト制御、監査ログ、Vitest統合テスト構造確認済み',
      'card-papyrus-desc': 'リアルタイム協業とAI機能を備えたチームWiki。Socket.IO + Yjs共同編集、RBAC、テスト構造を含む。',
      'card-papyrus-proof': 'リポジトリ証拠: Yjs + Socket.IOリアルタイム協業、Drizzleスキーマ/マイグレーション、Vitest + Playwrightテスト構造確認済み',

      'approach-eyebrow': 'アプローチ',
      'approach-h2': '構築プロセス',
      'step1-title': 'スコープ定義',
      'step1-desc': '何を作るかをまず明確にします。不要な機能を排除し、コアに集中します。',
      'step2-title': '構築',
      'step2-desc': 'ワークフローと構造を先に設計し、バックエンド中心で構造的に開発します。',
      'step3-title': '検証',
      'step3-desc': '実際に動作するか確認します。デプロイ可能な状態で成果物を仕上げます。',
      'step4-title': '引き渡し',
      'step4-desc': 'ソースコードと共に納品します。今後の拡張が可能な構造で引き渡します。',

      'services-eyebrow': 'サービス範囲',
      'service1-desc': 'アイデア検証と問い合わせ獲得のための軽量ランディングページ',
      'service2-desc': '運用ワークフローを整理する社内ツールまたはアドミンMVP',
      'service3-desc': '本番運用可能なバックエンド中心MVPを短期スプリントで構築',

      'contact-h2': 'お問い合わせ',
      'contact-cta': 'プロジェクトについてお話しされたい方はメールをお送りください。<br />プロジェクトの種類、目標、スケジュールを簡単にお知らせください。',
      'contact-reassurance': '24〜48時間以内に返信します。目標、現在の課題、スケジュールを簡単にお含めください。',
      'contact-note': '現在、メールでのみお問い合わせを受け付けています。',

      'footer-tagline': '運用課題をシステムに — ポートフォリオで証明します。',

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
