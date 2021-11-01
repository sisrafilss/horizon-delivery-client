import React from "react";
import { Link } from "react-router-dom";
import pageNotFound from "../../images/404.png";

const NotFoundPage = () => {
  return (
    <div className="login-form-wrapper">
      <div className="container">
        <div className="w-75 mx-auto">
          <img src={pageNotFound} className="img-fluid" alt="" />
          <div className="">
            <Link className="btn btn-info btn-lg d-block" to="/home">
              Go to Homepage
            </Link>
          </div>
        </div>
      </div>
    </div>
  );
};

export default NotFoundPage;
