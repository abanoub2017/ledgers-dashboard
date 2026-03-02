# Border Radius

> Consistent rounded corners throughout the dashboard for a modern, polished feel.

## Radius Scale

| Tailwind Class | Value  | Usage                                                     |
| -------------- | ------ | --------------------------------------------------------- |
| `rounded-full` | 9999px | Nav pills, date badge, notification icons, avatar buttons |
| `rounded-2xl`  | 16px   | Header container                                          |
| `rounded-xl`   | 12px   | Cards, panels, sidebar icon buttons, snapshot container   |
| `rounded-lg`   | 8px    | Mobile menu button                                        |
| `rounded`      | 4px    | Chart bar `borderRadius`                                  |

## Component-Specific

| Component           | Class          | Notes                            |
| ------------------- | -------------- | -------------------------------- |
| KPI Card            | `rounded-xl`   | All cards use xl radius          |
| Chart Container     | `rounded-xl`   | Consistent with cards            |
| Header              | `rounded-2xl`  | Slightly larger for the main bar |
| Nav Tab (active)    | `rounded-full` | Pill shape                       |
| Sidebar Icon Button | `rounded-xl`   | Square with rounded corners      |
| Notification Icons  | `rounded-full` | Circular                         |
| Snapshot Panel      | `rounded-xl`   | Inner panel inside tuner cards   |
| Generate Button     | `rounded-full` | Pill-shaped button               |

## Rules

1. **Cards & panels** → `rounded-xl`
2. **Buttons & pills** → `rounded-full`
3. **Header bar** → `rounded-2xl`
4. **Never use `rounded-none`** except for full-bleed elements
5. **Chart bars** use `borderRadius: 4` in Chart.js options
