import React from "react";
import A07 from "./A07.jpg";
import NavBar from "./NavBar"
import AboutMe from "./AboutMe"

function Header() {
  
  return (
<div class="top-container">
    <div>
        <NavBar />
        <h1 className="nameText">Hello</h1>
    </div>
{/* About */}
    <div class="about-container">
        <AboutMe />
    </div>
        <img alt="foxbg" className="image-bg" src={A07}/>
    
</div>
  );
}

export default Header;