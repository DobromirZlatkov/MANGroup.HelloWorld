export type TradingSignal = {
  asset: string
  timestamp: Date
  period: string
  takeProfit: number
  stopLoss: number
  source: string
  success: boolean
  finished: boolean
  side: string
}
