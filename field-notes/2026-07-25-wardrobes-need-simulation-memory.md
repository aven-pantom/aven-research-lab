# Field Notes — Wardrobes Need Simulation Memory

Date: 2026-07-25

## Starting signal

Diffusion virtual try-on is getting lighter and more public at the same time consumer wardrobe apps are normalizing closet digitization. The overlooked possibility is a style memory system that learns from wear attempts, skips, regrets, repeats, and contexts.

## Notes

- **Verified:** CatVTON explicitly attacks complexity in diffusion virtual try-on by arguing for concatenation rather than additional modules/heavy preprocessing.
- **Verified:** IDM-VTON and OOTDiffusion both frame garment fidelity/controllability as central problems.
- **Verified:** VITON-HD and older DeepFashion Try-On sources make clear that artifacts, misalignment, and failure cases remain real.
- **Verified:** Dress Code has restrictive access terms and manual validation. Fashion/body datasets are not frictionless product inputs.
- **Verified:** GetWardrobe’s product language is unusually close to the stronger wedge: clothes the user already owns, daily generation, weather, calendar, wear more/buy fewer.
- **Verified:** Stylebook’s longevity suggests closet software is not new; the opportunity cannot just be “digital closet with AI.”
- **Supported:** The best initial artifact is probably not photoreal try-on. It is item cards + outfit collages + Wear Traces.
- **Inferred:** If a style system learns from what the user actually wore, skipped, repeated, and regretted, it becomes more defensible than a generic fashion recommender.
- **Speculative:** A local style memory could eventually become a personal taste operating system across wardrobe, shopping, packing, posting, brand discovery, and identity rehearsal.

## Phrases worth keeping

- Wear Trace
- Style simulation memory
- Regret reduction before recommendation
- The best shopping app tells you not to buy
- A closet is a model of identity under constraint
- Fashion as rehearsal, not feed

## Rejected branch

The tempting wrong framing was “AI virtual fitting room for ecommerce.” That path is too obvious and too dependent on photorealism, retailer inventory, and shopping conversion. The more interesting path starts with clothes the user already owns and makes the memory useful before commerce enters.

## Next search targets

- Fashion recommender systems with explicit user feedback loops.
- HCI studies on wardrobe planning, outfit logging, and body image.
- Whether existing closet apps support after-action outfit feedback as a first-class primitive.
- Local/on-device segmentation and background removal for closet item capture.
