import React from "react";
import "./styles/HeroArea.css";
import HeroImage from "./images/thumb-new-816x460-a703eb5faf4742dfc8710fb05bacebb5-fotor-bg-remover-2023120119624.png";

const Heroares = () => {
  return (
    <div class="home">
      <div class="home-banner">
        <div class="home-banner-wordings">
          <h1>The place where your health matters most.</h1>
          <p>Better health starts here.</p>
          <button id="register">MORE ABOUT US</button>
        </div>
        <div class="home-banner-wordings">
          <div class="right-content-image">
            <img src={HeroImage} />
          </div>
        </div>
      </div>
    </div>
  );
};

export default Heroares;
