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
        class="bg-white rounded-xl sm:rounded-2xl border border-border-light p-3 sm:p-4 flex flex-col gap-0.5 shadow-card hover:shadow-md transition-shadow duration-200 overflow-hidden">
        <!-- Title -->
        <p class="text-[11px] sm:text-[12px] font-medium text-text-secondary truncate">{{ props.title }}</p>

        <!-- Value -->
        <p class="text-base sm:text-lg xl:text-xl font-bold text-text-primary leading-tight truncate">{{ props.value }}
        </p>

        <!-- Change -->
        <span v-if="props.change !== undefined" :class="[
            'text-[11px] font-semibold leading-tight',
            isPositive(props.change) ? 'text-accent-green' : '',
            isNegative(props.change) ? 'text-accent-red' : '',
        ]">
            {{ formatChange(props.change) }}
        </span>

        <!-- Subtitle -->
        <p v-if="props.subtitle" class="text-[10px] text-text-muted mt-0.5 truncate">{{ props.subtitle }}</p>
    </div>
</template>
