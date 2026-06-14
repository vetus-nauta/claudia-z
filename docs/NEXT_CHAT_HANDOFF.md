# Next Chat Handoff

## Current Phase

Working static prototype in `claudia-z`, with approved media batches, bilingual copy, hero branding, dark/light theme support, adaptive navigation, and project memory docs in place.

Latest pushed implementation commits:

- `18d9491 Update next chat handoff`
- `ada1ea3 Refine welcome top controls`
- `6f77b24 Fix welcome navigation breakpoint`
- `cfd45a6 Match controls and welcome text contrast`
- `2534950 Apply reference zone navigation style`
- `942ab75 Use provided mobile welcome crop`
- `016f82d Correct welcome yacht framing`
- `9827ebd Use DJI 0279 for welcome hall`
- `3e74e0f Refine welcome hall composition`

## First Read

Read `docs/ACTIVE_CONTEXT.md` first. Use it as the compact source of truth for current rules, approved media, placeholders, and next-step protocol. Do not reread all docs or run broad scans for local section work unless `ACTIVE_CONTEXT.md` is insufficient.

Minimum code read for most continuation work:

- `docs/ACTIVE_CONTEXT.md`
- target zone block in `src/app.js`
- relevant target folder under `assets/media/`
- `src/styles.css` only when changing layout/visual behavior

Do not touch `/home/alexey/GitHub/Revoyacht`.

## Active Direction

- This is a controlled no-index yacht presentation tool, not a public sales or SEO website.
- Primary audiences: selected brokers, trusted partners, and direct private clients.
- Domain `claudia-z.com` is active.
- GitHub is the source of truth.
- Namecheap `public_html` is only a publication target.
- First UX standard: Interface-Light Media-First with maximum meaningful information and minimum non-meaningful fields.
- Dark and light theme support is required through one shared visual system and a compact switcher.
- The Overview route is now the one-screen Welcome Hall from the 2026-06-12 Drive handoff: no header/footer, no CTA clutter, full-screen photographic `DJI_0279` welcome frame, Claudia Z logo and short HTML-derived main text compact on the left, Sunseeker as a separate top-right builder mark, and yacht-zone navigation along the bottom. Do not turn it back into a photo slideshow, top-right masthead, artificial gradient scene, contained cutout yacht, tiny original-scale drone object, or large card/panel.
- Current local check URL used in review: `http://127.0.0.1:4173/?v=ada1ea3`. Server was running from the repo on port `4173`; if it is gone, restart a simple static server from `/home/alexey/GitHub/claudia-z`.
- The user caught a real breakpoint bug at about `1009x927`: `max-width:1119px` had kept the old opened grid/popover zone menu over the photo. Commit `6f77b24` fixes Welcome Hall so that this breakpoint uses the same horizontal glass zone rail as desktop/mobile. Do not restore the old two-column popover on the Welcome Hall.
- Welcome top controls were redesigned in `ada1ea3`: `Детали яхты` is now a rounded rectangle, the theme control is a readable switch with `ТЕМА`, and both functions align horizontally with the Sunseeker logo. They should not be reverted to circular/oval pills or to a lone icon-only theme button.
- In mobile view, top controls must remain compact and readable. Regression screenshots from the latest pass:
  - `/tmp/claudia-toprow2-360.png`
  - `/tmp/claudia-toprow2-390.png`
  - `/tmp/claudia-toprow2-1009.png`
