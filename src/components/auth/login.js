import React, { useState } from 'react'
import { Link, useNavigate, useLocation } from 'react-router-dom'
import axios from '../../api/axios'
import useAuth from '../../hooks/AuthProvider'

const LoginPage = () => {
    const {setAuth } = useAuth()
    const navigate = useNavigate()
    const location = useLocation()
    const from = location.state?.from?.pathname || '/'

    const [user, setUser] = useState({
        username: '',
        password: ''
    })

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
                const res = await axios.post('/account/login', user, {withCredentials: true })
                console.log(res)
                setAuth({
                    ...res.data,
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
        <div className='bg-body-tertiary pb-4 pt-4'>
            <div className="nav justify-content-center pt-4 mb-4">
                <img className='nav-item' src="https://getbootstrap.com/docs/5.3/assets/brand/bootstrap-logo.svg" alt="" width={72} height={57} />
            </div>
            <div className="nav justify-content-center h3">welcome to Narayana blogs</div>
            <p className="nav justify-content-center h5 mt-4 fw-normal">Please sign in</p>
            <div className='d-flex align-items-center'>
                <main className="form-signin w-100 m-auto">
                    <form onSubmit={handleSubmit}>
                        <div className="form-floating">
                            <input type="text" className="form-control" id="floatingInput" name="username" onChange={handleChange} placeholder="username" />
                            <label htmlFor="floatingInput">Username</label>
                        </div>
                        <div className="form-floating">
                            <input type="password" className="form-control" id="floatingPassword" name="password" onChange={handleChange} placeholder="Password" />
                            <label htmlFor="floatingPassword">Password</label>
                        </div>
                        <div className="form-check text-start my-3">
                            <input className="form-check-input" type="checkbox" defaultValue="remember-me" id="flexCheckDefault" />
                            <label className="form-check-label" htmlFor="flexCheckDefault">
                                Remember me
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
    )
}

export default LoginPage