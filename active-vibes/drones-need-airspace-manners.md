# Drones Need Airspace Manners: Tiny Intent Signals for Civil Autonomy

## Name
Drones Need Airspace Manners: Tiny Intent Signals for Civil Autonomy

## Signal
**Verified:** FAA Remote ID explains Remote ID as a drone in flight providing identification and location information by broadcast, and says it helps the FAA/law enforcement locate the control station when a drone appears unsafe or unauthorized.

**Verified:** Open Drone ID's core C library implements ASTM F3411 / ASD-STAN Direct Remote ID message encoding/decoding for broadcast over accepted methods such as Bluetooth and Wi-Fi.

**Verified:** MAVLink contains OpenDroneID messages and also a deprecated `TRAJECTORY_REPRESENTATION_WAYPOINTS` message, suggesting flight stacks have had partial trajectory-description machinery, but not a broadly used small-aircraft social-intent layer.

**Supported:** NASA's UTM project frames UAS Traffic Management as a separate traffic-management problem for lower-altitude UAS operations. The public pattern is identification + strategic traffic management, not human-legible local negotiation.

## Intuition
Small civil drones do not only need to be identifiable. They need manners: compact, machine-readable signals that make near-future behavior legible to other drones, operators, bystanders, property owners, and local services.

A car has turn signals, brake lights, reverse lights, lane position, horn conventions, and eye contact. A drone often has only position, telemetry, mission state inside a ground station, and legal identity broadcast. That is enough for compliance, but thin for trust.

The missing layer is not a full UTM replacement. It is a low-bandwidth **intent grammar**: landing, yielding, inspecting, loitering for lawful work, returning home, emergency descent, avoiding people, requesting corridor, waiting for clearance, giving way.

## Core Question
What is the smallest intent vocabulary that lets autonomous drones become locally understandable without exposing sensitive mission details or creating a surveillance/tactical signaling surface?

## Emerging Capability
A civil drone could broadcast or locally display short-lived intent cards:

- `yielding-east-12s`
- `landing-selected-pad`
- `holding-for-person-under-path`
- `returning-home-low-battery`
- `surveying-roof-edge-lawful-work`
- `emergency-descent-do-not-approach`
- `crossing-corridor-altitude-band`

These signals could feed:

- pilot HUDs;
- neighborhood receiver apps;
- drone docks;
- camera/vision systems;
- municipal dashboards;
- property-owner permissions;
- local conflict detection;
- flight recorders after incidents.

## Current Assumption
The airspace problem is mostly solved by regulation, Remote ID, geo-awareness, UTM services, detect-and-avoid, and operator accountability.

## Challenged Assumption
Remote ID answers “who/where?” UTM answers “how do planned operations coordinate?” Detect-and-avoid answers “how do vehicles not collide?” None of these are equivalent to manners: a near-field, human-comprehensible intent layer that makes autonomous behavior feel predictable before something goes wrong.

## Enabling Changes
- **Verified:** Remote ID broadcast formats and open implementations exist through Open Drone ID.
- **Verified:** MAVLink and flight stacks already carry rich vehicle state, mission state, failure flags, OpenDroneID data, and historical trajectory-description machinery.
- **Supported:** More drone operations are moving from hobby/pilot control toward package delivery, inspection, mapping, public safety, docks, and autonomous workflows.
- **Inferred:** On-device autonomy and local models can translate internal vehicle state into coarse public intent without revealing the full route or payload.
- **Inferred:** Phones, docks, and edge receivers can display local intent without a central app becoming the source of truth.

## Missing Primitive
A **Civil Drone Intent Card**:

```text
intent_type: yield | land | inspect | transit | hold | emergency | return_home
subject_scope: vehicle | landing_zone | corridor | person_avoidance | structure
confidence: planned | executing | degraded | emergency
valid_for_seconds: 2-60
privacy_level: public | nearby_only | regulator_after_event
human_phrase: "Holding while people cross under path"
machine_constraints: optional altitude band / bearing / landing-zone hash
receipt_link: optional local flight-recorder hash
```

The primitive must be small enough for broadcast/display, coarse enough to preserve privacy, and explicit enough to be tested.

## Adjacent Fields
- Aviation lights, ADS-B, TCAS, NOTAMs, runway signage, and cockpit phraseology.
- Autonomous vehicle external human-machine interfaces.
- Robot social navigation.
- Maritime AIS.
- Local-first agent permission rooms and flight recorders.
- Human-drone interaction research.
- Smart-city curb/sidewalk management.

## Existing Evidence
- **Verified:** FAA Remote ID requires identification/location broadcast for many registered drones and frames it as safety/security groundwork for more complex operations.
- **Verified:** Open Drone ID implements ASTM/ASD-STAN Direct Remote ID encoding/decoding and references broadcast transports.
- **Verified:** MAVLink includes OpenDroneID service messages, UTM-assigned UUID identity types, emergency/failure statuses, mission failure flags, and deprecated trajectory representation messages.
- **Supported:** NASA UTM exists because low-altitude uncrewed operations need traffic-management concepts beyond ordinary hobby flight.
- **Inferred:** The presence of identity and trajectory-related standards without a public civil-intent grammar leaves a design gap between compliance and legibility.

