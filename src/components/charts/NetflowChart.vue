<script setup lang="ts">
import { ref } from 'vue'
import Chart from 'primevue/chart'
import { netflowData } from '@/data/mockData'

const chartData = ref(netflowData)

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
        <h3 class="text-sm font-semibold text-primary-600 mb-2">Netflow</h3>
        <div class="h-[100px]">
            <Chart type="line" :data="chartData" :options="chartOptions" class="h-full" />
        </div>
    </div>
</template>
