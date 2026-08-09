# Rejected Path — Generic AI Widget Marketplace

## Why it initially seemed promising

Apps SDKs, MCP servers, and agent platforms make it easy to imagine a marketplace of AI widgets: weather panels, shopping panels, dashboards, data viewers, calculators, task cards, and creator tools.

## What evidence weakened it

- **Verified:** MCP/tool ecosystems already have registry and marketplace-like momentum.
- **Verified:** OpenAI Apps SDK already provides component integration inside a large host.
- **Supported:** A marketplace thesis quickly becomes distribution/business-model research rather than a new interface primitive.
- **Inferred:** The hard missing layer is not finding widgets. It is preserving shared operational state, allowed verbs, provenance, undo, stale markers, and handoff context inside each work object.

## Which assumption failed

The failed assumption: if tools can render UI, the opportunity is a store of rendered tools.

Sharper assumption: if tools can render UI, the opportunity is a portable work object that keeps the task alive after the message disappears.

## Whether it may become viable later

A marketplace may become viable after a Workbench Object Card or similar artifact descriptor exists. Without that, the marketplace would likely fill with shallow wrappers and host-locked panels.

## Useful remnants

- Distribution still matters.
- Capability Receipt Manifests remain relevant for installing/trusting tool providers.
- Workbench objects should be exportable enough that a future store is not pure lock-in.

## Future signal that should trigger reconsideration

Reconsider when two or more major AI hosts support portable component artifacts with declared actions, export, provenance, and stable lifecycle outside a single chat thread.
