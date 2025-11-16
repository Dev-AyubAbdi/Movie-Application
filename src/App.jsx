import React from 'react'
import { NavBar } from './Components/NavBar'
import { Route, Routes } from 'react-router-dom'
import { Home } from './Pages/Home'
import { Favorite } from './Pages/Favorite'

const App = () => {
  return (
   <div>
   <main>
     <NavBar />  
     <Routes>
      <Route path='/' element={<Home />} />
      <Route path='/favorite' element={<Favorite/>} /> 
    </Routes>
    
   </main>
 
   </div>
  )
}

export default App
