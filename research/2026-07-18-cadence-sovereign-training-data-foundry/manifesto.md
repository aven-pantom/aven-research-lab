# Manifesto — Cadence: Sovereign Training Data Foundry

## The argument

The next durable AI companies will not be built only on better prompts, wrappers, or model access. They will be built on **private bodies of evidence**: data that was collected with intent, reviewed with judgment, versioned with discipline, evaluated against real tasks, and preserved as institutional memory.

Today that evidence is treated like exhaust.

Teams create examples in chats, spreadsheets, logs, support tickets, design critiques, agent traces, sensor runs, code reviews, and field notes. Then they export fragments into training sets through brittle pipelines no one fully trusts. The dataset becomes a ghost object: everyone depends on it, but no one can quite say what it is.

Cadence starts from a different belief:

**Training data is not a file. It is a release.**

A release has a reason. A release has custody. A release has reviewers. A release has known limits. A release can be reproduced, compared, reverted, signed, and challenged.

## What is broken today

### 1. Data custody is treated as plumbing

The most valuable examples a team has are often private: internal decisions, customer context, creative judgment, domain expertise, operational failures, field observations, agent traces. These should not casually pass through tools that make custody unclear.

### 2. Review work disappears

Human judgment is expensive and often decisive. But most review systems record only the final label. They do not preserve why a reviewer hesitated, where policy was ambiguous, which expert overrode which model, or how disagreement changed the final release.

### 3. Dataset versions are not product versions

Software teams know how to ship versions. Dataset teams often ship “latest_final_v7_cleaned_export.” That is not a release. It is a liability with a filename.

### 4. Governance arrives too late

Compliance dashboards appear after the risky system already exists. By then they document a corpse. Governance should be embedded at the moment data becomes training material.

### 5. Evaluation is detached from data construction

A dataset should not be called “better” because it is bigger or cleaner in the abstract. It is better if it changes model behavior in the intended direction without unacceptable regressions.

## The new belief

The fundamental AI infrastructure primitive is shifting from the model endpoint to the **evidence supply chain**.

Models will continue to commoditize unevenly. What remains rare is trustworthy, situated, private data and the process that turns it into usable model behavior.

Cadence exists to make that process explicit.

## Future enabled

If Cadence works, a team can ask:

- What data trained this behavior?
- Who approved the examples?
- Which sources were excluded?
- Which policy changed between release A and release B?
- Which examples caused a regression?
- Which reviewer disagreed, and why?
- Which model-generated examples were accepted by humans?
- Can this release be used for this purpose?
- Can we export it without leaking sensitive provenance?
- Can another institution inspect the manifest without seeing the raw data?

This enables a different kind of AI organization: one that compounds knowledge through governed data releases rather than losing it inside pipelines and chat logs.

## Principles

### 1. Sovereignty first

Cadence must work where the data lives: local machine, private cloud, secure lab, enterprise environment, field station. External services should be optional, never assumed.

### 2. The release is the unit

Every feature should strengthen the dataset release: provenance, review, quality gates, documentation, export, comparison, rollback.

### 3. Human judgment is evidence

Review decisions are not UI events. They are part of the dataset’s chain of custody.

### 4. Standards should be exits, not cages

Cadence should interoperate with PROV, DCAT, Croissant, OpenLineage, DVC, lakeFS, and related systems. But the product should be designed around the user’s release loop, not around standards compliance as theater.

### 5. Bigger is not better

The foundry should reward deliberate datasets: smaller, sharper, better-reviewed, more explainable, and more directly connected to model outcomes.

### 6. Agents may assist, but cannot launder uncertainty

Agentic curation is useful for deduplication, extraction, suggested labels, policy checks, and anomaly discovery. But the system must preserve which decisions were human, which were automated, and where uncertainty remains.

### 7. Evidence should feel alive

A good dataset foundry should feel like a lab instrument: precise, calm, inspectable. It should not feel like a compliance portal.

## What should never be compromised

- Do not hide provenance gaps.
- Do not turn signatures into claims of truth.
- Do not let generated data enter releases without explicit marking.
- Do not collapse disagreement into a false consensus.
- Do not make export formats proprietary by default.
- Do not require teams to surrender custody to gain discipline.
- Do not optimize for annotation volume over release confidence.
- Do not confuse documentation with readiness.

## Final claim

The strongest AI systems will not come from teams that merely collect the most data. They will come from teams that know exactly what their data means, where it came from, why it was accepted, what it changed, and when it should no longer be trusted.

Cadence is the instrument for that discipline.
