import React from 'react'
import { Link, useNavigate } from 'react-router-dom'
// import logo from './../../assets/img/logo.png'
import './style.css'
// import { ChangeThemes } from '../snippets/theme/changeTheme'
import useAuth from '../../hooks/AuthProvider'

const Navbar = () => {
  const navigate = useNavigate()
  const { auth, setAuth } = useAuth()

  const goToProfile = () => {
    navigate('/Profile')
  }

  const handleLogout = () => {
    setAuth({
      isLoggedIn: false
    })
    localStorage.removeItem('username')
    localStorage.removeItem('token')
  }

  return (
    <>
      {
        auth.isLoggedIn
          ?
          <nav className="navbar bg-body-tertiary sticky-top border">
            <div className='float-start ms-2'>
              <Link className="navbar-brand fw-bold fs-3 ms-2" to="/">
                {/* <img src={logo} alt="" width="30" height="30" /> */}
                BLOGS
              </Link>
            </div>

            {/* <div className="input-group mb-3">
              <input type="text" className="form-control" />
              <div className="input-group-append">
                <button className="btn btn-primary">
                  <i className="fas fa-search" />
                </button>
              </div>
            </div> */}

            <div className='float-end me-2'>
              {/* <ChangeThemes /> */}
              <button type="button" className="btn btn-info me-2" onClick={goToProfile}>Profile</button>
              <button className="btn btn-outline-secondary me-2" onClick={handleLogout}>logout</button>
            </div>

          </nav>
          :
          <div className="me-2">
            {/* <ChangeThemes /> */}
          </div>

      }
    </>
  )
}

export default Navbar
