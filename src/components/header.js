import React from 'react'
import { Link } from 'react-router-dom';
import logo from '../assets/logoo.png';

const Header = () => {
  return (
    <div className='header'>
        <div className='header-left'>
    <img src={logo} alt=""/>
        </div>
        <div className='header-right'>
          <Link to="/">
            <span>Home </span>
            </Link>
            <Link to="aboutus">
            <span>About Us</span>
            </Link>
            <Link to="/contactus">
            <span>Contact Us</span>
            </Link>
            <Link to="/login">
            <span>Login/Signup</span>
            </Link>
        </div>

    </div>
  )
}

export default Header