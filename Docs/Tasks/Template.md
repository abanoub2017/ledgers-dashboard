# Task Template

> Read this checklist before starting any new task.

## Pre-Task Checklist

- [ ] Read the design reference / mockup for this feature
- [ ] Check `Docs/StyleGuide/Colors.md` for correct color tokens
- [ ] Check `Docs/StyleGuide/Typography.md` for correct font sizes/weights
- [ ] Check `Docs/StyleGuide/Spacing.md` for correct spacing patterns
- [ ] Check `Docs/StyleGuide/BorderRadius.md` for correct border radius
- [ ] Check `Docs/DesignSystem/Layouts.md` for grid/layout patterns
- [ ] Review `Docs/Architecture/NamingConventions.md` for naming rules
- [ ] Review `Docs/Components/ReusableComponentsRules.md` for component rules

## Implementation Steps

1. **Define types** — Add any new interfaces to `src/types/dashboard.ts`
2. **Add mock data** — Add data to `src/data/mockData.ts`
3. **Create component** — Use `<script setup lang="ts">` with Composition API
4. **Style with Tailwind** — Use utility classes only, no inline styles
5. **Test responsive** — Verify at 1440px, 768px, and 375px
6. **Verify pixel accuracy** — Compare with design reference

## Post-Task Checklist

- [ ] Component uses TypeScript interfaces for all props
- [ ] No inline styles (only Tailwind utility classes)
- [ ] Responsive at all breakpoints
- [ ] Consistent spacing with rest of dashboard
- [ ] Colors match design system tokens
- [ ] Hover/transition states work correctly
- [ ] No TypeScript errors (`vue-tsc --noEmit`)
- [ ] Component is properly imported and rendered

## Documentation

After completing the task, create a markdown file in `Docs/Tasks/FeatureSpecific/` named `{FeatureName}.md` documenting:

- What was built
- Design decisions made
- Component props/emits
- Any deviations from the design
