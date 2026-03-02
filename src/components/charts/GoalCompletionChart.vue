<script setup lang="ts">
import { ref } from 'vue'
import Chart from 'primevue/chart'
import { goalCompletionData } from '@/data/mockData'

const chartData = ref(goalCompletionData)

const chartOptions = ref({
    indexAxis: 'y' as const,
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
            stacked: true,
            display: false,
            max: 100,
        },
        y: {
            stacked: true,
            grid: { display: false },
            ticks: { font: { size: 11, family: 'Inter' }, color: '#64748b' },
            border: { display: false },
        },
    },
})
</script>

<template>
    <div class="bg-white rounded-xl border border-gray-100 p-4 shadow-sm">
        <h3 class="text-sm font-semibold text-primary-600 mb-3">Goal Completion</h3>
        <div class="h-[80px]">
            <Chart type="bar" :data="chartData" :options="chartOptions" class="h-full" />
        </div>
    </div>
</template>
