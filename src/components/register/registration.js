import React, { useState } from 'react'
import './register.css'
import axios from 'axios'
import { Link, useNavigate } from 'react-router-dom'

const RegistrationPage = () => {
    const navigate = useNavigate()
    console.log('REfreshed')

    const [user, setUser] = useState({
        username: '',
        password: '',
        isUserAvailable: null
    })

    const handleChange = e => {
        const { name, value } = e.target
        setUser({
            ...user,
            [name]: value
        })
    }

    const checkAvailability = () => {
        axios.post('http://localhost:8000/account/useravailable', user).then(res => {
            if (user.username !== '') {
                console.log(res)
                setUser({
                    ...user,
                    isUserAvailable: res.data.isAvailable
                })
            } else {
                setUser({
                    ...user,
                    isUserAvailable: null
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
            })
            navigate('/login')
        } else {
            alert('Username or Password cannot be empty!')
        }


    }

    return (
        <div className="bg-body-tertiary pb-4 pt-4">
            {console.log('user', user)}
            <div className="nav justify-content-center pt-4 mb-4">
                <img
                    className="nav-item"
                    src="https://getbootstrap.com/docs/5.3/assets/brand/bootstrap-logo.svg"
                    alt=""
                    width={72}
                    height={57}
                />
            </div>
            <div className="nav justify-content-center h3">welcome to Narayana blogs</div>
            <p className="nav justify-content-center h5 mt-4 fw-normal">
                Please register
            </p>
            <div className="d-flex align-items-center">
                <main className="form-signin w-100 m-auto">
                    <button type="button" className="btn btn-light" onClick={checkAvailability}>Check availability</button>
                    {
                        user.isUserAvailable != null
                            ?
                            user.isUserAvailable
                                ?
                                <div className='text-success'>username available</div>
                                :
                                <div className='text-danger'>username not available</div>
                            :
                            <div></div>
                    }
                    <form onSubmit={handleSubmit}>
                        <div className="form-floating">
                            <input
                                type="text"
                                className="form-control"
                                id="floatingInput"
                                name="username"
                                placeholder="username"
                                onChange={handleChange}
                                value={user.username}
                            />
                            <label htmlFor="floatingInput">Username</label>
                        </div>
                        <div className="form-floating">
                            <input
                                type="password"
                                className="form-control"
                                id="floatingPassword"
                                name='password'
                                placeholder="Password"
                                onChange={handleChange}
                                value={user.password}
                            />
                            <label htmlFor="floatingPassword">Password</label>
                        </div>
                        <div className="form-check text-start my-3">
                            <input
                                className="form-check-input"
                                type="checkbox"
                                defaultValue="remember-me"
                                id="flexCheckDefault"
                            />
                            <label className="form-check-label" htmlFor="flexCheckDefault">
                                Remember me
                            </label>
                        </div>
                        <button className="btn btn-primary w-100 py-2" type="submit">
                            Register
                        </button>
                        <div className="mt-4 mb-4">
                            Already have an account? <Link to="/login">Login here</Link>
                        </div>
                    </form>
                </main>
            </div>
        </div>
    )
}

export default RegistrationPage
