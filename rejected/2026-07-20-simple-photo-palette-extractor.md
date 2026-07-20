# Rejected Path — Photo Palette App as Simple Hex Extractor

## Why it initially seemed promising

A user takes a picture and gets colors. The obvious implementation is dominant-color extraction:

```text
upload image → k-means/quantization → five hex values
```

This is technically easy and useful.

## Why it is rejected as the main path

This already exists in many tools. Coolors, Adobe Color, Colormind, and other palette tools already support image extraction or image-inspired palette generation.

A simple extractor would not capture Max’s actual phrase:

```text
insane color palettes
```

The user is not asking for color sampling. The user is asking for taste transformation.

## Failed assumption

```text
The colors in the image are the final output.
```

Better assumption:

```text
The image is a seed. The output is a palette world.
```

## Useful remnants

Keep simple extraction as the first layer:

- base palette;
- dominant colors;
- accent candidates;
- material/light detection;
- contrast checks.

But the product should add:

- mutation modes;
- cultural names;
- role mapping;
- share cards;
- export/design-token workflow.

## Future reconsideration trigger

If the goal becomes a fast utility/plugin rather than a distinctive product, a simple extractor may be enough. For a Pantom-level creative app, it is too weak.
