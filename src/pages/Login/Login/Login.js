import React from 'react';
import { useHistory, useLocation } from 'react-router';
import useAuth from '../../../hooks/useAuth';

const Login = () => {

    const { signInUsingGoogle, setError, setUser, setIsLoading } = useAuth();
    const location = useLocation();
    const history = useHistory();
    const redirect_uri = location?.state?.from || "/home";

    const handleGoogleSignIn = () => {
        signInUsingGoogle()
        .then((result) => {
            setUser(result.user);
            setError("");
            history.push(redirect_uri);
          })
          .catch((error) => {
            setError(error.message);
          })
          .finally( () => {
              setIsLoading(false);
          });
    }

    return (
        <div>
            <h2>Please Login</h2>
            <button onClick={handleGoogleSignIn}>Google Login</button>
        </div>
    );
};

export default Login;