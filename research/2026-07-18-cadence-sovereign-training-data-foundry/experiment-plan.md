# Experiment Plan — Cadence: Sovereign Training Data Foundry

## Research question

Can a small AI/data team produce a trustworthy training-data release faster and with better auditability using a release-oriented foundry than using ordinary folders, spreadsheets, annotation exports, and informal documentation?

## Hypothesis

A minimal Cadence prototype that combines ingestion, review evidence, quality gates, signed release manifests, and standard exports will reduce dataset-release ambiguity and make model/dataset regressions easier to debug.

This should be true even before advanced ML automation is added.

## Prototype scope

### Prototype name

**Cadence v0.1 — Local Dataset Release Workbench**

### Included

- Local project initialization.
- Dataset schema definition.
- File/JSONL/CSV ingestion.
- Content hashing.
- Source registry.
- Example browser.
- Review task capture.
- Reviewer disagreement/adjudication fields.
- Gate runner.
- Release candidate creation.
- Signed manifest generation.
- Markdown Datasheet/Data Card style output.
- JSONL export.
- Basic release diff.

### Excluded for v0.1

- Multi-tenant SaaS.
- Full enterprise access control.
- Complex annotation UI.
- Automatic fine-tuning infrastructure.
- Full compliance dashboard.
- Marketplace/distribution features.
- Deep integrations with every standard.

## Milestones

### Week 1 — Schema and manifest

- Define core objects: Source, Example, Review, Policy, GateResult, Release, Manifest.
- Draft Cadence Release Manifest v0.1.
- Create a CLI that initializes a dataset workspace.
- Generate a manifest from a hand-authored sample dataset.

**Exit criterion:** A release manifest can answer: what is included, where it came from, who reviewed it, what checks passed, what it is intended for.

### Week 2 — Ingestion and hashing

- Add ingestion for JSONL and directory files.
- Compute content hashes.
- Preserve raw source pointers.
- Normalize examples into a project schema.
- Detect duplicates by exact hash.

**Exit criterion:** Re-ingesting the same data produces stable identities and no accidental duplicate release items.

### Week 3 — Review workflow

- Add review records through CLI or minimal web UI.
- Capture reviewer, label/judgment, confidence, notes, and policy version.
- Add disagreement reporting.
- Add adjudication records.

**Exit criterion:** The system can show which examples are approved, disputed, rejected, or unresolved.

### Week 4 — Gate engine

- Implement gates:
  - schema validity
  - provenance completeness
  - required review count
  - reviewer agreement threshold
  - duplicate threshold
  - documentation completeness
- Gate results become part of manifest.

**Exit criterion:** A release candidate cannot be signed until required gates pass or are explicitly waived with a reason.

### Week 5 — Release registry and signing

- Freeze immutable releases.
- Generate release IDs and version numbers.
- Sign manifest locally.
- Store release history.
- Implement release diff.

**Exit criterion:** Release A and B can be compared by source, example count, policy version, review status, and gate results.

### Week 6 — Export and documentation

- Export JSONL bundle.
- Export Markdown dataset card.
- Draft Croissant-compatible metadata export.
- Draft PROV-like graph export.

**Exit criterion:** A user can take an approved release into a model-training or evaluation workflow with documentation attached.

### Weeks 7–8 — Applied test with a real small dataset

Use one Max-aligned dataset:

- design critique examples,
- agent task traces,
- local research note pairs,
- creative provenance examples,
- or instruction-following examples derived from approved private material.

Run the release loop twice: v0.1 and v0.2.

**Exit criterion:** The second release captures meaningful changes and produces a useful diff.

### Weeks 9–10 — Downstream behavior test

Use a small model, evaluator, or retrieval benchmark.

- Train/fine-tune lightly, or run retrieval/evaluation against release A and B.
- Measure whether behavior changes can be connected back to release diffs.

**Exit criterion:** At least one behavior change can be plausibly traced to dataset-release differences, or the failure teaches what evidence is missing.

### Weeks 11–12 — Product judgment

- Interview/test with one or two technical users if available.
- Time the release process versus manual workflow.
- Identify which gates were useful and which felt bureaucratic.
- Decide whether Cadence is a product, library, schema, internal tool, or rejected direction.

