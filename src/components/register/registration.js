import React, { useState } from 'react'
import './register.css'
import axios from 'axios'
import { Link, useNavigate } from 'react-router-dom'
import registerImg from './../../assets/img/register.jpeg'

const RegistrationPage = (props) => {
  const navigate = useNavigate()

  const [user, setUser] = useState({
    name: '',
    email: '',
    username: '',
    password: '',
    verifyPassword: '',
    isUsernameAvailable: null
  })

  const handleChange = e => {
    const { name, value } = e.target
    setUser({
      ...user,
      isUsernameAvailable: null,
      [name]: value
    })
  }

  const checkAvailability = () => {
    axios.post('http://localhost:8000/account/useravailable', user).then(res => {
      if (user.username !== '') {
        console.log(res)
        setUser({
          ...user,
          isUsernameAvailable: res.data.isAvailable
        })
      } else {
        setUser({
          ...user,
          isUsernameAvailable: null
        })
      }
    })
  }

  const handleSubmit = e => {
    e.preventDefault()
    const { username, password } = user

    if (username !== "" && password !== "") {
      axios.post('http://localhost:8000/account/register/', user).then(res => {
        console.log(res.data)
        setUser({
          ...user,
          username: '',
          password: '',
          isAvailable: null
        })
        props.setUser({
          username: res.data.user.username,
          token: res.data.token,
          isLoggedIn: true
        })
        localStorage.setItem('username', res.data.user.username)
        localStorage.setItem('token', res.data.token)
        navigate('/')
      })
    } else {
      alert('Username or Password cannot be empty!')
    }


  }

  return (
    <div className="bg-body-tertiary pb-4 pt-4">
      <div className="row">
        <div className="col-5">
          <div className="d-flex align-items-center mt-4">
            <main className="form-signin w-100 m-auto">
              <form onSubmit={handleSubmit}>
                <div className="mb-3">
                  <label htmlFor="name" className="form-label">
                    Full Name
                  </label>
                  <span className="text-danger">*</span>
                  <input
                    type="text"
                    className="form-control"
                    name="name"
                    id="name"
                    onChange={handleChange}
                    value={user.name}
                    required
                  />
                </div>
                <div className="mb-3">
                  <label htmlFor="email" className="form-label">
                    Email
                  </label>
                  <span className="text-danger">*</span>
                  <input
                    type="email"
                    className="form-control"
                    name='email'
                    id="email"
                    onChange={handleChange}
                    value={user.email}
                    required
                  />
                  <div id="emailHelp" className="form-text">
                    We'll never share your email with anyone else.
                  </div>
                </div>
                <div className="mb-3">
                  <label htmlFor="username" className="form-label">
                    Username
                  </label>
                  <span className="text-danger">
                    * {
                      user.isUsernameAvailable != null
                        ?
                        user.isUsernameAvailable
                          ?
                          <div className='text-success'>available</div>
                          :
                          <div className='text-danger'>not available</div>
                        :
                        <div></div>
                    }
                  </span>
                  <input
                    type="text"
                    className="form-control"
                    name="username"
                    id="username"
                    onChange={handleChange}
                    value={user.username}
                    required
                  />
                </div>
                <div className="mb-3">
                  <label htmlFor="password" className="form-label">
                    Password
                  </label>
                  <span className="text-danger">*</span>
                  <input
                    type="password"
                    className="form-control"
                    name='password'
                    id="password"
                    onChange={handleChange}
                    value={user.password}
                    required
                  />
                </div>
                <div className="mb-3">
                  <label htmlFor="password-repeat" className="form-label">
                    Re-enter password
                  </label>
                  <span className="text-danger">*</span>
                  <input
                    type="password"
                    className="form-control"
                    name='verifyPassword'
                    id="password-repeat"
                    onChange={handleChange}
                    value={user.verifyPassword}
                    required
                  />
                </div>
                {/* <div className="mb-3 form-check">
                            <input type="checkbox" className="form-check-input" id="exampleCheck1" />
                            <label className="form-check-label" htmlFor="exampleCheck1">
                                Check me out
                            </label>
                        </div> */}
                <button type="submit" className="btn btn-primary">
                  Submit
                </button>
                {
                  user.username !== '' ? <button type="button" className="btn btn-outline-warning ms-2" onClick={checkAvailability}>Check availability</button> : ''
                }
                <div className="mt-4 mb-4">
                  Already have an account? <Link to="/login">Login here</Link>
                </div>
              </form>
            </main>
          </div>
        </div>
        <div className="col-7">
          <div className="nav justify-content-center mt-4 pt-4">
            <img
              className="nav-item"
              src={registerImg}
              alt=""
              width={700}
              height={500}
            />
          </div>
        </div>
      </div>


    </div>
  )
}

export default RegistrationPage

// < form onSubmit = { handleSubmit } >
//                     <div className="form-floating">
// <input
//     type="text"
//     className="form-control"
//     id="floatingInput"
//     name="username"
//     placeholder="username"
//     onChange={handleChange}
//     value={user.username}
// />
//                         <label htmlFor="floatingInput">Username</label>
//                     </div>
//                     <div className="form-floating">
//                         <input
//                             type="password"
//                             className="form-control"
//                             id="floatingPassword"
//                             name='password'
//                             placeholder="Password"
//                             onChange={handleChange}
//                             value={user.password}
//                         />
//                         <label htmlFor="floatingPassword">Password</label>
//                     </div>
//                     <div className="form-check text-start my-3">
//                         <input
//                             className="form-check-input"
//                             type="checkbox"
//                             defaultValue="remember-me"
//                             id="flexCheckDefault"
//                         />
//                         <label className="form-check-label" htmlFor="flexCheckDefault">
//                             Remember me
//                         </label>
//                     </div>
//                     <button className="btn btn-primary w-100 py-2" type="submit">
//                         Register
//                     </button>
//                     <div className="mt-4 mb-4">
//                         Already have an account? <Link to="/login">Login here</Link>
//                     </div>
//                 </form >



