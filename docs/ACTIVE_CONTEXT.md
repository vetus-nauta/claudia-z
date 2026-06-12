# Active Context

Last updated: 2026-06-11
Latest pushed commit: current `main` HEAD after the last project push.

## Work Rule

Read this file first before project work. For local section tasks, do not reread all docs or run broad repository scans unless this file is insufficient.

Minimum read set for media intake:

- `docs/ACTIVE_CONTEXT.md`
- the target zone block in `src/app.js`
- target source/asset folders only

Use specialist roles conceptually:

- Lead: final decisions, conflict removal, commit/push.
- Photo/media: composition, focal point, mobile crop, reject/hold/use.
- Editorial Copy Chief: magazine-grade copy, bilingual wording, AI-slop cleanup, no photo-caption prose.
- UX/UI: minimal chrome, no duplicate labels, mobile behavior.
- CSS/frontend: stable layout and implementation.
- Context/docs: record serious logic changes only, remove contradictions.

Do not spam the chat with long tool outputs. Summarize decisions and verification.

## Hard Rules

- Do not touch `/home/alexey/GitHub/Revoyacht`.
- GitHub repo: `vetus-nauta/claudia-z`, branch `main`.
- This is a controlled no-index yacht presentation, not a sales/SEO site.
- No public indexing, sitemap, SEO growth logic, public prices, booking/rental CTA, inquiry/contact form, owner identity, or private client data.
- English is default/primary. Russian opens automatically for `ru`; all other languages fall back to English. No visible language switcher.
- One active language only; no inactive-language flash.
- Mobile galleries: no visible previous/next photo buttons. Use swipe plus minimal hint.
- Use optimized derivatives only in public UI; master originals stay in ignored `.media-source/`.
- Do not claim absolute photo protection.
- `Claudia Z` visible as the main headline only on Overview. Internal zones use integrated transparent Sunseeker mark, not repeated yacht name.
- Do not use white logo cards in dark panels.
- Do not use old WordPress wording/layout/SEO mechanics. Old WordPress media placeholders are temporary only.
- Final media requires composition review before connection.
- Reject accidental crops that cut bow, stern, hull line, flybridge, tender, platform edges, or key deck geometry.
- For vertical/mobile derivatives from horizontal photos, use ambient background fill / tone-matched extension, not black/white bars.

## Current UI State

- Static frontend in `index.html`, `src/app.js`, `src/styles.css`.
- Theme switcher exists.
- Stage uses `localMedia(folder, stage, full, mobile, focus)`.
- Overview is the one-screen Welcome Hall from the 2026-06-12 Drive handoff: Claudia Z logo plus short HTML-derived main text on the left, Sunseeker as a separate top-right builder mark, one contained full-yacht image on the right, and bottom zone navigation. It must not be a four-photo slideshow, top-right masthead, card, or text panel over photography.
- Internal zones do not keep permanent text over the media surface; their details remain in the top-right glass info popup so zone photos stay primary.
- Yacht information now opens from the compact top-right glass trigger into a semi-transparent glass popup pinned to the upper-right corner.
- The info trigger uses a restrained animated cue; keep motion soft, premium, and non-playful.
- Dark/light themes are now separate interface systems, not just different photo dimming. Dark uses dark glass and light type; light uses pale glass, dark type, lighter navigation/popovers, and theme-specific control tones.
- Overview identity uses cleaned transparent `Claudia Z` logo derivatives in both the welcome hall and the glass info popup. Use theme-appropriate transparent logo derivatives; do not return to a visible plain text hero title; keep text only for accessibility.
- Internal zone info popups use the transparent Sunseeker mark instead of repeating the yacht name on the media surface.
- Navigation must read as restrained premium product material, not constructor UI: avoid pill/chip section buttons, oversized CTA blocks, and school-like gallery controls. Prefer text tabs, hairlines, quiet state changes, and mobile swipe behavior.
- Top controls (`Yacht details` and theme) must follow the same visual system as the bottom zone navigation: straight glass bar, hairline borders, quiet active/hover states, no rounded pill capsules.
- Details sheet includes transparent Sunseeker mark and specs.
- Copy policy: use `.agents/skills/editorial-copy-chief` for review and rewrites. Prefer short human editorial copy over AI-style descriptive prose; do not narrate what is already visible in the photo.
- Text placement: Overview carries only the short Welcome Hall copy from the supplied HTML direction. Internal zones keep media clean and place their concise copy/detail in the top-right glass info popup.
- Standalone generic `main_deck` and `interior` routes were removed; use specific zones only.

