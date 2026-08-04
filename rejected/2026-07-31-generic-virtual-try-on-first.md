# Rejected — Generic Virtual Try-On App First

## Why it initially seemed promising

Virtual try-on is active in research and visible in small app repos. It fits Max's fashion/style/taste frontier and has an obvious consumer surface.

## What evidence weakened it

The 2026-07-31 GitHub scan found multiple new AI wardrobe/try-on repos, but most had 0–1 stars and very similar descriptions: upload clothes, get AI recommendations, visualize on your photo. The arXiv scan also showed substantial technical work around VTON and outfit recommendation, suggesting a generic app surface would compete on model quality and retail integration rather than a new primitive.

## Which assumption failed

The weak assumption was: “better try-on creates the next taste engine.” The stronger path appears to be: “better personal taste memory makes try-on useful.”

## Whether it may become viable later

Viable if paired with a distinctive capture loop: almost-wears, returns, saved-but-unused references, and local Taste Cards. Try-on can become an output surface after the taste boundary layer exists.

## Useful remnants

- Instruction-guided VTON may become useful for testing style counterfactuals.
- Outfit recommendation papers provide evaluation and dataset language.
- AI wardrobe repos show the crowded default feature set to avoid.

## Future signal that should trigger reconsideration

A consumer product or open-source tool that makes try-on behaviorally sticky through personal negative signals rather than novelty image generation.

## Research Questions

### RQ-20260804-015518-dec5 — What if we build it differently and market it as your AI fashion designer?

That is the stronger angle. The rejected path is **generic virtual try-on first**, not fashion AI as a whole. “Your AI fashion designer” can work if the product behaves like a taste partner, not an image gimmick.

Better v1:

- User adds 20–30 closet items manually or from photos.
- User logs real negative signals: skipped, almost-worn, returned, felt off, saved but unused.
- App asks for one upcoming context: date, meeting, shoot, travel day, dinner, weather, desired feeling.
- AI produces 3 outfit briefs, not just images: silhouette, color logic, risk, alternate, confidence, and why it fits the user’s taste boundary.
- After wearing or rejecting, user gives feedback; the designer gets sharper.

Marketing line: **“Your AI fashion designer that learns what you almost wore.”**

Avoid promising perfect try-on. Promise better taste decisions. Try-on can become one output later.

**Evidence label:** **Inferred / Supported** by the lab’s negative-taste Vibe, resale app-chart signal, and crowded generic VTON evidence.
