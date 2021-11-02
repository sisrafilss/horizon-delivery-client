import React from "react";
import { Spinner } from "react-bootstrap";

const LoadingSpinner = () => {
  return (
    <div>
      <div style={{position: 'absolute', top: '50%', left: '50%'}}>
        <Spinner animation="border" variant="info" />
      </div>
    </div>
  );
};

export default LoadingSpinner;
