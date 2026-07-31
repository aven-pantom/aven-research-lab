# Source Notes — Negative Taste Signals

## Scan time

2026-07-31, UTC environment clock.

## Primary signal

Fashion/taste tooling is converging on AI wardrobes, virtual try-on, and preference-aware recommendations, but most visible projects and papers still foreground positive/compatibility signals. A parallel music recommendation repo signal points toward skips/replays as a lower-friction taste primitive.

## GitHub API readings

All readings were collected through the GitHub API on 2026-07-31. Star counts are public attention signals, not proof of durable demand, production reliability, or user love. Repository descriptions were read from GitHub metadata, not audited source behavior.

### AI wardrobe / virtual try-on weak-signal repos

- `zaid556109/WardrobeMax` — 0 stars, created 2026-07-31, pushed 2026-07-31. Description: upload clothing photos, build a digital wardrobe, chat with an AI assistant for occasion-based outfit recommendations, and visualize outfits on your own photo using pretrained virtual try-on models.
- `AkulaDhanalaxmi/SRU_SRUCODERS` — 0 stars, created 2026-07-26, pushed 2026-07-30. Description: e-commerce trust solution for Myntra WeForShe Hackerramp with BuyReady recommendations, AI virtual try-on, warehouse prepack verification, delivery confidence, and return verification.
- `nehakushis2/aina` — 0 stars, created 2026-07-30, pushed 2026-07-30. Description: virtual try-on by analyzing body shape and size; ML learns user preferences for future recommendations.
- `Alaashamel/tryon_ITI---Master` — 1 star, created 2026-06-27, pushed 2026-07-29. Description: AI-powered virtual try-on and fashion intelligence platform with style recommendations, English/Arabic support, PWA, and Stripe.
- `onlinemarketingkingind-code/mirror-commerce-ai` — 0 stars, created 2026-07-22, pushed 2026-07-29. Description: AI shopping concierge combining Skin AI, Virtual Try-On, and intelligent shopping recommendations.

### Taste/recommendation adjacent repos

- `adiiverma40/tunelog` — 104 stars, created 2026-03-18, pushed 2026-07-30. Description: self-hosted music recommendation that learns your taste from skips and replays, no ratings needed.
- `francozeta/kocteau` — 11 stars, created 2026-03-02, pushed 2026-07-31. Description: open-source music platform for reviews, discovery, curated collections, and taste-based recommendations.
- `Abdullah333Asim/WatchIt` — 0 stars, created 2026-05-19, pushed 2026-07-31. Description: movie discovery/tracking app with conversational AI agent and Tinder-style swipe interface to build dynamic taste profiles.
- `amirtaslimi/movie_analysis_agent` — 0 stars, created 2026-07-31, pushed 2026-07-31. Description: preference-aware recommendation system using critic/audience reviews, local Qdrant vector database, and LangGraph ReAct agent.
- `axtex/mirubox` — 0 stars, created 2026-06-13, pushed 2026-07-31. Description: anime/manga discovery platform with semantic search, personalised AI recommendations, and taste-based profile identity.

### Local-first/personal software adjacent repos

- `adiabatichq/lamarck` — 3 stars, created 2026-07-10, pushed 2026-07-28. Description: open-source, local-first environment for personal software that evolves with the user.
- `thewolffish/wolffish-mobile` — 1 star, created 2026-07-20, pushed 2026-07-30. Description: local-first Markdown-powered personal AI desktop app.
- `thewolffish/wolffish-app` — 5 stars, created 2026-05-14, pushed 2026-07-27. Description: local-first Markdown-powered personal AI desktop app.

## arXiv readings

Collected via arXiv API on 2026-07-31.

- `2603.22607v4` — Dress-ED: Instruction-Guided Editing for Virtual Try-On and Try-Off. Published 2026-03-23. Abstract frames VTON/VTOFF progress and says existing datasets remain static, motivating instruction-driven editing for controllable and interactive fashion generation.
- `2511.18775v2` — Rethinking Garment Conditioning in Diffusion-based Virtual Try-On: Decouple, Don't Denoise. Published 2025-11-24. Abstract frames VTON as synthesizing realistic images of a person wearing target garments for e-commerce/fashion.
- `2508.12131v1` — DualFit: A Two-Stage Virtual Try-On via Warping and Synthesis. Published 2025-08-16. Abstract frames VTON as improving online fashion retail by visualizing garments without physical trials.
- `2508.08488v1` — MuGa-VTON: Multi-Garment Virtual Try-On via Diffusion Transformers with Prompt Customization. Published 2025-08-11. Abstract emphasizes identity preservation, garment fidelity, and multi-garment prompt customization.
- `2606.13001v1` — CFALR: Collaborative Filtering-Augmented Large Language Model for Personalized Fashion Outfit Recommendation. Published 2026-06-11. Abstract frames personalized outfit recommendation as balancing user preferences with aesthetic compatibility and notes collaborative filtering struggles in data-sparse scenarios.
- `2602.03416v1` — AesRec: A Dataset for Aesthetics-Aligned Clothing Outfit Recommendation. Published 2026-02-03. Abstract says clothing recommendation often relies on user-item-outfit interaction behaviors while overlooking explicit representations of clothing aesthetics.
- `2509.23242v1` — TATTOO: Training-free AesTheTic-aware Outfit recOmmendation. Published 2025-09-27. Abstract frames aesthetic-aware outfit completion and compatible-item retrieval as important for fashion e-commerce.
- `2409.12150v1` — Decoding Style: Efficient Fine-Tuning of LLMs for Image-Guided Outfit Recommendation with Preference. Published 2024-09-18. Abstract frames personalized outfit recommendation as requiring fashion compatibility understanding and trend awareness.

## Interpretation

- **Verified:** Fashion AI activity is visible in both research and small public repos.
- **Verified:** Several current papers frame outfit recommendation around preference, aesthetic compatibility, and interaction behavior.
- **Verified:** A self-hosted music recommendation repo explicitly uses negative/implicit behavior — skips — alongside replays.
- **Inferred:** Negative signals such as returns, almost-wears, saved-but-unused references, mutes, and skips may provide sharper personal taste boundaries than positive-only likes/saves.

## Caveats

- GitHub weak-signal repos with 0–1 stars should not be read as adoption evidence.
- arXiv abstracts were used; full papers were not deeply audited during this run.
- Negative taste may be context-specific and unstable.
- Platforms already exploit implicit negative feedback internally; the research opportunity is making such signals local, visible, portable, and cross-domain.
