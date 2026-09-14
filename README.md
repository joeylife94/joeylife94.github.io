# Dongyoun Jeon — ProblemSolverArc
### Backend / AI Systems Engineer

I build **backend-first operational systems, controlled AI workflows, and internal tools** for teams that need something more reliable than spreadsheets, chat threads, and manual checks.

My background is **4.8 years of production backend engineering** across enterprise and public-sector environments, including Java/Spring, authentication and SSO, distributed consistency, database migration, performance optimization, and legacy modernization.

My current focus is narrower than “general web development”:

> **Structure the workflow first. Keep deterministic steps deterministic. Add AI only where it creates practical leverage. Prove the system with executable evidence.**

- 🌐 **[ProblemSolverArc](https://joeylife94.github.io)** — freelance portfolio / service page
- 📫 **dongyoun.jeon@gmail.com**
- 💼 [LinkedIn](https://www.linkedin.com/in/dongyoun-jeon)
- 🧑‍💻 [GitHub](https://github.com/joeylife94)

---

## Featured Public Proof

### 🔎 [ClaimTrace](https://github.com/joeylife94/claim-trace)
**Source-verifiable patent claim analysis with evidence-grounded retrieval and review.**

- exact source provenance from document → page → character span
- hybrid retrieval, grounded Q&A, comparison, decomposition, human review
- deterministic browser proof and reproducible evaluation evidence
- **Tech:** FastAPI, Next.js, PostgreSQL, pgvector, Playwright

### 🧭 [Guided Agent OS](https://github.com/joeylife94/guided-agent-os)
**Controlled enterprise AI Agent proof with explicit approval and tool-execution boundaries.**

- semantic RAG with Korean / English retrieval
- human approval / reject boundary
- allowlisted read-only tool execution
- persistent audit timeline and fixed evaluation suite
- **Tech:** FastAPI, LangGraph, SQLite, ChromaDB, local embeddings

### 🛡️ [Asgard](https://github.com/joeylife94/asgard)
**Local-first AI operations proof for asynchronous, auditable AI jobs.**

- persistent Job lifecycle over Kafka
- local Ollama execution path
- FAILED / DLQ → authorized redrive → audit → retry → SUCCEEDED
- Prometheus / Grafana operating visibility
- **Tech:** Java, Spring Boot, Python, Kafka, PostgreSQL, Ollama, Prometheus/Grafana

### 📝 [Papyr.us](https://github.com/joeylife94/papyr-us)
**Small-team collaboration wiki with bounded v1.0 proof for team-scoped workflows and recovery.**

- document lifecycle and version recovery
- team-scoped authorization and secure search
- tasks / calendar / optional AI assistance
- CI, browser proof package, and operational recovery evidence
- **Tech:** TypeScript, React, Express, PostgreSQL, Socket.IO, Yjs, Playwright

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

## Production Background

### Backend Developer — Egistech
- Resolved a DB connection-pool bottleneck on an authentication/session path, increasing concurrent capacity from roughly **100 to 2,000+**.
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
| **AI / Automation** | Python, FastAPI, OpenAI-compatible APIs, RAG / retrieval workflows, local LLMs |
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