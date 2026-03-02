# Feature: Dashboard Main View

> Task spec for the main dashboard page implementation.

## What Was Built

The `DashboardView.vue` component assembles the complete analytics dashboard by importing and composing all sub-components within the `DashboardLayout`.

## Design Reference Mapping

| Design Element                    | Component Used         | Position                      |
| --------------------------------- | ---------------------- | ----------------------------- |
| Left sidebar with icons           | `AppSidebar`           | Fixed left, 64px wide         |
| Blue header with nav tabs         | `AppHeader`            | Top, full width minus sidebar |
| 7 KPI metric cards                | `KpiCard` (×7)         | Below header, horizontal row  |
| Revenue vs Expenses bar chart     | `RevenueExpensesChart` | Left column, top section      |
| Profit/Loss mini chart            | `ProfitLossChart`      | Right of Revenue chart        |
| Goal Completion bars              | `GoalCompletionChart`  | Below Profit/Loss             |
| Cash Inflow vs Outflow area chart | `CashFlowAreaChart`    | Left column, bottom section   |
| Cash in Bank mini chart           | `CashInBankChart`      | Right of Cash Flow chart      |
| Netflow line chart                | `NetflowChart`         | Below Cash in Bank            |
| Forecast & Budget Tuner           | `ForecastTuner`        | Right panel, top              |
| Cash Flow Scenario Tuner          | `CashFlowTuner`        | Right panel, bottom           |

## Layout Grid

```
Main: grid-cols-1 xl:grid-cols-[1fr_380px]
  Left: grid-cols-1 lg:grid-cols-[1fr_280px] (for each chart section)
  Right: flex-col gap-4 (stacked tuner panels)
```

## Data Sources

All data imported from `src/data/mockData.ts`. No API calls — all mock data as per assignment requirements.

## Responsive Behavior

- **1280px+**: Full 2-column layout with sidebar
- **768-1279px**: Single column, sidebar hidden, nav tabs visible
- **<768px**: Simplified header, stacked cards, mobile sidebar drawer
