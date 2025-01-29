import { Route, Routes } from 'react-router-dom'
import { Login } from './Components/Login'

import { Home } from './page/Home'
import SignUp from './Components/SignUp'

function App() {

  return (
    <>
    <Routes>
      <Route path="/" element={<Home/>} />
      <Route path="/Login" element={<Login/>} />
      <Route path="/Signup" element={<SignUp/>} />
    </Routes>
    </>
  )
}

export default App