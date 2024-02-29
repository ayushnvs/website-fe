// import React from 'react'
// import { Link, useNavigate } from 'react-router-dom'
// import Logo from './../../assets/img/Conch1.jpg'
// import './style.css'
// // import { ChangeThemes } from '../snippets/theme/changeTheme'
// import useAuth from '../../hooks/AuthProvider'
// import axios from '../../api/axios'

// const Navbar = () => {
//   const navigate = useNavigate()
//   const { auth, setAuth } = useAuth()

//   const goToProfile = () => {
//     navigate('/Profile')
//   }

//   const handleLogout = async () => {
//     try {
//       await axios.get('/logout', { withCredentials: true })
//     } catch (err) {
//       console.log(err)
//     }
//     setAuth({
//       isLoggedIn: false
//     })
//   }

//   return (
//     <>
//       {
//         auth.isLoggedIn
//           ?
//           <nav className="navbar-size-man navbar bg-body-tertiary sticky-top border">
//             <div className='logo-margin-man float-start ms-2'>
//               <Link className=" navbarlink-man navbar-brand fw-bold fs-3 ms-2" to="/">
//                 <img className='site-logo' src={Logo} alt="" width="30" height="30" />
//                 BLOGS
//               </Link>
//             </div>

//             {/* <div className="input-group mb-3">
//               <input type="text" className="form-control" />
//               <div className="input-group-append">
//                 <button className="btn btn-primary">
//                   <i className="fas fa-search" />
//                 </button>
//               </div>
//             </div> */}

//             <div className='float-end me-2'>
//               {/* <ChangeThemes /> */}
//               <button type="button" className="btn btn-info me-2" onClick={goToProfile}>Profile</button>
//               <button className="btn btn-outline-secondary me-2" onClick={handleLogout}>logout</button>
//             </div>

//           </nav>
//           :
//           <div className="me-2">
//             {/* <ChangeThemes /> */}
//           </div>

//       }
//     </>
//   )
// }

// export default Navbar

import React, { useState } from 'react';
import './style.css'; // Import CSS file for styling

const Navbar = () => {
  // State to manage dropdown visibility
  const [isDropdownOpen, setIsDropdownOpen] = useState(false);

  // Function to toggle dropdown visibility
  const toggleDropdown = () => {
    setIsDropdownOpen(!isDropdownOpen);
  };

  // Function to handle logout
  const handleLogout = () => {
    // Implement your logout logic here
    console.log('Logged out!');
  };

  const handleProfileClick = () => {}

  return (
    <nav className="navbar">
      <div className="navbar__left">
        {/* Logo and website name */}
        <div className="navbar__logo">Your Logo</div>
        <div className="navbar__name">Your Website Name</div>
      </div>

      <div className="navbar__right">
        {/* Profile Icon */}
        <div className="navbar__profile" onClick={toggleDropdown}>
          <img src="profile-icon.png" alt="Profile" className="navbar__profile-icon" />
          {/* Dropdown menu */}
          {isDropdownOpen && (
            <ul className="navbar__dropdown">
              <li className="navbar__dropdown-item" onClick={handleProfileClick}>
                Profile
              </li>
              <li className="navbar__dropdown-item" onClick={handleLogout}>
                Logout
              </li>
            </ul>
          )}
        </div>
      </div>
    </nav>
  );
};

export default Navbar;
