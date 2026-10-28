---
name: Far Fetched
description: Dark, deep-sea consultancy site: navy tonal surfaces, a single ocean-blue accent, whitewater cyan highlights, faint wave lines.
colors:
  abyss: "#05070c"
  midnight: "#0a0f1a"
  deep-card: "#0d1420"
  deep-raised: "#121b2b"
  swell: "#1b2740"
  tide: "#2a3a58"
  slate-mist: "#445872"
  fog: "#6c8098"
  haze: "#9aabbe"
  sea-glass: "#c4cfdb"
  spray: "#e4eaf1"
  foam-white: "#f4f7fa"
  ocean: "#2563eb"
  ocean-bright: "#3b82f6"
  ocean-deep: "#1c56ac"
  ocean-link: "#60a5fa"
  ocean-pale: "#93c5fd"
  whitewater: "#38bdf8"
  whitewater-soft: "#7dd3fc"
  success: "#22c55e"
  warning: "#f5b942"
  danger: "#f2564b"
typography:
  display-xl:
    fontFamily: "Space Grotesk, Helvetica Neue, Arial, sans-serif"
    fontSize: "4.5rem"
    fontWeight: 700
    lineHeight: 1.02
  display-l:
    fontFamily: "Space Grotesk, Helvetica Neue, Arial, sans-serif"
    fontSize: "3.25rem"
    fontWeight: 600
    lineHeight: 1.05
    letterSpacing: "-0.02em"
  display-m:
    fontFamily: "Space Grotesk, Helvetica Neue, Arial, sans-serif"
    fontSize: "2.5rem"
    fontWeight: 600
    lineHeight: 1.08
    letterSpacing: "-0.02em"
  headline:
    fontFamily: "Space Grotesk, Helvetica Neue, Arial, sans-serif"
    fontSize: "1.875rem"
    fontWeight: 600
    lineHeight: 1.2
  title:
    fontFamily: "Space Grotesk, Helvetica Neue, Arial, sans-serif"
    fontSize: "1.25rem"
    fontWeight: 600
    lineHeight: 1.35
  body:
    fontFamily: "Space Grotesk, Helvetica Neue, Arial, sans-serif"
    fontSize: "1rem"
    fontWeight: 400
    lineHeight: 1.6
  body-large:
    fontFamily: "Space Grotesk, Helvetica Neue, Arial, sans-serif"
    fontSize: "1.125rem"
    fontWeight: 400
    lineHeight: 1.6
  label:
    fontFamily: "Space Grotesk, Helvetica Neue, Arial, sans-serif"
    fontSize: "0.8125rem"
    fontWeight: 500
    lineHeight: 1.3
    letterSpacing: "0.06em"
  mono:
    fontFamily: "JetBrains Mono, ui-monospace, SF Mono, Menlo, monospace"
    fontSize: "0.8125rem"
    fontWeight: 400
    lineHeight: 1.5
rounded:
  xs: "4px"
  sm: "6px"
  md: "10px"
  lg: "14px"
  xl: "20px"
  pill: "999px"
spacing:
  xs: "4px"
  sm: "8px"
  md: "16px"
  lg: "24px"
  xl: "32px"
  section-y: "90px"
  section-x: "48px"
components:
  button-primary:
    backgroundColor: "{colors.ocean}"
    textColor: "{colors.foam-white}"
    typography: "{typography.body-large}"
    rounded: "{rounded.md}"
    padding: "13px 26px"
  button-primary-hover:
    backgroundColor: "{colors.ocean-bright}"
  button-secondary:
    backgroundColor: "transparent"
    textColor: "{colors.foam-white}"
    rounded: "{rounded.md}"
    padding: "13px 26px"
  button-tertiary:
    textColor: "{colors.ocean-link}"
    padding: "13px 10px"
  card:
    backgroundColor: "{colors.deep-card}"
    textColor: "{colors.haze}"
    rounded: "{rounded.lg}"
    padding: "28px"
  card-raised:
    backgroundColor: "{colors.deep-raised}"
    textColor: "{colors.haze}"
    rounded: "{rounded.lg}"
    padding: "32px"
  sector-tag:
    backgroundColor: "{colors.deep-card}"
    textColor: "{colors.haze}"
    typography: "{typography.body}"
    rounded: "{rounded.pill}"
    padding: "7px 16px"
  nav-link:
    textColor: "{colors.haze}"
    rounded: "{rounded.sm}"
    padding: "8px 16px"
