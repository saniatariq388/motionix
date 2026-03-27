# hover-icons - Project Summary

## Project Overview

A Next.js 16 icon library showcasing motion variants with live customization. Built with TypeScript, Tailwind CSS v4, framer-motion, and lucide-react.

**Dev Server:** http://localhost:3000

---

## Setup Completed

- **Framework:** Next.js 16.2.1 with App Router
- **Language:** TypeScript
- **Styling:** Tailwind CSS v4
- **Directory:** src/ structure enabled
- **Dependencies:** framer-motion, lucide-react, next-themes
- **UI Components:** shadcn/ui initialized with default config
- **Node.js:** v22.18.0 (minimum required: 20.9)

---

## File Structure

```
hover-icons/
└── src/
    ├── app/
    │   ├── globals.css       # Theme CSS variables, grid pattern, slider styles
    │   ├── layout.tsx        # ThemeProvider, Inter font, suppressHydrationWarning
    │   └── page.tsx          # Navbar, Hero section, Playground section
    └── components/
        ├── ThemeToggle.tsx   # Sun/Moon icon toggle with AnimatePresence
        ├── IconPlayground.tsx # Main controls + icon cards grid
        └── icons/
            ├── index.ts      # Exports all icons and types
            ├── types.ts      # MotionVariant, IconProps types
            ├── BellIcon.tsx  # Bell icon with 4 motion variants
            ├── HeartIcon.tsx # Heart icon with 4 motion variants
            └── StarIcon.tsx  # Star icon with 4 motion variants
```

---

## Theme System (next-themes)

### CSS Variables in globals.css

**Light Theme (:root):**
- `--background: #f0f0f0`
- `--foreground: #111111`
- `--card-bg: #ffffff`
- `--controls-bg: #ffffff`
- `--border-color: rgba(0,0,0,0.1)`
- `--text-muted: #777777`
- `--grid-line: rgba(0,0,0,0.035)`
- `--shadow: 0 2px 12px rgba(0,0,0,0.07)`
- `--card-hover-bg: #f9f9f9`
- `--indigo: #6366f1`
- `--indigo-hover: #4f46e5`

**Dark Theme (.dark):**
- `--background: #080808`
- `--foreground: #ffffff`
- `--card-bg: #161616`
- `--controls-bg: #161616`
- `--border-color: rgba(255,255,255,0.12)`
- `--text-muted: #888888`
- `--grid-line: rgba(255,255,255,0.03)`
- `--shadow: 0 2px 16px rgba(0,0,0,0.6)`
- `--card-hover-bg: #1c1c1c`

### ThemeToggle Component
- Sun icon shows in dark mode
- Moon icon shows in light mode
- AnimatePresence with rotate animation on swap
- Hydration mismatch fixed with mounted state

---

## Motion Variants (4 Total)

All variants defined in each icon component with useAnimationControls for "pop":

### 1. Ease
- Smooth, calm motion
- Duration: 0.6s, ease: easeInOut
- Bell: rotate [0, -8, 8, 0]
- Heart: scale [1, 1.08, 1]
- Star: rotate [0, 45, 0]

### 2. Bounce
- Spring-like, fun energy
- Duration: 0.6s, ease: easeInOut
- Bell: rotate [0, -25, 25, -25, 25, 0] + scale [1, 1.2, 1]
- Heart: scale [1, 1.5, 0.8, 1.2, 1]
- Star: rotate 360 + scale [1, 1.3, 1]

### 3. Float
- Gentle top-to-bottom bobbing
- Duration: 0.6s, ease: easeInOut, times: [0, 0.3, 0.6, 0.8, 1]
- All icons: y [0, -12, 0, 4, 0]

### 4. Pop
- Appear & disappear effect
- Uses useAnimationControls for sequential animation
- Phase 1: scale 0, opacity 0, duration 0.35s, ease: easeIn
- Pause: 80ms
- Phase 2: scale [0, 1.25, 1], opacity [0, 1, 1], duration 0.45s, ease: easeOut
- Star includes rotation: 0→180→360 degrees

---

## IconPlayground Component

### Layout (Two Columns Desktop)
- **Controls Panel (Left):** 380px fixed width, sticky at top: 80px
- **Icons Grid (Right):** 3 columns, flexible width
- **Mobile:** Single column, icons grid becomes 2 columns

### Controls Panel Sections
1. **SIZE** - Range slider 16-96px, default 40px, value badge in indigo
2. **STROKE COLOR** - Color picker with swatch and hex value (monospace)
3. **HOVER COLOR** - Color picker with swatch and hex value (monospace)
4. **FILL ON HOVER** - Toggle switch (44x24px, white thumb, indigo when ON)
5. **ANIMATION STYLE** - 4 pills (Ease, Bounce, Float, Pop) with description below

