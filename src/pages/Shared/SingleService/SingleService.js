import React from 'react';
import { Card, Col } from 'react-bootstrap';
import { Link } from 'react-router-dom';
import './SingleService.css'

const SingleService = ({ service }) => {

    const { _id, title, img, description } = service;

    return (
        <Col className="">
            <Card className="shadow border-0 card">
                <Card.Img className="card-img" variant="top" src={img} />
                <Card.Body className="mt-4">
                    <Card.Title className="card-title"> {title} </Card.Title>
                    <Card.Text className="card-description">
                        {description.slice(0, 150) + ' ' } 
                        [...]
                    </Card.Text>
                    <Link to={`/placeOrder/${_id}`} className="btn read-mroe-btn fw-bold">Book Now</Link>
                </Card.Body>

            </Card>
        </Col>
    );
};

export default SingleService;