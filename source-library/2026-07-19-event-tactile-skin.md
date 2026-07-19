# Source Notes — Event-Tactile Skin

Date: 2026-07-19

Session calling title: **Robots Need Skin That Interrupts: Touch as an Event Stream, Not an Image**

## Initial signal

A current arXiv search for event-based and neuromorphic tactile sensing produced a dense 2026 cluster. The repeated words were not just “better tactile sensor,” but **event**, **spiking**, **dynamic**, **AER**, **sensor-to-chip**, **hybrid event-frame**, and **high-frequency control**.

This suggested a possible shift from tactile images to tactile events.

## Retrieval notes

Sources were retrieved through the arXiv API on 2026-07-19 UTC. GitHub repository search queries for exact project names and terms did not return useful repositories in this session, so no source-code availability is claimed.

## Sources explored

### SpikingTac: A Miniaturized Neuromorphic Visuotactile Sensor for High-Precision Dynamic Tactile Imprint Tracking

- URL: http://arxiv.org/abs/2602.23654v1
- Date listed by arXiv API: 2026-02-27
- Authors listed by arXiv API: Tianyu Jiang, Chaofan Zhang, Shaolin Zhang, Shaowei Cui, Shuo Wang
- Evidence label: **Verified** for abstract-level claims only.
- Why it mattered: The abstract frames high-speed event-driven tactile sensors as necessary for human-like dynamic manipulation, while noting integration limits from bulky event cameras.
- Reported claims from abstract: custom standalone event camera module, less than $150 material cost, 1000 Hz perception rate, 350 Hz tracking frequency, hysteresis-aware incremental update law, dynamic task improvements versus frame-based sensors, sub-millimeter geometric accuracy.
- Research implication: Event touch is not only about low latency; it also forces the field to handle elastomer hysteresis and mechanical deformation history.

### Dense Force Estimation with an Event-based Optical Tactile Sensor

- URL: http://arxiv.org/abs/2606.09451v1
- Date listed by arXiv API: 2026-06-08
- Authors listed by arXiv API: Agis Politis, René Zurbrügg, Valentina Cavinato
- Evidence label: **Verified** for abstract-level claims only.
- Why it mattered: It moves beyond net force to dense 3D force-field reconstruction from an event-based optical tactile sensor.
- Reported claims from abstract: event-based marker tracking for shear displacement, CNN for normal displacement, inverse FEM mapping to force, mean absolute error of (0.14 N, 0.10 N, 0.93 N), operation at average 100 Hz.
- Research implication: Event streams can be made physically grounded through mechanics, not only learned as black-box pattern streams.

### An Event-Driven E-Skin System with Dynamic Binary Scanning and real time SNN Classification

- URL: http://arxiv.org/abs/2603.10537v1
- Date listed by arXiv API: 2026-03-11
- Authors listed by arXiv API: Gaishan Li, Zhengnan Fu, Anubhab Tripathi, Junyi Yang, Arindam Basu
- Evidence label: **Verified** for abstract-level claims only.
- Why it mattered: This is closer to electronic skin than camera-inside-elastomer tactile sensing, and it uses Address Event Representation.
- Reported claims from abstract: 16x16 piezoresistive array, event-based binary scan search, 12.8x reduction in scan counts, 38.2x data compression, 99% data sparsity, FPGA Conv-SNN, neuromorphic tactile dataset using AER.
- Research implication: The event idea is not confined to optical tactile sensors. It can be a data-acquisition strategy for skin arrays.

### GelNeuro: A Sensing-Computing Integrated Neuromorphic Tactile System for Texture Recognition

- URL: http://arxiv.org/abs/2607.05241v2
- Date listed by arXiv API: 2026-07-06
- Authors listed by arXiv API: Luoyang Bian, Xinpan Meng, Zhenghua Ma, Houcheng Li, Long Cheng
- Evidence label: **Verified** for abstract-level claims only.
- Why it mattered: The paper specifically says existing systems rely on a host computer for readout/preprocessing/relaying and presents a direct tactile sensing-computing system.
- Reported claims from abstract: GelSight Mini-based front end, Speck2f neuromorphic SoC, DVS events routed through on-chip network to SCNN classifier, 96.3% accuracy on 15-class texture recognition within 80 ms, 19.6 mW board-level active power.
- Research implication: The key transition may be architectural: touch events go directly to edge inference rather than becoming a video stream processed elsewhere.

