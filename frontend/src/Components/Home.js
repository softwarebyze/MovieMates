import React, { useEffect } from "react";
import Auth from "./auth/Auth";
import { useState } from "react";
import Logo from "../Elements/Logo";
import '../App.css'

const Home = () => {
  const [isAuth, setIsAuth] = useState(false);

  useEffect(() => {
    const userId = localStorage.getItem("userId");
    if (userId) {
      setIsAuth(true);
    } else {
      setIsAuth(false);
    }
  }, []);

  return <div>{!isAuth ?  <Auth />: <div className="loggedHome"><Logo type='vertical' /><div className="appDesc"><p>Welcome to MovieMates!</p> Don't you hate it when you waste hours looking for the perfect movie? Well worry not, with a few simple clicks MovieMates will figure out the movies that best suit you. So what are you waiting for? Sit back, relax, grab your mate and let's watch a movie! </div></div> }</div>;
};

export default Home;
