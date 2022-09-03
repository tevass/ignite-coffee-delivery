import { Route, Routes } from 'react-router-dom'
import { Layout } from './components/Layout'
import { Checkout } from './pages/checkout'
import { Home } from './pages/home'

export function Router() {
  return (
    <Routes>
      <Route path="/" element={<Layout />}>
        <Route path="/" element={<Home />} />
        <Route path="/checkout" element={<Checkout />} />
      </Route>
    </Routes>
  )
}
