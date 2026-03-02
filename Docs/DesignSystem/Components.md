# Component Catalog

> All 16 components in the Ledgers Dashboard, organized by domain.

## Layout Components

### AppSidebar

- **Path**: `src/components/layout/AppSidebar.vue`
- **Props**: None (uses internal state)
- **Exposed**: `isMobileOpen: boolean`
- **Purpose**: Fixed left sidebar with navigation icons. Collapses to overlay drawer on mobile.

### AppHeader

- **Path**: `src/components/layout/AppHeader.vue`
- **Emits**: `toggleSidebar`
- **Purpose**: Top navigation bar with logo, nav tabs (FINANCE/SALES/HR/MGMT), date badge, and notification icons.

### DashboardLayout

- **Path**: `src/components/layout/DashboardLayout.vue`
- **Slots**: `default` — main dashboard content
- **Purpose**: Wraps sidebar + header + content area. Handles sidebar toggle.

---

## Card Components

### KpiCard

- **Path**: `src/components/cards/KpiCard.vue`
- **Props**: `title: string`, `value: string`, `change?: number`, `changeLabel?: string`, `subtitle?: string`
- **Purpose**: Displays a single KPI metric with colored change indicator.

---

## Chart Components

### RevenueExpensesChart

- **Path**: `src/components/charts/RevenueExpensesChart.vue`
- **Purpose**: Grouped bar chart (pink + blue) showing monthly Revenue vs Expenses. Includes AI footnote.

### ProfitLossChart

- **Path**: `src/components/charts/ProfitLossChart.vue`
- **Purpose**: Compact grouped bar chart for quarterly Profit/Loss.

### GoalCompletionChart

- **Path**: `src/components/charts/GoalCompletionChart.vue`
- **Purpose**: Horizontal stacked bar chart showing goal completion for Revenue and OpEx.

### CashFlowAreaChart

- **Path**: `src/components/charts/CashFlowAreaChart.vue`
- **Purpose**: Line/area chart (pink + blue fills) showing Cash Inflow vs Outflow.

### CashInBankChart

- **Path**: `src/components/charts/CashInBankChart.vue`
- **Purpose**: Small line/area chart showing Cash in Bank trend.

### NetflowChart

- **Path**: `src/components/charts/NetflowChart.vue`
- **Purpose**: Small line chart with data points showing Netflow trend.

---

## Panel Components

### ForecastTuner

- **Path**: `src/components/panels/ForecastTuner.vue`
- **Purpose**: Forecast & Budget Tuner with 5 sliders, output snapshot, AI insight, and Generate button.

### CashFlowTuner

- **Path**: `src/components/panels/CashFlowTuner.vue`
- **Purpose**: Cash Flow Scenario Tuner with 3 sliders, output snapshot, and AI insight.

### OutputSnapshot

- **Path**: `src/components/panels/OutputSnapshot.vue`
- **Props**: `title: string`, `rows: SnapshotRow[]`
- **Purpose**: Reusable data table showing Current/Adjusted/Changes columns.

---

## UI Components

### SliderControl

- **Path**: `src/components/ui/SliderControl.vue`
- **Props**: `label: string`, `modelValue: number`, `min?: number`, `max?: number`, `step?: number`
- **Emits**: `update:modelValue`
- **Purpose**: Labeled slider using PrimeVue Slider component.

### AiInsight

- **Path**: `src/components/ui/AiInsight.vue`
- **Props**: `text: string`
- **Purpose**: Displays "Ledgers AI" label with italic insight text.

### GenerateButton

- **Path**: `src/components/ui/GenerateButton.vue`
- **Emits**: `click`
- **Purpose**: Sparkle-adorned Generate button with outlined pill style.
