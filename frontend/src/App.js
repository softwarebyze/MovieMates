import "./App.css";
import { Route, Routes, Link } from "react-router-dom";
import PrivateRoute from "./components/PrivateRoute";
import GamePage from "./Pages/Game/GamePage";

function App() {
  return (
    <div className="App">
      <div className="NavBar">
        <Link to="/">Home</Link>
        <Link to="/game">Rate Movies</Link>
        <Link to="/profile">Profile</Link>
        <Link to="/movieRec">Recommendations</Link>
        <p>Logout</p>
      </div>
      <Routes>
        <Route
          path="/"
          element={
            <PrivateRoute>
              <Home />
            </PrivateRoute>
          }
        ></Route>
        <Route
          path="/game"
          element={
            <PrivateRoute>
              <GamePage />
            </PrivateRoute>
          }
        ></Route>
        <Route
          path="/profile"
          element={
            <PrivateRoute>
              <Profile />
            </PrivateRoute>
          }
        ></Route>
        <Route
          path="/movieRec"
          element={
            <PrivateRoute>
              <MovieRec />
            </PrivateRoute>
          }
        ></Route>
      </Routes>
    </div>
  );
}

export default App;
