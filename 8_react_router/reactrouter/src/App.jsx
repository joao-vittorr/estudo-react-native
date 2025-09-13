import { useState } from 'react'
import './App.css'
// 1 - Configurar o React Router
import { BrowserRouter, Routes, Route, Link } from 'react-router-dom'

// 2 - import das páginas
import Home from './pages/Home'
import About from './pages/About'
import Product from './pages/Product'
import Info from './pages/Info'
import NotFound from './pages/NotFound'
import Search from './pages/Search'

// 3 import dos componentes
import Navbar from './components/Navbar'
import SearchForm from './components/SearchForm'

function App() {
  return (
    <>
      <h1>React Router</h1>
      <BrowserRouter>
      <Navbar />
      <SearchForm />
        {/* Configurar as rotas */}
        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="/about" element={<About />} />
          {/* nested route */}
          <Route path="/product/:id/info" element={<Info />} />
          {/* route com parâmetro */}
          <Route path="/product/:id" element={<Product />} />
          {/* Search */}
          <Route path="/search" element={<Search />} />
          {/*Page not found */}
          <Route path="*" element={<NotFound />} />
        </Routes>
      </BrowserRouter>
    </>
  )
}

export default App
