import React from 'react'
import { Link, useNavigate } from 'react-router-dom';
import logo from '../assets/logoo.png';
import { useDispatch, useSelector } from "react-redux";
import { getUser, USER_CHANGED } from '../redux/user.redux';
import { useSnackbar } from 'notistack'



const Header = () => {
  const dispatch = useDispatch();

  const handleLogout = async () => {
    await dispatch({ type: USER_CHANGED, payload: null});
    enqueueSnackbar("Logout Successfully " , {variant:"success"})
    
  };
  const { enqueueSnackbar, closeSnackbar } = useSnackbar()

  const user = useSelector(getUser);
  const navigate = useNavigate();
  
  
  return (
    <div className='header'>
        <div className='header-left'>
    <img src={logo} alt=""/>
        </div>
        <div className='header-right'>
          <Link style={{textDecoration:"none"}}to="/">
            <span>Home </span>
            </Link>
            <Link style={{textDecoration:"none"}} to="/aboutus">
            <span>About Us</span>
            </Link>
            <Link style={{textDecoration:"none"}} to="/contactus">
            <span>Contact Us</span>
            </Link>
          
            <Link   style={{display : user ? "none" : "block",textDecoration:"none"}} to="/login">
            <span style={{display :  user ? "none" : "block"}}>Login</span>
            </Link>
            <Link  style={{display :  user ? "none" : "block", textDecoration:"none"}} to="/signup">
            <span style={{display :  user  ? "none" : "block"}}>SignUp</span>
            </Link>

            <button onClick={()=>{
              handleLogout()
              navigate("/login")
              
            }
          }
            style={{display : user ?  "block" : "none"}}>Logout</button>

        </div>

    </div>
  )
}

export default Header