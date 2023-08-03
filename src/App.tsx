import React from 'react'
import { BrowserRouter, Routes, Route } from 'react-router-dom'
import Layout from './components/Layout/Layout'
import TradingSignals from './modules/TradingSignals/TradingSignals'
import './App.css'

const App = () => {
  return (
    <BrowserRouter>
      <Layout>
        <Routes>
          <Route path="/" element={<TradingSignals />} />
        </Routes>
      </Layout>
    </BrowserRouter>
  )
}

export default App
