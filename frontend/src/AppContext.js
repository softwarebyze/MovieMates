import { doc, setDoc } from "firebase/firestore";
import { createContext, useState } from "react";
import { db } from "./firebase";

const AppContext = createContext();

export function AppProvider({ children }) {
  const [currentUser, setCurrentUser] = useState("false");
  const handleLogout = (e) => {
    //signout from db
    console.log("test");
    setCurrentUser(false);
  };

  const rateMovie = async (userId, movieId, rating) => {
    const ratingObject = {};
    ratingObject[movieId] = rating;
    // send {movieId: movieId, rating: rating} to data scientists
    try {
      // update firestore with new rating
      await setDoc(doc(db, "users", userId), ratingObject);
    } catch (e) {
      console.error("Error adding document: ", e);
    }
  };

  return (
    <AppContext.Provider value={{ currentUser, handleLogout, rateMovie }}>
      {children}
    </AppContext.Provider>
  );
}

export default AppContext;
