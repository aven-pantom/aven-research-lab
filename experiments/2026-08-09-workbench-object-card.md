# Experiment — Workbench Object Card

## Related Vibe

`active-vibes/agent-interfaces-need-shared-workbenches.md`

## Objective

Test whether a small portable card can preserve agent/human work state better than a normal chat summary.

## Hypothesis

A Workbench Object Card with visible state, allowed verbs, source pointers, stale-state markers, and mutation receipts will let a human or agent resume a task with less ambiguity than a chat-only transcript.

## Smallest experiment

Hand-author three cards:

1. Design Review Workbench — one landing page screenshot/source note and three pending revisions.
2. Outfit Rehearsal Workbench — five closet items, two rejected combinations, one event context.
3. Agent Task Receipt Workbench — one delegated browser/local task with touched surfaces, changed state, and undo hook.

Render them in a static local HTML viewer or Markdown table. No platform SDK required.

## Card schema v0

```yaml
name:
purpose:
owner: human | agent | shared | external
visible_state:
hidden_state_boundary:
sources:
allowed_verbs:
forbidden_verbs:
stale_after:
confidence:
last_mutation:
undo_or_replay:
export_format:
next_action:
```

## Procedure

1. Create the three cards from realistic but non-sensitive sample tasks.
2. Give an agent only the card, not the original chat.
3. Ask it to continue, revise, or critique the work using only declared verbs.
4. Compare with a control condition where the agent receives a normal prose summary.
5. Record whether the card made boundary violations, stale assumptions, missing sources, or irreversible actions more visible.

## Success criteria

- The card lets the agent identify current state, allowed next actions, and source uncertainty without extra explanation.
- The human can understand what happened and what can be safely done next in under one minute.
- At least one ambiguity present in the prose-summary control is removed by the card.

## Failure criteria

- The card is just a verbose checklist.
- The allowed verbs do not constrain behavior.
- The human still needs the original chat to understand the work.
- The privacy boundary is vague or misleading.

## Stopping condition

Stop after three cards and one control comparison. Do not build a framework until the card proves it improves resumption or boundary judgment.

## Evidence label

**Prototype candidate** as a local artifact experiment; **Unknown** whether it generalizes to consumer AI workflows.
