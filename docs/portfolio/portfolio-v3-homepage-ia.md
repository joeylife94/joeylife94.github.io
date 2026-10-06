# Portfolio V3 Homepage Information Architecture

**Status:** Approved IA baseline for implementation planning  
**Date:** 2026-10-06  
**Depends on:** [Portfolio V3 Decision Record](./portfolio-v3-decision-record.md)  
**Scope:** Homepage hierarchy, first-screen composition, section order, project presentation, and migration map

---

## 1. Design Goal

The V3 homepage must work for four entry paths without becoming four different sites:

1. a person scanning a business-card QR;
2. a potential B2B client evaluating engineering credibility;
3. a recruiter / engineering leader evaluating technical depth;
4. a collaborator arriving from GitHub or LinkedIn.

Within roughly one screen and one short scroll, a visitor should understand:

> **Dongyoun Jeon → Backend & AI Systems Engineer → builds backend systems, internal tools and controlled AI workflows → has 5 years of production backend experience → has inspectable public proof.**

The page is no longer structured primarily as a freelance sales funnel.

It remains commercially useful, but **identity and proof come before the service offer**.

---

## 2. Layout Decision

### Keep

Retain the current high-level visual system unless implementation testing reveals a concrete problem:

- dark theme;
- desktop split layout;
- sticky left-side identity / navigation;
- right-side scrolling content;
- KO / EN / JA switch;
- restrained accent treatment;
- existing responsive foundation;
- email-first contact.

### Change

The left side must stop behaving like a ProblemSolverArc service billboard.

It becomes the persistent personal identity surface.

Desktop concept:

```text
┌─────────────────────────────┬──────────────────────────────────────┐
│ DONGYOUN JEON               │ RIGHT CONTENT                        │
│ Backend & AI Systems Eng.   │                                      │
│                             │ What I Build                         │
│ concise identity statement  │ Selected Systems                     │
│                             │ Production Credibility                │
│ [Selected Work] [Contact]   │ ProblemSolverArc / Services           │
│                             │ Working Principle / More Work         │
│ Work                        │ Contact                               │
│ Experience                  │                                      │
│ Services                    │                                      │
│ About                       │                                      │
│ Contact                     │                                      │
│                             │                                      │
│ ProblemSolverArc · GitHub   │                                      │
└─────────────────────────────┴──────────────────────────────────────┘
```

Mobile concept:

```text
DONGYOUN JEON
Backend & AI Systems Engineer

<one concise positioning statement>

[Selected Work] [Contact]

5 years · Enterprise Backend · Controlled AI

↓
What I Build
↓
Selected Systems
...
```

The mobile first screen must not begin with a service package or a long ICP explanation.

---

## 3. Global Navigation

Target navigation:

1. **Work**
2. **Experience**
3. **Services**
4. **About**
5. **Contact**

### Mapping

- Work → Selected Systems
- Experience → Production Credibility
- Services → ProblemSolverArc / commercial engagement
- About → Working Principle / identity
- Contact → Email-first contact

Do not add a top-level navigation item for every project.

---

## 4. First Screen / Identity Layer

### Purpose

Answer **Who / What / Proof / Next action** before asking the visitor to understand service packaging.

### Content hierarchy

1. **Name**
   - Dongyoun Jeon

2. **Primary role**
   - Backend & AI Systems Engineer

3. **Primary positioning statement**
   - one short statement about building backend systems, internal tools, and controlled AI workflows;
   - must not read like a generic AI slogan;
   - final copy is a separate copywriting decision.

4. **Capability shorthand**
   - Backend Systems
   - Internal Tools
   - Controlled AI Workflows

5. **Primary CTA**
   - Selected Work

6. **Secondary CTA**
   - Contact

7. **Compact trust strip**
   - 5 years production backend experience
   - enterprise / public-sector systems
   - one or two strongest quantified work-history anchors

8. **Secondary brand**
   - ProblemSolverArc appears as a small service / execution-brand reference, not as the top-level name.

### Explicitly remove from first-screen priority

- long ICP cards;
- three service packages;
- long explanation of spreadsheets / Slack / manual work;
- FAQ;
- detailed engagement model;
- E-Commerce Scanner visuals.

Those remain useful later in the page.

---

## 5. Section 1 — What I Build

### Purpose

Translate the identity into three understandable categories before showing individual projects.

### Three lanes

#### Backend Systems

Examples of concerns:

- APIs and data flows;
- asynchronous jobs;
- persistence;
- failure handling;
- authentication / authorization;
- observability;
- migrations / operational boundaries.

#### Internal Tools

Examples of concerns:

- workflow state;
- admin / operator interfaces;
- permissions;
- search;
- recovery;
- handoff.

#### Controlled AI Workflows

Examples of concerns:

