import React from 'react'
import Hemader from '../components/Hemader'
import Footer from '../components/Footer'
import Contact from '../components/Contact'
import Filtermain from '../components/Filtermain'

const Uslugu = () => {
  return (
    <div className='bg-[#242424]'>
      <Hemader/>
      <Filtermain/>
      <Contact/>
      <Footer/>
    </div>
  )
}

export default Uslugu