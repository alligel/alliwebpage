import React from "react";
import Carousel from "react-bootstrap/Carousel";
import IMG1224 from "./img/IMG_1224.jpg";
import IMG1225 from "./img/IMG_1225.jpg";
import IMG1226 from "./img/IMG_1226.jpg";
import IMG1227 from "./img/IMG_1227.jpg";
import IMG1231 from "./img/IMG_1231.jpg";

export default function PhotoWorks(){
  return (
      <div>
          <div className="text-center">
            <br/>
            <p>I love taking birds and landscape photos as much as I love traveling.</p>
          </div>
          <Carousel fade className="carousel-inner">

          <Carousel.Item>
              <img
                className="d-block w-100"
                src={IMG1224}
                alt="First slide"
              />
            </Carousel.Item>

            <Carousel.Item>
              <img
                className="d-block w-100"
                src={IMG1225}
                alt="Second slide"
              />
            </Carousel.Item>

            <Carousel.Item>
              <img
                className="d-block w-100"
                src={IMG1226}
                alt="Third slide"
              />
            </Carousel.Item>

            <Carousel.Item>
              <img
                className="d-block w-100 photo-img"
                src={IMG1227}
                alt="Fourth slide"
              />
            </Carousel.Item>
            
            <Carousel.Item>
              <img
                className="d-block w-100 photo-img"
                src={IMG1231}
                alt="Sixth slide"
              />
            </Carousel.Item>

          </Carousel>

  </div>
  );
}