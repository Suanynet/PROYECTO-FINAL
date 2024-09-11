import React from 'react'
import FormHome from '../Components/FormHome'
import Header from '../Components/Header'
import "../Styles/FormHome.css"
import Navbar from '../Components/Navbar'

function Home() {
  return (
    <div>
        <div className='link'>
         <FormHome />
         <Header />
         <Navbar />
        </div>
    </div>
  )
}

export default Home