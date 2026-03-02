# Ledgers Dashboard

> A responsive analytics dashboard built with Vue 3, TypeScript, Vite, Tailwind CSS v4, and PrimeVue v4.

## Overview

Ledgers Dashboard is a pixel-accurate financial analytics dashboard implementation. It features KPI cards, interactive charts, AI-powered insight panels, and tuner components with real-time slider controls.

### Tech Stack

| Technology   | Version | Purpose                                                          |
| ------------ | ------- | ---------------------------------------------------------------- |
| Vue 3        | 3.5.x   | UI framework (Composition API + `<script setup>`)                |
| TypeScript   | 5.9.x   | Type safety                                                      |
| Vite         | 7.x     | Build tool + dev server                                          |
| Tailwind CSS | 4.2.x   | Utility-first CSS (CSS-first config, `@tailwindcss/vite` plugin) |
| PrimeVue     | 4.5.x   | Chart + Slider components (Aura theme)                           |
| Chart.js     | 4.5.x   | Chart rendering engine (via PrimeVue Chart wrapper)              |

### Key Differences: Tailwind CSS v4

- **No `tailwind.config.js`** — all configuration is CSS-first using `@theme` in `src/assets/styles/main.css`
- **No `postcss.config.js`** — uses `@tailwindcss/vite` plugin directly
- **CSS `@import "tailwindcss"`** instead of `@tailwind base/components/utilities` directives
- **Design tokens** defined via `@theme { --color-*, --font-*, --spacing-* }`

## Setup Instructions

```bash
# Clone the repository
git clone <repo-url>
cd ledgers-dashboard

# Install dependencies
npm install

# Start development server
npm run dev

# Build for production
npm run build

# Preview production build
npm run preview
```

## Development Workflow

1. **Read the Design System** — Check `Docs/StyleGuide/` and `Docs/DesignSystem/` before building any component
2. **Check Task Template** — Read `Docs/Tasks/Template.md` before starting any new task
3. **Follow Architecture** — See `Docs/Architecture/` for folder structure and naming conventions
4. **Build Component** — Create in the appropriate `src/components/` subdirectory
5. **Add Types** — Define interfaces in `src/types/dashboard.ts`
6. **Use Mock Data** — Add data to `src/data/mockData.ts`
7. **Test Responsive** — Verify at 1440px, 768px, and 375px breakpoints

## How to Use the Design System

All design tokens are defined in `src/assets/styles/main.css` under `@theme`:

```css
/* Use in Tailwind classes */
<div class="bg-primary-500 text-text-primary rounded-xl p-4">

/* Use as CSS variables */
background-color: var(--color-primary-500);
```

See `Docs/StyleGuide/Colors.md` for the full color palette.

## How to Use the Component Architecture

Components are organized by domain:

```
src/components/
├── layout/      → App shell (sidebar, header, layout wrapper)
├── cards/       → Data display cards (KPI)
├── charts/      → Chart components (PrimeVue Chart wrappers)
├── panels/      → Interactive panels (tuners, snapshots)
└── ui/          → Shared UI primitives (sliders, buttons, insights)
```

Import with the `@` alias: `import KpiCard from '@/components/cards/KpiCard.vue'`

## Project Plan & Progress

See `Docs/Tasks/ProjectPlan.md` for the full implementation plan and task tracking.