- Internal zones must not repeat `Claudia Z` as the visible stage title. Their concise copy and details live in the top-right glass info popup, keeping zone media clean.
- Use `.agents/skills/editorial-copy-chief` for all copy review and rewrites. The role exists to remove AI cadence, brochure filler, and photo-caption prose. Prefer shorter human wording over long descriptive text.
- Dark/light themes now behave as distinct interface systems: dark glass/light type vs pale glass/dark type, with theme-specific controls and navigation tones.
- Narrow and intermediate Welcome Hall viewports use a compact horizontal bottom zone rail per the Drive/HTML handoff. Non-welcome gallery zones may still use the compact menu behavior if needed, but the first screen must show zone navigation without opening an extra panel.
- Top controls (`Yacht details` and theme) intentionally match the lower navigation field: glass, hairline border, rounded-rectangle shape, restrained text/icon states. Avoid oversized ovals/capsules and avoid icon-only theme controls.
- Reference HTML from Drive file `1NgN3gkZlDmkWwzJQmr8HLn_ZJawMQnsm` was downloaded as `.media-source/reference/front-style-reference`; it contains the style direction for zone buttons: glass cards/tiles, uppercase labels, icons, gold active state, and horizontal scrolling. This is a reference, not a replacement app.
- Future 3D guide compatibility is mandatory for media, gallery, CSS, and navigation decisions.
- Old site text is directional reference only; do not copy wording, close paraphrases, design, UX, layout rhythm, SEO tactics, or marketing mechanics.
- English is primary/default; Russian is supported; every other language falls back to English. Language is automatic only; no visible language switcher.
- Initial sections/zones: general plans, exterior, interior, flybridge, main deck, foredeck, cockpit, aft swim platform / bathing platform, tender.
- Interior media subzones: saloon, master cabin, forward VIP cabin, starboard guest cabin, port guest / children's cabin.
- Media intake is section-by-section: agent names the next section/subsection, owner provides one Google Drive folder link plus exact filenames, agent downloads only named files, runs a photo/art-direction composition gate, then converts approved files into web derivatives for stage and full-size viewing.
- Hero logo source folder is recorded: Google Drive folder `136czYRe4bUtwnfzaJt9WsGQZD8Wkqg54`, two PNG candidates plus two TXT companion files.
- Sunseeker mark is available as cleaned transparent UI derivatives and should remain a secondary builder mark, not a hero, sticker, or primary identity element.
- Old site source intake is complete enough to start architecture: four different WordPress XML files were read from Google Drive, including Russian pages, one English post, media attachments, and a full export.
- Use extracted facts/specifications/zones only; old copy, WordPress theme data, header/footer/navigation, and old layout patterns are excluded.
- Prototype media is temporary; final hero/zone media must pass content-aware crop review before approval.
- Final media must be cut into stable common formats and displayed inside fixed-ratio containers; original photo proportions must not move the layout.
- Prototype zone viewing now supports multi-image sequences, previous/next controls, keyboard arrows, and mobile swipe.
- Mobile gallery behavior: no visible previous/next photo buttons; use horizontal swipe plus a minimal hint, with tap on free photo area for optimized full-size opening.
- Vertical/mobile derivatives must preserve yacht geometry and fill remaining space with color/tone-matched background extension so the frame feels complete vertically.
- Overview / Welcome Hall uses one static full-screen photographic frame: `DJI_0279`, with screen-aware derivatives for desktop and mobile so the yacht remains readable. The current mobile derivative uses the owner-provided crop from Drive file `1VoCmNPanI2Gbe227GCt2ACZ6E5UhMcVA`, downloaded as `.media-source/overview/DJI_0279-mobile-user.jpg`, then side-cropped only to `1080x2340`. Do not reintroduce a blurred/composited vertical background for this mobile frame unless explicitly asked.
- The desktop `DJI_0279` framing was corrected around the visual mass of the yacht, not the roof. If further changes are made, verify desktop, `1009x927`, `390x844`, and `360x740` screenshots before pushing.
- The former four-photo overview sequence (`DJI_0266_1`, `DJI_0261_1`, `DJI_0269_1`, `DJI_0258_1`) has been merged into the `Exterior` gallery so the main screen no longer cycles general views. `DJI_0257_1` is rejected for main overview; `DJI_0252_1` is not used in main overview.
- Exterior now uses approved real derivatives from owner-provided Drive folder `11xkeqgy1vXEHUCM8XtnUhwW-BSjc0teC`: `DJI_0262`, `DJI_0266`, `DJI_0247`, `DJI_0267`, `DJI_0261`, `DJI_0270`. `DJI_0247` is intentionally retained as a distant scenic candidate with careful gentle zoom/crop. Hold/reject decisions are recorded in `docs/CURRENT_STATE.md`.
- Flybridge now uses approved real derivatives from DJI folder `11xkeqgy1vXEHUCM8XtnUhwW-BSjc0teC` and GH5 Edited folder `1lowYgW5ivaZHCncr6pQ7jCEpJQBB7EZA`: `130-P1999658`, `DJI_0276`, `129-P1477663`, `132-P1999663`, `126-P1477652`. The user's `1230-P1999658` was resolved to actual Drive filename `130-P1999658.jpg`.
- Foredeck now uses approved real derivatives from GH5 Edited folder `1lowYgW5ivaZHCncr6pQ7jCEpJQBB7EZA`: `142-P1477659`, `146-P1999711`, `149-P1999723`, `156-P1999729`, `160-P1477679`. `144-P1999698` is hold/reference; `147-P1477682` is rejected from the main Foredeck sequence. `160-P1477679` is the bow rail / anchorage detail closer.
- Cockpit now uses approved real derivatives from GH5 Edited folder `1lowYgW5ivaZHCncr6pQ7jCEpJQBB7EZA`: `121-P1999653`, `113-P1477599`, `115-P1477604`.
- Saloon uses approved real derivatives from GH5 Edited folder `1lowYgW5ivaZHCncr6pQ7jCEpJQBB7EZA`: `80-P1477573`, `89-P1999637`, `87-P1999629`, `85-P1999616`, `94-P1477558`, `98-P1999624`.
- Interior is fully represented through individual subzones. Do not restore a generic `interior` overview route unless explicitly asked.
- Main deck is a category concept only. Its public content is carried by Foredeck, Cockpit, and Saloon.
- Master cabin, Forward VIP, Starboard guest, and Port guest / children's cabin have owner-provided media connected and zone copy in `src/app.js`.
- Aft Swim Platform uses owner-provided vertical iPhone media in the reusable section-gallery template.
- Tender uses owner-provided vertical iPhone media from Drive folder `1aI7ahmOw-m8g631kMmTi43O-Uu2UdiXI`; opening frame is file `1B0_8J9qHKzXjj9zP_A1mLc4Yy74-ed1Y` / public base `01-tender-primary`.
- UI now has restrained motion/feedback: gentle media surfacing, soft active glow, subtle mobile swipe hint, and calm full-viewer opening.
- Prototype has dark/light theme switching and basic photo-copy deterrents; do not describe these deterrents as absolute photo protection.
- Public UI uses optimized derivatives only. Master source media remains under ignored `.media-source/`.

