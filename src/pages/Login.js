import React, { useState } from "react";
import { useDispatch } from "react-redux";
import { Link, useNavigate } from "react-router-dom";
import google from "../assets/google.png";
import facebook from "../assets/Path 6.png";
import { userLogin } from "../redux/user.redux";

const Login = () => {
  const dispatch = useDispatch();
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const navigate = useNavigate();
  const handleLogin = async () => {
    console.log(email, password);
    const response = await dispatch(userLogin({ email, password }));
    if (response.status === 200) {
      navigate("/");
    }
    console.log(response);
  };
  return (
    <div className="login">
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
