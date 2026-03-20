# E-Commerce Scanner - Final Case Study

## 한국어 버전

### 프로젝트 개요
- **프로젝트명:** E-Commerce Scanner
- **포트폴리오 역할:** Flagship Proof Asset
- **한 줄 정의:** 한국 도매 상품을 여러 시장에서 비교해 마진 가능성을 검토하고, 그 결과를 구조화된 리포트와 대시보드로 확인할 수 있도록 만든 스캐닝·분석 도구
- **공개 가능 여부:** Public-Safe 기준으로 정리 가능

### 1. 문제
국가 간 상품 기회 분석은 보통 수작업 중심으로 진행된다. 한국 도매 상품을 여러 해외 시장과 비교할 때 가격 조사, 마진 계산, 근거 정리가 한 번성 조사에 머무르기 쉽고, 같은 기준으로 반복하기 어렵다. 이 방식은 시간이 오래 걸릴 뿐 아니라, 판단 근거가 누적되지 않고 결과물을 다시 활용하기도 어렵다.

### 2. 왜 이 문제가 중요한가
수작업 비교는 운영 관점에서 세 가지 문제를 만든다.

- 반복 실행 시간이 길다.
- 어떤 기준으로 판단했는지 남기기 어렵다.
- 결과가 구조화되지 않아 이후 검토, 재사용, 보고로 이어지기 어렵다.

1인 운영자나 소규모 팀에게는 이 비효율이 곧 조사 품질의 흔들림으로 이어진다. 결국 중요한 것은 한 번 찾는 것이 아니라, 같은 방식으로 다시 돌릴 수 있는 구조를 만드는 것이다.

### 3. 설계 결정
이 프로젝트는 단순한 스프레드시트 조사 작업이 아니라, 반복 가능한 스캔·비교·저장·출력 파이프라인으로 설계되었다. 핵심은 가격 데이터를 한 번 수집하는 데 있지 않고, 이후에도 같은 흐름으로 다시 실행할 수 있는 구조를 만드는 데 있었다.

구체적으로는 다음과 같은 방향을 택했다.

- CLI 중심 실행 구조로 스캔을 수행한다.
- Streamlit 대시보드로 결과 확인과 운영 리뷰를 분리한다.
- 스크래퍼, 서비스, 모델, 리포트 생성을 모듈 단위로 나눈다.
- 결과물을 JSON 리포트, 가격 비교 데이터, AI 분석용 프롬프트 파일 등 여러 형태로 출력한다.
- 데모 모드를 통해 실제 크롤링 없이도 흐름을 검토할 수 있게 한다.

### 4. 내 역할
나는 이 프로젝트에서 스캐너 파이프라인, 마진 분석 흐름, 리포트 출력 구조, 대시보드 기반 검토 흐름을 설계하고 구현했다. 역할을 정리하면 다음과 같다.

- 시스템 설계
- 워크플로 설계
- 스캔 및 리포트 파이프라인 구현
- 결과물을 재사용 가능한 운영 산출물로 패키징

### 5. 핵심 기능
이 프로젝트에서 저장소 기준으로 확인되는 핵심 기능은 다음과 같다.

- 한국 도매 소스의 상품 정보를 수집한다.
- 해외 마켓 가격을 비교 대상으로 연결한다.
- 환율, 물류, 관세, 수수료 등을 반영해 마진 관점의 계산을 수행한다.
- 스캔 결과를 구조화된 파일로 저장한다.
- 대시보드에서 스캔 결과와 이력을 검토한다.
- 특정 국가나 단계 기준으로 스캔 범위를 조정한다.
- AI 분석에 활용할 수 있는 프롬프트 형태의 출력까지 생성한다.

### 6. 기술 포인트
저장소 기준으로 확인되는 기술적 포인트는 다음과 같다.

