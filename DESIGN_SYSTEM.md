# 🎨 Divya Website - Visual Design Showcase

## Design Aesthetic: Editorial Heritage Luxury

### Inspiration
- Premium Indian designer brand websites
- Fashion magazine editorials
- Artisan textile markets
- Heritage craftsmanship

---

## 🌈 Color System

### Primary Palette
```
Cream Family (Backgrounds)
- cream-50:  #fdfcfa  ← Lightest
- cream-100: #faf8f5  ← Primary background
- cream-200: #f5f2ed
- cream-500: #d4c9ba

Sand Family (Neutrals)
- sand-50:  #faf9f7
- sand-100: #f4f2ee
- sand-200: #e9e4dc
- sand-400: #cfc3b0

Olive Family (Text)
- olive-600: #607047
- olive-700: #4c5839
- olive-800: #3e4730
- olive-900: #343c29  ← Primary text
```

### Accent Palette
```
Rust (Primary Accent)
- rust-500: #c96949
- rust-600: #a94e32
- rust-700: #8a3f28

Maroon (Secondary Accent)
- maroon-500: #a95f58
- maroon-600: #8a423a

Sage (Tertiary Accent)
- sage-400: #97a87b
- sage-500: #7a8c5d
```

---

## 📝 Typography System

### Font Stack
```css
--font-playfair: 'Playfair Display', serif;  /* Headings */
--font-inter: 'Inter', sans-serif;           /* Body */
```

### Hierarchy
```
H1 (Hero)
- Font: Playfair Display
- Size: 5xl - 8xl (48px - 96px)
- Weight: Regular
- Tracking: 0.15em (luxury)
- Use: Hero headlines

H2 (Section Titles)
- Font: Playfair Display
- Size: 4xl - 5xl (36px - 48px)
- Weight: Regular
- Tracking: 0.1em (wide)
- Use: Major section headings

H3 (Subsections)
- Font: Playfair Display
- Size: 2xl - 3xl (24px - 30px)
- Weight: Regular
- Tracking: 0.1em
- Use: Product names, subsection titles

Body Text
- Font: Inter
- Size: base - lg (16px - 18px)
- Weight: Regular
- Line-height: 1.75 (relaxed)
- Use: Descriptions, paragraphs

Small/Labels
- Font: Inter
- Size: xs - sm (12px - 14px)
- Weight: Regular
- Tracking: 0.1em
- Transform: Uppercase
- Use: Labels, tags, navigation
```

---

## 🎭 Animation Timing

