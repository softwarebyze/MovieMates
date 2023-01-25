import React, { useState } from "react";
import { useGoogleLogin } from "react-google-login";
import "./Auth.css";
// import { useNavigate } from "react-router-dom";
import Email from "./Email";

const Auth = () => {
  const [isSignedIn, setIsSignedIn] = useState(false);
//   const navigate = useNavigate()

  const onGoogleSuccess = (response) => {
    setIsSignedIn(true);
    console.log(response);
  };

  const onGoogleFailure = (response) => {
    console.log(response);
  };

  const { signIn } = useGoogleLogin({
    clientId: "YOUR_CLIENT_ID",
    onSuccess: onGoogleSuccess,
    onFailure: onGoogleFailure,
  });

  const handleSignEmail = () => {
    console.log("Sign in with E-mail");
    // navigate("/email");
  }

  const test = () => {
    console.log("test");
  }

  return (
    <div>
      <div className="contain-btn-auth">
        <h1>Sign Up Now</h1>
        <button onClick={handleSignEmail}
        >
          Sign up with E-mail
        </button>
        <button onClick={signIn} className="mb-3">
          Sign up with Google
        </button>
        <h5>Already in the club? Well <a href="#" onClick={test}>sign in</a> now!</h5>
      </div>
    </div>
  );
};

export default Auth;