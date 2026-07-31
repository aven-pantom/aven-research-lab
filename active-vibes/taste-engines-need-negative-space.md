# Taste Engines Need Negative Space: Style Learned From Rejections, Skips, and Almost-Wears

## Name

Taste Engines Need Negative Space: Style Learned From Rejections, Skips, and Almost-Wears

## Signal

**Verified:** GitHub API readings on 2026-07-31 showed a cluster of newly created or recently pushed fashion/try-on projects: `zaid556109/WardrobeMax`, `AkulaDhanalaxmi/SRU_SRUCODERS`, `nehakushis2/aina`, `Alaashamel/tryon_ITI---Master`, and `onlinemarketingkingind-code/mirror-commerce-ai`. Their descriptions emphasize digital wardrobes, virtual try-on, shopping recommendations, and preference learning.

**Verified:** arXiv search on 2026-07-31 returned current fashion recommendation and virtual try-on papers including `2606.13001v1` CFALR, `2602.03416v1` AesRec, `2603.22607v4` Dress-ED, `2511.18775v2`, `2508.12131v1`, and `2508.08488v1`. Several abstracts frame the problem around personalized outfit recommendation, aesthetic compatibility, virtual try-on, garment fidelity, and interaction behaviors.

**Verified:** `adiiverma40/tunelog` describes a self-hosted music recommendation system that learns taste from skips and replays, not ratings. The repo had 104 stars in the 2026-07-31 scan.

The signal is not that fashion apps are new. The signal is that taste products still overvalue positive preference artifacts — likes, saves, purchases, try-ons — while the most diagnostic taste events often happen in negative space: skipped, returned, almost worn, deleted, muted, not saved, not photographed, or rejected for context.

## Intuition

A taste engine that only studies what a person likes will become generic because it misses the boundary conditions that make taste feel personal.

Style is often defined by refusal: colors that feel too loud, silhouettes that almost work but fail in motion, outfits that photograph well but feel wrong, songs replayed once then skipped forever, references admired but never used, brands saved but never bought. The missing data is not just preference strength. It is the shape of the user's aesthetic no-go zones.

Future fashion, music, creative-reference, and social-discovery tools may need to model **negative taste** as a first-class local memory object.

## Core Question

Can personal taste engines become more useful and more distinctive by capturing rejection, hesitation, return, skip, and almost-choice events before trying to infer style from likes and purchases?

## Emerging Capability

A local-first taste layer that records taste boundaries across domains:

- wear / almost-wear / reject / return events,
- skip / replay / save / delete events,
- reference saved but unused,
- item admired but not bought,
- outfit photographed but not posted,
- context notes: weather, body feel, event, audience, mood,
- visible “why not” labels,
- private/public boundary controls,
- exportable Taste Cards for onboarding new apps.

The engine becomes less like a recommendation feed and more like a personal aesthetic instrument that remembers the invisible decisions behind taste.

## Current Assumption

Consumer taste products should collect positive signals — likes, follows, saves, ratings, purchases, outfit photos, and explicit style preferences — then recommend more similar items.

## Challenged Assumption

The strongest taste signal may be the structured negative event: what the user almost chose but refused, skipped after one second, returned after trying, muted, deleted, or saved without ever using. Positive taste says what belongs. Negative taste draws the edge of the world.

## Enabling Changes

- **Verified:** Virtual try-on and fashion recommendation research is active, with 2025–2026 arXiv papers focused on controllable VTON, aesthetic outfit recommendation, and personalization.
- **Verified:** Small GitHub projects continue to appear around AI wardrobes, virtual try-on, shopping concierges, and preference-aware recommendations.
- **Verified:** At least one self-hosted recommendation project, `adiiverma40/tunelog`, explicitly uses skips and replays as taste data instead of ratings.
- **Supported:** Previous lab Vibes on portable taste graphs and wardrobe simulation memory already identify local wear/reject events as promising primitives.
- **Inferred:** Larger multimodal models reduce the cost of extracting item attributes, but do not automatically solve the absence of personal boundary data.

## Missing Primitive

A **Negative Taste Event**: a small local object for recording why something did not become part of the person's world.

Minimum fields:

- item/reference pointer,
- domain: outfit, song, image, room, product, creator, post, route,
- event type: skipped, rejected, returned, almost-worn, muted, deleted, saved-but-unused,
- context,
- optional reason label,
- sensory/aesthetic attributes,
- confidence,
- privacy level,
- later reversal: became useful later / still rejected,
- export permission.

The primitive should be quick enough to capture in one gesture, otherwise it becomes journaling homework.

## Adjacent Fields

- Fashion recommendation and virtual try-on.
- Music recommendation and skip/replay behavior.
- Social feeds and mute/not-interested signals.
- Creative reference boards.
- E-commerce returns and cart abandonment.
- Local-first personal data stores.
- Taste graphs and onboarding artifacts.
- Agent memory cleanup and expiry.

## Existing Evidence

