import "./App.sass";
import {useState, useContext} from 'react';
import { BrowserRouter, Link, Routes, Route } from "react-router-dom";
import Home from "./Components/Home";
import Profile from "./Components/Profile";
import GamePage from "./Pages/Game/GamePage";
import PrivateRoute from "./Components/PrivateRoute";
import MovieRec from "./Components/MovieRec";
import AppContext from "./AppContext";
import './App.css';
import Logo from "./Elements/Logo";
function App() {
  const {handleLogout} = useContext(AppContext);
 
  return (
    <BrowserRouter>
      <div className="App">
        <div className="NavBar"><Logo type='horisontal'/> <span className="navLinks mx-5 mt-2">
          <Link to="/"><p className="hoverLine mx-3 fs-6 mt-5 badge badge-secondary">Home</p></Link>
          <Link to="/game"><p className="hoverLine mx-3 fs-6 mt-5 badge badge-secondary">Rate Movies</p></Link>
          <Link to="/movieRec"><p className="hoverLine mx-3 fs-6 mt-5 badge badge-secondary">Recommendations</p></Link>
          <Link to="/profile"><p className="hoverLine mx-3 fs-6 mt-5 badge badge-secondary">Profile</p></Link>
          <span className="hoverLine mx-3 fs-6 mt-5 badge badge-secondary text-warning" onClick={handleLogout}>Logout</span>
        </span></div>
       
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
