import { useState } from 'react'
import './App.css'
// 1 - Configurar o React Router
import { BrowserRouter, Routes, Route, Link } from 'react-router-dom'

// 2 - import das páginas
import Home from './pages/Home'
import About from './pages/About'
import Product from './pages/Product'

// 3 import dos componentes
import Navbar from './components/Navbar'

function App() {
  return (
    <>
      <h1>React Router</h1>
      <BrowserRouter>
      <Navbar />
        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="/about" element={<About />} />
          {/* route com parâmetro */}
          <Route path="/product/:id" element={<Product />} />
        </Routes>
      </BrowserRouter>
    </>
  )
}

export default App