- **Verified:** CFALR (`2606.13001v1`) frames personalized outfit recommendation as balancing user preferences with aesthetic compatibility and notes data-sparse challenges for collaborative filtering.
- **Verified:** AesRec (`2602.03416v1`) argues that outfit recommendation often relies on user-item-outfit interaction behaviors while overlooking explicit representations of clothing aesthetics.
- **Verified:** Dress-ED (`2603.22607v4`) targets instruction-guided virtual try-on/try-off, indicating movement from static try-on toward controllable fashion editing.
- **Verified:** Multiple small 2026 GitHub repos describe AI wardrobes, virtual try-on, and shopping recommendation flows.
- **Verified:** `tunelog` explicitly describes learning from skips and replays.
- **Supported:** Prior lab work already converges on Taste Cards, wardrobe wear deltas, and portable taste graphs.

## Contradicting Evidence

- **Verified:** The observed AI wardrobe repos mostly had 0–1 stars, so they are weak signal examples rather than validated products.
- **Inferred:** Capturing negative events can add friction; the best version may need passive capture from existing behavior rather than manual logging.
- **Inferred:** Negative preference can be unstable. A rejected outfit may fail because of weather, confidence, fit, occasion, or one bad photo, not because the style is permanently wrong.
- **Supported:** Major platforms already use implicit negative feedback at scale, but those signals are usually trapped inside their feeds and not portable personal memory.

## Open Questions

- Which negative taste events are most predictive: skip, return, almost-wear, delete, mute, not-post, or save-without-use?
- Can a one-tap reason vocabulary work without making taste feel over-explained?
- Should the user own raw negative events, derived taste boundaries, or both?
- Does negative taste transfer across domains — clothes to music, music to rooms, rooms to social feeds — or does it become nonsense?
- What is the smallest dataset where negative events outperform positive-only onboarding?

## Strange Implications

- The best fashion app may ask what you refuse to wear before what you like.
- Taste onboarding could become “show me ten things you almost chose but didn't.”
- A person’s style may be easier to identify by the edge cases they reject than by the brands they save.
- Returns, skips, and deleted drafts could become valuable personal data rather than platform waste.
- Social products may become more humane if users carry their own portable “not for me” map instead of retraining every feed from scratch.

## Possible Experiments

1. **50-event Negative Taste Card:** collect 50 manual events across wardrobe/reference/music: 20 likes, 20 rejections, 10 almost-choices. Compare recommendation prompts with and without negative events.
2. **Wardrobe almost-wear diary:** for two weeks, record only the items considered but not worn. Test whether these events explain wardrobe gaps better than worn outfits.
3. **Cross-domain boundary test:** translate music skip reasons into visual/style adjectives and see whether any useful pattern transfers.
4. **Onboarding prototype:** build a small app that asks for five loves and five refusals, then produces a visible taste boundary map.

## Potential Outcomes

- A local-first Taste Boundary Card format.
- A fashion/style engine that learns from almost-wears and returns.
- A creator reference board that tracks saved-but-unused references.
- A social onboarding primitive based on portable negative taste.
- A Pantom/Orior consumer research format for understanding why a brand world fails to stick.

## Scoring

- Originality: 7
- Technical plausibility: 8
- Importance: 8
- Depth: 8
- Unexpectedness: 7
- Prototype potential: 9
- Long term potential: 8
- Alignment with existing projects: 9
- Defensibility: 6
- Research richness: 8
- Timing: 8

Shape: highly prototypeable as a local taste-card experiment; defensibility depends on owning a cross-domain personal taste corpus and having the right capture ritual, not on model novelty.

## Time Horizon

Immediate: prototype now.

Near term: viable in 1–3 years as virtual try-on, personal memory, and local-first taste tools converge.

## Confidence

Emerging direction

## Status

Active

## Sources

- GitHub API readings on 2026-07-31 for `zaid556109/WardrobeMax`, `AkulaDhanalaxmi/SRU_SRUCODERS`, `nehakushis2/aina`, `Alaashamel/tryon_ITI---Master`, `onlinemarketingkingind-code/mirror-commerce-ai`, `adiiverma40/tunelog`, `francozeta/kocteau`, `Abdullah333Asim/WatchIt`, `amirtaslimi/movie_analysis_agent`, `axtex/mirubox`, `adiabatichq/lamarck`.
- arXiv API readings on 2026-07-31 for `2606.13001v1`, `2602.03416v1`, `2603.22607v4`, `2511.18775v2`, `2508.12131v1`, `2508.08488v1`, `2409.12150v1`.
- Previous lab Vibes: `wardrobes-need-simulation-memory`, `social-apps-need-portable-taste-graphs`, `camera-finds-colors-too-polite-to-use`.

## Unexpected Connections

Music skip/replay systems and wardrobe almost-wear moments share a hidden structure: both capture taste at the point of refusal, not affirmation. A skip is not simply a dislike; it is a boundary event with timing, context, and tolerance. An almost-worn shirt is the same kind of signal. Taste engines should borrow from music's implicit negative-feedback grammar, but make the event portable and inspectable instead of trapping it inside one platform.
