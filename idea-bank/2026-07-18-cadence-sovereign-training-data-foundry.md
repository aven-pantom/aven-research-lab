# Idea Bank Entry — Cadence: Sovereign Training Data Foundry

## Selection status

**Selected for primary research package on 2026-07-18.**

Cadence was selected over the other banked directions because it has the strongest combination of immediate prototype feasibility, durable infrastructure potential, and relevance to Max’s work with AI agents, local-first systems, creative tooling, dataset curation, and company-scale product architecture.

## One-sentence thesis

AI teams do not need another dataset folder or annotation queue; they need a sovereign foundry where training data is versioned, reviewed, evaluated, signed, exported, and governed as a first-class product artifact.

## Quality filter

Cadence satisfies at least eight of the required filters:

- **Genuinely new capability:** turns private dataset construction into a governed release process rather than scattered annotation, storage, and spreadsheet workflows.
- **Connects multiple technical fields:** data versioning, provenance standards, human review, weak supervision, AI evaluation, local-first/private infrastructure, and compliance operations.
- **Defensible research direction:** dataset release manifests, approval gates, and evaluation contracts can become reusable infrastructure.
- **Experiment within three months:** build a local-first dataset release prototype around files, review tasks, manifest generation, and quality gates.
- **Matters beyond convenience:** training-data custody and quality will shape model behavior, safety, IP risk, and institutional memory.
- **Meaningful technical uncertainty:** unclear how to measure dataset readiness, reviewer reliability, contamination, provenance integrity, and release usefulness across model families.
- **Infrastructure others could build on:** manifest schema, adapters, review workflow, provenance graph, and evaluation harness can be exposed as a platform.
- **Could lead to a company or institution:** private AI data foundry for teams that need high-trust training/evaluation datasets.
- **Aligns with Max’s work:** AI agents, local-first software, creative/provenance systems, design tooling, and autonomous research operations.

## Why it is not a duplicate

Cadence is adjacent to the existing 2026-07-17 Simulation Memory package but not the same idea. Simulation Memory asks how agents rehearse actions in private simulated futures. Cadence asks how humans and agents produce trustworthy training/evaluation data releases. The shared substrate is evidence, but the unit of value differs: simulated scenario memory versus governed dataset versions.

## Highest-leverage prototype

Build a minimal local-first dataset release tool:

1. Ingest a directory of examples plus metadata.
2. Create review tasks and adjudication records.
3. Run validation checks and evaluation probes.
4. Generate a signed release manifest.
5. Export a dataset bundle with Datasheet/Data Card/Croissant-style metadata.
6. Maintain an immutable release history.

## Secondary briefs generated from this direction

1. **Dataset Release Manifest Schema:** an open schema for training-set releases containing sources, transformations, approvals, tests, intended use, exclusions, and signatures.
2. **Reviewer Reliability Workbench:** a tool for measuring disagreement, fatigue, expertise drift, and review-policy quality across human/agent dataset curation.

## Rejected variants

- Generic annotation platform: crowded, too services-heavy, insufficiently original.
- General data catalog: already crowded; weak connection to model behavior and release readiness.
- Compliance dashboard: too bureaucratic unless backed by real data-build evidence.
- Dataset marketplace: incentive problems and weaker sovereignty.

## Immediate next action

Prototype a single-dataset release flow for a private instruction-tuning or design-critique dataset, with manifest generation and three quality gates: provenance completeness, reviewer agreement, and downstream evaluation delta.
