# Proof Assets Pack v2

## Purpose
This document summarizes the current portfolio proof assets, their role in the portfolio, and the strongest publicly explainable proof points for each project.

It is intentionally limited to **asset summaries**.
Evidence collection tasks, screenshot checklists, and immediate next actions should live in `evidence-capture-queue.md`.

## Current Portfolio Structure

- **Flagship:** E-Commerce Scanner
- **Supporting 1:** SeoulGyeol Skin Lab
- **Supporting 2:** Restricted Ops Intake MVP
- **Supporting 3:** Papyr.us
- **Supporting 4:** Interview Copilot

---

## 1. E-Commerce Scanner

**Role**  
Flagship Proof Asset

**One-Line Definition**  
A scanner-based operations tool for comparing Korean wholesale products across markets and supporting margin analysis and structured reporting.

**Problem**  
Cross-market pricing comparison and profitability analysis become slow, hard to repeat, and difficult to preserve as decision evidence when handled manually.

**My Role**  
I designed and implemented the scan pipeline, margin-analysis workflow, reporting output structure, and dashboard-oriented review flow.

**Key Proof Points**
- Async scanning pipeline for repeatable market checks
- YAML-based country and platform configuration structure
- SQLite persistence layer with JSON, Excel, AI-prompt-ready, and dashboard-linked outputs

**Structural Result**  
This project turns manual product research into a repeatable scan, analysis, and output workflow.  
It does not yet prove external business KPI, but it does show a reusable operational decision system.

**Public Exposure**  
Safe for external portfolio use.

**Available Proof**
- README
- CLI/demo commands
- Repository structure
- AI prompt generation flow
- Dashboard code

## Architecture Bullets
- `run_scan` orchestrates a six-step pipeline: config/load, exchange-rate initialization, Korean wholesale collection, multi-country matching, margin analysis, then report/output persistence in DB and files.
- Product discovery is composed as async fan-out by country/platform using `CountryManager` and `UniversalScraper.from_config`, with semaphore-limited concurrency and per-result enrichment such as `price_usd` and match confidence.
- Financial evaluation is separated into services: currency conversion feeds `MarginCalculator` logistics/customs/fee rules, and `ReportGenerator` emits JSON comparison and AI prompt artifacts under `output/`.

## Proof Statement Set
E-Commerce Scanner is a Python workflow that collects Korean wholesale product data and compares it against overseas marketplace prices to evaluate margin potential.  
The current repository clearly demonstrates a runnable orchestration path with scrapers, matching, margin calculation, report generation, and sample output artifacts in `output/`.  
Real business performance, live-run reliability, and externally validated outcome claims remain TBD in this repository snapshot.

---

## 2. SeoulGyeol Skin Lab

**Role**  
Supporting Proof Asset

**One-Line Definition**  
A privacy-first multilingual skin-analysis and report-delivery MVP.

**Problem**  
Many skin-diagnosis and report experiences are overly sales-driven, while their data handling and evaluation flow remain unclear.

**My Role**  
I designed and implemented the full MVP scope, including the survey flow, scoring logic, API layer, data schema, multilingual handling, and email-based report delivery.

**Key Proof Points**
- End-to-end flow from survey to analysis to report delivery
- Deterministic scoring engine
- Privacy-aware data handling and multilingual email/report flow

**Structural Result**  
This project demonstrates a working Next.js MVP with a clear privacy-first reporting pipeline.  
It does not yet prove commercial traction, but it does show strong product framing and system structure.

**Public Exposure**  
Safe for external portfolio use.

**Available Proof**
- README
- API routes
- Repository structure
- Architecture block
- Local/deploy docs

---

## 3. Restricted Ops Intake MVP

**Role**  
Supporting Proof Asset

**One-Line Definition**  
An internal intake MVP that turns approved Slack-channel requests into trackable, assignable, and auditable operational objects through a web console.

**Problem**  
When operational requests remain buried in Slack, teams face missed work, unclear ownership, and weak audit history.

**My Role**  
I designed and implemented the intake API, workflow UI, governance/control structure, audit surface, and documentation.

**Key Proof Points**
- Restricted-channel intake enforcement
- Trust chain based on signature verification, replay protection, and deduplication
- Request tracking, audit log, and operator workflow

**Structural Result**  
This project converts Slack requests from unstructured messages into traceable operational objects.  
It proves the local MVP workflow, though production maturity is not yet validated.

**Public Exposure**  
Partially safe. Public presentation requires identifier redaction and controlled screenshots.

**Available Proof**
- README
- Demo scripts
- API paths
- Repository structure
- Vitest integration tests

**Exposure Notes**
- Redact workspace, team, and channel identifiers
- Avoid exposing sensitive operational details or real request content

---

## 4. Papyr.us

**Role**  
Supporting Technical Proof Asset

**One-Line Definition**  
A Notion-style collaborative wiki and document platform with realtime collaboration, AI features, and team isolation.

**Problem**  
When documents, tasks, files, realtime collaboration, and AI-assisted knowledge work are fragmented, productivity and consistency drop.

**My Role**  
I worked across the full stack, integrating the frontend, backend, collaboration engine, AI features, security layers, and test structure.

**Key Proof Points**
- Realtime collaboration built on Yjs and Socket.IO
- AI Copilot, search, and writing-assist functionality
- RBAC, layered architecture, and documented test stack

**Structural Result**  
This project demonstrates broad technical coverage and strong documentation depth.  
It does not yet prove real-user KPI, but it is strong as technical systems proof.

**Public Exposure**  
Partially safe. Public use should stay at the architecture and test-proof level.

**Available Proof**
- README
- Docs
- Architecture diagram
- Repository structure
- Test scripts

**Exposure Notes**
- Limit exposure of auth, admin, and security details
- Focus on architecture, collaboration model, and test depth

---

## 5. Interview Copilot

**Role**  
Supporting Proof Asset

**Sensitivity**  
High caution required

**One-Line Definition**  
An interview and meeting support assistant that provides realtime transcription, translation, hints, and analysis.

**Problem**  
During interviews and meetings, realtime comprehension, recall, and response generation create high cognitive load.

**My Role**  
I maintained and extended the system through major module work, Web UI pipeline improvements, and integration documentation.

**Key Proof Points**
- Local-first end-to-end assistance pipeline
- Modular v3.0 expansion structure
- Depth in tests, documentation, and architecture

**Structural Result**  
The system has a real executable structure and verifiable technical assets.  
However, public demo scope must remain conservative because of sensitivity and exposure risk.

**Public Exposure**  
Partially safe. Only sanitized, demo-safe screens should be used externally.

**Available Proof**
- README
- API docs
- Architecture docs
- Tests
- Repository structure
- CLI commands

**Exposure Notes**
- Do not expose transcripts or conversation content
- Do not expose API keys
- Avoid any private interview or meeting data

---

## Positioning Summary

- **E-Commerce Scanner** anchors the portfolio as the clearest flagship for systems and operations storytelling.
- **SeoulGyeol Skin Lab** adds product-MVP and privacy-first framing.
- **Restricted Ops Intake MVP** shows governance, control, and audit-oriented system design.
- **Papyr.us** strengthens the technical depth layer of the portfolio.
- **Interview Copilot** adds realtime assistant-system proof, but must be handled with strong sensitivity controls.
