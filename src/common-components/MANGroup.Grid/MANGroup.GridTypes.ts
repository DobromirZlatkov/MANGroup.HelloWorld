import { PaginationChangedEvent } from 'ag-grid-community'

export type GridProps = {
  columnDefs: any[]
  rowData: any[]
  pagination: boolean
  paginationPageSize: number
  gridStyle?: React.CSSProperties
  className?: string
  onPaginationChanged?: (e: PaginationChangedEvent<any, any>) => void
}
