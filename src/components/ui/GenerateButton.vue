<script setup lang="ts">
const emit = defineEmits<{
    click: []
}>()
</script>

<template>
    <button
        class="flex items-center gap-2 px-6 py-2 border-2 border-primary-500 text-primary-500 rounded-full text-sm font-semibold hover:bg-primary-50 transition-colors duration-200 mx-auto"
        @click="emit('click')">
        Generate
        <span class="text-base">✨</span>
    </button>
</template>
