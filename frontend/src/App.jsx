import { Route, Routes } from 'react-router-dom'
import { Login } from './Components/Login'
import { SignUp } from './Components/SignUp'
import { Home } from './page/Home'
import { Productform } from './Components/Productform'
import Navbar from './Components/Navbar';

function App() {

  return (
    <>
 
      <Navbar />
      <Routes>
        <Route path="/Home" element={<Home/>} />
        <Route path="/Login" element={<Login/>} />
        <Route path="/SignUp" element={<SignUp/>} />
        <Route path="/Productform" element={<Productform/>}/>
        <Route path="/about" element={<div>About Us Page</div>}/>
        <Route path="/products" element={<div>Product Page</div>}/>
        <Route path="/products" element={<div>Product Page</div>}/>
        <Route pathe="/contact" element={<div>Contact Page</div>}/>
        <Route path="/login" element={<div>Login Page</div>}/>
        <Route path="/profile" element={<div>Profile Page</div>}/>
      </Routes>

    </>
  )
}

export default App;