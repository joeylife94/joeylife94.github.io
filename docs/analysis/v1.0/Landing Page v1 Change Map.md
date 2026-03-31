# Landing Page v1 Change Map

## 1. Goal of this Change Map
Map approved Phase 1 strategy into implementation-level section changes so a developer can execute without redefining scope.

## 2. Current-to-Target Mapping Summary

| Current section/component | Current state | Target action | Reason | Priority |
|---|---|---|---|---|
| Hero | Clear but broad capability messaging | **Revise** | Improve specificity: who/what/why-now | P0 |
| Trust strip | Exists and functional | **Keep (light revise)** | Preserve credibility structure | P1 |
| Target clients / ICP | Broad “small teams/startups/operators” framing | **Replace copy** | Better qualification with sharper profiles | P0 |
| Service packages | Present but framing can be clearer | **Revise (light)** | Clarify fit, duration, deliverables | P1 |
| Featured proof block | Visual proof exists, weak trust narrative | **Revise** | Convert to baseline→change→result mini-case | P0 |
| Additional proof cards | Existing cards/screenshots | **Keep (optional light revise)** | Avoid scope creep; retain proof volume | P1 |
| Process/engagement summary | Missing | **Add after proof** | Remove buyer uncertainty about work model | P0 |
| FAQ | Missing | **Add** | Handle key objections quickly | P0 |
| Contact section | Email-first friction | **Revise + add form** | Improve conversion path | P0 |
| Mobile sticky CTA | Exists | **Keep/improve target behavior** | Preserve mobile conversion accessibility | P1 |
| Pricing disclosure | Not emphasized | **Defer** | Out of Phase 1 | Deferred |
| SEO/schema/analytics/A-B tests | Not implemented | **Defer** | Explicitly later-phase work | Deferred |

## 3. Section Order Map
Target section sequence for Phase 1:
1. Hero
2. Trust strip
3. Target clients
4. Service packages
5. Featured case
6. More proof cards
7. Engagement model
8. FAQ
9. Contact form + email fallback

`ASSUMPTION:` Current DOM/order is close enough that reordering is minimal. If existing structure is equivalent for scan flow, preserve component order and only insert missing blocks.

## 4. Detailed Change Map by Section

### Hero
- **Current state:** Value proposition present but not narrowly scoped to manual-ops pain.
- **Required change:** Rewrite headline/subheadline/body + add why-now text + CTA microcopy.
- **Copy impact:** High (new top-of-page messaging).
- **UI impact:** Low (same layout), possible minor spacing tweaks.
- **Interaction impact:** Low (existing CTA preserved).
- **Implementation priority:** P0.
- **Dependency/blocker:** Final approved copy text (`TODO(copy)`).

### Trust strip
- **Current state:** Existing credibility strip.
- **Required change:** Keep structure; optional microcopy clarity edits.
- **Copy impact:** Low.
- **UI impact:** None/low.
- **Interaction impact:** None.
- **Implementation priority:** P1.
- **Dependency/blocker:** None.

### ICP / target clients
- **Current state:** Broad audience wording.
- **Required change:** Replace with 3 specific target profiles from plan.
- **Copy impact:** Medium/high.
- **UI impact:** Low (bullet/cards update).
- **Interaction impact:** None.
- **Implementation priority:** P0.
- **Dependency/blocker:** None.

### Service packages
- **Current state:** Package info exists but may not clearly show fit/duration/deliverables.
- **Required change:** Sharpen labels and summary lines (no redesign).
- **Copy impact:** Medium.
- **UI impact:** Low/medium depending on card structure.
- **Interaction impact:** Low (CTA links stay).
- **Implementation priority:** P1.
- **Dependency/blocker:** `OPEN QUESTION` on card schema flexibility.

### Featured case
- **Current state:** Proof visible, narrative framing weak.
- **Required change:** Rewrite one flagship case into baseline→change→result→good-fit.
- **Copy impact:** High.
- **UI impact:** Low/medium (section subheadings may change).
- **Interaction impact:** None.
- **Implementation priority:** P0.
- **Dependency/blocker:** `TODO` identify canonical case source in current content.

### Supporting proof cards
- **Current state:** Existing cards with visuals and some metrics.
- **Required change:** Keep; optionally normalize short challenge/built/impact lines.
- **Copy impact:** Low/medium.
- **UI impact:** Low.
- **Interaction impact:** None.
- **Implementation priority:** P1.
- **Dependency/blocker:** None.

