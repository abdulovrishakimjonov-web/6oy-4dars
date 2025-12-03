import React from 'react'
import { Route, Routes } from 'react-router-dom'
import HomePahe from './pages/HomePahe'
import Katalog from './pages/Katalog'
import Uslugu from './pages/Uslugu'
import Tovare from './pages/Tovare'
import Remont from './pages/Remont'

const App = () => {
  return (
    <Routes>
      <Route path='/' element={<HomePahe/>}/>
      <Route path='/katalog' element={<Katalog/>}/>
      <Route path='/uslug' element={<Uslugu/>}/>
      <Route path='/tavare' element={<Tovare/>}/>
      <Route path='/remont' element={<Remont/>}/>
    </Routes>
  )
}

export default App