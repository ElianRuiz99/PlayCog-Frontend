import React from "react";
// Logo
import logo from '../assets/logo.png';
//css
import './styles/Navbar.css';

function Navbar(){
    return (
        <div className='container-nav'>
            <a href="/"><img className='logo' src={logo} alt="" /></a>
        </div>
    );
}

export { Navbar };