# Air Street Condition Card Simulator

Date: 2026-08-02
Status: Proposed
Related Vibe: [Low-Altitude Weather Needs Street-Level Air](../active-vibes/low-altitude-weather-needs-street-level-air.md)

## Objective

Test whether a route-segment weather evidence card makes low-altitude drone planning risk clearer than a normal weather forecast summary.

## Non-operational boundary

This is a simulator/UX experiment only. It must not provide real-world flight guidance, tactical routing, or safety-of-life claims.

## Hypothesis

A compact **Air Street Condition Card** can communicate route-local atmospheric uncertainty better than a generic forecast panel because it binds weather evidence to a route segment, altitude band, freshness, vehicle envelope, and conservative judgment.

## Inputs

- One fictional 2 km urban route split into 8–12 segments.
- Synthetic wind/gust/visibility/precipitation values.
- Hand-authored source labels: forecast model, rooftop sensor, mobile observation, unknown.
- Vehicle envelope assumptions stated as fake/non-operational.

## Prototype

A local static HTML or Markdown/JSON viewer that renders:

1. route segment name
2. altitude band
3. valid time window
4. wind/gust state
5. visibility/precipitation flags
6. source mix
7. freshness
8. confidence
9. judgment: `planning clear`, `caution`, `avoid`, or `unknown`
10. reason text

## Comparison

Create three views of the same fictional route:

1. consumer-style weather summary
2. aviation-style concise weather summary
3. Air Street Condition Cards

Evaluate which view best exposes why a segment is questionable.

## Success criteria

- The card format makes uncertainty and stale data visible.
- `unknown` is treated as a first-class state, not hidden.
- The viewer avoids implying real-world clearance.
- A reader can identify which segment caused the caution without reading a long report.

## Failure criteria

- The card simply restates forecast data without better decision context.
- The UI makes unsafe green/red claims.
- The schema requires too many fields to hand-author.
- The route card does not connect to existing UTM/AAM concepts.

## Stopping condition

Stop after one fictional route and one comparison review. Do not expand into real city data until the representation proves useful.
