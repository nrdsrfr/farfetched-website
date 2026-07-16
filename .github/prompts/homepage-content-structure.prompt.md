---
mode: agent
topic: Homepage Content Structure
depends_on: website-design-and-content.prompt.md, hero-value-proposition.prompt.md, theme.prompt.md
status: draft
---

# Homepage Content Structure - Scrollable Long-Form Layout

## Goal
Create a comprehensive single-page homepage that tells the complete Far-Fetched story through logical scrolling sections, minimizing the need for navigation while maintaining focus on key CTAs.

## Content Flow Strategy

### Section 1: Hero Section (Already Implemented)
- **Current**: Value proposition with primary CTAs
- **Position**: Top of page
- **Purpose**: Immediate clarity on who you help and what you do

### Section 2: Trust Signals & Social Proof
- **Content**: Client logos, testimonials, key metrics
- **Layout**: Horizontal logo strip or testimonial cards
- **Purpose**: Build immediate credibility after the value prop
- **Examples**: 
  - "Trusted by Tier 1 gaming platforms across North America & Europe"
  - Client logos (if permissible) - fetch logos from companies I have worked for and by association companies I have worked with by checking websites and LinkedIn of companies I worked for.
  - Key stats: "45% latency reduction", "£2M+ cost savings delivered"

### Section 3: Niche Positioning & Expertise
- **Content**: iGaming specialization with broader capability
- **Layout**: Split content with visual elements
- **Purpose**: Position expertise while remaining approachable to other sectors
- **Structure**:
  - Primary focus: "Specialists in regulated digital platforms"
  - Sweet spot: iGaming emphasis
  - Broader reach: "Open to ambitious digital companies"

### Section 4: Service Overview
- **Content**: High-level service areas (not detailed process)
- **Layout**: Icon/card grid
- **Purpose**: Show breadth without overwhelming detail
- **Structure**:
  - Strategic Advisory
  - Platform Architecture and Roadmapping
  - Engineering Team Scaling
  - Leadership Development
  - Technical Due Diligence
  - Technology Integration
  - RFP & Vendor Selection

### Section 5: Featured Case Study
- **Content**: One compelling success story - use betty.ca case on my linkedin.com/jessecary
- **Layout**: Challenge → Solution → Result format
- **Purpose**: Demonstrate concrete value delivery
- **CTA**: "View More Case Studies" (links to dedicated page)

### Section 6: Personal Branding/About Jesse
- **Content**: Brief leadership background and approach
- **Layout**: Photo + concise bio + leadership philosophy
- **Purpose**: Personal connection and credibility
- **CTA**: "Learn More About Jesse" (links to full About page)

### Section 7: Strong Closing CTA
- **Content**: Clear next steps for engagement
- **Layout**: Prominent section with multiple contact options
- **Purpose**: Convert interest into action
- **Options**: 
  - Primary: "Schedule 30-minute intro call"
  - Secondary: Email contact
  - Tertiary: LinkedIn connection

## Pages That Should NOT Be on Homepage
- **Thought Leadership Resources**: Separate blog/resources page
- **Detailed Service Process**: Dedicated services page
- **Full Case Study Collection**: Dedicated case studies page
- **Detailed Pricing**: Separate page or contact-gated
- **Full Bio/Background**: Dedicated about page

## Design Considerations
- **Scroll Flow**: Each section should naturally lead to the next
- **Viewport Sizing**: Each section roughly 80-100vh for natural scrolling
- **Visual Breaks**: Clear section delineation without jarring breaks
- **Mobile Optimization**: Stack vertically with maintained hierarchy
- **Loading Performance**: Optimize images and animations for scroll performance

## Implementation Notes
- Use Jekyll's include system for modular section management
- Apply consistent wave theme styling across all sections
- Implement scroll-triggered animations for engagement
- Ensure each section works independently (for future A/B testing)

## Success Metrics
- **Scroll Depth**: Track how far users scroll
- **Section Engagement**: Time spent in each section
- **CTA Performance**: Conversion rates on different CTAs
- **Bounce Rate**: Ensure long-form doesn't increase bounces

## Technical Requirements
- **Jekyll Structure**: Use `_includes/` for each section
- **Wave Theme**: Consistent styling with existing hero section
- **Responsive**: Mobile-first approach for scroll experience
- **Performance**: Lazy loading for non-critical content
- **SEO**: Proper heading hierarchy and semantic markup