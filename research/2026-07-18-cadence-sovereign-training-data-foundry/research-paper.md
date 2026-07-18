# Research Paper — Cadence: Sovereign Training Data Foundry

## Abstract

AI systems are increasingly shaped less by model architecture alone and more by the datasets, review policies, transformations, exclusions, and evaluation sets that surround them. Yet most teams still treat training data as a loose accumulation of files, labels, annotation tasks, exports, scripts, and informal approvals. This paper proposes **Cadence**, a sovereign training-data foundry: a local-first or private-cloud system for building dataset releases with versioned provenance, human/agent review, quality gates, signed manifests, and interoperable exports. The central hypothesis is that dataset construction should become a release discipline similar to software builds: reproducible, inspectable, testable, revertible, and governed by explicit contracts. The concept is supported by existing research in dataset documentation, model reporting, provenance standards, data lineage, and versioned data infrastructure, but remains technically uncertain in how readiness should be measured and how human review should be represented without slowing teams into bureaucracy.

## Problem

**Verified:** Dataset documentation research identifies a lack of standardized dataset reporting as a source of downstream risk. Datasheets for Datasets explicitly states that the machine learning community has lacked standardized dataset documentation, and Data Cards frames documentation as a user-centered artifact needed across a dataset lifecycle.

**Observed pattern:** In practical AI work, dataset state is distributed across storage buckets, spreadsheets, annotation tools, git repositories, scripts, notebooks, evaluation logs, Slack decisions, and tribal memory. This fragmentation creates five failures:

1. **Unclear lineage:** teams cannot easily answer where each example came from, what transformations touched it, and who approved it.
2. **Weak release discipline:** datasets are often exported as snapshots without release notes, test results, or intended-use boundaries.
3. **Poor reversibility:** when a model regresses, it is hard to identify which data change caused it.
4. **Review opacity:** human curation decisions are not treated as versioned evidence.
5. **No sovereign control plane:** data often passes through third-party platforms before becoming a team-owned asset.

The problem is not simply missing metadata. The problem is that training data lacks a durable operational form.

## Background

Three mature bodies of work already surround this problem.

First, dataset and model documentation research argues that artifacts should carry human-readable context. Datasheets define dataset operating characteristics. Data Cards emphasize purposeful documentation across stakeholders. Model Cards extend transparency to model behavior and intended use.

Second, provenance and catalog standards define interoperable metadata. W3C PROV provides a language for entities, activities, and agents. DCAT provides catalog/dataset/distribution vocabulary. Croissant targets ML dataset metadata.

Third, data infrastructure tools prove that versioning, lineage, and reproducibility are practical. DVC gives Git-like artifact versioning. lakeFS gives branch/commit-like object-store operations. OpenLineage records pipeline lineage events.

Cadence sits at the seam: it is not merely a catalog, not merely an annotation tool, not merely a data lake branch, and not merely a compliance document. It is a release system for training-data readiness.

## Related research

### Dataset documentation

Datasheets for Datasets and Data Cards are the closest intellectual predecessors. Their strength is framing datasets as artifacts with motivations, composition, collection processes, intended uses, and ethical considerations. Their limitation for Cadence is that documentation alone does not guarantee reproducible builds, review traceability, or enforceable quality gates.

### Model reporting

Model Cards provide a model-facing analog: short documents with intended use and performance conditions. Cadence extends this pattern upstream. Instead of waiting until model release, Cadence records the release evidence of the dataset that shaped the model.

### Provenance standards

W3C PROV is valuable because it prevents Cadence from inventing private semantics for common provenance relationships. Cadence can map examples as entities, transformations as activities, reviewers/agents as agents, and releases as generated entities.

### Data catalog and dataset metadata

DCAT and Croissant are interoperability targets. Cadence should export metadata compatible with them, but neither is enough by itself because the foundry also needs active workflows: review, adjudication, eval gates, release signing, and rollback.

### Data lineage and data versioning

OpenLineage, DVC, and lakeFS prove that lineage and versioning are possible in production systems. Their limitation is product focus. They are built around pipelines and storage; Cadence is built around dataset release governance for AI training/evaluation.

### Weak supervision and programmatic labeling

Snorkel-style programmatic labeling matters because some dataset decisions are code-like rather than manual. A foundry must version labeling functions, prompt-based classifiers, reviewer overrides, and adjudication policies as artifacts.

## Core hypothesis

**Cadence hypothesis:** AI teams will need a private, release-oriented data foundry where training and evaluation datasets are built through explicit versions, review tasks, provenance graphs, quality gates, signed manifests, and interoperable exports.

This hypothesis has four parts:

1. **Dataset quality is a release property, not a storage property.** A folder can contain examples, but it cannot say whether those examples are ready for a model.
2. **Human review is evidence.** Review decisions, disagreement, policy changes, and adjudication should be recorded as structured artifacts.
3. **Training data needs a manifest.** Each release should state exactly what is included, excluded, transformed, approved, tested, and intended.
4. **Sovereignty is part of the product.** Sensitive data, model-improvement traces, creative work, and institutional knowledge should not require default outsourcing to annotation or SaaS platforms.

