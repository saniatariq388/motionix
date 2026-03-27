# motionix

> Icons that move with intent.

Animated React icon components with 4 motion variants per icon. Built with Framer Motion and Lucide React. Fully customizable and copy-paste ready.

![MIT License](https://img.shields.io/badge/license-MIT-green)
![npm version](https://img.shields.io/npm/v/motionix)
![TypeScript](https://img.shields.io/badge/TypeScript-Ready-blue)

---

## Features

- 10 animated icons out of the box
- 4 motion variants per icon: Ease, Bounce, Float, Pop
- Fully customizable: size, color, hover color, fill
- Built with Framer Motion
- TypeScript support
- MIT Licensed — free for personal and commercial use

---

## Installation

```bash
npm install motionix framer-motion lucide-react
```

or with pnpm:

```bash
pnpm add hover-icons framer-motion lucide-react
```

---

## Usage

```tsx
import { BellIcon, HeartIcon, StarIcon } from "motionix"

export default function App() {
  return (
    <div>
      {/* Default - ease variant */}
      <BellIcon />

      {/* Playful bounce */}
      <HeartIcon variant="bounce" />

      {/* Custom colors */}
      <StarIcon
        variant="pop"
        size={32}
        color="#888888"
        hoverColor="#f59e0b"
        fillOnHover={true}
      />
    </div>
  )
}
```

---

## Available Icons

| Icon       | Component      | Default Hover Color    |
|------------|----------------|------------------------|
| Bell       | BellIcon       | Blue #3b82f6           |
| Heart      | HeartIcon      | Red #ef4444            |
| Star       | StarIcon       | Yellow #eab308         |
| Trash      | TrashIcon      | Red #ef4444            |
| Search     | SearchIcon     | Indigo #6366f1         |
| Sun        | SunMoonIcon    | Amber #f59e0b          |
| Download   | DownloadIcon   | Green #10b981          |
| Send       | SendIcon       | Indigo #6366f1         |
| Loader     | LoaderIcon     | Indigo #6366f1         |
| Bookmark   | BookmarkIcon   | Amber #f59e0b          |

---

## Props

| Prop          | Type                      | Default        | Description              |
|---------------|---------------------------|----------------|--------------------------|
| variant       | ease/bounce/float/pop     | ease           | Animation style          |
| size          | number                    | 24             | Icon size in px          |
| color         | string                    | currentColor   | Stroke color             |
| hoverColor    | string                    | per icon       | Color on hover           |
| fillOnHover   | boolean                   | true           | Fill icon on hover       |
| className     | string                    | undefined      | Custom class             |

---

## Motion Variants

- **Ease** — Smooth and calm motion
- **Bounce** — Spring and fun energy
- **Float** — Gentle top to bottom bob
- **Pop** — Appear and disappear effect

---

## Credits

SVG icons based on [Lucide React](https://lucide.dev) (MIT License)

Animations are original work by motionix.

Built with:
- [Framer Motion](https://www.framer.com/motion/)
- [Lucide React](https://lucide.dev)
- [Next.js](https://nextjs.org)
- [Tailwind CSS](https://tailwindcss.com)

---

## License

MIT License — see LICENSE file for details.

Free to use in personal and commercial projects.
