import React from "react";
import A01 from "./img/A01.jpg";
import A02 from "./img/A02.jpg";
import A03 from "./img/A03.jpg";
import A14 from "./img/A14.jpg";
import A07 from "./img/A07.jpg";
import A09 from "./img/A09.jpg";
import A11 from "./img/A11.jpg";
import A12 from "./img/A12.jpg";
import A13 from "./img/A13.jpg";
import A05 from "./img/A05.jpg";

export default function ArtWorks(){
  return (
      <div>

          <div>
            <div className="row">
              <div className="column">
                <div className="content">
                  <img className="works-img" src={A01} alt="alli-artwork"/>
                </div>
              </div>

              <div className="column">
                <div className="content">
                <img className="works-img" src={A02} alt="alli-artwork"/>
                </div>
              </div>

              <div className="column">
                <div className="content">
                <img className="works-img" src={A03} alt="alli-artwork"/>
                </div>
              </div>

              <div className="column">
                <div className="content">
                <img className="works-img" src={A14} alt="alli-artwork"/>
                </div>
              </div>

              <div className="column">
                <div className="content">
                <img className="works-img" src={A07} alt="alli-artwork"/>
              </div>
              </div>

              <div className="column">
                <div className="content">
                <img className="works-img" src={A09} alt="alli-artwork"/>
              </div>
              </div>

              <div className="column">
                <div className="content">
                <img className="works-img" src={A11} alt="alli-artwork"/>
              </div>
              </div>

              <div className="column">
                <div className="content">
                <img className="works-img" src={A12} alt="alli-artwork"/>
              </div>
              </div>

              <div className="column">
                <div className="content">
                <img className="works-img" src={A13} alt="alli-artwork"/>
              </div>
              </div>

              <div className="column">
                <div className="content">
                <img className="works-img" src={A05} alt="alli-artwork"/>
              </div>
              </div>

           </div>
          </div>
           
      </div>
  );
}