## WordPress Source Text Mapping

Old WordPress XML text is source material for facts only, not wording or layout.

- Overview / Exterior: Sunseeker 76, 2019 context, deep-V hull, strong profile, broad glazing, deck volume, main-deck near-360-degree view.
- Flybridge: large upper deck, social seating, bar/service context, grill/fridges/ice maker/acoustic system, shade/awning context. Avoid hard guest-count claims unless re-confirmed.
- Cockpit: adaptable aft lounge, table/service, saloon transition, route toward stern water area.
- Aft Swim Platform: bathing platform / mini beach-club use, tender boarding, SeaBob/SUP/water-toy context.
- Tender: owner confirmed `Williams 420`; old WordPress mention of Williams 445 is superseded for public copy.
- Saloon: main-deck interior, seating/dining, galley context, broad glazing, connection to cockpit.
- Master cabin: lower-deck principal cabin, double berth, storage/wardrobe, work/lounge details, ensuite.
- Forward VIP: lower-deck forward guest cabin, central berth, storage, light, ensuite.
- Starboard guest: lower-deck guest cabin with double-berth arrangement, storage, ensuite.
- Port guest / children's cabin: lower-deck flexible three-berth/family layout with ensuite.
- Accessories from old text and owner confirmation: two SUP boards and SeaBob may be used in platform/tender copy.

## Owner-Confirmed Copy Inputs

- Public copy should use build year `2020`.
- Public display length should be `24 m`; original technical source still listed `23.60 m / 77'5"`.
- Tender model for presentation context: `Williams 420`.
- Water toys / platform context may include all declared items: SeaBob, two SUP boards, tender, and water-level leisure setup.
- Flybridge equipment: two refrigerators, one chilled storage box, ice maker, two sunpads, awning, sliding opening roof, and table seating for 10.
- Foredeck equipment/use: table and sofas for 6-8 people, two refrigerators, music.
- Cockpit equipment: refrigerator and ice maker.
- Port guest / children's cabin configuration: can be three single berths, or one double/French berth plus an upper pullman berth.
- Tone: family-oriented, quiet, unhurried, comfortable cruising; still capable of emotion and adrenaline when desired.

## Approved Real Media

Overview / Welcome Hall, `assets/media/overview/`:

- Active first-screen image: `DJI_0266_1` only.
- Former overview sequence `DJI_0266_1`, `DJI_0261_1`, `DJI_0269_1`, `DJI_0258_1` has been merged into `Exterior`; do not restore cycling general views on the main screen.

Former General Plans source notes:

- Order: `DJI_0266_1`, `DJI_0261_1`, `DJI_0269_1`, `DJI_0258_1`.
- Rejected main overview: `DJI_0257_1`.
- Not used main overview: `DJI_0252_1`.

Exterior, `assets/media/exterior/`:

- Order: `DJI_0262`, `DJI_0266`, `DJI_0247`, `DJI_0267`, `DJI_0261`, `DJI_0270`.
- `DJI_0247` intentionally retained as distant scenic candidate with gentle crop.

Flybridge, `assets/media/flybridge/`:

- Order: `130-P1999658`, `DJI_0276`, `129-P1477663`, `132-P1999663`, `126-P1477652`.
- User typo `1230-P1999658` resolves to actual `130-P1999658.jpg`.
- Hold/reference: `124-P1477648`, `137-P1999678`.
- Rejected main flybridge: `125-P1477650`, `DJI_0269`, `DJI_0270`.

Foredeck, `assets/media/foredeck/`:

- Order: `142-P1477659`, `146-P1999711`, `149-P1999723`, `156-P1999729`, `160-P1477679`.
- Hold/reference: `144-P1999698`.
- Rejected main foredeck: `147-P1477682`.
- `160-P1477679` is bow rail / anchorage detail closer, not main lounge explainer.

Cockpit, `assets/media/cockpit/`:

- Order: `121-P1999653`, `113-P1477599`, `115-P1477604`.
- `121-P1999653` is opener: full aft lounge, table, seating, saloon glass, flybridge stair.
- `113-P1477599`: aft seating and open-view reading.
- `115-P1477604`: table/service and saloon transition.

Saloon, `assets/media/saloon/`:

