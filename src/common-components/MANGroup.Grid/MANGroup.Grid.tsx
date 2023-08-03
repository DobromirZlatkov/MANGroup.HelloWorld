import React from 'react'
import { AgGridReact } from 'ag-grid-react'
import { GridProps } from './MANGroup.GridTypes'
import 'ag-grid-community/styles/ag-grid.css'
import 'ag-grid-community/styles/ag-theme-alpine.css'

const Grid: React.FC<GridProps> = ({
  columnDefs,
  rowData,
  gridStyle,
  className,
  onPaginationChanged,
  pagination,
  paginationPageSize,
}) => {
  return (
    <div className={`ag-theme-alpine ${className}`} style={gridStyle}>
      <AgGridReact
        columnDefs={columnDefs}
        rowData={rowData}
        pagination={pagination}
        paginationPageSize={paginationPageSize}
        onPaginationChanged={onPaginationChanged}
      />
    </div>
  )
}

export default Grid
