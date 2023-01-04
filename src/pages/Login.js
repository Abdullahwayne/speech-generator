import React from "react";
import { Link } from "react-router-dom";
import google from "../assets/google.png";
import facebook from '../assets/Path 6.png'

const Login = () => {
  return (
    <div className="login">
      <div className="login-container">
        <h1>Login to your Account</h1>
        <h2>
          Login to your account using your credentials or Login with your social{" "}
        </h2>
        <div className="login-container-fields">
            <div className="login-container-fields-left">
                <input type="text" placeholder="Email" ></input>
                <input type="text" placeholder="Password" ></input>
                <button>Login</button>
                <span><a>→</a> Forget Password</span>
                <span>Don't have an account? <Link to="/signup"><a>Register</a></Link></span>
            </div>
            <div className="login-container-fields-right">
                <button>
                  <img src={google} alt=""/>  Sign in with Google
                </button>
                <button>
                  <img src={facebook} alt=""/>  Sign in with Google
                </button>
                
            </div>
        </div>
      </div>
    </div>
  );
};

export default Login;
