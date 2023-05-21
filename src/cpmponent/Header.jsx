import React from 'react'
import {Link} from 'react-router-dom';

import '../styles/nav.scss'

const Header = () => {
    return (
        <div className="head">
        <div className="logo">hello</div>
        <nav>
            
            <Link to="/">Home</Link>
            
            <Link to="/project">Project</Link>

            <Link to="/services">Services</Link>

            <Link to="/Contact">Contact ME</Link>
        </nav>
        </div>
    )
}

export default Header
