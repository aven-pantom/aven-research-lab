# Synthetic Social Contract — Draft Primitive

## Purpose

A lightweight contract for products that use synthetic inhabitants inside social spaces.

## Required fields

```yaml
synthetic_inhabitants:
  disclosure: required
  visual_label: required
  role_description: required
  allowed_initiation:
    - greet_newcomer
    - reply_to_public_post
    - summarize_room_norms
    - surface_archival_examples
  forbidden_behavior:
    - impersonate_human
    - claim_real_world_experience
    - inflate_popularity_metrics
    - initiate_private_emotional_dependency
    - conceal_synthetic_origin
  memory:
    scope: room_local
    user_controls:
      - inspect
      - delete_user_related_memory
      - mute
  influence_caps:
    max_synthetic_replies_per_thread: 2
    synthetic_posts_visible_in_feed: capped
  retreat_conditions:
    - human_density_threshold_met
    - user_hides_synthetic_layer
    - safety_trigger
  audit_log:
    synthetic_messages: retained
    prompt_version: retained
    moderation_events: retained
```

## Design principle

Synthetic inhabitants should behave like cast members, not fake guests.
