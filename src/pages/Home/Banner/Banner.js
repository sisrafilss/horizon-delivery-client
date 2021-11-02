import React from "react";
import Carousel from "react-bootstrap/Carousel";
import "./Banner.css";
import banner1 from "../../../images/banner/banner1.jpg";
import banner2 from "../../../images/banner/banner2.jpg";
import banner3 from "../../../images/banner/banner3.jpg";
import { Link } from "react-router-dom";

const Banner = () => {
  return (
    // React Bootstrap Simple Carousel
    <Carousel>
      <Carousel.Item>
        <img className="d-block w-100" src={banner1} alt="First slide" />
        <Carousel.Caption className="slide-caption">
          <h1 className="slide-title p-3 d-inline-block fw-bold display-2 rounded mb-0">
            Global Shipping through Asia-Pas, Any Beyond
          </h1>
          <br />
          <p className="slide-title-2 p-2 my-0 d-inline-block rounded">
            Ensure fast and secure delivery Service
          </p>
          <br />
          <Link to="#" className="btn btn-info mt-0">
            View Services &nbsp; <i className="fas fa-plus"></i>
          </Link>
        </Carousel.Caption>
      </Carousel.Item>
      <Carousel.Item>
        <img className="d-block w-100" src={banner2} alt="Second slide" />

        <Carousel.Caption className="slide-caption">
          <h1 className="slide-title p-3 d-inline-block fw-bold display-2 rounded mb-0">
            In Person Home Delivery Service
          </h1>
          <br />
          <p className="slide-title-2 p-2 my-0 d-inline-block rounded">
            Product will be handed over to the customer’s hand.
          </p>
          <br />
          <Link to="#" className="btn btn-info mt-0">
            View Services &nbsp; <i className="fas fa-plus"></i>
          </Link>
        </Carousel.Caption>
      </Carousel.Item>
      <Carousel.Item>
        <img className="d-block w-100" src={banner3} alt="Third slide" />

        <Carousel.Caption className="slide-caption">
          <h1 className="slide-title p-3 d-inline-block fw-bold display-2 rounded mb-0">
            Ensure secure and fast Supply
          </h1>
          <br />
          <p className="slide-title-2 p-2 my-0 d-inline-block rounded">
            Security and Customer satisfaction are our hightest priority.
          </p>
          <br />
          <Link to="#" className="btn btn-info mt-0">
            View Services &nbsp; <i className="fas fa-plus"></i>
          </Link>
        </Carousel.Caption>
      </Carousel.Item>
    </Carousel>
  );
};

export default Banner;
