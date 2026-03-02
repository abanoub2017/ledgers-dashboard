# Folder Structure

> Complete directory layout of the Ledgers Dashboard project.

```
ledgers-dashboard/
├── index.html                          # Entry HTML (loads Inter font)
├── package.json                        # Dependencies & scripts
├── tsconfig.json                       # TS project references
├── tsconfig.app.json                   # App TS config (with @ path alias)
├── tsconfig.node.json                  # Node TS config
├── vite.config.ts                      # Vite + Tailwind v4 + Vue plugin
│
├── Docs/                               # 📚 Project documentation
│   ├── README.md                       # Project overview & setup
│   ├── StyleGuide/
│   │   ├── Colors.md                   # Color tokens & usage
│   │   ├── Typography.md               # Font sizes, weights, families
│   │   ├── Spacing.md                  # Spacing patterns & rules
│   │   ├── BorderRadius.md             # Radius scale & usage
│   │   └── Shadows.md                  # Shadow scale & patterns
│   ├── DesignSystem/
│   │   ├── Components.md               # Component catalog with props
│   │   ├── Layouts.md                  # Grid systems & breakpoints
│   │   └── InteractionPatterns.md      # Hover, transition, behaviors
│   ├── Architecture/
│   │   ├── FolderStructure.md          # This file
│   │   ├── ComponentArchitecture.md    # Component hierarchy & patterns
│   │   ├── NamingConventions.md        # Naming rules
│   │   └── APIIntegrationGuide.md      # API migration guide
│   ├── Tasks/
│   │   ├── Template.md                 # Pre-task checklist
│   │   ├── ProjectPlan.md              # Full plan with progress tracking
│   │   └── FeatureSpecific/
│   │       └── DashboardMainView.md    # Main dashboard task spec
│   └── Components/
│       ├── BaseComponents.md           # Base component specs
│       └── ReusableComponentsRules.md  # Reusability rules
│
├── public/
│   └── favicon.svg                     # Site favicon
│
└── src/
    ├── App.vue                         # Root component
    ├── main.ts                         # App entry (PrimeVue plugin setup)
    │
    ├── assets/
    │   └── styles/
    │       └── main.css                # Tailwind @import + @theme tokens
    │
    ├── types/
    │   ├── index.ts                    # Re-exports
    │   └── dashboard.ts                # TypeScript interfaces
    │
    ├── data/
    │   └── mockData.ts                 # All mock data (KPIs, charts, tuners)
    │
    ├── views/
    │   └── DashboardView.vue           # Main page (assembles all sections)
    │
    └── components/
        ├── layout/
        │   ├── AppSidebar.vue          # Fixed left sidebar
        │   ├── AppHeader.vue           # Top navigation bar
        │   └── DashboardLayout.vue     # Sidebar + header + content wrapper
        ├── cards/
        │   └── KpiCard.vue             # KPI metric card
        ├── charts/
        │   ├── RevenueExpensesChart.vue # Grouped bar chart
        │   ├── ProfitLossChart.vue      # Compact bar chart
        │   ├── GoalCompletionChart.vue  # Horizontal stacked bar
        │   ├── CashFlowAreaChart.vue    # Area chart
        │   ├── CashInBankChart.vue      # Small area chart
        │   └── NetflowChart.vue         # Small line chart
        ├── panels/
        │   ├── ForecastTuner.vue        # Forecast panel with sliders
        │   ├── CashFlowTuner.vue        # Cash flow panel with sliders
        │   └── OutputSnapshot.vue       # Reusable data table
        └── ui/
            ├── SliderControl.vue        # Labeled slider
            ├── AiInsight.vue            # AI insight text block
            └── GenerateButton.vue       # Generate sparkle button
```

## Directory Purposes

| Directory                | Purpose                                                      |
| ------------------------ | ------------------------------------------------------------ |
| `src/components/layout/` | App shell — sidebar, header, layout wrapper                  |
| `src/components/cards/`  | Data display cards                                           |
| `src/components/charts/` | PrimeVue Chart wrappers for different chart types            |
| `src/components/panels/` | Interactive panels (tuners with sliders and snapshot tables) |
| `src/components/ui/`     | Small reusable UI primitives                                 |
| `src/views/`             | Full-page views that compose components                      |
| `src/types/`             | TypeScript interfaces and type exports                       |
| `src/data/`              | Mock data and constants                                      |
| `src/assets/styles/`     | Global CSS with Tailwind configuration                       |
| `Docs/`                  | All project documentation                                    |
