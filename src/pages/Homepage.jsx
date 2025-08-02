import React from 'react'
import Navbar from '../components/navbar/Navbar'
import Hero from '../components/homepage/Hero'
import Footer from '../components/footer/Footer'

const Homepage = () => {
  return (
    <div className='bg-white'>
      <Navbar/>
      <Hero/>
      <Footer/>
    </div>
  )
}

export default Homepage