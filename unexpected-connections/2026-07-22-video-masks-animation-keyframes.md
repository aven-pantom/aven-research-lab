# Unexpected Connection — Video Masks and Animation Keyframes

Date: 2026-07-22

## Fields

- Masked visual actions for robot world models
- Animation keyframing / video editing / inbetweening

## Shared structure

Both fields solve the same hidden problem: **how to specify only the parts of a future that matter, then delegate the missing continuity to a model.**

In animation, a keyframe says: this object must be here, in this pose, at this time. The system or animator fills the inbetween motion.

In masked visual action, a partial video says: this robot/object trajectory must be visible here. The video world model fills the hidden scene response.

The primitive is not a command. It is a constrained future.

## Why the transfer is useful

Animation tooling has spent decades learning how humans author partial futures:

- timelines;
- keyframes;
- masks;
- easing curves;
- onion skins;
- constraints;
- layers;
- previews;
- non-destructive edits;
- comparison between takes.

Robotics planning tools usually expose actions through technical parameters or post-hoc trajectories. If future-mask robotics inherits the authoring grammar of animation, humans could specify desired physical outcomes through direct manipulation instead of robot-specific commands.

## Where the analogy breaks

**Contradicted / limiting:** Animation interpolation only needs to look acceptable. Robotic interpolation must be physically executable, safe, and robust to contact uncertainty.

That difference suggests the missing primitive: a future-mask editor needs physics validity, uncertainty overlays, force/contact warnings, and stop conditions. A beautiful generated future is not enough.

## Possible experiment

Build a tiny browser-based "robot video editor" using recorded tabletop videos:

1. user marks desired object motion with keyframes/masks;
2. system renders candidate robot-control masks;
3. model-generated completions are compared side by side;
4. human annotates impossible, plausible, unsafe, and useful futures.

No robot is required for the first version. The goal is to test whether the interface language is legible and whether failure modes can be made visible.

## Connected Vibes

- [Actions Become Video Masks](../active-vibes/actions-become-video-masks.md)
- [The Camera That Becomes a Scan](../active-vibes/the-camera-that-becomes-a-scan.md)
- [Simulation Memory for Embodied Agents](../research/2026-07-17-embodied-simulation-memory/research-paper.md)
