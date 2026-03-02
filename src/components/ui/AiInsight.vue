<script setup lang="ts">
defineProps<{
    text: string
}>()
</script>

<template>
    <div class="mt-3">
        <span class="inline-block text-xs font-bold text-primary-500 mb-1.5">Ledgers AI</span>
        <p class="text-xs text-text-secondary leading-relaxed italic">
            "{{ text }}"
        </p>
    </div>
</template>
