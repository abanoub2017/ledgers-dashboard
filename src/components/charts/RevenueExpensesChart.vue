<script setup lang="ts">
import { ref } from 'vue'
import Chart from 'primevue/chart'
import { revenueExpensesData } from '@/data/mockData'

const chartData = ref(revenueExpensesData)

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
            max: 1000,
            ticks: {
                font: { size: 11, family: 'Inter' },
                color: '#94a3b8',
                stepSize: 180,
                callback: (value: number) => value,
            },
            grid: { color: '#f1f5f9' },
            border: { display: false },
        },
    },
})
</script>

<template>
    <div class="bg-white rounded-xl border border-gray-100 p-4 shadow-sm">
        <!-- Header -->
        <div class="flex items-center justify-between mb-4">
            <div class="flex items-center gap-2">
                <span class="text-sm font-semibold text-text-primary">Revenue vs Expenses</span>
                <i class="pi pi-chevron-down text-xs text-text-muted" />
            </div>
        </div>

        <!-- Chart -->
        <div class="h-[300px]">
            <Chart type="bar" :data="chartData" :options="chartOptions" class="h-full" />
        </div>

        <!-- Legend / Note -->
        <div class="flex items-center gap-2 mt-3 pt-3 border-t border-gray-50">
            <span class="text-primary-400 text-xs">✦</span>
            <p class="text-xs text-text-muted italic">
                Losses in March and April driven by seasonality + marketing spikes
            </p>
        </div>
    </div>
</template>
