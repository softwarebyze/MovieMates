import React, { useState } from "react";
import "./Auth.css";
// import { useNavigate } from "react-router-dom";
import Email from "./Email";
import { signInWithPopup, GoogleAuthProvider } from "firebase/auth";
import { auth } from "../../firebase";

const Auth = () => {
  const [isSignedIn, setIsSignedIn] = useState(false);
  const [userId, setUserId] = useState("");
  //   const navigate = useNavigate()

  const handleSignEmail = () => {
    console.log("Sign in with E-mail");
    // navigate("/email");
  };

  const test = () => {
    console.log("test");
  };

  const handleLogout = async () => {
    await auth.signOut();
    console.log('user logged out');
    localStorage.removeItem('userId')
}

  const signInWithGoogle = async () => {
    const provider = new GoogleAuthProvider();
    signInWithPopup(auth, provider)
      .then((result) => {
        // This gives you a Google Access Token. You can use it to access the Google API.
        const credential = GoogleAuthProvider.credentialFromResult(result);
        const token = credential.accessToken;
        // The signed-in user info.
        const user = result.user;
        console.log(user)
        console.log(user.uid)
        const userId = user.uid;
        // ...
        localStorage.setItem('userId', JSON.stringify(userId))
      })
      .catch((error) => {
        // Handle Errors here.
        const errorCode = error.code;
        const errorMessage = error.message;
        // The email of the user's account used.
        const email = error.customData.email;
        // The AuthCredential type that was used.
        const credential = GoogleAuthProvider.credentialFromError(error);
        // ...
      });
  };

  return (
    <div>
      <div className="contain-btn-auth">
        <h1>Sign Up Now</h1>
        <button onClick={handleSignEmail}>Sign up with E-mail</button>
        <button onClick={signInWithGoogle} className="mb-3">
          Sign up with Google
        </button>
        <h5>
          Already in the club? Well{" "}
          <a href="" onClick={test}>
            sign in
          </a>
          now!
        </h5>
        <button onClick={handleLogout}>Logout</button>

      </div>
    </div>
  );
};

export default Auth;
