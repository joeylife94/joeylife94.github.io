# Landing Page v1 Acceptance Checklist

## 1. Purpose
Define objective, testable completion criteria for Phase 1 landing-page improvements from the approved plan.

## 2. Completion Rule
Phase 1 is **done** only when all **Scope Gates** pass and no **Non-Goal/Guardrail** violations are present.

## 3. Scope Gates
Mark each item PASS/FAIL.
- [ ] Hero sharpened (specific audience + problem + outcome + why-now context).
- [ ] ICP clarified into 3 sharper target profiles.
- [ ] Engagement model section added with 4 required parts (timeline, deliverables, communication, scope handling).
- [ ] FAQ section added with 5–7 relevant objections.
- [ ] Contact form added as primary inquiry path.
- [ ] Featured case rewritten into baseline → change → result (+ good fit).
- [ ] CTA flow preserved or improved (hero/nav/mobile routes to inquiry path).
- [ ] Existing visual consistency preserved (no unintended redesign).

## 4. Functional Checklist
- [ ] Hero primary CTA navigates to inquiry/contact target.
- [ ] Nav CTA navigates to inquiry/contact target.
- [ ] Mobile sticky CTA (if present) navigates to inquiry/contact target.
- [ ] Contact form renders on mobile/tablet/desktop.
- [ ] Required form fields block submit when empty.
- [ ] Email field validates format.
- [ ] Submit button has loading/disabled state during request.
- [ ] Success state appears after successful submit.
- [ ] Error state appears on failed submit and includes recovery instruction.
- [ ] Email fallback is visible even when form exists.
- [ ] FAQ expand/collapse works with mouse and keyboard (if accordion UI used).
- [ ] Focus indicators are visible on all interactive elements.

## 5. Content Checklist
- [ ] Hero avoids generic “build anything” claims.
- [ ] Hero copy references manual/spreadsheet/Slack/email-driven operational pain.
- [ ] Hero includes trust microcopy (e.g., expected response window / scope can be incomplete).
- [ ] ICP section contains exactly 3 primary target profiles aligned with approved strategy.
- [ ] Service package text remains within current offer boundaries.
- [ ] Featured case includes all required subparts: baseline, what changed, result, good fit.
- [ ] No fabricated metrics or fabricated client claims added.
- [ ] FAQ includes approved topic coverage:
  - [ ] Scope clarity uncertainty
  - [ ] Small project acceptance
  - [ ] Communication/meeting load
  - [ ] Stack flexibility
  - [ ] Post-handoff support
  - [ ] IP/ownership
  - [ ] Sensitive data handling
- [ ] Contact helper copy asks for workflow context, bottleneck, and desired outcome.
- [ ] Any unresolved copy is explicitly marked `TODO(copy)`; no silent placeholders.

## 6. UX / Layout Checklist
- [ ] Section order follows approved flow or equivalent scan-friendly mapping:
  Hero → Trust → Target clients → Service packages → Featured case → Proof cards → Engagement model → FAQ → Contact.
- [ ] New sections (Engagement model, FAQ, Contact form) align with existing spacing and typographic rhythm.
- [ ] Secondary text contrast is readable on all backgrounds.
- [ ] Form field labels remain visible and unambiguous.
- [ ] Error/success messages are clearly legible and placed near form actions.
- [ ] Mobile layout has no overlapping CTA/form elements.
- [ ] No jarring animation introduced.

## 7. Non-Goals / Guardrail Checklist
All items must be TRUE.
- [ ] No public pricing exposure added.
- [ ] No new testimonials invented.
- [ ] No SEO/schema work added in this phase.
- [ ] No A/B testing logic introduced.
- [ ] No unnecessary animation package or heavy motion layer introduced.
- [ ] No full landing-page redesign attempted.
- [ ] No new strategic positioning beyond approved Phase 1 direction.

## 8. Evidence Required from Developer
Required handoff artifacts:
1. Diff summary by section changed.
2. Before/after screenshots for:
   - Hero
   - Engagement model
   - FAQ
   - Contact form
   - Featured case rewrite block
3. Form validation evidence:
   - Empty required-field error
   - Invalid email error
   - Success state
   - Failure state
4. Device viewport checks:
   - Mobile (~375px)
   - Tablet (~768px)
   - Desktop (>=1280px)
5. List of unresolved `TODO`, `ASSUMPTION`, and `OPEN QUESTION` items (if any).

## 9. Final Review Verdict Template

**Status:** PASS / PASS WITH MINOR ISSUES / FAIL

**Summary:**
- (1–3 bullets on what was completed vs. Phase 1 scope)

**Remaining issues:**
- (bullet list; write `None` if none)

**Safe to merge:** Yes / No

## 10. Optional Validation Notes
- Optional lighthouse/performance snapshot may be provided, but not required for Phase 1 acceptance.
- Optional copy QA by stakeholder may replace `TODO(copy)` placeholders before merge.
- If form backend is not available, reviewer may grant **PASS WITH MINOR ISSUES** only when:
  - UI/validation states are complete,
  - failure path is explicit,
  - email fallback works,
  - and backend TODO is documented.