### SandWorm: Event-based Visuotactile Perception with Active Vibration for Screw-Actuated Robot in Granular Media

- URL: http://arxiv.org/abs/2601.14128v1
- Date listed by arXiv API: 2026-01-20
- Evidence label: **Verified** for abstract-level claims only.
- Why it mattered: It combines active vibration with event-based tactile sensing for perception in granular media.
- Reported claims from abstract: event-based visuotactile sensor with actively vibrated elastomer, IMU-guided temporal filter, 0.2 mm texture resolution, force estimation and field experiments.
- Research implication: Active probing may be necessary when event sensors need change; the robot can generate its own tactile signal by vibrating or moving.

### Event-Driven Visual-Tactile Sensing and Learning for Robots

- URL: http://arxiv.org/abs/2009.07083v1
- Date listed by arXiv API: 2020-09-15
- Evidence label: **Verified** for abstract-level claims only.
- Why it mattered: Older root signal for multimodal event-driven robot perception with NeuTouch and VT-SNN.
- Reported claims from abstract: biologically inspired tactile sensor, spike-based learning, container classification, rotational slip detection, freely available visual-tactile datasets.
- Research implication: The 2026 cluster is not isolated novelty; there is at least a multi-year lineage.

### Mixtac: A Novel Bio-Inspired Hybrid Tactile Sensor with Synergistic Event-Frame Perception

- URL: http://arxiv.org/abs/2605.18550v1
- Date listed by arXiv API: 2026-05-18
- Evidence label: **Verified** for abstract-level claims only.
- Why it mattered: This is the strongest contradiction against pure event-touch maximalism.
- Reported claims from abstract: vision-based sensors have low sampling rates; event-based sensors are prone to drift during long-term static force estimation; hybrid event-frame sensing uses frames for long-term accuracy and events for high-frequency tracking.
- Research implication: The likely primitive is not pure event touch. It is event touch anchored by static/frame baselines.

### Static and Dynamic Representations for Tactile Contact-Angle Estimation with Event-Based Sensors

- URL: http://arxiv.org/abs/2606.03545v1
- Date listed by arXiv API: 2026-06-02
- Evidence label: **Verified** for abstract-level claims only.
- Why it mattered: It compares event-derived representations and finds static representation useful, again challenging a simplistic dynamic-only story.
- Reported claims from abstract: event streams from NeuroTac, dynamic/static/combined contour representations, P99 processing latency below 10 ms, static representation with marginally better performance in tested conditions.
- Research implication: A tactile event protocol probably needs explicit baseline reconstruction and representation modes, not just raw spikes.

## Secondary signals

1. **Hybrid event-frame touch** — event streams provide fast changes, but frames appear necessary for drift correction and persistent contact state.
2. **Active tactile signal generation** — SandWorm’s vibration suggests robots may need to move or excite the contact surface to make hidden structure visible.
3. **Sensor-to-chip tactile inference** — GelNeuro suggests touch may become an ultra-low-power edge pathway rather than another host-computer perception problem.

## Contradictions and uncertainty

- **Contradicted:** Pure event-based tactile sensing is weakened by drift/static-force problems in Mixtac and by static representation gains in contact-angle estimation.
- **Unknown:** Whether these prototypes generalize beyond controlled tasks and lab hardware.
- **Unknown:** Whether any shared representation can survive the diversity of tactile sensor physics.
- **Unknown:** Dataset and code availability. GitHub repository searches performed in this session did not find useful exact-name repositories.

## Rejected/dormant paths from this session

- “Neuromorphic tactile hardware is the whole opportunity” was rejected as too hardware-specific. The stronger pattern is the event interface layer that could span optical tactile sensors, e-skin arrays, hybrid sensors, simulators, and robot policies.
- “Robots just need more tactile data” was weakened. The data problem matters, but the papers point toward timing, sparsity, drift, and control interfaces as equally important.

## Next source paths

- Full PDFs for the eight arXiv papers.
- Dataset availability for NeuTouch / VT-SNN and any 2026 AER tactile datasets.
- DARPA / neuromorphic hardware programs relevant to sensor-to-chip robotics.
- ROS / tactile sensor interface conventions; look for missing standardization.
- Bio-inspired mechanoreceptor literature, especially fast adapting vs slow adapting channels.
