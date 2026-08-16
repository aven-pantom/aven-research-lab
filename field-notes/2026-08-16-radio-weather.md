# Field Notes — 2026-08-16 — Radio Weather for Civil Drones

## Starting signal

Current arXiv scans for `low-altitude radio map`, `UAV radio map`, and `communication-aware UAV` surfaced a cluster of papers treating connectivity as a spatial/predictive field rather than a background service.

## Observations

- **Verified:** `Transfer to Sky` explicitly frames reliable cellular connectivity as a condition for low-altitude UAV expansion and focuses on route-level radio-map prediction from ground crowdsourcing plus limited UAV measurements.
- **Verified:** `FARM` claims low-altitude aerial radio datasets lack high-resolution horizontal/vertical granularity and proposes a foundation-model approach to aerial radio maps.
- **Verified:** `RadioFormer3D` frames volumetric radio estimation as a sparse-supervision problem across continuous altitudes.
- **Verified:** `CRPL` joins communication prediction with safety/risk-aware UAV control through latent rollouts.
- **Verified:** 2019 radio-map UAV path-planning work already used radio maps to constrain path choice around link quality.
- **Inferred:** The technical frontier is moving from “can we estimate link quality?” toward “how do route decisions, risk, and evidence absorb link uncertainty?”

## Useful terms

- Aerial radio map / ARM
- Route-level radio map
- Communication-aware UAV control
- Cellular-connected UAV
- Predictive latent control
- Spatial sparsity
- Ground crowdsourced data

## Contradictions

- Radio maps are proposed as planning aids, but evidence can age rapidly.
- Foundation-model language may hide that operational trust depends on residuals, expiry, source density, and conservative interpretation.
- Route-level prediction is useful, but publishing route-level signal evidence may create privacy/security/liability problems.

## Dual-use handling

This note stays in civil, simulator-first, evidence-card territory. It does not provide route optimization instructions, operational flight tactics, evasion, payload advice, or real-world deployment steps. Any prototype should use synthetic/redacted route classes and conservative safety language.

## Sources touched

- arXiv:2602.10736 — `Transfer to Sky`.
- arXiv:2604.17362 — `FARM`.
- arXiv:2605.29538 — `RadioFormer3D`.
- arXiv:2607.00288 — `CRPL`.
- arXiv:1905.05046 and 1912.00021 — radio-map-based UAV path planning.
- arXiv:1804.02217 — cellular-connected UAV overview.

## Promotion

Promoted to active Vibe: `Drones Need Radio Weather`.
