import React, { Component } from 'react'
import './register.css'
import axios from 'axios'
import { Link } from 'react-router-dom'

export class RegistrationPage extends Component {
    constructor(props) {
        super(props)

        this.handleUsername = this.handleUsername.bind(this)
        this.handlePassword = this.handlePassword.bind(this)
        this.handleSubmit = this.handleSubmit.bind(this)

        this.state = {
            username: '',
            password: '',
            isUserAvailable: null
        }
    }

    handleUsername(e) {
        const username = e.currentTarget.value
        console.log(username)
        this.setState({
            username: username
        })

        axios.post('http://localhost:8000/account/useravailable', {username}).then(res => {
            console.log(res)
            if (username !== '') {
                this.setState({
                    isUserAvailable: res.data.isAvailable
                })
            } else {
                this.setState({
                    isUserAvailable: null
                })
            }
        })
    }

    handlePassword(e) {
        this.setState({
            password: e.currentTarget.value
        })
    }

    handleSubmit(e) {
        e.preventDefault()
        console.log(this.state)

        const registrationData = {
            username: this.state.username,
            password: this.state.password
        }

        // axios.post('http://localhost:8000/account/register/', registrationData).then(res => {
        //     console.log(res.data)
        //     this.setState({
        //         username: '',
        //         password: '',
        //         isAvailable: null
        //     })
    
        // })
        console.log('Redirecting to login page')
        // history.push('/login')
    }


    render() {
        return (
            <div className="bg-body-tertiary pb-4 pt-4">
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
                        <form onSubmit={this.handleSubmit}>
                            {
                                this.state.isUserAvailable != null
                                ? 
                                this.state.isUserAvailable 
                                ? 
                                <div className='text-success'>username available</div> 
                                :  
                                <div className='text-danger'>username not available</div>
                                : 
                                <div></div>
                            }
                            <div className="form-floating">
                                <input
                                    type="text"
                                    className="form-control"
                                    id="floatingInput"
                                    name="username"
                                    placeholder="username"
                                    onChange={this.handleUsername}
                                    value={this.state.username}
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
                                    onChange={this.handlePassword}
                                    value={this.state.password}
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
}

export default RegistrationPage