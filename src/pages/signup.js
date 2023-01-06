import axios from "axios";
import React, { useState } from "react";
import { useNavigate } from "react-router-dom";
import google from "../assets/google.png";
import facebook from "../assets/Path 6.png";
import Header from "../components/header";
import { useSnackbar } from 'notistack'


const Signup = () => {
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const navigate = useNavigate();
  const { enqueueSnackbar, closeSnackbar } = useSnackbar()

  const handleSignup = async () => {
    const data = { email, password };
    try {
      const res = await axios.post(process.env.REACT_APP_BASE_URL + "user", data);
      console.log(res);
      if (res.status === 201) {
        // alert("User successfully created");
        enqueueSnackbar("Successfully Signed Up", {variant:"success"})
        navigate("/login");
      }
    } catch (e) {
      console.log(e.response.data.message, ",=== e");
      // enqueueSnackbar(e.message, {variant:"error"})
      if (e.response.data.message)  enqueueSnackbar(e.response.data.message, {variant:"error"})
      // alert(e.message);
    }
  };
  return (
    <div className="login">
      <Header />
      <div className="login-container">
        <h1>Signup your Account</h1>
        <h2>Don't have an account? You can signup with the credentials or social </h2>
        <div className="login-container-fields">
          <div className="login-container-fields-left">
            <input
              type="text"
              placeholder="Email"
              value={email}
              onChange={(e) => setEmail(e.target.value)}
              required
            ></input>
            <input
              type="password"
              placeholder="Password"
              value={password}
              onChange={(e) => setPassword(e.target.value)}
              required
            ></input>
            <button
              onClick={() => {
                handleSignup();
              }}
            >
              Signup
            </button>
            
          </div>
          <div className="login-container-fields-right">
            <button>
              <img src={google} alt="" /> Signup with Google
            </button>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Signup;
