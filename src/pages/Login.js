import React, { useState } from "react";
import { useDispatch } from "react-redux";  
import { Link, useNavigate } from "react-router-dom";
import google from "../assets/google.png";
import facebook from "../assets/Path 6.png";
import { useSnackbar } from 'notistack'

import Header from "../components/header";
import { userLogin, USER_CHANGED } from "../redux/user.redux";
import { loginValidations } from "../validation/loginValidations";

const Login = () => {
  const dispatch = useDispatch();
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const { enqueueSnackbar, closeSnackbar } = useSnackbar()

  const navigate = useNavigate();


  
  const handleLogin = async () => {
    try{
    console.log(email, password);
    const response = await dispatch(userLogin({ email, password }));
    const validatedData = await loginValidations.validate({email,password});

   
    if (response.status === 200) {
      enqueueSnackbar("Successfully Logged In", {variant:"success"})
      navigate("/");
    }
    if (response.status === 401){
      enqueueSnackbar("Incorrect Email or Password" , {variant:"error"})
    }
    console.log(response);
  } catch (e) {
    enqueueSnackbar(e.message, {variant:"error"})
  }
  };

  const handleLogout = async () => {
    await dispatch({ type: USER_CHANGED, payload: { email: "", token: "", id: "" } });
  };
  return (
    <div className="login">
      <Header/>
      <div className="login-container">
        <h1>Login to your Account</h1>
        <h2>Login to your account using your credentials or Login with your social </h2>
        <div className="login-container-fields">
          <div className="login-container-fields-left">
            <input
              onChange={(e) => setEmail(e.target.value)}
              type="text"
              placeholder="Email"
              value={email}
            ></input>
            <input
              type="password"
              placeholder="Password"
              onChange={(e) => setPassword(e.target.value)}
              value={password}
            ></input>
            <button
              onClick={() => {
                handleLogin();
              }}
            >
              Login
            </button>
            <span>
              <a>→</a> Forget Password
            </span>
            <span>
              Don't have an account?{" "}
              <Link to="/signup">
                <a>Register</a>
              </Link>
            </span>
          </div>
          <div className="login-container-fields-right">
            <button>
              <img src={google} alt="" /> Sign in with Google
            </button>
            <button>
              <img src={facebook} alt="" /> Sign in with Google
            </button>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Login;
