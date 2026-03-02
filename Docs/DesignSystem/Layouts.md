# Layouts

> The dashboard uses a sidebar + main content layout with responsive grid for content areas.

## Overall Layout

```
┌──────┬──────────────────────────────────────────────┐
│      │  Header (blue bar with nav tabs)             │
│  S   ├──────────────────────────────────────────────┤
│  I   │  KPI Cards Row (7 cards, horizontal scroll)  │
│  D   ├──────────────────────┬───────────────────────┤
│  E   │                      │  Forecast Tuner       │
│  B   │  Revenue vs Expenses │  (sliders + snapshot) │
│  A   │  + Small charts      │                       │
│  R   ├──────────────────────┤───────────────────────┤
│      │  Cash Flow Area      │  Cash Flow Tuner      │
│      │  + Small charts      │  (sliders + snapshot) │
└──────┴──────────────────────┴───────────────────────┘
```

## Layout Structure

### 1. Root Layout (`DashboardLayout.vue`)

- **Sidebar**: Fixed left, `w-16` (64px), `z-40`
- **Content Area**: `lg:ml-16` pushes content right on desktop
- **Flex column** for header + main stacking

### 2. Content Grid (`DashboardView.vue`)

- **KPI Row**: `flex gap-3 overflow-x-auto` — horizontal scroll on overflow
- **Main Grid**: `grid grid-cols-1 xl:grid-cols-[1fr_380px] gap-4`
  - Left column: Charts
  - Right column (380px): Tuner panels

### 3. Charts Sub-Grid

Each chart section uses: `grid grid-cols-1 lg:grid-cols-[1fr_280px] gap-4`

- Left: Main chart (bar or area)
- Right (280px): Two small charts stacked vertically

## Responsive Breakpoints

| Breakpoint      | Tailwind Prefix | Layout Changes                                    |
| --------------- | --------------- | ------------------------------------------------- |
| < 768px         | (default)       | Single column, sidebar hidden, simplified header  |
| 768px – 1023px  | `md:`           | Nav tabs visible, date badge visible              |
| 1024px – 1279px | `lg:`           | Sidebar visible, chart sub-grid active            |
| 1280px+         | `xl:`           | Full 2-column grid (charts + panels side by side) |

## Grid Specifications

| Grid                   | Template                | Gap               |
| ---------------------- | ----------------------- | ----------------- |
| Main (charts + panels) | `grid-cols-[1fr_380px]` | `gap-4`           |
| Chart section          | `grid-cols-[1fr_280px]` | `gap-4`           |
| Forecast sliders       | `grid-cols-2`           | `gap-x-4 gap-y-3` |
| Cash flow sliders      | `grid-cols-3`           | `gap-x-4 gap-y-3` |
| Snapshot table         | `grid-cols-4`           | `gap-2`           |
