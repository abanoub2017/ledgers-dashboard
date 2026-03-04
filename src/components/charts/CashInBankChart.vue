<script setup lang="ts">
import { ref } from 'vue'
import Chart from 'primevue/chart'

const chartData = ref({
    labels: ['Jan', 'Feb', 'Mar', 'Apr', 'May', 'Jun', 'Jul', 'Aug', 'Sep', 'Oct', 'Nov', 'Dec'],
    datasets: [
        {
            label: 'Cash in Bank',
            data: [1200, 1100, 1350, 1280, 1450, 1500, 1420, 1380, 1300, 1480, 1420, 1550],
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
    ],
})

/* Highlight zone + baseline plugins */
const highlightPlugin = {
    id: 'cashBankHighlight',
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
    id: 'cashBankBaseline',
    afterDraw(chart: { ctx: CanvasRenderingContext2D; chartArea: { left: number; right: number; bottom: number } }) {
        const { ctx, chartArea } = chart
        ctx.save()
        ctx.strokeStyle = '#cbd5e1'
        ctx.lineWidth = 1
        ctx.beginPath()
        ctx.moveTo(chartArea.left, chartArea.bottom)
        ctx.lineTo(chartArea.right, chartArea.bottom)
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
    <div class="bg-white rounded-xl sm:rounded-2xl p-3 sm:p-4 shadow-[0px_4px_12px_rgba(0,0,0,0.06)] flex flex-col">
        <h3 class="text-sm font-semibold text-primary-500 mb-2">Cash In Bank</h3>
        <div class="flex-1 min-h-0">
            <Chart type="line" :data="chartData" :options="chartOptions" :plugins="chartPlugins" class="h-full" />
        </div>
    </div>
</template>
