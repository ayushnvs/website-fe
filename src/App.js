import React from 'react'
import { BrowserRouter, Routes, Route } from 'react-router-dom'
import Navbar from './components/navbar'
import LoginPage from './components/login/login'
import RegistrationPage from './components/register/registration'
import Footer from './components/footer'


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
