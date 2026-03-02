import type { KpiItem, SnapshotRow, TunerSlider, NavItem, SidebarItem } from '@/types'

/* ─── Navigation ─── */
export const navItems: NavItem[] = [
    { label: 'FINANCE', active: true },
    { label: 'SALES', active: false },
    { label: 'HR', active: false },
    { label: 'MGMT', active: false },
]

export const sidebarItems: SidebarItem[] = [
    { icon: 'pi pi-th-large', label: 'Dashboard', active: true },
    { icon: 'pi pi-clone', label: 'Layers', active: false },
    { icon: 'pi pi-chart-line', label: 'Analytics', active: false },
    { icon: 'pi pi-users', label: 'HR', active: false },
    { icon: 'pi pi-cog', label: 'Settings', active: false },
]

/* ─── KPI Cards ─── */
export const kpiItems: KpiItem[] = [
    { title: 'Revenue', value: '1,400,000', change: 4, subtitle: 'vs previous month' },
    { title: 'Gross Profit', value: '1,250,000', change: 14, subtitle: 'vs previous month' },
    { title: 'Op. Expenses', value: '600,000', change: 34, subtitle: 'vs previous month' },
    { title: 'Net Income', value: '650,000', change: -25, subtitle: 'vs previous month' },
    { title: 'Cash in Bank', value: '1,700,000', change: -15, subtitle: 'vs previous month' },
    { title: 'Burn Rate', value: '4.1', subtitle: 'Gross' },
    { title: 'Runway', value: '6.5', subtitle: 'Gross' },
]

/* ─── Chart Data ─── */
export const monthLabels = ['Jan', 'Feb', 'Mar', 'Apr', 'May', 'Jun', 'Jul', 'Aug', 'Sep', 'Oct', 'Nov', 'Dec']

export const revenueExpensesData = {
    labels: monthLabels,
    datasets: [
        {
            label: 'Revenue',
            data: [420, 580, 150, 80, 320, 480, 560, 620, 750, 820, 900, 950],
            backgroundColor: '#ec4899',
            borderRadius: 4,
            barPercentage: 0.6,
            categoryPercentage: 0.7,
        },
        {
            label: 'Expenses',
            data: [300, 380, 420, 350, 280, 320, 380, 420, 480, 520, 550, 600],
            backgroundColor: '#3b82f6',
            borderRadius: 4,
            barPercentage: 0.6,
            categoryPercentage: 0.7,
        },
    ],
}

export const profitLossData = {
    labels: ['Q1', 'Q2', 'Q3', 'Q4'],
    datasets: [
        {
            label: 'Profit',
            data: [320, 280, 450, 380],
            backgroundColor: '#ec4899',
            borderRadius: 4,
            barPercentage: 0.6,
            categoryPercentage: 0.7,
        },
        {
            label: 'Loss',
            data: [180, 220, 150, 200],
            backgroundColor: '#3b82f6',
            borderRadius: 4,
            barPercentage: 0.6,
            categoryPercentage: 0.7,
        },
    ],
}

export const goalCompletionData = {
    labels: ['Rev', 'OpEx'],
    datasets: [
        {
            label: 'Achieved',
            data: [75, 62],
            backgroundColor: '#ec4899',
            borderRadius: 4,
            barPercentage: 0.5,
            categoryPercentage: 0.6,
        },
        {
            label: 'Target',
            data: [25, 38],
            backgroundColor: '#3b82f6',
            borderRadius: 4,
            barPercentage: 0.5,
            categoryPercentage: 0.6,
        },
    ],
}

