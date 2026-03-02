<script setup lang="ts">
import type { KpiItem } from '@/types'

const props = defineProps<KpiItem>()

const isPositive = (change: number | undefined) => change !== undefined && change > 0
const isNegative = (change: number | undefined) => change !== undefined && change < 0
const formatChange = (change: number | undefined) => {
    if (change === undefined) return ''
    return `${change > 0 ? '+' : ''}${change}%`
}
</script>

<template>
    <div
        class="bg-white rounded-xl border border-gray-100 p-4 min-w-[150px] flex flex-col gap-1 shadow-sm hover:shadow-md transition-shadow duration-200">
        <!-- Title -->
        <p class="text-xs font-medium text-text-secondary truncate">{{ props.title }}</p>

        <!-- Value + Change -->
        <div class="flex items-end gap-2">
            <span class="text-xl font-bold text-text-primary leading-tight">{{ props.value }}</span>
            <span v-if="props.change !== undefined" :class="[
                'text-xs font-semibold leading-tight mb-0.5',
                isPositive(props.change) ? 'text-accent-green' : '',
                isNegative(props.change) ? 'text-accent-red' : '',
            ]">
                {{ formatChange(props.change) }}
            </span>
        </div>

        <!-- Subtitle -->
        <p v-if="props.subtitle" class="text-[10px] text-text-muted mt-0.5">{{ props.subtitle }}</p>
    </div>
</template>
