# Source Note — X post: real-time monocular 3D reconstruction

## Source

- URL: `https://x.com/AiwithYasir/status/2078381492368253063`
- Creator: Yasir Ai / `@AiwithYasir`
- Captured: 2026-07-19
- Duration of attached video: 70.4 seconds from browser video element.

## Access path

- Original X page inspected in browser while logged out.
- `xurl read` failed because no X auth method is configured locally.
- Browser resource entries exposed the X video playlist: `https://video.twimg.com/amplify_video/2078381423564865536/pl/ALREBXy0Rzrru-vd.m3u8?tag=14`
- Frames were extracted with `ffmpeg` from the 1280x720 variant and inspected as contact sheets.

## Source text visible on X

> China open-sourced a model that reconstructs any scene in 3D from a regular video, in real-time.
>
> one camera. no LiDAR. 10,000+ frames without falling apart.
>
> just walk around with your camera and watch the entire world get rebuilt in 3D at 20 fps.
>
> → runs at ~20 FPS on a single GPU
> → Stable over 10,000+ frames
> → Beats optimization-based methods on benchmarks
> → Works on drone footage, driving videos, indoor walkthroughs
>
> 100% open source.

## Visual evidence inspected

The attached video frames show:

- Indoor mapping / indoor walkthrough scene.
- A reconstructed 3D representation of a room or indoor path.
- A visible camera trajectory curve.
- Insets showing RGB input and a small tracking/map view.
- Chinese/English caption fragments including `Indoor Mapping` and approximate Chinese text meaning stable localization / high-precision reconstruction.

## Limitations

- The underlying model/project name was not visible in accessible frames.
- The benchmark claims were not independently verified.
- No paper/GitHub URL was visible in the inspected frame set.
- Treat the post's performance numbers as source-attributed until the original repository/paper is found.

## Useful implication

Even without identifying the exact model, the signal is strong because it points to an interface inversion: a camera app can behave like a normal camera while collecting enough pose/depth/appearance evidence to produce a scan later. LiDAR becomes one confidence layer, not the feature identity.
