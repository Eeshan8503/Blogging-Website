import './../Stylesheets/Navbar.css'
import React from 'react'

import Profile from './Profile'
import Search from './Search';
import LoginButton from './../Components/Login';

import logo from './../data/icon-st.svg';


const Navbar = () => {
    return (
    <div className="container">
        <img className="icon" src={logo} alt="_N.F" />
        <div className="nav-links">
            <a className="nav-link" href="/home">Home</a>
            <a className="nav-link" href="/blog">Blog</a>
            <a className="nav-link" href="/tutorial">Tutorial</a>
        </div>
           
        <div className="inner-container">
            <LoginButton />
            <Search />
        </div>
    </div>
);
}
export default Navbar
