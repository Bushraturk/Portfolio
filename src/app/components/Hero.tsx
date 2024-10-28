"use client";
import React from "react";
import Nav from "./Navbar";
import Typewriter from "typewriter-effect";

import "@/app/CSS/Hero.css";



const Hero = () => {
  return (
    <div id="container">
      <div id="content">
        <h3>Wellcome to my Portfolio</h3>
        <h1 className="h1">Hi, I am</h1>
        <div id="type">
          

          <Typewriter
            options={{
              strings: ["Bushra Turk", "Fronted Developer"],
              autoStart: true,
              loop: true,
            }}
          />
        </div>

        <p>
          Lorem ipsum dolor sit, amet consectetur adipisicing elit. <br />{" "}
          Reprehenderit dolorum iure inventore omnis nulla
          <br /> accusamus deleniti porro ipsum voluptatum sunt.
        </p>
      </div>

      <div id="img">
        <img src={"Banner.jpg"} alt="profile pic" />
      </div>
    </div>
  );
};

export default Hero;
