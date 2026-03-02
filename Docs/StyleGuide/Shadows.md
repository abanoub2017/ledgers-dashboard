# Shadows

> Subtle shadows for elevation hierarchy. Minimal and clean.

## Shadow Scale

| Tailwind Class | CSS Value                    | Usage                            |
| -------------- | ---------------------------- | -------------------------------- |
| `shadow-sm`    | `0 1px 2px rgba(0,0,0,0.05)` | Cards, chart containers, panels  |
| `shadow-md`    | `0 4px 6px rgba(0,0,0,0.1)`  | Active sidebar icon, hover cards |
| `shadow-none`  | `none`                       | Flat elements, inline components |

## Usage Patterns

| Component           | Default       | Hover                               |
| ------------------- | ------------- | ----------------------------------- |
| KPI Card            | `shadow-sm`   | `shadow-md` (via `hover:shadow-md`) |
| Chart Card          | `shadow-sm`   | —                                   |
| Tuner Panel         | `shadow-sm`   | —                                   |
| Snapshot Table      | — (no shadow) | —                                   |
| Header              | `shadow-sm`   | —                                   |
| Sidebar Active Icon | `shadow-md`   | —                                   |

## Transitions

Cards use `transition-shadow duration-200` for smooth hover effects:

```html
<div class="shadow-sm hover:shadow-md transition-shadow duration-200"></div>
```

## Rules

1. **Cards** always have `shadow-sm` as baseline
2. **Interactive cards** (KPI) get `hover:shadow-md` transition
3. **Static panels** (snapshots, AI insights) have no shadow
4. **Never use `shadow-lg` or `shadow-xl`** — keep it subtle
5. **Inner panels** (nested) use `border` instead of `shadow` for separation
