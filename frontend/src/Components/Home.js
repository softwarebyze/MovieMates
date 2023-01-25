import React, { useEffect } from "react";
import Auth from "./auth/Auth";
import { useState } from "react";

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

  return <div>{isAuth ? <div>You are login</div> : <Auth />}</div>;
};

export default Home;
