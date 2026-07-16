---
topic: "Company Logo Collection & Integration Task"
depends_on: "hero-value-proposition.prompt.md, homepage-content-structure.prompt.md, theme.prompt.md, copilot-instructions.md, jesse-cv.prompt.md"
status: ready
mode: agent
---

# Company Logo Collection & Integration Task

## Task Overview
Collect high-quality logos from companies in Jesse Cary's professional network to create impactful visual content that demonstrates industry credibility and establishes trust with potential clients in the iGaming and regulated digital platform sectors.

## Primary Objectives

### 1. LinkedIn Profile Analysis
- Extract Jesse Cary's complete employment history from LinkedIn profile: https://www.linkedin.com/in/jessecary and use jesse-cv.prompt.md as a fallback reference.
- Identify all companies where Jesse has worked (current and previous positions)
- Document company names, industry sectors, and relationship context (employer, client, partner)

### 2. Company Website Analysis
For each company identified from LinkedIn:
- Visit the official company website
- Locate and extract high-resolution company logos (preferably SVG or PNG with transparent backgrounds)
- Scan for "Partners", "Clients", "Case Studies", or "About" sections that list other companies
- Extract client/partner company names and relationships

### 3. Extended Network Mapping
For each client/partner company discovered:
- Visit their official websites
- Extract their company logos
- Perform one additional level of relationship mapping (partners of partners) if relevant to iGaming/fintech sectors
- Focus on well-known brands that would enhance credibility

### 4. Logo Collection & Organization
- Download logos in multiple formats: SVG (preferred), PNG with transparent background, high-res JPG as fallback
- Save all logos to: `/docs/assets/company-logos/`
- Use consistent naming convention: `[company-name]-logo.[ext]` (lowercase, hyphenated)
- Create subdirectories: `direct-employers/`, `clients/`, `partners/`, `industry-leaders/`

## Specific Requirements

### Quality Standards
- Minimum resolution: 300x300px for raster images
- Prefer vector formats (SVG) for scalability
- Prefer square aspect ratio for consistency
- Transparent backgrounds where possible
- Official brand assets only (no fan-made or unofficial versions)

### Industry Focus
Prioritize companies in these sectors:
1. **iGaming & Online Gaming** (highest priority)
4. **Regulatory Technology**
3. **E-commerce & Digital Platforms**
5. **Enterprise SaaS & Platform Companies**
2. **Fintech & Financial Services**

### Brand Recognition Levels
- **Tier 1**: Globally recognized brands (Google, Microsoft, major gaming operators)
- **Tier 2**: Industry leaders within iGaming/fintech sectors
- **Tier 3**: Regional players and specialized platform companies

## Technical Constraints

### Legal & Compliance
- Only collect logos from public websites
- Do not generate logos
- Document source URLs for attribution if required

### File Management
- Maximum file size: 2MB per logo
- Supported formats: SVG, PNG, JPG (in order of preference)
- Organize by relationship type and industry relevance
- Create manifest file listing all collected logos with metadata

### Website Integration
- Logos should be suitable for "Trust Signals" section of homepage
- Consider both light and dark variants where available
- Ensure logos work well against wave theme backgrounds

## Success Criteria

### Quantitative Goals
- Collect minimum 20 high-quality company logos
- At least 5 Tier 1 globally recognized brands
- At least 10 iGaming/fintech industry-specific companies
- 80% of logos in SVG or PNG with transparency

### Qualitative Standards
- Logos enhance perceived credibility and industry expertise
- Visual consistency with professional website design
- Clear connection to Jesse's professional background
- Strong representation of iGaming sector expertise

### Deliverables
1. **Logo Assets**: Organized collection in `/docs/assets/company-logos/`
2. **Metadata File**: JSON/YAML file with company details, relationships, and attribution
3. **Integration Recommendations**: Suggested placement and sizing for website use
4. **Legal Review**: Documentation of source URLs and usage rights assessment

## Implementation Notes

### Data Sources Priority
1. Jesse's LinkedIn profile (primary employment history)
2. Company "About Us" and "Partners" pages
3. Case study sections and client testimonials
4. Industry conference sponsor/participant lists
5. Press releases and partnership announcements

### Fallback Strategies
- If direct logo download fails, document company name and manual collection needed
- For companies without clear logos, use company name typography as fallback
- Focus on most recognizable brands if collection becomes too extensive

### Integration Planning
- Consider carousel/grid display for homepage trust signals
- Plan for responsive design across mobile/desktop
- Ensure fast loading with optimized file sizes
- Implement lazy loading for large logo collections

## Validation Checklist
- [ ] All logos are official brand assets
- [ ] File naming follows consistent convention
- [ ] Directory structure is organized by relationship type
- [ ] Metadata file includes source attribution
- [ ] Images are optimized for web use
- [ ] Legal usage rights are documented
- [ ] Visual quality meets professional standards
- [ ] Collection represents Jesse's industry expertise effectively