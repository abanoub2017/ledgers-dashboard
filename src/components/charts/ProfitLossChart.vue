<script setup lang="ts">
import { ref } from 'vue'
import Chart from 'primevue/chart'
import { profitLossData } from '@/data/mockData'

const chartData = ref(profitLossData)

/* Draw a gray baseline at y=0 */
const zeroLinePlugin = {
    id: 'zeroLine',
    afterDraw(chart: { ctx: CanvasRenderingContext2D; chartArea: { left: number; right: number }; scales: { y: { getPixelForValue: (v: number) => number } } }) {
        const { ctx, chartArea, scales } = chart
        const yZero = scales.y.getPixelForValue(0)
        ctx.save()
        ctx.strokeStyle = '#cbd5e1'
        ctx.lineWidth = 1
        ctx.beginPath()
        ctx.moveTo(chartArea.left, yZero)
        ctx.lineTo(chartArea.right, yZero)
        ctx.stroke()
        ctx.restore()
    },
}

const chartPlugins = [zeroLinePlugin]

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
            grid: { display: false },
            border: { display: false },
        },
    },
})
</script>

<template>
    <div
        class="bg-white rounded-xl sm:rounded-2xl border border-border-light p-3 sm:p-4 shadow-[0px_4px_12px_rgba(0,0,0,0.06)] flex flex-col">
        <div class="flex items-center gap-0.5 mb-3">
            <span class="text-sm font-bold text-primary-500">Profit</span>
            <span class="text-sm font-bold text-text-primary">/</span>
            <span class="text-sm font-bold text-accent-pink">Loss</span>
        </div>
        <div class="flex-1 min-h-0">
            <Chart type="line" :data="chartData" :options="chartOptions" :plugins="chartPlugins" class="h-full" />
        </div>
    </div>
</template>
