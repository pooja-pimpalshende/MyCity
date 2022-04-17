import React, { Component } from "react";
import { Carousel } from "react-bootstrap";

import pic1 from "../../assets/images/pic1.jpg";
import pic2 from "../../assets/images/pic2.jpg";
import pic3 from "../../assets/images/pic3.jpg";
import coaching3 from "../../assets/images/coaching3.jpg";


export default class Home extends Component {
  render() {
    return (
      <div>
        <Carousel>

          <Carousel.Item>
            <img id="first" className="d-block w-100 h-100" src={pic1} alt="First slide" />
            <Carousel.Caption>
              <h3>My-City</h3>
              <p>We are here to help you.</p>
            </Carousel.Caption>
          </Carousel.Item>

          <Carousel.Item>
            <img id="first" className="d-block w-100 h-100" src={coaching3} alt="First slide" />
            <Carousel.Caption>
              <h3>My-City</h3>
              <p>We are here to help you.</p>
            </Carousel.Caption>
          </Carousel.Item>

          <Carousel.Item>
            <img id="second" className="d-block w-100 h-100" src={pic2} alt="Second slide" />
            <Carousel.Caption>
              <h3>My-City</h3>
              <p>We are here to help you.</p>
            </Carousel.Caption>
          </Carousel.Item>

          <Carousel.Item>
            <img id="third" className="d-block w-100 h-100" src={pic3} alt="Third slide" />
            <Carousel.Caption>
              <h3>My-City</h3>
              <p>We are here to help you.</p>
            </Carousel.Caption>
          </Carousel.Item>
        </Carousel>
      </div>
    );
  }
}
