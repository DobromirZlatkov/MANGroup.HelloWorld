// import httpRequests from '../http-request'
import { TradingSignal } from './trading-signals-api.types'

const getTradingSignals = (cb: (error: Error | null, response: TradingSignal[]) => void) => {
  const mockData: TradingSignal[] = [
    {
      source: 'Big Wick Signal',
      side: 'buy',
      asset: 'ETHUSDT',
      period: '15m',
      takeProfit: 1837.08,
      stopLoss: 1820,
      timestamp: new Date('2023-08-02T16:59:59.999Z'),
      finished: true,
      success: true,
    },
    {
      source: 'Big Wick Signal',
      side: 'buy',
      asset: 'BTCUSDT',
      period: '5m',
      takeProfit: 29122.100000000002,
      stopLoss: 28906.3,
      timestamp: new Date('2023-08-02T16:59:59.999Z'),
      finished: true,
      success: true,
    },
    {
      source: 'Big Wick Signal',
      side: 'buy',
      asset: 'APTUSDT',
      period: '5m',
      takeProfit: 6.8999999999999995,
      stopLoss: 6.8,
      timestamp: new Date('2023-08-02T16:59:59.999Z'),
      finished: false,
      success: true,
    },
    {
      source: 'Big Wick Signal',
      side: 'buy',
      asset: 'OPUSDT',
      period: '5m',
      takeProfit: 1.6536,
      stopLoss: 1.612,
      timestamp: new Date('2023-08-02T16:59:59.999Z'),
      finished: false,
      success: true,
    },
    {
      source: 'Big Wick Signal',
      side: 'buy',
      asset: 'ARBUSDT',
      period: '15m',
      takeProfit: 1.1353,
      stopLoss: 1.1221,
      timestamp: new Date('2023-08-02T16:59:59.999Z'),
      finished: false,
      success: true,
    },
    {
      source: 'Big Wick Signal',
      side: 'buy',
      asset: 'APTUSDT',
      period: '15m',
      takeProfit: 6.8999999999999995,
      stopLoss: 6.8,
      timestamp: new Date('2023-08-02T16:59:59.999Z'),
      finished: false,
      success: true,
    },
    {
      source: 'Big Wick Signal',
      side: 'buy',
      asset: 'ETHUSDT',
      period: '5m',
      takeProfit: 1837.08,
      stopLoss: 1820,
      timestamp: new Date('2023-08-02T16:59:59.999Z'),
      finished: true,
      success: true,
    },
    {
      source: 'Big Wick Signal',
      side: 'buy',
      asset: 'BTCUSDT',
      period: '1m',
      takeProfit: 29093.7,
      stopLoss: 28906.3,
      timestamp: new Date('2023-08-02T16:59:59.999Z'),
      finished: true,
      success: true,
    },
    {
      source: 'Big Wick Signal',
      side: 'buy',
      asset: 'ETHUSDT',
      period: '1m',
      takeProfit: 1825.1799999999998,
      stopLoss: 1820,
      timestamp: new Date('2023-08-02T16:59:59.999Z'),
      finished: true,
      success: true,
    },
    {
      source: 'Big Wick Signal',
      side: 'buy',
      asset: 'BTCUSDT',
      period: '1m',
      takeProfit: 28979.4,
      stopLoss: 28910,
      timestamp: new Date('2023-08-02T16:59:59.999Z'),
      finished: true,
      success: true,
    },
  ]

  return cb(null, mockData)

  // const url = `${process.env.REACT_APP_TRADING_API_URL}/signals`
  // debugger
  // httpRequests<TradingSignal>(url, {}, cb)
}

export default {
  getTradingSignals,
}
