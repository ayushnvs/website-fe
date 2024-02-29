import React, { useRef, useState } from 'react'
import { Link, useNavigate, useLocation } from 'react-router-dom'
import axios from '../../api/axios'
import useAuth from '../../hooks/AuthProvider'
import Logo from './../../assets/img/Conch1.jpg'
import registerImg from './../../assets/img/register.jpeg'

const LoginPage = () => {
    const { setAuth } = useAuth()
    const navigate = useNavigate()
    const location = useLocation()
    const from = location.state?.from?.pathname || '/'

    const [user, setUser] = useState({
        username: '',
        password: ''
    })

    const [showPassword, setShowPassword] = useState(true)
    const passwordRef = useRef()

    const handleShowPassword = e => {
        let showPasswordInput = passwordRef.current
        if (showPassword) {
            showPasswordInput.setAttribute('type', "");
        } else showPasswordInput.setAttribute('type', "password");

        setShowPassword(() => {
            return !showPassword
        })
    }

    const handleChange = e => {
        const { name, value } = e.target
        setUser({
            ...user,
            [name]: value
        })
    }

    const handleSubmit = async e => {
        e.preventDefault()
        const { username, password } = user

        if (username !== "" && password !== "") {
            try {
                const res = await axios.post('/account/login', user, { withCredentials: true })
                console.log(res)
                setAuth({
                    token: res.data.token,
                    username,
                    isLoggedIn: true
                })
                navigate(from, { replace: true })
            } catch (error) {
                setUser({}) //TODO: Values are not resetting
                alert(error.response.data.error)
                console.log('Err', error)
            }
        } else {
            alert("Username or Password cannot be empty!")
        }
    }


    return (
        <div className='ws-auth ws-login bg-body-tertiary pb-4 pt-4'>
            <div className="nav justify-content-center pt-4 mb-4">
                <img className='nav-item site-logo' src={Logo} alt="" width={72} height={57} />
            </div>
            <div className="nav justify-content-center h3">welcome to Narayana blogs</div>
            {/* <p className="nav justify-content-center h5 mt-4 fw-normal">Please sign in</p> */}
            <div className="row">
                <div className="col-7">
                    <div className='d-flex align-items-center mt-4'>
                        <main className="form-signin w-100 m-auto">
                            <form onSubmit={handleSubmit}>
                                <div className="mb-3">
                                    <label htmlFor="Input" className="form-label">Username</label>
                                    <span className="text-danger">*</span>
                                    <input type="text" className="form-control" id="Input" name="username" onChange={handleChange} />
                                </div>
                                <div>
                                    <label htmlFor="Password" className="form-label">Password</label>
                                    <span className="text-danger">*</span>
                                    <input ref={passwordRef} type="password" className="form-control" id="Password" name="password" onChange={handleChange} />
                                </div>
                                <div className="form-check text-start my-3">
                                    <input className="form-check-input" type="checkbox" defaultValue="remember-me" id="flexCheckDefault" onClick={handleShowPassword} />
                                    <label className="form-check-label" htmlFor="flexCheckDefault">
                                        Show Password
                                    </label>
                                </div>
                                <button className="btn btn-primary w-100 py-2" type="submit">
                                    Sign in
                                </button>
                                <div className='mt-4 mb-4'>Don't have an account? <Link to="/register">Register here</Link></div>
                            </form>
                        </main>
                    </div>
                </div>
                <div className="col-5">
                    <div className="nav justify-content-center mt-4 pt-4">
                        <img className="nav-item"
                            src={registerImg}
                            alt=""
                            width={300}
                            height={200}
                        />
                    </div>
                </div>
            </div>

        </div>
    )
}

export default LoginPage