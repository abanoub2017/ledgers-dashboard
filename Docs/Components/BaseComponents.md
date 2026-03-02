# Base Components

> Specifications for the foundational reusable components.

## KpiCard

**Purpose**: Display a single KPI metric with change indicator.

**Props**:

```typescript
interface KpiItem {
  title: string; // e.g., "Revenue"
  value: string; // e.g., "1,400,000"
  change?: number; // e.g., 4 or -25. Positive = green, Negative = red
  changeLabel?: string; // Optional custom label for change
  subtitle?: string; // e.g., "vs previous month"
}
```

**Visual Spec**:

- Background: `bg-white`
- Border: `border border-gray-100`
- Radius: `rounded-xl`
- Padding: `p-4`
- Shadow: `shadow-sm` → `hover:shadow-md`
- Title: `text-xs font-medium text-text-secondary`
- Value: `text-xl font-bold text-text-primary`
- Change: `text-xs font-semibold`, green for positive, red for negative
- Subtitle: `text-[10px] text-text-muted`

---

## SliderControl

**Purpose**: Labeled slider input using PrimeVue Slider.

**Props**:

```typescript
{
  label: string        // Slider label text
  modelValue: number   // Current value (v-model)
  min?: number         // Default: 0
  max?: number         // Default: 100
  step?: number        // Default: 1
}
```

**Emits**: `update:modelValue`

**Visual Spec**:

- Label: `text-xs font-medium text-text-primary`
- Gap: `gap-1.5` between label and slider

---

## AiInsight

**Purpose**: Display AI-generated insight text with "Ledgers AI" badge.

**Props**:

```typescript
{
  text: string; // The insight text to display
}
```

**Visual Spec**:

- Badge: `text-xs font-bold text-primary-500`
- Text: `text-xs text-text-secondary leading-relaxed italic`
- Quoted with `"..."` wrapping

---

## GenerateButton

**Purpose**: Trigger generation action with visual sparkle indicator.

**Emits**: `click`

**Visual Spec**:

- Border: `border-2 border-primary-500`
- Text: `text-primary-600 text-sm font-semibold`
- Shape: `rounded-full` (pill)
- Padding: `px-5 py-2`
- Hover: `bg-primary-50`
- Sparkle emoji: `✨`
- Centered: `mx-auto`

---

## OutputSnapshot

**Purpose**: Reusable data table for tuner output display.

**Props**:

```typescript
{
  title: string          // Table header label
  rows: SnapshotRow[]    // Data rows
}
```

**Visual Spec**:

- Background: `bg-primary-50`
- Border: `border border-primary-100`
- Radius: `rounded-xl`
- Grid: `grid-cols-4 gap-2`
- Header: `text-xs font-bold text-text-primary`
- Values: `text-xs text-text-primary font-medium`
- Changes: `text-xs text-accent-red font-medium` with down arrow icon
