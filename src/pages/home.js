import React, { useEffect, useState } from "react";
import Header from "../components/header";
import { AutoComplete } from "antd";
import TextArea from "antd/es/input/TextArea";
import { Checkbox } from "antd";
import axios from "axios";
import { useSelector } from "react-redux";
import { getUser } from "../redux/user.redux";
import { useNavigate } from "react-router-dom";

const mockVal = (str, repeat = 1) => ({
  value: str.repeat(repeat),
});
const Home = () => {
  const user = useSelector(getUser);
  const navigate = useNavigate();
  const [value, setValue] = useState("");
  const [question, setQuery] = useState("");
  const [checked, setChecked] = useState(false);
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
      !searchText ? [] : [mockVal(searchText), mockVal(searchText, 2), mockVal(searchText, 3)]
    );
  };
  const onSearchAtmosphere = (searchText) => {
    setAtmosphere(
      !searchText ? [] : [mockVal(searchText), mockVal(searchText, 2), mockVal(searchText, 3)]
    );
  };
  const onSearchRelation = (searchText) => {
    setRelation(
      !searchText ? [] : [mockVal(searchText), mockVal(searchText, 2), mockVal(searchText, 3)]
    );
  };
  const onReligiousSearch = (searchText) => {
    setReligious(
      !searchText ? [] : [mockVal(searchText), mockVal(searchText, 2), mockVal(searchText, 3)]
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

  // const [selectedOccasion, setSelectedOccasion] = useState("");
  // const [selectedAtmosphere, setSelectedAtmosphere] = useState("");
  // const [selectedRelation, setSelectedRelation] = useState("");
  // const [selectedRole, setSelectedRole] = useState("");
  // const [selectedReligion, setSelectedReligion] = useState("");

  const handleSubmit = async () => {
    try {
      let query = `write a speech for ${chat.selectedOccasion} for ${chat.selectedRelation} as ${chat.selectedRole} in a ${chat.selectedAtmosphere} tone `;
      if (checked) query = query + `with ${chat.selectedReligion} intent`;
      const res = await axios.post(
        process.env.REACT_APP_BASE_URL + "product",
        {
          question: query,
        },
        { headers: { Authorization: user.token } }
      );
      console.log(res, "<======== res");
    } catch (e) {
      console.log(e.response.data, "<==== data");
      console.log(e.status);
      if (e.response && e.response.status === 400 && e.response.data == "Invalid Token") {
        alert("login again");
        navigate("/login");
      }
      console.log(e.status);
    }
  };

  useEffect(() => {}, [checked]);

  return (
    <div className="home">
      <Header />
      <div className="home-container">
        <div className="home-container-top">
          <h1 onClick={() => console.log(chat)}>Welcome to the Speech page</h1>
        </div>
        <div className="home-container-content">
          <div className="home-container-content-inp">
            <h3>Your Occassion :</h3>
            <AutoComplete
              options={occassion}
              style={{
                width: "50%",
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
              placeholder="Select or Enter Occassion"
            >
              <TextArea
                placeholder=""
                className="custom"
                style={{
                  height: 50,
                }}
                onChange={onChange}
              />
            </AutoComplete>
            <br />
            <br />
          </div>
          <div className="home-container-content-inp">
            <h3>Your Atmosphere :</h3>
            <AutoComplete
              options={atmosphere}
              style={{
                width: "50%",
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
              placeholder="Select or Enter Atmosphere"
            >
              <TextArea
                placeholder=""
                className="custom"
                style={{
                  height: 50,
                }}
                onChange={onChange}
              />
            </AutoComplete>
            <br />
            <br />
          </div>
          <div className="home-container-content-inp">
            <h3>Who are you writing to :</h3>
            <AutoComplete
              options={relation}
              style={{
                width: "50%",
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
              placeholder="Select or Enter the Relation or the Person"
            >
              <TextArea
                placeholder=""
                className="custom"
                style={{
                  height: 50,
                }}
                onChange={onChange}
              />
            </AutoComplete>
            <br />
            <br />
          </div>
          <div className="home-container-content-inp">
            <h3>What is your Role :</h3>
            <AutoComplete
              options={role}
              style={{
                width: "50%",
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
              placeholder="Select or Enter the Relation or the Person"
            >
              <TextArea
                placeholder=""
                className="custom"
                style={{
                  height: 50,
                }}
                onChange={onChange}
              />
            </AutoComplete>
            <br />
            <br />
          </div>
          <div className="home-container-content-inp">
            <h4>DO YOU WISH TO INCLUDE A RELIGIOUS TONE TO YOUR SPEECH?</h4>
            <Checkbox
              onClick={() => {
                setChecked(!checked);
                console.log(checked, "changing");
              }}
              style={{
                display: checked ? "none" : "flex",
              }}
            >
              Checkbox
            </Checkbox>
            <AutoComplete
              options={religious}
              style={{
                display: checked ? "block" : "none",
                width: "50%",
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
              placeholder="Select your Religious Tone"
            >
              <TextArea
                placeholder=""
                className="custom"
                style={{
                  height: 50,
                }}
                onChange={onChange}
              />
            </AutoComplete>
            <br />
            <br />
          </div>
        </div>
        <button onClick={() => handleSubmit()}> Submit </button>
      </div>
    </div>
  );
};

export default Home;
