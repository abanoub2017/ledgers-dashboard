<script setup lang="ts">
import { kpiItems } from '@/data/mockData'
</script>

<template>
    <DashboardLayout>
        <!-- Main Grid: Left content + Right panels -->
        <div class="grid grid-cols-1 xl:grid-cols-[1fr_380px] gap-3 sm:gap-4">
            <!-- Left Column: KPI Cards + Charts -->
            <div class="flex flex-col gap-3 sm:gap-4">
                <!-- KPI Cards Grid -->
                <section>
                    <div class="grid grid-cols-2 sm:grid-cols-3 md:grid-cols-4 xl:grid-cols-7 gap-2 sm:gap-3">
                        <KpiCard v-for="item in kpiItems" :key="item.title" :title="item.title" :value="item.value"
                            :change="item.change" :subtitle="item.subtitle" />
                    </div>
                </section>

                <!-- Revenue vs Expenses + Small Charts Row -->
                <div class="grid grid-cols-1 lg:grid-cols-[1fr_260px] gap-3 sm:gap-4 items-stretch">
                    <!-- Main bar chart -->
                    <RevenueExpensesChart />

                    <!-- Small charts stack -->
                    <div class="flex flex-col gap-3 sm:gap-4">
                        <ProfitLossChart class="flex-1" />
                        <GoalCompletionChart class="flex-1" />
                    </div>
                </div>

                <!-- Cash Flow Section - Blue background wrapper -->
                <div
                    class="bg-primary-500 rounded-2xl sm:rounded-[20px] p-2 sm:p-3 grid grid-cols-1 lg:grid-cols-[1fr_260px] gap-2 sm:gap-3 items-stretch">
                    <!-- Area chart -->
                    <CashFlowAreaChart />

                    <!-- Small charts stack -->
                    <div class="flex flex-col gap-2 sm:gap-3">
                        <CashInBankChart class="flex-1" />
                        <NetflowChart class="flex-1" />
                    </div>
                </div>
            </div>

            <!-- Right Column: Tuner Panels (blue bg wrapper) -->
            <div class="bg-primary-500 rounded-2xl sm:rounded-[20px] p-2 sm:p-3 flex flex-col gap-2 sm:gap-3">
                <ForecastTuner />
                <CashFlowTuner />
            </div>
        </div>
    </DashboardLayout>
</template>
