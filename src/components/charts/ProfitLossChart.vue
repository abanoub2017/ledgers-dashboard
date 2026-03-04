<script setup lang="ts">
import { ref } from 'vue'
import Chart from 'primevue/chart'
import { profitLossData } from '@/data/mockData'

const chartData = ref(profitLossData)

const chartOptions = ref({
    responsive: true,
    maintainAspectRatio: false,
    plugins: {
        legend: { display: false },
        tooltip: {
            backgroundColor: '#1e293b',
            titleFont: { size: 11, family: 'Inter' },
            bodyFont: { size: 10, family: 'Inter' },
            padding: 8,
            cornerRadius: 6,
        },
    },
    scales: {
        x: {
            grid: { display: false },
            ticks: { display: false },
            border: { display: false },
        },
        y: {
            display: false,
            beginAtZero: true,
        },
    },
})
</script>

<template>
    <div class="bg-white rounded-xl border border-gray-100 p-4 shadow-sm flex flex-col">
        <div class="flex items-center gap-1 mb-3">
            <span class="text-sm font-semibold text-accent-green">Profit</span>
            <span class="text-sm font-semibold text-accent-red">/Loss</span>
        </div>
        <div class="flex-1 min-h-0">
            <Chart type="line" :data="chartData" :options="chartOptions" class="h-full" />
        </div>
    </div>
</template>
