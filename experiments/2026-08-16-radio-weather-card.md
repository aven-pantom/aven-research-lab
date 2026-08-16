# Experiment — Radio Weather Card Fixture

## Purpose

Test whether a compact evidence card makes low-altitude drone communication risk more legible than a signal bar, route heatmap, or free-text note — without giving operational flight guidance.

## Linked Vibe

- [Drones Need Radio Weather](../active-vibes/drones-need-radio-weather.md)

## Setup

Create 20 fully synthetic, simulator-only route-class scenarios. Do not use real routes, sensitive locations, or live network measurements.

Each scenario includes:

- route class: short urban canyon, suburban inspection, rural edge, campus loop, dock/warehouse perimeter, etc.
- expected radio margin: coarse categories only,
- evidence source mix: simulation / ground crowdsourcing / prior aerial log / stale estimate,
- freshness: current / aging / stale / unknown,
- density: sparse / moderate / dense,
- observed simulated event: normal / degradation / brief outage / recovery / inconclusive,
- residual: expected better / expected worse / matched / unknown,
- conservative judgment: informational / review-required / unsafe-to-generalize.

## Procedure

1. Hand-author 20 cards as Markdown or JSON fixtures.
2. Render three views for the same scenarios:
   - simple signal status,
   - colored route heatmap,
   - Radio Weather Card.
3. Review each view against four questions:
   - Does it expose stale evidence?
   - Does it separate expectation from observation?
   - Does it avoid implying authorization?
   - Does it produce a useful next-route constraint?

## Success criteria

- The card makes stale evidence and false confidence easier to spot than status/heatmap views.
- The card produces conservative review language without operational instructions.
- The card connects cleanly to Weather Autopsy Cards.

## Failure criteria

- The card looks like route clearance or safety authorization.
- The card requires too much domain-specific data to be useful in a prototype.
- The card hides uncertainty behind a score.
- The fixture drifts into real-world flight planning.

## Stopping condition

Stop after 20 cards and one comparison pass. Do not build route optimization, real map overlays, or telemetry ingestion until the evidence language is proven safe and useful.

## Evidence label

Prototype candidate / simulator-only.
