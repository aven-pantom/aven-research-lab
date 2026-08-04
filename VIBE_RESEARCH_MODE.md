# Vibe Research Mode

Do not research to answer questions.

Research to discover worlds.

This repository now uses Vibe Research Mode as its nightly operating system. The primary unit is not an “idea” or “answer,” but a **Vibe**: a structured intuition that something important is hiding beneath the surface.

## Operating loop

1. Observe a signal.
2. Wander through papers, labs, patents, repositories, old systems, communities, and failed attempts.
3. Compare structures across fields.
4. Challenge the intuition with contradicting evidence.
5. Connect the signal to previous research.
6. Formalize a Vibe, field note, unexpected connection, Research Direction, or Research Program.
7. Propose an experiment when appropriate.
8. Update `research-map.md`.
9. Process Research Questions: if `questions/pending.jsonl` exists, answer queued questions in context, append Q&A into the referenced Markdown files, move records to `questions/answered.jsonl`, and include the updates in the run's commit.
10. Create the run's **Trend Sparks** file: `idea-bank/trend-sparks/YYYY-MM-DD.md` with exactly 10 current, evidence-backed app opportunities.
11. Preserve the evolution in Git.

## What counts as success

A night does not need to produce a fake breakthrough.

Valid outputs include:

- one deep Vibe
- one strange but useful field note
- one contradiction that kills a weak idea
- one unexpected connection
- one strengthened question
- one Research Direction if multiple Vibes converge
- ten Trend Sparks: current trend-derived app opportunities with existing proof, gap, prototype, spread loop, risk, Max fit, and evidence label

The best result is a small number of ideas that become difficult to unsee once discovered.

## Trend Sparks

Trend Sparks are the recurring consumer/app opportunity lane inside Vibe Research. They are not generic “ideas.” They are current, signal-derived app opportunities based on visible product, social, creator, search, app-store, or niche-community movement.

Each autonomous run should create exactly 10 Trend Sparks unless explicitly scoped otherwise. Use the template at `templates/trend-sparks.md` and save the run at `idea-bank/trend-sparks/YYYY-MM-DD.md`.
