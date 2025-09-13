import React from 'react'
import './Navbar.css'
import { Link, NavLink } from 'react-router-dom'

const Navbar = () => {
  return (
    <nav className="navbar">
      <NavLink to="/" className={({ isActive }) => (isActive ? 'active' : '')}>Home</NavLink>
      <NavLink to="/about" className={({ isActive }) => (isActive ? 'active' : '')}>About</NavLink>
    </nav>
  )
}

export default Navbar;