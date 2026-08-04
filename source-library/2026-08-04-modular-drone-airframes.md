# Source Notes — 2026-08-04 — Modular Drone Airframes

## Calling title

**Drones Need Part Numbers: Modular Aircraft as Product Lines, Not One-Off Builds**

## Session signal

Max asked how many parts can be built and how to make them modular, in the context of printable quiet aircraft and N1 Scout/Notrex drone ambitions.

## Sources checked

### PX4 Airframes Reference

- URL: https://docs.px4.io/main/en/airframes/airframe_reference.html
- Retrieved: 2026-08-04
- Evidence label: **Verified** for existence of PX4 airframe reference documentation and software-level categorization of supported airframes.
- Useful implication: open autopilot ecosystems already need airframe categories, frame definitions, configuration, and compatibility thinking. This supports the idea that the airframe can be treated as a typed product-line object rather than a one-off build.

### PX4 Payloads and Cameras

- URL: https://docs.px4.io/main/en/payloads/
- Retrieved: 2026-08-04
- Evidence label: **Verified** for PX4 payload/camera integration documentation.
- Useful implication: payloads are not just attachments; they are software-facing capabilities that need interface contracts.

### PX4 Pixhawk Series

- URL: https://docs.px4.io/main/en/flight_controller/pixhawk_series.html
- Retrieved: 2026-08-04
- Evidence label: **Verified** for Pixhawk-series documentation inside PX4.
- Useful implication: the flight-controller layer already functions like a modular avionics platform across vehicle classes.

### ArduPilot Copter ESC/Motor Connection Documentation

- URL: https://ardupilot.org/copter/docs/connect-escs-and-motors.html
- Retrieved: 2026-08-04
- Evidence label: **Verified** for ArduPilot setup documentation around ESCs/motors.
- Useful implication: even hobby/prosumer aircraft need disciplined wiring, ordering, calibration, and setup. A part contract should capture these dependencies without becoming a build recipe.

### GitHub API search — drone/autonomy tooling

- Retrieved: 2026-08-04
- Evidence label: **Verified** for repository metadata returned by GitHub API at scan time; stars are attention signals, not adoption proof.
- Results:
  - `JacopoPan/aerial-autonomy-stack` — 551 stars — describes an open framework to simulate and deploy perception-based PX4/ArduPilot drone swarms with ROS 2, YOLO, LiDAR, NVIDIA Jetson, and Gazebo.
  - `Extelligence-ai/bagel` — 388 stars — describes chat with robotics, drone, and IoT data.
  - `altnautica/ADOSMissionControl` — 221 stars — describes an open-source web-based ground control station for autonomous drones.
  - `rubenCodeforges/ardudeck` — 135 stars — describes a GCS spanning ArduPilot, Betaflight, and iNav.
  - `aau-cns/Ardupilot_Multiagent_Simulation` — 122 stars — describes an ArduPilot/ROS 2/Gazebo multi-agent drone simulation environment.

## Interpretation

The open ecosystem is already modular in software: airframes, controllers, payloads, ground stations, simulation, and telemetry. The weak link is often product-line memory at the hardware/software boundary: which physical part revision expects which firmware behavior, calibration state, inspection status, mission envelope, and evidence receipt.

## Contradictions / caution

- **Supported:** Modular aircraft can become less reliable if joints, connectors, tolerances, and version combinations are poorly controlled.
- **Unknown:** No N1 Scout-specific airframe, module count, material process, or performance envelope was validated here.
- **Safety:** Keep early work non-operational: schema, module contracts, compatibility matrix, simulator-only lint, evidence shelf.

## Useful terms

- Module contract
- Assembly graph
- Compatibility matrix
- Evidence shelf
- Airframe lockfile
- Part retirement rule
- Autonomy evidence port
