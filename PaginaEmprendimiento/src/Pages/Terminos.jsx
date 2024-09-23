import React from 'react'
import FormTerminos from '../Components/FormTerminos'
import Header from '../Components/Header'
import "../Styles/FormTerminos.css"
import Navbar from '../Components/Navbar'

function Terminos() {
  return (
    <div>
        <div>
          <Header />
          <Navbar />
          <FormTerminos />
        </div>
    </div>
  )
}

export default Terminos