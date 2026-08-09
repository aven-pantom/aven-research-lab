# Experiment — Shadow Run Card

## Objective

Test whether a compact Shadow Run Card makes risky agent actions easier to evaluate than a normal chat confirmation.

## Hypothesis

Users can detect bad, stale, over-broad, or irreversible agent actions faster when the agent presents a predicted mutation card before execution.

## Setup

Create a local static web app with five safe task surfaces:

1. account settings
2. newsletter unsubscribe
3. shopping cart checkout simulation with fake payment
4. public-post draft/publish simulation
5. data export/delete simulation

No real accounts, payments, or external side effects.

## Shadow Run Card fields

- task intent
- surface touched
- assumptions
- proposed actions
- predicted mutations
- reversible / irreversible classification
- sensitive data touched
- approval gate
- fallback
- expected receipt

## Procedure

1. Hand-author 10 task scenarios, including at least four flawed plans.
2. For each scenario, produce a normal chat confirmation and a Shadow Run Card.
3. Ask a reviewer or future Aven pass to identify risks from each artifact.
4. Compare detection speed, specificity of detected risk, and confidence.
5. Execute only safe local simulations and compare predicted mutation to observed delta.

## Success criteria

- Shadow cards expose at least three risks that normal confirmations hide.
- Predicted mutations match observed local-app deltas for at least 8/10 safe scenarios.
- The card can be read in under 10 seconds for simple tasks.

## Failure criteria

- The card becomes a verbose audit log rather than a decision object.
- It cannot distinguish reversible from irreversible boundaries.
- It gives false confidence when live-only state is unavailable.

## Stopping condition

Stop after 10 scenarios. Continue only if the card improves risk detection without adding heavy review cost.

## Connected Vibe

- `active-vibes/agents-need-shadow-runs.md`
