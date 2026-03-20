# Project
Restricted Ops Intake (repository: `restricted-ops-intake-mvp`).

# Problem
This project appears to address missed or hard-to-track internal operations requests sent in Slack by converting messages from approved channels into structured intake records, then managing them in a web console. It explicitly avoids workspace-wide monitoring and rejects DM intake.

# Design Decision
- Restricted intake policy: only pre-approved Slack channels are accepted (`channel_scopes` with active flag); unapproved channels and DMs are rejected.
- Security-first webhook handling: Slack signature verification is enforced by default, with a development-only insecure opt-in path.
- Idempotency/traceability model: Slack message IDs are unique in intake records; raw event payloads and audit logs are persisted.
- Operational workflow design: intake records support status transitions, assignee changes, and processing notes.
- MVP scoping decision: mocked login/session for demo operation while preserving role-oriented data models (`OPERATOR` / `MANAGER` / `ADMIN`).

# Core Function
- Receives Slack Events API (and dev-only flat test payloads) at `/api/slack/intake`.
- Creates and stores intake records for approved channels.
- Provides dashboard/list/detail views for intake tracking.
- Supports operator actions: status update, assignee update, and note append.
- Provides channel scope management and a global audit explorer with filtering/pagination.
- Includes AI extraction plumbing for structured summary/extraction with fallback behavior when API key is missing.

# Technical Point
- Stack: Next.js (App Router), TypeScript, Prisma, PostgreSQL, Tailwind CSS.
- Data model includes intake, channel scope, processing notes, assignment history, and immutable audit logs.
- Slack intake route handles signature validation, retry awareness logging, event type filtering, DM blocking, allowlist checks, and required field validation.
- Integration tests cover intake flow, channel management, audit explorer, and AI extraction paths.
- Validation workflow script (`npm run validate`) chains test DB safety checks, migration deploy, and Vitest execution.

# Result / Limitation
- Confirmed in-repo state: functional MVP with implemented intake console, audit tracking, channel scope controls, and tests.
- Limitations stated in repository materials: authentication is currently mocked for demo use; production auth integration is a future step.
- Quantitative production outcomes (e.g., reduced response time, adoption metrics): TBD.

# Consistency Check
- Naming appears consistent around “Restricted Ops Intake” and “restricted-ops-intake-mvp”.
- Overclaim risk controlled by avoiding enterprise/SaaS claims and retaining MVP wording.
- Public-safe wording preserved by describing approved-channel intake and auditability without exposing internal credentials/config values.
- Any claim not directly evidenced (business KPIs, deployment scale, customer impact) is marked as TBD.

# Landing-Safe Summary
Restricted Ops Intake is a Next.js + Prisma MVP that captures messages from approved Slack channels into a structured operations queue, then supports assignment, status tracking, notes, and auditable history in a web console. It is intentionally scoped to restricted channel intake (not workspace surveillance), with webhook validation and test coverage included. Business impact metrics are TBD.
