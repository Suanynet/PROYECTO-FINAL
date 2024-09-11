import React from 'react'
import { Link } from 'react-router-dom'
import "../Styles/Navbar.css"

function Navbar() {
  return (
    <div>
      <div className='NLinks'>
        <Link to= "/AboutUs" className='links'>About Us</Link>
        <Link to= "/Contact" className='links'>Contactos</Link>
        <Link to= "/Products" className='links'>Ver Productos</Link>
        <Link to= "/Administracion">🔒</Link>
      </div>
    </div>
  )
}

export default Navbar