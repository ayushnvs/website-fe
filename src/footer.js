import React, { Component } from 'react'

export class Footer extends Component {
    render() {
        return (
            <>
                <ul className="nav justify-content-center">
                    <li className="nav-item">
                        <a className="nav-link active" aria-current="page" href="#">Active</a>
                    </li>
                    <li className="nav-item">
                        <a className="nav-link" href="#">Link</a>
                    </li>
                    <li className="nav-item">
                        <a className="nav-link" href="#">Link</a>
                    </li>
                    <li className="nav-item">
                        <a className="nav-link disabled" aria-disabled="true">Disabled</a>
                    </li>
                    <li className="nav-item">
                        <a className="nav-link text-body-secondar disabled" aria-disabled='true'>Copyright © 2023-present</a>
                    </li>
                </ul>
            </>
        )
    }
}

export default Footer