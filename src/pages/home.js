import React, { useEffect, useState } from "react";
import { useDispatch } from "react-redux";
import { questionSchema } from "../validation/questionValidation";
import Header from "../components/header";
import { AutoComplete, Button, Input } from "antd";
import TextArea from "antd/es/input/TextArea";
import { Checkbox, Modal } from "antd";
import google from "../assets/google.png";
import { Space, Spin } from "antd";
import { useSnackbar } from 'notistack'

import { Card } from "antd";
import * as yup from "yup";
import axios from "axios";
import { useSelector } from "react-redux";
import { getUser, userLogin, USER_CHANGED } from "../redux/user.redux";
import { Link, useNavigate } from "react-router-dom";
import Footer from "../components/footer";

const mockVal = (str, repeat = 1) => ({
  value: str.repeat(repeat),
});
const Home = () => {
  const user = useSelector(getUser);
  console.log(user, "user incoming");
  const navigate = useNavigate();
  const [value, setValue] = useState("");
  const [question, setQuery] = useState("");
  const [checked, setChecked] = useState(false);
  const [open, setOpen] = useState(false);
  const [loading, setLoading] = useState(false);
  const [errors , setErrors] = useState("")
  const [reply, setReply] = useState("");
  const { enqueueSnackbar, closeSnackbar } = useSnackbar()

  const dispatch = useDispatch();
  const [email, setEmail] = useState("");
  const [isEmpty, setIsEmpty] = useState(false);
  const [password, setPassword] = useState("");
  const handleLogin = async () => {
    console.log(email, password);
    const response = await dispatch(userLogin({ email, password }));
    if (response.status === 200) {
      alert("login successful");
      setOpen(false);
    }
    console.log(response);
  };

  const [occassion, setOccassion] = useState([
    {
      value: "Wedding",
    },
    {
      value: "Birthday",
    },
    {
      value: "Engagement party",
    },
    {
      value: "Baby shower",
    },
    {
      value: "Funeral",
    },
    {
      value: "Retirement",
    },
    {
      value: "Last day of job",
    },
    {
      value: "First day of job",
    },
    {
      value: "Leadership",
    },
  ]);
  const [atmosphere, setAtmosphere] = useState([
    {
      value: "Friendly",
    },
    {
      value: "Happy",
    },
    {
      value: "Sad",
    },
    {
      value: "Sarcastic",
    },
    {
      value: "Enthusiastic",
    },
    {
      value: "Empathetic",
    },
    {
      value: "Hopeful",
    },
    {
      value: "Bold",
    },
    {
      value: "Professional",
    },
    {
      value: "Disciplinary",
    },
    {
      value: "Relaxed",
    },
    {
      value: "Cute",
    },
    {
      value: "Angry",
    },
  ]);
  const [relation, setRelation] = useState([
    {
      value: "A friend",
    },
    {
      value: "A family member",
    },
    {
      value: "My paramore",
    },
    {
      value: "A group of friends",
    },
    {
      value: "A group of casual acquaintances",
    },
    {
      value: "A group of strangers",
    },
    {
      value: "My subordinates",
    },
    {
      value: "My boss",
    },
  ]);
  const [role, setRole] = useState([
    {
      value: "I am the groom",
    },
    {
      value: "I am the bride",
    },
    {
      value: "I am the grooms father",
    },
    {
      value: "I am the brides father",
    },
    {
      value: "I am the best man",
    },
    {
      value: "I am the bridesmaid",
    },
    {
      value: "I am a guest",
    },
    {
      value: "I am a family member",
    },
    {
      value: " I am the officiator",
    },

    {
      value: " I am the birthday person",
    },
    {
      value: " I am the sister",
    },
    {
      value: " I am the brother",
    },
    {
      value: " I am a distant relative",
    },
    {
      value: " I am the father",
    },
    {
      value: "I am the mother",
    },
    {
      value: " I am a guest",
    },
    {
      value: " It’s my babyshower",
    },
  ]);
  const [religious, setReligious] = useState([
    {
      value: "Christian",
    },
    {
      value: "Muslim",
    },
    {
      value: "Buddhist",
    },
    {
      value: "Hindu",
    },
    {
      value: "Spiritual",
    },
  ]);
  const onSearch = (searchText) => {
    setOccassion(
      !searchText
        ? []
        : [mockVal(searchText), mockVal(searchText, 2), mockVal(searchText, 3)]
    );
  };
  const onSearchAtmosphere = (searchText) => {
    setAtmosphere(
      !searchText
        ? []
        : [mockVal(searchText), mockVal(searchText, 2), mockVal(searchText, 3)]
    );
  };
  const onSearchRelation = (searchText) => {
    setRelation(
      !searchText
        ? []
        : [mockVal(searchText), mockVal(searchText, 2), mockVal(searchText, 3)]
    );
  };
  const onReligiousSearch = (searchText) => {
    setReligious(
      !searchText
        ? []
        : [mockVal(searchText), mockVal(searchText, 2), mockVal(searchText, 3)]
    );
  };
  const onSelect = (data) => {
    console.log("onSelect", data);
  };
  const onChange = (data) => {
    setValue(data);
  };
  const checkChange = (e) => {
    // console.log(`checked = ${e.target.checked}`);
    setChecked(!checked);
  };

  const [chat, setChat] = useState({
    selectedAtmosphere: "",
    selectedOccasion: "",
    selectedRelation: "",
    selectedRole: "",
    selectedReligion: "",
  });



  

  const changeChat = (key, value) => {
    setChat({ ...chat, [key]: value });
  };
  const loggedIn = async () => {
    await dispatch({ type: USER_CHANGED, payload: { email, password } });
  };
  console.log(loggedIn, "checking login");
  // const [selectedOccasion, setSelectedOccasion] = useState("");
  // const [selectedAtmosphere, setSelectedAtmosphere] = useState("");
  // const [selectedRelation, setSelectedRelation] = useState("");
  // const [selectedRole, setSelectedRole] = useState("");
  // const [selectedReligion, setSelectedReligion] = useState("");

  const handleSubmit = async () => {
   
    try {
        setLoading(true);
      if (user) { 
        const validatedData = await questionSchema.validate(chat);
        let query = `write a speech for ${chat.selectedOccasion} for ${chat.selectedRelation} as ${chat.selectedRole} in a ${chat.selectedAtmosphere} tone `;
        if (checked) query = query + `with ${chat.selectedReligion} intent`;
        const res = await axios.post(
          process.env.REACT_APP_BASE_URL + "product",
          {
            question: query,
          },
          { headers: { Authorization: user.token } }
        );

        console.log(res.data.reply, "<======== res");
        setLoading(false);
        //   alert(res.data.reply);
        setReply(res.data.reply);
        
      } else {
        setOpen(true);
        setLoading(false)
      }
    } catch (e) {
        setLoading(false);
        setErrors(e)
      console.log(e);
    //   console.log(e.response.data, "<==== data");
      console.log(e.status);
      enqueueSnackbar(e.message, {variant:"error"})
      
      
      if (
        e.response &&
        e.response.status === 400 &&
        e.response.data == "Invalid Token"
      ) {
        enqueueSnackbar("successfully logged in " , {variant :"success"})
        navigate("/login");
      }
      console.log(e.status);
    //   alert(e)
    }
  };

  useEffect(() => {}, [checked]);

  return (
    <div className="home" >
      <Header />

      <div className="home-parent">

        <div className="home-parent-left">

        </div>

         <div className="home-parent-container">
        <div className="home-parent-container-top">
          {/* <h1 onClick={() => console.log(chat)}>Welcome to the Speech page</h1> */}
        </div>
        <div className="home-parent-container-content">
          <div className="home-parent-container-content-inp">
            <span>Hi, help me write</span>
            <AutoComplete
              options={occassion}
              style={{
                width: "15%",
                border: "0px solid white",
                color: "red",
                fontFamily: "Poppins",
              }}
              onSelect={(e) => {
                changeChat("selectedOccasion", e);
              }}
              onSearch={(e) => {
                changeChat("selectedOccasion", e);
              }}
              onChange={(e) => {
                changeChat("selectedOccasion", e);
              }}
              placeholder="OCCASION"
            >
              <Input
                placeholder=""
                className="custom"
                style={{
                  height: 30,
                  border: "0px solid white",
                    display:"flex",
                    justifyContent:"center",
                    alignItems:"center"
                }}
                onChange={onChange}
              />
            </AutoComplete>
            <span>speech,</span>
            <br />
            <br />
          </div>
          <div className="home-parent-container-content-inp">
            <span>I think it should have a</span>
            <AutoComplete
              options={atmosphere}
              style={{
                width: "15%",
                border: "0px solid white",
              }}
              onSelect={(e) => {
                changeChat("selectedAtmosphere", e);
              }}
              onSearch={(e) => {
                changeChat("selectedAtmosphere", e);
              }}
              onChange={(e) => {
                changeChat("selectedAtmosphere", e);
              }}
              placeholder="Atmosphere"
            >
              <Input
                placeholder=""
                className="custom"
                style={{
                  height: 30,
                  border: "0px solid white",
                }}
                onChange={onChange}
              />
            </AutoComplete>
            <span>vibe.</span>

            <br />
            <br />
          </div>
          <div className="home-parent-container-content-inp">
            <span>I am writing to </span>
            <AutoComplete
              options={relation}
              style={{
                width: "15%",
                border: "0px solid white",
              }}
              onSelect={(e) => {
                changeChat("selectedRelation", e);
              }}
              onSearch={(e) => {
                changeChat("selectedRelation", e);
              }}
              onChange={(e) => {
                changeChat("selectedRelation", e);
              }}
              placeholder="Relation"
            >
              <Input
                placeholder=""
                className="custom"
                style={{
                  height: 30,
                  border: "0px solid white",
                }}
                onChange={onChange}
              />
            </AutoComplete>
            <br />
            <br />
          </div>
          <div className="home-parent-container-content-inp">
            <span>Oh and by the way, my role in the OCCASION is </span>
            <AutoComplete
              options={role}
              style={{
                width: "20%",
                border: "0px solid white",
              }}
              onSelect={(e) => {
                changeChat("selectedRole", e);
              }}
              onSearch={(e) => {
                changeChat("selectedRole", e);
              }}
              onChange={(e) => {
                changeChat("selectedRole", e);
              }}
              placeholder="USER ROLE"
            >
              <Input
                placeholder=""
                className="custom"
                style={{
                  height: 30,
                  border: "0px solid white",
                }}
                onChange={onChange}
              />
            </AutoComplete>
            <br />
            <br />
          </div>
          <div className="home-parent-container-content-inp">
            <span>Oh and I want to add</span>
            <Checkbox
              onClick={() => {
                setChecked(!checked);
                console.log(checked, "changing");
              }}
              style={{
                display: checked ? "none" : "flex",
                paddingLeft: "5px",
              }}
            >
              check if yes
            </Checkbox>
            <AutoComplete
              options={religious}
              style={{
                display: checked ? "block" : "none",
                width: "15%",
                border: "0px solid white",
              }}
              onSelect={(e) => {
                changeChat("selectedReligion", e);
              }}
              onSearch={(e) => {
                changeChat("selectedReligion", e);
              }}
              onChange={(e) => {
                changeChat("selectedReligion", e);
              }}
              placeholder="Relgion"
            >
             <Input
                placeholder=""
                className="custom"
                style={{
                  height: 30,
                  border: "0px solid white",
                }}
                onChange={onChange}
              />
            </AutoComplete>
            <span>tone</span>

            <br />
            <br />
          </div>
        </div>
        <div className="home-parent-container-login">
          {/* <Button type="primary" onClick={() => setOpen(true)}>
        Open Modal of 1000px width
      </Button> */}
          <Modal
            title=""
            centered
            open={open}
            onOk={() => setOpen(false)}
            onCancel={() => setOpen(false)}
            width={1000}
          >
            <div className="login-container">
              <h1>Login to your Account</h1>
              <h2>
                Login to your account using your credentials or Login with your
                social{" "}
              </h2>
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
                  {/* <button>
              <img src={facebook} alt="" /> Sign in with Google
            </button> */}
                </div>
              </div>
            </div>
          </Modal>
        </div>
        <div className="home-parent-container-prompt">
          {/* <Input
      showCount
      disabled
    //   maxLength={1000}
      style={{
        height: 120,
        width:600,
       
        backgroundColor:"gray",
        borderRadius:"15px",
      }}
      value={reply}
     
      placeholder="Prompt reply from GPT"
    ></Input> */}

          <Card
            style={{
              width: 400,
              minHeight: 50,
              backgroundColor: "#F0F0F0",
              color: "black",
            }}
          >
            {!reply ? <span>Prompt reply from GPT</span> : <span>{reply}</span>}
          </Card>
        </div>
        <div className="home-parent-container-but">
          {loading ? (
            <Spin spinning={loading} size="large"></Spin>
          ) : (
            <button
              
              onClick={() => {
                
            handleSubmit()
          
              }
            
            }
            >
              {" "}
              Submit{" "}
            </button>
          )}
          {/* <button onClick={()=>{
            enqueueSnackbar('error running', {variant:"success"})
          }}></button> */}
        </div>
      </div>

      </div>

 


      <div className="home-footer">
        <Footer />
      </div>
    </div>
  );
};

export default Home;
