# Social Apps Need Portable Taste Graphs: Style, Feeds, and Identity Should Travel Separately

## Name

Social Apps Need Portable Taste Graphs: Style, Feeds, and Identity Should Travel Separately

## Signal

On 2026-07-29, the scan began from a visible contradiction in social/product infrastructure: AT Protocol treats account data as a repository on a Personal Data Server, Bluesky exposes custom feeds as a first-class developer surface, ActivityPub standardizes inbox/outbox/following/follower objects, Solid frames personal data as linked resources under user-controlled storage, and Pinterest exposes pins/boards as programmable taste artifacts. Separately, Hacker News search-by-date surfaced live 2026 discussion around AT Protocol scale and agent protocols. The signal is not another federated social network. It is that taste is becoming technically separable from the apps that currently mine it.

Evidence labels:

- **Verified:** AT Protocol overview names Personal Data Servers, Relays, App Views, feed generators, labelers, and repositories as core/lower-level primitives.
- **Verified:** AT Protocol repository spec describes an account repository as the authoritative user data location associated with a PDS.
- **Verified:** Bluesky developer docs expose custom feeds as a starter template surface.
- **Verified:** ActivityPub defines actors, inboxes, outboxes, followers/following, likes, and shares.
- **Verified:** Solid Protocol is a W3C-linked specification for user-controlled web resources/notifications built over HTTP and linked data patterns.
- **Verified:** Pinterest developer documentation exposes Pin and Boards endpoints.
- **Inferred:** These primitives do not yet combine into a portable, user-owned taste graph that can power style, shopping, creator discovery, and social feed products across apps.

## Intuition

The next valuable social primitive may not be the profile, the follower graph, or the content post. It may be a portable taste graph: a small, inspectable, user-owned record of what someone saves, wears, rejects, remixes, buys, screenshots, playlists, pins, bookmarks, and returns to.

Most apps treat taste as private platform exhaust. But fashion, design, music, creator discovery, and AI-personalized tools all need a durable memory of preference. If that memory becomes portable, the center of gravity shifts from platforms that own audiences to interfaces that read, refine, and remix taste.

## Core Question

Can taste become a user-controlled protocol object rather than a platform-specific recommendation shadow?

## Emerging Capability

A personal taste graph could let someone carry preference across:

- fashion styling and wardrobe memory;
- design reference boards and mood systems;
- music/media discovery;
- creator recommendations;
- shopping agents;
- social feeds;
- local-first personal AI;
- agent-assisted publishing and brand-world construction.

The capability is not merely export/import. It is a living graph with provenance, negative signals, context, confidence, and aesthetic vocabulary.

## Current Assumption

Taste is app-local. Pinterest owns boards, TikTok owns watch behavior, Spotify owns music preference, Instagram owns follows/saves, shopping apps own purchases, and AI assistants infer preference from chat history.

## Challenged Assumption

Taste may be more valuable when separated from any one platform and represented as a user-owned, queryable, portable memory layer. Apps would compete on interpretation, interface, community, and commerce execution rather than exclusive ownership of the taste substrate.

## Enabling Changes

- **Verified:** AT Protocol separates account repositories/PDS from app views and feed generators.
- **Verified:** ActivityPub has interoperable social activity primitives.
- **Verified:** Solid defines personal web-resource/storage patterns.
- **Verified:** Pinterest has structured pins/boards APIs that show taste artifacts can be modeled programmatically.
- **Supported:** AI agents increasingly need durable user context and tool access rather than stateless prompts.
- **Supported:** Fashion/style, creative-reference, and creator workflows already revolve around saved artifacts, not just authored posts.
- **Inferred:** Local-first databases, small embedding models, and schema-driven agent tools make private taste memory more feasible than it was during earlier personal-data-store attempts.

## Missing Primitive

A **Taste Card**: a portable record for a preference event.

Minimum shape:

```yaml
id:
type: saved | worn | rejected | bought | pinned | remixed | followed | skipped | returned_to
artifact:
  uri:
  media_hash:
  source_app:
context:
  occasion:
  season:
  location_scope:
  social_context:
  intent:
signals:
  explicit_rating:
  implicit_weight:
  negative_reason:
aesthetic_tags:
  user_words:
  model_words:
  color_roles:
  material_roles:
provenance:
  captured_at:
  source:
  consent_scope:
privacy:
  local_only:
  export_scope:
confidence:
```

The missing primitive is not a universal taxonomy of aesthetics. It is a trace format for preference events that lets each app build its own interpretation without stealing the underlying memory.

## Adjacent Fields

- Federated social protocols: AT Protocol, ActivityPub.
- Personal data stores: Solid, local-first software.
- Recommendation systems and custom feeds.
- Fashion/style engines and wardrobe memory.
- Design reference tools, moodboards, color systems.
- Creator discovery and social commerce.
- Agent memory and MCP-style tool context.
- Provenance/data-portability regulation.

## Existing Evidence

- **Verified:** AT Protocol exposes repositories, PDS, relays, app views, custom feed generators, and labelers as separate pieces of the network.
- **Verified:** AT Protocol repository spec frames account data as a repository under a PDS, not as one app's invisible database row.
- **Verified:** Bluesky has developer templates for custom feeds, proving feeds can be externally defined rather than only platform-owned ranking.
- **Verified:** ActivityPub's social model already represents follows, likes, shares, inboxes, and outboxes as interoperable objects.
- **Verified:** Solid Protocol provides a long-running personal-data-store model, showing the desire predates current AI/social-agent tooling.
- **Verified:** Pinterest's API exposes pins and boards, showing taste artifacts can be made structured enough for third-party tools.
- **Verified:** HN search-by-date on 2026-07-28 surfaced renewed developer attention around AT Protocol scale and MCP/agent tooling, implying the infrastructure conversation is current.
- **Inferred:** None of the scanned sources provide a complete cross-domain taste-memory protocol with positive and negative signals, context, and user-owned provenance.