- Source folder: Google Drive `1lowYgW5ivaZHCncr6pQ7jCEpJQBB7EZA`.
- Approved order: `80-P1477573`, `89-P1999637`, `87-P1999629`, `85-P1999616`, `94-P1477558`, `98-P1999624`.
- Hold/reference: `81-P1477579`, `82-P1477580`, `88-P1999632`, `90-P1999642`, `95-P1477561`.
- Not Saloon main sequence: `56-P1999540` is cabin/bunk content; `99-P1999602`, `100-P1999606`, `101-P1999607` are helm / pilot station content.
- User corrected filename uses Latin `P`: `94-P1477558`.
- User-provided `94-P1477561` was not found in Drive; actual nearby Drive file is `95-P1477561`.

Master cabin, `assets/media/master_cabin/`:

- Source folder: Google Drive `1lowYgW5ivaZHCncr6pQ7jCEpJQBB7EZA`.
- Approved order: `2-P1999374`, `6-P1999381`, `12-P1477496`, `10-P1999413`, `15-P1999395`, `14-P1999393`, `18-P1477504`.
- First four frames explain the bed, lounge/window side, storage/vanity, and cabin proportions.
- Last three frames show the ensuite/bathroom as part of the master-cabin story.

Starboard guest cabin, `assets/media/starboard_guest/`:

- Source folder: Google Drive `1lowYgW5ivaZHCncr6pQ7jCEpJQBB7EZA`.
- Approved order: `19-P1999421`, `21-P1999436`, `22-P1999445`, `23-P1999446`, `27-P1999448`, `34-P1999463`.
- First three frames explain berth/window/storage perspectives.
- `23-P1999446` is vanity/storage detail; `27-P1999448` and `34-P1999463` are ensuite/bathroom frames.

Forward VIP cabin, `assets/media/forward_vip/`:

- Source folder: Google Drive `1lowYgW5ivaZHCncr6pQ7jCEpJQBB7EZA`.
- Approved order: `38-P1999471`, `45-P1999492`, `43-P1999484`, `44-P1999491`, `47-P1999506`, `49-P1999515`.
- First four frames explain berth symmetry, cabin volume, storage, and vanity.
- `47-P1999506` and `49-P1999515` are ensuite/bathroom frames.

Port guest / children's cabin, `assets/media/port_guest/`:

- Source folder: Google Drive `1lowYgW5ivaZHCncr6pQ7jCEpJQBB7EZA`.
- Approved order: `58-P1999575`, `54-P1999537`, `53-P1999532`, `60-P1999557`, `62-P1999562`.
- First three frames explain the port/children's cabin volume, bunk layout, berth surface, and window line.
- `60-P1999557` and `62-P1999562` are ensuite/bathroom frames.
- User-provided `60-P1999575` was not found in Drive; treated as a mistaken merge of existing `58-P1999575` and `60-P1999557`, not used as a separate asset.

## Temporary Placeholder Media

Aft Swim Platform, `assets/media/aft_swim_platform/`:

- Generated placeholder only: `generated-platform-placeholder`.
- Scene includes bathing platform, SeaBob, two SUP boards, two flexible lounger mattresses, and small fruit/champagne table.
- Replace with owner-approved real media when supplied.

Tender, `assets/media/tender/`:

- Internet placeholder only: `williams-sportjet-placeholder`.
- Source: Williams Tenders USA official photo library / SportJet image.
- Used because owner requested a Williams 420-style placeholder; do not treat as confirmed final tender model or final yacht media.
- Replace with owner-approved real tender media when supplied.

## Removed Standalone Placeholder Routes

- `main_deck` is a category concept, not a standalone gallery. Foredeck, Cockpit, and Saloon carry that story.
- `interior` overview is not needed. Interior is fully represented through Saloon, Master cabin, Forward VIP, Starboard guest, and Port guest / children's cabin.
- Do not re-add these as generic overview sections unless the owner explicitly approves a new route structure.

## Media Intake Protocol

1. Name the next section/subsection to fill.
2. Owner provides one Google Drive folder link and exact filenames.
3. Download only named files into `.media-source/<zone>/`.
4. Run photo/media composition gate: use / hold / reject, crop risks, order, role.
5. Create `stage`, `full`, `mobile` WebP derivatives.
6. Connect only approved derivatives to `src/app.js`.
7. Verify mobile, desktop, language behavior, lightbox.
8. Update `ACTIVE_CONTEXT.md` plus deeper docs only when logic changes.
9. Commit and push.

## Next Likely Sections

- Real Aft Swim Platform media to replace generated placeholder.
- Real Tender media to replace internet placeholder.

Note: all interior zones are now represented by specific sections; do not create a generic interior overview.
