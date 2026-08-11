# Continuation Port Card

## Type
Experiment

## Date
2026-08-11

## Connected Vibe
[Agents Need Continuation Ports](../active-vibes/agents-need-continuation-ports.md)

## Objective
Test whether a typed continuation object helps an agent resume unfinished work more safely and accurately than a normal prose summary.

## Setup
Create five safe task handoffs:

1. Markdown repo edit
2. browser research dossier
3. local static app review
4. trend-spark scan
5. design critique packet

For each task, prepare two handoff formats:

- prose summary only
- Continuation Port Card with current surface, last verified state, sources/artifacts, open assumptions, allowed next actions, forbidden actions, stale-state risks, undo/replay hooks, and verification checklist

## Success criteria
- Receiving agent finds the correct next action faster.
- Fewer constraints are missed.
- Stale or unsafe assumptions are surfaced earlier.
- Verification quality improves.
- Human reviewer can inspect the handoff in under one minute.

## Failure criteria
- Card takes longer to write than it saves.
- Receiving agent ignores the structured fields.
- Card encourages false confidence because raw evidence is missing.
- Prose summary performs equally well for all five cases.

## Stopping condition
Stop after five tasks. Continue only if at least three cases show a meaningful improvement in resumption quality or safety.

## Non-obvious measure
Count “restart tax”: number of clarifying steps, duplicate reads/searches, and re-verifications required before useful work resumes.
