import React from 'react'
import Home from './home/Home'
import {Navigate, Route, Routes} from 'react-router-dom'
import Courses from './courses/Courses'
import Signup from './components/Signup'
import ContactUs from './contact/ContactUs'
import toast, {Toaster} from "react-hot-toast"
import { useAuth } from './context/AuthProvider'

function App() {
  const [authUser, setAuthUser] = useAuth();
  console.log(authUser);
  return (
    <>    
      <Routes>
        <Route path='/' element={<Home />} />
        <Route path='/course' element={authUser ? <Courses /> : <Navigate to="/signup" />} />
        <Route path='/signup' element={<Signup />} />
        <Route path='/contact' element={<ContactUs />} />
      </Routes>
      <Toaster />
    </>
    
  )
}

export default App