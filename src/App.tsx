import { BrowserRouter, Routes, Route } from 'react-router-dom'
import { CartProvider } from './context/CartContext'
import Navbar from './components/Navbar'
import Footer from './components/Footer'
import BottomNav from './components/BottomNav'
import WhatsAppButton from './components/WhatsAppButton'
import Home from './views/Home'
import Products from './views/Products'
import ProductDetail from './views/ProductDetail'
import Cart from './views/Cart'

export default function App() {
  return (
    <BrowserRouter>
      <CartProvider>
        <div className="min-h-screen bg-surface text-on-surface font-body-md">
          <Navbar />
          <Routes>
            <Route path="/" element={<Home />} />
            <Route path="/products" element={<Products />} />
            <Route path="/product/:id" element={<ProductDetail />} />
            <Route path="/cart" element={<Cart />} />
          </Routes>
          <Footer />
          <BottomNav />
          <WhatsAppButton />
        </div>
      </CartProvider>
    </BrowserRouter>
  )
}
