import { useEffect, useState } from 'react'
import Signup from './components/Signup'
import { Route, Routes, useNavigate } from 'react-router-dom'
import Login from './components/Login'
import Movies from './components/Movies'
import { getLocal } from './utils/localstorage'


function App() {

  useEffect(() => {
    const fetchData = async () => {
        try {
            const data = await fetch(`http://www.omdbapi.com/?apikey=74c140db&s=movie&type=movie&page=1`)
            const res = await data.json()
            console.log(res)
        } catch {
            console.error("error fetching data")
        }

    }
    
    const x = fetchData()
    const fetchMovie = async() =>{
      
    }
}, [])




  const navigate = useNavigate()

  const logged = getLocal("logged")
  const signed = getLocal("signed")
  useEffect(() =>{
    if(signed && logged) {
      navigate("/")
    }else if(signed){
      navigate("/login")
    }else{
      navigate("/signup")
    }
  },[])

  return (
    <>
      
      <Routes>
        <Route path='/signup' element = {<Signup />} />
        <Route path='/login' element = {<Login />} />
        <Route path='/' element = {<Movies />} />
      </Routes>

      
    </>
  )
}

export default App
