# Source Library — 2026-08-16 — Radio Weather

## arXiv API scan

Searches run through `https://export.arxiv.org/api/query` on 2026-08-16.

### `low-altitude radio map`

- **arXiv:2604.17362v3** — `FARM: Foundational Aerial Radio Map for Intelligent Low-Altitude Networking` — published 2026-04-19.
  - **Verified from abstract:** argues precise aerial radio environment characterization is vital for low-altitude airspace planning; claims existing datasets/methods lack high-resolution granularity across horizontal and vertical dimensions; introduces a high-granularity multi-band/multi-antenna dataset and masked-autoencoder foundation-model approach.
- **arXiv:2509.13822v1** — `Flow Matching-Based Active Learning for Radio Map Construction with Low-Altitude UAVs` — published 2025-09-17.
- **arXiv:2605.29538v1** — `RadioFormer3D: Weakly Supervised 3D Radio Map Estimation in Low-Altitude Airspace via Generative Modeling` — published 2026-05-28.
  - **Verified from abstract:** frames 3D radio-map estimation as needed for low-altitude airspace and 3D heterogeneous networks; highlights spatial sparsity and limited supervision across continuous altitudes.
- **arXiv:2602.10736v1** — `Transfer to Sky: Unveil Low-Altitude Route-Level Radio Maps via Ground Crowdsourced Data` — published 2026-02-11.
  - **Verified from abstract:** says low-altitude UAV expansion depends on reliable cellular connectivity; pre-flight planning needs communication-link quality along routes; sparse aerial measurements weaken existing radio-map methods; proposes transfer learning from crowdsourced ground signals plus limited UAV measurements.
- **arXiv:2511.19019v2** — `3D Dynamic Radio Map Prediction Using Vision Transformers for Low-Altitude Wireless Networks` — published 2025-11-24.

### `UAV radio map`

- **arXiv:2107.10574v2** — `UAV-aided Radio Map Construction Exploiting Environment Semantics`.
- **arXiv:1905.05046v2** — `Radio Map Based Path Planning for Cellular-Connected UAV`.
  - **Verified from abstract:** studies path planning for cellular-connected UAVs that minimizes distance while ensuring target link quality through radio maps.
- **arXiv:2005.02432v1** — `Aerial Spectrum Surveying: Radio Map Estimation with Autonomous UAVs`.
- **arXiv:1912.00021v2** — `Radio Map Based 3D Path Planning for Cellular-Connected UAV`.
  - **Verified from abstract:** extends radio-map path planning to 3D routes and SINR constraints.

### `communication-aware UAV`

- **arXiv:2607.00288v1** — `Communication-Aware and Safety-Aware UAV Control via Predictive Latent Models` — published 2026-07-01.
  - **Verified from abstract:** integrates predictive latent models with probabilistic communication and safety constraints; anticipates future motion, channel degradation, and collision risk in simulation.
- **arXiv:2606.24979v1** — `CKM-Driven Communication-Aware UAV Intelligent Trajectory Optimization for Urban Inspection`.
- **arXiv:2603.16141v2** — `Communication-Aware Multi-Agent Reinforcement Learning for Decentralized Cooperative UAV Deployment`.

### `cellular-connected UAV`

- **arXiv:1804.02217v1** — `Cellular-Connected UAV: Potentials, Challenges and Promising Technologies`.
  - **Verified from abstract:** frames high-rate, low-latency, reliable UAV communications as important for large-scale UAV use and identifies cellular-connected UAV as a promising but different wireless setting from terrestrial users.

## Interpretation

**Supported:** There is a visible research cluster around aerial/low-altitude radio maps, route-level connectivity prediction, and communication-aware UAV control.

**Inferred:** The missing artifact is not another optimization algorithm first; it is an evidence object that makes radio predictions, freshness, uncertainty, and residuals inspectable by humans and conservative automation.

## Safety note

No operational route, altitude, evasion, or deployment guidance is extracted. This source note supports simulator-first, civil evidence-card research only.
