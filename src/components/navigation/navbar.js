import React, { useState } from 'react'
import { Link, useNavigate } from 'react-router-dom'
import Logo from './../../assets/img/Conch1.jpg'
// import { ChangeThemes } from '../snippets/theme/changeTheme'
import useAuth from '../../hooks/AuthProvider'
import axios from '../../api/axios'

const Navbar = () => {
  const navigate = useNavigate()
  const { auth, setAuth } = useAuth()
  const [isDropdownOpen, setIsDropdownOpen] = useState(false);

  // Function to toggle dropdown visibility
  const toggleDropdown = () => {
    setIsDropdownOpen(!isDropdownOpen);
  };

  const handleProfileClick = () => {}

  const goToProfile = () => {
    navigate('/Profile')
  }

  const handleLogout = async () => {
    try {
      await axios.get('/logout', { withCredentials: true })
    } catch (err) {
      console.log(err)
    }
    setAuth({
      isLoggedIn: false
    })
  }

  return (
    <>
      {
        auth.isLoggedIn
          ?
          <nav className='ws-navbar'>
            <div id="brand-logo-main">
                <img src={Logo} alt="brand logo" />
                <span>Narayana Blogs</span>
            </div>
            <button>
                <img src="https://avatars.githubusercontent.com/u/73516326?v=4" alt="profile image" />
                <i className='fa-solid fa-chevron-down'></i>
            </button>

            <div id="profile-dropdown">
                <section>
                <i class="fa-solid fa-house"></i>
                <span>Home</span>
                </section>
                <hr />
                <section>
                <i class="fa-solid fa-user"></i>
                <span>Profile</span>
                </section>
                <hr />
                <section>
                <i class="fa-solid fa-arrow-right-from-bracket"></i>
                <span>Logout</span>
                </section>
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
