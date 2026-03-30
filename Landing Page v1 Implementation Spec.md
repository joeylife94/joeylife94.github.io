# Landing Page v1 Implementation Spec

## 1. Objective
Implement the already-approved **Phase 1 conversion foundation** updates from **"Freelance Landing Page Improvement Plan v1"** without redesigning the site.

Primary objective: reduce inquiry friction and improve qualification by shipping only these approved improvements:
- Sharper hero
- Sharper ICP wording
- Engagement model block
- Short contact form (+ email fallback)
- FAQ block
- One rewritten featured case (baseline → change → result)

## 2. Phase 1 Scope
In scope for this implementation pass:
1. Hero copy sharpening (problem + who it is for + why now + CTA microcopy)
2. ICP/Target clients wording sharpening
3. Engagement model section addition
4. FAQ section addition (5–7 items)
5. Contact form insertion (short intake) with validation + success state
6. Keep/adjust existing section order toward approved IA
7. Rewrite one existing flagship case block into mini case-study format
8. Keep current design language; no full visual redesign

## 3. Out of Scope
Do **not** implement in this pass:
- Public pricing table or pricing disclosure
- New testimonials (invented or newly sourced)
- SEO/schema implementation (`Person`, `ProfessionalService`, `FAQPage`)
- Analytics instrumentation/events
- A/B testing
- Full component redesign/theme overhaul
- Heavy animation additions
- New service lines not in current offer

## 4. Preserve / Change / Add

### Preserve
- Existing visual style system (typography scale, color system, spacing rhythm) unless required for readability/accessibility.
- Existing trust strip concept.
- Existing service package section presence (content can be sharpened, structure preserved).
- Existing proof gallery/cards beyond the one featured rewrite.
- Existing CTA pattern (hero/nav/mobile presence) while improving clarity.

### Change
- Hero headline/subheadline/body/CTA microcopy to be more specific to manual ops workflow problems.
- ICP section wording from broad audience to 3 sharper target profiles.
- One featured case narrative structure (baseline → what changed → result → good fit).
- Minor package labels/content framing only if already present and needed for Phase 1 clarity.

### Add
- New **Engagement model** block: timeline, deliverables, communication, scope handling.
- New **FAQ** block with 5–7 approved objection topics.
- New **short contact form** plus email fallback directly under/with contact section.

## 5. Section-by-Section Requirements

### Hero
- Must clearly communicate:
  - Who this is for (manual, spreadsheet/Slack/email-driven operations)
  - What is transformed (manual work → small usable systems)
  - Why now (cost of ongoing manual ops: speed + errors)
- Must include primary CTA and short trust microcopy (e.g., response window, can inquire with incomplete scope).
- Must avoid generic “I build anything” positioning.
- Copy source: approved plan language; if final Korean/English variant unavailable, mark as `TODO: final localized copy`.

### Trust strip
- Keep existing trust strip location/function.
- Allow only minimal copy polishing for clarity.
- No new logos/testimonials should be invented.

### Target clients / ICP
- Replace broad persona statements with exactly 3 sharper profiles aligned to plan direction:
  1. 0–10 person SaaS teams with ops bottlenecks
  2. Founders validating internal workflow MVP in 2–4 weeks
  3. Teams replacing spreadsheet-based approval/tracking flows
- Add optional “not a fit” single-line filter if space exists (`ASSUMPTION: existing section supports short qualifier text`).

### Service packages
- Preserve existing package section and hierarchy.
- Ensure labels follow approved framing if currently editable:
  - Internal Tool Starter
  - Workflow Automation Sprint
  - Backend MVP Sprint
- Each package should show: typical duration, expected deliverables, best-fit scenario.
- If package component structure cannot safely support all 3 metadata fields, mark `TODO` and preserve existing card layout.

### Featured case
- Rewrite one flagship proof block into this structure:
  - Baseline
  - What changed
  - Result
  - Good fit
- Do not fabricate metrics. If source metrics are unclear, use qualitative outcomes and mark missing metrics as `TODO`.

### Additional proof cards
- Keep existing cards.
- Optional light copy normalization toward challenge → built → impact format only if low risk and no major layout changes required.
- Do not add new screenshots in Phase 1 unless already available in repo assets.

