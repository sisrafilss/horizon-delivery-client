import axios from 'axios';
import React from 'react';

const SingleService = ({ service }) => {

    const { _id, name, description } = service;

    const handleDelete = (id) => {
        axios.delete(`https://immense-journey-09745.herokuapp.com/services/${id}`)
        .then(res => {
            if(res.data.deletedCount > 0) {
                alert('Deleted Successfully');
            }
        } );

        
    }   

    return (
        <div>
            <h3> {name} </h3> <button onClick={() => handleDelete(_id)}>Delete</button>
            <p> {description} </p>
            <br />
            <hr />
        </div>
    );
};

export default SingleService;