import React from 'react';
import './SectionTop.css';

const SectionTop = ({ sectionTop }) => {
    return (
        <div>
            <div className="container-fluid mb-4 d-flex justify-content-center flex-column align-items-center">
            <h2 style={{fontWeight: '700', fontSize: '3rem'}}> {sectionTop?.title} </h2>
            <p className="lead"> { sectionTop?.subtitle} </p>
        </div>
        </div>
    );
};

export default SectionTop;