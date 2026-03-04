<script setup lang="ts">
import { ref } from 'vue'
import Chart from 'primevue/chart'
import { cashFlowData } from '@/data/mockData'

const chartData = ref(cashFlowData)

/* Highlight zone plugin for Sep-Dec */
const highlightPlugin = {
    id: 'cashFlowHighlight',
    beforeDraw(chart: { ctx: CanvasRenderingContext2D; chartArea: { top: number; bottom: number }; scales: { x: { getPixelForValue: (v: number) => number } } }) {
        const { ctx, chartArea, scales } = chart
        const x1 = scales.x.getPixelForValue(8) // Sep
        const x2 = scales.x.getPixelForValue(11) // Dec
        const pad = (scales.x.getPixelForValue(1) - scales.x.getPixelForValue(0)) * 0.5
        ctx.save()
        ctx.fillStyle = 'rgba(215, 227, 240, 0.5)'
        ctx.fillRect(x1 - pad, chartArea.top, (x2 - x1) + pad * 2, chartArea.bottom - chartArea.top)
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
            display: false,
            beginAtZero: true,
        },
    },
})
</script>

<template>
    <div class="bg-white rounded-xl sm:rounded-2xl border border-border-light p-3 sm:p-4 shadow-card flex flex-col">
        <h3 class="text-sm font-semibold text-text-primary mb-4">Cash Inflow vs outflow</h3>
        <div class="flex-1 min-h-50">
            <Chart type="line" :data="chartData" :options="chartOptions" :plugins="chartPlugins" class="h-full" />
        </div>
    </div>
</template>
