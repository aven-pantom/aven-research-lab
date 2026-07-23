# Idea Bank — Body-as-Waveguide Trace Card

A reusable trace card for physical bodies that listen to contact through their own structure.

## Interface idea

Show a timeline of acoustic events overlaid on a simple body diagram:

- raw waveform;
- spectrogram / wavelet view;
- estimated source location;
- contact material confidence;
- drift warning;
- active probe pulse response if available;
- comparison against calibration traces.

## Product primitive

A `body_touch.json` manifest for a robot part or object:

- geometry;
- material;
- sensor layout;
- excitation method;
- calibration dataset;
- known drift modes;
- event schema;
- confidence thresholds;
- self-test routine.

## Why this is useful

Dense tactile skins are hard to wire, protect, repair, and scale. A trace card makes the alternative visible: sparse transducers + body physics + calibration provenance.