---

# Design System: Far Fetched

## Overview

**Creative North Star: "The Night Swell"**

The site sits at night on deep water. Surfaces are stepped navy, from abyss black to a slightly lifted slate, and sit over a fixed field of faint wave lines that fades out by the middle of the first viewport. One ocean-blue accent carries every action. A second, colder cyan (whitewater) breaks the surface only for emphasis: a hero keyword, a stat figure, a mono index. The mood is calm, deep and authoritative: a senior operator speaking plainly, not an agency performing.

The system is dark-first and has no light mode. Depth is tonal before it is shadowed: cards are one step lighter than the canvas and bounded by a hairline. Shadows are soft and cool and support the layering. Glow is rare and belongs to the primary call to action. Components are composed and technical: restrained rounding, hairline borders, a small lift on hover, and monospaced indices where a number or label needs to feel like an instrument reading.

**Key Characteristics:**
- Dark-only, tonal navy surfaces; hairline borders instead of heavy outlines
- One blue accent for action; cyan "whitewater" for emphasis only
- Space Grotesk throughout with JetBrains Mono for indices and metadata
- Fixed wave-line backdrop (`/assets/waves.png`) masked to fade by about 85% of the viewport
- Full-bleed sections with generous vertical padding (90px) and a 48px side gutter
- Colour and type live as CSS custom properties from the design-system token files

## Colors

A cold, saturated-blue-on-ink palette. Neutrals are tinted toward blue, never gray.

