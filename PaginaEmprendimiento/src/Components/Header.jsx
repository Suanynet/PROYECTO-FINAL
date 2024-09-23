import React from 'react'
import "../Styles/Header.css"
import Logo from '../Img/IMG.Logo.png'


function Header() {
  return (
    <div className='back'>
      <div className='logo'>
       <img src={Logo} alt="Fondo" className='FONDO'/>
      </div>
      <div>
       <h1 className='Titulo'>Kombucha</h1>
       <h1 className='subTitulo'>Burbujas del bosque</h1>
      </div>
    </div>
  )
}

export default Header