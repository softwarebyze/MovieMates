import "./App.sass";
import { BrowserRouter, Routes, Route } from "react-router-dom";
import Home from "./Components/Home";
import Profile from "./Components/Profile";
import GamePage from "./Pages/Game/GamePage";
import PrivateRoute from "./Components/PrivateRoute";
import MovieRec from "./Components/MovieRec";
import "./App.css";
import FilmDetailPage from "./Pages/FilmDetailPage";

function App() {
  return (
    <BrowserRouter>
      <div className="App">
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
          <Route path="/film/:id" element={<PrivateRoute><FilmDetailPage /></PrivateRoute>} />
        </Routes>
      </div>
    </BrowserRouter>
  );
}

export default App;
