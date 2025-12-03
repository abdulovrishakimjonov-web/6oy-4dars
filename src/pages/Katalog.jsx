import React from 'react'
import Hemader from '../components/Hemader'
import Footer from '../components/Footer'
import Contact from '../components/Contact'
import Filter from '../components/Filter'

const Katalog = () => {
  return (
    <div className='bg-[#242424]'>
      <Hemader/>
      <Filter/>
      <Contact/>
      <Footer/>
    </div>
  )
}

export default Katalog