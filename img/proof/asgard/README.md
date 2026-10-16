# Asgard Portfolio Proof Assets

## A1 — Lifecycle Architecture

File: `asgard-lifecycle-v3.svg`

Purpose: buyer-facing architecture visual for the Portfolio V3 flagship.

Derived from the accepted Asgard product/proof boundary documented in `joeylife94/asgard`:

- Persistent Analysis Job lifecycle
- Kafka request/result handoff
- Bifrost Python execution
- real local Ollama path
- result persistence
- operator / metrics visibility
- bounded FAILED / DLQ → authorized redrive → audit → retry → SUCCEEDED recovery

This visual is explanatory. It is not itself execution evidence.

## A2 — Controlled Recovery Execution Evidence

Selected source capture: `m3-after-recovery.png`

Accepted source:

- Repository: `joeylife94/asgard`
- Workflow: `.github/workflows/v11-m3-recovery-console.yml`
- Accepted run: `33422708481`
- Artifact: `9769683333`
- Artifact name: `v11-m3-recovery-console-evidence`
- Artifact digest: `sha256:2c1bdfe47287dc3e88061259ee2d93f9b8025310721e3a2b66b7ae3fd05d6d78`
- Accepted PR head: `b4e79a00dc3677746a244a08c6fd36dfccba620c`
- Accepted merge: `c97dfa2d79f81b7b0172833769a71164934a103e`
- Data classification: synthetic / public-safe proof data

The selected screenshot visibly shows:

- final `SUCCEEDED` state;
- `attempt 1`;
- persisted result;
- redrive audit `SUCCESS`;
- audit reference to `Previous: FAILED / attempt 0`;
- explicit operator identity and recovery reason.

The original accepted artifact also contains:

- `m3-before-redrive.png`
- `m3-duplicate-skipped.png`
- `m3-browser-evidence.json`
- `m3-final-job.json`
- `m3-audit.json`

## Claim boundary

These assets support a bounded controlled-recovery proof.

They do **not** establish:

- production readiness;
- exactly-once / atomic dispatch;
- HA / multi-region;
- SLA / SLO;
- general disaster recovery;
- unattended autonomous recovery.

Do not redraw or fabricate A2 as a mock UI. Portfolio presentation should preserve the accepted execution capture or a lossless derivative of it.
