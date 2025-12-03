import React from 'react'
import Hemader from '../components/Hemader'
import Footer from '../components/Footer'
import { Contact } from 'lucide-react'
import Action from '../components/Action'
import Catalog from '../components/Catalog'

const Tovare = () => {
  return (
    <div className='bg-[#242424]'>
      <Hemader/>
      <Catalog/>
      <Action/>
      <Footer/>
    </div>
  )
}

export default Tovare