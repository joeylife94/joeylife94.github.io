# Portfolio V3 Decision Record

**Status:** Accepted strategic baseline for V3 planning  
**Date:** 2026-10-06  
**Repository:** `joeylife94/joeylife94.github.io`  
**Scope:** Personal brand, portfolio hierarchy, proof promotion, homepage information architecture

---

## 1. Decision Summary

Portfolio V3 shifts the site from a **ProblemSolverArc-first freelance landing page** to a **Dongyoun Jeon-first personal brand hub with a B2B credibility surface**.

The site should still support project inquiries, but the primary identity is the person and demonstrated systems work rather than the service brand alone.

### Primary identity

> **Dongyoun Jeon — Backend & AI Systems Engineer**

Secondary descriptors may include:

- System Builder
- Backend Systems
- Internal Tools
- Controlled AI Workflows
- Building ProblemSolverArc

`AI Orchestrator` is an internal/secondary concept, not the primary public-facing title. It can invite broader autonomous-agent assumptions than the current proof supports.

### Site role

1. Personal brand hub
2. Public engineering proof surface
3. B2B credibility / inquiry surface
4. Entry point to GitHub, LinkedIn, résumé, and selected case studies

The site must answer quickly:

1. Who is Dongyoun Jeon?
2. What systems does he build?
3. What evidence proves it?
4. How can someone work with or contact him?

---

## 2. Portfolio Hierarchy

### Flagship

#### Asgard

**Role:** Flagship backend / AI operations proof

**Why it leads**

- strongest demonstrated backend-systems breadth;
- persistent asynchronous job lifecycle;
- Java/Spring + Python + Kafka + PostgreSQL;
- real local-model execution;
- explicit failure, redrive, audit, retry and observability paths;
- bounded backup / restore verification;
- strong fit with production-backend experience and controlled AI system design.

**Defensible buyer-facing boundary**

> Built a Java/Python system that processes AI analysis jobs through Kafka, persists results, and demonstrates operator-controlled retry, audit history and bounded backup/restore verification with a local model.

**Do not claim**

- production readiness;
- exactly-once or atomic dispatch;
- guaranteed queue delivery;
- HA / multi-region readiness;
- SLA / SLO;
- comprehensive disaster recovery;
- stable latency, throughput or cost savings.

**Known portfolio-risk disclosure**

The current dispatch path has a credible publish-failure window: database state and Kafka publication are not proven atomic. Until fault-injected and closed, reliability copy must stay bounded.

---

### Homepage supporting proof #1

#### Papyr.us

**Role:** End-to-end internal product / workflow proof

**Why it belongs on the homepage**

- easiest current project for a non-technical buyer to understand;
- demonstrates authenticated team workflows;
- document lifecycle and version recovery;
- authorization boundaries;
- secure team-scoped search;
- operational database recovery;
- visible product/UI surface.

**Defensible buyer-facing boundary**

> Built a small-team wiki with authenticated team access, document editing and restoration, permission-bounded search, and tested database recovery.

**Do not claim**

- enterprise collaboration readiness;
- proven productivity improvement;
- production SSO;
- vector RAG;
- production-ready collaborative editing merely because Yjs exists;
- broad autonomous AI behavior.

**Documentation note**

`PAPYR_US_MASTER.md` records:

> `PAPYR.US PROOF v1.0 CLOSED / FREEZE — HUMAN REVIEW PASSED`

The repository README currently contains stale language that still describes Human Review as pending. The Master is authoritative.

---

### Homepage supporting proof #2

#### Guided Agent OS

**Role:** Controlled AI execution / authority-boundary proof

**Why it belongs on the homepage**

- explicit separation between AI suggestion and execution authority;
- semantic retrieval and bounded local-model execution;
- human approval / rejection boundary;
- input-bound approval digest;
- backend-enforced tool allowlist;
- persisted result and audit timeline;
- negative-path tests for unauthorized / invalid execution.

**Defensible buyer-facing boundary**

