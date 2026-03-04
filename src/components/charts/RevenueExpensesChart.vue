<script setup lang="ts">
import { ref } from 'vue'
import Chart from 'primevue/chart'
import { revenueExpensesData } from '@/data/mockData'

const chartData = ref(revenueExpensesData)

/* Custom plugin: highlights a range of bars with a light background */
const highlightPlugin = {
    id: 'highlightRange',
    beforeDraw(chart: { ctx: CanvasRenderingContext2D; chartArea: { top: number; bottom: number }; scales: { x: { getPixelForValue: (v: number) => number } }; data: { labels: string[] } }) {
        const { ctx, chartArea, scales } = chart
        const startIndex = 8 // Sep
        const endIndex = 11 // Dec
        const barWidth = (scales.x.getPixelForValue(1) - scales.x.getPixelForValue(0)) * 0.6
        const x1 = scales.x.getPixelForValue(startIndex) - barWidth
        const x2 = scales.x.getPixelForValue(endIndex) + barWidth
        ctx.save()
        ctx.fillStyle = 'rgba(215, 227, 240, 0.5)'
        ctx.fillRect(x1, chartArea.top, x2 - x1, chartArea.bottom - chartArea.top)
        ctx.restore()
    },
}

const chartPlugins = [highlightPlugin]

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
    <div class="bg-white rounded-xl sm:rounded-2xl border border-border-light p-3 sm:p-4 shadow-card">
        <!-- Header -->
        <div class="flex items-center justify-between mb-3 sm:mb-4">
            <div class="flex items-center gap-2">
                <span class="text-sm font-semibold text-text-primary">Revenue vs Expenses</span>
                <i class="pi pi-chevron-down text-xs text-text-muted" />
            </div>
        </div>

        <!-- Chart -->
        <div class="h-55 sm:h-70 lg:h-75">
            <Chart type="bar" :data="chartData" :options="chartOptions" :plugins="chartPlugins" class="h-full" />
        </div>

        <!-- Legend / Note -->
        <div class="flex items-center gap-2 mt-3 pt-3 border-t border-border-light">
            <span class="text-primary-400 text-xs">✦</span>
            <p class="text-xs text-text-muted italic">
                Losses in March and April driven by seasonality + marketing spikes
            </p>
        </div>
    </div>
</template>
