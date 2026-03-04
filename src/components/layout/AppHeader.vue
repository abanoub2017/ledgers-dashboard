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
    <header class="relative mx-2 mt-2 px-6 py-4 flex items-center justify-between gap-4">
        <!-- Left: Title -->
        <div class="flex items-center gap-4 min-w-0">
            <!-- Mobile menu button -->
            <button
                class="lg:hidden flex items-center justify-center w-8 h-8 rounded-lg text-slate-700 hover:bg-white/40 transition-colors cursor-pointer"
                @click="emit('toggleSidebar')">
                <i class="pi pi-bars text-lg" />
            </button>

            <!-- Logo (mobile) -->
            <div class="lg:hidden flex items-center">
                <img :src="logoImg" alt="Ledgers" class="w-8 h-8 object-contain" />
            </div>

            <!-- Title section -->
            <div class="hidden sm:block">
                <h1 class="text-slate-800 text-lg font-semibold leading-tight">
                    The <span class="font-bold">Essentials.</span>
                </h1>
                <p class="text-primary-500/70 text-xs">Here's how your business is performing today.</p>
            </div>
        </div>

        <!-- Center: Nav Tabs -->
        <nav class="hidden md:flex items-center gap-1.5">
            <!-- Grid icon before tabs -->
            <div class="flex items-center justify-center w-9 h-9 rounded-full bg-primary-500 text-white mr-1">
                <i class="pi pi-th-large text-sm" />
            </div>

            <div class="flex items-center bg-white/80 backdrop-blur-sm rounded-full p-1 gap-0.5 shadow-sm">
                <button v-for="(item, index) in items" :key="item.label" :class="[
                    'px-5 py-2 rounded-full text-xs font-semibold transition-all duration-200 cursor-pointer',
                    item.active
                        ? 'bg-primary-500 text-white shadow-sm'
                        : 'text-slate-600 hover:text-slate-900 hover:bg-gray-100',
                ]" @click="setActive(index)">
                    {{ item.label }}
                </button>
            </div>
        </nav>

        <!-- Right: Date + Hamburger -->
        <div class="flex items-center gap-3 mr-52 sm:mr-56">
            <!-- Date badge -->
            <div
                class="hidden sm:flex items-center gap-1.5 bg-white rounded-full px-4 py-2 text-xs font-medium text-slate-700 border border-gray-200 shadow-sm">
                <i class="pi pi-calendar text-xs text-slate-400" />
                Sep 25
            </div>

            <!-- Hamburger -->
            <button
                class="hidden md:flex items-center justify-center w-11 h-11 rounded-full bg-primary-500 text-white shadow-md hover:bg-primary-600 transition-colors cursor-pointer">
                <i class="pi pi-bars text-lg" />
            </button>
        </div>

        <!-- Action Icons - pinned to top-right with spacing, starts from top edge -->
        <div class="absolute top-0 right-8 flex items-center gap-1 bg-primary-500 rounded-b-2xl px-5 py-3 shadow-lg">
            <button
                class="flex items-center justify-center w-9 h-9 rounded-full text-white hover:bg-white/20 transition-colors cursor-pointer">
                <i class="pi pi-bell text-base" />
            </button>
            <button
                class="hidden sm:flex items-center justify-center w-9 h-9 rounded-full text-white hover:bg-white/20 transition-colors cursor-pointer">
                <i class="pi pi-cog text-base" />
            </button>
            <button
                class="hidden sm:flex items-center justify-center w-9 h-9 rounded-full text-white hover:bg-white/20 transition-colors cursor-pointer">
                <i class="pi pi-users text-base" />
            </button>
            <button
                class="flex items-center justify-center w-9 h-9 rounded-full text-white hover:bg-white/20 transition-colors cursor-pointer">
                <i class="pi pi-user text-base" />
            </button>
        </div>
    </header>
</template>
