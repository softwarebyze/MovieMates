import React, { useState } from "react";
import "./Auth.sass";
// import { useNavigate } from "react-router-dom";
import Email from "./Email";
import YellowButton from "../../Elements/YellowButton";
import Logo from "../../Elements/Logo";
import { signInWithPopup, GoogleAuthProvider } from "firebase/auth";
import { auth } from "../../firebase";
import { useNavigate } from "react-router-dom";

const Auth = () => {
  const [isSignedIn, setIsSignedIn] = useState(false);
  const [userId, setUserId] = useState("");
    const navigate = useNavigate()

  const handleSignEmail = () => {
    console.log("Sign in with E-mail");
    // navigate("/email");
  };

  const test = () => {
    console.log("test");
  };

  const handleLogout = async () => {
    await auth.signOut();
    console.log("user logged out");
    localStorage.removeItem("userId");
    localStorage.removeItem("userNames");
    localStorage.removeItem("userPhotos");
  };

  const signInWithGoogle = async () => {
    const provider = new GoogleAuthProvider();
    signInWithPopup(auth, provider)
      .then((result) => {
        // This gives you a Google Access Token. You can use it to access the Google API.
        const credential = GoogleAuthProvider.credentialFromResult(result);
        const token = credential.accessToken;
        // The signed-in user info.
        const user = result.user;
        const userId = user.uid;
        const userNames = user.displayName;
        const userPhotos = user.photoURL;
        localStorage.setItem("userId", JSON.stringify(userId));
        localStorage.setItem("userName", JSON.stringify(userNames));
        localStorage.setItem("userPhoto", JSON.stringify(userPhotos));
        console.log(user);
        console.log(user.uid);
        console.log(user.displayName);
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
      }).finally(() => {
        navigate("/game")
        });
  };

  return (
    <main className="main-auth">
      <div className="auth-logo-container">
        <Logo type="vertical"/>
      </div>
      <div className="auth-container">
        <h1 className="title-auth">Sign Up Now</h1>
        <div className="button-container">
          <YellowButton
            type="filled"
            text="Sign up with E-mail"
            onClickHandler={handleSignEmail}
          />
          <YellowButton
            type="outline"
            text="Sign up with Google"
            onClickHandler={signInWithGoogle}
          />
        </div>
        <span className="auth-text">
          Already in the club? Well{" "}
          <a href="" onClick={test} className="auth-link">
            sign in 
          </a> 
          {" "} now!
        </span>
      </div>
    </main>
  );
};

export default Auth;