> Built a controlled AI workflow with local retrieval and model execution, explicit human approval, input-bound decisions, and backend-enforced access to two read-only demonstration tools.

**Do not claim**

- customer-system integration;
- authenticated reviewer identity;
- tamper-proof / non-repudiable audit;
- write-capable enterprise agents;
- autonomous enterprise operations;
- broad model-quality guarantees.

**Proof-packaging note**

Both accepted tools are repository-owned read-only fixtures. Public presentation must make that visible rather than allowing “enterprise integration” to be inferred.

---

### Promotion queue

#### ClaimTrace

**Role:** Source-verifiable document / evidence workflow proof

**Technical standing**

ClaimTrace remains one of the strongest engineering projects in the portfolio, especially for provenance, source resolution, grounded generation boundaries, and evidence-aware review.

**Current promotion status:** HOLD

**Promotion blocker**

The current buyer-facing grounded-answer screenshot is internally contradictory: the page presents a “Nothing retrieved” state while simultaneously displaying retrieved claims / citation content and an answer value. The current capture assertion does not sufficiently prove visual answer/evidence consistency.

This is a presentation/evidence-integrity blocker, not a reason for broad feature expansion.

**Required before homepage promotion**

1. correct the contradictory answer state;
2. replace placeholder-like answer output with a coherent deterministic scenario;
3. assert answer/evidence-state consistency before screenshot capture;
4. preserve a separate insufficient-evidence example;
5. reconcile current-main progression status versus the frozen v1 proof boundary.

**Defensible claim after correction**

> Built a document-review pilot that links retrieved claims and analytical statements to stored source spans, keeps machine output separate from review records, and has deterministic workflow verification on synthetic and public patent documents.

**Do not claim**

- patent/legal correctness;
- semantic entailment merely because citations resolve;
- broad real-model accuracy;
- OCR support;
- infringement / validity / novelty conclusions.

---

### Secondary commercial case

#### K-Beauty SKU Ops

Former landing-page flagship: E-Commerce Scanner.

**Role:** Secondary operational workflow / internal-tool case

**Why it remains**

- commercially intuitive;
- demonstrates workflow decomposition;
- candidate tracking;
- configurable cost / margin logic;
- repeatable demo reporting;
- practical internal-tool thinking.

**Why it is no longer flagship**

- repository is private;
- public verification is weaker than newer public proof projects;
- public evidence is demo-generated / config-driven rather than live market validation;
- current screenshots can invite stronger commercial-performance conclusions than the evidence supports.

**Defensible buyer-facing boundary**

> Built an internal SKU evaluation tool that structures candidate tracking, configurable cost/margin calculations and repeatable demo reporting.

**Do not claim**

- validated profitable opportunities;
- reliable live market coverage;
- realized ROI;
- proven commercial operation.

Use the consistent public name **K-Beauty SKU Ops**.

---

## 3. Homepage Selection Rule

V3 homepage should normally expose:

- **1 flagship**
- **2 supporting systems**
- **1 compact “More Work” area**

Current target:

1. Asgard — flagship
2. Papyr.us — supporting
3. Guided Agent OS — supporting
4. More Work:
   - ClaimTrace — promotion queue / source-verifiable AI work
   - K-Beauty SKU Ops — commercial workflow case

Do not keep adding cards indefinitely. New projects replace weaker or less strategically useful proof.

---

## 4. Target Information Architecture

V3 should move away from the V2 sales-only flow.

### V2

> Problem → Fit → Offer → Proof → Trust → Working model → Inquiry

### V3

> Identity → What I Build → Selected Systems → Production Credibility → ProblemSolverArc / Services → More Work / Working Principle → Contact

This keeps B2B conversion while making the page useful as a business-card, GitHub, LinkedIn, hiring, collaboration, and referral destination.

---

## 5. Personal Brand / Service Brand Relationship

### Dongyoun Jeon

Top-level personal identity.

Represents:

- professional history;
- engineering judgement;
- public systems work;
- future products / experiments / ventures;
- collaboration and career identity.

### ProblemSolverArc