### Principles
- **Slow and deliberate** (luxury feel)
- **Smooth and fluid** (no jarring movements)
- **Purposeful** (enhance, don't distract)

### Timing Values
```css
/* Page transitions */
duration: 800ms
easing: ease-in-out

/* Hover effects */
duration: 300-500ms
easing: ease-out

/* Fade ins */
duration: 800-1000ms
delay: staggered (0.1-0.3s)
easing: ease-out

/* Image zooms */
duration: 700ms
scale: 1.05-1.1
easing: ease-out
```

---

## 📐 Spacing System

### Vertical Rhythm
```
Section padding: py-24 (96px)
Element margin: mb-8 to mb-16 (32-64px)
Grid gap: gap-8 to gap-12 (32-48px)
Card padding: p-8 to p-12 (32-48px)
```

### Layout Widths
```
max-width: 7xl (1280px) - Standard content
max-width: 4xl (896px) - Text-focused pages
max-width: 3xl (768px) - Narrow content
```

---

## 🖼️ Image Treatment

### Style Guide
```
Color Grading:
- Warm tones (+10-15 warmth)
- Muted saturation (-10%)
- Soft contrast (avoid harsh blacks)

Effects:
- Subtle film grain (opacity: 0.03)
- Soft vignette (optional)
- Natural shadows

Composition:
- Generous negative space
- Editorial framing
- Focus on textile details
```

### Aspect Ratios
```
Hero images: 16:9 (1920x1080)
Product images: 3:4 (1200x1600)
Category cards: 3:4 (1200x1600)
Craft details: 1:1 (600x600)
```

---

## 🎯 UI Components

### Product Card
```
Structure:
- Image: aspect-[3/4]
- Badges: top-left (New, Bestseller)
- Actions: top-right on hover
- Info: Product name, fabric, price

Hover State:
- Image swap (show detail image)
- Subtle zoom (scale: 1.05)
- Actions fade in
- Name color change
```

### Category Card
```
Structure:
- Full-bleed image
- Gradient overlay (bottom)
- Title: large serif
- CTA: small uppercase with arrow

Hover State:
- Image scale (1.1)
- Overlay darken
- CTA slide right
```

### Buttons
```
Primary (CTA):
- BG: olive-900
- Text: cream-50
- Hover: rust-600
- Transition: 300ms

Secondary (Outline):
- Border: olive-900 (2px)
- Text: olive-900
- Hover: fill with olive-900
- Transition: 300ms

Text Link:
- Color: olive-700
- Hover: rust-600
- Transition: 300ms
```

---

## 🎪 Layout Patterns

### Homepage Structure
```
1. Hero (full viewport height)
   - Cinematic background
   - Centered headline
   - Single CTA

2. Category Grid (3 columns)
   - Equal height cards
   - Overlay text
   - Hover effects

3. Editorial Split
   - 2 equal columns
   - Centered overlay text box
   - Full-height images

4. Craft Grid (4 columns)
   - Square aspect ratio
   - Hover darkening
   - Centered titles

5. Products Grid (3 columns)
   - Standard product cards
   - Consistent spacing

6. Story Section
   - Centered text
   - Max-width prose
   - Soft background
```

### Product Page Structure
```
1. Breadcrumb navigation
2. Two-column layout:
   - Left: Image gallery (60%)
   - Right: Product info (40%)
3. Sticky product info
4. Related products grid
```

---

## 🎨 Special Effects

### Grain Texture
```css
.grain-effect::before {
  content: '';
  position: absolute;
  background: SVG noise pattern
  opacity: 0.03
  pointer-events: none
}
```

### Backdrop Blur (Header)
```css
.header-scrolled {
  background: cream-50/95
  backdrop-blur: md
  box-shadow: subtle
}
```

### Smooth Scrolling
```css
html {
  scroll-behavior: smooth
}
```

---

## 📱 Responsive Breakpoints

### Tailwind Defaults
```
sm: 640px   - Small phones landscape
md: 768px   - Tablets
lg: 1024px  - Small laptops
xl: 1280px  - Desktop
2xl: 1536px - Large screens
```

### Grid Adaptations
```
Mobile (default): 1 column
sm: 2 columns (products, crafts)
md: 2-3 columns (categories, info)
lg: 3-4 columns (products, features)
```

---

## ✨ Micro-interactions

### Hover States
- Products: Image swap + zoom
- Categories: Zoom + overlay darken
- Buttons: Background fill
- Links: Color change
- Images: Subtle scale

### Scroll Animations
- Fade in from bottom (translateY: 30px)
- Staggered delays (0.1-0.3s)
- Appear once (viewport: { once: true })

### Loading States
- Skeleton screens (pulse animation)
- Smooth transitions
- Maintain layout

---

## 🎯 Accessibility

### Color Contrast
- All text meets WCAG AA standards
- Hover states clearly visible
- Focus states defined

### Navigation
- Keyboard accessible
- Semantic HTML
- ARIA labels where needed

### Images
- Alt text for all images
- Descriptive link text
- Logical tab order

---

## 📊 Design Tokens

### Shadows
```
sm: subtle product card shadows
md: header shadow on scroll
lg: modal/overlay shadows
```

### Borders
```
Default: sand-200
Hover: rust-500
Active: rust-600
```

### Transitions
```
Fast: 200-300ms (button hover)
Medium: 400-500ms (color changes)
Slow: 700-800ms (image effects)
```

---

## 🎬 Animation Library

### Framer Motion Variants
```javascript
fadeIn: {
  initial: { opacity: 0, y: 20 }
  animate: { opacity: 1, y: 0 }
  transition: { duration: 0.8 }
}

slowZoom: {
  animate: { scale: [1, 1.05, 1] }
  transition: { duration: 20, repeat: Infinity }
}

stagger: {
  delay: index * 0.1
}
```

---

## 🎨 Design Philosophy Summary

**Visual Weight**: Light and airy, not cluttered
**Color Treatment**: Warm and muted, never harsh
**Typography**: Elegant yet readable, generous spacing
**Imagery**: Editorial quality, textile-focused
**Interactions**: Subtle and smooth, never jarring
**Layout**: Spacious and balanced, breathable
**Overall Feel**: Premium, heritage, contemporary, artisanal

---

This design system creates a cohesive, luxurious experience that positions Divya as a premium Indian heritage wear brand while remaining modern and accessible.
