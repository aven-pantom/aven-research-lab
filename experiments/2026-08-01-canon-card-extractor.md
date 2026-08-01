# Experiment — Canon Card Extractor

## Related Vibe

[Personal AI Needs a Behavioral Canon](../active-vibes/personal-ai-needs-behavioral-canon.md)

## Objective

Test whether useful behavioral doctrine can be extracted from ordinary agent corrections, approvals, failures, and preferences without building a full personal AI OS.

## Hypothesis

A small set of scoped Canon Cards will make agent behavior easier to inspect and transfer than a raw memory file or chat history.

## Input

- 20–50 real or synthetic-safe agent correction events.
- Each event includes: instruction, agent action/answer, user correction, project/context, risk level, and whether the correction should become standing doctrine.

## Output

A local `canon.jsonl` file where each line contains:

```json
{
  "id": "canon_001",
  "scope": "global|project|app|device",
  "doctrine": "short behavioral rule",
  "evidence": ["source event IDs"],
  "confidence": "weak|medium|strong",
  "approval_threshold": "none|notify|ask|explicit",
  "examples_correct": [],
  "examples_failure": [],
  "conflicts": [],
  "review_after": "date or condition"
}
```

## Procedure

1. Collect 20–50 correction events from safe local agent work.
2. Ask an agent to propose Canon Cards with evidence links.
3. Manually reject, merge, or edit proposed cards.
4. Run two versions of a small repeated task: memory-only versus memory plus canon.
5. Compare whether the canon version better follows style, permission, interruption, and completion standards.

## Success criteria

- At least 10 Canon Cards feel useful after manual review.
- Cards cite concrete evidence rather than vibes.
- The canon-assisted run makes fewer repeated mistakes or asks better approval questions.
- The user can understand the doctrine without reading raw transcripts.

## Failure criteria

- Cards become generic prompt advice.
- Manual review takes longer than the saved agent work.
- The canon duplicates existing memory without changing behavior.
- The agent over-applies stale doctrine to a new context.

## Stopping condition

Stop after one task family and 50 events. Do not build UI until the card schema proves behaviorally useful.

## Evidence label

**Prototype candidate** based on verified personal-agent source signals and prior lab convergence around room contracts, flight recorders, transition tests, and undo envelopes.
