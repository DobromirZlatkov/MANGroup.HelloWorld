import React from 'react'
import { render, screen } from '@testing-library/react'
import Grid from './MANGroup.Grid'
import '@testing-library/jest-dom'

describe('Grid component', () => {
  it('renders the grid with column headers', () => {
    const columnDefs = [
      { headerName: 'Make', field: 'make' },
      { headerName: 'Model', field: 'model' },
      { headerName: 'Price', field: 'price' },
    ]
    const rowData = [
      { make: 'Toyota', model: 'Celica', price: 35000 },
      { make: 'Ford', model: 'Mondeo', price: 32000 },
      { make: 'Porsche', model: 'Boxter', price: 72000 },
    ]
    render(
      <Grid
        columnDefs={columnDefs}
        rowData={rowData}
        className="test-grid"
        pagination
        paginationPageSize={10}
        onPaginationChanged={jest.fn()}
      />
    )
    columnDefs.forEach((column) => {
      expect(screen.getByText(column.headerName)).toBeInTheDocument()
    })
  })

  it('renders the grid with row data', () => {
    const columnDefs = [
      { headerName: 'Make', field: 'make' },
      { headerName: 'Model', field: 'model' },
      { headerName: 'Price', field: 'price' },
    ]
    const rowData = [
      { make: 'Toyota', model: 'Celica', price: 35000 },
      { make: 'Ford', model: 'Mondeo', price: 32000 },
      { make: 'Porsche', model: 'Boxter', price: 72000 },
    ]
    render(
      <Grid
        columnDefs={columnDefs}
        rowData={rowData}
        className="test-grid"
        pagination
        paginationPageSize={10}
        onPaginationChanged={jest.fn()}
      />
    )
    rowData.forEach((row) => {
      expect(screen.getByText(row.make)).toBeInTheDocument()
      expect(screen.getByText(row.model)).toBeInTheDocument()
      expect(screen.getByText(row.price.toString())).toBeInTheDocument()
    })
  })
})
