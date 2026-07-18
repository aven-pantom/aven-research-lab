# Rejected Directions — 2026-07-18 Cadence Session

The session selected **Cadence — Sovereign Training Data Foundry** as the primary idea and rejected or deferred adjacent ideas that did not isolate a strong enough primitive.

## Rejected or deferred

### Generic annotation platform

- **Reason rejected:** Crowded, services-heavy, and already represented by mature products. Annotation alone does not solve release provenance, review evidence, gates, or model-behavior traceability.
- **Could return if:** Cadence needs a narrow built-in review surface for its own release loop.

### General data catalog

- **Reason rejected:** Too broad and enterprise-generic. Catalogs help find datasets but do not necessarily prove that a training-data release is ready, reviewed, signed, and connected to evaluation.
- **Could return if:** Cadence needs a catalog view over approved releases.

### Compliance dashboard for AI data

- **Reason rejected:** Risks becoming paperwork layered on top of broken pipelines. The value must come from actual release evidence, not retrospective dashboarding.
- **Could return if:** Cadence’s manifests naturally support audit reporting.

### Dataset marketplace

- **Reason rejected:** Marketplace incentives conflict with sovereignty and quality. The strongest Cadence wedge is private data custody, not public exchange.
- **Could return if:** Release manifests become useful for controlled institutional sharing.

### Pure provenance ledger

- **Reason rejected:** Provenance without review/evaluation is necessary but insufficient. A dataset can have perfect lineage and still be low-quality or inappropriate.
- **Could return if:** Implemented as Cadence’s lower-level evidence log.

### Synthetic data generator

- **Reason rejected:** Crowded and potentially quality-weak if detached from review, source constraints, and downstream evaluation.
- **Could return if:** Cadence needs controlled synthetic augmentation with explicit marking and gates.

### Enterprise MLOps platform

- **Reason rejected:** Too broad. Cadence should not begin by competing with all of MLOps. It should own the dataset-release primitive.
- **Could return if:** Releases become the entry point into training/evaluation pipelines.

## Selection rationale

Cadence won because it satisfies the quality filter without needing speculative future breakthroughs:

- new capability,
- multiple technical fields,
- defensible infrastructure,
- prototype within three months,
- meaningful uncertainty,
- importance beyond convenience,
- alignment with Max’s AI/design/agent/provenance interests,
- company-scale potential.

The rejected variants were useful because they clarified what Cadence must not become: not annotation volume, not generic cataloging, not compliance theater, not marketplace aggregation. The core is the trusted dataset release.
