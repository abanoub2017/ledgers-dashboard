<script setup lang="ts">
import { ref } from 'vue'
import SliderControl from '@/components/ui/SliderControl.vue'
import OutputSnapshot from './OutputSnapshot.vue'
import AiInsight from '@/components/ui/AiInsight.vue'
import GenerateButton from '@/components/ui/GenerateButton.vue'
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
        <h3 class="text-base font-bold text-gray-900 mb-1">Cash Flow Scenario Tuner</h3>
        <p class="text-sm text-gray-500 mb-4">
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

        <!-- Generate Button -->
        <div class="mt-4">
            <GenerateButton />
        </div>
    </div>
</template>
