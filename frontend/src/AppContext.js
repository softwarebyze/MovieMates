import { createContext, useState } from "react";

const AppContext = createContext();


export function AppProvider({children}){
    const [currentUser, setCurrentUser] = useState('false')
    const handleLogout = (e)=>{
        //signout from db
        console.log('test')
         setCurrentUser(false)
      }
    
    return(<AppContext.Provider value={{currentUser, handleLogout}}>{children}</AppContext.Provider>);}




export default AppContext;