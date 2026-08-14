# Source Notes — 2026-08-14 — Weather Autopsies for Civil Drones

## FAA — Remote Identification of Drones

Source: https://www.faa.gov/uas/getting_started/remote_id

- **Verified:** The FAA describes Remote ID as a way for drones in flight to provide identification and location information.
- **Use in Vibe:** Shows that drone operations are already becoming event-legible. A Weather Autopsy Card can attach safety/weather residuals to a flight evidence trail without publishing sensitive payload context.
- **Caution:** Remote ID is not a weather or safety-learning protocol. Do not overstate it.

## FAA — LAANC for Industry

Source: https://www.faa.gov/uas/programs_partnerships/data_exchange

- **Verified:** LAANC is an FAA-supported automated channel for authorizing drone operations in controlled airspace.
- **Use in Vibe:** Demonstrates that civil drone workflows can become structured digital evidence flows rather than only human preflight judgment.
- **Caution:** LAANC authorization does not imply weather suitability or route safety.

## NASA Aviation Safety Reporting System

Source: https://asrs.arc.nasa.gov/

- **Verified:** ASRS is an aviation safety reporting system operated by NASA.
- **Use in Vibe:** Provides the safety-culture analogy: collect structured post-event evidence so the ecosystem learns from anomalies.
- **Caution:** ASRS is narrative and confidential; a drone Weather Autopsy Card should not casually mimic regulatory reporting or promise safety certification.

## NOAA/NWS MDL — National Blend of Models

Source: https://vlab.noaa.gov/web/mdl/nbm

- **Verified:** NBM is an operational blended weather guidance product.
- **Use in Vibe:** A forecast snapshot can be the expected-state side of a residual comparison.
- **Caution:** The Vibe does not claim NBM is sufficient for low-altitude street-canyon flight. It is a reference layer, not ground truth.

## OpenTelemetry — What is OpenTelemetry?

Source: https://opentelemetry.io/docs/what-is-opentelemetry/

- **Verified:** OpenTelemetry frames observability around telemetry such as traces, metrics, and logs.
- **Use in Vibe:** Transfers the structure of traces/residuals/incident evidence from software systems into civil-drone weather learning.
- **Caution:** Software observability analogies break if they hide the physical, regulatory, privacy, and safety constraints of flight.

## Evidence posture

The Vibe is **Emerging direction**, not a validated product thesis. It is well-supported that structured drone operation, weather guidance, aviation reporting, and observability each exist. The specific Weather Autopsy Card is an inferred primitive that needs simulator-first testing.
