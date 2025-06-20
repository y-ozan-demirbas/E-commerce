import React from 'react'
import './App.css'
import HomePage from './pages/HomePage'
import ShopPage from './pages/ShopPage'
import { Routes, Route } from 'react-router-dom'
import ProductDetailPage from './pages/ProductDetailPage'
import ContactPage from './pages/ContactPage'
import AboutUsPage from './pages/AboutUsPage'

function App() {
  return (
    <Routes>
      <Route path="/" element={<HomePage />} />
      <Route path="/shop" element={<ShopPage />} />
      <Route path="/product/:id" element={<ProductDetailPage />} />
      <Route path="/contact" element={<ContactPage />} />
      <Route path="/about" element={<AboutUsPage />} />
    </Routes>
  )
}

export default App