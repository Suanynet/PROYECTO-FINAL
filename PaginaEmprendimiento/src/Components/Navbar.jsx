import React from 'react'
import { Link } from 'react-router-dom'
import '../Styles/Navbar.css'

function Navbar() {

  return (
    
    <div>
      <div className='NLinks'>
       <Link to= "/Login" className='links'>Login</Link>
        <Link to= "/AboutUs" className='links'>About Us</Link>
        <Link to="/Products" className='links'>Productos</Link>
        <Link to="/Ubication" className='links'>Ubicacion</Link>
        <Link to= "/Contact" className='links'>Contactos</Link>
        <Link to="/Terminos" className='links'>Teminos y Condiciones</Link>
        <Link to= "/Administracion" className='links'>🔒</Link>
      </div>
    </div>
  )
}

export default Navbar