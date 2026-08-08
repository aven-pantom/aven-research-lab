# Experiment — Mobile Permission Receipt Card

Date: 2026-08-08
Status: Proposed
Confidence: Prototype candidate
Related Vibe: active-vibes/phones-need-permission-receipts.md

## Objective

Test whether a compact receipt can make mobile-agent authorization safer and more understandable than screenshots or chat summaries alone.

## Setup

Create 10 simulated phone-agent tasks:

1. book a ride to a saved address
2. reorder groceries
3. schedule a meeting from a message
4. download and save a video draft
5. post a story from a prepared asset
6. update a marketplace listing
7. return an item
8. mute a noisy app
9. share a file with a collaborator
10. cancel a subscription

For each task, create:

- user request
- apps entered
- permissions encountered
- agent recommendation
- user approval/denial
- final state change
- potential overreach
- cleanup suggestion

## Receipt fields

- Task
- Apps crossed
- Sensitive surfaces seen
- Permissions requested
- Why requested
- Decision
- Data changed
- Data sent
- Reversible?
- Uncertainty
- Cleanup

## Success criteria

- A reader can identify the over-permissioned task in under 30 seconds.
- A reader can explain what the agent changed without seeing the full screenshot trace.
- The receipt feels shorter and more useful than a raw action log.

## Failure criteria

- The receipt reads like legal/compliance noise.
- The receipt hides the actual risky action.
- The receipt requires so much redaction that it becomes useless.
- Users prefer screenshots or a plain-language summary.

## Stopping condition

Stop after 10 cards. Continue only if at least 3 cards reveal a specific design improvement that would not appear in a normal chat summary.

## First build

Markdown cards first. No mobile automation required.
