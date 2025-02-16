import { useEffect, useState } from 'react'
import { Routes, Route, useNavigate } from "react-router-dom"
import Signup from './components/Signup'
import Management from './components/management'
import Login from './components/login'

function App() {

  const [curUser, setCurUser] = useState([])
  const [users, setUsers] = useState([])
  const [logged, setLogged] = useState(false)
  const [signed, setSigned] = useState(false)
  const navigate = useNavigate()

  useEffect(() => {
    if (!signed) {
      navigate('/signup')
    }
  }, [])

  console.log(signed)

  return (

    <Routes>
      <Route path='/signup' element={<Signup curUs={[curUser, setCurUser]} data={[users, setUsers]} condition={[signed, setSigned]} />} />
      <Route path='/' element={<Management />} />
      <Route path='/login' element={<Login curUs={[curUser, setCurUser]} data={[users, setCurUser]} condition={[logged, setLogged]} />} />
    </Routes>

  )
}

export default App
