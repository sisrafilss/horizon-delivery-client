import React from "react";
import "./HelpfulLinks.css";

const HelpfulLInks = () => {
  return (
    <div className="mt-4">
      <h5 className="pb-3">Helpful Links</h5>
      <div className="helpful-links">
        <li><a href="#">About Horizon</a></li>
        <li><a href="#">Our Store Location</a></li>
        <li><a href="#">Horizon Blog</a></li>
      </div>
    </div>
  );
};

export default HelpfulLInks;
