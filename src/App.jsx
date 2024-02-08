import React from 'react'
 import { Navbar,Login,Register,Main } from './components'
import { Routes,Route } from 'react-router-dom'

 const App = () => {
  return (
    <div>
      <Navbar />

      <Routes>

        <Route path='/' element={<Main/>} />
        <Route  path='/register' element={<Register/>}/>
        <Route  path='/login' element={<Login/>}/>
     

      </Routes>
      

      
    </div>
  )
}

export default App