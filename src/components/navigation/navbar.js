import React, { useRef } from 'react'
import { Link } from 'react-router-dom'
import Logo from './../../assets/img/Conch1.jpg'
import useAuth from '../../hooks/AuthProvider'
import axios from '../../api/axios'
import { Helpers } from '../../assets/js/globalScript'

const helper = new Helpers();

const Navbar = () => {
  const { auth, setAuth } = useAuth()
  const profileBtnRef = useRef();
  const profileDropdownRef = useRef()

  const toggleVisibility = () => {
    // Toggle dropdown
    const dropdown = profileDropdownRef.current
    helper.toggleVisibility(dropdown);

    // Toggle icon
    const profileBtn = profileBtnRef.current;
    let iconUp = profileBtn.querySelector('i[class*=up]');
    let iconDown = profileBtn.querySelector('i[class*=down]');
    helper.toggleVisibility(iconUp, "inline-block");
    helper.toggleVisibility(iconDown, "inline-block");
  }

  const toggleDropdown = () => {
    toggleVisibility();
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
                <Link to="/"><span>Narayana Blogs</span></Link>
            </div>
            <button ref={profileBtnRef} onClick={toggleVisibility}>
                <img src="https://avatars.githubusercontent.com/u/73516326?v=4" alt="profile image" />
                <i className='fa-solid fa-chevron-down'></i>
                <i className='fa-solid fa-chevron-up' style={{display: "none"}}></i>
            </button>

            <div ref={profileDropdownRef} id="profile-dropdown" style={{display: "none"}}>
                <section>
                <i className="fa-solid fa-house"></i>
                <Link onClick={toggleDropdown} to="/">Home</Link>
                </section>
                <hr />
                <section>
                <i className="fa-solid fa-user"></i>
                <Link onClick={toggleDropdown} to="/profile">Profile</Link>
                </section>
                <hr />
                <section>
                <i className="fa-solid fa-arrow-right-from-bracket"></i>
                <button onClick={handleLogout}>Logout</button>
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
