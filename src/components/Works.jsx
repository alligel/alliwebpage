import React from "react";
import 'bootstrap/dist/css/bootstrap.css';
import ArtWorks from "./ArtWorks";
import PhotoWorks from "./PhotoWorks";
import CodingWorks from "./CodingWorks";
import videowhitebg from "./videowhitebg.mp4";

export default function Works(){

    return (
        <div>

            <div id="works" className="topic-container"><h1> Selected Works </h1></div>

            <div className="white-container2">
            <div className="container h-100 py-2 ">
            {/* tab list */}
              <ul className="nav nav-tabs border-0 justify-content-center" id="myTab" role="tablist">
                 <li className="nav-item">
                    <a className="nav-link active border border-secondary border-bottom-0" id="artworks-tab" data-toggle="tab" href="#artworks" role="tab" aria-controls="artworks" aria-selected="true">Art Works</a>
                </li>
                <li className="nav-item">
                     <a className="nav-link border border-warning border-bottom-0" id="codingworks-tab" data-toggle="tab" href="#codingworks" role="tab" aria-controls="codingworks" aria-selected="false">Coding</a>
                </li>
                <li className="nav-item">
                     <a className="nav-link border border-danger border-bottom-0" id="photoworks-tab" data-toggle="tab" href="#photoworks" role="tab" aria-controls="photoworks" aria-selected="false">Photography</a>
                 </li> 
             </ul>
            {/* tap content */}
                <div class="tab-content h-75">
                    <div className="tab-pane h-100 p-3 active border border-secondary" id="artworks" role="tabpanel" aria-labelledby="artworks-tab"><ArtWorks /></div>
                    <div className="tab-pane h-100 p-3 border border-warning" id="codingworks" role="tabpanel" aria-labelledby="codingworks-tab"><CodingWorks /></div>
                    <div className="tab-pane h-100 p-3 border border-danger" id="photoworks" role="tabpanel" aria-labelledby="photoworks-tab"><PhotoWorks /></div>
                </div>

            </div>
            <div className="topic-container">
            <h1>Let's Chat</h1>
            </div>

            <video id="myVideo" autoPlay loop muted>
            <source src={videowhitebg} type="video/mp4" />
            </video>
            
            </div>
        </div>
    );
  }
