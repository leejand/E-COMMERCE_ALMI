---
name: Almi
colors:
  surface: '#fcf9f8'
  surface-dim: '#dcd9d9'
  surface-bright: '#fcf9f8'
  surface-container-lowest: '#ffffff'
  surface-container-low: '#f6f3f2'
  surface-container: '#f0eded'
  surface-container-high: '#eae7e7'
  surface-container-highest: '#e5e2e1'
  on-surface: '#1c1b1b'
  on-surface-variant: '#434653'
  inverse-surface: '#313030'
  inverse-on-surface: '#f3f0ef'
  outline: '#737685'
  outline-variant: '#c3c6d6'
  surface-tint: '#2156ca'
  primary: '#00328a'
  on-primary: '#ffffff'
  primary-container: '#0047bb'
  on-primary-container: '#afc1ff'
  inverse-primary: '#b3c5ff'
  secondary: '#5f5e58'
  on-secondary: '#ffffff'
  secondary-container: '#e5e2da'
  on-secondary-container: '#65645e'
  tertiary: '#6c1f00'
  on-tertiary: '#ffffff'
  tertiary-container: '#932d00'
  on-tertiary-container: '#ffb096'
  error: '#ba1a1a'
  on-error: '#ffffff'
  error-container: '#ffdad6'
  on-error-container: '#93000a'
  primary-fixed: '#dbe1ff'
  primary-fixed-dim: '#b3c5ff'
  on-primary-fixed: '#00174a'
  on-primary-fixed-variant: '#003ea6'
  secondary-fixed: '#e5e2da'
  secondary-fixed-dim: '#c9c6bf'
  on-secondary-fixed: '#1c1c17'
  on-secondary-fixed-variant: '#474741'
  tertiary-fixed: '#ffdbcf'
  tertiary-fixed-dim: '#ffb59c'
  on-tertiary-fixed: '#390c00'
  on-tertiary-fixed-variant: '#832700'
  background: '#fcf9f8'
  on-background: '#1c1b1b'
  surface-variant: '#e5e2e1'
typography:
  display-lg:
    fontFamily: Montserrat
    fontSize: 72px
    fontWeight: '700'
    lineHeight: 80px
    letterSpacing: -0.02em
  headline-lg:
    fontFamily: Montserrat
    fontSize: 48px
    fontWeight: '700'
    lineHeight: 56px
    letterSpacing: -0.01em
  headline-lg-mobile:
    fontFamily: Montserrat
    fontSize: 32px
    fontWeight: '700'
    lineHeight: 40px
  headline-md:
    fontFamily: Montserrat
    fontSize: 32px
    fontWeight: '600'
    lineHeight: 40px
  body-lg:
    fontFamily: Inter
    fontSize: 18px
    fontWeight: '400'
    lineHeight: 28px
  body-md:
    fontFamily: Inter
    fontSize: 16px
    fontWeight: '400'
    lineHeight: 24px
  label-bold:
    fontFamily: Inter
    fontSize: 14px
    fontWeight: '600'
    lineHeight: 20px
    letterSpacing: 0.05em
  label-sm:
    fontFamily: Inter
    fontSize: 12px
    fontWeight: '500'
    lineHeight: 16px
rounded:
  sm: 0.125rem
  DEFAULT: 0.25rem
  md: 0.375rem
  lg: 0.5rem
  xl: 0.75rem
  full: 9999px
spacing:
  base: 8px
  container-max: 1440px
  gutter: 24px
  margin-desktop: 64px
  margin-mobile: 20px
  section-gap: 120px
---

## Brand & Style

The design system for this tech e-commerce platform is built upon a "High-Contrast Minimalist" aesthetic. It targets a youthful, tech-savvy audience that values both performance and lifestyle aesthetics. The personality is energetic yet disciplined, blending the raw impact of Brutalism with the sophisticated restraint of modern minimalism.

