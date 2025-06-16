import React from 'react'
import './App.css'
import HomePage from './pages/HomePage'
import ShopPage from './pages/ShopPage'
import { Routes, Route } from 'react-router-dom'
import ProductDetailPage from './pages/ProductDetailPage'

function App() {
  return (
    <Routes>
      <Route path="/" element={<HomePage />} />
      <Route path="/shop" element={<ShopPage />} />
      <Route path="/product/:id" element={<ProductDetailPage />} />
    </Routes>
  )
}

export default App