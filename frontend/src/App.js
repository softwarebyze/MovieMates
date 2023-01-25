import "./App.sass";
import {useState, useContext} from 'react';
import { BrowserRouter, Link, Routes, Route } from "react-router-dom";
import Home from "./Components/Home";
import Profile from "./Components/Profile";
import GamePage from "./Pages/Game/GamePage";
import PrivateRoute from "./Components/PrivateRoute";
import MovieRec from "./Components/MovieRec";
import AppContext from "./AppContext";
import { AppProvider } from "./AppContext";

function App() {
  const {handleLogout} = useContext(AppContext);
 
  return (
    <BrowserRouter>
      <div className="App">
        <div className="NavBar">
          <Link to="/">Home</Link>
          <Link to="/game">Rate Movies</Link>
          <Link to="/movieRec">Recommendations</Link>
          <Link to="/profile">Profile</Link>
          <button onClick={handleLogout}>Logout</button>
        </div>
        <Routes>
          <Route path="/" element={<Home />} />
          <Route
            path="/profile"
            element={
              <PrivateRoute>
                <Profile />
              </PrivateRoute>
            }
          />
          <Route
            path="/game"
            element={
              <PrivateRoute>
                <GamePage />
              </PrivateRoute>
            }
          />
          <Route
            path="/movieRec"
            element={
              <PrivateRoute>
                <MovieRec />
              </PrivateRoute>
            }
          />
        </Routes>
      </div>
    </BrowserRouter>
  );
}

export default App;
