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

- Active first-screen image: `DJI_0279` only.
- Welcome Hall must use `DJI_0279` as a full-screen photographic frame with compact left typography and separate top-right Sunseeker mark. The yacht object is intentionally sized for screen readability on desktop and mobile; do not rebuild it as a tiny original-scale drone image, a contained cutout yacht, or an artificial gradient background.
- Previous first-screen image `DJI_0266_1` is retained in the Exterior gallery sequence, not as the active Welcome Hall.
- Former overview sequence `DJI_0266_1`, `DJI_0261_1`, `DJI_0269_1`, `DJI_0258_1` has been merged into `Exterior`; do not restore cycling general views on the main screen.

Former General Plans source notes:

- Order: `DJI_0266_1`, `DJI_0261_1`, `DJI_0269_1`, `DJI_0258_1`.
- Rejected main overview: `DJI_0257_1`.
- Not used main overview: `DJI_0252_1`.

Exterior, `assets/media/exterior/`:

- Order: `DJI_0262`, `DJI_0266`, `DJI_0247`, `DJI_0267`, `DJI_0261`, `DJI_0270`.
- `DJI_0247` intentionally retained as distant scenic candidate with gentle crop.
- Russian zone detail text is inserted verbatim from Google Drive `Claudia-z` / `Описания` / `sunseeker_76_exterior_description.txt`.

Flybridge, `assets/media/flybridge/`:

- Main section gallery uses vertical iPhone media from parent Drive folder `1Jl7Nol8hIqZHgd8lLZUlHpGC926ygNI1`, subfolder `Flybridge` / `1MNeG7yyMHfcLiBDMTXDHyKGE_k3XOLH4`.
- Additional media from nested Drive folder `Flybridge` / `More` / `1OTL07esdzr3y4JzmExnua2O91Moo4b9W` is added to the same zone.
- Main order starts with the GPT-edited people frame `9BA2E70D-E6E2-4053-85A2-DA0D6807C86F.png`, then keeps the previous approved vertical order `IMG_3318`, `IMG_3319`, `IMG_3320`, `IMG_3321`, `IMG_3413`, `IMG_3425`, `IMG_3426`, `IMG_3427`, `IMG_3428`, `IMG_3429`, `IMG_3430`, then appends `IMG_3477`, `IMG_3480`, `IMG_3481`, `IMG_3482`, `IMG_3484`, `IMG_3485`, `IMG_3492`, `IMG_3494`, `IMG_3498`, `IMG_3499`, `IMG_3500`.
- Previous horizontal order is preserved in `horizontalMedia` for the separate horizontal gallery: `130-P1999658`, `DJI_0276`, `129-P1477663`, `132-P1999663`, `126-P1477652`; new `More` horizontal frames are appended in filename order: `IMG_3486`, `IMG_3487`, `IMG_3488`, `IMG_3489`, `IMG_3490`, `IMG_3491`, `IMG_3495`, `IMG_3496`, `IMG_3497`, `IMG_3501`, `IMG_3502`, `IMG_3503`.
- Russian zone detail text is inserted verbatim from Google Drive `Claudia-z` / `Описания` / `sunseeker_76_flybridge_description.txt`.

Foredeck, `assets/media/foredeck/`:

- Main section gallery uses vertical iPhone media from parent Drive folder `1Jl7Nol8hIqZHgd8lLZUlHpGC926ygNI1`, subfolder `Foredeck` / `1am7lX14F0SSm8_ir5vobngU4CCsp368N`.
- Main order starts with the strongest foredeck frames, then access/context frames: `IMG_3416`, `IMG_3417`, `IMG_3418`, `IMG_3419`, `IMG_3420`, `IMG_3421`, `IMG_3422`, `IMG_3423`, `IMG_3424`, `IMG_3414`, `IMG_3413`.
- Previous horizontal order is preserved in `horizontalMedia` for the separate horizontal gallery: `142-P1477659`, `146-P1999711`, `149-P1999723`, `156-P1999729`, `160-P1477679`.

Cockpit, `assets/media/cockpit/`:

- Main section gallery uses vertical iPhone media from Drive folder `1kXizi05ES6YikGJVQW1KYh798BoSN4nv`.
- Main order: `IMG_3447`, `IMG_3448`, `IMG_3449`, `IMG_3450`, `IMG_3451`, `IMG_3452`, `IMG_3453`, `IMG_3454`, `IMG_3456`, `IMG_3457`, `IMG_3458`.
- Horizontal cockpit gallery uses horizontal media from the same Drive folder: `IMG_3470`, `IMG_3471`, `IMG_3472`, `IMG_3473`.
- Previous GH5 cockpit derivatives (`121-P1999653`, `113-P1477599`, `115-P1477604`) are superseded in public navigation by the new cockpit media.

