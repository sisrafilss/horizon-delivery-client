import React from "react";
import "./AboutCompanyInShort.css";

const AboutCompanyInShort = () => {
  return (
    <div>
      <div>
        <h4 className="my-4">About Horizon Delivery</h4>
        <p className="pe-4">
          Are you looking for a secure and trusted delivery service provider for
          Your E-Commerce Business? Horizon Delivery Network provides you with a
          Global shipping solution. Choose your require service from our various
          services list.
        </p>
        <div className="pe-4">
          <p className="my-0 pb-1">
            <i className="fas fa-map-marker-alt footer-icon"></i> &nbsp; Plot .
            38 St. 39 UpHill Town, Newyork, USA
          </p>
          <p className="my-0 pb-1">
            <i className="fas fa-phone-volume footer-icon"></i> &nbsp; +522 234
            56789 / +522 234 56780
          </p>
          <p className="my-0 pb-1">
            <a className="copany-contact" href="#">
              <i className="fas fa-envelope-open footer-icon"></i> &nbsp;
              info@horizon-delivery.org
            </a>
          </p>
          <p className="my-0 pb-1">
            <a className="copany-contact" href="#">
              <i className="fas fa-globe footer-icon"></i> &nbsp;
              www.horizon-delivery.org
            </a>
          </p>
        </div>
      </div>
    </div>
  );
};

export default AboutCompanyInShort;
