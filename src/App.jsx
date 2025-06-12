import React from 'react'
import './App.css'
import HomePage from './pages/HomePage'
import { Routes, Route } from 'react-router-dom'
import ShopPage from './pages/ShopPage'


function App() {

  return (
    <div>
      <Routes>
        <Route path="/" element={<HomePage />} />
        <Route path="/shop" element={<ShopPage />} />
        
      </Routes>
        
    </div>
  )
}

export default App
