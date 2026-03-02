# Component Architecture

> Vue 3 Composition API with `<script setup lang="ts">` throughout.

## Component Hierarchy

```
App.vue
└── DashboardView.vue
    └── DashboardLayout.vue
        ├── AppSidebar.vue
        ├── AppHeader.vue
        └── [slot: default]
            ├── KpiCard.vue (×7)
            ├── RevenueExpensesChart.vue
            ├── ProfitLossChart.vue
            ├── GoalCompletionChart.vue
            ├── CashFlowAreaChart.vue
            ├── CashInBankChart.vue
            ├── NetflowChart.vue
            ├── ForecastTuner.vue
            │   ├── SliderControl.vue (×5)
            │   ├── OutputSnapshot.vue
            │   ├── AiInsight.vue
            │   └── GenerateButton.vue
            └── CashFlowTuner.vue
                ├── SliderControl.vue (×3)
                ├── OutputSnapshot.vue
                └── AiInsight.vue
```

## Composition Patterns

### Props-Based Data Flow

```typescript
// Parent passes typed props
<KpiCard :title="item.title" :value="item.value" :change="item.change" />

// Child defines with defineProps<T>()
const props = defineProps<KpiItem>()
```

### Event Emission

```typescript
// Child emits typed events
const emit = defineEmits<{
  'update:modelValue': [value: number]
}>()

// Parent handles
<SliderControl @update:modelValue="(val) => updateSlider(index, val)" />
```

### Template Ref Communication

```typescript
// DashboardLayout uses ref to access sidebar
const sidebar = ref<InstanceType<typeof AppSidebar> | null>(null);

// AppSidebar exposes internal state
defineExpose({ isMobileOpen });
```

## State Management

- **No Vuex/Pinia** — state is local to components or passed via props
- **Mock data** imported directly from `src/data/mockData.ts`
- **Slider state** managed with `ref()` inside tuner components
- **Navigation state** managed locally inside header/sidebar

## PrimeVue Integration

Only two PrimeVue components are used:

1. **`Chart`** from `primevue/chart` — wraps Chart.js for all 6 chart types
2. **`Slider`** from `primevue/slider` — used inside `SliderControl.vue`

Everything else is custom Vue components styled with Tailwind CSS.

## TypeScript Types

All shared interfaces live in `src/types/dashboard.ts`:

- `KpiItem` — KPI card data shape
- `SnapshotRow` — Output snapshot table row
- `TunerSlider` — Slider control configuration
- `NavItem` — Navigation tab item
- `SidebarItem` — Sidebar icon item
- `ChartDataset` — Chart.js dataset shape
- `DashboardChartData` — Chart data with labels + datasets