Saloon, `assets/media/saloon/`:

- Main section gallery uses vertical iPhone media from parent Drive folder `1Jl7Nol8hIqZHgd8lLZUlHpGC926ygNI1`, subfolder `Saloon` / `1EKA3m-nzh0ZtgPcdze-zjd2uupsoHiUh`.
- Main order starts with the broadest saloon read, then seating/dining/helm context: `IMG_3404`, `IMG_3411`, `IMG_3410`, `IMG_3409`, `IMG_3408`, `IMG_3406`, `IMG_3400`, `IMG_3401`, `IMG_3402`, `IMG_3403`, `IMG_3405`.
- Previous horizontal order is preserved in `horizontalMedia` for the separate horizontal gallery: `80-P1477573`, `89-P1999637`, `87-P1999629`, `85-P1999616`, `94-P1477558`, `98-P1999624`.

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

## Section Gallery Media

Mobile gesture guidance:

- Main stage media accepts vertical swipe as an alternate photo navigation gesture on touch devices; swipe up moves forward, swipe down moves back.
- The main stage shows a textless vertical air/glass arrow-trail hint once on touch devices, then stores the seen state in `localStorage`.
- If a touch user later swipes the main stage sideways, a short vertical nudge may be shown once per session; horizontal swipe still works.
- Fullscreen horizontal gallery behavior remains horizontal; it only gains a textless horizontal air/glass arrow-trail hint.
- The Welcome Hall / `overview` hero frame must not appear as an item or flash frame when entering zone galleries; the old hero image is suppressed during the first handoff from `overview`.
- Hints must use `pointer-events: none`, avoid text/tooltips/buttons, and honor `prefers-reduced-motion`.

Aft Swim Platform, `assets/media/aft_swim_platform/`:

- Section gallery uses owner-provided vertical iPhone media from Drive.
- Generated platform placeholder media was removed after the real platform gallery was connected.
- The first/opening frame remains `01-platform-iphone-primary`.
- Additional media from nested Drive folder `Swimming platform` / `More` / `19ANdFWQgVGdmNHVaabozp6UX_1zrs66t` is appended to the same zone.
- New vertical frames appended after the prior approved order: `12A52A1A`, `28F215BB`, `48D5CD2C`, `99A0CF94`, `82D20F3D`.
- New horizontal platform frames are connected through `horizontalMedia`: `EA4BEFFD`, `81B6C017`, `9EF043F8`.

Tender, `assets/media/tender/`:

- Section gallery uses owner-provided vertical iPhone media from Drive folder `1aI7ahmOw-m8g631kMmTi43O-Uu2UdiXI`.
- First/opening frame is pinned by Drive file `1B0_8J9qHKzXjj9zP_A1mLc4Yy74-ed1Y`, downloaded as `.media-source/tender/IMG_3434.PNG` and published as `01-tender-primary`.
- Remaining tender frames follow source filename order: `IMG_3370`, `IMG_3393`, `IMG_3394`, `IMG_3395`, `IMG_3396`, `IMG_3397`, `IMG_3399`, `IMG_3433`.
- The former temporary Williams reference image and its source were removed after real tender media was connected.
- Tender stays excluded from the horizontal gallery while its approved media is vertical-only.

## Removed Standalone Placeholder Routes

- `main_deck` is a category concept, not a standalone gallery. Foredeck, Cockpit, and Saloon carry that story.
- `interior` overview is not needed. Interior is fully represented through Saloon, Master cabin, Forward VIP, Starboard guest, and Port guest / children's cabin.
- Do not re-add these as generic overview sections unless the owner explicitly approves a new route structure.

## Media Intake Protocol

1. Name the next section/subsection to fill.
2. Owner provides one Google Drive folder link. If they also provide a single file link, treat it as the required first/opening frame and do not duplicate it if it also exists in the folder.
3. Download only the target section media into `.media-source/<zone>/`.
4. Run photo/media composition gate: use / hold / reject, crop risks, order, role.
5. For vertical iPhone/photo sets, use the reusable section-gallery template: `thumb`, `stage`, `mobile`, and `full` WebP derivatives, source originals outside public build, no direct source opening.
6. Connect only approved derivatives to `src/app.js`.
7. Remove superseded placeholders and stale public references for that zone.
8. Verify mobile, desktop, localization, section gallery, horizontal gallery, and full-screen behavior.
9. Update `ACTIVE_CONTEXT.md` plus deeper docs when rules or behavior change.
10. Commit and push.

## Next Likely Sections

- Continue converting future owner-supplied vertical photo zones to the section-gallery template.
- Review final mobile crops after each new zone is connected.

Note: all interior zones are now represented by specific sections; do not create a generic interior overview.
