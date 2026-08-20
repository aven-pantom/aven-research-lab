# Experiment — Acoustic Footprint Card Fixture

## Purpose

Test whether a compact Acoustic Footprint Card can make civil-drone noise impact more legible than raw dB values, generic noise contours, or free-text community notes — without implying operational authorization or community consent.

## Linked Vibe

- [Drones Need Acoustic Footprints](../active-vibes/drones-need-acoustic-footprints.md)

## Hypothesis

**Inferred:** A card that separates predicted acoustic impact, observed residuals, sensitive-context flags, evidence freshness, and conservative judgment will expose false confidence better than normal noise summaries.

## Fixture

Hand-author 20 simulator-only cards across fictional route classes:

1. school-adjacent weekday transit,
2. clinic-adjacent supply hop,
3. residential evening return,
4. park midday survey,
5. warehouse district operations window,
6. campus demonstration loop,
7. emergency drill with public notice,
8. construction-site inspection,
9. waterfront tourist corridor,
10. mixed-use rooftop vertiport approach,
11. rural edge parcel hop,
12. stadium-event exclusion window,
13. sleeping-hours forbidden route,
14. hospital helipad adjacency,
15. repeated low-amplitude overflight,
16. rare high-amplitude event,
17. windy-day acoustic uncertainty,
18. rain-background masking ambiguity,
19. complaint-residual mismatch,
20. route reroute after acoustic autopsy.

## Card fields

- Route class, redacted / fictional.
- Operation window.
- Acoustic role: quiet boundary / transit corridor / tolerant window / review required / forbidden.
- Predicted exposure summary.
- Event count and repetition risk.
- Sensitive-context flags.
- Source mix: simulation, planning map, prior logs, community report, unknown.
- Freshness and confidence.
- Observed residual, if post-flight/simulation.
- Human-perception note: tone, surprise, background contrast, annoyance uncertainty.
- Conservative judgment: informational / review-required / do-not-generalize / forbidden in fixture.
- Non-authorization language.

## Comparison views

1. Raw number table.
2. Noise contour / heatmap summary.
3. Free-text community note.
4. Acoustic Footprint Card.

## Success criteria

- The card makes stale evidence visible.
- The card distinguishes legal/technical evidence from community consent.
- The card catches at least five false-confidence cases that raw numbers/heatmaps hide.
- The card can be understood in under one minute by a non-specialist reader.
- The card stays conservative and does not become route-optimization guidance.

## Failure criteria

- Readers interpret the card as permission to fly.
- The card collapses back into a generic dashboard.
- The psychoacoustic/context fields feel decorative rather than decision-relevant.
- The card requires real route/noise data to be useful at the fixture stage.

## Stopping condition

Stop after 20 cards and a comparison review. Do not move toward live acoustic measurement or operational routing until the language and false-authorization risks are understood.

## Evidence label

**Prototype candidate:** The first experiment is safe because it is simulator-only and fictional.
