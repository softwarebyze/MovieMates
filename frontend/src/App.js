import "./App.sass";
import { BrowserRouter, Routes, Route } from "react-router-dom";
import Home from "./Components/Home";
import Profile from "./Components/Profile";
import GamePage from "./Pages/Game/GamePage";
import PrivateRoute from "./Components/PrivateRoute";
import MovieRec from "./Components/MovieRec";
import "./App.css";
import FilmDetailPage from "./Pages/FilmDetailPage";
import { useEffect } from "react";

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
        <Routes>
          <Route path="/" element={<Home />} />
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