### Engagement model
- Insert new section after proof area (target position: after supporting proof cards).
- Required sub-blocks:
  - Typical timeline (2–6 weeks small scoped projects)
  - Deliverables (working MVP/scoped implementation + core backend/workflow logic + optional internal UI + handoff notes)
  - Communication (email/doc-first, async updates with screenshots/demo clips, short calls when needed)
  - Scope handling (limited first scope, new requests deferred to next step)
- Must be scannable (cards/list format).

### FAQ
- Insert after engagement model.
- Include 5–7 items from approved topics:
  1. Scope not fully defined yet?
  2. Small project acceptance?
  3. Meeting load?
  4. Preferred stack/flexibility?
  5. Post-handoff support?
  6. IP/ownership?
  7. Sensitive data handling?
- Can use accordion or stacked Q/A; default closed state preferred on mobile (`ASSUMPTION`).

### Contact / inquiry section
- Add short form and keep direct email fallback in same section.
- Form must be the primary interaction path; email remains secondary.
- Include guidance copy prompting manual workflow context, owner, bottleneck, desired outcome, timeline.

## 6. Copy Requirements
- Use approved positioning language; do not broaden service claims.
- Tone: practical, operational, trust-building, non-hype.
- Required copy blocks:
  - Hero promise + who for + why-now microcopy
  - ICP profile bullets (3)
  - Engagement model 4-subsection copy
  - FAQ Q/A (5–7)
  - Contact helper copy
  - Featured case rewritten narrative
- `TODO`: final production copy deck per locale if not already present in repository.
- Any missing exact approved sentence must be tagged inline as `TODO(copy)`.

## 7. Contact Form Specification
Required fields:
1. Name (required)
2. Email (required, email format validation)
3. What are you trying to improve? (required, textarea)
4. Project type (required select):
   - Internal tool
   - Workflow automation
   - Backend MVP
   - Not sure yet
5. Target timeline (required, short text/select)
6. Budget range (optional; can be hidden from UI if plan says internal-only)

Behavior rules:
- Client-side validation + inline error text.
- Disabled submit state while sending.
- Success state message after submit.
- Failure state with retry guidance and email fallback.
- Preserve accessibility: labels, focus states, keyboard submit, aria-invalid.
- Spam protection approach = `TODO` (ASSUMPTION: no backend anti-spam currently configured).

Submission handling:
- `OPEN QUESTION`: Existing backend endpoint/provider for form submission is unknown.
- If no backend available, implement minimal provider integration already used in project OR temporary mailto fallback with clear `TODO(back-end form endpoint)`.

## 8. Interaction / UX Rules
- Keep interactions simple and fast; no animation-heavy behavior.
- CTA flow must remain persistent across hero/nav/mobile.
- Mobile sticky CTA may be kept/enhanced, not replaced.
- FAQ interaction should prioritize scannability on mobile.
- Ensure text contrast/readability in secondary copy.
- Improve visible focus states for all interactive controls.

## 9. Technical Constraints
- Must fit existing code architecture and styling conventions.
- Avoid introducing new heavy dependencies for Phase 1.
- Reuse existing section/container components where possible.
- Maintain responsive behavior across mobile/tablet/desktop breakpoints.
- Preserve current analytics/status quo (no new tracking in this phase).
- Preserve current performance profile (no large media additions).

## 10. Open Questions / Assumptions
1. **OPEN QUESTION:** Exact source file/component names for each landing section are not confirmed.
2. **OPEN QUESTION:** Contact form backend integration path is not confirmed.
3. **ASSUMPTION:** Existing CTA anchors can be reused for form section targeting.
4. **ASSUMPTION:** Existing trust strip and proof sections already have reusable card components.
5. **TODO:** Confirm final copy language (Korean-first vs bilingual) from approved copy source.
6. **TODO:** Confirm which existing proof item is designated as the “featured case”.

## 11. Developer Notes
- Implement in small, reviewable commits by section grouping:
  1) Hero + ICP copy updates
  2) Engagement model + FAQ insertion
  3) Contact form + submit states
  4) Featured case rewrite + cleanup
- Prefer content config/data files (if present) over hardcoding strings in components.
- Add temporary placeholders only when marked `TODO(copy)` and easy to replace.
- Do not refactor unrelated sections.

## 12. Implementation Readiness Summary
Readiness: **Ready with minor content/backend clarifications**.
- Development can start immediately for layout/section changes.
- Blocking clarifications required only for:
  - final copy text approval
  - form submission endpoint/integration
  - featured-case source selection

If blockers remain unresolved, ship UI-complete implementation with explicit `TODO` markers rather than inventing strategy/copy.