### Process / engagement model
- **Current state:** Missing.
- **Required change:** Insert new block with 4 required subsections.
- **Copy impact:** High (net new content).
- **UI impact:** Medium (new section component).
- **Interaction impact:** Low (read-only content).
- **Implementation priority:** P0.
- **Dependency/blocker:** None.

### FAQ
- **Current state:** Missing.
- **Required change:** Add 5–7 item FAQ section using approved objection topics.
- **Copy impact:** High.
- **UI impact:** Medium (accordion/list component).
- **Interaction impact:** Medium (expand/collapse if accordion).
- **Implementation priority:** P0.
- **Dependency/blocker:** `TODO(copy)` final answer text approval.

### Contact section
- **Current state:** Email-first contact path.
- **Required change:** Add short form as primary path + keep email fallback.
- **Copy impact:** High (field labels/helper/success/failure text).
- **UI impact:** Medium/high (new form UI).
- **Interaction impact:** High (validation, submit states).
- **Implementation priority:** P0.
- **Dependency/blocker:** `OPEN QUESTION` submission endpoint/provider.

### Mobile sticky CTA
- **Current state:** Existing mobile CTA present.
- **Required change:** Keep behavior; ensure it routes to form section anchor.
- **Copy impact:** Low.
- **UI impact:** Low.
- **Interaction impact:** Medium (anchor target accuracy).
- **Implementation priority:** P1.
- **Dependency/blocker:** None.

## 5. CTA Flow Map
Primary flow (Phase 1 target):
1. Hero CTA click
2. Scroll/jump to Contact Form section
3. Form completion + submit success
4. Email fallback visible for users who prefer direct mail

Secondary flow:
- Nav CTA → Contact Form anchor
- Mobile sticky CTA → Contact Form anchor

Rules:
- Keep CTA labels consistent across hero/nav/mobile.
- Preserve existing CTA placements; only improve destination and supporting microcopy.

## 6. Form Insertion Map
- **Insertion point:** Contact/inquiry section at end of page (after FAQ).
- **Order inside section:**
  1) Section heading + reassurance copy
  2) Short form
  3) Success/error feedback region
  4) Email fallback line
- **Anchor target:** `#contact` or existing equivalent (`TODO: confirm existing anchor id`).
- **Validation order:** required fields → format checks → submit.

## 7. Copy Replacement Map

| Copy block | Action | Source status |
|---|---|---|
| Hero headline/body | Replace | Direction approved; exact final text `TODO(copy)` |
| Why-now microcopy | Add | Direction approved |
| ICP bullets (3) | Replace | Approved directional profiles |
| Package labels/fit text | Revise | Approved directional labels |
| Featured case narrative | Replace | Structure approved; concrete wording `TODO(copy)` |
| Engagement model text | Add | Approved content model |
| FAQ Q/A | Add | Topics approved; final answers `TODO(copy)` |
| Form helper + success/error text | Add | Direction approved |

## 8. Deferred Changes
Explicitly deferred beyond Phase 1:
- Public pricing/budget transparency rollout
- Risk-reduction policy section expansion
- Analytics event instrumentation
- Structured data/SEO enhancements
- A/B testing experiments
- Broad design refresh
- New testimonial program

## 9. Risks / Ambiguities
1. **Form backend unknown:** No confirmed endpoint/provider for submission handling.
2. **Final copy source unknown:** Approved strategy exists, but exact production copy lines may not be finalized.
3. **Featured case selection unclear:** Need explicit mapping to one existing project.
4. **Component naming uncertainty:** File/component IDs are not confirmed (`TODO` during code mapping).
5. **Accordion accessibility risk:** If custom FAQ accordion is introduced, keyboard/focus handling must be verified.

## 10. Recommended Implementation Sequence
1. **Content scaffold pass**
   - Add section placeholders for Engagement model + FAQ + Contact form.
2. **Hero + ICP sharpening**
   - Update highest-impact copy first.
3. **Featured case rewrite**
   - Convert one proof block to required narrative structure.
4. **Contact form behavior**
   - Implement validation, submit states, fallback email.
5. **Package/trust/proof polish**
   - Low-risk copy refinements only.
6. **Final QA pass**
   - CTA anchor flow, mobile readability, focus states, consistency check.
