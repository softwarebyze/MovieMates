import { doc, getDocs, setDoc } from "firebase/firestore";
import { createContext, useState } from "react";

import { auth, db } from "./firebase";

const AppContext = createContext();

export function AppProvider({ children }) {
  const [currentUser, setCurrentUser] = useState("false");
  const [friendsList, setFriendsList] = useState([]);
  const [ratedFilmsForDS, setRatedFilmsForDS] = useState([]);
  const [isAuth, setIsAuth] = useState(false);
  
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
    console.log(userId, ratingObject);

    try {
      // update firestore with new rating
      await setDoc(doc(db, "movielensFull", userId), ratingObject, {
        merge: true,
      });
      // await updateDoc(doc(db, "movielensFull", userId), ratingObject);
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
    })
    .then(res => res.json())
    .then(res => {
      const friendsArray = [];
      for(const [key, value] of Object.entries(res)) {
        friendsArray.push({ userId: key, matchPercentage: value })
      }
      setFriendsList(friendsArray.sort((a,b) =>  b.matchPercentage - a.matchPercentage ));
    })
    .catch((err) => console.log(err));
  };

  const getWatchList = async (userId) => {
    try {
      console.log('userif in watchgetwatclst', userId)
      const wl = await getDocs(doc(db, "movielensFull", userId));
      const wlIds = wl.map(o=>o.id)
      console.log(wl);
      console.log('wlIds', wlIds);
      return wlIds;
    } catch (e) {
      console.error("Error gett document: ", e);
    }
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
        isAuth,
        setIsAuth,
      }}
    >
      {children}
    </AppContext.Provider>
  );
}

export default AppContext;
