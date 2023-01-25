import { useEffect, useState } from "react";
import { BrowserRouter, Route, Routes } from "react-router-dom";
import "./App.css";
import "./App.sass";
import Home from "./Components/Home";
import MovieRec from "./Components/MovieRec";
import NavBar from "./Components/NavBar";
import PrivateRoute from "./Components/PrivateRoute.js";
import Profile from "./Components/Profile";
import FilmDetailPage from "./Pages/FilmDetailPage";
import GamePage from "./Pages/Game/GamePage";

function App() {
  const [isAuth, setIsAuth] = useState(false);

  useEffect(() => {
    const userId = localStorage.getItem("userId");
    if (userId) {
      setIsAuth(true);
    } else {
      setIsAuth(false);
    }
  }, []);
  console.log(isAuth);

  return (
    <BrowserRouter>
      <div className="App">
        <NavBar isAuth={isAuth} />
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
          <Route path="/film/:id" element={<FilmDetailPage />} />
          {isAuth ? (
            <>
              <Route path="/profile" element={<Profile />} />
              <Route path="/game" element={<GamePage />} />
              <Route path="/movieRec" element={<MovieRec />} />
              <Route path="/film/:id" element={<FilmDetailPage />} />
            </>
          ) : (
            <Route path="/" element={<Home />} />
          )}
        </Routes>
      </div>
    </BrowserRouter>
  );
}

export default App;
