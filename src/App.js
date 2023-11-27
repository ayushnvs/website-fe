import React from 'react'
import { BrowserRouter, Routes, Route } from 'react-router-dom'
import Navbar from './navbar'
import LoginPage from './loginPage'
import RegistrationPage from './registrationPage'
import Footer from './footer'


const App = () => {
  return (
    <div>
      <BrowserRouter>
        <Navbar/>
        <Routes>
          <Route path='/login' element={<LoginPage/>} />
          <Route path='/register' element={<RegistrationPage/>} />
        </Routes>
        <Footer/>
      </BrowserRouter>
    </div>
  )
}

export default App