## Contradicting Evidence

- **Supported:** Earlier personal-data-store and data-portability efforts often failed to become daily consumer behavior because users rarely maintain abstract data infrastructure.
- **Supported:** Platforms have strong incentives to keep recommendation signals proprietary.
- **Inferred:** Raw portable taste data may be less valuable than platform-specific interpretation, cold-start networks, and proprietary ranking models.
- **Inferred:** A universal taste graph risks becoming too vague unless it starts with one narrow high-frequency use case.

## Open Questions

1. What is the smallest taste event worth saving: save, wear, skip, screenshot, purchase, return, remix, or follow?
2. Does the graph need federation first, or should it begin as a local-first personal archive?
3. Which domain has the clearest initial loop: fashion, design references, music, creator discovery, or shopping agents?
4. How should negative taste be represented without overfitting identity to old dislikes?
5. Can taste memory produce shareable artifacts without turning private preference into surveillance?
6. What interoperability layer is enough: JSON export, ATProto lexicon, ActivityPub extension, Solid pod resource, or MCP tool?
7. Would users care about portability directly, or only about better outcomes in a beautiful app?

## Strange Implications

- A person's style could become an operating-system-level object rather than a closet app feature.
- Social feeds could be assembled from taste cards rather than follows.
- Creator tools could publish not only posts but taste traces: why this reference, palette, cut, sound, location, or edit was chosen.
- Shopping agents could be judged by how well they respect rejected taste, not only by matching positive examples.
- Brands could distribute taste modules: small graph fragments that users remix into their own local style memory.
- A fashion app and a music app might share more structure than a fashion app and an ecommerce cart: both are temporal preference engines.

## Possible Experiments

1. **Taste Card prototype:** collect 50 manual Taste Cards from one wardrobe/reference-board workflow. Include positive and negative events.
2. **Feed from taste, not follows:** generate a small static creator/design feed from Taste Cards and compare it against a follow-based feed.
3. **Style memory diff:** after two weeks, show what changed in taste: colors repeated, silhouettes rejected, materials saved but never worn.
4. **Portable lexicon sketch:** model Taste Card as plain JSON first, then test whether it maps cleanly into ATProto records or Solid resources.
5. **Agent shopping refusal test:** give an agent the positive-only graph versus positive+negative graph and compare bad recommendation rate qualitatively.

## Potential Outcomes

- **Immediate:** local-first wardrobe/reference-board tool with Taste Cards and style diffs.
- **Near term:** creator/taste feed that lets people share curated graph slices.
- **Medium term:** protocol-style taste memory usable by independent apps and agents.
- **Long term:** a personal aesthetic operating layer that follows users across social, shopping, creative tools, and AI assistants.

## Scoring

| Dimension | Score | Shape |
|---|---:|---|
| Originality | 7 | Federation + taste engines is underexplored compared with generic data portability. |
| Technical plausibility | 8 | JSON/local-first prototype is easy; true interoperability is harder. |
| Importance | 8 | Taste underlies fashion, design, media, commerce, and social feeds. |
| Depth | 8 | Connects protocols, identity, recommendation, agents, and aesthetics. |
| Unexpectedness | 7 | The protocol lens reframes fashion/style as infrastructure. |
| Prototype potential | 8 | Manual Taste Card prototype is cheap. |
| Long term potential | 9 | Could become a broad personal-software primitive. |
| Alignment with existing projects | 8 | Strong fit with wardrobe memory, creative tools, local agents, and brand worlds. |
| Defensibility | 6 | Defensible through data trust and interface taste; weak if reduced to export format. |
| Research richness | 8 | Many source branches: ATProto, ActivityPub, Solid, recommender systems, fashion. |
| Timing | 7 | Social federation and agent memory are live; consumer desire is unproven. |

## Confidence

Emerging direction.

## Status

Active.

## Sources

- AT Protocol overview — https://atproto.com/guides/overview
- AT Protocol repository spec — https://atproto.com/specs/repository
- Bluesky custom feeds developer docs — https://docs.bsky.app/docs/starter-templates/custom-feeds
- ActivityPub W3C Recommendation — https://www.w3.org/TR/activitypub/
- Solid Protocol — https://solidproject.org/TR/protocol
- Pinterest API v5 developer docs — https://developers.pinterest.com/docs/api/v5/
- Hacker News Algolia search-by-date for `atproto`, checked 2026-07-29 — https://hn.algolia.com/api/v1/search_by_date?query=atproto&tags=story&hitsPerPage=5
- Hacker News Algolia search-by-date for `MCP agent`, checked 2026-07-29 — https://hn.algolia.com/api/v1/search_by_date?query=MCP%20agent&tags=story&hitsPerPage=5

## Unexpected Connections

- `Wardrobes Need Simulation Memory`: Taste Cards are the missing lower-level memory object under wear traces.
- `Empty Apps Can Launch Already Populated`: synthetic social products could begin with portable taste fragments instead of fake users.
- `Personal Software Workshops`: a workshop can fit tools to a person faster if it reads a small taste graph.
- `Agents Need Borrowed Rooms`: agents should borrow bounded slices of taste memory, not full personal histories.

## Recommended Next Action

Prototype a local `taste-cards.jsonl` flow for one narrow domain: wardrobe/reference captures. Do not begin with federation. The first test is whether 50 structured preference events produce a visibly better style/feed/refinement experience than a normal saved folder.
