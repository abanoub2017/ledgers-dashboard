<script setup lang="ts">
import { ref } from 'vue'
import AppSidebar from './AppSidebar.vue'
import AppHeader from './AppHeader.vue'

const sidebar = ref<InstanceType<typeof AppSidebar> | null>(null)

const toggleSidebar = () => {
    if (sidebar.value) {
        sidebar.value.isMobileOpen = !sidebar.value.isMobileOpen
    }
}
</script>

<template>
    <div class="min-h-screen bg-surface-page">
        <!-- Sidebar -->
        <AppSidebar ref="sidebar" />

        <!-- Main Content Area -->
        <div class="lg:ml-20 min-h-screen flex flex-col overflow-x-hidden">
            <!-- Header -->
            <AppHeader @toggle-sidebar="toggleSidebar" />

            <!-- Dashboard Content -->
            <main class="flex-1 p-3 lg:p-6 pt-6 lg:pt-8">
                <slot />
            </main>
        </div>
    </div>
</template>
