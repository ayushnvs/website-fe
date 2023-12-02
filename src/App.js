import React, { useState, useEffect } from 'react'
import { BrowserRouter, Routes, Route } from 'react-router-dom'
import Navbar from './components/navigation/navbar'
import LoginPage from './components/login/login'
import RegistrationPage from './components/register/registration'
import Footer from './components/navigation/footer'
import Home from './components/home/home'
import Profile from './components/profile/profile'
import axios from 'axios'


const App = () => {

  const [user, setUser] = useState({
    isLoggedIn: false
  })

  useEffect(() => {
    const username = localStorage.getItem('username');
    const token = localStorage.getItem('token')

    if (!!username && !!token) {
      try {
        (async () => {
          const res = await axios.get(`http://localhost:8000/account/${username}`)
          setUser({
            ...res.data,
            token,
            isLoggedIn: true
          })
          console.log(user)
        })()
      } catch (err) {
        const error = err
      }
    }

  }, [])


  return (
    <div className='App'>
      <BrowserRouter>
        <Navbar loggedInUser={user} setUser={setUser} />
        <Routes>
          <Route exact path="/" element={<Home />} />
          <Route path='/register' element={<RegistrationPage setUser={setUser} />} />
          <Route path='/login' element={<LoginPage setUser={setUser} />} />
          <Route path='/profile' element={<Profile loggedInUser={user} setUser={setUser} />} />
        </Routes>
        <Footer isLoggedIn={user.isLoggedIn} />
      </BrowserRouter>
    </div>
  )
}

export default App