export const cashFlowData = {
    labels: monthLabels,
    datasets: [
        {
            label: 'Inflow',
            data: [380, 420, 350, 300, 380, 450, 520, 580, 620, 680, 720, 750],
            backgroundColor: 'rgba(236, 72, 153, 0.3)',
            borderColor: '#ec4899',
            borderWidth: 2,
            fill: true,
            tension: 0.4,
            pointRadius: 0,
        },
        {
            label: 'Outflow',
            data: [250, 300, 280, 320, 260, 300, 350, 380, 400, 420, 450, 480],
            backgroundColor: 'rgba(59, 130, 246, 0.3)',
            borderColor: '#3b82f6',
            borderWidth: 2,
            fill: true,
            tension: 0.4,
            pointRadius: 0,
        },
    ],
}

export const cashInBankData = {
    labels: monthLabels,
    datasets: [
        {
            label: 'Cash in Bank',
            data: [1200, 1350, 1280, 1400, 1500, 1550, 1480, 1600, 1700, 1650, 1580, 1700],
            backgroundColor: (ctx: any) => {
                const gradient = ctx.chart.ctx.createLinearGradient(0, 0, 0, 200)
                gradient.addColorStop(0, 'rgba(59, 130, 246, 0.5)')
                gradient.addColorStop(1, 'rgba(59, 130, 246, 0.05)')
                return gradient
            },
            borderColor: '#3b82f6',
            borderWidth: 2,
            fill: true,
            tension: 0.4,
            pointRadius: 0,
        },
    ],
}

export const netflowData = {
    labels: monthLabels,
    datasets: [
        {
            label: 'Netflow',
            data: [130, 120, 70, -20, 120, 150, 170, 200, 220, 260, 270, 270],
            borderColor: '#3b82f6',
            borderWidth: 2,
            fill: false,
            tension: 0.4,
            pointRadius: 3,
            pointBackgroundColor: '#3b82f6',
        },
    ],
}

/* ─── Forecast Tuner ─── */
export const forecastSliders: TunerSlider[] = [
    { id: 'revenue-growth', label: 'Revenue Growth', value: 50, min: 0, max: 100 },
    { id: 'cos-revenue', label: 'COS % of Revenue', value: 40, min: 0, max: 100 },
    { id: 'opex-change', label: 'OpEx Change', value: 60, min: 0, max: 100 },
    { id: 'seasonality', label: 'Seasonality', value: 30, min: 0, max: 100 },
    { id: 'pipeline-confidence', label: 'Pipeline Confidence', value: 55, min: 0, max: 100 },
]

export const forecastSnapshot: SnapshotRow[] = [
    { metric: 'Gross Profit', current: '1,250,000', adjusted: '1,250,000', change: '-/' },
    { metric: 'Net Profit', current: '650,000', adjusted: '650,000', change: '-/' },
    { metric: 'OpEx', current: '600,000', adjusted: '600,000', change: '-/' },
    { metric: 'Gross Margin', current: '62%', adjusted: '52%', change: '-/' },
]

export const forecastInsight =
    'These adjustments show how changes in revenue, costs, and spending can influence your profit. Raising revenue or lowering expenses generally improves your margins and supports healthier monthly results.'

/* ─── Cash Flow Tuner ─── */
export const cashFlowSliders: TunerSlider[] = [
    { id: 'inflow-sensitivity', label: 'Inflow Sensitivity', value: 45, min: 0, max: 100 },
    { id: 'opex-tightening', label: 'OpEx Tightening', value: 50, min: 0, max: 100 },
    { id: 'payment-terms', label: 'Payment Terms', value: 60, min: 0, max: 100 },
]

export const cashFlowSnapshot: SnapshotRow[] = [
    { metric: 'Inflow', current: '1,400,000', adjusted: '1,400,000', change: '-/' },
    { metric: 'Outflow', current: '540,000', adjusted: '540,000', change: '-/' },
    { metric: 'Net Cash Flow', current: '880,000', adjusted: '880,000', change: '-/' },
    { metric: 'Cash Balance', current: '58%', adjusted: '58%', change: '-/' },
]

export const cashFlowInsight =
    'Adjusting inflow, outflow, and payment timing helps you see how your cash balance may shift month to month. Higher inflows or lighter spending usually support a stronger cash position.'
