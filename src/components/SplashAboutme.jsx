import React from "react";
import A07 from "./img/A07.jpg";
import SplashNobg from "./img/SplashNobg.png";
import NavBar from "./NavBar"
import AboutMe from "./AboutMe"

export default function SplashAboutme() {
  
  return (
<div>

<div>
    <div>
        <NavBar />
        <div id="home" className="splash-bg">
        <img alt="bird" className="splash-bird" src={SplashNobg}/>
        </div>
    </div>
        
</div>

<div className="top-container">
    <div className="about-container">
        <AboutMe />
    </div>
        <img alt="foxbg" className="image-bg" src={A07}/>
</div>

</div>
  );
}
