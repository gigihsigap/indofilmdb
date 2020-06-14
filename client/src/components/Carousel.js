import React, { useState } from "react";
import { Carousel } from "react-bootstrap";
import Img1 from "../assets/carousel1.png";
import Img2 from "../assets/carousel2.png";
import Img3 from "../assets/carousel3.png";
import Img4 from "../assets/carousel4.png";


export default (props) => {
    const [index, setIndex] = useState(0);

    const handleSelect = (selectedIndex, e) => {
      setIndex(selectedIndex);
    };
  
    return (
        <Carousel activeIndex={index} onSelect={handleSelect}>
        <Carousel.Item>
          <img
            className="d-block w-100"
            src={Img1}
            alt="First slide"
            style={{height: "100%",
                maxHeight: "700px"}}
          />
          <Carousel.Caption style={{backgroundColor: "#242424", opacity: "80%"}}>
            <h3>Explore New Movies</h3>
            <p>Find out more about Indonesian movies that captivate you.</p>
          </Carousel.Caption>
        </Carousel.Item>
        <Carousel.Item>
          <img
            className="d-block w-100"
            src={Img2}
            alt="Second slide"
            style={{height: "100%",
                maxHeight: "700px"}}
          />
  
          <Carousel.Caption style={{backgroundColor: "#242424", opacity: "80%"}}>
            <h3>Search for Films</h3>
            <p>We serve search feature for both Indonesian and English title.</p>
          </Carousel.Caption>
        </Carousel.Item>
        <Carousel.Item>
          <img
            className="d-block w-100"
            src={Img3}
            alt="Third slide"
            style={{height: "100%",
                maxHeight: "700px"}}
          />
  
          <Carousel.Caption style={{backgroundColor: "#242424", opacity: "80%"}}>
            <h3>Find Documentaries</h3>
            <p>
              Enhance your worldview by watching documentaries.
            </p>
          </Carousel.Caption>
        </Carousel.Item>
        <Carousel.Item>
          <img
            className="d-block w-100"
            src={Img4}
            alt="Fourth slide"
            style={{height: "100%",
                maxHeight: "700px"}}
          />
  
          <Carousel.Caption style={{backgroundColor: "#242424", opacity: "80%"}}>
            <h3>Don't know what to pick?</h3>
            <p>
              We also have curated Indonesian movies to suit your liking!
            </p>
          </Carousel.Caption>
        </Carousel.Item>
      </Carousel>
    );
}
