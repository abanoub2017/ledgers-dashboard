<script setup lang="ts">
import { ref } from 'vue'
import Chart from 'primevue/chart'
import { cashFlowData } from '@/data/mockData'

const chartData = ref(cashFlowData)

const chartOptions = ref({
    responsive: true,
    maintainAspectRatio: false,
    plugins: {
        legend: { display: false },
        tooltip: {
            backgroundColor: '#1e293b',
            titleFont: { size: 12, family: 'Inter' },
            bodyFont: { size: 11, family: 'Inter' },
            padding: 10,
            cornerRadius: 8,
        },
    },
    scales: {
        x: {
            grid: { display: false },
            ticks: { font: { size: 11, family: 'Inter' }, color: '#94a3b8' },
            border: { display: false },
        },
        y: {
            beginAtZero: true,
            ticks: {
                font: { size: 11, family: 'Inter' },
                color: '#94a3b8',
            },
            grid: { color: '#f1f5f9' },
            border: { display: false },
        },
    },
})
</script>

<template>
    <div class="bg-white rounded-xl border border-gray-100 p-4 shadow-sm">
        <h3 class="text-sm font-semibold text-text-primary mb-4">Cash Inflow vs outflow</h3>
        <div class="h-[200px]">
            <Chart type="line" :data="chartData" :options="chartOptions" class="h-full" />
        </div>
    </div>
</template>
