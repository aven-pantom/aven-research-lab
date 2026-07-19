# Spatial Negatives and RAW Photography

## Fields connected

- Computational photography / RAW image pipelines
- Spatial computing / 3D reconstruction / SLAM

## What made the connection visible

Max's camera-app question made the failure of “scan mode” obvious. Camera apps already separate capture from development: a RAW/ProRAW file preserves latent sensor data for later interpretation. Spatial capture needs the same move. The output should not be a finished mesh first; it should be a durable bundle of observations that can later become a mesh, splat, floor plan, measurement, AR scene, or memory.

## Shared structure

Both fields have the same hidden problem: the user's visible artifact is only one rendering of richer sensor evidence.

- In photography, the JPEG is one interpretation of exposure, color, lens, noise, and dynamic range.
- In spatial capture, the visible photo/video is one interpretation of camera pose, depth, surfaces, objects, scale, and confidence.

The missing primitive is a file/container that preserves enough raw-ish evidence and metadata for future tools to reinterpret the scene.

## Why it matters

If the app jumps directly from photo to finished “scan,” it will either feel like a gimmick or overpromise accuracy. If it captures a spatial negative, it can offer multiple outputs with honest confidence: beautiful memory, rough layout, metric room plan, object reference, editable design canvas, or agent-readable environment.

## What it could unlock

- A camera roll that unfolds into spatial memory.
- Re-editable room scans instead of one-shot exports.
- Confidence-aware measurements.
- Local-first personal world models.
- Agent tools that can reason about rooms without requiring the user to manually scan every space.

## Evidence

- **Verified:** Apple RoomPlan uses camera + LiDAR for dimensional room capture.
- **Verified:** ARKit scene reconstruction exposes mesh-like environment understanding.
- **Verified:** RealityKit PhotogrammetrySession creates 3D models from images.
- **Verified:** Polycam and Scaniverse already support phone/LiDAR/drone digital-twin capture.
- **Source-attributed:** The X post claims real-time monocular reconstruction without LiDAR; video frames show indoor mapping but did not reveal the model name.

## Uncertainty

The exact open-source model in the X post was not identified from accessible frames. The product principle does not depend on that one model, but the no-LiDAR performance claim needs independent verification before architecture commitments.

## Related Vibes

- [The Camera That Becomes a Scan](../active-vibes/the-camera-that-becomes-a-scan.md)
- [Cameras Should Capture Change, Not Pictures](../active-vibes/cameras-should-capture-change-not-pictures.md)
