<script setup lang="ts">
import type { SnapshotRow } from '@/types'

defineProps<{
    title: string
    rows: SnapshotRow[]
}>()
</script>

<template>
    <div class="rounded-[22px] p-4 overflow-x-auto" style="background: linear-gradient(135deg, #2f86d6, #1f78c8)">
        <!-- Header -->
        <div class="grid grid-cols-[1.2fr_1fr_1fr_0.8fr] gap-2 mb-1.5 min-w-[280px]">
            <span class="text-[11px] sm:text-xs font-bold text-white">{{ title }}</span>
            <span class="text-[11px] sm:text-xs font-bold text-white text-right">Current</span>
            <span class="text-[11px] sm:text-xs font-bold text-white text-right">Adjusted</span>
            <span class="text-[11px] sm:text-xs font-bold text-white text-center">Changes</span>
        </div>

        <!-- Rows -->
        <div v-for="row in rows" :key="row.metric"
            class="grid grid-cols-[1.2fr_1fr_1fr_0.8fr] gap-2 py-[5px] border-t border-white/20 min-w-[280px]">
            <span class="text-[11px] sm:text-xs text-white/80 whitespace-nowrap">{{ row.metric }}:</span>
            <span class="text-[11px] sm:text-xs text-white font-medium text-right">{{ row.current }}</span>
            <span class="text-[11px] sm:text-xs text-white font-medium text-right">{{ row.adjusted }}</span>
            <span :class="[
                'text-xs font-medium flex items-center justify-center gap-0.5',
                row.change === '-/' ? 'text-white/60' : 'text-accent-green',
            ]">
                {{ row.change }}
                <i v-if="row.change !== '-/'" class="pi pi-arrow-down text-[10px]" />
            </span>
        </div>
    </div>
</template>
