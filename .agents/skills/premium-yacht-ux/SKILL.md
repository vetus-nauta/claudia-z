---
name: premium-yacht-ux
description: Use for visual, UX, layout, copy, animation, and interaction work on the premium private yacht presentation website.
---

# Premium Yacht UX

## Product Feeling

The interface must feel like a private digital salon, not a public charter marketplace.

## Priorities

1. Mobile-first premium presentation.
2. Tablet-ready visual rhythm.
3. Few strong screens instead of many noisy blocks.
4. High trust, low pressure.
5. No public price, no aggressive booking language.
6. Calm inquiry flow.
7. Cinematic media without performance damage.
8. One shared visual system across all sections.
9. First mobile viewport as a complete experience, not a generic landing-page opener.
10. Future 3D guide compatibility through zone-based media and navigation.
11. Maximum meaningful information with minimum non-meaningful interface fields.

## Avoid

- Book now
- Best price
- Limited offer
- Charter-template language
- Overloaded cards
- Fake urgency
- Cheap animations
- Too many CTAs
- Unrelated section-by-section design systems
- Long stacked galleries when swipe, rail, drawer, or full-screen media would be better
- Media structures that cannot later become deck zones, hotspots, or a walkthrough guide
- Header/footer-first layouts that consume mobile space without adding value
- Oversized headings or cards used as filler instead of useful content

## CSS Coordination

For CSS, layout, gallery, and responsive implementation, use `css-architecture-guard`.

Do not solve visual inconsistency by adding more local overrides. If the design starts looking like unrelated blocks, return to the shared base: tokens, typography, spacing, buttons, media frames, overlays, and gallery patterns.

## 3D Guide Coordination

For gallery, zone, deck, walkthrough, hotspot, or spatial navigation decisions, use `three-d-guide-preparation`.

Do not build full 3D unless requested, but keep the controlled experience ready for it. A good first release can use photo/video zones that later become 3D hotspots.

## Preferred Language

- Private presentation
- Availability by request
- Guest experience
- Private inquiry
- Selected dates
- Introduction
- Broker/client conversation

## Output

When reviewing or designing, provide:

1. UX intent
2. Screen structure
3. Mobile layout
4. Tablet layout
5. Animation notes
6. Media usage notes
7. Copy tone
8. CSS/system consistency notes
9. Future 3D compatibility notes
10. Information density notes
11. Risks
