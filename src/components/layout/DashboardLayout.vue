<script setup lang="ts">
import { ref } from 'vue'

const sidebar = ref<{ isMobileOpen: boolean } | null>(null)

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
            <main class="flex-1 p-2 sm:p-3 lg:p-4">
                <slot />
            </main>
        </div>
    </div>
</template>
