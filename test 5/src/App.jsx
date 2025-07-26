import { useEffect, useState } from 'react'
import { Route, Routes, useNavigate } from 'react-router-dom'
import Register from './pages/Register'
import Login from './pages/Login'
import Management from './pages/Management'
import { getLocal } from './utils/localstorage'

function App() {
  
  const navigate = useNavigate()
  const signed = getLocal("signed") || false
  const logged = getLocal("logged") || false
  useEffect(() =>{
  
    if(signed)navigate("/login")
    else if(logged)navigate("/")
    else navigate('/register')
  },[])

  return (
    <Routes>
      <Route path='/register' element={<Register />} />
      <Route path='/login' element ={<Login />}/>
      <Route path='/' element = {<Management />} /> 

  
    </Routes>

    
  )
}

export default App
