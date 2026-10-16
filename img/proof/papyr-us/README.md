# Papyr.us Portfolio V3 Proof Assets

## P1 — Current Team Workspace

Selected source capture: `01-team-pages.png` from a fresh rerun of the accepted v1 proof path.

Fresh evidence:

- Repository: `joeylife94/papyr-us`
- Accepted proof rerun: `34132976309`
- Fresh artifact ID: `11396728712`
- Artifact: `v1-proof-1d9910c1f3cc788cd850313c0f7dad8d05885c8a`
- Artifact digest: `sha256:b4f03552bfa71ee33cc52fc1f6482c68115ee796d65af2f12df2de69cf2e6780`
- Accepted head: `1d9910c1f3cc788cd850313c0f7dad8d05885c8a`
- Data class: synthetic-only

The fresh rerun completed successfully and regenerated the authenticated team-workspace proof.

## P2 — Version Recovery

Selected source captures:

- `03-version-recovery-before.png`
- `04-version-recovery-after.png`

Fresh evidence:

- Repository: `joeylife94/papyr-us`
- Temporary proof-capture PR: `#74`
- Proof run: `37433742998`
- Artifact ID: `11398263202`
- Artifact: `v1-proof-d1045d4d196ff37ca607fbeb134cb6b0086657a5`
- Artifact digest: `sha256:0ff66d157c2db19410dc6d762eb4aa7ac29fe9cafe9904361ec82a8eb6ae4749`
- Capture head: `d1045d4d196ff37ca607fbeb134cb6b0086657a5`
- Data class: synthetic-only

The capture uses the current team-scoped document path, creates and updates a document, opens the real version-history UI, restores the prior version through the existing restore action, reopens the page, and verifies the restored title through the API before the final screenshot.

## Portfolio selection

Homepage / case-study preference:

1. P1 `team workspace` as the primary Papyr.us product visual.
2. P2 `version recovery before` as the engineering-boundary visual.
3. P2 `version recovery after` as supporting confirmation in expanded case content.

The old landing screenshots in this directory are historical V2 assets and should not be treated as the preferred V3 proof.

## Claim boundary

These assets support:

- authenticated team-scoped workspace;
- team-scoped document creation;
- user-visible version history;
- explicit restore action;
- durable restored state verified by browser and API.

They do **not** establish:

- public production uptime;
- enterprise collaboration readiness;
- production SSO;
- vector RAG;
- broad AI/model quality;
- measured team-productivity improvement.

## Binary placement

The fresh PNGs have been recovered and packaged outside the repository. They still need durable binary placement in this directory (or a dedicated V3 proof subdirectory) before the production homepage references them. Preserve the exact execution captures; do not replace them with mock UI.
