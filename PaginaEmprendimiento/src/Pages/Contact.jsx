import React from 'react'
import FormContact from "../Components/FormContact"
import Header from '../Components/Header'
import Navbar from '../Components/Navbar'
import Footer from '../Components/Footer'

function Contact() {
  return (
    <div>
        <div>
        <Header />
        <Navbar />
        <FormContact />
        <Footer />
        </div>
    </div>
  )
}

export default Contact