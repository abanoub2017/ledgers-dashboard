<script setup lang="ts">
const emit = defineEmits<{
    click: []
}>()
</script>

<template>
    <button
        class="flex items-center gap-2 px-5 py-2 border-2 border-primary-500 text-primary-600 rounded-full text-sm font-semibold hover:bg-primary-50 transition-colors duration-200 mx-auto"
        @click="emit('click')">
        Generate
        <span class="text-base">✨</span>
    </button>
</template>