- Python 기반 구현
- `httpx`, `beautifulsoup4`, `playwright` 기반 수집 스택
- `pydantic`, `pyyaml` 기반 설정 및 모델 구조
- 비동기 스캔 파이프라인
- YAML 기반 국가/마켓 설정 구조
- SQLite 기반 persistence layer
- `ReportGenerator`를 통한 다중 출력 구조
- JSON, 가격 비교 데이터, AI 분석용 프롬프트 파일 생성
- Streamlit 대시보드 기반 운영 검토 레이어

### 7. 구조적 결과
이 프로젝트의 현재 가치는 외부 비즈니스 성과보다도, 수작업 중심의 시장 비교 업무를 반복 가능한 운영 구조로 바꿨다는 점에 있다. 저장소 증거 기준으로 확인되는 강점은 다음과 같다.

- 반복 가능한 scan flow
- 비교 결과의 구조화
- 분석 결과의 저장 가능성
- 리포트와 대시보드를 통한 검토 가능성
- 운영 관점에서 재사용 가능한 출력 구조

즉, 이 프로젝트는 상업적 성과를 증명하는 문서라기보다, 데이터 수집·비교·저장·출력 흐름을 시스템으로 정리했다는 구조적 증거에 가깝다.

### 8. 현재 확인 가능한 증거
현재 저장소에서 포트폴리오용 근거로 활용할 수 있는 요소는 다음과 같다.

- README
- CLI 실행 구조와 데모 커맨드
- 저장소 구조 자체
- 대시보드 코드
- 리포트 생성 흐름
- AI 분석용 프롬프트 생성 흐름
- 캡처 가능한 대시보드 화면 후보

### 9. 한계
현재 단계에서 명확히 선을 그어야 할 한계도 있다.

- 외부 비즈니스 KPI는 아직 검증된 바 없다.
- 실제 상업적 traction을 증명하는 자료는 없다.
- 매칭 정확도, 수익성 적중률, 운영 규모 같은 실운영 성과는 저장소만으로 확정할 수 없다.
- 가장 강한 증거는 시장 성과가 아니라 운영 구조와 시스템화 수준이다.
- proof 품질은 public-safe 스크린샷과 아키텍처 bullet이 추가될 때 더 올라간다.

### 10. 왜 이 프로젝트가 대표작인가
E-Commerce Scanner는 대표작으로 삼기에 설명 가능성이 높고, 구조가 명확하며, 공개 가능한 범위 안에서 시스템 빌더 포트폴리오 서사와 가장 잘 맞는다. 특히 다음 점에서 대표작 역할을 수행하기 좋다.

- 문제 정의가 비교적 명확하다.
- scan → compare → persist → export 흐름이 선명하다.
- CLI와 대시보드가 함께 있어 설명과 시연 포인트를 만들기 쉽다.
- 운영 구조와 산출물 패키징 역량을 함께 보여줄 수 있다.

### 11. 다음 Proof 업그레이드 목표
이 문서는 case study 최종본이지만, proof 강도를 높이기 위한 다음 목표는 별도로 남아 있다.

- public-safe 대시보드 스크린샷 2장 확보
- 포트폴리오 proof block용 아키텍처 bullet 3개 정리
- 짧은 proof 설명 문장 세트 정리
- evidence note 정리

---

## English Version

### Project Snapshot
- **Project:** E-Commerce Scanner
- **Portfolio Role:** Flagship Proof Asset
- **One-Line Definition:** A scanning and analysis tool that compares Korean wholesale products across markets, evaluates margin potential, and turns the results into structured reports and dashboard-based review.
- **Public Evidence Status:** Can be documented in a public-safe way

### 1. Problem
Cross-border product opportunity analysis is often handled manually. When comparing Korean wholesale products across multiple markets, pricing checks, margin estimation, and evidence gathering tend to become one-off research tasks rather than a repeatable workflow. That makes the process slow, inconsistent, and difficult to reuse later.

### 2. Why This Problem Matters
Manual comparison work creates three operational problems.

