# Experiment Spec — Acoustic Body Trace Card

## Purpose

Test whether a simple rigid object can become a useful tactile sensor through sparse acoustic pickup.

## Vibe link

[Robots Could Feel Through Their Bones](../active-vibes/robots-feel-through-their-bones.md)

## Core uncertainty

Can commodity audio/piezo sensing localize and classify contact well enough to justify deeper body-as-waveguide tactile research?

## Setup

- Aluminum ruler, rod, or plate.
- One or two piezo discs or contact microphones.
- USB audio interface or microcontroller audio capture.
- Known tap/contact locations marked along the structure.
- Contact materials: fingertip, rubber, metal, plastic, soft eraser.
- Optional: clamp, added mass, temperature shift, loose screw/tape to test drift.

## Data

For each event:

```json
{
  "trace_id": "string",
  "body_geometry": "ruler|rod|plate",
  "material": "aluminum|other",
  "sensor_layout": [{"type": "piezo", "position_mm": 0}],
  "contact_position_mm": 0,
  "contact_material": "finger|rubber|metal|plastic|eraser",
  "contact_type": "tap|press|slide",
  "mount_state": "baseline|shifted_clamp|added_mass|warm|loose_mount",
  "audio_file": "path.wav",
  "prediction": {
    "position_mm": null,
    "contact_material": null,
    "confidence": null
  },
  "notes": "string"
}
```

## Success criteria

- Position classification better than a naive nearest-prior baseline across held-out taps.
- Contact material classification above chance under baseline mount state.
- Failure modes become visible in a trace viewer or confusion table.

## Failure criteria

- Model only works when train/test taps are effectively identical.
- Clamp/mount drift destroys localization completely.
- Actuator/environment-like noise makes the signal unusable.
- Sensor placement is too fragile to be plausible for robot parts.

## Stopping condition

Stop after one evening if a cheap piezo setup cannot produce repeatable waveforms under baseline conditions. Continue only if baseline traces are separable enough that drift becomes the meaningful next test.
