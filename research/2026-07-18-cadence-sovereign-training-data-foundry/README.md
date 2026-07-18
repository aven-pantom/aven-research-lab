# Cadence — Sovereign Training Data Foundry

| Field | Value |
|---|---|
| Idea | Cadence — Sovereign Training Data Foundry |
| Field | Private AI datasets, provenance, human review, evaluation infrastructure, data governance |
| Status | Research package drafted; no experiments completed |
| Date | 2026-07-18 |
| Potential | Very high |
| Prototype difficulty | Medium |
| Recommended action | Build Cadence Release Manifest v0.1 as a local CLI and schema prototype |

## One-sentence thesis

AI teams do not need another dataset folder or annotation queue; they need a sovereign foundry where training data is versioned, reviewed, evaluated, signed, exported, and governed as a first-class product artifact.

## Current status

This is a primary overnight research package. It is not a completed experiment or a claim that Cadence works in production. The strongest output is a coherent technical hypothesis, source map, architecture, and three-month experiment plan.

## Why it matters

Training data is becoming one of the few defensible assets in AI: private, situated, judgment-rich, and tied to real behavior. But most organizations still manage it through fragmented storage, annotation exports, spreadsheets, scripts, and informal approvals. That makes model behavior hard to audit, improve, or trust.

Cadence matters because it treats a dataset like a software release: reproducible, inspectable, reviewable, revertible, signed, and connected to evaluation.

## Main insight

The missing primitive is not a better label editor or a prettier data catalog. The missing primitive is the **dataset release**.

A dataset release should answer:

- What is included?
- Where did it come from?
- Who or what reviewed it?
- Which policies applied?
- Which checks passed?
- What changed since the last release?
- What is it intended for?
- What should it not be used for?
- What downstream behavior did it affect?

## Recommended next action

Build **Cadence Release Manifest v0.1** before building the full product.

Minimum deliverable:

1. `cadence.yaml` project config.
2. `sources.jsonl` source registry.
3. `examples.jsonl` normalized examples.
4. `reviews.jsonl` review records.
5. `gates.json` gate results.
6. `manifest.json` signed release manifest.
7. `DATASET_CARD.md` generated summary.

Use a small design-critique or agent-trace dataset so the review layer contains real judgment rather than toy labels.

## Nightly output

### Files

- [research-paper.md](research-paper.md)
- [manifesto.md](manifesto.md)
- [technical-architecture.md](technical-architecture.md)
- [experiment-plan.md](experiment-plan.md)
- [sources.md](sources.md)

### Primary idea

**Cadence — Sovereign Training Data Foundry**: a local-first/private-cloud control plane for building trustworthy training and evaluation dataset releases with provenance, review evidence, gates, manifests, and exports.

### Strongest evidence

- **Verified:** Datasheets for Datasets and Data Cards establish that dataset documentation is a real, recognized gap in responsible AI.
- **Verified:** W3C PROV, DCAT, Croissant, OpenLineage, DVC, and lakeFS show that provenance, cataloging, lineage, and data versioning are technically feasible and already valued.
- **Inferred:** The unsolved opportunity is combining documentation, lineage, versioning, review, gates, and release discipline into a product specifically for AI training/evaluation data.

### Biggest uncertainty

The central uncertainty is not whether Cadence can be built. It can. The uncertainty is whether the release discipline can feel faster and more useful than existing informal workflows. If it feels like compliance, it fails. If it feels like a precise lab instrument for turning private judgment into model behavior, it has company-level potential.

## Secondary briefs

### 1. Dataset Release Manifest Schema

An open schema for AI dataset releases. It would define source summaries, item hashes, transformations, review state, policy versions, gate results, intended use, exclusions, known limitations, and signatures.

**Why it matters:** This could become Cadence’s smallest defensible wedge: a standard artifact that other tools can generate or consume.

**Prototype:** CLI that produces `manifest.json` and `DATASET_CARD.md` from a local directory plus review records.

### 2. Reviewer Reliability Workbench

A focused tool for measuring human/agent review quality in dataset construction: disagreement, confidence, fatigue, adjudication, expertise drift, and policy ambiguity.

**Why it matters:** Human judgment is one of the most valuable and least preserved parts of dataset creation. Treating reviewer behavior as evidence could improve dataset quality and make AI training less opaque.

**Prototype:** Import review records, compute disagreement/ambiguity reports, and suggest policy revisions.

## Rejected notes

See [../../rejected/2026-07-18-cadence-rejected-directions.md](../../rejected/2026-07-18-cadence-rejected-directions.md).

Short version: generic annotation platforms, data catalogs, compliance dashboards, and dataset marketplaces were rejected or deferred because they are crowded categories and do not isolate the strongest primitive. Cadence should own the trusted dataset release.

## Ranked future directions

1. **Cadence Release Manifest v0.1:** define schema and CLI generator.
2. **Local dataset release workbench:** ingest, review, gate, sign, export.
3. **Design critique dataset pilot:** use judgment-rich private examples aligned with Max’s taste/design work.
4. **Release diff benchmark:** test whether dataset release diffs explain downstream model behavior changes.
5. **Croissant/PROV/DCAT export adapters:** make Cadence interoperable without letting standards dominate product shape.
6. **Reviewer reliability model:** quantify disagreement, ambiguity, and adjudication quality.
7. **Agentic curator:** use agents to suggest labels, detect provenance gaps, dedupe, and flag policy conflicts.
8. **Private team sync:** append-only release logs and signed manifests for multi-user workflows.
9. **External audit mode:** redacted manifest views that prove process without exposing raw private data.
10. **Company narrative:** “the private data foundry for teams whose AI behavior depends on proprietary judgment.”

## Unexpected Connection

The strangest useful connection is between software release engineering and human taste. A design critique, a pilot note, an agent correction, and a field observation all look subjective in isolation. But once they become training data, they need release discipline. Cadence could turn taste and operational judgment into versioned infrastructure without pretending they are objective facts.
