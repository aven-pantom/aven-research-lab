# Field Notes — 2026-08-14 — Weather Autopsies for Civil Drones

## Session signal

Forecasts and authorizations describe what should be true before flight; flight logs know what the aircraft actually met. The gap is a post-flight weather residual, not another weather map.

## Observations

- **Verified:** FAA Remote ID makes many drones broadcast identification and location information during flight.
- **Verified:** LAANC is a structured authorization interface for controlled airspace.
- **Verified:** NASA ASRS shows aviation safety has a mature pattern of collecting incident narratives for learning.
- **Verified:** NOAA/NWS NBM provides blended model guidance, useful as an expected-state reference.
- **Inferred:** Small civil drone operators need route-class learning: “this kind of corridor in this condition tends to create this residual,” not merely “wind 12 mph.”
- **Inferred:** Drone flight logs are most interesting when treated as physical traces: forecast span, observed residual, event markers, operator note, safety judgment, expiry.

## Terms worth keeping

- Weather Autopsy Card
- forecast residual
- route-class memory
- air surprise
- safety memory, not weather extraction
- physical real-user monitoring

## Weak branches

- Generic drone weather app: too ordinary and already served by aviation/weather dashboards.
- Live crowd weather extraction from drones: tempting but privacy/liability-heavy and too close to surveillance infrastructure.
- Automated route recommendation: premature; the first object should explain, not authorize.

## Next useful artifact

Hand-author 20 simulator-only Weather Autopsy Cards from fictional civil scenarios. Do not touch real operational routing, payload details, or hardware instructions.
