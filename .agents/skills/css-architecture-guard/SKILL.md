---
name: css-architecture-guard
description: Use for CSS architecture, visual system consistency, layout fixes, responsive behavior, gallery presentation patterns, and cleanup when styles start layering without a stable result.
---

# CSS Architecture Guard

## Purpose

Keep the controlled presentation visually coherent and prevent CSS from becoming a stack of one-off overrides.

## Ownership

Use this skill with:

- `premium-yacht-ux` for visual intent
- `mobile-first-audit` for iPhone/iPad checks
- `three-d-guide-preparation` for zone maps, hotspots, deck navigation, and future 3D placeholders
- `safe-patch` for any file changes

## Base CSS Standard

Before building UI, define or preserve one shared CSS base:

- design tokens: colors, typography, spacing, radii, shadows, motion timing
- layout primitives: shell, section, stack, cluster, media frame, overlay, drawer/modal
- component primitives: button, icon button, inquiry entry, gallery trigger, media viewer, caption
- responsive breakpoints: mobile first, then tablet, then desktop
- media rules: object-fit, aspect ratios, poster/fallback behavior, lazy loading
- 3D-ready primitives: zone marker, hotspot trigger, deck switcher, walkthrough entry, fallback media panel

Do not let each section create its own unrelated layout language.

## Information Density Standard

Maximize meaningful information. Minimize non-meaningful interface fields.

Header, footer, large labels, decorative blocks, and oversized cards are not default structure. Use them only when they perform a clear job.

Prefer:

- compact controls
- overlay controls
- bottom sheet or drawer
- media-first layout
- dense but readable details
- progressive disclosure for secondary information

Avoid spending first-screen mobile space on navigation chrome, empty branding bands, legal-looking footers, or repeated headings.

## Mobile First Experience

The first mobile viewport must feel complete and intentional.

Aim for one strong first-screen experience instead of a long landing-page opening.

The first screen may use:

- full-screen media
- restrained overlay text
- compact identity/navigation
- private inquiry entry
- swipe/tap gestures
- bottom sheet or drawer
- media rail or carousel
- zone/deck switcher
- 3D guide placeholder entry
- progressive reveal

Avoid starting with a generic landing page structure.

## Gallery And Media Patterns

Prefer modern, compact media presentation over long stacked galleries:

- full-screen viewer
- swipe gallery
- horizontal media rail
- story-like sequence
- zone-based gallery
- deck/zone map
- hotspot-driven details
- 3D guide placeholder with video/photo fallback
- before/after or deck-zone navigation when relevant
- video poster with tap-to-play
- modal/drawer details instead of long repeated sections

Media must not make mobile heavy or slow.

## Future 3D Compatibility

Every gallery, media, and navigation decision must preserve a path to a future 3D yacht guide.

Do:

- organize media by yacht zone, not only by visual mood
- keep zone IDs stable enough to reuse for hotspots and walkthrough state
- allow a future 3D entry point without redesigning the full controlled interface
- provide photo/video fallback for zones where 3D is unavailable
- keep mobile performance ahead of 3D ambition

Do not:

- hardcode gallery structure that cannot map to yacht zones
- bury spatial navigation under unrelated marketing sections
- require 3D to access core presentation content
- load heavy 3D assets on first mobile view unless explicitly approved

## No Layering Rule

Do not keep stacking overrides when CSS fixes loop.

If one direct patch does not produce a stable result:

1. Stop adding selectors.
2. Diagnose the cascade and layout model.
3. Identify duplicate, dead, or conflicting rules.
4. Isolate the smallest affected component or section.
5. Clean or rebuild that CSS area according to the base standard.
6. Verify mobile, tablet, and desktop behavior.

Avoid:

- casual `!important`
- deep selector chains
- inline style fixes
- duplicated breakpoints
- section-specific typography systems
- unrelated spacing scales
- desktop-first patches for mobile problems

## Output

1. CSS diagnosis
2. Affected selectors/files
3. Whether this is a patch, cleanup, or rebuild
4. Base standard to preserve or create
5. Mobile first-screen impact
6. Gallery/media impact
7. Future 3D compatibility
8. Verification plan
