# Source Notes — A Camera That Finds the Colors You Were Too Polite to Use

## Signal

Max shared an Instagram reel as inspiration for an app where you take a picture and it shows “insane color palettes.”

Canonical saved inspiration:

- Content library entry: `#40`
- URL: <https://www.instagram.com/reel/Da-5Qpqq_47/>
- Creator: `@anjeees`
- Visible caption: `UGLY MAXXING (COLOR EDITION)`
- Status: partial. The public page exposed caption, preview, comments, and a 9.23s video element, but the raw MP4 was a blob URL and was not downloaded.

## Source integrity

This note combines:

1. the visible Instagram reel metadata and preview;
2. live competitor/source-page inspection for palette tools;
3. first-principles product analysis.

It does not claim full frame-by-frame analysis of the reel.

## Competitor / adjacent tool evidence

### Coolors

**Verified:** Coolors positions itself as `The super fast color palettes generator!` and says users can generate/browse combinations, extract colors from images, check accessibility, preview palettes on real designs, organize palettes, and export formats.

Source: <https://coolors.co/>

Observed implication:

- Coolors owns fast utility, broad tooling, image picker, palette visualizer, export, and large palette library.
- It is strong as a design utility but less emotionally opinionated.

### Adobe Color / Adobe Express color palettes

**Verified:** Adobe Color/Express positions around browsing trending palettes, curated color combinations, themes for branding/social/web, extracting colors from images, generating schemes, refining/tweaking palettes, saving to Creative Cloud, and color theory concepts.

Source: <https://color.adobe.com/>

Observed implication:

- Adobe owns institutional design workflow and safe color-theory language.
- It is useful but culturally conservative.

### Khroma

**Verified:** Khroma says it uses AI to learn which colors a designer likes and creates limitless palettes to discover/search/save. It can view combos as typography, gradient, palette, or custom image, and includes WCAG accessibility ratings.

Source: <https://www.khroma.co/>

Observed implication:

- Khroma owns personalization and “AI learns your taste.”
- It still starts from liked colors rather than a captured real-world vibe.

### Color Hunt

**Verified:** Color Hunt presents hand-picked palettes for designers/artists and organizes palettes by tags such as pastel, vintage, retro, neon, warm, cold, nature, night, space, sunset, etc.

Source: <https://colorhunt.co/>

Observed implication:

- Color Hunt owns browseable inspiration and aesthetic labels.
- It is feed/library-first, not camera-first.

### Happy Hues

**Verified:** Happy Hues is `Curated colors in context` and lets users see palettes applied on a real example website, with sections explaining hue, tint, shade, tone, value, saturation.

Source: <https://www.happyhues.co/>

Observed implication:

- Happy Hues owns applied context: not just swatches, but where colors go.
- This is a key lesson for the app: palette output should show role/use, not just hex.

### Realtime Colors

**Verified:** Realtime Colors says users can visualize colors and fonts on a real website; it emphasizes realistic distribution of primary, secondary, accent, background, and text colors.

Source: <https://www.realtimecolors.com/>

Observed implication:

- Realtime Colors owns practical preview and color-role distribution.
- A photo-to-palette app should include role mapping.

### Colormind

**Verified:** Colormind describes itself as an AI-powered palette generator using deep learning, able to learn color styles from photographs, movies, and popular art.

Source: <http://colormind.io/>

Observed implication:

- Colormind is close to the Vibe technically: learn palettes from visual source worlds.
- Opportunity remains in mobile capture, cultural naming, and intentional “insane” variations.

### Material Theme Builder

**Verified:** Material Theme Builder is theming for Material Design 3.

Source: <https://material-foundation.github.io/material-theme-builder/>

Observed implication:

- The role-mapping side is mature for UI systems, but not expressive enough for fashion/editorial/photo inspiration.

### Pigment by ShapeFactory

**Verified:** Pigment describes a way to generate fresh/vibrant colors based on lighting and pigment instead of math.

Source: <https://pigment.shapefactory.co/>

Observed implication:

- Pigment points to a more atmospheric model: lighting/material rather than abstract color wheel.

## Pattern across tools

Existing palette tools mostly optimize for:

- generation speed;
- browsing;
- harmony;
- color theory;
- accessibility;
- export;
- role preview;
- personalization.

The new opening is different:

```text
photo → mood diagnosis → risky palette directions → role-mapped use cases → shareable artifact
```

## Competitor gap

Most tools answer:

```text
What colors go together?
```

The proposed app answers:

```text
What colors are hiding in this vibe, and how far can I push them?
```

## Useful source limitations

- Canva palette generator returned HTTP 403 from this environment.
- Instagram reel was public-partial only; raw video was not downloaded.
- No user testing has been run.
- “Insane” palette desirability is speculative but supported by visible cultural signal around `UGLY MAXXING (COLOR EDITION)` and the broader popularity of aesthetic/color-combination content.