### Primary
- **Ocean** (#2563eb): the only action colour. Primary buttons, active tab underline, quote rule, focus-adjacent glow. Hover steps to Ocean Bright (#3b82f6), pressed to Ocean Deep (#1c56ac).
- **Ocean Link** (#60a5fa): text links and eyebrow labels. Hover shifts to Whitewater Soft.

### Secondary
- **Whitewater** (#38bdf8) and **Whitewater Soft** (#7dd3fc): emphasis only. Hero keywords, stat values, "Incubator" eyebrow, accent sector tag, link hover. Whitewater also marks the focus ring.

### Neutral
- **Abyss** (#05070c): page background and sunken wells.
- **Midnight** (#0a0f1a): alternating "canvas" section band; also the translucent nav base (85% opacity).
- **Deep Card** (#0d1420): default card surface.
- **Deep Raised** (#121b2b): raised card, primary expertise panel, mobile menu pill surface.
- **Swell** (#1b2740) and **Tide** (#2a3a58): ramp steps for gradients (Labs teaser) and strong dividers.
- **Foam White** (#f4f7fa): primary text. **Haze** (#9aabbe): secondary text. **Slate Mist** (#445872): tertiary text, indices, footer.
- Hairlines are translucent steel: `rgba(148,175,205,0.14)` subtle, `0.24` default; accent border is `rgba(59,130,246,0.45)`.
- Status colours (Success, Warning, Danger) exist in the token set but are not used on any current page.

### Named Rules
**The Single Beacon Rule.** Ocean is the only colour that means "act". Never use it for decoration, and never introduce a second action colour.

**The Whitewater Rule.** Cyan appears at most once or twice per viewport, as emphasis on a word or figure. If it appears on a whole paragraph or a large surface, it has stopped being a highlight.

**The Tinted Neutral Rule.** Every neutral is a blue-shifted ink. No pure black, no neutral gray, no pure white (text tops out at Foam White).

## Typography

**Display Font:** Space Grotesk (with Helvetica Neue, Arial, sans-serif)
**Body Font:** Space Grotesk, same family
**Label/Mono Font:** JetBrains Mono (with ui-monospace, SF Mono, Menlo)

**Character:** A geometric grotesque with slightly technical quirks, paired with a mono for card indices and metadata. Both are Google Fonts placeholders chosen because no brand fonts were supplied (see `readme.md` in the design-system bundle). Swap the family in `tokens/fonts.css` if brand fonts arrive; nothing else should change.

### Hierarchy
- **Display XL** (700, 4.5rem, 1.02): defined, not used on current pages.
- **Display L** (600, 3.25rem, 1.05, -0.02em): home hero headline only. Drops to 2.25rem/1.1 below 760px.
- **Display M** (600, 2.5rem, 1.08, -0.02em): inner-page titles (About, Contact, Labs).
- **Headline** (600, 1.875rem, 1.2): section headings and teaser titles. Heading M (1.5rem) for card-group and case-study titles.
- **Title** (600, 1.25rem, 1.35): card titles.
- **Body** (400, 1rem, 1.6): standard paragraphs. **Body Large** (1.125rem) for hero subtitle, lede, buttons, and inner-page body (line-height 1.75). Body Small (0.875rem, 1.55) for card copy, nav, footer.
- **Label** (500, 0.8125rem, +0.06em, uppercase): eyebrows, in Ocean Link. Caption (0.75rem, uppercase, +0.06em) for section labels in Slate Mist.
- **Mono** (400, 0.8125rem): card indices ("01"), case-study meta line.

### Named Rules
**The Eyebrow Rule.** Uppercase tracked labels sit above a heading and nowhere else. Inline uppercase is not part of the system.

**The Reading Measure Rule.** Hero subtitle caps at 640px, headings at 820px, inner-page body at the 760px container. Keep prose under about 75 characters per line.

## Layout

Full-bleed sections on a 4px spacing unit, each owning its own horizontal padding rather than relying on a wrapper. Sections use 90px vertical and 48px horizontal padding (hero: 118px top, 96px bottom). Alternating sections use the Midnight canvas band to separate chapters without a rule. Inner pages use a narrow 760px centred column (1000px for the wide variant) with 80px top padding. The nav and footer inner containers cap at 1400px.

Grids are simple and equal: three-up for stats, leverage and services; an asymmetric 1.3fr / 1fr pair for expertise; a two-column image-and-copy for the About teaser. Gaps are 20px between cards.

Responsive: below 900px every multi-column grid collapses to one column and the teaser image moves above its copy. Below 760px the nav becomes a checkbox-driven dropdown, section padding drops to 64px / 24px, and the hero title steps down to 2.25rem.

## Elevation & Depth

Hybrid, tonal-first. Depth is stated by surface step (Abyss, Midnight, Deep Card, Deep Raised) and a hairline border. Shadows are soft, cool-toned and low contrast, so they read as a gentle settling rather than a lift. Glow is a deliberate exception.

### Shadow Vocabulary
- **Small** (`0 1px 2px rgba(0,5,15,0.4)`): tight separation; available, rarely used.
- **Medium** (`0 4px 16px rgba(0,8,24,0.45), 0 1px 0 rgba(255,255,255,0.02) inset`): default for cards and stat cards, with a faint top edge highlight.
- **Large** (`0 12px 32px rgba(0,8,24,0.55)`): case study, Labs teaser, images, mobile menu.
- **XL** (`0 24px 64px rgba(0,6,20,0.6)`): defined for overlays.
- **Accent glow** (`0 0 0 1px rgba(59,130,246,0.4), 0 0 24px rgba(37,99,235,0.35)`): primary button only.
- **Foam glow** (`0 0 24px rgba(56,189,248,0.3)`): defined, unused.
- **Glass nav**: 85% Midnight with a 20px backdrop blur and a bottom hairline. Glass is reserved for the sticky nav.

### Named Rules
**The Rare Glow Rule.** Only the primary call to action glows. If two glows share a viewport, one of them is wrong.

**The Hairline-Before-Shadow Rule.** A surface is separated first by a tonal step and a hairline; the shadow is added only to settle it.

## Shapes

Composed, not pillowy. Controls (buttons, pills in the contact area) use 10px. Cards and images use 14px. The Labs teaser, as the one featured panel, uses 20px. Nav links use 6px. The pill radius (999px) is used only for sector tags. Borders are always 1px hairlines; the only 2px strokes are semantic: the active tab underline and the left rule on quotes and pull statements (Ocean for primary, Border Accent for secondary). No clipped or diagonal shapes.

## Components

### Buttons
- **Shape:** 10px radius, 13px × 26px padding, Body Large at weight 600, no wrap. A small variant (9px × 18px, Body Small) sits in the nav.
- **Primary:** Ocean fill, Foam text-on-accent, the accent glow, transparent 1px border. Hover brightens to Ocean Bright. Pressed scales to 0.97.
- **Secondary:** transparent with a 1px default hairline and Foam White text. Hover shifts the border to the accent border.
- **Tertiary:** text-only Ocean Link with 10px side padding. Hover shifts to Whitewater Soft.
- **Transitions:** 120ms on the standard ease.

### Cards
- **Corner Style:** 14px.
- **Background:** Deep Card by default, Deep Raised for the raised variant (with an accent border and 32px padding).
- **Shadow Strategy:** Medium; Large for the case study.
- **Border:** 1px subtle hairline.
- **Internal Padding:** 28px (32px raised).
- **Interactive:** lifts 2px on hover over 200ms with the out ease, and the border warms to the accent border. A mono index ("01") sits above the title.

### Chips
- **Style:** pill, Deep Card fill, subtle hairline, Haze Body Small text, 7px × 16px padding.
- **Accent variant:** Whitewater text on an Ocean 14% tint with the accent border. Used once per set as the open-ended "…and any sector" chip.

### Tabs (case study)
- CSS-only radio tabs. Labels are Slate Mist, brighten to Haze on hover, and turn Foam White with a 2px Ocean underline when selected. Panels are Haze body text at 1.7 line-height.

### Navigation
- Sticky glass bar; 18px × 48px padding. Wordmark in 700 weight at 1.25rem with tight tracking. Links are Haze Body Small, the active link is Foam White at weight 600 on an Ocean 14% tint. The nav ends with a small primary "Get in touch" button.
- Mobile: a three-bar toggle opens a Midnight dropdown, with the CTA full width.

### Stat card (signature)
- A Deep Card tile with a 2.25rem Whitewater value (700) over a Haze Body Small label. Used as a three-up band to state capabilities and tenure.

### Labs teaser (signature)
- The only gradient surface: a 135° ramp from Deep Raised to Midnight inside a 20px frame with a hairline and a Large shadow. It marks the sub-brand as a distinct place.

## Do's and Don'ts

### Do:
- **Do** use tonal steps (Abyss, Midnight, Deep Card, Deep Raised) and a 1px hairline to separate surfaces before reaching for a shadow.
- **Do** keep Ocean (#2563eb) for actions only, and put the single primary CTA in a section where it is the only glowing element.
- **Do** use Whitewater for one word or figure per viewport, as in the hero keywords or a stat value.
- **Do** build with the CSS custom properties from the token files (`var(--surface-card)`, `var(--space-8)`), not literal values.
- **Do** keep the content column narrow and left-aligned in inner pages (760px), and let the home sections run full bleed.
- **Do** honour `prefers-reduced-motion` for the 300ms page fade and the 2px card lift.

### Don't:
- **Don't** add a light theme, or any pure white or pure black surface; the whole system is tinted navy.
- **Don't** introduce a second action colour, gradient text, or decorative glows outside the primary button.
- **Don't** use uppercase tracked text outside eyebrows and section labels.
- **Don't** put a shadow without a hairline on a card, or a heavy 2px outline on a container.
- **Don't** hard-code colours inline; the About page's inline styles and the Calendly badge colour (#2563eb) should reference the tokens.
- **Don't** let the wave backdrop sit under body text at full strength; it must fade before the second viewport.
