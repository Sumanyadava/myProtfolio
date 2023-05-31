import React from 'react'
import {Link} from 'react-router-dom';
import data from '../fakeapi.json'
import '../styles/nav.scss'

const Header = () => {
    return (
        <div className="head">
        <div className="logo ">{data.name}</div>
        <nav>
            
            <Link to="/">Home</Link>
            
            <Link to="/project">Project</Link>

            <Link to="/services">Services</Link>

            <Link to="/Contact">Admin</Link>
        </nav>
        </div>
    )
}

export default Header
