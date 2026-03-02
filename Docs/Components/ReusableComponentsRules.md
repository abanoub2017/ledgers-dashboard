# Reusable Components Rules

> Guidelines for building and maintaining reusable components.

## Core Principles

1. **Props over Slots for Data** — Use typed props for data; use slots only for flexible content areas
2. **Emit Events for State Changes** — Never mutate parent data directly; use `defineEmits` with typed events
3. **Composables for Shared Logic** — Extract shared logic into `src/composables/` functions
4. **Single Responsibility** — Each component does one thing well
5. **Under 150 Lines** — If a component exceeds ~150 lines, consider splitting it

## Prop Rules

```typescript
// ✅ DO: Use TypeScript interfaces
defineProps<KpiItem>();

// ✅ DO: Use optional props with defaults
const props = withDefaults(
  defineProps<{
    label: string;
    min?: number;
  }>(),
  {
    min: 0,
  },
);

// ❌ DON'T: Use untyped props
defineProps(["title", "value"]);
```

## Emit Rules

```typescript
// ✅ DO: Type your emits
const emit = defineEmits<{
  "update:modelValue": [value: number];
  click: [];
}>();

// ❌ DON'T: Use untyped emits
const emit = defineEmits(["update:modelValue"]);
```

## Styling Rules

1. **Tailwind utility classes ONLY** — No inline styles unless absolutely necessary (e.g., dynamic CSS variables)
2. **No `<style scoped>`** unless needed for third-party component overrides or transitions
3. **Use design system tokens** — Always reference `text-primary-500`, `bg-surface-page`, etc.
4. **Responsive classes** — Always consider mobile, tablet, and desktop breakpoints
5. **No `!important`** — If needed, reassess the class hierarchy

## Component File Structure

```vue
<script setup lang="ts">
// 1. Imports
import { ref, computed } from 'vue'
import type { KpiItem } from '@/types'

// 2. Props & Emits
const props = defineProps<KpiItem>()
const emit = defineEmits<{ click: [] }>()

// 3. Reactive state
const isActive = ref(false)

// 4. Computed
const formattedValue = computed(() => ...)

// 5. Methods
const handleClick = () => { ... }

// 6. Expose (if needed)
defineExpose({ isActive })
</script>

<template>
  <!-- Single root element preferred -->
  <div class="...">...</div>
</template>

<!-- Only if needed for transitions or third-party overrides -->
<style scoped></style>
```

## Directory Placement

| Component Type     | Directory            | Naming                     |
| ------------------ | -------------------- | -------------------------- |
| App-level layout   | `components/layout/` | `AppSidebar.vue`           |
| Data display cards | `components/cards/`  | `KpiCard.vue`              |
| Chart wrappers     | `components/charts/` | `RevenueExpensesChart.vue` |
| Interactive panels | `components/panels/` | `ForecastTuner.vue`        |
| Shared primitives  | `components/ui/`     | `SliderControl.vue`        |
| Full pages         | `views/`             | `DashboardView.vue`        |

## When to Create a New Component

Create a new component when:

- ✅ The UI pattern is used in 2+ places
- ✅ The element has its own state or logic
- ✅ The parent component is getting too long (>150 lines)
- ✅ It represents a distinct visual/functional unit

Do NOT create a component when:

- ❌ It's just a wrapper with no logic
- ❌ It's only used once AND is trivially small
- ❌ It would require passing 10+ props (consider slots instead)
