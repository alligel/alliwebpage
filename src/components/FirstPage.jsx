import React from "react";
import A07 from "./img/A07.jpg";
import SplashwithText from "./img/SplashwithText.jpg";
import NavBar from "./NavBar"
import AboutMe from "./AboutMe"

export default function FirstPage() {
  
  return (
<div>

<div>
    <div>
        <NavBar />
    </div>
    <div className="splash-container">
        <img id="home" alt="splash" className="splash-bg" src={SplashwithText}/>
    </div>
</div>
{/* <div className="top-container">
    <div className="about-container">
        <AboutMe />
    </div>
        <img alt="foxbg" className="image-bg" src={A07}/>
</div> */}

</div>
  );
}
