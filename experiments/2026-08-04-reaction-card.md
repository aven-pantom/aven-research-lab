# Experiment — Reaction Card for AI Video Edits

## Purpose

Test whether a creator-facing `Reaction Card` makes AI video edits more controllable than a prompt-only or timeline-only workflow.

## Related Vibes

- `generated-worlds-need-reaction-tests`
- `video-tools-need-intent-timelines`
- `agents-need-transition-tests`
- `creative-tools-need-provenance-sandboxes`

## Hypothesis

A small card that records pre-state, edit/stimulus, expected consequence, observed consequence, residual mismatch, and replay link will help a creator or agent produce better second variants than a prompt history alone.

## Prototype scope

No model integration required for v0. Build a hand-authored Markdown/JSON schema and static viewer using fictional or locally described 15-second clips.

## Fixture

Create three mock scenes:

1. **Product drop:** hand taps table, bottle should wobble, shadow should shift, label should remain readable.
2. **Fashion turn:** subject spins, coat hem should lag, hair should respond, camera should keep face framed.
3. **Short-drama reveal:** character opens message, second character should notice before cut, captions should not spoil reveal.

## Card schema

```json
{
  "scene_id": "fashion-turn-001",
  "segment": "00:03.000-00:06.500",
  "pre_state": ["subject facing camera", "coat open", "camera static"],
  "stimulus": "subject turns 180 degrees to the left",
  "expected_consequences": [
    "coat hem trails turn by 4-8 frames",
    "hair moves opposite turn then settles",
    "camera reframes to keep face visible"
  ],
  "observed_consequences": [],
  "residuals": [],
  "confidence": "unknown",
  "replay_artifact": "path-or-url",
  "judgment": "untested"
}
```

## Success criteria

- A non-technical creator can understand the card in under one minute.
- The card reveals at least one failure that a prompt/timeline summary hides.
- A second variant brief generated from the card is more specific than one generated from the original prompt alone.

## Failure criteria

- The card feels like benchmark paperwork rather than creative control.
- Expected consequences are too subjective to write quickly.
- The card duplicates normal timeline metadata without improving revision.

## Stopping condition

Stop after three scene cards and one comparison pass. Continue only if the cards produce clearer revisions or reusable scenario tests.

## Evidence label

**Prototype candidate** based on verified arXiv/GitHub signals and inferred product need.
