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
- Sunseeker builder mark source: old WordPress media export.
  - Public UI must use cleaned display derivatives only.
  - Keep the mark secondary and visually quiet so it does not compete with the yacht identity or hero media.
  - Do not expose old source filenames or unused extracted logo candidates in public markup.
- Zone galleries use approved owner-provided media where available.
  - Replace remaining temporary or old-media sections as owner folders arrive.
  - Each final zone should provide enough approved frames for previous/next and swipe navigation without repeating weak or near-duplicate images.

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

## Owner Media Intake Workflow

Media intake is section-by-section, not all-at-once.

1. The agent names the next section or subsection to fill.
2. The owner provides one Google Drive folder link. If they also provide one file link, treat that file as the required first/opening frame.
3. The agent downloads only that section's media into `.media-source/<zone>/`. If the first file also appears in the folder, keep it once and order it first.
4. A photo/art-direction pass reviews the named files before any final crop assignment.
5. The agent converts approved files into public web derivatives and keeps master originals out of the public build.
6. The agent connects the derivatives to the matching zone and verifies mobile, tablet, desktop, localization, section gallery, horizontal gallery, and full-size viewing.
7. The agent removes replaced placeholders, stale public media, and obsolete public references for that zone.

Technical conversion is not media approval. Do not connect a photo as final merely because it downloaded and converted successfully.

## Photo Art-Direction Gate

Before assigning focal points, crop positions, or gallery order, run a composition review for the current section.

The review must decide:

- use / secondary / reject
- whether the yacht reads professionally in the frame
- whether top-down/drone geometry feels premium or too technical
- mobile crop risk
- desktop crop risk
- focal point recommendation
- gallery order recommendation
- whether a full-size opening improves or weakens the impression

If a кадр сверху / top-down shot makes the yacht feel flat, technical, or poorly positioned for a premium presentation, reject it for the main overview even if the file quality is high. Such кадры may be kept only as secondary detail/reference media when they add real information.

## Mobile Gallery Behavior

Mobile photo galleries must behave like a native iPhone-style viewer:

- no visible previous/next photo buttons
- horizontal swipe changes photos
- show only a minimal swipe hint when needed
- tap the free photo area to open the optimized full-size derivative
- keep desktop controls separate from mobile behavior

Do not add school-like arrow button UI to mobile galleries.

## Vertical Background Fill

When a horizontal yacht photo is adapted to a vertical/mobile frame, preserve the yacht shape and fill the remaining vertical space with a color-and-tone-matched extension of the same photo.

Use this technique to create a feeling of a full vertical image without cropping important yacht geometry. This may be called:

- ambient background fill
- background extension
- color/tone-matched fill
- blurred extended backdrop

Rules:

- The main yacht layer must remain sharp and uncut.
- The filled background must match the photo's sea/sky/color tone.
- Avoid hard horizontal edges that make the image feel pasted into a vertical canvas.
- Avoid unrelated solid color bars, black bars, white bars, or generic gradients.
- Use blur/soft feathering only to support the image, not as a decorative effect.

## Exterior Media Pass 2026-06-11

- Source folder: Google Drive `11xkeqgy1vXEHUCM8XtnUhwW-BSjc0teC`.
- Intake scope: `DJI_0240`-`DJI_0252` except missing `0242`, `0249`; `DJI_0258`-`DJI_0270` except missing `0260`, `0263`, `0265`.
- Approved Exterior order: `DJI_0262`, `DJI_0266`, `DJI_0247`, `DJI_0267`, `DJI_0261`, `DJI_0270`.
- `DJI_0247` is approved as the distant scenic frame; use careful gentle zoom/crop without losing the yacht or mountain scale.
- Public derivatives live in `assets/media/exterior/`; source originals remain only in ignored `.media-source/exterior/`.

## Flybridge Media Pass 2026-06-11

- Source folders: Google Drive `11xkeqgy1vXEHUCM8XtnUhwW-BSjc0teC` for DJI files and `1lowYgW5ivaZHCncr6pQ7jCEpJQBB7EZA` for GH5 Edited files.
- Corrected source filename: user-provided `1230-P1999658` resolves to actual Drive file `130-P1999658.jpg`.
- Approved Flybridge order: `130-P1999658`, `DJI_0276`, `129-P1477663`, `132-P1999663`, `126-P1477652`.
- Rejected from the main Flybridge sequence: `125-P1477650`, `DJI_0269`, `DJI_0270`.
- Public derivatives live in `assets/media/flybridge/`; source originals remain only in ignored `.media-source/flybridge/`.

## Foredeck Media Pass 2026-06-11

- Source folder: Google Drive `1lowYgW5ivaZHCncr6pQ7jCEpJQBB7EZA`.
- Intake scope: `142-P1477659`, `144-P1999698`, `146-P1999711`, `147-P1477682`, `149-P1999723`, `156-P1999729`, `160-P1477679`.
- Approved Foredeck order: `142-P1477659`, `146-P1999711`, `149-P1999723`, `156-P1999729`, `160-P1477679`.
- Hold/reference: `144-P1999698`.
- Rejected from the main Foredeck sequence: `147-P1477682`.
- `160-P1477679` is a bow rail / anchorage detail closer, not the main forward-lounge explainer.
- Public derivatives live in `assets/media/foredeck/`; source originals remain only in ignored `.media-source/foredeck/`.

