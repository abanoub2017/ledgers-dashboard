<script setup lang="ts">
import { ref } from 'vue'
import Chart from 'primevue/chart'
import { cashInBankData } from '@/data/mockData'

const chartData = ref({
    labels: cashInBankData.labels,
    datasets: [
        {
            label: 'Cash in Bank',
            data: [1200, 1350, 1280, 1400, 1500, 1550, 1480, 1600, 1700, 1650, 1580, 1700],
            borderColor: '#3b82f6',
            borderWidth: 2,
            fill: true,
            tension: 0.4,
            pointRadius: 0,
            backgroundColor: 'rgba(59, 130, 246, 0.15)',
        },
    ],
})

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
    <div class="bg-white rounded-xl border border-gray-100 p-4 shadow-sm">
        <h3 class="text-sm font-semibold text-primary-600 mb-2">Cash In Bank</h3>
        <div class="h-[100px]">
            <Chart type="line" :data="chartData" :options="chartOptions" class="h-full" />
        </div>
    </div>
</template>
