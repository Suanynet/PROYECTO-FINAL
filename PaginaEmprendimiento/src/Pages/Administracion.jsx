import React from 'react'
import FormAdministracion from '../Components/FormAdministracion'
import FormRegister from '../Components/FormRegister'
import Header from '../Components/Header'
import Navbar from '../Components/Navbar'


function Administracion() {

  return (
    <div>
     
      <Header />
      <Navbar />
      <FormAdministracion/>
      <FormRegister />
      

    </div>
  )
}

export default Administracion