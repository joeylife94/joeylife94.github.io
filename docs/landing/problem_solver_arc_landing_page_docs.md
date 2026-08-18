# ProblemSolverArc Landing Page — Production Document V2.0

**Status:** Active source of truth  
**Updated:** 2026-08-18  
**Repository:** `joeylife94/joeylife94.github.io`

---

## 0. Purpose

This document defines the current production standard for the ProblemSolverArc freelance landing page.

The landing page is not a general developer portfolio and not a design-first branding site. Its job is to convert relevant prospects into a structured project inquiry by making four things clear:

1. what operational problems ProblemSolverArc solves,
2. what type of engagement is offered,
3. what evidence supports the claims,
4. how a prospect can start a scoped conversation.

The page should feel closer to a **small operations/software consultancy** than a generic freelance web-development profile.

---

## 1. Current Positioning

### Primary positioning

> **Backend / AI Workflow / Operational Systems Engineer**

ProblemSolverArc builds backend-first internal tools, workflow systems, and MVPs for small teams that are still running important operational work through spreadsheets, Slack, email, and manual checks.

### AI positioning rule

AI must not become the top-level product by itself.

The operating principle is:

> **Structure the workflow first. Add AI only where it creates practical leverage.**

Good AI insertion points include:

- classification,
- structured extraction,
- summarization,
- retrieval / RAG,
- decision support,
- operator assistance.

Deterministic workflow steps, validation, authorization, auditability, and state transitions should remain explicit system components.

### Positioning hierarchy

1. Operational problem solving
2. Backend / system structure
3. Internal tool / workflow implementation
4. AI assistance where useful
5. Handoff and maintainability

Do **not** lead with generic phrases such as “AI agent developer,” “AI automation expert,” or “I build anything with AI.”

---

## 2. Target Customers

### Primary ICP

- 1–10 person SaaS or product teams
- founders validating a workflow MVP
- operators managing repeat work through spreadsheets, Slack, email, or manual reconciliation
- teams that need an internal/admin tool before hiring a dedicated platform team
- clients who need a small working system rather than an open-ended development engagement

### Strong-fit problem patterns

- requests or leads buried in chat
- repeated copy/paste between tools
- manual approval and tracking
- recurring research or reconciliation
- manual report generation
- admin operations without a real internal tool
- API / data / AI integrations that need a reliable operational wrapper

### Poor fit

- branding-first marketing websites
- undefined large platform builds
- “build the whole startup” requests
- long-term embedded / on-site staffing by default
- unlimited feature expansion
- UI-only design work

---

## 3. Service Structure

The current landing page uses three service lanes. These are **scope shapes**, not fixed-price packages.

### 3.1 Workflow Automation Sprint

**Customer:** founder / operator  
**Problem:** repetitive work is stitched together manually across spreadsheets, Slack, and email.

Typical scope:

- current workflow mapping
- scope reduction
- approval / tracking / notification flow
- structured intake and validation
- AI classification / extraction / summarization when useful
- repeatable MVP
- code handoff

Not included by default:

- enterprise-wide replacement
- large undefined product planning
- indefinite operations outsourcing

### 3.2 Internal Tool Starter

**Customer:** small team / startup  
**Problem:** an important operational process needs a proper internal or admin interface.

Typical scope:

- scope definition
- workflow design
- admin / internal UI
- CRUD and state management
- API / database integration
- operator visibility
- handoff-oriented implementation

Not included by default:

- organization-wide system replacement
- undefined multi-team product scope
- open-ended indefinite support

### 3.3 Backend MVP Sprint

**Customer:** product team / founder  
**Problem:** APIs, backend logic, AI or third-party integrations, and operational flows need to be implemented quickly and cleanly.

Typical scope:

- MVP-scoped backend architecture
- API and data-flow design
- business logic
- AI / external-service integration
- operational pipeline
- internal/admin UI where required
- deployable implementation
- code and handoff notes

Not included by default:

- enterprise transformation programs
- frontend-heavy visual design
- undefined long-term maintenance

---

## 4. Pricing Policy

The previous V1 document contained static starting prices. Those numbers are no longer the source of truth for the live page.

