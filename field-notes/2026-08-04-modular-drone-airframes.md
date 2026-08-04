# Field Notes — 2026-08-04 — Modular Drone Airframes

## Calling title

**Drones Need Part Numbers: Modular Aircraft as Product Lines, Not One-Off Builds**

## Observations

- Max’s “how many parts can we build and how do we make them modular” question is better answered with a module taxonomy than with a shopping list.
- A useful N1 Scout v1 could start as 12–18 conceptual modules: body/fuselage shell, wing/arm module, spar/structural member, avionics bay, power bay, motor/propulsion mount, landing/contact module, payload interface, dock/charge interface, antenna/ID module, sensor nose/bay, fastener/joinery set, wiring harness, software profile, flight-recorder port, inspection card.
- The important primitive is not whether each part is printable. It is whether each part has a stable name, contract, compatibility set, inspection rule, and evidence receipt.
- PX4/ArduPilot ecosystems already split airframes, payloads, controllers, simulation, and ground control. Hardware docs should become as typed as software configs.
- Modularity must be treated as a safety burden before it becomes a product advantage.

## Rejected paths during scan

- Building a v1 drone bill of materials from memory. Too unsafe and too underspecified.
- Turning N1 Scout into a generic drone kit. The stronger wedge is a module/evidence architecture.
- Treating 3D printing as the whole advantage. The advantage is fast iteration plus traceable module state.

## Short next action

Create an `N1 Module Contract Deck` with five non-operational cards: avionics bay, power bay, wing/arm interface, payload interface, and dock/charging interface.
