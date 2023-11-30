import React, { useState, useEffect } from 'react'
// import logo from './../../assets/img/logo.png'
import './style.css'
import { ChangeThemes } from '../snippets/theme/changeTheme'

const Navbar = (props) => {

  const handleLogout = () => {
    props.setUser({
      isLoggedIn: false
    })
    localStorage.removeItem('username')
    localStorage.removeItem('token')
  }

  return (
    <>
      {
        props.loggedInUser.isLoggedIn
          ?
          <nav className="navbar bg-body-tertiary sticky-top shadow-sm">
            <div className='float-start'>
              <a className="navbar-brand fw-bold fs-3 ms-2" href="/">
                {/* <img src={logo} alt="" width="30" height="30" /> */}
                narayana blogs
              </a>
            </div>
            <div className='float-end me-2'>
              <ChangeThemes />
              <button className="btn btn-outline-secondary me-2" onClick={handleLogout}>logout</button>
            </div>

          </nav>
          :
          <div className="me-2">
            <ChangeThemes />
          </div>

      }
    </>
  )
}

export default Navbar
