# Manifest — Future-Mask Action Schema

Date: 2026-07-22

Related Vibe: [Actions Become Video Masks](../active-vibes/actions-become-video-masks.md)

## Purpose

Capture the smallest useful experiment implied by tonight's Vibe: represent an action proposal as a partial future that can be rendered, compared, audited, and stored.

## Sketch

```json
{
  "schema": "future-mask-action/v0",
  "reference_frame": "frame_000.png",
  "time_horizon_s": 4.0,
  "revealed_entities": [
    {
      "id": "robot_arm",
      "source": "urdf_render|drawn_mask|tracked_video",
      "trajectory_mask": "robot_mask.mp4",
      "confidence": 0.8
    }
  ],
  "desired_hidden_entities": [
    {
      "id": "mug",
      "constraint": "move_to_region",
      "region_mask": "target_region.png",
      "time_window_s": [2.0, 4.0]
    }
  ],
  "forbidden_regions": ["human_hand_mask.png", "table_edge_mask.png"],
  "contact_events": [
    {
      "entity_a": "gripper",
      "entity_b": "mug",
      "expected_time_s": 1.2,
      "tolerance_s": 0.4
    }
  ],
  "validity_checks": ["no_mesh_penetration", "object_not_teleporting", "gripper_contact_before_motion"],
  "stop_conditions": ["human_enters_scene", "object_slips", "model_disagreement_high"]
}
```

## First use

Do not build robotics hardware. Start with a trace-card/viewer around existing videos or a browser-like cursor world where physical safety is irrelevant. The goal is to test whether future masks make action proposals more inspectable than language or low-level action traces.
