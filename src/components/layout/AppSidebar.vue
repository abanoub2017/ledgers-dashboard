<script setup lang="ts">
import { ref } from 'vue'
import { sidebarItems } from '@/data/mockData'
import logoImg from '@/assets/imgs/logo.png'
import type { SidebarItem } from '@/types'

const items = ref<SidebarItem[]>(JSON.parse(JSON.stringify(sidebarItems)))
const isMobileOpen = ref(false)

const setActive = (index: number) => {
    items.value.forEach((item, i) => {
        item.active = i === index
    })
}

defineExpose({ isMobileOpen })
</script>

<template>
    <!-- Desktop Sidebar -->
    <aside
        class="hidden lg:flex fixed left-0 top-0 bottom-0 z-40 w-20 flex-col items-center py-5 gap-2 bg-white border-r border-border-light shadow-card">
        <!-- Logo -->
        <div class="mb-8 flex flex-col items-center justify-center gap-1">
            <img :src="logoImg" alt="Ledgers" class="w-10 h-10 object-contain" />
            <span class="text-[9px] font-medium text-slate-500 tracking-wide">ledgers.</span>
        </div>

        <!-- Nav Icons -->
        <nav class="flex flex-col gap-3 mt-10">
            <button v-for="(item, index) in items" :key="item.label" :class="[
                'flex items-center justify-center w-11 h-11 rounded-full cursor-pointer transition-all duration-200',
                item.active
                    ? 'bg-primary-500 text-white shadow-md'
                    : 'text-slate-700 hover:text-primary-600 hover:bg-gray-100',
            ]" :title="item.label" @click="setActive(Number(index))">
                <i :class="[item.icon, 'text-xl font-bold']" />
            </button>
        </nav>
    </aside>

    <!-- Mobile Sidebar Overlay -->
    <Transition name="fade">
        <div v-if="isMobileOpen" class="fixed inset-0 bg-black/50 z-40 lg:hidden" @click="isMobileOpen = false" />
    </Transition>

    <!-- Mobile Sidebar Drawer -->
    <Transition name="slide">
        <aside v-if="isMobileOpen"
            class="fixed left-0 top-0 bottom-0 z-50 w-20 flex flex-col items-center py-5 gap-2 lg:hidden bg-white border-r border-border-light shadow-md">
            <div class="mb-8 flex flex-col items-center justify-center gap-1">
                <img :src="logoImg" alt="Ledgers" class="w-10 h-10 object-contain" />
                <span class="text-[9px] font-medium text-slate-500 tracking-wide">ledgers.</span>
            </div>

            <nav class="flex flex-col gap-3">
                <button v-for="(item, index) in items" :key="item.label" :class="[
                    'flex items-center justify-center w-11 h-11 rounded-full cursor-pointer transition-all duration-200',
                    item.active
                        ? 'bg-primary-500 text-white shadow-md'
                        : 'text-slate-700 hover:text-primary-600 hover:bg-gray-100',
                ]" :title="item.label" @click="setActive(Number(index))">
                    <i :class="[item.icon, 'text-xl font-bold']" />
                </button>
            </nav>
        </aside>
    </Transition>
</template>

<style scoped>
.fade-enter-active,
.fade-leave-active {
    transition: opacity 0.2s ease;
}

.fade-enter-from,
.fade-leave-to {
    opacity: 0;
}

.slide-enter-active,
.slide-leave-active {
    transition: transform 0.3s ease;
}

.slide-enter-from,
.slide-leave-to {
    transform: translateX(-100%);
}
</style>
