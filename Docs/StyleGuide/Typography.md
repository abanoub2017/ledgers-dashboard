# Typography

> Font: **Inter** (loaded from Google Fonts). Fallback: `ui-sans-serif, system-ui, sans-serif`.

## Font Family

```css
@theme {
  --font-sans: "Inter", ui-sans-serif, system-ui, sans-serif;
}
```

Tailwind class: `font-sans` (default, applied globally via body).

## Font Sizes

| Size | Tailwind Class    | Usage                                         |
| ---- | ----------------- | --------------------------------------------- |
| 10px | `text-[10px]`     | KPI subtitles ("vs previous month")           |
| 11px | `text-xs` (≈12px) | Chart axis labels, AI insights, slider labels |
| 12px | `text-xs`         | Small labels, nav tabs, snapshot table text   |
| 14px | `text-sm`         | Card titles, chart headers, panel titles      |
| 18px | `text-lg`         | Header title "The Essentials."                |
| 20px | `text-xl`         | KPI values                                    |
| 24px | `text-2xl`        | Logo "g."                                     |

## Font Weights

| Weight         | Tailwind Class  | Usage                                                 |
| -------------- | --------------- | ----------------------------------------------------- |
| 400 (Regular)  | `font-normal`   | Body text, descriptions, AI insight paragraphs        |
| 500 (Medium)   | `font-medium`   | Labels, slider labels, date badge, snapshot values    |
| 600 (Semibold) | `font-semibold` | Nav tabs, card titles, chart headers, panel titles    |
| 700 (Bold)     | `font-bold`     | KPI values, logo, snapshot headers, "The Essentials." |

## Line Heights

| Context                         | Tailwind Class    |
| ------------------------------- | ----------------- |
| Tight (headings, KPI values)    | `leading-tight`   |
| Normal (body text)              | `leading-normal`  |
| Relaxed (AI insight paragraphs) | `leading-relaxed` |

## Text Colors

See `Colors.md` for the full text color tokens.

## Rules

1. **Never use inline `font-family`** — the global `font-sans` handles it
2. **KPI values** are always `text-xl font-bold text-text-primary`
3. **Section titles** are `text-sm font-semibold text-text-primary`
4. **Subtitles** are `text-xs text-text-muted`
5. **AI insight text** is `text-xs text-text-secondary italic leading-relaxed`
