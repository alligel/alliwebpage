import React from "react";
import A07 from "./img/A07.jpg";
import Abirdforsplash from "./img/Abirdforsplash.png"
import NavBar from "./NavBar"
import AboutMe from "./AboutMe"

export default function FirstPage() {
  
  return (
<div class="top-container">
    <div className="splashbg">
        <NavBar />
        <h1 className="nameText">Alli</h1>
        <img alt="splash" className="birdsplash" src={Abirdforsplash}/>
    </div>

    <div className="about-container">
        <AboutMe />
    </div>
        <img alt="foxbg" className="image-bg" src={A07}/>
    
</div>
  );
}
