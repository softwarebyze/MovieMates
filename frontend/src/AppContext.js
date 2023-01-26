import { doc, setDoc } from "firebase/firestore";
import { createContext, useState } from "react";

import { auth, db } from "./firebase";

const AppContext = createContext();

export function AppProvider({ children }) {
  const [currentUser, setCurrentUser] = useState("false");
  const [friendsList, setFriendsList] = useState([]);
  const [ratedFilmsForDS, setRatedFilmsForDS] = useState([]);

  const handleLogout = async () => {
    await auth.signOut();
    console.log("user logged out");
    localStorage.removeItem("userId");
    localStorage.removeItem("userPhoto");
    localStorage.removeItem("userName");
    setCurrentUser(false);
  };

  const rateMovie = async (userId, movieId, rating) => {
    const ratingObject = {};
    ratingObject[movieId] = rating;

    try {
      // update firestore with new rating
      await setDoc(doc(db, "users", userId), ratingObject);
    } catch (e) {
      console.error("Error adding document: ", e);
    }
  };

  const submitRatings = async (ratings) => {
    // post {'movieid1': rating1, 'movieid2': rating2, 'movieid3': rating3} to data scientists at http://18.159.103.9:8080/mates
    fetch("http://18.159.103.9:8080/mates", {
      method: "POST",
      headers: { "Content-Type": "application/json" },
      body: JSON.stringify(ratings),
    }).catch((err) => console.log(err));
  };

  return (
    <AppContext.Provider
      value={{
        currentUser,
        handleLogout,
        rateMovie,
        friendsList,
        setFriendsList,
        ratedFilmsForDS,
        setRatedFilmsForDS,
        submitRatings,
      }}
    >
      {children}
    </AppContext.Provider>
  );
}

export default AppContext;