## Cockpit Media Pass 2026-06-15

- Source folder: Google Drive `1kXizi05ES6YikGJVQW1KYh798BoSN4nv`.
- Main vertical section gallery order: `IMG_3447`, `IMG_3448`, `IMG_3449`, `IMG_3450`, `IMG_3451`, `IMG_3452`, `IMG_3453`, `IMG_3454`, `IMG_3456`, `IMG_3457`, `IMG_3458`.
- Horizontal cockpit gallery order: `IMG_3470`, `IMG_3471`, `IMG_3472`, `IMG_3473`.
- Use the vertical cockpit frames as the main zone sequence.
- Keep the horizontal cockpit frames in `horizontalMedia` for the separate horizontal gallery.
- Previous GH5 cockpit frames `121-P1999653`, `113-P1477599`, and `115-P1477604` are superseded for public cockpit navigation.
- Public derivatives live in `assets/media/cockpit/`; source originals remain only in ignored `.media-source/cockpit/`.

## Motion And Feedback

Use restrained motion to make browsing feel comfortable:

- gentle media fade/brightness response during image changes
- soft active-state glow for selected controls
- subtle hint pulse for mobile swipe guidance
- calm full-viewer opening
- always respect `prefers-reduced-motion`

Avoid loud animation, decorative orbs, gimmicks, bouncing controls, and anything that distracts from the yacht.

For every selected photo, create web formats for:

- stage/zone display
- full-size viewer opening
- mobile-safe crop when needed
- fallback format if the primary optimized format is not supported

Full-size viewing must look good, but it must still use optimized display derivatives rather than raw originals unless explicitly approved.

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

## Section Gallery Template

Use this template for owner-supplied vertical iPhone/photo sets such as `flybridge`, `foredeck`, `cockpit`, `aft_swim_platform`, `tender`, and `saloon`.

- Public derivatives per source frame: `thumb`, `stage`, `mobile`, and `full` WebP.
- Source originals stay in `.media-source/<zone>/` and are not uploaded.
- The stage opens the controlled gallery overlay, never the original image file.
- Two-finger pinch zoom and left/right swipe must work in the full-screen gallery.
- The browser/page pull-refresh gesture should not fight the gallery or main stage swipe.
- A horizontal gallery button may be shown from vertical-gallery zones; it opens approved horizontal site media.
- If a zone changes from horizontal media to a vertical section gallery, keep the previous approved horizontal frames in `horizontalMedia` only when they should remain available in the separate horizontal gallery.
- Zones without `horizontalMedia` and with vertical-only media stay out of the horizontal gallery.
- When real media replaces a placeholder, delete the placeholder derivatives and update this document plus `ACTIVE_CONTEXT.md`.

## Vertical Section Pass 2026-06-14

- Parent source folder: Google Drive `1Jl7Nol8hIqZHgd8lLZUlHpGC926ygNI1`.
- Updated zones: `Flybridge`, `Foredeck`, `Saloon`.
- All three updated zones use vertical iPhone media as their main section gallery.
- Previous approved horizontal frames for these zones are retained in `horizontalMedia` for the separate horizontal gallery, not as the main zone sequence.

## Flybridge More Pass 2026-06-15

- Nested source folder: Google Drive `Flybridge` / `More` / `1OTL07esdzr3y4JzmExnua2O91Moo4b9W`.
- Added public derivatives to `assets/media/flybridge/`.
- The GPT-edited people frame `9BA2E70D-E6E2-4053-85A2-DA0D6807C86F.png` is the first main flybridge frame.
- Additional vertical frames are appended after the prior approved flybridge vertical order.
- Additional horizontal frames are appended after the prior approved flybridge `horizontalMedia` order.

## Aft Swim Platform More Pass 2026-06-15

- Nested source folder: Google Drive `Swimming platform` / `More` / `19ANdFWQgVGdmNHVaabozp6UX_1zrs66t`.
- Added public derivatives to `assets/media/aft_swim_platform/`.
- The current first platform frame `01-platform-iphone-primary` remains first.
- Additional vertical frames are appended after the prior approved platform order.
- Additional horizontal frames are connected through the platform `horizontalMedia` order.

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
- Preload adjacent images only where it helps perceived speed and does not create mobile weight problems.
- Use stable media containers with fixed approved aspect ratios; photos must never resize the layout according to their original proportions.
- Create display derivatives for each approved use case instead of relying on browser-only cropping of master images.
- Define the required crop format before production: hero, zone opener, gallery frame, detail frame, mobile portrait, tablet, and desktop.
- Keep gallery and zone frames visually consistent so the interface does not jump between unrelated image shapes.
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

## Photo Protection Rules

- Public presentation media must use optimized display derivatives, not master originals.
- Master originals must remain outside the public build unless explicitly approved.
- Classify each asset protection level: public presentation derivative, private review, master original, or reject.
- Avoid exposing Drive source links, original filenames, or master storage paths in public markup where practical.
- Add interaction deterrents for public derivatives where practical: no drag, no context-menu save, controlled viewer overlay, and long-press review on mobile.
- Consider subtle watermarking or per-recipient derivative sets only after approval.
- Do not describe these controls as absolute download prevention.

## Output Expected From Agents

When working with media, produce:

1. Asset classification table
2. Recommended use
3. Missing media list
4. Crop requirements
5. Performance risks
6. Protection level and derivative plan
7. Implementation notes
