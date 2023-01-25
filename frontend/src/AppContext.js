import { doc, setDoc } from "firebase/firestore";
import { createContext, useState } from "react";

import { auth } from "./firebase";
import { db } from "./firebase";

const AppContext = createContext();


export function AppProvider({children}){
    const [currentUser, setCurrentUser] = useState('false')
    const handleLogout = async () => {
        await auth.signOut();
        console.log('user logged out');
        localStorage.removeItem('userId')
        localStorage.removeItem('userPhoto')
        localStorage.removeItem('userName')
        setCurrentUser(false)}
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
    <AppContext.Provider value={{currentUser, handleLogout, rateMovie }}>
      {children}
    </AppContext.Provider>
  );
}

export default AppContext;
