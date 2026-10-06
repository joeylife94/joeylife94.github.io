# Portfolio V3 Copy + Proof Specification — KO Canonical

**Status:** Approved Korean copy/proof baseline for implementation  
**Date:** 2026-10-06  
**Depends on:** [V3 Decision Record](./portfolio-v3-decision-record.md), [V3 Homepage IA](./portfolio-v3-homepage-ia.md)  
**Scope:** First-screen Korean copy, capability copy, Selected Systems card copy, and proof-asset requirements

---

## 1. Copy Principle

The homepage must sound like a senior backend/system engineer who uses AI selectively, not like an “AI agency” or a résumé dump.

Copy order:

> **problem / system / evidence / capability**

Avoid:

- generic “AI-powered” language;
- unexplained model names;
- “enterprise-ready” unless actually proven;
- production-readiness language for bounded proof projects;
- invented ROI;
- feature inventories as headlines.

---

## 2. First Screen — Canonical Korean Copy

### Identity

**Name**

> DONGYOUN JEON

**Role**

> Backend & AI Systems Engineer

### Headline

> **복잡한 업무 흐름을 운영 가능한 시스템으로 바꿉니다.**

### Supporting copy

> 백엔드 시스템과 내부 도구를 중심으로 만들고, AI는 실제 이득이 생기는 구간에만 연결합니다. 상태·권한·증거·실패 경로가 보이는 구조를 설계합니다.

### Capability shorthand

- Backend Systems
- Internal Tools
- Controlled AI Workflows

### CTAs

Primary:

> **Selected Work**

Secondary:

> **Contact**

### Compact trust strip

- **5년** — Production Backend
- **~30%** — API 응답속도 개선
- **100 → 2,000+** — 동시 처리 경로 개선
- **Enterprise · Public Sector** — 실제 운영 환경 경험

### Secondary service-brand label

Use as a small non-primary identity marker:

> **Building ProblemSolverArc**

Do not place `ProblemSolverArc` above the person’s name.

---

## 3. First-Screen Copy Rationale

The first headline deliberately avoids:

- “프리랜서” as the primary identity;
- “AI Agent” terminology;
- spreadsheets / Slack as the first thing a business-card visitor sees;
- a stack list.

The headline answers what Dongyoun does. The support line explains how he works.

The differentiator is:

> **상태·권한·증거·실패 경로가 보이는 구조**

This is supported repeatedly by the selected portfolio proof and production-backend positioning.

---

## 4. What I Build — Canonical Korean Copy

### Backend Systems

> API·데이터 흐름·비동기 작업·인증·복구 경로를 운영 관점에서 설계합니다.

Supporting keywords:

> APIs · Async Jobs · Auth · Persistence · Recovery · Observability

### Internal Tools

> 반복 업무를 상태·권한·검색·복구가 있는 내부 도구로 구조화합니다.

Supporting keywords:

> Workflow State · Admin UI · Permissions · Search · Handoff

### Controlled AI Workflows

> AI가 필요한 부분만 연결하고, 실행 권한과 근거·검토 경계를 시스템에 남깁니다.

Supporting keywords:

> Retrieval · Approval · Evidence · Policy · Bounded Execution

### Rule

These are capability categories, not service packages.

Do not add pricing, timelines, or exclusions here.

---

## 5. Selected System — Asgard

### Eyebrow

> **FLAGSHIP · Backend / AI Operations**

### Title

> **Asgard**

### Headline

> **비동기 AI 작업을 실패 이후까지 운영 가능한 흐름으로**

### Body

> 영속 Job → Kafka → Local AI → 결과 저장 흐름과, 실패 → 승인된 재시도 → 감사 → 복구 경로를 검증했습니다.

### Evidence line

> Real local model · Controlled redrive · Audit · Prometheus/Grafana · Bounded backup/restore

### What it proves

> **정상 경로뿐 아니라 실패·복구까지 설계하는 백엔드 시스템 역량**

### CTA

- View Case
- GitHub

### Copy boundary

Do not use:

- “guaranteed delivery”;
- “exactly once”;
- “production-ready”;
- “high availability”;
- “enterprise operations platform” as an established production claim.

The site may call it a **bounded systems proof** or **backend / AI operations proof**.

---

## 6. Selected System — Papyr.us

### Eyebrow

> **Internal Product / Team Workflow**

### Title

> **Papyr.us**

### Headline

> **팀 문서 흐름을 권한과 복구가 있는 제품으로**

### Body

> 인증된 팀 접근, 문서 생성·수정·복원, 권한 제한 검색, 데이터베이스 복구까지 end-to-end로 검증했습니다.

### Evidence line

> Team auth · Document lifecycle · Permission-bounded search · Version recovery · DB recovery

### What it proves

> **사용자가 실제로 쓰는 내부 제품을 끝까지 구현하고 검증하는 역량**

