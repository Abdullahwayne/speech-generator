import React from 'react'
import { Link, useNavigate } from 'react-router-dom';
import logo from '../assets/logoo.png';
import { useDispatch, useSelector } from "react-redux";
import { getUser, USER_CHANGED } from '../redux/user.redux';


const Header = () => {
  const dispatch = useDispatch();

  const handleLogout = async () => {
    await dispatch({ type: USER_CHANGED, payload: { email: "", token: "", id: "" } });


  };
  const user = useSelector(getUser);
  const navigate = useNavigate();
  
  
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
            <span style={{display : user ? "none" : "block"}}>Login</span>
            </Link>
            <Link to="/signup">
            <span style={{display : user ? "none" : "block"}}>SignUp</span>
            </Link>

            <button onClick={()=>{
              handleLogout()
              navigate("/login")
              
            }
          }
            style={{display : !user ? "none" : "block"}}>Logout</button>

        </div>

    </div>
  )
}

export default Header