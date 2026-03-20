# Project
SeoulGyeol Skin Lab (`seoulgyeol-skinlab`).

# Problem
This repository describes a privacy-first skin analysis MVP focused on generating objective skin reports without ads, product recommendations, or sales funnel behavior. The implemented flow suggests the project addresses a need for structured self-assessment (consent + multi-step survey) and report generation with minimal personal data handling.

# Design Decision
- App architecture uses Next.js App Router with client-side flow state in `AppContext`, splitting the journey into landing, consent, survey, and report steps.
- The survey and report are multilingual (EN/KO/KA/RU) through local JSON translation files and a fallback translation helper.
- Scoring logic is centralized in `src/lib/scoring.ts` with a fixed algorithm version (`1.0`) and explicit mapping rules for skin type, sensitivity, environment risk, routine, and recommendation keys.
- Data persistence and report email delivery are separated into API routes:
  - `/api/save-analysis`: validates consent and stores analysis data in Supabase when configured.
  - `/api/send-report`: builds localized email content and sends via SendGrid (or logs in dev mode).
- Privacy and abuse controls visible in code include consent gating before save, email hashing for logs, IP-based rate limiting, and per-email cooldown checks.

# Core Function
- User-facing flow:
  1. Select language.
  2. Accept consent terms.
  3. Complete 5 survey steps.
  4. Generate and view a skin report.
  5. Optionally print/save PDF and optionally email the report.
- System-facing flow:
  - Compute report from survey answers.
  - Save analysis payload to `skin_analyses` (when Supabase is configured).
  - Send or simulate sending localized email reports.

# Technical Point
- Frontend stack: Next.js 16 + React 19 + TypeScript + Tailwind CSS.
- Backend integration points:
  - Supabase client/admin usage for insert and logging operations.
  - SendGrid HTTP API integration for mail dispatch.
- i18n implementation is lightweight and local-file based (`src/lib/i18n/*.json`) with shared use across UI and email rendering.
- The repository includes a Supabase schema file with tables for analyses and email logs, plus privacy-related fields (consent metadata, hashed email logs).

# Result / Limitation
- Confirmed from repository:
  - End-to-end MVP flow is implemented in code (landing → consent → survey → report).
  - API endpoints and database schema are present.
- Limitations / TBD:
  - No production performance metrics, usage KPIs, or clinical validation outcomes are provided in this repository (TBD).
  - Some operational guarantees depend on external setup (Supabase project configuration, SendGrid API key, optional retention job setup).
  - Automated test suite structure is not evident in the repository (TBD).

# Consistency Check
- Naming consistency:
  - Project naming is mostly consistent as “SeoulGyeol Skin Lab” / `seoulgyeol-skinlab`.
- Overclaim risk check:
  - Avoid claiming medical diagnosis, commercial impact, or measured user outcomes; those are not evidenced here.
- Public-safe wording:
  - This skeleton avoids exposing secrets or internal credentials and only references architecture/behavior visible in tracked files.
- Unclear claim handling:
  - Any unsupported outcomes or metrics are marked as TBD.

# Landing-Safe Summary
SeoulGyeol Skin Lab is a multilingual, privacy-first skin analysis MVP built with Next.js. It guides users through consent and a five-step survey, computes a structured skin report, and supports optional report delivery by email. The repository shows clear privacy-minded design choices (minimal data flow, consent checks, hashed email logging), while measurable product outcomes remain TBD.
