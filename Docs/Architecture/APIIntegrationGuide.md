# API Integration Guide

> How to migrate from mock data to real API calls.

## Current Architecture (Mock Data)

All data is currently served from `src/data/mockData.ts` as static exports:

```typescript
import { kpiItems, revenueExpensesData } from "@/data/mockData";
```

## Migration Strategy

### Step 1: Create Composables

Create composables in `src/composables/` that abstract data fetching:

```typescript
// src/composables/useKpiData.ts
import { ref, onMounted } from "vue";
import type { KpiItem } from "@/types";

export function useKpiData() {
  const items = ref<KpiItem[]>([]);
  const loading = ref(false);
  const error = ref<string | null>(null);

  const fetchKpiData = async () => {
    loading.value = true;
    try {
      const response = await fetch("/api/kpi");
      items.value = await response.json();
    } catch (e) {
      error.value = "Failed to load KPI data";
    } finally {
      loading.value = false;
    }
  };

  onMounted(fetchKpiData);

  return { items, loading, error, refetch: fetchKpiData };
}
```

### Step 2: Create API Service Layer

```typescript
// src/services/api.ts
const BASE_URL = import.meta.env.VITE_API_URL || "/api";

export const api = {
  async get<T>(endpoint: string): Promise<T> {
    const response = await fetch(`${BASE_URL}${endpoint}`);
    if (!response.ok) throw new Error(`API error: ${response.status}`);
    return response.json();
  },

  async post<T>(endpoint: string, data: unknown): Promise<T> {
    const response = await fetch(`${BASE_URL}${endpoint}`, {
      method: "POST",
      headers: { "Content-Type": "application/json" },
      body: JSON.stringify(data),
    });
    if (!response.ok) throw new Error(`API error: ${response.status}`);
    return response.json();
  },
};
```

### Step 3: Update Components

Replace direct imports with composables:

```typescript
// Before
import { kpiItems } from "@/data/mockData";

// After
import { useKpiData } from "@/composables/useKpiData";
const { items: kpiItems, loading } = useKpiData();
```

### Step 4: Add Loading States

```html
<template>
  <div v-if="loading" class="animate-pulse bg-gray-200 rounded-xl h-20" />
  <KpiCard v-else v-for="item in items" :key="item.title" v-bind="item" />
</template>
```

## Environment Variables

```env
# .env.local
VITE_API_URL=http://localhost:3000/api

# .env.production
VITE_API_URL=https://api.ledgers.com
```

## API Endpoints (Expected)

| Endpoint                       | Method | Returns                                        |
| ------------------------------ | ------ | ---------------------------------------------- |
| `/api/kpi`                     | GET    | `KpiItem[]`                                    |
| `/api/charts/revenue-expenses` | GET    | `DashboardChartData`                           |
| `/api/charts/profit-loss`      | GET    | `DashboardChartData`                           |
| `/api/charts/cash-flow`        | GET    | `DashboardChartData`                           |
| `/api/tuner/forecast`          | POST   | `{ snapshot: SnapshotRow[], insight: string }` |
| `/api/tuner/cashflow`          | POST   | `{ snapshot: SnapshotRow[], insight: string }` |
