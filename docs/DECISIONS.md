# Decisions

This file records approved strategic decisions only.

Do not use it as a chat transcript. When a decision supersedes older guidance, update the active documents and mention the supersession here.

## 2026-06-11 — GitHub Is Source Of Truth

Decision:
GitHub repository `vetus-nauta/claudia-z` is the project source of truth.

Impact:
Local work should stay aligned with GitHub. Namecheap `public_html` is a publication target only.

Status:
Approved

## 2026-06-11 — Controlled No-Index Presentation Tool

Decision:
The project is a controlled no-index presentation tool for selected brokers, trusted partners, and direct private clients.

Supersedes:
Any framing that treats the project as a public sales website, SEO website, public charter marketplace, or generic landing page.

Impact:
No public SEO strategy, no sitemap, no search landing pages, no public indexing behavior, no public booking/rental funnel.

Status:
Approved

## 2026-06-11 — Interface-Light Media-First UX

Decision:
The first presentation layer should use an Interface-Light Media-First UX standard with maximum meaningful information and minimum non-meaningful interface fields.

Supersedes:
Generic landing-page structure, heavy header/footer framing, large decorative cards, oversized repeated headings, and long stacked galleries as the default public presentation pattern.

Impact:
The first mobile viewport must be clear and complete. Header/footer chrome, oversized cards, and oversized headings are not default structure. Media should use compact modern patterns such as full-screen viewer, swipe gallery, media rail, zone gallery, drawer, or progressive reveal.

Status:
Approved

## 2026-06-11 — Future 3D Guide Compatibility

Decision:
Current UX, CSS, media, gallery, and navigation decisions must preserve a path to a future 3D yacht guide.

Impact:
Use yacht zones, hotspot-ready media, stable zone naming, and photo/video fallback. Do not load heavy 3D on the first mobile view unless explicitly approved.

Status:
Approved

## 2026-06-11 — Contradiction Cleanup Required

Decision:
Approved changes to project logic must replace contradictory old guidance rather than layering new rules on top.

Impact:
Agents must search for old wording, remove or rewrite superseded guidance, keep `CURRENT_STATE.md` and `NEXT_CHAT_HANDOFF.md` current-only, and report verification.

Status:
Approved

## 2026-06-11 — Domain Active And Old Site Text Boundary

Decision:
Domain `claudia-z.com` is active. Old site text may be used only as directional reference.

Supersedes:
Any approach that copies the old site's wording, close paraphrases, design, layout, section rhythm, interaction patterns, WordPress theme behavior, SEO tactics, or marketing mechanics.

Impact:
Agents may extract factual direction, topic coverage, yacht details, and media references, then write new copy from scratch according to the current controlled no-index, media-first standard.

Status:
Approved

## 2026-06-11 — Language Detection And Fallback

Decision:
English is the primary/default language. Russian is the secondary supported language. If the detected/preferred language is neither English nor Russian, the presentation opens in English.

Impact:
Implement automatic language handling without a visible language switcher. Show one active language at a time, prevent inactive-language flash during initialization, and maintain content parity for approved `en` and `ru` content.

Status:
Approved

## 2026-06-11 — Initial Yacht Sections And Media Intake

Decision:
Initial content/media structure should include general plans, exterior, interior, flybridge, main deck, foredeck, cockpit, aft swim platform / bathing platform, and tender. Interior media should additionally be separated into saloon, master cabin, forward VIP cabin, starboard guest cabin, and port guest / children's cabin.

Impact:
Photos will be requested from the owner as Google Drive folders/links and mapped into stable yacht zones for current gallery and future 3D guide compatibility.

Status:
Approved

## 2026-06-11 — No Public Inquiry Or Owner Contact

Decision:
The presentation site must not include a private inquiry CTA, public contact form, owner-contact path, or any direct connection to the yacht owner.

Supersedes:
Earlier wording that mentioned private inquiry as a first-release site path.

Impact:
The first release is a controlled visual presentation only. Future private access or communication systems must remain separate from the public presentation surface unless explicitly approved later.

Status:
Approved

## 2026-06-11 — Strict Media Crop Control

