# Source Notes — The Bird Drone We Can Actually Build: An Unmanned Ornithopter for Quiet Civil Work

## Integrity note

This source note uses arXiv metadata retrieved through the arXiv API on 2026-07-19, plus one accessible near-primary Wyss Institute page. Several official project pages for Festo SmartBird/BionicOpter, TU Delft DelFly, UMD Robo Raven, NASA, and FAA were attempted but returned 403/404 from this environment; they are useful future sources but are not treated here as retrieved evidence.

## Safety boundary

This is a civil/research ornithopter source map. It does not preserve operational guidance for surveillance, evasion, targeting, payload integration, or unsafe deployment. The useful path is small-scale, accountable, logged, geofenced, non-persistent, and tested in simulator/tethered/indoor conditions before any lawful outdoor flight.

## Retrieved academic sources

### Event perception for flapping-wing robots

**Verified:** Raul Tapia et al., `A Comparison between Frame-based and Event-based Cameras for Flapping-Wing Robot Perception`, arXiv:2309.05450v1, 2023.

Key points from abstract:

- Ornithopter perception faces severe vibration, abrupt movement, motion blur, lighting changes, and strict size/weight/energy constraints.
- Event cameras are presented as promising because of microsecond temporal resolution, high dynamic range, and low power.
- Results suggest event cameras as suitable sensors for ornithopters, while noting open challenges.

Source: <https://arxiv.org/abs/2309.05450>

### Autonomous perching

**Verified:** Raphael Zufferey et al., `Experimental method for perching flapping-wing aerial robots`, arXiv:2309.01447v1, 2023.

Key points from abstract:

- Describes an experimental setup and guide for perching large flapping-wing robots.
- Notes forward flight, limited payload, and flight oscillations as challenging conditions.
- Validates autonomous perching with a 700 g ornithopter.

Source: <https://arxiv.org/abs/2309.01447>

**Verified:** Raphael Zufferey et al., `How ornithopters can perch autonomously on a branch`, arXiv:2207.07489v1, 2022.

Key points from abstract:

- Frames flapping wings as quiet and efficient, with safety, maneuverability, and physical interaction advantages.
- Presents joint operation of flapping-flight controller, close-range correction, and passive claw appendage.
- Demonstrates autonomous branch perching with a 700 g ornithopter.

Source: <https://arxiv.org/abs/2207.07489>

### Dynamic sense-and-avoid

**Verified:** J. P. Rodríguez-Gómez et al., `Free as a Bird: Event-based Dynamic Sense-and-Avoid for Ornithopter Robot Flight`, arXiv:2310.09875v1, 2023.

Key points from abstract:

- Presents onboard dynamic sense-and-avoid for large-scale ornithopters using event cameras.
- Event processing is designed for low-cost onboard hardware.
- Controller actuates horizontal and vertical tail deflections for avoidance.
- Validated indoors and outdoors with different obstacle shapes/sizes.

Source: <https://arxiv.org/abs/2310.09875>

### Flexible/twisting wings and efficiency

**Verified:** David Colmenares et al., `Bio-inspired Flexible Twisting Wings Increase Lift and Efficiency of a Flapping Wing Micro Air Vehicle`, arXiv:2001.11586v1, 2020.

Key points from abstract:

- Flexible twisting wings increased aerodynamic efficiency by 41.3%, translational lift by 35.3%, and effective lift coefficient by 63.7% versus rigid-wing design in the reported experiments.
- Results exceeded quasi-steady blade element model predictions, suggesting unsteady CFD relevance.

Source: <https://arxiv.org/abs/2001.11586>

### Membrane wing aeroelasticity

**Verified:** Alexander Gehrke et al., `Aeroelastic characterisation of a bio-inspired flapping membrane wing`, arXiv:2203.14055v2, 2022.

Key points from abstract:

- Flexible membrane wings can passively camber and rotate leading/trailing edges.
- Performance gains depend on membrane stiffness, effective angle, and aeroelastic number.
- Excess camber can reduce performance.

Source: <https://arxiv.org/abs/2203.14055>

### Control and autonomy

**Verified:** Jiaze Cai et al., `Learning-based Trajectory Tracking for Bird-inspired Flapping-Wing Robots`, arXiv:2411.15130v1, 2024.

Key points from abstract:

- Bird-sized flapping-wing robots have potential for agile flight in complex environments, but robust trajectory tracking remains difficult.
- A model-free RL framework is proposed in simulation for high-DOF bird-inspired flapping-wing robots, multimodal flight, and trajectory tracking.

Source: <https://arxiv.org/abs/2411.15130>

**Verified:** Tomohiko Jimbo et al., `Insect-Scale Tailless Robot with Flapping Wings: A Simple Structure and Drive for Yaw Control`, arXiv:2407.06500v3, 2024.

Key points from abstract:

- Fabricates a 1.52 g insect-scale tailless robot with four paired tilted flapping wings.
- Yaw control is difficult in flapping-wing systems.
- Adaptive control compensates for offsets from misalignment/modeling errors.

Source: <https://arxiv.org/abs/2407.06500>

### RoboBee / microrobotic lineage

**Verified:** Wyss Institute page on RoboBees states the project develops insect-inspired microrobots with potential uses in crop pollination, search and rescue, surveillance, and environmental/weather/climate monitoring. The page states RoboBee is around half the size of a paper clip, less than one-tenth of a gram, and uses artificial-muscle-like actuation.

Source: <https://wyss.harvard.edu/technology/robobees-autonomous-flying-microrobots/>

## Source pattern

**Supported:** Ornithopters are not fantasy; the research literature already contains working pieces: flapping-wing perception, perching, event-based obstacle avoidance, flexible wing efficiency, membrane aeroelasticity, and control.

**Inferred:** The missing product primitive is not only an airframe. It is a small safe platform that joins mechanism, perception, control, telemetry, lawful-use boundaries, and repeatable test evidence.

## Future source deepening

- Full papers for the arXiv items above.
- TU Delft DelFly documentation and papers.
- UMD Robo Raven papers/news.
- Festo SmartBird/BionicOpter archived materials.
- FAA/EASA small UAS rules for lawful testing.
- Open-source flapping-wing CAD/control repos, if credible.
