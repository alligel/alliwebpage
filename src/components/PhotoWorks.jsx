import React from "react";
import Carousel from "react-bootstrap/Carousel";

export default function PhotoWorks(){
  return (
      <div>
          <div className="text-center">
            <br/>
            <p>I tended to keep the color of photos as a I see with my eyes.</p>
            <p>I may adjust them but I'll always not to change the color mood so much.</p>
            <p>However, I think to myself I have to try new things and I'll do it from now on.</p>
          </div>
          <Carousel fade className="carousel-inner">

          <Carousel.Item>
              <img
                className="d-block w-100"
                src="PhotoWorks/IMG_1224.jpg"
                alt="First slide"
              />
            </Carousel.Item>

            <Carousel.Item>
              <img
                className="d-block w-100"
                src="PhotoWorks/IMG_1225.jpg"
                alt="Second slide"
              />
            </Carousel.Item>

            <Carousel.Item>
              <img
                className="d-block w-100"
                src="PhotoWorks/IMG_1226.jpg"
                alt="Third slide"
              />
            </Carousel.Item>

            <Carousel.Item>
              <img
                className="d-block w-100 photo-img"
                src="PhotoWorks/IMG_1227.jpg"
                alt="Fourth slide"
              />
            </Carousel.Item>
            
            <Carousel.Item>
              <img
                className="d-block w-100 photo-img"
                src="PhotoWorks/IMG_1231.jpg"
                alt="Sixth slide"
              />
            </Carousel.Item>

          </Carousel>

  </div>
  );
}