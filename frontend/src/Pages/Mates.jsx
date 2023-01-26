import React, { useContext, useEffect } from "react";
import AppContext from "../AppContext";
import SmallAvatar from "../Elements/SmallAvatar";
import Footer from "../Components/Footer";
import "./Mates.sass";

const Mates = () => {
  const { friendsList } = useContext(AppContext);

  useEffect(() => {
    console.log(friendsList)
  }, []);

  return (
    <>
      <main className="main-mates-container" >
        <h1 className="mates-title">My mates</h1>
        <ul className="mates-list" >
          {friendsList.map((obj) => {
            return <li key={obj.userId}>
              <SmallAvatar text={`${obj.matchPercentage.toFixed(2)} %`} id={obj.userId}/>
            </li>;
          })}
        </ul>
      </main>
      <Footer />
    </>
  );
};

export default Mates;
