<script setup lang="ts">
import Slider from 'primevue/slider'

const props = defineProps<{
    label: string
    modelValue: number
    min?: number
    max?: number
    step?: number
}>()

const emit = defineEmits<{
    'update:modelValue': [value: number]
}>()

const onUpdate = (val: number | number[]) => {
    const v = Array.isArray(val) ? val[0] ?? 0 : val
    emit('update:modelValue', v)
}
</script>

<template>
    <div class="flex flex-col gap-[6px]">
        <label class="text-xs font-medium text-text-primary">{{ props.label }}:</label>
        <Slider :modelValue="props.modelValue" :min="props.min ?? 0" :max="props.max ?? 100" :step="props.step ?? 1"
            class="w-full" @update:modelValue="onUpdate" />
    </div>
</template>
