import React from 'react';
import { Link } from 'react-router-dom';

const NotFoundPage = () => {
    return (
        <div>
            <h1>404</h1>
            <h2>Page Not Found</h2>
            <Link className="btn btn-info" to="/home">
                Go To Homepage
            </Link>
        </div>
    );
};

export default NotFoundPage;