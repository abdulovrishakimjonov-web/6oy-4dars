import React from 'react'
import Hero from '../components/Hero'
import Hemader from '../components/Hemader'
import About from '../components/About'
import Action from '../components/Action'
import Footer from '../components/Footer'

const HomePahe = () => {
  return (
    <div className='bg-[#131218]'>
      <Hemader/>
      <Hero/>
      <About/>
      <Action/>
      <Footer/>
    </div>
  )
}

export default HomePahe