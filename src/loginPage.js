import React, { Component } from 'react'
import { Link } from 'react-router-dom'

export class LoginPage extends Component {

  render() {
    return (
      <div className='bg-body-tertiary pb-4 pt-4'>
        <div className="nav justify-content-center pt-4 mb-4">
          <img className='nav-item' src="https://getbootstrap.com/docs/5.3/assets/brand/bootstrap-logo.svg" alt="" width={72} height={57} />
        </div>
        <div className="nav justify-content-center h3">welcome to Narayana blogs</div>
        <p className="nav justify-content-center h5 mt-4 fw-normal">Please sign in</p>
        <div className='d-flex align-items-center'>
          <main className="form-signin w-100 m-auto">
            <form>
              <div className="form-floating">
                <input type="text" className="form-control" id="floatingInput" placeholder="username" />
                <label htmlFor="floatingInput">Username</label>
              </div>
              <div className="form-floating">
                <input type="password" className="form-control" id="floatingPassword" placeholder="Password" />
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
}

export default LoginPage