# Interaction Patterns

> Defines hover states, transitions, interactive behaviors, and feedback patterns.

## Hover States

| Element                 | Default                               | Hover                    | Transition                       |
| ----------------------- | ------------------------------------- | ------------------------ | -------------------------------- |
| KPI Card                | `shadow-sm`                           | `shadow-md`              | `transition-shadow duration-200` |
| Sidebar Icon (inactive) | `text-slate-400`                      | `text-white bg-white/10` | `transition-all duration-200`    |
| Sidebar Icon (active)   | `bg-primary-500 text-white shadow-md` | —                        | —                                |
| Nav Tab (inactive)      | `text-white/80`                       | `text-white bg-white/10` | `transition-all duration-200`    |
| Notification Icon       | —                                     | `bg-white/20`            | `transition-colors`              |
| Generate Button         | `border-primary-500`                  | `bg-primary-50`          | `transition-colors duration-200` |

## Slider Interactions

- **PrimeVue Slider** component handles drag interactions
- Sliders update `v-model` reactively
- Labels positioned above the slider track
- Grid layouts: 2-column for Forecast Tuner, 3-column for Cash Flow Tuner

## Mobile Sidebar

- **Toggle**: Header hamburger button emits `toggleSidebar` event
- **Overlay**: Dark backdrop (`bg-black/50`) with `fade` transition
- **Drawer**: Slides in from left with `slide` transition
- **Close**: Click overlay to dismiss

## Chart Tooltips

- Background: `#1e293b` (dark navy)
- Font: Inter, 11-12px
- Padding: 8-10px
- Border radius: 6-8px
- Triggered on hover over chart elements

## Active States

| Element      | Active State                          |
| ------------ | ------------------------------------- |
| Nav Tab      | `bg-primary-600 text-white shadow-sm` |
| Sidebar Icon | `bg-primary-500 text-white shadow-md` |

## Transition Durations

| Duration | Usage                          |
| -------- | ------------------------------ |
| 200ms    | Hover effects (shadow, colors) |
| 300ms    | Sidebar slide animation        |
| Default  | Fade transitions               |