### Icon Cards
- Min-height: 140px, max-height: 160px
- Background: var(--card-bg)
- Border: 1px solid var(--border-color)
- Box-shadow: var(--shadow)
- Border-radius: 16px
- Hover: indigo border + glow shadow + card-hover-bg
- Icon name below: 13px, 600 weight, text-muted color

---

## Page Layout (page.tsx)

### Fixed Navbar
- Height: 56px (h-14)
- Background: var(--background)/80 with backdrop-blur-md
- Border-bottom: var(--border-color)
- Logo: "hover-icons" 18px, 800 weight, indigo color
- Right side: ThemeToggle + GitHub button

### Hero Section
- Padding: 140px top, 100px bottom
- Badge: "Open Source Icon Library" with indigo dot
- Heading: clamp(42px, 6vw, 72px), 800 weight, -0.03em letter-spacing
- Gradient text: "with intent" (indigo to purple)
- Subtext: 18px, 1.6 line-height, text-muted
- Buttons: "Browse Icons" (filled), "View on GitHub" (outline)
- Radial glow: 600x400px, indigo gradient, behind content

### Playground Section
- Section title: 40px, 800 weight, -0.03em letter-spacing
- Subtitle: 16px, 500 weight, text-muted
- Renders IconPlayground component

---

## Typography System

### globals.css Base
```css
body {
  font-weight: 400;
  -webkit-font-smoothing: antialiased;
  -moz-osx-font-smoothing: grayscale;
}
```

### Font Sizes & Weights
- Hero heading: clamp(42px, 6vw, 72px), 800 weight
- Section title: 40px, 800 weight
- Navbar logo: 18px, 800 weight
- Subtitle: 16px, 500 weight
- Hero subtext: 18px, 400 weight
- Control labels: 11px, 700 weight, 0.1em letter-spacing, uppercase
- Size value: 13px, 700 weight, indigo color
- Hex values: 13px, 600 weight, monospace
- Fill label: 13px, 600 weight
- Variant pills: 13px, 600 weight
- Variant description: 12px, 500 weight, italic
- Icon names: 13px, 600 weight

---

## Key Implementation Details

### useAnimationControls for Pop Variant
```tsx
const controls = useAnimation();

const handleHoverStart = async () => {
  if (variant === "pop") {
    await controls.start({ scale: 0, opacity: 0, duration: 0.35, ease: "easeIn" });
    await new Promise(r => setTimeout(r, 80));
    await controls.start({ scale: [0, 1.25, 1], opacity: [0, 1, 1], duration: 0.45, ease: "easeOut" });
  }
};

const handleHoverEnd = async () => {
  if (variant === "pop") {
    await controls.start({ scale: 1, opacity: 1, duration: 0.2 });
  }
};
```

### CSS-in-JS Styles
- Most styling done via inline style props for precise control
- CSS variables used throughout for theme consistency
- Custom CSS in `<style>` tags for responsive grid layouts

### Responsive Breakpoints
- Desktop: lg (1024px+) - two column layout
- Tablet/Mobile: below 768px - single column, 2-column icon grid

---

## Commands Reference

```bash
# Start dev server
npm run dev

# TypeScript check
npx tsc --noEmit

# Build
npm run build

# Install new dependency
npm install <package>
```

---

## Known Patterns Used

1. **Theme-aware styling:** All colors use CSS variables (var(--name))
2. **Hover handlers:** onMouseEnter/onMouseLeave for card hover effects
3. **Sticky controls:** position: sticky with top offset
4. **CSS Grid:** Two-column desktop, single-column mobile
5. **Framer Motion:** useAnimation for pop variant, AnimatePresence for theme toggle
6. **Hydration fix:** mounted state check in ThemeToggle
7. **Font smoothing:** Applied globally in body styles

---

## Testing Checklist

- [ ] Theme toggle switches between light/dark
- [ ] All 4 variants animate correctly on hover
- [ ] Size slider updates icon size live
- [ ] Color pickers update stroke/hover colors
- [ ] Fill toggle works (indigo fill on hover when ON)
- [ ] Cards have hover glow effect
- [ ] Layout responsive on mobile
- [ ] No TypeScript errors
- [ ] No hydration warnings

---

## Future Enhancement Notes

- Add more icons following the same pattern
- Consider adding export/copy code functionality
- Could add preset color palettes
- Could add animation duration control
- Consider adding sound effects option
