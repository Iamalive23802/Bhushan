import { BrowserRouter, Navigate, Route, Routes } from 'react-router-dom'
import { Layout } from './components/Layout'
import { Home } from './pages/Home'
import { HomeCare } from './pages/HomeCare'
import { Sale } from './pages/Sale'
import { Rent } from './pages/Rent'
import { ProductDetail } from './pages/ProductDetail'
import { HowItWorks } from './pages/HowItWorks'
import { About } from './pages/About'

export default function App() {
  return (
    <BrowserRouter>
      <Routes>
        <Route element={<Layout />}>
          <Route index element={<Home />} />
          <Route path="home-care" element={<HomeCare />} />
          <Route path="sale" element={<Sale />} />
          <Route path="rent" element={<Rent />} />
          <Route path="catalog" element={<Navigate to="/rent" replace />} />
          <Route path="product/:slug" element={<ProductDetail />} />
          <Route path="how-it-works" element={<HowItWorks />} />
          <Route path="about" element={<About />} />
          <Route path="*" element={<Navigate to="/" replace />} />
        </Route>
      </Routes>
    </BrowserRouter>
  )
}