### CTA

- View Case
- GitHub

### Copy boundary

Do not use:

- “enterprise collaboration platform”;
- “production SSO”;
- “vector RAG”;
- “measurably improved productivity”;
- broad AI-agent claims.

---

## 7. Selected System — Guided Agent OS

### Eyebrow

> **Controlled AI Execution**

### Title

> **Guided Agent OS**

### Headline

> **AI의 제안과 실행 권한을 분리한 워크플로우**

### Body

> 요청 → 검색 → 도구 계획 → 정책 확인 → 사람 승인 → 허용된 read-only 도구 실행 → 감사 흐름을 백엔드에서 강제합니다.

### Evidence line

> Local model path · Human approve/reject · Input-bound decision · Tool allowlist · Persisted audit

### What it proves

> **AI가 직접 권한을 갖지 않도록 통제 경계를 설계하는 역량**

### CTA

- View Case
- GitHub

### Required disclosure in detailed case

> 현재 실행 도구는 repository-owned read-only demonstration fixtures입니다.

### Copy boundary

Do not use:

- “connected to enterprise customer systems”;
- “authenticated reviewer identity”;
- “tamper-proof audit”;
- “autonomous enterprise agent”.

---

## 8. Production Credibility — Canonical Intro

### Section label

> **Production Background**

### Headline

> **개인 프로젝트 이전에, 5년간 실제 운영 백엔드를 만들었습니다.**

### Supporting copy

> 엔터프라이즈·공공 환경에서 Java 기반 백엔드, 인증/SSO, 데이터 마이그레이션, 성능 개선과 레거시 현대화를 경험했습니다. 지금 만드는 AI 시스템에도 같은 운영 기준을 적용합니다.

### Evidence anchors

- ~30% API latency improvement
- ~100 → 2,000+ concurrency-path improvement
- millions-record Oracle → MySQL migration
- OAuth2 / SSO with Quarkus / Keycloak

Do not attribute these numbers to Asgard, Papyr.us, Guided Agent OS, or other personal proof projects.

---

## 9. ProblemSolverArc — Section Intro

### Label

> **Work With Me · ProblemSolverArc**

### Headline

> **명확한 운영 문제를 작은 첫 시스템으로 만듭니다.**

### Supporting copy

> ProblemSolverArc는 반복 업무, 내부 도구, 백엔드 MVP처럼 범위를 잠글 수 있는 문제를 실제로 작동하는 시스템으로 구현하는 서비스 레이어입니다.

Retain these service shapes:

- Workflow Automation Sprint
- Internal Tool Starter
- Backend MVP Sprint

Service detail may reuse the current V2 commercial rules after compression.

---

## 10. Working Principle — Canonical Copy

> **워크플로우를 먼저 구조화합니다.**  
> 결정적으로 처리할 수 있는 단계는 결정적으로 남깁니다.  
> AI는 실제 이득이 생기는 구간에만 연결합니다.  
> 상태·권한·증거·실패 경로가 보이도록 만듭니다.

This is the main public expression of the “System Builder” operating model.

---

## 11. More Work Copy

### ClaimTrace

**Label**

> Source-verifiable Document Workflow

**Short copy**

> 검색·분석 결과를 저장된 원문 위치와 연결하고, 기계 출력과 사람 검토 상태를 분리한 문서 분석 시스템입니다.

**Status note**

> Proof presentation repair in progress

Do not display the current contradictory grounded-answer screenshot.

Do not describe ClaimTrace as legally accurate patent analysis.

### K-Beauty SKU Ops

**Label**

> Operational Workflow / Internal Tool

**Short copy**

> 상품 후보 추적, 설정 가능한 원가·마진 계산, 반복 가능한 데모 리포트를 하나의 운영 흐름으로 구조화한 내부 도구입니다.

**Evidence note**

> Demo-generated / configuration-driven evidence

Do not show profitability percentages without explicit synthetic/demo qualification.

---

## 12. Proof Asset Inventory — Current State

### Current portfolio repository

Existing buyer-facing assets:

- Papyr.us: two historical landing screenshots;
- K-Beauty SKU Ops: three existing screenshots;
- SeoulGyeol / Restricted Ops: existing V2 assets.

Current V3 gaps:

- no Asgard buyer-ready committed image in the portfolio repository;
- no Guided Agent OS buyer-ready committed image;
- Papyr.us existing landing screenshots do not represent the strongest accepted team / recovery story;
- ClaimTrace current grounded-answer screenshot has a presentation-integrity blocker.

---

## 13. Required Proof Pack — Asgard

### A1 — Lifecycle architecture visual — REQUIRED

Format:

- SVG or high-resolution PNG;
- 16:9 or wide horizontal;
- readable on desktop and mobile card expansion.

Must show:

