# Naming Conventions

> Consistent naming throughout the project for readability and maintainability.

## Files & Directories

| Item             | Convention | Example                           |
| ---------------- | ---------- | --------------------------------- |
| Vue Components   | PascalCase | `KpiCard.vue`, `AppSidebar.vue`   |
| TypeScript files | camelCase  | `mockData.ts`, `dashboard.ts`     |
| Directories      | lowercase  | `components/`, `charts/`, `ui/`   |
| CSS files        | camelCase  | `main.css`                        |
| Documentation    | PascalCase | `Colors.md`, `FolderStructure.md` |

## Component Names

| Pattern           | Convention                     | Examples                                       |
| ----------------- | ------------------------------ | ---------------------------------------------- |
| Layout components | `App` prefix                   | `AppSidebar`, `AppHeader`, `DashboardLayout`   |
| Card components   | Descriptive name               | `KpiCard`                                      |
| Chart components  | ChartType + `Chart`            | `RevenueExpensesChart`, `ProfitLossChart`      |
| Panel components  | FeatureName + `Tuner/Snapshot` | `ForecastTuner`, `OutputSnapshot`              |
| UI primitives     | Descriptive name               | `SliderControl`, `AiInsight`, `GenerateButton` |
| View components   | FeatureName + `View`           | `DashboardView`                                |

## TypeScript

| Item         | Convention             | Example                                 |
| ------------ | ---------------------- | --------------------------------------- |
| Interfaces   | PascalCase             | `KpiItem`, `SnapshotRow`                |
| Type exports | PascalCase             | `ChartDataset`                          |
| Variables    | camelCase              | `chartData`, `kpiItems`                 |
| Constants    | camelCase              | `monthLabels`, `forecastInsight`        |
| Functions    | camelCase              | `setActive`, `updateSlider`             |
| Refs         | camelCase              | `sliders`, `isMobileOpen`               |
| Props        | camelCase              | `modelValue`, `changeLabel`             |
| Emits        | kebab-case in template | `@toggle-sidebar`, `@update:modelValue` |

## CSS / Tailwind

| Item           | Convention                  | Example                   |
| -------------- | --------------------------- | ------------------------- |
| Theme tokens   | `--color-{category}-{name}` | `--color-primary-500`     |
| Custom classes | kebab-case (avoid)          | Prefer Tailwind utilities |
| CSS variables  | kebab-case                  | `--color-surface-page`    |

## Mock Data

| Item               | Convention            | Example                |
| ------------------ | --------------------- | ---------------------- |
| Data arrays        | camelCase plural      | `kpiItems`, `navItems` |
| Chart data objects | camelCase descriptive | `revenueExpensesData`  |
| Slider configs     | camelCase plural      | `forecastSliders`      |
| Static strings     | camelCase             | `forecastInsight`      |

## Rules

1. **Never use `index.vue`** — always name components explicitly
2. **Never abbreviate** component names beyond standard abbreviations (KPI, AI)
3. **Prefix layout components** with `App` to distinguish from feature components
4. **Suffix views** with `View`
5. **Suffix charts** with `Chart`
