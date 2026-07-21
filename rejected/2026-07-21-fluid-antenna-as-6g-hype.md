# Rejected Path — Fluid Antenna as Generic 6G Hype

## Why it initially seemed promising

Fluid antenna systems appear in current 6G/mmWave research and make large performance claims around outage probability, multiplexing, and spatial diversity. The obvious shallow path would be to frame the session as `FAS will revolutionize 6G`.

## What evidence weakened it

**Verified:** `Fast Fluid Antenna Multiple Access` explicitly says common fast FAMA work often assumes a genie-aided premise where all ports can be probed every symbol and instantaneous signal/interference split is known.

**Verified:** The same abstract names practical problems: hardware limits, switching limits, pilot overhead, and uncertainty about signal/interference separation.

**Supported:** The hardware source inspected reports useful prototype evidence, but it still evaluates measured radiation patterns through channel/network models. This is not the same as mature deployed systems.

## Which assumption failed

The failed assumption was:

```text
more antenna positions automatically become practical diversity
```

The better assumption is:

```text
positions become useful only when the device can sample, infer, move, and decide faster than the channel becomes stale
```

## Whether it may become viable later

Yes. The field is still worth watching. Viability improves if:

- sparse channel inference works under real mobility;
- RF switching/movement becomes fast, durable, and cheap;
- FAS prototypes move from lab measurements into end-to-end demos;
- evaluation reports include probing cost and stale-channel failure modes.

## Useful remnants

The rejected hype path left a stronger Vibe: **Radio Proprioception** — a trace/evaluation layer for radios that physically adapt.

## Future signal that should trigger reconsideration

A public FAS demo showing real-time port/position control in a dynamic environment with measured latency, probing overhead, and failure cases would make the opportunity materially stronger.
