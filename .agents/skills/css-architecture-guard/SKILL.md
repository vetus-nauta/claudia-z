---
name: css-architecture-guard
description: Use for CSS architecture, visual system consistency, layout fixes, responsive behavior, gallery presentation patterns, and cleanup when styles start layering without a stable result.
---

# CSS Architecture Guard

## Purpose

Keep the public site visually coherent and prevent CSS from becoming a stack of one-off overrides.

## Ownership

Use this skill with:

- `premium-yacht-ux` for visual intent
- `mobile-first-audit` for iPhone/iPad checks
- `safe-patch` for any file changes

## Base CSS Standard

Before building UI, define or preserve one shared CSS base:

- design tokens: colors, typography, spacing, radii, shadows, motion timing
- layout primitives: shell, section, stack, cluster, media frame, overlay, drawer/modal
- component primitives: button, icon button, inquiry entry, gallery trigger, media viewer, caption
- responsive breakpoints: mobile first, then tablet, then desktop
- media rules: object-fit, aspect ratios, poster/fallback behavior, lazy loading

Do not let each section create its own unrelated layout language.

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
- progressive reveal

Avoid starting with a generic landing page structure.

## Gallery And Media Patterns

Prefer modern, compact media presentation over long stacked galleries:

- full-screen viewer
- swipe gallery
- horizontal media rail
- story-like sequence
- zone-based gallery
- before/after or deck-zone navigation when relevant
- video poster with tap-to-play
- modal/drawer details instead of long repeated sections

Media must not make mobile heavy or slow.

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
7. Verification plan