### Current rule

- The landing page does **not** publish fixed starting prices.
- Scope is reviewed before quoting.
- The page should communicate clear boundaries and engagement shape before price.
- Platform-specific proposals may use different commercial structures.

If public pricing is reintroduced later, it must be treated as a separate commercial decision and synchronized across all languages.

---

## 5. Current Page Structure

The live page follows this flow:

1. Sticky sidebar hero / identity
2. About / problem framing
3. Production trust stats
4. CTA
5. ICP fit / non-fit
6. Three service cards
7. Featured proof case
8. Proof screenshots and capability mapping
9. Additional validated cases
10. Production experience / differentiators
11. Engagement model
12. FAQ
13. Email-first contact
14. Footer

This order is intentional:

> **Problem → Fit → Offer → Proof → Trust → Working model → Inquiry**

---

## 6. Hero Standard

### Current message

The hero must communicate three things immediately:

1. the buyer’s current operating condition,
2. the system that will replace it,
3. the restrained role of AI.

Current Korean positioning:

> 스프레드시트·Slack·수작업으로 운영 중인 팀을 위해, AI가 필요한 곳에만 연결된 내부 도구·워크플로우·백엔드 MVP를 만듭니다.

Supporting principle:

> 반복 업무를 먼저 구조화하고, 분류·요약·검색·의사결정 보조처럼 AI가 실제 이득을 주는 구간에만 연결합니다.

### Hero anti-patterns

Do not change the hero into:

- a technology list,
- a résumé summary,
- “AI agent developer” branding,
- generic “digital transformation” language,
- exaggerated AI claims.

---

## 7. Proof Strategy

The landing page must show **validated evidence, not project inventory**.

A repository existing on GitHub is not enough to promote it to a buyer-facing case.

### Current featured case

#### E-Commerce Scanner

Narrative:

> Manual cross-market product research → repeatable operational pipeline

Evidence shown:

- market overview screenshot
- product opportunity output
- market intelligence output
- collection → processing → review → report structure

What it proves:

- repeatable workflow design
- data pipeline implementation
- internal / back-office UI
- scoped backend MVP thinking

### Current additional validated cases

#### SeoulGyeol Beauty Lab

Proof pattern:

> consent-based intake → scoring → report → email delivery

What it proves:

- end-to-end workflow implementation
- privacy / consent-aware processing
- multilingual delivery flow

#### Restricted Ops Intake MVP

Proof pattern:

> approved Slack request → structured operational record

What it proves:

- webhook validation
- allowlist / scope boundaries
- idempotent intake
- auditability
- operator workflow design

#### Papyr.us

Currently valid landing-page proof is limited to the collaboration / wiki slice already evidenced by the landing assets.

What it proves:

- real-time collaboration
- role-aware state
- CRDT / concurrent editing
- AI assistance inside a broader product workflow

Do not automatically claim future Papyr.us work as completed proof until its new evidence is closed.

---

## 8. Active Proof Hardening Queue

The following projects are under active proof hardening and must **not** be promoted as finished case studies merely because development is active.

| Project | Current landing status | Promotion intent |
| --- | --- | --- |
| Asgard | Not promoted | AI routing / policy / fallback proof |
| ClaimTrace | Not promoted | traceable claim / evidence workflow proof |
| Guided Agent OS | Not promoted | guided agent execution / control proof |
| Papyr.us | Existing validated slice only | replace or expand when stronger evidence closes |

### Promotion gate

A project may move into the landing page only when all required buyer-facing evidence exists:

1. **Runnable flow** — the core use case runs reliably.
2. **Clear baseline** — the manual / previous state is understandable.
3. **System change** — what the implementation changed is explicit.
4. **Evidence** — tests, screenshots, demo, logs, or reproducible output exist.
5. **Operational result** — the outcome is phrased without invented metrics.
6. **Scope boundary** — what the project does and does not prove is clear.
7. **Buyer relevance** — the case supports one of the three service lanes.

### Replacement rule

Do not keep adding project cards indefinitely.

The landing page should normally show:

- **1 featured case**
- **up to 3 supporting cases**

