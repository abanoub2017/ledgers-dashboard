<script setup lang="ts">
import DashboardLayout from '@/components/layout/DashboardLayout.vue'
import KpiCard from '@/components/cards/KpiCard.vue'
import RevenueExpensesChart from '@/components/charts/RevenueExpensesChart.vue'
import ProfitLossChart from '@/components/charts/ProfitLossChart.vue'
import GoalCompletionChart from '@/components/charts/GoalCompletionChart.vue'
import CashFlowAreaChart from '@/components/charts/CashFlowAreaChart.vue'
import CashInBankChart from '@/components/charts/CashInBankChart.vue'
import NetflowChart from '@/components/charts/NetflowChart.vue'
import ForecastTuner from '@/components/panels/ForecastTuner.vue'
import CashFlowTuner from '@/components/panels/CashFlowTuner.vue'
import { kpiItems } from '@/data/mockData'
</script>

<template>
    <DashboardLayout>
        <!-- Main Grid: Left content + Right panels -->
        <div class="grid grid-cols-1 xl:grid-cols-[1fr_380px] gap-6">
            <!-- Left Column: KPI Cards + Charts -->
            <div class="flex flex-col gap-4">
                <!-- KPI Cards Grid -->
                <section>
                    <div class="grid grid-cols-2 sm:grid-cols-3 md:grid-cols-4 xl:grid-cols-7 gap-3">
                        <KpiCard v-for="item in kpiItems" :key="item.title" :title="item.title" :value="item.value"
                            :change="item.change" :subtitle="item.subtitle" />
                    </div>
                </section>

                <!-- Revenue vs Expenses + Small Charts Row -->
                <div class="grid grid-cols-1 lg:grid-cols-[1fr_280px] gap-4 items-stretch">
                    <!-- Main bar chart -->
                    <RevenueExpensesChart />

                    <!-- Small charts stack -->
                    <div class="flex flex-col gap-4">
                        <ProfitLossChart class="flex-1" />
                        <GoalCompletionChart class="flex-1" />
                    </div>
                </div>

                <!-- Cash Flow Section -->
                <div class="grid grid-cols-1 lg:grid-cols-[1fr_280px] gap-4">
                    <!-- Area chart -->
                    <CashFlowAreaChart />

                    <!-- Small charts stack -->
                    <div class="flex flex-col gap-4">
                        <CashInBankChart />
                        <NetflowChart />
                    </div>
                </div>
            </div>

            <!-- Right Column: Tuner Panels -->
            <div class="flex flex-col gap-4">
                <ForecastTuner />
                <CashFlowTuner />
            </div>
        </div>
    </DashboardLayout>
</template>
