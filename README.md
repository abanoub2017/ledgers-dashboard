# Ledgers Dashboard

A pixel-accurate responsive analytics dashboard built with Vue 3, TypeScript, Vite, Tailwind CSS v4, and PrimeVue v4.

## Tech Stack

| Technology   | Version | Role                                              |
| ------------ | ------- | ------------------------------------------------- |
| Vue 3        | 3.5.x   | UI framework (Composition API + `<script setup>`) |
| TypeScript   | 5.9.x   | Type safety                                       |
| Vite         | 7.3.x   | Build tool                                        |
| Tailwind CSS | 4.2.x   | Utility-first CSS (CSS-first config)              |
| PrimeVue     | 4.5.x   | Chart & Slider components (Aura theme)            |
| Chart.js     | 4.5.x   | Chart rendering via PrimeVue wrapper              |

## Quick Start

```bash
npm install
npm run dev
```

## Scripts

| Command           | Description                   |
| ----------------- | ----------------------------- |
| `npm run dev`     | Start development server      |
| `npm run build`   | Type-check + production build |
| `npm run preview` | Preview production build      |

## Project Structure

```
src/
├── components/
│   ├── layout/          AppSidebar, AppHeader, DashboardLayout
│   ├── cards/           KpiCard
│   ├── charts/          RevenueExpenses, ProfitLoss, GoalCompletion,
│   │                    CashFlowArea, CashInBank, Netflow
│   ├── panels/          ForecastTuner, CashFlowTuner, OutputSnapshot
│   └── ui/              SliderControl, AiInsight, GenerateButton
├── views/               DashboardView
├── types/               TypeScript interfaces
├── data/                Mock data
└── assets/styles/       Tailwind CSS theme tokens
```

## Features

- **16 reusable Vue components** organized by domain
- **7 KPI cards** with color-coded change indicators
- **6 interactive charts** (bar, area, line via PrimeVue Chart)
- **2 tuner panels** with real-time sliders and output snapshots
- **AI insight blocks** with generated analysis text
- **Fully responsive** — desktop, tablet, and mobile breakpoints

## Documentation

See `Docs/` for comprehensive documentation:

- **StyleGuide/** — Colors, typography, spacing, border radius, shadows
- **DesignSystem/** — Component catalog, layouts, interaction patterns
- **Architecture/** — Folder structure, component architecture, naming conventions, API integration guide
- **Tasks/** — Project plan with progress tracking
- **Components/** — Component specs and reusable component rules
