import React from "react";
import A07 from "./img/A07.jpg";
import Splash from "./img/Splash.jpg";
import NavBar from "./NavBar"
import AboutMe from "./AboutMe"

export default function FirstPage() {
  
  return (
<div class="top-container">
    <div>
        <NavBar />
        <h1 id="nameText">Alli</h1>
        <img alt="splash" className="splash-bg" src={Splash}/>
    </div>

    <div className="about-container">
        <AboutMe />
    </div>
        <img alt="foxbg" className="image-bg" src={A07}/>
    
</div>
  );
}