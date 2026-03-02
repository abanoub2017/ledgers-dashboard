# Color System

> All colors are defined as CSS theme variables in `src/assets/styles/main.css` using Tailwind CSS v4 `@theme` directive.

## Primary Colors (Blue)

| Token                 | Hex       | Tailwind Class   | Usage                                        |
| --------------------- | --------- | ---------------- | -------------------------------------------- |
| `--color-primary-50`  | `#eff6ff` | `bg-primary-50`  | Hover backgrounds, light fills               |
| `--color-primary-100` | `#dbeafe` | `bg-primary-100` | Snapshot panel backgrounds                   |
| `--color-primary-200` | `#bfdbfe` | `bg-primary-200` | Subtitle text in header                      |
| `--color-primary-300` | `#93c5fd` | `bg-primary-300` | Disabled states                              |
| `--color-primary-400` | `#60a5fa` | `bg-primary-400` | Logo accent dot, chart bars                  |
| `--color-primary-500` | `#3b82f6` | `bg-primary-500` | Header background, active nav, chart primary |
| `--color-primary-600` | `#2563eb` | `bg-primary-600` | Active nav pill, notification bar            |
| `--color-primary-700` | `#1d4ed8` | `bg-primary-700` | Deep accent                                  |
| `--color-primary-800` | `#1e40af` | `bg-primary-800` | —                                            |
| `--color-primary-900` | `#1e3a5f` | `bg-primary-900` | —                                            |

## Accent Colors

| Token                   | Hex       | Tailwind Class       | Usage                                 |
| ----------------------- | --------- | -------------------- | ------------------------------------- |
| `--color-accent-pink`   | `#ec4899` | `text-accent-pink`   | Chart bars (Revenue), area fills      |
| `--color-accent-green`  | `#22c55e` | `text-accent-green`  | Positive KPI changes                  |
| `--color-accent-red`    | `#ef4444` | `text-accent-red`    | Negative KPI changes, snapshot arrows |
| `--color-accent-orange` | `#f97316` | `text-accent-orange` | Warning states                        |

## Surface Colors

| Token                     | Hex       | Tailwind Class       | Usage              |
| ------------------------- | --------- | -------------------- | ------------------ |
| `--color-surface-page`    | `#e8f0fe` | `bg-surface-page`    | Page background    |
| `--color-surface-card`    | `#ffffff` | `bg-surface-card`    | Card backgrounds   |
| `--color-surface-sidebar` | `#1a2b4a` | — (inline style)     | Sidebar background |
| `--color-surface-header`  | `#3b82f6` | — (uses primary-500) | Header background  |

## Text Colors

| Token                    | Hex       | Tailwind Class        | Usage                    |
| ------------------------ | --------- | --------------------- | ------------------------ |
| `--color-text-primary`   | `#1e293b` | `text-text-primary`   | Headings, card values    |
| `--color-text-secondary` | `#64748b` | `text-text-secondary` | Labels, descriptions     |
| `--color-text-muted`     | `#94a3b8` | `text-text-muted`     | Axis labels, subtitles   |
| `--color-text-white`     | `#ffffff` | `text-text-white`     | On blue/dark backgrounds |

## Usage Rules

1. **Never use raw hex values** — always use the defined token classes
2. **Positive changes** → `text-accent-green`
3. **Negative changes** → `text-accent-red`
4. **Chart primary bar** → `#3b82f6` (blue)
5. **Chart secondary bar** → `#ec4899` (pink)
6. **Card backgrounds** → `bg-white` with `border border-gray-100`
