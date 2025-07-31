# Wave-Inspired Professional Theme Documentation

## Overview

This custom Jekyll theme creates a professional, wave-inspired design for the Far-Fetched Advisory and Consulting website. The theme features subtle wave patterns reminiscent of icy bars on swell maps, using a sophisticated blue and ice color palette that maintains professionalism while adding visual interest.

## Design Philosophy

The theme evokes the subtle, flowing qualities of ice and water while using bold, professional colors to elevate the site's visual impact. It maintains subtlety to avoid excessive distraction while reinforcing the site's connection to oceanic data and professional identity.

## Color Palette

The theme uses a carefully selected color palette inspired by ice and water:

- **Wave Primary** (`#1a5490`): Deep ocean blue - used for headings and primary elements
- **Wave Secondary** (`#2e86ab`): Swell blue - used for links and accent elements  
- **Wave Accent** (`#a23b72`): Deep ice purple - used for visited links and gradients
- **Wave Light** (`#f18f01`): Warm accent - used for hover states
- **Wave Ice** (`#f0f8ff`): Alice blue - used for backgrounds and light elements
- **Wave Frost** (`#e8f4f8`): Frost blue - used for gradient backgrounds
- **Wave Deep** (`#0a2f5c`): Deep water - used for footer and dark elements

## Key Features

### 1. Wave Elements
- Subtle isobar patterns in backgrounds
- CSS-only

### 2. Professional Typography
- All headings use the wave primary color
- Accent lines under headings for visual hierarchy
- Custom link styling with animated underlines
- Very bold sans-serif typeface for approachability

### 3. Content Cards
- Semi-transparent white content areas with backdrop blur
- Subtle shadows and rounded corners

### 4. Custom List Styling
- Consistent spacing and alignment

### 5. Responsive Design
- Mobile-optimized layouts
- Scalable wave elements
- Adaptive animations for different screen sizes

## File Structure

```
docs/
├── assets/
│   └── main.scss                 # Main stylesheet entry point
├── _sass/
│   └── minima/
│       └── wave-theme.scss       # Wave theme implementation
└── _config_local.yml            # Local development configuration
```

## Implementation Details

### Main Stylesheet (`assets/main.scss`)
- Defines the color variables
- Overrides Minima theme defaults
- Imports the wave theme styles

### Wave Theme (`_sass/minima/wave-theme.scss`)
- Contains all wave-specific styling
- Includes animations and responsive breakpoints
- Implements the visual effects and patterns

## Customization

### Adjusting Colors
To modify the color scheme, edit the variables in `assets/main.scss`:

```scss
$wave-primary: #1a5490;      // Change primary color
$wave-secondary: #2e86ab;    // Change secondary color
// ... etc
```

### Modifying Animations
Wave animations can be adjusted in `_sass/minima/wave-theme.scss`:

```scss
@keyframes gentle-wave {
  // Modify animation timing and effects
}
```

### Responsive Breakpoints
The theme includes responsive styles for different screen sizes:
- Mobile: `max-width: 600px`
- Large screens: `min-width: 1200px`

## Browser Compatibility

The theme uses modern CSS features including:
- CSS Custom Properties (CSS Variables)
- CSS Grid and Flexbox
- CSS Animations and Transforms
- Backdrop Filters (with fallbacks)

Supported browsers:
- Chrome 88+
- Firefox 94+
- Safari 14+
- Edge 88+

## Performance Considerations

- All animations are CSS-based for optimal performance
- Uses hardware acceleration where possible
- Minimal impact on page load times
- Graceful degradation for older browsers

## Maintenance

### Regular Updates
- Monitor for Jekyll and Minima theme updates
- Test theme compatibility with new versions
- Update color palette as needed for brand evolution

### Testing Checklist
- [ ] Desktop layout and animations
- [ ] Mobile responsiveness
- [ ] Link hover states
- [ ] Animation performance
- [ ] Cross-browser compatibility
- [ ] Accessibility compliance

## Accessibility

The theme maintains accessibility standards:
- Sufficient color contrast ratios
- Focus indicators for keyboard navigation
- Screen reader compatible markup
- Reduced motion preferences respected

## Future Enhancements

Potential improvements for future versions:
- Dark mode support
- Additional animation options
- More wave pattern variations
- Enhanced mobile interactions
- Performance optimizations