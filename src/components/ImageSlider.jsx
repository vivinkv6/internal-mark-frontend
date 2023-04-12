import React from "react";
import Carousel from "react-bootstrap/Carousel";
import logo from "../assets/scam.png";
import '../App.css';
function ImageSlider() {
  return (
    <Carousel fade>
      <Carousel.Item>
        <center>
        <img
          className="Carousel d-block"
          style={{height:'400px',width:'370px'}}
          src={logo}
          alt="First slide"
        />
        </center>
        <Carousel.Caption>
          <h3>First slide label</h3>
          <p>Nulla vitae elit libero, a pharetra augue mollis interdum.</p>
        </Carousel.Caption>
      </Carousel.Item>
      <Carousel.Item>
      <center>
        <img
          className="Carousel d-block"
          style={{height:'400px',width:'400px'}}
          src={logo}
          alt="First slide"
        />
        </center>

        <Carousel.Caption>
          <h3>Second slide label</h3>
          <p>Lorem ipsum dolor sit amet, consectetur adipiscing elit.</p>
        </Carousel.Caption>
      </Carousel.Item>
      <Carousel.Item>
      <center>
        <img
          className="Carousel d-block"
          style={{height:'400px',width:'400px'}}
          src={logo}
          alt="First slide"
        />
        </center>
        <Carousel.Caption>
          <h3>Third slide label</h3>
          <p>
            Praesent commodo cursus magna, vel scelerisque nisl consectetur.
          </p>
        </Carousel.Caption>
      </Carousel.Item>
    </Carousel>
  );
}

export default ImageSlider;
