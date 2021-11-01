import React from "react";
import { useHistory, useLocation } from "react-router";
import useAuth from "../../../hooks/useAuth";
import PageTopTitle from "../../Shared/PageTopTitle/PageTopTitle";
import "./Login.css";

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
      .finally(() => {
        setIsLoading(false);
      });
  };

  const pageTopTitle = {
    title: "Please Login",
    subtitle: "Login to access all of the features",
  };

  return (
    <div>
      <div>
        <PageTopTitle pageTopTitle={pageTopTitle} />
      </div>
      <div className="login-form-wrapper">
        <div className="login-container">
          <h2>Login</h2>
          <button onClick={handleGoogleSignIn} className="btn btn-info btn-lg">
            Google Login
          </button>
        </div>
      </div>
    </div>
  );
};

export default Login;
