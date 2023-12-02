import React from 'react'
import useAuth from '../../hooks/AuthProvider'

const Footer = () => {
    const { auth } = useAuth()

    return (
        <>
            {
                auth.isLoggedIn
                    ?
                    <ul className="nav justify-content-center border">
                        <li className="nav-item">
                          <a className="nav-link active" aria-current="page" href="/">Active</a>
                        </li>
                        <li className="nav-item">
                            <a className="nav-link" href="/">Link</a>
                        </li>
                        <li className="nav-item">
                            <a className="nav-link" href="/">Link</a>
                        </li>
                        {/* <li className="nav-item">
                        <a className="nav-link disabled" aria-disabled="true">Disabled</a>
                    </li> */}
                        <li className="nav-item">
                            <p className="nav-link text-body-secondar disabled" aria-disabled='true'>Copyright © 2023-present</p>
                        </li>
                    </ul>
                    :
                    ''
            }
        </>
    )
}

export default Footer