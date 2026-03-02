<script setup lang="ts">
import { ref } from 'vue'
import SliderControl from '@/components/ui/SliderControl.vue'
import OutputSnapshot from './OutputSnapshot.vue'
import AiInsight from '@/components/ui/AiInsight.vue'
import { cashFlowSliders, cashFlowSnapshot, cashFlowInsight } from '@/data/mockData'
import type { TunerSlider } from '@/types'

const sliders = ref<TunerSlider[]>(JSON.parse(JSON.stringify(cashFlowSliders)))

const updateSlider = (index: number, value: number) => {
    const slider = sliders.value[index]
    if (slider) slider.value = value
}
</script>

<template>
    <div class="bg-white rounded-xl border border-gray-100 p-4 shadow-sm">
        <!-- Header -->
        <h3 class="text-sm font-bold text-text-primary mb-1">Cash Flow Scenario Tuner</h3>
        <p class="text-xs text-text-muted mb-4">
            Adjust inflow, outflow, and operational levers to see instant impact on runway and cash position.
        </p>

        <!-- Sliders -->
        <div class="grid grid-cols-3 gap-x-4 gap-y-3 mb-4">
            <SliderControl v-for="(slider, index) in sliders" :key="slider.id" :label="slider.label"
                :modelValue="slider.value" :min="slider.min" :max="slider.max"
                @update:modelValue="(val: number) => updateSlider(index, val)" />
        </div>

        <!-- Output Snapshot -->
        <OutputSnapshot title="Output Snapshot:" :rows="cashFlowSnapshot" />

        <!-- AI Insight -->
        <AiInsight :text="cashFlowInsight" />
    </div>
</template>
