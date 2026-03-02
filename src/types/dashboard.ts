export interface KpiItem {
    title: string
    value: string
    change?: number
    changeLabel?: string
    subtitle?: string
}

export interface SnapshotRow {
    metric: string
    current: string
    adjusted: string
    change: string
}

export interface TunerSlider {
    id: string
    label: string
    value: number
    min: number
    max: number
    step?: number
}

export interface ChartDataset {
    label: string
    data: number[]
    backgroundColor?: string | string[]
    borderColor?: string | string[]
    borderWidth?: number
    fill?: boolean | string
    tension?: number
    pointRadius?: number
    pointBackgroundColor?: string
    borderRadius?: number
    barPercentage?: number
    categoryPercentage?: number
    order?: number
}

export interface DashboardChartData {
    labels: string[]
    datasets: ChartDataset[]
}

export interface NavItem {
    label: string
    active: boolean
}

export interface SidebarItem {
    icon: string
    label: string
    active: boolean
}
