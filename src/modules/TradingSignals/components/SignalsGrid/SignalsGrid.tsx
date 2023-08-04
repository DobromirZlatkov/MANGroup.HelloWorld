import React, { useEffect, useState } from 'react'
import Grid from '../../../../common-components/MANGroup.Grid/MANGroup.Grid'
import tradingSignalsApi from '../../../../data-provider/trading-signals-api/trading-signals-api'
import { TradingSignal } from '../../../../data-provider/trading-signals-api/trading-signals-api.types'

const columnDefs = [
  { headerName: 'Asset', field: 'asset' },
  { headerName: 'Period', field: 'period' },
  { headerName: 'Take Profit', field: 'takeProfit' },
  { headerName: 'Stop Loss', field: 'stopLoss' },
  { headerName: 'Source', field: 'source' },
  { headerName: 'Success', field: 'success' },
  { headerName: 'Finished', field: 'finished' },
  { headerName: 'Side', field: 'side' },
]

const SignalsGrid: React.FC = () => {
  const [signals, setSignals] = useState<TradingSignal[]>([])

  useEffect(() => {
    tradingSignalsApi.getTradingSignals((error, response) => {
      if (error) {
        console.error('Failed to fetch trading signals:', error)
        return
      }

      setSignals(response)
    })
  }, [])

  return (
    <Grid
      columnDefs={columnDefs}
      rowData={signals}
      gridStyle={{ width: '100%', height: 600 }}
      pagination
      paginationPageSize={10}
    />
  )
}

export default SignalsGrid
