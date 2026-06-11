# Media Pipeline

## Goal

Turn existing yacht photos and videos into a premium, fast, mobile-first media system.

Media will be requested and received in owner-provided Google Drive folders/links.

Do not assume assets exist until the owner provides folders or links.

## Current Media Sources

- Hero logo source: Google Drive folder `136czYRe4bUtwnfzaJt9WsGQZD8Wkqg54`.
  - Contains two PNG logo/image candidates and two TXT source/prompt companion files.
  - Treat as a brand/hero-logo asset source, not as yacht photography.
  - Before implementation, inspect the PNGs for transparency, resolution, contrast on dark media, mobile legibility, and whether generated marks are suitable for use.

## Classification

Classify media by:

- general plans / overview
- exterior profile
- exterior details
- interior overview
- interior saloon
- master cabin
- forward VIP cabin
- starboard guest cabin
- port guest / children's cabin
- aft swim platform / bathing platform
- tender
- cockpit
- flybridge
- bow area
- foredeck
- main deck
- galley
- helm
- bathrooms
- detail shots
- lifestyle
- sea/coastline
- video overview
- hero video
- vertical mobile clips
- horizontal cinematic clips

## Initial Requested Folder Logic

When requesting media from the owner, prefer clear folders:

- `01_general_plans`
- `02_exterior`
- `03_interior`
- `03a_interior_saloon`
- `03b_master_cabin`
- `03c_forward_vip_cabin`
- `03d_starboard_guest_cabin`
- `03e_port_guest_childrens_cabin`
- `04_flybridge`
- `05_main_deck`
- `06_foredeck`
- `07_cockpit`
- `08_aft_swim_platform`
- `09_tender`
- `10_video`
- `11_details`

Folder names may vary, but agents must map them back to stable yacht zones.

## Zone Display Names

Use these names for the aft bathing area:

- Internal zone key: `aft_swim_platform`
- English display: `Aft Swim Platform`
- Russian display: `Кормовая купальная платформа`
- Acceptable descriptive text: `bathing platform` when describing the function of the zone.

Use these names for the tender:

- Internal zone key: `tender`
- English display: `Tender`
- Russian display: `Тендер`
- Treat tender as its own media section even when tender photos are physically connected to the aft swim platform.

## Metadata Per Asset

For every selected asset, define:

- source filename
- source folder/link
- presentation/private use
- yacht zone
- orientation
- resolution
- intended screen
- mobile crop
- tablet crop
- desktop crop
- alt text
- loading priority
- compression target
- poster image for video

## Performance Rules

- Use optimized images.
- Avoid heavy autoplay on mobile.
- Always provide video poster image.
- Never autoplay sound.
- Prepare mobile and tablet crops.
- Define focal point, mobile crop, tablet crop, and desktop crop before approving any hero or zone image.
- Reject accidental crops that cut the bow, stern, hull line, flybridge, tender, or key deck geometry.
- Allow tight crops only when the asset is explicitly classified as a detail shot.
- Judge each image by content and design role: hero, zone opener, detail, atmosphere, technical proof, or future 3D reference.
- Do not use a photo as hero merely because it is available; it must survive mobile framing and preserve the yacht's shape.
- Use lazy loading except critical hero media.
- Keep first screen fast.

## Output Expected From Agents

When working with media, produce:

1. Asset classification table
2. Recommended use
3. Missing media list
4. Crop requirements
5. Performance risks
6. Implementation notes