```text
Submit
→ Persistent Job
→ Kafka
→ Bifrost
→ Local AI
→ Result
→ Persistence

Failure
→ FAILED
→ Authorized Redrive
→ Audit
→ Retry
→ SUCCEEDED
```

Purpose:

- primary flagship visual;
- explains the system faster than a generic dashboard screenshot.

### A2 — Recovery / operator proof — REQUIRED

Show, from one reproducible synthetic-safe run:

- failed job;
- redrive authorization / action;
- attempt increment;
- successful final state;
- visible audit status.

If one screen cannot show all of this clearly, use a two-image sequence.

### A3 — Observability proof — RECOMMENDED

Show:

- Prometheus / Grafana lifecycle metrics;
- requested / succeeded / failed / redriven state.

Caption must say this is a **bounded proof run**, not production SLO evidence.

### Provenance requirement

Each public asset should record:

- repository;
- commit SHA;
- workflow/run or reproduction command;
- synthetic/public-safe classification.

---

## 13A. Papyr.us P0 Capture Status — 2026-10-06

**P1 current team workspace: SECURED / GREEN**

- accepted proof rerun `34132976309`;
- fresh artifact `11396728712`;
- selected capture: `01-team-pages.png`;
- synthetic-only.

**P2 version recovery boundary: SECURED / GREEN**

- capture run `37433742998`;
- fresh artifact `11398263202`;
- selected captures: `03-version-recovery-before.png`, `04-version-recovery-after.png`;
- browser restore action + durable API verification;
- synthetic-only.

Current remaining task is durable binary placement in the portfolio repository. No Papyr.us feature expansion is required for V3 proof packaging.

---

## 14. Required Proof Pack — Papyr.us

### P1 — Current team workspace — REQUIRED

Replace the stale “no team” visual.

Show:

- authenticated workspace;
- accessible team;
- current document state;
- synthetic/public-safe data.

### P2 — Recovery or authorization boundary — REQUIRED

Prefer one of:

1. version restore before/after; or
2. same-team access vs rejected cross-team access.

The second visual should demonstrate an engineering boundary, not merely another pretty page.

### P3 — Database recovery evidence — OPTIONAL DETAIL ASSET

Useful for case-study detail, not necessary as the homepage hero image.

### AI evidence rule

If inline-AI UI is shown, label mocked browser-response evidence accurately. Do not let the image imply general model-quality proof.

---

## 15. Required Proof Pack — Guided Agent OS

### G1 — Approval boundary — REQUIRED

Show:

- planned tool;
- exact parameters;
- run allowlist;
- pending human decision;
- input digest / reviewed input where readable.

This is the most important project visual.

### G2 — Approved execution + audit — REQUIRED

Show:

- approval;
- read-only execution result;
- persisted audit timeline.

### G3 — Rejection path — RECOMMENDED

Show a rejected run with **no tool execution**.

This can be a secondary image or case-study detail.

### Disclosure

Any proof image containing `legacy_db_lookup` or `policy_lookup` should visibly or immediately-caption them as repository-owned demonstration fixtures.

---

## 16. ClaimTrace Proof Repair Requirement

Before promotion to Selected Systems:

### Fix current capture

The grounded-answer capture must not simultaneously show contradictory retrieval/empty-state messaging.

### New required captures

- C1: coherent answer + selected evidence + resolvable source;
- C2: explicit insufficient-evidence case;
- C3: source highlight / review state may reuse current valid proof if still coherent.

### Assertion requirement

The browser proof should assert state consistency before screenshot capture rather than only waiting for an Answer heading.

---

## 17. K-Beauty SKU Ops Evidence Treatment

Existing screenshots may remain for the secondary case if captions are changed to make provenance unmistakable.

Required visible/caption language:

- Demo-generated
- Config-driven
- Synthetic / sample data where applicable

Do not rely on “SHOWCASE” alone to communicate this distinction.

---

## 18. Homepage Asset Priority

Before V3 production implementation is considered complete:

### P0 assets

1. Asgard A1
2. Asgard A2
3. Papyr.us P1
4. Papyr.us P2
5. Guided Agent OS G1
6. Guided Agent OS G2

### P1 assets

7. Asgard A3
8. Guided Agent OS G3

### Separate repair track

9. ClaimTrace C1 / C2

K-Beauty existing screenshots can be reused after evidence labeling is corrected.

---

## 19. Implementation Rule

Do **not** block structural HTML/CSS work on every optional proof asset.

Safe sequence:

1. implement first-screen copy and section hierarchy;
2. implement project-card shells with approved copy;
3. capture P0 proof assets;
4. replace placeholders / old assets;
5. verify all captions and claim boundaries;
6. translate approved KO copy into EN / JA without changing commercial meaning.

No final KO / EN / JA production rollout should ship with missing P0 proof assets for the three Selected Systems.
