
import axios from "axios";
import React, { useState } from "react";
import { useNavigate } from "react-router-dom";
import google from "../assets/google.png";
import facebook from "../assets/Path 6.png";
import Header from "../components/header";
import { useSnackbar } from 'notistack'


const Otp = () => {
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const [otp, setOtp] = useState("");

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
        <h1>OTP</h1>
        <h2>Enter your one time password </h2>
        <div className="login-container-fields">
          <div className="login-container-fields-left">
            <input
              type="text"
              placeholder="OTP"
              value={email}
              onChange={(e) => setOtp(e.target.value)}
              required
            ></input>
            
            <button
              onClick={() => {
                handleSignup();
              }}
            >
              Submit
            </button>
            
          </div>
          
        </div>
      </div>
    </div>
  );
};




export default Otp