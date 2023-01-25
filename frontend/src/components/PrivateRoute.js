import React, { useContext } from "react";
import { Navigate } from "react-router-dom";
import AppContext from "../AppContext";

const PrivateRoute = ({ children }) => {
  const { currentUser } = useContext(AppContext); // when user is logged in have the state be changed
  return currentUser ? children : <Navigate to="/login"></Navigate>;
};

export default PrivateRoute;