## Contradicting Evidence
- **Verified:** Remote ID intentionally focuses on identity/location; expanding public broadcasts could create privacy and misuse risks.
- **Supported:** UTM providers may already handle strategic intent privately; duplicating that layer publicly would add complexity.
- **Supported:** Human-readable intent can be misleading if autonomy changes its plan quickly or if the signal is stale.
- **Inferred:** Some operators will resist broadcasting purpose because inspection, journalism, public-safety, and infrastructure work can be sensitive.

## Open Questions
- What intent vocabulary covers 80% of civil bystander/operator confusion without leaking mission details?
- Should intent be broadcast, visually displayed on the aircraft/dock, available only to nearby receivers, or stored in after-action receipts?
- How should stale or low-confidence intent be shown?
- Can intent be derived from existing MAVLink/ArduPilot/PX4 states without modifying flight-control safety loops?
- What are the liability implications if a drone broadcasts one intent and then does another?
- Could malicious actors spoof “manners” to gain trust?

## Strange Implications
- The first trustworthy drone interface may be less like an autopilot dashboard and more like a turn signal.
- Drone regulation might eventually require not just identity, but bounded explanations of local behavior.
- “Polite aircraft” could become a product category: docks, lights, phone receivers, and trace cards designed around public trust.
- A civil intent grammar could matter more for adoption than marginal range or payload gains.
- The same primitive may apply to ground robots, delivery bots, robotaxis, and home agents operating in shared human space.

## Possible Experiments
1. **Intent-card simulator:** replay public MAVLink logs or synthetic missions and map vehicle states to 12 intent cards. Score ambiguity, staleness, and false assurance.
2. **Receiver mock:** build a local web/mobile HUD that shows nearby simulated drone intent in plain language plus confidence and expiration.
3. **Bystander study without real flights:** show short drone-mission animations with/without intent cards and ask what participants believe will happen next.
4. **Privacy red-team:** for each card, list what sensitive information it leaks and design the coarsest safe alternative.
5. **Flight-recorder link:** attach each intent card to a local event log so after-action review can compare broadcast intent vs actual behavior.

No free-flight prototype is needed for the first pass.

## Potential Outcomes
- Lightweight open schema for civil drone intent.
- Developer tool that converts autopilot state into public intent cards.
- Drone dock/receiver UI for neighborhood operations.
- Research direction around legible autonomy for civil aircraft.
- Standards contribution if the primitive proves useful and safe.
- Product wedge for Max: aviation interface design that begins with trust, not control panels.

## Scoring
| Dimension | Score | Note |
|---|---:|---|
| Originality | 8 | Not “Remote ID but prettier”; focuses on manners as a missing social layer. |
| Technical plausibility | 7 | Can begin as schema/simulator; standards/regulatory adoption is harder. |
| Importance | 8 | Civil drone adoption depends on trust and local predictability. |
| Depth | 8 | Connects aviation, HCI, autonomy, privacy, and standards. |
| Unexpectedness | 7 | Turn signals for drones is obvious only after Remote ID is seen as incomplete. |
| Prototype potential | 8 | A receiver mock and log-to-intent mapper are cheap. |
| Long term potential | 8 | Could become a shared autonomy primitive across robots. |
| Alignment with existing projects | 8 | Fits Max's drones/aviation/autonomy/interface worlds without becoming Cadence. |
| Defensibility | 6 | Schema alone is easy to copy; defensibility comes from design taste, datasets, evaluation, and standards work. |
| Research richness | 8 | Many sources in UTM, HRI, AV eHMI, ADS-B/AIS, and drone standards. |
| Timing | 7 | Remote ID is real; autonomous civil operations are still culturally unsettled. |

## Time Horizon
Near term: viable as simulator, schema, and receiver prototype in 1–3 months. Longer-term adoption requires standards, manufacturer integration, and legal clarity.

## Confidence
Emerging direction

## Status
Active

## Sources
- FAA — Remote Identification of Drones: https://www.faa.gov/uas/getting_started/remote_id
- Open Drone ID Core C Library: https://github.com/opendroneid/opendroneid-core-c
- MAVLink common message definitions / OpenDroneID and trajectory messages: https://github.com/mavlink/mavlink/blob/master/message_definitions/v1.0/common.xml
- NASA UTM project page: https://utm.arc.nasa.gov/index.shtml

## Unexpected Connections
- [Drone intent cards and turn signals for shared autonomy](../unexpected-connections/2026-07-28-drone-intent-cards-turn-signals.md)
- [Agents Need Flight Recorders](agents-need-flight-recorders.md): intent should be auditable against behavior, not merely announced.
- [Agents Need Borrowed Rooms](agents-need-borrowed-rooms-not-keys.md): bounded autonomy needs visible boundaries and revocable trust.
- [A Drone Factory That Fits on a Desk](desk-sized-factory-for-quiet-persistent-aircraft.md): printable/autonomous aircraft need evidence manifests and public legibility before they need more hardware recipes.