Key attributes include:
- **Energetic Professionalism:** Using high-chroma primary colors against neutral backdrops.
- **Spacious Luxury:** Generous white space that treats tech products like art pieces.
- **Modern Edge:** Sharp layouts, bold type scales, and high-quality photography with clinical lighting.

## Colors

The palette is anchored by a high-intensity **Deep Blue** that provides a digital-first energy. This is balanced by **Bone/Off-white**, which softens the interface and provides a premium, lifestyle feel compared to pure white. 

- **Primary (Deep Blue):** Used for primary actions, highlight states, and brand moments.
- **Secondary (Bone):** Used for large surface areas, section backgrounds, and container fills to reduce eye strain and add warmth.
- **Accent (Deep Black):** For high-contrast typography and structural elements.
- **Functional Grays:** Subtle tones used for borders and secondary text to maintain the minimalist hierarchy.

## Typography

The typography system utilizes a dual-sans approach to balance impact with legibility. 

**Montserrat** is the display face, chosen for its geometric strength and architectural feel. It should be used for headlines and hero sections, often set with tight letter-spacing to enhance its "modern tech" vibe.

**Inter** serves as the workhorse for body copy and UI elements. Its high x-height and neutral character ensure maximum readability for product descriptions and technical specifications. 

Large-scale typography is a core design element; don't be afraid to let headlines dominate the screen real estate in hero modules.

## Layout & Spacing

The layout follows a **Rigid Fluid Grid** philosophy. While the grid stretches to fit the viewport, the margins and gutters remain generous to maintain the premium feel.

- **Desktop (1440px+):** 12-column grid, 64px outside margins, 24px gutters.
- **Tablet (768px - 1439px):** 8-column grid, 40px outside margins, 20px gutters.
- **Mobile (Up to 767px):** 4-column grid, 20px outside margins, 16px gutters.

Spacing follows an 8px base unit. Section vertical spacing should be aggressive (120px+) to allow the high-quality product photography to "breathe" without competing with text blocks.

## Elevation & Depth

This design system avoids traditional shadows in favor of **Tonal Layering** and **High-Contrast Outlines**.

Depth is created by:
1.  **Color Blocking:** Placing pure white cards or Deep Blue elements on the Secondary Bone background.
2.  **Hard Strokes:** Using 1px or 2px solid borders (#E5E5E5) to define containers rather than soft blurs.
3.  **Product Cutouts:** Using "floating" PNG product images with no shadows, relying on the contrast between the product and the Bone-colored container to provide presence.

This approach reinforces the minimalist, digital-first aesthetic of the brand.

## Shapes

The shape language is "Soft-Geometric." We use subtle rounding (0.25rem / 4px) to take the "sting" off the sharp edges of technology, making the interface feel approachable without sacrificing its modern, structural integrity.

- **Primary Buttons:** Subtle 4px radius.
- **Product Cards:** Subtle 8px radius (`rounded-lg`).
- **Interactive Inputs:** 4px radius.
- **Badges/Chips:** Pill-shaped (fully rounded) to contrast against the otherwise rectangular UI.

## Components

### Buttons
- **Primary:** Deep Blue background, Bone text, Montserrat Bold. High-contrast, no shadow.
- **Secondary:** Bone background, Deep Blue text, 1px Deep Blue border.
- **Ghost:** Transparent background, Black text, 1px Black border.

### Product Cards
Cards use a Bone (#F5F2EA) background with no border. Product images should be centered with a minimum of 32px internal padding. Titles are set in Montserrat Bold, prices in Inter Medium.

### Input Fields
Inputs use a white background with a 1px Light Gray border. On focus, the border transitions to 2px Deep Blue. Labels are set in `label-bold` above the field.

### Chips & Tags
Used for "New Arrival" or "In Stock" indicators. These are pill-shaped with high-contrast color pairings (e.g., Deep Blue background with Bone text).

### Navigation
The header is minimalist and transparent, transitioning to Bone on scroll. Links are Inter Medium with a 2px Deep Blue underline animation on hover.