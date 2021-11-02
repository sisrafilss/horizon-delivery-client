import React from "react";
import "./GreetingUser.css";
import icon1 from "../../../images/icon/1.png";
import icon2 from "../../../images/icon/2.png";
import icon3 from "../../../images/icon/3.png";
import SectionTop from "../../Shared/SectionTop/SectionTop";

const GreetingUser = () => {
  // Section Top props object
  const sectionTop = {
    title: "We Are Shipping Solution",
    subtitle:
      "Curabitur non eleifend lacus. Proin dictum sem ut purus luctus posuere id vel velit. Fusce non augue sit amet tellus finibus aliquam.",
  };
  return (
    // Greeting Users Section
    <div className="greeting-container">
      <div>
        <div className="container">
          <SectionTop sectionTop={sectionTop} />
        </div>
      </div>

      <div className="container">
        <div className="row">
          <div className="col-md-4 col-sm-12 single-item">
            <div className="d-flex justify-content-center align-items-center flex-column">
              <div className="mb-4">
                <img
                  src={icon1}
                  className="img-fluid"
                  style={{ height: "80px", width: "80px" }}
                  alt=""
                />
              </div>
              <div className="d-flex justify-content-center align-items-center flex-column">
                <h3 className="text-dark">Fastest Delivery</h3>
                <p className="card-description px-3">
                  SThe healthcare workforce comprises a wide variety of
                  professions and occupations who provide some type of
                  healthcare service, including such direct care practitioners
                  as...
                </p>
                <button className="btn btn-info">Learn More</button>
              </div>
            </div>
          </div>

          <div className="col-md-4 col-sm-12 single-item">
            <div className="d-flex justify-content-center align-items-center flex-column">
              <div className="mb-4">
                <img
                  src={icon2}
                  className="img-fluid"
                  style={{ height: "80px", width: "80px" }}
                  alt=""
                />{" "}
              </div>
              <div className="d-flex justify-content-center align-items-center flex-column">
                <h3 className="text-dark">Doorstep Service</h3>
                <p className="card-description px-3">
                  Clinical excellence must be the priority for any health care
                  system. ... According to the federal Agency for Healthcare
                  Research and Quality (AHRQ), exceptional healthcare is...{" "}
                </p>
                <button className="btn btn-info">Learn More</button>
              </div>
            </div>
          </div>

          <div className="col-md-4 col-sm-12">
            <div className="d-flex justify-content-center align-items-center flex-column">
              <div className="mb-4">
                <img
                  src={icon3}
                  className="img-fluid"
                  style={{ height: "80px", width: "80px" }}
                  alt=""
                />{" "}
              </div>
              <div className="d-flex justify-content-center align-items-center flex-column">
                <h3 className="text-dark">Secure Delivery</h3>
                <p className="card-description px-3">
                  Emerging technologies are technologies whose development,
                  practical applications, or both are still largely unrealized,
                  such that they...
                </p>
                <button className="btn btn-info">Learn More</button>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default GreetingUser;
