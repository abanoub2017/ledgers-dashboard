<script setup lang="ts">
import { ref } from 'vue'
import Chart from 'primevue/chart'

const chartData = ref({
    labels: ['Jan', 'Feb', 'Mar', 'Apr', 'May', 'Jun', 'Jul', 'Aug', 'Sep', 'Oct', 'Nov', 'Dec'],
    datasets: [
        {
            label: 'Netflow',
            data: [130, 120, 70, -20, 120, 150, 170, 200, 220, 260, 270, 270],
            borderColor: '#0B86DF',
            borderWidth: 2.5,
            fill: false,
            tension: 0.35,
            pointRadius: 5,
            pointBackgroundColor: '#ffffff',
            pointBorderColor: '#0B86DF',
            pointBorderWidth: 2,
            pointHoverRadius: 7,
        },
        {
            label: 'Negative',
            data: [0, 0, 0, -20, 0, 0, 0, 0, 0, 0, 0, 0],
            borderColor: '#F34C7F',
            borderWidth: 2,
            fill: 'origin',
            backgroundColor: 'rgba(243, 76, 127, 0.15)',
            tension: 0.35,
            pointRadius: 4,
            pointBackgroundColor: '#ffffff',
            pointBorderColor: '#F34C7F',
            pointBorderWidth: 2,
        },
    ],
})

/* Highlight zone + baseline plugins */
const highlightPlugin = {
    id: 'netflowHighlight',
    beforeDraw(chart: { ctx: CanvasRenderingContext2D; chartArea: { top: number; bottom: number; left: number; right: number }; scales: { x: { getPixelForValue: (v: number) => number } } }) {
        const { ctx, chartArea, scales } = chart
        const x1 = scales.x.getPixelForValue(8)
        const pad = (scales.x.getPixelForValue(1) - scales.x.getPixelForValue(0)) * 0.5
        ctx.save()
        ctx.fillStyle = 'rgba(215, 227, 240, 0.4)'
        ctx.fillRect(x1 - pad, chartArea.top, chartArea.right - (x1 - pad), chartArea.bottom - chartArea.top)
        ctx.restore()
    },
}

const baselinePlugin = {
    id: 'netflowBaseline',
    afterDraw(chart: { ctx: CanvasRenderingContext2D; chartArea: { left: number; right: number }; scales: { y: { getPixelForValue: (v: number) => number } } }) {
        const { ctx, chartArea, scales } = chart
        const yZero = scales.y.getPixelForValue(0)
        ctx.save()
        ctx.strokeStyle = 'rgba(236, 72, 153, 0.4)'
        ctx.lineWidth = 1.5
        ctx.beginPath()
        ctx.moveTo(chartArea.left, yZero)
        ctx.lineTo(chartArea.right, yZero)
        ctx.stroke()
        ctx.restore()
    },
}

const chartPlugins = [highlightPlugin, baselinePlugin]

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
            display: false,
        },
        y: {
            display: false,
        },
    },
})
</script>

<template>
    <div class="bg-white rounded-xl sm:rounded-2xl border border-border-light p-3 sm:p-4 shadow-card flex flex-col">
        <h3 class="text-sm font-semibold text-text-primary mb-2">NetFlow</h3>
        <div class="flex-1 min-h-0">
            <Chart type="line" :data="chartData" :options="chartOptions" :plugins="chartPlugins" class="h-full" />
        </div>
    </div>
</template>
