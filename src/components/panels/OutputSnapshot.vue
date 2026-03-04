<script setup lang="ts">
import type { SnapshotRow } from '@/types'

defineProps<{
    title: string
    rows: SnapshotRow[]
}>()
</script>

<template>
    <div class="bg-primary-500 rounded-xl p-3 overflow-x-auto">
        <!-- Header -->
        <div class="grid grid-cols-4 gap-2 mb-2 min-w-[280px]">
            <span class="text-[11px] sm:text-xs font-bold text-white">{{ title }}</span>
            <span class="text-[11px] sm:text-xs font-bold text-white text-right">Current</span>
            <span class="text-[11px] sm:text-xs font-bold text-white text-right">Adjusted</span>
            <span class="text-[11px] sm:text-xs font-bold text-white text-right">Changes</span>
        </div>

        <!-- Rows -->
        <div v-for="row in rows" :key="row.metric"
            class="grid grid-cols-4 gap-2 py-1 border-t border-white/20 min-w-[280px]">
            <span class="text-[11px] sm:text-xs text-white/80">{{ row.metric }}</span>
            <span class="text-[11px] sm:text-xs text-white font-medium text-right">{{ row.current }}</span>
            <span class="text-[11px] sm:text-xs text-white font-medium text-right">{{ row.adjusted }}</span>
            <span :class="[
                'text-xs font-medium text-right flex items-center justify-end gap-0.5',
                row.change === '-/' ? 'text-white/60' : 'text-accent-green',
            ]">
                {{ row.change }}
                <i v-if="row.change !== '-/'" class="pi pi-arrow-down text-[10px]" />
            </span>
        </div>
    </div>
</template>