- It takes too long to repeat.
- The basis for judgment is hard to preserve.
- The output is often not structured enough for later review, reuse, or reporting.

For a solo operator or a small team, this kind of inefficiency directly lowers consistency in opportunity analysis. The real issue is not finding one result once, but building a structure that can be run again under the same logic.

### 3. Design Decision
This project was not treated as a spreadsheet-only research task. Instead, it was structured as a repeatable scan, compare, persist, and export pipeline. The goal was not just to collect pricing data once, but to create a workflow that can be rerun with the same operating logic.

The design choices visible from the repository include:

- a CLI-centered execution flow for scans,
- a Streamlit dashboard for result review and operator visibility,
- modular separation across scrapers, services, models, and report generation,
- multiple output types such as JSON reports, comparison data, and AI-analysis prompt files,
- and a demo mode that allows the workflow to be reviewed without live crawling.

### 4. My Role
I designed and implemented the scanner pipeline, the margin-analysis workflow, the reporting output structure, and the dashboard-oriented review flow. My role can be framed as:

- system design,
- workflow design,
- implementation of the scanning and reporting pipeline,
- and packaging outputs into reusable operational artifacts.

### 5. Core Function
Based on repository evidence, the core functions are:

- collecting product information from Korean wholesale sources,
- linking that data to overseas market pricing targets,
- calculating margin-oriented outputs using exchange rate, logistics, tariff, and fee factors,
- storing scan results as structured files,
- reviewing scan results and history through a dashboard,
- adjusting scan scope by country or phase,
- and generating prompt-ready outputs for AI-assisted analysis.

### 6. Technical Point
The main technical points visible in the repository are:

- Python-based implementation,
- collection stack using `httpx`, `beautifulsoup4`, and `playwright`,
- configuration and model structure using `pydantic` and `pyyaml`,
- an async scan pipeline,
- YAML-based country and market configuration,
- a SQLite-backed persistence layer,
- multi-output reporting through `ReportGenerator`,
- generation of JSON reports, comparison data, and AI-analysis prompt files,
- and a Streamlit dashboard layer for operational review.

### 7. Structural Result
The current value of this project is better expressed as structural proof than as external business proof. Based on repository evidence, it shows that previously manual market-comparison work was turned into a reusable operational workflow.

Its strongest current proof lies in:

- a repeatable scan flow,
- structured comparison outputs,
- persistent analysis artifacts,
- reviewability through reports and dashboard surfaces,
- and reusable outputs for operational follow-up.

This project does not yet prove commercial traction or external business KPI. What it does prove is a systemized approach to data collection, comparison, persistence, and output generation.

### 8. Evidence Available
The repository currently provides the following portfolio-usable evidence:

- README,
- CLI execution flow and demo commands,
- repository structure,
- dashboard code,
- report-generation flow,
- AI prompt generation flow,
- and candidate dashboard screens that may later be captured safely.

### 9. Limitations
There are clear limits that should remain explicit.

- No validated external business KPI yet.
- No proven commercial traction yet.
- Real-world performance such as matching accuracy, profitability hit rate, and operating scale cannot be confirmed from the repository alone.
- The strongest current proof is operational structure, not market outcome.
- Proof quality will become stronger after public-safe screenshots and architecture bullets are added.

### 10. Why This Is the Flagship
E-Commerce Scanner is the strongest flagship candidate because it is relatively easy to explain, structurally clear, and well aligned with a system-builder portfolio narrative while still being safe to describe publicly. It works well as a flagship because:

- the problem framing is understandable,
- the scan → compare → persist → export flow is clear,
- the combination of CLI and dashboard creates strong explanation and demo surfaces,
- and the project shows both workflow design and output packaging capability.

### 11. Next Proof Upgrade Targets
This document is a final case study draft, but the next proof-strengthening targets remain separate.

- Capture 2 public-safe dashboard screenshots.
- Extract 3 architecture bullets for the portfolio proof block.
- Finalize a short proof statement set.
- Finalize an evidence note.
