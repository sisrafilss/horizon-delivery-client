import React from 'react';
import useAuth from '../../../hooks/useAuth';

const Login = () => {

    const { signInUsingGoogle } = useAuth();

    return (
        <div>
            <h2>Please Login</h2>
            <button onClick={signInUsingGoogle}>Google Login</button>
        </div>
    );
};

export default Login;