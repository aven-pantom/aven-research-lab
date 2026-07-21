# Idea Bank — Radio Proprioception Trace Card

## One-line idea

A standard trace card and viewer for reconfigurable/movable antenna experiments that shows what the radio knew, where it sampled, what it chose, and whether the result depended on unrealistic oracle assumptions.

## Why now

Fluid antenna and movable antenna papers increasingly depend on position/port selection, channel acquisition, and partial observation. The field needs better ways to make assumptions legible.

## Minimal artifact

A Markdown/JSON schema:

```json
{
  "antenna_configuration": "port_17",
  "position_mm": [12.5, 0.0, 3.0],
  "timestamp_ms": 1842,
  "observed_channel": "...",
  "interference_estimate": "...",
  "uncertainty": 0.31,
  "probe_cost_ms": 0.4,
  "switch_cost_ms": 0.08,
  "chosen_action": "stay",
  "outcome": "packet_ok",
  "oracle_assumption": false
}
```

## Stopping condition

Do not build hardware. First determine whether the schema can represent published FAS/FAMA experiments and reveal missing assumptions.
