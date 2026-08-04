# Experiment — N1 Module Contract Deck

## Purpose

Test whether N1 Scout / Notrex drone work becomes clearer when the aircraft is represented as a small set of versioned module contracts instead of as an unspecified build plan.

## Related Vibes

- [Drones Need Part Numbers](../active-vibes/drones-need-part-numbers.md)
- [A Drone Factory That Fits on a Desk](../active-vibes/desk-sized-factory-for-quiet-persistent-aircraft.md)
- [Drones Need Airspace Manners](../active-vibes/drones-need-airspace-manners.md)
- [Machines Need Blueprints They Can Replay](../active-vibes/cad-as-design-history-not-geometry.md)

## Hypothesis

A five-card module deck will expose more useful constraints than a premature parts list. The deck should make unknowns visible: compatibility, inspection, firmware assumptions, failure modes, and evidence gaps.

## Scope

Non-operational documentation prototype only. No dimensions, thrust targets, payload recipes, tactical procedures, or flight instructions.

## Module cards for v1

1. **Avionics Bay Contract** — flight controller, recorder port, firmware assumptions, calibration state.
2. **Power Bay Contract** — battery class, connector class, inspection state, thermal caution, retirement rule.
3. **Wing / Arm Interface Contract** — attachment role, neighboring modules, stress unknowns, inspection points.
4. **Payload Interface Contract** — permitted civil payload classes, authority class, data/privacy rule, forbidden uses.
5. **Dock / Charging Interface Contract** — physical contact role, power boundary, safety interlock concept, maintenance receipt.

## Success criteria

- Each card can be understood without airframe dimensions.
- Each card identifies at least one compatibility rule and one failure mode.
- The deck reveals at least five unknowns that should be solved before physical prototyping.
- The deck can feed a static Evidence Shelf UI.

## Failure criteria

- The cards become generic documentation with no decision value.
- The deck implies false safety or airworthiness.
- The artifact drifts into build instructions or operational capability.

## Stopping condition

Stop after five cards and a compatibility matrix. Only continue if the deck changes a design decision or catches a real ambiguity.

## First artifact

Create `experiments/n1-module-contract-deck/` with:

- `MODULES.md`
- `compatibility-matrix.md`
- `airframe.lock.example.json`
- `evidence-shelf-wireframe.md`

## Evidence label

**Prototype candidate** for documentation/interface. **Unknown** for any physical aircraft implications.
