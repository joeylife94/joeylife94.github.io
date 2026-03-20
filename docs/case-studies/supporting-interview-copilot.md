# Project
Interview Copilot v3.0

# Problem
This repository appears to target real-time interview/meeting assistance by combining live transcription with support features such as translation, question detection, hint planning, keyword extraction, sentiment/speech analytics, and optional gesture analysis in a local-first workflow.

# Design Decision
- The project is structured as a pipeline: audio capture → transcription (Phase A) → processing modules (translation/keywords/analytics/storage) → question/intent/hint pipeline (Phase B) → WebSocket delivery to a web UI.
- The codebase emphasizes minimizing external API dependency and keeping core functions local; optional LLM rewriting exists as a selectable module.
- The server entrypoint (`ui_server.py`) centralizes feature toggles (translation, keywords, gesture, sentiment, analytics, meeting mode, conversation store) and exposes both WebSocket and REST endpoints.
- The repository includes a dedicated unit-test suite and enforces coverage thresholds in pytest configuration.

# Core Function
- Run a FastAPI-based web UI server for live transcript streaming and assistant panels.
- Detect likely interview questions, classify intent categories, and produce structured answer hints.
- Translate transcript segments (including configurable partial/final behavior) and publish results to clients.
- Extract rolling keywords, compute speech analytics (e.g., fillers/WPM), and run rule-based sentiment updates.
- Provide meeting-mode helpers (topics/action items/summary flow) and conversation text persistence/export.

# Technical Point
- Real-time event architecture is explicitly documented via WebSocket message types and control commands.
- Configurable app modes (`interview` / `meeting`) and feature flags are implemented in runtime session state.
- Multiple supporting modules are pure-Python implementations (e.g., keyword extraction, conversation store, sentiment, speech analytics, meeting assistant), while transcription and optional CV features use specialized libraries.
- Test tooling is configured with strict pytest options and coverage fail-under thresholds; hardware/UI-dependent modules are excluded from unit coverage.

# Result / Limitation
- Confirmed outcome data (e.g., measured production performance, user adoption, business impact) is not clearly evidenced in repository artifacts: TBD.
- Some feature claims in documentation (e.g., accuracy/performance figures) are present, but independently validated benchmark artifacts are not clearly identified in this repository: TBD.
- Hardware-dependent capabilities (audio devices/camera) and optional external model/API paths may limit reproducibility in non-matching environments.

# Consistency Check
- Naming consistency: repository and docs consistently reference “Interview Copilot” with versioned labels, but version strings differ across files (e.g., v3.0 docs vs `APP_VERSION` in server code), so portfolio wording should avoid overly specific version claims unless pinned.
- Overclaim risk: avoid asserting quantified accuracy/performance without attached benchmark evidence; keep these as “documented targets/claims” or TBD.
- Public-safe wording: avoid exposing internal paths, tokens, or user data assumptions; describe capability categories only.
- Unclear claims: origin/fork relationship is documented; if used publicly, frame as “extended fork” only when citation is provided.

# Landing-Safe Summary
Interview Copilot is a Python-based, real-time interview/meeting assistant that streams transcription to a web UI and layers practical support features (question-aware hints, translation, keywords, analytics, and text session storage) through a modular, mostly local-first processing pipeline. Verified public-safe impact metrics are TBD.
