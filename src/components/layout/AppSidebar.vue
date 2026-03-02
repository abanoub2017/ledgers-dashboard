<script setup lang="ts">
import { ref } from 'vue'
import { sidebarItems } from '@/data/mockData'

const items = ref(sidebarItems)
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
    <aside class="hidden lg:flex fixed left-0 top-0 bottom-0 z-40 w-16 flex-col items-center py-6 gap-2"
        style="background-color: var(--color-surface-sidebar)">
        <!-- Logo -->
        <div class="mb-6 flex items-center justify-center w-10 h-10">
            <span class="text-white text-2xl font-bold">g</span>
            <span class="text-primary-400 text-2xl font-bold">.</span>
        </div>

        <!-- Nav Icons -->
        <nav class="flex flex-col gap-1 flex-1">
            <button v-for="(item, index) in items" :key="item.label" :class="[
                'flex items-center justify-center w-10 h-10 rounded-xl transition-all duration-200',
                item.active
                    ? 'bg-primary-500 text-white shadow-md'
                    : 'text-slate-400 hover:text-white hover:bg-white/10',
            ]" :title="item.label" @click="setActive(index)">
                <i :class="[item.icon, 'text-lg']" />
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
            class="fixed left-0 top-0 bottom-0 z-50 w-16 flex flex-col items-center py-6 gap-2 lg:hidden"
            style="background-color: var(--color-surface-sidebar)">
            <div class="mb-6 flex items-center justify-center w-10 h-10">
                <span class="text-white text-2xl font-bold">g</span>
                <span class="text-primary-400 text-2xl font-bold">.</span>
            </div>

            <nav class="flex flex-col gap-1 flex-1">
                <button v-for="(item, index) in items" :key="item.label" :class="[
                    'flex items-center justify-center w-10 h-10 rounded-xl transition-all duration-200',
                    item.active
                        ? 'bg-primary-500 text-white shadow-md'
                        : 'text-slate-400 hover:text-white hover:bg-white/10',
                ]" :title="item.label" @click="setActive(index)">
                    <i :class="[item.icon, 'text-lg']" />
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
