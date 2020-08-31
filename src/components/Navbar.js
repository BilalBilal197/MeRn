import React from 'react';
import {Link } from 'react-router-dom';

const NavBar = () =>{
    return(
        <nav>
        <div className="nav-wrapper white">
        <a to="/" className="brand-logo left">Instagram</a>
        <ul id="nav-mobile" className="right">
            <li><Link href="/signin">Signin</Link></li>
            <li><Link href="/signup">Signup</Link></li>
            <li><Link href="/profile">Profile</Link></li>
        </ul>
        </div>
        </nav>
    
    )
}

export default NavBar;