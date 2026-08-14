# Unexpected Connection — Drone Weather Autopsies and Real-User Monitoring

## Connection

Civil drone weather autopsies resemble real-user monitoring in software more than they resemble ordinary weather apps.

## Shared structure

Both systems compare an expected service state against what was actually experienced at the edge.

In software:

- a page or service is expected to load within a budget;
- telemetry records real user timing, errors, spans, device/network context, and traces;
- incidents are debugged through residuals, not final status alone.

In civil drone operations:

- a route is expected to be flyable under a forecast and authorization context;
- telemetry/operator notes record drift, aborts, battery anomaly, visibility loss, vibration, or control-margin changes;
- safety learning comes from comparing expected air against encountered air.

## Why it matters

Weather tooling usually starts with prediction. Real-user monitoring starts with the humility that production reality will disagree with the model. Low-altitude drones need the same humility: the vehicle is a probe of the actual environment, but the resulting evidence must be scoped, redacted, and used conservatively.

## Mechanism transfer

Useful concepts to transfer from observability:

- trace/span/event structure;
- expected versus observed residual;
- freshness and sampling limits;
- status judgment;
- incident annotations;
- redacted sharing;
- replay pointer;
- postmortem action item.

Concepts not to transfer naively:

- always-on central collection;
- exact-path publication;
- false precision from sparse samples;
- dashboards that make unsafe green-route claims.

## Implication

The first drone-weather product should not be a “smart map.” It should be a **Weather Autopsy Card** that teaches the operator what the aircraft learned from the last flight and what uncertainty still remains.
