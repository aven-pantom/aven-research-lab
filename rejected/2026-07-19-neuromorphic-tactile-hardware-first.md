# Rejected Path: Neuromorphic Tactile Hardware as the Whole Opportunity

Date: 2026-07-19

## Why it initially seemed promising

The strongest surface signal from the source cluster was neuromorphic tactile hardware: GelNeuro’s sensor-to-chip path, SpikingTac’s custom event-camera module, event-driven e-skin with FPGA SNN inference, and multiple papers using event streams for tactile perception.

It would be easy to frame the opportunity as “build better neuromorphic robot skin.”

## What evidence weakened it

- **Verified:** Mixtac explicitly states that event-based sensors are prone to drift during long-term static force estimation and proposes hybrid event-frame sensing.
- **Verified:** Contact-angle estimation work found static representation marginally better than dynamic and combined representations in evaluated scenarios.
- **Unknown:** The session found no useful exact-name GitHub repositories, so source-code/dataset maturity and reproducibility remain unclear.
- **Supported:** Tactile hardware faces physical durability, calibration, elastomer hysteresis, contamination, and manufacturing constraints that a software-first research lab may not be positioned to solve directly.

## Which assumption failed

The failed assumption was that the hardware itself is the primary missing primitive.

The stronger assumption is that many different tactile sensors may need the same intermediate layer: a shared event representation, baseline anchoring model, trace/debugging format, and controller interface.

## Whether it may become viable later

Yes. Hardware becomes worth revisiting if:

- an open event-tactile hardware design gains traction,
- sensor costs fall sharply,
- durable tactile skins become commercially available,
- a public dataset/protocol reveals clear gaps in existing hardware,
- Max wants to explore robotics hardware directly.

## Useful remnants

- Neuromorphic SoCs may be important for power-constrained robot hands.
- Address Event Representation is worth tracking as a candidate encoding lineage.
- Hybrid event-frame sensors may be the practical near-term bridge.

## Future signal that should trigger reconsideration

Reconsider hardware-first research if a robust, low-cost event-tactile sensor ships with open firmware, repeatable calibration, public datasets, and clear manipulation benchmarks beyond texture recognition or isolated classification tasks.
