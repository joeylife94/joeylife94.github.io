# Dongyoun Jeon — ProblemSolverArc
### Backend / AI Workflow Systems Engineer

I build **backend-first internal tools, operational workflows, and AI-assisted systems** for teams that are still running important work through spreadsheets, Slack, email, and manual checks.

My core background is **4.8 years of production backend engineering** across enterprise and public-sector environments: Java/Spring, authentication and SSO, distributed consistency, database migration, performance optimization, and legacy modernization.

My current freelance positioning is intentionally narrower than “general web development”:

> **Structure the workflow first. Add AI only where it creates practical leverage. Deliver a system the client can actually operate and extend.**

- 🌐 **[ProblemSolverArc](https://joeylife94.github.io)** — Freelance landing page
- 📫 **joeylife94@gmail.com**
- 💼 [LinkedIn](https://www.linkedin.com/in/dongyoun-jeon)

---

## What I Build

### Workflow Automation Sprint
For repetitive work stitched together with spreadsheets, Slack, email, and manual checks.

Typical scope:
- workflow mapping and scope reduction
- approval / tracking / notification flows
- structured ingestion and validation
- AI classification, extraction, summarization, or retrieval **when useful**
- repeatable MVP + source-code handoff

### Internal Tool Starter
For small teams that need an admin or operations tool instead of another spreadsheet.

Typical scope:
- internal/admin UI
- operational state and CRUD flows
- API + database integration
- auditability and operator visibility
- handoff-oriented implementation

### Backend MVP Sprint
For products where backend structure, integrations, and operational logic matter more than visual polish.

Typical scope:
- API and data-flow design
- backend business logic
- AI / third-party service integration
- operational pipelines
- deployable MVP + code handoff

---

## Validated Proof

### 🛒 [E-Commerce Scanner](https://github.com/joeylife94/e-commerce-scanner)
**Manual market research → repeatable operational pipeline**

- scan → compare → store → review → report workflow
- re-runnable research instead of one-off spreadsheet work
- dashboard and structured downstream outputs
- **Tech:** Python, httpx, Playwright, SQLite, Streamlit, Pydantic

### 📋 [Restricted Ops Intake MVP](https://github.com/joeylife94/restricted-ops-intake-mvp)
**Approved Slack requests → structured operations records**

- webhook validation and channel allowlist
- idempotent intake and status tracking
- assignee flow and immutable audit history
- AI extraction plumbing with graceful fallback
- **Tech:** Next.js, TypeScript, Prisma, PostgreSQL, Vitest

### 📝 [Papyr.us](https://github.com/joeylife94/papyr-us)
**Real-time collaboration wiki with AI-assisted workflow support**

- CRDT-based concurrent editing with Yjs + Socket.IO
- role-aware collaboration and backend state
- AI assistance integrated into the workflow rather than isolated as a demo
- **Tech:** TypeScript, React, Node.js, PostgreSQL, Socket.IO, Yjs

### 🧪 SeoulGyeol Beauty Lab
**Consent-based intake → scoring → report → email pipeline**

- multilingual questionnaire and scoring workflow
- consent-aware data processing
- automated report delivery
- proof of end-to-end operational pipeline design

---

## Active Proof Hardening

The following projects are **actively being raised to stronger client-facing / Wishket-proof quality**. They are not presented as finished case studies until their evidence gates are closed.

- **[Asgard](https://github.com/joeylife94/asgard)** — policy-based AI routing / fallback systems
- **[ClaimTrace](https://github.com/joeylife94/claim-trace)** — traceable claims and evidence workflow
- **[Guided Agent OS](https://github.com/joeylife94/guided-agent-os)** — guided agent execution and control workflow
- **[Papyr.us](https://github.com/joeylife94/papyr-us)** — ongoing proof hardening beyond the currently validated collaboration slice

**Promotion rule:** a project moves from “active proof” to landing-page case study only when the repository has a stable runnable flow, test/evidence artifacts, a concise buyer-facing story, and screenshots or demo evidence.

---

## Production Background

### Backend Developer — Egistech
- Resolved DB connection-pool bottlenecks on an authentication/session path, increasing concurrent capacity from roughly **100 to 2,000+**.
- Refactored large stored-procedure logic into maintainable application-layer code.
- Worked on public-sector legacy modernization and operational performance issues.

### Full-Stack / Backend Engineer — Widetns / LG projects
- Contributed to gradual monolith → modular service migration.
- Designed a database-backed transactional event-log pattern for consistency handling.
- Supported **Oracle → MySQL** migration across millions of records while maintaining service continuity.
- Worked on **OAuth 2.0 / SSO** using Java, Quarkus, and Keycloak.
- Improved core API latency by roughly **30%** through service separation and architecture restructuring.

---

## Core Stack

| Area | Technologies |
| --- | --- |
| **Backend** | Java 17, Spring Boot, Quarkus, REST, JPA/MyBatis |
| **Auth / Security** | OAuth 2.0, Keycloak, JWT |
| **Data / Messaging** | PostgreSQL, MySQL, Oracle, Kafka, Redis |
| **AI / Automation** | Python, FastAPI, OpenAI-compatible APIs, RAG / retrieval workflows |
| **Frontend / Internal UI** | TypeScript, React, Next.js |
| **Ops** | Docker, Kubernetes, Prometheus/Grafana, Git/Jenkins |

---

## Working Principle

I do not start with “where can we put AI?”

I start with:

1. **What is the current operational flow?**
2. **Where does it fail, repeat, or require manual judgment?**
3. **What is the smallest useful system boundary?**
4. **Which steps should stay deterministic?**
5. **Where would AI actually reduce effort or improve decisions?**
6. **What evidence proves the result works?**

That is the operating model behind **ProblemSolverArc**.