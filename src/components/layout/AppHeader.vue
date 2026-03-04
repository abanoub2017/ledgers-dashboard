<script setup lang="ts">
import { ref } from 'vue'
import { navItems } from '@/data/mockData'
import logoImg from '@/assets/imgs/logo.png'

const items = ref(navItems)

const emit = defineEmits<{
    toggleSidebar: []
}>()

const setActive = (index: number) => {
    items.value.forEach((item, i) => {
        item.active = i === index
    })
}
</script>

<template>
    <header class="bg-primary-500 rounded-2xl mx-2 mt-2 px-4 py-3 flex items-center justify-between gap-4 shadow-sm">
        <!-- Left: Logo + Title -->
        <div class="flex items-center gap-4 min-w-0">
            <!-- Mobile menu button -->
            <button
                class="lg:hidden flex items-center justify-center w-8 h-8 rounded-lg text-white hover:bg-white/20 transition-colors"
                @click="emit('toggleSidebar')">
                <i class="pi pi-bars text-lg" />
            </button>

            <!-- Logo (mobile) -->
            <div class="lg:hidden flex items-center">
                <img :src="logoImg" alt="Ledgers" class="w-8 h-8 object-contain" />
            </div>

            <!-- Title section -->
            <div class="hidden sm:block">
                <h1 class="text-white text-lg font-semibold leading-tight">
                    The <span class="font-bold">Essentials.</span>
                </h1>
                <p class="text-primary-200 text-xs">Here's how your business is performing today.</p>
            </div>
        </div>

        <!-- Center: Nav Tabs -->
        <nav class="hidden md:flex items-center bg-white/20 rounded-full p-1 gap-0.5">
            <button v-for="(item, index) in items" :key="item.label" :class="[
                'px-4 py-1.5 rounded-full text-xs font-semibold transition-all duration-200',
                item.active
                    ? 'bg-primary-600 text-white shadow-sm'
                    : 'text-white/80 hover:text-white hover:bg-white/10',
            ]" @click="setActive(index)">
                {{ item.label }}
            </button>
        </nav>

        <!-- Right: Date + Actions -->
        <div class="flex items-center gap-2">
            <!-- Date badge -->
            <div
                class="hidden sm:flex items-center gap-1.5 bg-white rounded-full px-3 py-1.5 text-xs font-medium text-slate-700">
                <i class="pi pi-calendar text-xs text-slate-500" />
                Sep 25
            </div>

            <!-- Hamburger -->
            <button
                class="hidden md:flex items-center justify-center w-8 h-8 rounded-full bg-white/20 text-white hover:bg-white/30 transition-colors">
                <i class="pi pi-bars text-sm" />
            </button>

            <!-- Notification Icons -->
            <div class="flex items-center gap-0.5 bg-primary-600 rounded-full px-2 py-1">
                <button
                    class="flex items-center justify-center w-7 h-7 rounded-full text-white hover:bg-white/20 transition-colors">
                    <i class="pi pi-bell text-sm" />
                </button>
                <button
                    class="hidden sm:flex items-center justify-center w-7 h-7 rounded-full text-white hover:bg-white/20 transition-colors">
                    <i class="pi pi-cog text-sm" />
                </button>
                <button
                    class="hidden sm:flex items-center justify-center w-7 h-7 rounded-full text-white hover:bg-white/20 transition-colors">
                    <i class="pi pi-users text-sm" />
                </button>
                <button
                    class="flex items-center justify-center w-7 h-7 rounded-full text-white hover:bg-white/20 transition-colors">
                    <i class="pi pi-user text-sm" />
                </button>
            </div>
        </div>
    </header>
</template>