- retrieval;
- model-assisted analysis;
- explicit approval;
- source evidence;
- deterministic execution boundaries;
- local / bounded inference where appropriate.

### Rule

This section is a **capability map**, not a service-price table.

It should be scan-friendly and compact.

---

## 6. Section 2 — Selected Systems

This is the core proof section and should appear before services.

### 6.1 Asgard — Flagship

Asgard gets the largest visual and narrative footprint.

Recommended card structure:

```text
ASGARD
Backend / AI Operations

Problem
How do asynchronous AI jobs stay inspectable
when execution fails or needs recovery?

System
Persistent Job → Kafka → Local AI → Result → Persistence
Failure → Redrive → Audit → Retry

Evidence
Real local-model execution
Recovery / redrive proof
Prometheus / Grafana path
Bounded backup / restore verification

What this proves
Backend system design beyond the happy path

[View Case] [GitHub]
```

### Visual treatment

- large flagship block;
- architecture / lifecycle visual preferred over a generic dashboard screenshot;
- one operator or metrics proof image can support it;
- no production-readiness language.

### Important disclosure

Do not market atomic / guaranteed queue delivery. The known dispatch publish-failure window must remain outside positive reliability claims until separately proven.

---

### 6.2 Papyr.us — Supporting system

Recommended card structure:

```text
PAPYR.US
Internal Product / Team Workflow

Problem
Teams need a usable shared knowledge workflow
with clear access and recovery boundaries.

System
Authenticated team access
Document lifecycle
Permission-bounded search
Version / database recovery

Evidence
Golden journeys
Authorization tests
Recovery execution

What this proves
End-to-end product and internal-tool delivery

[View Case] [GitHub]
```

### Visual treatment

- product UI is useful here;
- replace stale “no team” imagery before final production rollout;
- show a real accepted team/document state rather than historical breadth.

---

### 6.3 Guided Agent OS — Supporting system

Recommended card structure:

```text
GUIDED AGENT OS
Controlled AI Execution

Problem
How can AI suggest actions without receiving
unrestricted execution authority?

System
Request → Retrieval → Tool Plan → Policy
→ Human Approval → Allowlisted Execution → Audit

Evidence
Positive local-model path
Approval / reject paths
Backend tool-policy enforcement
Persisted audit timeline

What this proves
AI assistance separated from execution authority

[View Case] [GitHub]
```

### Visual treatment

- approval/rejection/audit UI is more valuable than generic RAG screenshots;
- explicitly label repository-owned fixture tools in detailed case content.

---

## 7. Section 3 — Production Credibility

### Purpose

Connect the proof projects to five years of real backend work.

This section should answer:

> “Are these only personal demos, or is there production engineering behind them?”

### Recommended structure

A compact experience statement followed by evidence anchors:

- **5 years** enterprise / public-sector backend engineering;
- **~30%** API latency improvement;
- **~100 → 2,000+** concurrency-path improvement;
- millions-of-records Oracle → MySQL migration;
- OAuth2 / SSO with Java / Quarkus / Keycloak.

Then one short paragraph connecting that background to current systems work.

### Avoid

- a full CV pasted into the homepage;
- employer-by-employer detail before the proof projects;
- mixing work-history metrics with personal-project metrics.

### CTA

- Resume / Experience can be linked here once the canonical public resume is reconciled.

---

## 8. Section 4 — ProblemSolverArc / Work With Me

### Purpose

Commercial conversion remains important, but it comes **after identity and evidence**.

Recommended intro:

> ProblemSolverArc is the service / execution layer for turning scoped operational problems into working systems.

Retain the three existing service shapes:

1. Workflow Automation Sprint
2. Internal Tool Starter
3. Backend MVP Sprint

### Change in presentation

Current V2 gives these service cards major early-page prominence.

V3 should make them more compact.

Each card only needs:

- problem fit;
- typical deliverable;
- key boundary;
- inquiry CTA.

Move detailed exclusions / repeated explanation into FAQ or case-study detail if necessary.

### ICP placement

The current “who this is for” content should move here rather than living in the first major content block.

---

## 9. Section 5 — Working Principle + More Work

### Working Principle

Use a short explicit operating model:

```text
Structure the workflow first.
Keep deterministic controls deterministic.
Use AI where it creates leverage.
Make state, authority, evidence and failure visible.
```

This replaces vague “AI-first” positioning.

### More Work

Keep this intentionally smaller than Selected Systems.

#### ClaimTrace

Display as a technically strong source-verifiable document workflow.

Until its proof-presentation issue is corrected:

- do not use the contradictory grounded-answer screenshot;
- do not give it flagship visual weight;
- link to repository / bounded description only if shown.

After proof repair it can be reevaluated for Selected Systems.

