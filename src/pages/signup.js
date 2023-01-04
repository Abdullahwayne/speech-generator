import React from "react";
import google from "../assets/google.png";
import facebook from '../assets/Path 6.png'
import Header from "../components/header";

const Signup = () => {
  return (
    <div className="login">
      <Header/>
      <div className="login-container">
        <h1>Signup your Account</h1>
        <h2>
          Don't have an account? You can signup with the credentials or social{" "}
        </h2>
        <div className="login-container-fields">
            <div className="login-container-fields-left">
                <input type="text" placeholder="Email" ></input>
                <input type="text" placeholder="Password" ></input>
                <button>Login</button>
                <span><a>→</a> Forget Password</span>
                <span>Don't have an account? <a>Register</a></span>
            </div>
            <div className="login-container-fields-right">
                <button>
                  <img src={google} alt=""/>  Signup with Google
                </button>
                
                
            </div>
        </div>
      </div>
    </div>
  );
};

export default Signup;
