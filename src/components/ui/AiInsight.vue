<script setup lang="ts">
defineProps<{
    text: string
}>()
</script>

<template>
    <div class="mt-3">
        <p class="text-[11px] font-bold text-primary-500 mb-1 text-center">Ledgers AI</p>
        <p class="text-[11px] text-text-secondary leading-relaxed italic">
            "{{ text }}"
        </p>
    </div>
</template>