Secondary execution / service brand.

Represents:

- workflow-first operating principle;
- scoped B2B services;
- internal tools;
- workflow automation;
- backend MVP delivery.

ProblemSolverArc should remain visible, but it should no longer hide the person behind it.

---

## 6. Public Positioning Principle

Preferred pattern:

> Build operational systems first. Keep deterministic controls explicit. Use AI only where it creates leverage. Keep state, authority, evidence and failure handling visible.

The strongest repeated portfolio pattern is not “AI features.”

It is:

- explicit state;
- explicit authority;
- source / provenance visibility;
- bounded automation;
- failure-path handling;
- recovery;
- evidence-backed claims.

---

## 7. Production Credibility

The homepage may continue to use the following work-history anchors where their existing evidence basis remains unchanged:

- 5 years enterprise / public-sector backend experience;
- ~30% API latency improvement;
- concurrency path improvement from ~100 to 2,000+;
- millions-of-records Oracle → MySQL migration;
- OAuth2 / SSO work with Java / Quarkus / Keycloak;
- incremental legacy modernization.

These work-history claims should remain separated from proof-project claims.

Do not imply that personal proof projects have paying customers, production uptime, business ROI or enterprise deployment unless independently evidenced.

---

## 8. Proof Packaging Priorities

Do not start broad feature expansion to solve portfolio-presentation problems.

### Asgard

- durable buyer-facing proof pack;
- submission → result → deliberate failure → authorized retry → audit;
- commit/run provenance;
- readable operator / metrics screenshot;
- disclose dispatch publish-failure gap.

### Papyr.us

- reconcile README with authoritative closure state;
- replace stale “no team” landing screenshot;
- preserve durable proof assets outside expiring Actions artifacts;
- show restore and access-denial behavior;
- label mocked inline-AI UI evidence accurately.

### Guided Agent OS

- publish durable approval/rejection/audit proof assets;
- keep local-model status current;
- improve dependency reproducibility;
- make fixture-tool boundary explicit.

### ClaimTrace

- fix evidence-integrity presentation blocker before promotion;
- no unrelated feature expansion.

### K-Beauty SKU Ops

- add unmistakable synthetic/demo labels;
- avoid implied live profitability / market validation;
- retain as secondary commercial workflow case.

---

## 9. V3 Migration Decisions

The following V2 assumptions are superseded by this record:

- ProblemSolverArc is no longer the sole top-level identity.
- E-Commerce Scanner is no longer the flagship.
- Asgard and Guided Agent OS are no longer “not promoted.”
- Papyr.us is no longer restricted to the old landing-page slice; bounded expanded claims may follow the authoritative accepted proof.
- ClaimTrace is not rejected, but its homepage promotion is blocked until the proof-presentation defect is corrected.

The V2 service definitions may remain unless separately changed.

The V2 pricing, communication, scope-control, multilingual consistency and evidence-integrity rules remain valid unless explicitly replaced later.

---

## 10. Execution Order

1. Freeze this decision record as V3 strategy.
2. Design the V3 homepage IA and first-screen hierarchy.
3. Define exact buyer-facing copy for Asgard / Papyr.us / Guided Agent OS.
4. Create or refresh durable proof assets.
5. Implement homepage changes in KO / EN / JA.
6. Add social/SEO metadata and structured identity.
7. Add minimal analytics for QR / project / contact interactions.
8. Clean obsolete V2 / old-page code only after the new page is stable.

---

## 11. Change-Control Rule

Reopen the V3 hierarchy only when at least one of these changes materially:

- new executed proof closes;
- a buyer objection reveals a missing proof requirement;
- a project becomes externally used in a way that materially changes evidence strength;
- the primary commercial audience changes;
- the personal brand moves away from backend / internal tools / controlled AI systems.

Do not reorder projects because a newer project merely exists.

---

## 12. One-Line V3 Definition

> **Dongyoun Jeon builds backend systems, internal tools and controlled AI workflows where state, authority, evidence and failure handling remain explicit.**
