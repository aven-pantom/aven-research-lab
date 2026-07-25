# Experiment Spec — Design History Ledger Trace Card

## Purpose

Test whether a lightweight design-history ledger makes a simple CAD object more editable and reviewable by an agent than final geometry or code alone.

## Central question

Does preserving construction intent, constraints, uncertainty, and validation history improve downstream CAD modification quality?

## Setup

Choose one simple object: a shelf bracket, drone camera mount, enclosure plate, or clamp. Represent it in a code-CAD tool such as CadQuery, build123d, or OpenSCAD.

## Trace card fields

- Object name
- Intended use
- Source inputs: sketch, prompt, reference object, measurement, scan, imported geometry
- Feature sequence
- Feature dependency graph
- Named constraints
- Functional faces/holes/interfaces
- Negotiable dimensions
- Non-negotiable dimensions
- Material assumptions
- Manufacturing process assumption
- Validation checks run
- Failed edits
- Known unknowns
- Safe edit examples
- Unsafe edit examples
- Rollback point

## Procedure

1. Create or select one simple CAD script.
2. Write a Design History Ledger by hand.
3. Ask an agent for three modifications using only a render/mesh/code baseline.
4. Ask the same modifications using the ledger.
5. Compare failure modes: broken constraints, wrong intent, lost manufacturability, unclear questions, inability to explain edit.

## Success criteria

- The ledger causes the agent to ask fewer irrelevant questions.
- The ledger preserves functional constraints through edits.
- The ledger makes failures easier to diagnose.
- A human reviewer can understand why each feature exists without opening the CAD tool.

## Failure criteria

- The ledger duplicates the CAD script without adding useful intent.
- The agent ignores or misuses ledger constraints.
- The trace card takes more time to maintain than it saves.

## Stopping condition

Stop after one object and three edits. Do not build a full tool until the trace card proves it changes edit quality.

## Related Vibe

- [Machines Need Blueprints They Can Replay: CAD as Design History, Not Geometry](../active-vibes/cad-as-design-history-not-geometry.md)