When a stronger proof becomes ready, replace the weakest or least commercially relevant case.

---

## 9. Production Trust Claims

Current trust anchors:

- 4.8 years enterprise / public-sector backend experience
- roughly 30% API latency improvement
- concurrency path improvement from roughly 100 to 2,000+
- millions-of-records Oracle → MySQL migration with service continuity
- OAuth 2.0 / SSO with Java, Quarkus, and Keycloak
- incremental legacy modernization

### Claim rule

Do not add performance numbers unless they are traceable to real work history or repository evidence.

For personal proof projects, prefer concrete evidence such as:

- tested flows,
- reproducible commands,
- visible state transitions,
- screenshots,
- audit logs,
- benchmark artifacts.

Do not invent percentage improvements for portfolio projects just to make the case look stronger.

---

## 10. AI Credibility Rule

AI should be described as part of the system architecture, not as magic.

Preferred framing:

- validated input → AI extraction → structured output
- retrieval → model response → evidence / source display
- policy routing → local/cloud model path → fallback
- agent suggestion → human approval → deterministic mutation
- AI summary → operator review → operational record

Avoid:

- “fully autonomous” without evidence
- “replaces employees” messaging
- “AI-powered” as an unexplained adjective
- model-name-heavy marketing
- claiming an agent architecture where the workflow is only a prompt call

---

## 11. Engagement Model

### Timeline

Typical fit: **2–6 weeks** for a small, clearly scoped phase.

A 2–4 week validation phase may be used for narrower projects, but the global landing promise is 2–6 weeks.

### Communication

Default:

- email
- structured documents
- text progress updates
- screenshots
- short demo videos

Meetings are used when they reduce ambiguity, not as the primary operating channel.

### Scope handling

- lock a small first phase
- separate new scope from current scope
- avoid indefinite expansion
- hand off code and operational knowledge

---

## 12. Contact Strategy

Current primary conversion channel: **email**.

The prospect does not need a complete specification.

The page asks for five useful inputs:

1. 1–2 tasks still handled manually
2. who handles them and how often
3. the biggest current bottleneck
4. one outcome wanted from the phase
5. target timeline or deadline

The expected landing-page behavior is not to force a formal requirements document before contact.

---

## 13. Multilingual Standard

Supported languages:

- Korean
- English
- Japanese

### Source-of-truth rule

`i18n.js` is the buyer-facing copy source of truth.

`index.html` contains Korean fallback strings for no-JavaScript / initial-render resilience and must remain aligned with the Korean dictionary.

### Critical rule

Translation must not alter commercial terms.

The following must mean the same thing across KO / EN / JA:

- ICP
- service scope
- exclusions
- timeline
- communication model
- FAQ policy
- contact expectations
- proof claims

A language switch must never change the actual offer.

---

## 14. Repository / README Role

The repository README is a secondary inbound surface.

It should:

- reflect the same ProblemSolverArc positioning,
- avoid stale location claims,
- distinguish validated proof from active proof work,
- link to the landing page,
- communicate the “workflow first, AI where useful” principle.

The README is not the landing-page copy source of truth.

---

## 15. Change Management

When changing buyer-facing positioning:

1. update this document if the commercial strategy changes,
2. update `i18n.js`,
3. synchronize Korean fallback text in `index.html`,
4. update README only if the public profile meaning changed,
5. verify KO / EN / JA semantics,
6. verify that all proof claims remain evidence-backed.

### Do not casually change

- production experience metrics
- service boundaries
- timeline promises
- proof status
- client ownership / handoff expectations

---

## 16. V2.0 Definition of Done

The V2 refresh is complete when:

- backend / operations remains the core identity,
- AI appears earlier but is framed as a selective workflow component,
- KO / EN / JA represent the same commercial offer,
- obsolete public pricing assumptions are removed from the SoT,
- README no longer carries stale location/portfolio framing,
- active proof projects are separated from validated landing proof,
- the landing can be used as an outbound destination without additional explanation.

---

## 17. One-Line Definition

> **ProblemSolverArc turns manual operational workflows into small, maintainable backend systems and internal tools, adding AI only where it creates measurable workflow leverage.**
