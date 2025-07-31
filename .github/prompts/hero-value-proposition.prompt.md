---
topic: Hero Section
depends_on: website-design-and-content.prompt.md, theme.md, ../copilot-instructions.md
status: implemented
mode: agent
---

# Goal
Homepage hero section with a strong value proposition for Far-Fetched Ltd.

# Context
Far-Fetched Ltd is a boutique consultancy that partners with ambitious digital companies to help them scale platforms and teams. The founder has a background in high-performance platform architecture, especially in iGaming and fintech, but also supports other regulated or high-growth sectors.

# Implementation Status
## Current Implementation ✅
- **Content**: "Scaling platforms and teams for ambitious digital companies" (9 words)
- **Subtitle**: "Strategic engineering leadership that drives growth, performance, and results." (10 words)
- **Total**: 19 words (under 25-word requirement)
- **Layout**: Full viewport width with CSS `100vw` and container breakout techniques
- **Styling**: Wave-inspired gradient background with backdrop blur
- **CTAs**: "Learn More" and "Get In Touch" buttons with wave theme styling

## Technical Implementation
- **Full viewport width**: Uses `width: 100vw` with `margin-left: calc(-50vw + 50%)` technique
- **Responsive design**: Mobile-optimized padding and typography scaling
- **Wave theme integration**: Ocean blue and ice color palette with gradient accents
- **Typography**: Bold key phrases with gradient underlines on "platforms" and "teams"

# Requirements ✅ Met
## Content Requirements
- ✅ Max 25 words (current: 19 words)
- ✅ Communicates: who you help (ambitious digital companies), what you do (scaling platforms and teams), and the result (growth, performance, results)
- ✅ Friendly but professional tone
- ✅ Actionable and inspiring

## Style Guide
- ✅ Clear, modern sans-serif typography (system font stack)
- ✅ Key phrases emphasized with bold and wave theme colors
- ✅ Layout: Full viewport width with generous padding
- ✅ Responsive: Scales well on mobile and desktop
- ✅ Accessible language without jargon

# Current HTML Structure
```html
<section class="hero-section">
  <div class="hero-content">
    <h1 class="hero-title">Scaling <strong>platforms</strong> and <strong>teams</strong> for ambitious digital companies</h1>
    <p class="hero-subtitle">Strategic engineering leadership that drives growth, performance, and results.</p>
    <div class="hero-cta">
      <a href="/about/" class="btn-primary">Learn More</a>
      <a href="mailto:info@farfetched.ltd" class="btn-secondary">Get In Touch</a>
    </div>
  </div>
</section>
```

# Current CSS Features
- Full viewport width breakout from wrapper constraints
- Wave-inspired gradient background with backdrop blur
- Bold typography with gradient accent lines
- Responsive button styling with hover animations
- Mobile-optimized padding and typography scaling