## Required resources

### People

- One builder for prototype implementation.
- One primary reviewer for dataset curation.
- Optional second reviewer for disagreement testing.
- Optional domain expert depending on dataset.

### Data

One small but meaningful dataset of 100–1,000 examples. The dataset should include enough ambiguity that review quality matters.

### Compute

Minimal for v0.1:

- Local laptop/server.
- SQLite database.
- Optional embedding model for duplicate detection.
- Optional small model/evaluation endpoint for downstream delta test.

### Tools

- Python/TypeScript environment.
- Git.
- Local filesystem or object storage.
- Markdown/JSON tooling.
- Optional DVC/lakeFS integration later.

## Dataset plan

### Candidate dataset: design critique instruction set

Source examples:

- Before/after design critiques.
- Interface screenshots described textually if image custody is hard.
- Short design principles.
- Decision notes from product/design work.

Why this dataset:

- Aligns with Max’s design taste and creative-tool direction.
- Contains meaningful judgment, not just factual labels.
- Reveals reviewer ambiguity.
- Can support a future taste/design critique model or agent.

### Dataset schema v0

```yaml
example_id: string
source_id: string
input_context: string
artifact_description: string
critique: string
principles: list[string]
quality_label: enum[accept, revise, reject]
review_status: enum[unreviewed, approved, disputed, rejected]
intended_use: list[string]
excluded_use: list[string]
sensitivity: enum[public, private, sensitive]
synthetic: boolean
```

### Privacy

Use non-sensitive or locally approved examples first. If private project data is used, release manifests should support redacted public views.

## Evaluation metrics

### Release-process metrics

- Time from raw input to signed release.
- Number of manual reconstruction steps needed to answer audit questions.
- Percent of examples with complete provenance.
- Percent of examples with required review.
- Number of unresolved disagreements.
- Number of gate failures per candidate.
- Time to compare two releases.

### Dataset-quality metrics

- Duplicate rate.
- Schema error rate.
- Reviewer agreement.
- Policy ambiguity count.
- Sensitive-data flag count.
- Synthetic-data marking completeness.

### Downstream metrics

Depends on dataset, but possible metrics:

- Retrieval relevance improvement.
- Critique-quality blind preference.
- Regression count on holdout prompts.
- Reduction in hallucinated design claims.
- Better adherence to intended critique principles.

### Product-quality metrics

- Did the release loop feel faster than manual export?
- Did the manifest reveal something non-obvious?
- Did users trust the release more?
- Which gates produced real value?
- Which fields felt like paperwork?

## Expected results

**Expected:** The manifest and release diff will immediately clarify dataset state, especially provenance completeness, review status, and changes between versions.

**Expected:** Some gates will feel obviously useful: schema validity, provenance completeness, duplicate detection, review count.

**Uncertain:** Reviewer agreement may be noisy in creative/design datasets because disagreement can reflect valid taste differences rather than error.

**Uncertain:** Downstream model improvements may be difficult to attribute without a carefully designed evaluation set.

**Risk:** The prototype could prove that Cadence is more valuable as a schema/manifest library than a full product.

## Stop conditions

Stop or sharply narrow the project if any of the following become true:

1. The release manifest does not answer audit/debug questions better than a disciplined README plus git.
2. Users bypass the review/gate workflow because it is slower than manual habits.
3. The system cannot define a dataset release clearly enough to avoid schema bloat.
4. Existing tools solve the core release problem once configured correctly.
5. Downstream behavior changes cannot be connected to dataset release evidence even in a toy setting.
6. The strongest use case collapses into generic annotation management.

## Next experiment

Build the **Cadence Release Manifest v0.1** as a standalone schema and CLI generator before building a full interface.

Deliverables:

1. `cadence.yaml` project config.
2. `sources.jsonl` registry.
3. `examples.jsonl` normalized examples.
4. `reviews.jsonl` review records.
5. `gates.json` gate results.
6. `manifest.json` signed release manifest.
7. `DATASET_CARD.md` generated summary.

This isolates the core research question: whether a dataset release artifact is useful before product UI work begins.
