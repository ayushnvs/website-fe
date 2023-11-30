import React, { useState, useEffect } from 'react'
import { BrowserRouter, Routes, Route } from 'react-router-dom'
import Navbar from './components/navigation/navbar'
import LoginPage from './components/login/login'
import RegistrationPage from './components/register/registration'
import Footer from './components/navigation/footer'
import Home from './components/home/home'


const App = () => {

  const [user, setUser] = useState({
    isLoggedIn: false
  })

  useEffect(() => {
    const username = localStorage.getItem('username');
    const token = localStorage.getItem('token')

    if (username || token) {
      setUser({
        username,
        token,
        isLoggedIn: true
      })
    }
  }, [])
  

  return (
    <div>
      <BrowserRouter>
        <Navbar loggedInUser={user} setUser={setUser} />
        <Routes>
          <Route exact path="/" element={
            user && user.token ? <Home /> : <LoginPage setUser={setUser} />
          }/>
          <Route path='/login' element={<LoginPage setUser={setUser} />} />
          <Route path='/register' element={<RegistrationPage setUser={setUser} />} />
        </Routes>
        <Footer isLoggedIn={user.isLoggedIn} />
      </BrowserRouter>
    </div>
  )
}

export default App
