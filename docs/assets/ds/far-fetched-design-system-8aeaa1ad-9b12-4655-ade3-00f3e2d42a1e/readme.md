# Far Fetched Design System

Design system for **Far Fetched Ventures** — a holding company built from a love of surfing (the name: "far fetch" produces the best waves). Two businesses sit under it today, per the real site content in `farfetched-website/` (a local Jekyll repo, attached after this system's first pass):

- **Far-Fetched Advisory and Consulting** — Jesse Cary's strategic engineering leadership practice, specializing in regulated digital platforms (iGaming primarily — Betty.ca, PointsBet, Evolution Gaming, Pragmatic Play — plus fintech/e-commerce). Not an "AI consultancy" — that was an earlier, incorrect guess before the real site was available. Services: strategic advisory, platform architecture, team scaling, leadership development.
- **Far Fetched Labs** — an *incubator*, not an IP-licensing business (also an earlier incorrect guess). It co-creates with founders/operators to pressure-test ideas and ship proof-of-value prototypes fast. Current incubation project: an AI-driven insurance brokerage platform.

**Sources**: `farfetched-website/` — a locally attached Jekyll repo (`docs/index.md`, `about.md`, `far-fetched-labs.md`, `contact.md`, `_config.yml`, `assets/company-logos/`). Real copy, real client/partner logos, and the real Calendly contact link were pulled from there into `ui_kits/advisory/`. The repo's own Sass theme (`docs/assets/main.scss`) used a different ocean-blue palette (`#1a5490`/`#2e86ab`/deep-water tones on a light "ice" background) — this system instead built an original **dark-mode** ocean-blue direction per the user's explicit ask; palette tokens were not ported from the old site. If the light theme should be preserved instead, flag it and the color tokens can be redone against it.

## Index

- `styles.css` — root stylesheet, imports everything below.
- `tokens/` — `colors.css`, `typography.css`, `spacing.css`, `effects.css`, `fonts.css`.
- `components/core/` — Button, IconButton, Card, Badge, Tag.
- `components/forms/` — Input, Select, Checkbox, Radio, Switch.
- `components/feedback/` — Tabs, Tooltip, Toast, Dialog.
- `guidelines/` — foundation specimen cards (color, type, spacing, effects, brand).
- `ui_kits/advisory/` — Far Fetched Advisory marketing site recreation.
- `ui_kits/labs/` — Far Fetched Labs product app recreation.
- `templates/pitch-deck/` — sample slide deck template.
- `assets/` — empty; see Iconography/Logo notes below.
- `SKILL.md` — Claude Code / Agent Skills-compatible entry point.

## Components

**Core** (`components/core/`): Button, IconButton, Card, Badge, Tag
**Forms** (`components/forms/`): Input, Select, Checkbox, Radio, Switch
**Feedback & Navigation** (`components/feedback/`): Tabs, Tooltip, Toast, Dialog

**Intentional additions**: no source defined a component inventory (nothing was attached), so this is the standard from-scratch primitive set sized to what both products need — a rights/deals table app and a marketing site. Every component above was authored for this run; none are ports of an existing library.

## Logo

**No logo was supplied.** Every place a mark would go uses the wordmark "Far Fetched" set in Space Grotesk. Do not draw a wave/surf logo from scratch to fill this gap — attach a real mark and this gets swapped in everywhere (nav, favicon, deck title slide, thumbnail).

## Content fundamentals

- **Voice**: warm, plain-spoken, approachable — not corporate-consultant stiff, not jokey. Say the thing directly.
- **Person**: "you" for the reader/customer, "we" for Far Fetched. Avoid third-person ("clients," "users") in marketing copy; use it sparingly in product UI (e.g. "rights holders").
- **Casing**: sentence case everywhere — headlines, buttons, nav labels, form labels. No title case, no ALL CAPS except tiny caption/eyebrow labels (uppercase + letter-spacing, e.g. badges, section eyebrows) which are a deliberate typographic accent, not a copy rule.
- **Sentence length**: short. One idea per sentence. Prefer "We build platforms that turn IP into revenue." over a compound sentence stacking three ideas.
- **Emoji**: none. The brand's warmth comes from plain language, not emoji.
- **Numbers & jargon**: consultancy/product copy can use precise numbers and domain terms (rights, licensing, mechanical/sync/performance) but always defines or contextualizes the first use on a page.
- **Examples**:
  - Hero: "AI that actually ships." / "Turn dormant IP into revenue."
  - Button: "Book a call" not "Schedule a Consultation™"
  - Empty state: "No deals yet. Add your first rights holder to get started."
  - Error: "That email doesn't look right." not "Invalid input: field 'email' failed validation."

## Visual foundations

- **Mode**: dark-mode-first and dark-mode-only for now (no light theme built). Base surface is near-black navy (`--surface-app: #05070c` / `--surface-canvas: #0a0f1a`), never pure `#000`.
- **Color**: neutrals are blue-tinted navy ink (`--ink-*` ramp), not gray — everything, including borders and disabled states, carries a faint blue cast. The accent is a single ocean blue (`--accent / --blue-500 #2563eb`) used sparingly for the one primary action per view; a brighter "foam" cyan (`--foam-500 #38bdf8`) is a rare highlight/focus-ring color, not a second UI color to spread around. Status colors (success/warning/danger) exist but stay muted/desaturated to fit the dark palette.
- **Type**: geometric sans (Space Grotesk) for everything — display, headings, body, UI labels — paired with a techy monospace (JetBrains Mono) reserved for data/code-like content (deal IDs, contract numbers, timestamps) and never for headlines or body prose.
- **Spacing**: 4px base unit, scale at 4/8/12/16/20/24/32/40/48/64/80/96/128. Generous whitespace; sections breathe.
- **Corner radii**: small and consistent — 4/6/10/14/20px, plus a pill radius for chips/switches/badges. Cards use `--radius-lg` (14px), buttons `--radius-md` (10px). Nothing goes above 20px except full pills — no oversized "bubbly" corners.
- **Cards**: flat fill (`--surface-card`, slightly lighter than the page background) + a 1px near-invisible blue-tinted hairline border + a soft, cool, low-contrast drop shadow (`--shadow-md`). No colored left-border accent strip on generic cards (Toast is the one deliberate exception, used for tone, not decoration).
- **Borders**: hairline (`rgba(148,175,205,0.14)`) by default, brightening to `0.24` alpha for emphasis — never a solid bright line unless it's an accent/focus state.
- **Shadows**: soft, cool-toned, low-contrast — shadows read as depth, not drama. No hard black shadows, no colored glows except two deliberate accent-glow tokens (`--glow-accent`, `--glow-foam`) reserved for a primary CTA or an active/focused state.
- **Backgrounds**: solid navy fields, no photography-heavy hero backgrounds, no repeating patterns/textures, no illustration motifs (none were supplied — don't invent any). No gradients on surfaces or buttons; the "ocean" reference lives in the color palette and copy, not in wave-shaped decoration.
- **Blur/transparency**: backdrop-blur is reserved for exactly one situation — modal/dialog overlays (`--blur-panel: 20px` glass scrim). Not used on nav bars, cards, or badges.
- **Animation**: subtle and functional only. Standard duration/easing tokens: 120ms (fast — hover/press), 200ms (base — most transitions), 360ms (slow — modal/panel entrances) on `cubic-bezier(0.4,0,0.2,1)` (standard) or `cubic-bezier(0.16,1,0.3,1)` (entrance "out" easing). No bounce, no infinite decorative loops.
- **Hover states**: buttons lighten one step (`--accent` → `--accent-hover`); ghost/icon buttons gain a subtle `--accent-subtle` tint background; hoverable cards lift 2px and their border brightens to `--border-accent`.
- **Press states**: buttons scale to 97% (no color change) — a tactile "give," not a darken.
- **Disabled**: opacity drops to ~45–50%, no color change, cursor `not-allowed`.
- **Imagery**: none supplied. If/when photography is added: cool tone (blues/teals, not warm), no heavy grain, no illustration — this is a placeholder recommendation pending real assets.

## Iconography

No icon set, icon font, or SVG sprite was supplied. UI kits and component demos use **Lucide** (thin 2px stroke, line-only, no fills) loaded from CDN as the closest match to the sleek/geometric brand direction — flagged here as a substitution. If Far Fetched has a house icon set, swap the CDN link for it. Unicode/emoji are not used as icons anywhere.

## Fonts — flagged substitution

No font files were supplied. Placeholders in use, loaded from Google Fonts (not self-hosted — swap for real files/licenses when available):
- **Space Grotesk** (400/500/600/700) — geometric sans, all display/heading/body/UI text.
- **JetBrains Mono** (400/500/600) — techy monospace accent for data/code-like content only.

**Please send over real brand font files (or confirm these choices) so they can be self-hosted and licensed properly.**
