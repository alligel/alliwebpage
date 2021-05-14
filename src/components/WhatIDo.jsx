import React from "react";

export default function WhatIDo(){
    return (
        <section>

        <div className="topic-container">
            <h1 className="aboutHeading" id="whatido" >What I Do</h1>
        </div>

         <div className="white-container">
             <div className="row">

                 <div className="col-lg-4 col-md-4 col-sm-6 col-xs-6 whatido-container">
                     <i className="fas fa-paint-brush skill-icon"></i>
                     <h2>Art & Design</h2>
                     <p>Digital painting is always one of my favorite hobbies.
                     To visit my instagram art account <a href="https://www.instagram.com/alli.gather/" target="_blank" rel="noreferrer">here.</a></p>
                     
                     <p>To leverage this skill, I'm learning more about design and their tools to achieve knowledge about UX/UI design.</p>
                     <p><strong>Program: </strong>Adobe Photoshop, Adobe Illustrator, Adobe XD, Affinity Designer, Procreate,</p>
                </div>
                    

                 <div className="col-lg-4 col-md-4 col-sm-6 col-xs-6 whatido-container">
                     <i className="fas fa-code skill-icon"></i>
                     <h2>Coding</h2>
                     <p>Although I'm a amateur in this area, I'm trying my best here.
                     Coding is something that has my interest.</p>
                     <p>My goal is to make something that contribute to society,
                     and to be able to change the subject above from "Coding" to "Programming".</p>     
                 </div>

                  <div className="col-lg-4 col-md-4 col-sm-6 col-xs-6 whatido-container">
                  <i className="fas fa-camera-retro skill-icon"></i>
                    <h2>Photography & <br/>Video Editing</h2>
                    <p>When having a group project, the responsibility of taking and editing both photo and video has always been given to me
                    since middle school to university.  </p>
                    <p><strong>Program: </strong> Final Cut Pro</p>
                 </div>

             </div>

             

         </div>
         <hr className="hr-style"></hr>
        </section>
    );
}