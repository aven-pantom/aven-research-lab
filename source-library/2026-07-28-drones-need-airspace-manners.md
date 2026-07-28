# Source Notes — Drones Need Airspace Manners

## Research package
Active Vibe: [Drones Need Airspace Manners](../active-vibes/drones-need-airspace-manners.md)

## Sources inspected

### FAA — Remote Identification of Drones
- URL: https://www.faa.gov/uas/getting_started/remote_id
- Producer: Federal Aviation Administration.
- Source type: official regulator guidance page.
- Evidence label: **Verified** for FAA's description of Remote ID.
- What it contributes: Remote ID is framed as identification and location information broadcast by a drone in flight. FAA also says Remote ID helps locate the control station when a drone appears unsafe or unauthorized, and that it lays safety/security groundwork for more complex operations.
- Reliability notes: Strong for US regulatory framing. It does not establish that intent signaling is needed; that is an inference from what Remote ID covers and omits.

### Open Drone ID Core C Library
- URL: https://github.com/opendroneid/opendroneid-core-c
- Producer: Open Drone ID project.
- Source type: open source implementation.
- Evidence label: **Verified** for implemented Remote ID encoding/decoding scope.
- What it contributes: The README states the library provides C functions for packing/unpacking Open Drone ID messages as defined in ASTM F3411 and ASD-STAN Direct Remote ID specifications, intended for broadcast over accepted methods such as Bluetooth/Wi-Fi.
- Reliability notes: Useful near-primary evidence of the message layer developers can actually implement. Standards documents themselves should be consulted before any standards proposal.

### MAVLink common message definitions
- URL: https://github.com/mavlink/mavlink/blob/master/message_definitions/v1.0/common.xml
- Producer: MAVLink project.
- Source type: protocol definition.
- Evidence label: **Verified** for available message definitions.
- What it contributes: The common XML includes OpenDroneID-related messages compatible with ASTM F3411 / ASD-STAN Direct Remote ID, UTM-assigned UUID identity type, emergency/failure states, mission failure flags, and a deprecated `TRAJECTORY_REPRESENTATION_WAYPOINTS` message.
- Reliability notes: Strong for protocol surface. It does not prove actual deployment or adoption patterns in current flight stacks.

### NASA UAS Traffic Management Project
- URL: https://utm.arc.nasa.gov/index.shtml
- Producer: NASA Ames / NASA UTM project.
- Source type: project page / archived public program material.
- Evidence label: **Supported** for UTM as a recognized low-altitude UAS traffic-management problem.
- What it contributes: UTM establishes that drone operations require dedicated traffic-management concepts; it supports the claim that identity alone is insufficient for the future operating environment.
- Reliability notes: Page is marked archived and may contain outdated program details. Use for framing, not current policy.

## Working interpretation
**Inferred:** Remote ID, MAVLink telemetry, and UTM create strong pieces of the drone integration stack, but they do not constitute a public, privacy-preserving, low-bandwidth intent grammar. The opportunity is to prototype that grammar as a human/machine interface, not to bypass regulation or build tactical autonomy.

## Needs deeper verification
- Current ASTM/ASD-STAN constraints on additional fields or companion broadcasts.
- Human-drone interaction literature on bystander trust and intent displays.
- Whether UTM providers already expose public local intent primitives.
- Privacy/legal critiques of Remote ID and local receiver apps.
