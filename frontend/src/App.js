import "./App.sass";
import {BrowserRouter, Link, Routes, Route} from 'react-router-dom'
import Home from "./Components/Home";
import Profile from "./Components/Profile";
import GamePage from "./Pages/Game/GamePage";
import PrivateRoute from "./Components/PrivateRoute";

function App() {
  return (<BrowserRouter>
    <div className="App">
      <div className="NavBar">
      <Link to='/'>Home</Link>
      <Link to='/profile'>Profile</Link>
      <Link to='game'>Rate Movies</Link>
      </div>
      <Routes><Route path="/" element={<Home/>} />
      <Route path="/profile" element={<PrivateRoute><Profile/></PrivateRoute>}/>
      <Route path="/game" element={<PrivateRoute><GamePage /></PrivateRoute>} /></Routes>
      {/* <div className="NavBar">
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
      </Routes> */}
    </div></BrowserRouter>
  );
}

export default App;
