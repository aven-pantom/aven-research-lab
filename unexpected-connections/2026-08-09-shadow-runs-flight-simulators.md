# Unexpected Connection — Shadow Runs and Flight Simulators

## Connection

Consumer AI agents, database migrations, and flight simulators are all trying to solve the same hidden problem: **how to expose the consequence of action before production reality is touched**.

## Shared structure

- A pilot does not prove competence by saying they know the checklist; they rehearse inside a simulator where errors are observable and non-fatal.
- A database operator does not apply a risky migration blind; they inspect a plan, run staging, and keep rollback close.
- A browser or phone agent should not ask for vague permission to “continue”; it should show a Shadow Run Card with predicted mutations, irreversible boundaries, stale assumptions, and commit gates.

The common primitive is not simulation as entertainment. It is **consequence preview**.

## Why this matters

Agent safety discussions often split into permission scopes and post-hoc logs. Those are necessary but incomplete. Permissions say what the agent is allowed to touch. Logs say what happened after. A shadow run sits between them: what the agent expects will happen if allowed to proceed.

## Transferable mechanism

From aviation:

- scenario setup
- abnormal-condition rehearsal
- preflight briefing
- go/no-go gates
- post-run debrief

From database operations:

- dry-run plan
- migration diff
- transaction boundary
- rollback path
- production commit

Agent equivalent:

- mirrored surface
- predicted action sequence
- predicted mutation set
- irreversible-boundary marker
- approval gate
- observed live delta
- recovery receipt

## Failure this may prevent

Without a shadow run, agent products will keep overloading a single confirmation button with too many meanings: permission, understanding, consequence, risk, reversibility, and trust. A confirmation button is too small to carry that much reality.

## Connected Vibes

- `active-vibes/agents-need-shadow-runs.md`
- `active-vibes/agents-need-flight-recorders.md`
- `active-vibes/agents-need-transition-tests.md`
- `active-vibes/agents-need-undo-gravity.md`
- `active-vibes/phones-need-permission-receipts.md`
- `active-vibes/drones-need-airspace-manners.md`
