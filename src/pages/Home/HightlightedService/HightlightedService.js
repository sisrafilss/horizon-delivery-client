import React, { useState, useEffect } from "react";
import { Container, Row } from "react-bootstrap";
import { Link } from "react-router-dom";
import axios from "axios";
import SectionTop from "../../Shared/SectionTop/SectionTop";
import SingleService from "../../Shared/SingleService/SingleService";
import "./HighlightedService.css";

const HightlightedService = () => {
  const [services, setServices] = useState([]);

  useEffect(() => {
    axios
      .get("https://immense-journey-09745.herokuapp.com/highlighted-services")
      .then((res) => setServices(res.data));
  }, []);

  const sectionTop = {
    title: "Services We offer",
    subtitle: "Our medical specialists care about you & your family’s health",
  };

  return (
    <div className="my-5">
      <SectionTop sectionTop={sectionTop} />
      <Container>
        <Row xs={1} md={3} className="g-4">
          {services.map((service) => (
            <SingleService key={service._id} service={service} />
          ))}
        </Row>
        <div className="mt-5 d-grid">
          <Link className="btn btn-load-more" to="/services">
            All Services
          </Link>
        </div>
      </Container>
    </div>
  );
};

export default HightlightedService;