#### K-Beauty SKU Ops

Display as:

- operational workflow;
- internal-tool / commercial-domain case;
- synthetic/demo evidence clearly labelled.

Do not imply validated profitability or live market success.

### Optional future structure

If project inventory grows, move secondary work to a dedicated `/work` page rather than lengthening the homepage indefinitely.

---

## 10. Section 6 — About

### Purpose

Add the person without duplicating the résumé.

Recommended topics:

- backend-first engineering background;
- system-builder mindset;
- selective AI use;
- architecture / validation / orchestration focus;
- preference for inspectable, handoff-friendly systems.

### ProblemSolverArc relationship

Explain in one sentence:

> ProblemSolverArc is the service identity under which I package scoped workflow, internal-tool and backend MVP work.

Do not present it as a separate company unless that later becomes factually appropriate.

---

## 11. Section 7 — Engagement + FAQ

The current engagement model and FAQ remain useful, but they are **late-stage conversion support**, not identity content.

### Engagement

Keep:

- 2–6 week scoped phase framing;
- code / handoff orientation;
- document / async communication preference;
- scope-change discipline.

Compress the visual footprint if possible.

### FAQ

Retain questions that remove actual buyer friction:

- small project fit;
- meetings;
- unclear scope;
- AI necessity;
- handoff / ownership;
- sensitive data / deployment boundary where appropriate.

Do not use FAQ to repeat service marketing copy.

---

## 12. Section 8 — Contact

Keep email-first.

### Primary action

`dongyoun.jeon@gmail.com`

### Useful inquiry context

Ask for only enough information to start:

- current workflow / problem;
- who uses it;
- biggest bottleneck;
- desired first outcome;
- rough timing.

### Secondary links

- GitHub
- LinkedIn
- canonical public Resume, once reconciled.

---

## 13. Final Section Order

Target implementation order:

```text
Persistent identity / sidebar
        ↓
01 What I Build
        ↓
02 Selected Systems
   ├─ Asgard
   ├─ Papyr.us
   └─ Guided Agent OS
        ↓
03 Production Credibility
        ↓
04 ProblemSolverArc / Services
        ↓
05 Working Principle + More Work
   ├─ ClaimTrace
   └─ K-Beauty SKU Ops
        ↓
06 About
        ↓
07 Engagement + FAQ
        ↓
08 Contact
```

The identity layer is visible before Section 01 and remains persistent on desktop.

---

## 14. Current → V3 Migration Map

| Current element | V3 action |
| --- | --- |
| ProblemSolverArc top-level brand | Demote to secondary service brand |
| Current sidebar service headline | Replace with personal identity / concise positioning |
| About intro | Split between identity, What I Build, and About |
| Trust stats | Keep; move into first-screen / Production Credibility hierarchy |
| ICP cards near top | Move to Services |
| Services immediately after intro | Move below Selected Systems + Production Credibility |
| E-Commerce Scanner flagship | Replace with Asgard |
| SeoulGyeol supporting card | Remove from homepage primary proof |
| Restricted Ops Intake supporting card | Remove from homepage primary proof |
| Papyr.us old supporting slice | Upgrade to accepted bounded product proof |
| Guided Agent OS absent from live page | Add as supporting Selected System |
| ClaimTrace absent from live page | Add only as secondary More Work until proof repair |
| Why work with me | Reframe as Production Credibility + About |
| Engagement | Keep later |
| FAQ | Keep later |
| Email-first Contact | Keep |
| KO / EN / JA | Keep and require semantic alignment |

Removed homepage projects do not need to be deleted from repository history or case-study archives.

---

## 15. First-Screen Acceptance Test

On desktop and mobile, a first-time visitor should be able to answer all of the following without reaching the Services section:

- What is this person’s name?
- What is his professional role?
- What kind of systems does he build?
- Is there real production-backend experience?
- Where can I see selected work?
- How do I contact him?

If any answer requires reading the ProblemSolverArc service explanation first, the hierarchy is wrong.

---

## 16. Selected-Systems Acceptance Test

Each homepage project must answer four questions without opening GitHub:

1. What problem class is this?
2. What system was built?
3. What executed evidence exists?
4. What does this project prove about Dongyoun’s capabilities?

Technology badges are supporting metadata, not the main explanation.

---

## 17. Implementation Boundary

This IA document does **not** yet approve:

- final hero wording;
- final visual design;
- exact project-card copy;
- screenshot selection;
- new analytics provider;
- public résumé version;
- custom domain;
- code cleanup.

Those are downstream decisions.

The next implementation-planning step is:

1. lock first-screen copy;
2. lock Selected Systems card copy;
3. identify required proof assets;
4. map the approved structure into `index.html`, `i18n.js`, and `style.css`;
5. only then modify production code.
