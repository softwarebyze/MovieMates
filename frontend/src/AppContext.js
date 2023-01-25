import { createContext, useState } from "react";
import { auth } from "./firebase";

const AppContext = createContext();


export function AppProvider({children}){
    const [currentUser, setCurrentUser] = useState('false')
    const handleLogout = async () => {
        await auth.signOut();
        console.log('user logged out');
        localStorage.removeItem('userId')
        setCurrentUser(false)
    }
    
    const rateMovie = (userId, movieId, rating) => {
        // send {movieId: movieId, rating: rating} to data scientists
        // update firestore
    }
    
    return(<AppContext.Provider value={{currentUser, handleLogout}}>{children}</AppContext.Provider>);}




export default AppContext;