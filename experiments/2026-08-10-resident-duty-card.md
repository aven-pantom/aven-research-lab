# Experiment — Resident Duty Card

## Objective

Test whether a small, explicit duty card makes local always-on agent behavior more legible than normal app permissions or notification settings.

## Hypothesis

A Resident Duty Card improves trust because it separates what a small local agent may notice, decide, suppress, escalate, remember, and prove.

## Materials

- Five simulated resident-agent roles:
  1. Phone secretary
  2. Browser tab triage watcher
  3. Local research folder watcher
  4. Wardrobe reminder
  5. Coding-agent risk sentinel
- 50 simulated events across those roles.
- Two review formats:
  - normal prose permission/settings description
  - Resident Duty Card

## Resident Duty Card fields

- Surface
- Duty
- Allowed observations
- Forbidden observations
- Local actions
- Escalation conditions
- Human approval conditions
- Quiet hours / sleep state
- Battery budget
- Memory retention
- Receipts emitted
- Revocation path
- Known failure modes

## Procedure

1. Hand-author five Resident Duty Cards.
2. Create 10 events per role.
3. Classify each event as ignore, local action, wake larger model, ask human, or forbidden.
4. Produce a receipt for each non-ignored event and a sample suppression receipt for ignored events.
5. Compare with a normal permissions/settings description.

## Success criteria

- Reviewers can identify overreach faster from the duty card than from prose settings.
- The card makes at least three hidden risks visible: battery drain, sensitive observation, silent suppression, insecure local action, or excessive retention.
- The event classification can be understood without raw private context.

## Failure criteria

- The card feels like compliance theater.
- The local/large/human escalation boundary remains unclear.
- Suppression receipts expose too much private information.
- The five roles collapse into generic notification filtering.

## Stopping condition

Stop after 50 simulated events. Continue only if the card changes accept/reject decisions compared with normal settings.

## Connected Vibes

- `active-vibes/personal-agents-need-resident-microbrains.md`
- `active-vibes/phones-need-permission-receipts.md`
- `active-vibes/personal-ai-needs-behavioral-canon.md`
- `active-vibes/agents-need-peripheral-vision.md`