## Current Hard Rules

- No public indexing.
- No sitemap.
- No public SEO growth strategy.
- No public prices.
- No `book now`, `rent now`, direct rental, or public charter-offer language.
- No `private inquiry`, public contact form, or owner-contact path on the presentation site.
- No owner identity or private client data.
- No accidental media crops that cut bow, stern, hull line, flybridge, tender, or key deck geometry.
- No final media placement without a composition/focal-point review by a photo/art-direction role or explicit equivalent pass.
- No vertical yacht derivative with black/white bars, unrelated solid fill, or hard pasted-image edges; use ambient background fill / color-matched extension.
- No master photo originals in public presentation output unless explicitly approved.
- Do not promise absolute browser photo protection; use practical deterrents and private originals.
- No unnecessary analytics or tracking.
- No heavy 3D on first mobile view unless explicitly approved.
- No unnecessary header/footer chrome, oversized cards, or oversized headings as default structure.
- No visible duplicate names in the same UI state; remove repeated labels rather than shrinking them.
- No white logo cards inside dark information panels; use integrated transparent marks.
- No school-like mobile photo navigation buttons; mobile galleries use iPhone-style swipe behavior.
- No constructor-like pill navigation, oversized CTA blocks, or school-like gallery arrows. Use text tabs, hairlines, quiet state changes, and restrained controls.
- No hidden first-screen navigation on mobile Welcome Hall. Use a compact horizontal bottom zone rail; keep it visually restrained and scrollable.
- No old Welcome Hall zone popover/grid at `max-width:1119px`; the user explicitly rejected it after seeing it overlay the yacht.
- No huge top controls on mobile. Keep `Детали яхты`, the theme switch, and Sunseeker in one readable horizontal line.
- No unreadable text on sea backgrounds. Welcome copy needs sufficient local glass/contrast while avoiding a heavy rectangular blur card.
- Do not use old-site wording or visual/interaction approaches.
- Show one active language at a time.
- Do not allow inactive-language flash during initialization.
- Do not layer contradictory guidance; remove or rewrite superseded rules.

## Open Questions

- Final deployment target details and exact publication process for `claudia-z.com`.
- Apply the section-gallery template to future owner-supplied vertical photo zones.
- Final review of every mobile crop after all media is complete.
- Whether a private access layer/password gate is required for the first deployment, beyond `noindex`.

## Next Recommended Step

Do a focused QA pass before deployment or before further visual changes:

- verify mobile, narrow-width, and intermediate-width menu behavior in a real browser window, especially `1009x927`, `390x844`, and `360x740`
- confirm the Welcome Hall top controls remain in one horizontal line with Sunseeker and do not become oversized on mobile
- walk every zone and confirm stage copy, details text, media order, and no duplicate yacht-name labels
- check dark/light theme contrast
- confirm no public indexing files or SEO/public-sales mechanics exist
- then prepare deployment instructions or deployment commit as requested
