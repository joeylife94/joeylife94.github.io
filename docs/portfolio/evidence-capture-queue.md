# Evidence Capture Queue

## Objective
This document tracks the immediate evidence-capture work needed to strengthen the current proof assets pack.

## Priority Order
1. Flagship evidence first
2. Public-safe screenshots next
3. Architecture and test proof after that

---

## 1. E-Commerce Scanner
**Role**  
Flagship Proof Asset

**Priority**  
P1

**Capture Goal**
- Secure clean, public-safe visuals for flagship presentation
- Strengthen proof with architecture-level bullets

**Required Evidence**
- [ ] Dashboard screenshot 1
- [ ] Dashboard screenshot 2
- [ ] 3 architecture bullets extracted from implementation
- [ ] Optional: one short CLI/demo flow summary

**Public-Safe Checks**
- [ ] Remove or avoid any sensitive pricing or business data if present
- [ ] Keep screenshots focused on structure, dashboard, and workflow clarity

**Done When**
- [ ] 2 usable screenshots secured
- [ ] 3 architecture bullets written
- [ ] Ready to use in landing page / proof block

---

## 2. SeoulGyeol Skin Lab
**Role**  
Supporting Proof Asset

**Priority**  
P1

**Capture Goal**
- Show the end-to-end product flow clearly
- Keep privacy-first positioning visible

**Required Evidence**
- [ ] Survey screen screenshot
- [ ] Report/result screen screenshot
- [ ] Optional: one privacy/data-flow bullet
- [ ] Optional: one scoring logic bullet

**Public-Safe Checks**
- [ ] Do not expose personal data
- [ ] Do not expose secrets, internal config, or sensitive schema details

**Done When**
- [ ] 2 usable UI screenshots secured
- [ ] Privacy-first framing remains clear
- [ ] Ready to use in supporting proof block

---

## 3. Restricted Ops Intake MVP
**Role**  
Supporting Proof Asset

**Priority**  
P2

**Capture Goal**
- Show the controlled intake and operator console flow
- Preserve governance and audit value without exposing internal identifiers

**Required Evidence**
- [ ] Console screenshot 1
- [ ] Console screenshot 2
- [ ] Optional: one audit/governance bullet
- [ ] Optional: one trust-chain bullet (signature / replay / dedup)

**Public-Safe Checks**
- [ ] Blur or remove workspace, team, and channel identifiers
- [ ] Avoid exposing internal operational details that should remain private
- [ ] Do not leak real request contents if sensitive

**Done When**
- [ ] 2 public-safe screenshots secured
- [ ] Sensitive identifiers removed or hidden
- [ ] Ready to use in supporting proof block

---

## 4. Papyr.us
**Role**  
Supporting Technical Proof Asset

**Priority**  
P2

**Capture Goal**
- Strengthen technical proof without overexposing admin, auth, or security internals

**Required Evidence**
- [ ] 1 architecture proof visual
- [ ] 1 test/proof visual or test summary snippet
- [ ] 3 short technical proof bullets
- [ ] Optional: one real-time collaboration bullet

**Public-Safe Checks**
- [ ] Avoid exposing sensitive admin, auth, or security details directly
- [ ] Focus on architecture, collaboration model, and test depth

**Done When**
- [ ] One-page proof sheet assembled
- [ ] Architecture/test proof is portfolio-safe
- [ ] Ready to use as a technical supporting asset

---

## 5. Interview Copilot
**Role**  
Supporting Proof Asset

**Sensitivity**  
High

**Priority**  
P3

**Capture Goal**
- Show the system shape without exposing transcript, conversation, or private session data

**Required Evidence**
- [ ] Demo-safe Web UI screenshot 1
- [ ] Demo-safe Web UI screenshot 2
- [ ] Optional: one pipeline bullet
- [ ] Optional: one modularity/test bullet

**Public-Safe Checks**
- [ ] No real transcript content
- [ ] No API keys
- [ ] No private meeting or interview data
- [ ] Prefer empty, mock, or sanitized screens only

**Done When**
- [ ] 2 demo-safe screenshots secured
- [ ] No sensitive session data visible
- [ ] Ready to use as supporting proof with caution

---

## Working Rules
- [ ] Do flagship evidence first
- [ ] Do not start feature development during evidence capture
- [ ] Do not redesign screens just for screenshots
- [ ] Capture only what is already explainable and safe
- [ ] If something is unsafe, redact it or skip it

## Completion Check
- [ ] E-Commerce Scanner evidence ready
- [ ] SeoulGyeol Skin Lab evidence ready
- [ ] Restricted Ops Intake MVP evidence ready
- [ ] Papyr.us evidence ready
- [ ] Interview Copilot evidence ready