## Proposed system

Cadence is a local-first/private-cloud control plane for dataset release management.

### Core objects

- **Source:** original file, capture event, API import, user submission, sensor log, generated sample, or third-party dataset.
- **Example:** normalized item under review.
- **Transformation:** code, prompt, model, script, or human operation that changed an example.
- **Review:** human or agent judgment attached to an example, field, or release.
- **Policy:** written rule or executable check governing inclusion/exclusion.
- **Gate:** validation step required before release.
- **Release:** immutable dataset version with manifest, evidence, and export bundle.
- **Manifest:** signed statement of provenance, composition, decisions, evaluations, intended use, and known limitations.

### Minimum product loop

1. Ingest examples and source metadata.
2. Normalize into a typed dataset schema.
3. Assign review tasks.
4. Resolve disagreement and policy conflicts.
5. Run automated gates.
6. Generate a release candidate.
7. Produce documentation and export metadata.
8. Sign and freeze the release.
9. Compare model/evaluation outcomes against prior releases.

## Technical feasibility

**High feasibility:** Basic ingestion, hashing, metadata capture, review workflows, manifest generation, and immutable releases can be built with existing local database and object-storage primitives.

**Medium feasibility:** Standards interop with PROV/DCAT/Croissant/OpenLineage is practical but requires careful schema design to avoid semantic mismatch.

**Medium-low feasibility:** Reliable dataset-readiness metrics are harder. Provenance completeness and schema validation are measurable; whether a dataset improves model behavior is model-, task-, and eval-dependent.

**Unknown:** Whether teams will accept release discipline before pain becomes acute. The product could be correct but too heavy if not designed as a fast, calm workflow.

## Research gaps

1. **Dataset readiness metric:** What minimum evidence predicts that a dataset release will improve or not harm model behavior?
2. **Reviewer reliability model:** How should the system represent expertise, disagreement, fatigue, adversarial labeling, and policy drift?
3. **Manifest standard:** What fields belong in a training-data release manifest, and which should map to existing standards?
4. **Contamination detection:** How can the system detect overlap between training data and evaluation sets without exposing sensitive content?
5. **Agentic curation:** What tasks can agents safely perform: deduplication, policy checking, suggested labels, provenance extraction, adversarial review?
6. **Local-first synchronization:** How does a private dataset foundry support teams without compromising custody?
7. **Evidence UX:** How can rich governance feel like a good creative/dev tool rather than compliance sludge?

## Risks and limitations

- **Bureaucratic drag:** If Cadence becomes a compliance dashboard, it dies. It must make high-quality releases faster, not merely more documented.
- **False confidence:** A signed manifest can prove process integrity, not truth. Bad reviewers can still approve bad data.
- **Standards overreach:** Trying to support every metadata standard too early would stall product development.
- **Privacy leakage:** Provenance metadata can itself reveal sensitive information.
- **Eval coupling:** Dataset quality cannot be fully assessed without downstream models and tasks.
- **Crowded adjacency:** Annotation tools, catalogs, feature stores, DVC/lakeFS, and governance platforms all touch the space. Cadence must own a sharper primitive: the trusted dataset release.

## Experiments

No experiments were completed in this session. The recommended first experiment is a prototype study.

### Experiment 1: Release manifest feasibility

Build a local tool that ingests a small dataset, captures provenance, creates review tasks, runs checks, and exports a signed release manifest. Measure whether the generated manifest can answer key audit/debug questions without manual reconstruction.

### Experiment 2: Review reliability gate

Run two or more reviewers across a small dataset and measure disagreement, adjudication time, policy ambiguity, and final label stability.

### Experiment 3: Downstream delta test

Train or fine-tune a small model, or run retrieval/evaluation against releases A and B. Test whether release metadata helps explain behavior changes.

## Future work

1. Define the Cadence Release Manifest v0.1 schema.
2. Build a single-user local prototype with SQLite, object storage, and a web UI.
3. Add adapters for DVC/lakeFS-like storage and Croissant export.
4. Create a benchmark around dataset release debugging: given a model regression, identify the data change.
5. Explore private team synchronization using append-only logs and signed release records.
6. Create a design-language pass: make the product feel like a studio/lab instrument, not enterprise governance software.
7. Test with a real Max-aligned dataset: design critique, agent memory, instruction-tuning, or creative provenance examples.

## Conclusion

Cadence is strongest if it refuses the shape of existing categories. It should not be “annotation plus version control” or “governance plus dashboards.” Its core object is the **dataset release**: an immutable, explainable, reviewable, signed, evaluable artifact that can be used to train or test models with confidence. The research opportunity is to define what counts as sufficient evidence for a dataset to move from raw material into model-shaping infrastructure.
