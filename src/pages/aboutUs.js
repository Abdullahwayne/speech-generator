import React from "react";
import pictureOne from "../assets/aboutpic.png";
import pictureTwo from "../assets/aboutpic2.png";
import Header from "../components/header";

const AboutUs = () => {
  return (
    <div className="aboutus">
      <Header/>
      <div className="aboutus-top">
        <h1> About Us </h1>
        <span>
          The best and relevent speech generator for you, which will amaze you
          in many ways{" "}
        </span>

        <button> Learn More</button>
      </div>
      <div className="aboutus-content">
        <h1>A Unique Place to Generate your Speech</h1>

        <span>
          This site is offering your free speech generator which can take your
          inputs in to many ways and options and generate you a beautiful speech
          regarding your topic. Lorem Ipsum is simply dummy text of the printing
          and typesetting industry. Lorem Ipsum has been the industry's standard
          dummy text ever since the 1500s, when an unknown printer took a galley
          of type and scrambled it to make a type specimen book. It has survived
          not only five centuries, but also the leap into electronic
          typesetting, remaining essentially unchanged. It was popularised in
          the 1960s with the release of Letraset sheets containing Lorem Ipsum
          passages, and more recently with desktop publishing software like
          Aldus PageMaker including versions of Lorem Ipsum.
        </span>

        <p>Be Inspired. Be Artistic. Use us</p>
      </div>
    </div>
  );
};

export default AboutUs;
