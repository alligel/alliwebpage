import React from "react";
import 'bootstrap/dist/css/bootstrap.css';
import Profileimg from "./Profileimg.JPG";


export default function AboutMe(){
    return (
    <div>
         {/* profile */}
         <div>
            <h1  id="aboutme">About Me</h1>
            <img alt="myprofile" className="profilepic" src={Profileimg}/>
         </div>
         <div>
            <h3>After spending time learning and doing new things,</h3>
            <h3>I found my passion in coding and want to learn more and more!</h3>
            <h3>I wish to become a great web developer one day.</h3>
            <br></br>
            <hr className="hr-style"></hr>
         </div>

         {/* education */}

         <div class="grid-container">

            <div class="grid-child">
            <h2>Education</h2>
            <br/>
            <div className="scrollbar">
            <p>Bachelor's Degree in Psychology,<br/>
            Chulalongkorn University,<br/>
            Bangkok, Thailand (2020)</p>
            </div>

            </div>

         {/* courses */}
            <div class="grid-child">
            <h2>Courses</h2>
            <br/>
            <div className="scrollbar text-left">
            <ul>
            <li><p>The Complete 2021 Web Development Bootcamp (Dr. Angela Yu, Udemy)</p></li>
            <li><p>Full Stack Engineer Bootcamp (Codestar)</p></li>
            <li><p>Introduction to User Experience Design (Georgia Tech, Coursera)</p></li>
            <li><p>Online Marketing Foundation (Microsoft, LinkedIn)</p></li>
            <li><p>Data Science Methodology (IBM, Coursera)</p></li>

            </ul>
            </div>

            </div>

        </div>

    </div>
    );
  }
