# Unexpected Connection — Transition Tests and Flight Recorders

## Connection

Computer-use agents and aircraft flight recorders solve the same hidden problem: reconstructing a failure after the system has already moved through a sequence of partially observed states.

## Shared structure

Both domains need a reliable chain across:

1. intention or command
2. control surface touched
3. observed state before action
4. action taken
5. observed state after action
6. attribution of what caused the change
7. uncertainty about stale, occluded, delayed, or missing signals
8. recovery decision

A chat transcript is to an agent what a pilot radio transcript is to an aircraft incident: useful context, but not enough to understand what the system actually did.

## Mechanism transfer

Aviation's useful lesson is not merely “log everything.” It is incident reconstructability. The trace must preserve enough state to identify when the system lost contact with reality.

For computer-use agents, this suggests a Transition Card primitive: expected delta, observed delta, source tracking, confidence, and recovery. The card should be small enough to generate every step and structured enough to become training/evaluation data later.

## Why this matters

Long-horizon agents will not become trustworthy through smoother chat UX. They need a visible evidence layer between action and outcome. The same evidence layer can power:

- replayable agent flight recorders
- peripheral status surfaces
- user approval gates
- failure analysis
- benchmark datasets
- safer background automation

## Evidence labels

- **Verified:** Desktop-Delta Bench names state verification, source tracking, and context-aware control as failure dimensions for computer-use models.
- **Supported:** Existing Vibes in this lab already converged on flight recorders, borrowed rooms, peripheral vision, street signs, and drone intent cards.
- **Inferred:** Incident reconstructability is the deeper shared primitive across aviation and computer-use agents.
- **Speculative:** A common Transition Card schema could become an agent interoperability standard.

## Connected Vibes

- [Agents Need Flight Recorders](../active-vibes/agents-need-flight-recorders.md)
- [Agents Need Peripheral Vision](../active-vibes/agents-need-peripheral-vision.md)
- [Agents Need Borrowed Rooms](../active-vibes/agents-need-borrowed-rooms-not-keys.md)
- [Agents Need Street Signs](../active-vibes/agents-need-street-signs.md)
- [Drones Need Airspace Manners](../active-vibes/drones-need-airspace-manners.md)
- [Agents Need Transition Tests](../active-vibes/agents-need-transition-tests.md)
