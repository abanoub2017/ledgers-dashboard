# Spacing

> Base spacing unit: `0.25rem` (4px). All spacing uses Tailwind utility classes.

## Common Spacing Patterns

| Context                 | Tailwind Class | Value |
| ----------------------- | -------------- | ----- |
| Card inner padding      | `p-4`          | 16px  |
| Card padding (compact)  | `p-3`          | 12px  |
| Section gap (vertical)  | `gap-4`        | 16px  |
| KPI cards gap           | `gap-3`        | 12px  |
| Grid column gap         | `gap-4`        | 16px  |
| Page padding (desktop)  | `p-4`          | 16px  |
| Page padding (mobile)   | `p-3`          | 12px  |
| Margin between sections | `mb-4`         | 16px  |
| Slider label gap        | `gap-1.5`      | 6px   |
| Inline icon gap         | `gap-2`        | 8px   |

## Layout Spacing

| Context                       | Value                         |
| ----------------------------- | ----------------------------- |
| Sidebar width                 | 64px (`w-16`)                 |
| Header horizontal margin      | `mx-2`                        |
| Header vertical margin        | `mt-2`                        |
| Content left margin (desktop) | `lg:ml-16` (64px for sidebar) |
| Right panel width             | `380px` (in grid template)    |

## Vertical Rhythm

- Between header and KPI row: `p-3` or `p-4` (main content padding)
- Between KPI row and charts: `mb-4`
- Between chart sections: `gap-4`
- Between panel sections: `gap-4`
- Inside panels between elements: `mb-4`

## Rules

1. **Always use Tailwind spacing classes** — never write `margin: 16px` inline
2. **Use `gap-*` for flex/grid layouts** instead of margins on children
3. **Consistent card padding** — `p-4` for normal cards, `p-3` for compact/nested cards
4. **Mobile adjustments** — reduce padding from `p-4` to `p-3` on small screens
