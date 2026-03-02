<script setup lang="ts">
import type { SnapshotRow } from '@/types'

defineProps<{
    title: string
    rows: SnapshotRow[]
}>()
</script>

<template>
    <div class="bg-primary-50 rounded-xl p-3 border border-primary-100">
        <!-- Header -->
        <div class="grid grid-cols-4 gap-2 mb-2">
            <span class="text-xs font-bold text-text-primary">{{ title }}</span>
            <span class="text-xs font-bold text-text-primary text-right">Current</span>
            <span class="text-xs font-bold text-text-primary text-right">Adjusted</span>
            <span class="text-xs font-bold text-text-primary text-right">Changes</span>
        </div>

        <!-- Rows -->
        <div v-for="row in rows" :key="row.metric" class="grid grid-cols-4 gap-2 py-1 border-t border-primary-100">
            <span class="text-xs text-text-secondary">{{ row.metric }}</span>
            <span class="text-xs text-text-primary font-medium text-right">{{ row.current }}</span>
            <span class="text-xs text-text-primary font-medium text-right">{{ row.adjusted }}</span>
            <span :class="[
                'text-xs font-medium text-right flex items-center justify-end gap-0.5',
                row.change === '-/' ? 'text-text-muted' : 'text-accent-red',
            ]">
                {{ row.change }}
                <i v-if="row.change !== '-/'" class="pi pi-arrow-down text-[10px]" />
            </span>
        </div>
    </div>
</template>
