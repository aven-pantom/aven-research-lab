# Source Library — Cameras Should Capture Change, Not Pictures

## Session

2026-07-19

## Primary signal

A new camera app may need to capture change, atmosphere, semantic transitions, and personal world-state rather than only pictures and videos.

## Sources checked

### Event-based Vision: A Survey

- URL: https://arxiv.org/abs/1904.08405
- Type: survey / near-primary research synthesis
- Evidence: **Verified at abstract level.** Event cameras asynchronously measure per-pixel brightness changes and output event streams; claimed advantages include microsecond-scale temporal resolution, high dynamic range, low power, and low latency.
- Relevance: Provides the core technical analogy: cameras do not have to be fixed-rate image machines.
- Limitation: Event-camera hardware is not standard in phones; the consumer app implication is inferred.

### The Event-Camera Dataset and Simulator

- URL: https://arxiv.org/abs/1610.08336
- Type: dataset/simulator paper
- Evidence: **Verified at abstract level.** DAVIS-style sensors combine conventional global-shutter frames with event-based sensing and require new algorithms.
- Relevance: Supports a hybrid design: photos/video plus semantic/event deltas, not event-only purity.
- Limitation: Robotics/SLAM context, not consumer camera UX.

### Ego4D: Around the World in 3,000 Hours of Egocentric Video

- URL: https://arxiv.org/abs/2110.07058
- Project site: https://ego4d-data.org/
- Type: dataset and benchmark suite
- Evidence: **Verified at abstract/site level.** 3,670 hours of daily-life egocentric video, 931 camera wearers, 74 locations, 9 countries; includes episodic-memory-oriented tasks.
- Relevance: Shows that first-person capture can be structured around memory queries and daily-life events.
- Limitation: Dataset research does not prove consumer willingness for persistent capture.

### On the Place of Text Data in Lifelogs, and Text Analysis via Semantic Facets

- URL: https://arxiv.org/abs/1606.02440
- Type: lifelogging research position paper
- Evidence: **Verified at abstract level.** Argues lifelogs should include speech/text/cognitive activity, not only physical activity.
- Relevance: Supports the idea that visual media alone misses what users need to recover later.
- Limitation: Does not solve privacy or UI.

### Event Encryption: Rethinking Privacy Exposure for Neuromorphic Imaging

- URL: https://arxiv.org/abs/2306.03369
- Type: privacy/security research
- Evidence: **Verified at abstract level.** Neuromorphic cameras can still expose privacy-relevant information despite non-frame data.
- Relevance: Prevents a false privacy claim: sparse/event data is not automatically safe.
- Limitation: Focused on neuromorphic imaging, not phone app policy.

### Prophesee event-based vision explainer

- URL: https://www.prophesee.ai/event-based-vision/
- Type: company technology explainer
- Evidence: **Commercial source; useful for terminology, not neutral validation.**
- Relevance: Confirms industry framing of event-based vision as eye/brain-like, change-responsive sensing.
- Limitation: Marketing source; do not treat claims as independent evidence.

## Research judgement

The strongest defensible move is not "put an event camera in a phone." It is to borrow the event-camera principle as an interaction model: save moments when the world changes, using local models and sensor fusion to create user-controlled memory artifacts.