Decision:
Hero and zone media must be approved with deliberate focal points and mobile/tablet/desktop crop behavior. Accidental crops that cut the bow, stern, hull line, flybridge, tender, or key deck geometry are not acceptable.

Impact:
Images are judged by design role and framing, not by availability alone. Temporary media may be used for layout testing, but final media requires content-aware review before approval.

Status:
Approved

## 2026-06-11 — Dark And Light Theme Support

Decision:
The presentation must support both dark and light themes through one shared visual system and a compact theme switcher.

Impact:
Theme support must preserve layout, media framing, information hierarchy, and premium tone. The implementation should follow system preference by default where practical and may store only a non-sensitive local theme preference.

Status:
Approved

## 2026-06-11 — Photo Protection Is Deterrence, Not Absolute Security

Decision:
The site should include practical deterrents against casual photo copying/downloading, but agents must not claim that browser-rendered images can be fully protected from copying, screenshots, inspection, or download.

Impact:
Use display derivatives instead of originals, keep master assets out of the public build, avoid exposing source URLs where practical, add interaction deterrents where they do not damage UX, and reserve sensitive originals for approved private delivery.

Status:
Approved

## 2026-06-11 — Stable Media Frames And Crops

Decision:
Presentation photos must be prepared as display derivatives for approved common formats. Media containers must use stable aspect ratios so image proportions do not move or reshape the interface.

Impact:
Agents must define crop role, focal point, mobile/tablet/desktop behavior, and output size before approving media. Browser `object-fit` may be used for controlled display, but final publication should use pre-cut derivatives where practical.

Status:
Approved

## 2026-06-11 — No Visible Name Duplication

Decision:
Do not repeat the same brand, yacht, zone, or section name in multiple visible interface positions at the same time.

Impact:
If `Claudia Z` is the hero title, it should not also appear as a simultaneous topbar label. Supporting model/manufacturer context may appear where it adds meaning, but repeated labels must be removed rather than visually minimized.

Status:
Approved

## 2026-06-11 — Premium Control Language

Decision:
The interface must avoid constructor-like pill navigation, oversized CTA blocks, and school-like gallery arrows.

Impact:
Zone navigation should behave as quiet text tabs with subtle active state, facts should read as a compact information line, and gallery controls should be minimal on desktop and hidden on mobile in favor of swipe. The Overview hero identity should use transparent `Claudia Z` logo assets prepared from the Drive source folder. On dark-framed hero media, the visible mark must remain light/readable regardless of selected theme. The visible hero title should not be rendered as plain text; keep text only for accessibility.

Status:
Approved

## 2026-06-12 — Editorial Copy Chief Role

Decision:
All Claudia Z presentation copy should be reviewed through the `editorial-copy-chief` role in `.agents/skills/editorial-copy-chief`.

Supersedes:
AI-style descriptive copy, photo-caption prose, generic luxury brochure phrasing, and long section text that repeats what is already visible in media.

Impact:
Copy should be short, human, bilingual, fact-aware, and suitable for a private yacht presentation. The role works with `content-legal-guard` whenever wording touches public offer, charter/rental, availability, pricing, owner identity, public contact, or claims.

Status:
Approved

## 2026-06-12 — Adaptive Navigation And Zone Copy

Decision:
For non-welcome gallery views, narrow viewports may use a compact hamburger-style section menu. The Welcome Hall follows the 2026-06-12 Drive handoff and uses a visible compact horizontal bottom zone rail, so first-screen navigation is not hidden behind a menu.

Impact:
The stage should show concise zone-specific copy after a zone is selected, while fuller detail remains in the details sheet. This keeps the first screen informational without turning the experience into a text-heavy landing page.

Status:
Approved

## 2026-06-11 — Integrated Marks, Not Logo Stickers

Decision:
Manufacturer marks inside dark information panels must be integrated as transparent/light marks, not placed on separate white logo cards.

Impact:
Use cleaned transparent derivatives for embedded marks. Avoid background boxes, sticker-like logo tiles, and any logo treatment that visually competes with the yacht identity or the panel content.

Status:
Approved
