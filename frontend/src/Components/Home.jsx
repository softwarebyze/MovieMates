/* eslint-disable jsx-a11y/alt-text */
import React, { useEffect, useState } from "react";
import Auth from "./auth/Auth";
import Footer from "./Footer";
import "./Home.sass";

const Home = () => {
  const [isAuth, setIsAuth] = useState(false);
  const userName = JSON.parse(localStorage.getItem("userName"));
  const userPhoto = JSON.parse(localStorage.getItem("userPhoto"));
  useEffect(() => {
    const userId = localStorage.getItem("userId");

    if (userId) {
      setIsAuth(true);
    } else {
      setIsAuth(false);
    }
  }, []);

  return (
    <>
      {!isAuth ? (
        <Auth />
      ) : (
        <>
          <main className="main-home-container">
            <div className="home-container">
              <div className="home-avatar-container">
                <img className="home-avatar" src={userPhoto} />
              </div>
              <h1 className="home-title">Welcome back {userName}</h1>
              <p className="home-text">
                Don't you hate it when you waste hours looking for the perfect
                movie? <br/>
                Well worry not, with a few simple clicks MovieMates will figure
                out the movies that best suit you. 
              </p>
              <p className="home-text">
                
              </p>
              <p className="home-text">
                So what are you waiting for? <br/>
                Sit back, relax, grab your mate and let's watch a movie!
              </p>
            </div>
          </main>
          <Footer />
        </>
      )}
    </>
  );
};

export default Home;
