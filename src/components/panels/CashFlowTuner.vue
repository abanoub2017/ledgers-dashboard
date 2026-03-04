<script setup lang="ts">
import { ref } from 'vue'
import { cashFlowSliders, cashFlowSnapshot, cashFlowInsight } from '@/data/mockData'
import type { TunerSlider } from '@/types'

const sliders = ref<TunerSlider[]>(JSON.parse(JSON.stringify(cashFlowSliders)))

const updateSlider = (index: number, value: number) => {
    const slider = sliders.value[index]
    if (slider) slider.value = value
}
</script>

<template>
    <div class="bg-white rounded-2xl border border-border-light p-4 sm:p-5 shadow-[0px_4px_12px_rgba(0,0,0,0.06)]">
        <!-- Header -->
        <h3 class="text-sm font-bold text-text-primary mb-0.5">Cash Flow Scenario Tuner</h3>
        <p class="text-xs text-text-secondary mb-3 sm:mb-4">
            Adjust inflow, outflow, and operational levers to see instant impact on runway and cash position.
        </p>

        <!-- Sliders -->
        <div class="grid grid-cols-2 lg:grid-cols-3 gap-x-5 gap-y-2.5 mb-4">
            <SliderControl v-for="(slider, index) in sliders" :key="slider.id" :label="slider.label"
                :modelValue="slider.value" :min="slider.min" :max="slider.max"
                @update:modelValue="(val: number) => updateSlider(index, val)" />
        </div>

        <!-- Output Snapshot -->
        <OutputSnapshot title="Output Snapshot:" :rows="cashFlowSnapshot" />

        <!-- AI Insight -->
        <AiInsight :text="cashFlowInsight" />

        <!-- Generate Button -->
        <div class="mt-4">
            <GenerateButton />
        </div>
    </div>
</template>
