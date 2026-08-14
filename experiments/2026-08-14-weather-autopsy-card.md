# Experiment — Weather Autopsy Card Fixture

## Related Vibe

[Civil Drones Need Weather Autopsies](../active-vibes/civil-drones-need-weather-autopsies.md)

## Objective

Test whether a compact post-flight evidence card makes low-altitude drone weather uncertainty clearer than a normal forecast panel plus free-text flight note.

## Constraint

Simulator-only and fictional scenarios. No live routing, hardware configuration, payload guidance, evasion, surveillance, or operational flight recommendations.

## Hypothesis

A Weather Autopsy Card will help reviewers identify the key weather residual, confidence level, and next-route constraint faster than raw forecast text and a generic flight note.

## Fixture

Create 20 fictional civil scenarios across:

- inspection route near buildings;
- open-field mapping;
- waterfront corridor;
- tree-lined residential path;
- heat/battery degradation case;
- visibility/precipitation ambiguity;
- unexpected gust/drift;
- manual abort;
- safe uneventful baseline;
- stale forecast baseline.

Each card includes:

- route class;
- forecast source/timestamp;
- expected conditions;
- observed residual;
- event markers;
- operator note;
- evidence confidence;
- privacy class;
- safety judgment;
- next-flight constraint;
- expiry/review rule.

## Comparison

For each scenario, prepare:

1. Normal weather panel summary + free-text post-flight note.
2. Weather Autopsy Card.

Ask a reviewer, or a model in a later controlled pass, to identify:

- the main mismatch;
- the operational uncertainty;
- whether the evidence should change the next similar route;
- what must not be inferred.

## Success criteria

- Reviewers identify the residual and uncertainty more consistently from cards.
- Cards discourage unsafe green-route conclusions.
- Privacy abstraction preserves decision value.
- The format stays short enough for routine post-flight use.

## Failure criteria

- Cards merely restate the forecast.
- Cards require telemetry unavailable from ordinary logs.
- Cards imply safety certification or live route authorization.
- Privacy redaction removes all useful route-class learning.

## Stopping condition

Stop after 20 scenarios if the card cannot produce clearer, safer next-route constraints than the baseline.
