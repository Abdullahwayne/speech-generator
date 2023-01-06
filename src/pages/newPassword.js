import axios from "axios";
import React, { useState } from "react";
import { useNavigate } from "react-router-dom";
import google from "../assets/google.png";
import facebook from "../assets/Path 6.png";
import Header from "../components/header";
import { useSnackbar } from 'notistack'


const NewPassword = () => {
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
    <div className="logina">
      <Header />
      <div className="logina-container">
        <h1>Change Your Password</h1>
        <h2>Enter your new password</h2>
        <div className="logina-container-fields">
          <div className="logina-container-fields-left">
            <input
              type="password"
              placeholder="New Password"
              value={email}
              onChange={(e) => setEmail(e.target.value)}
              required
            ></input>
            <input
              type="password"
              placeholder="Confirm Password"
              value={password}
              onChange={(e) => setPassword(e.target.value)}
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

export default NewPassword;
