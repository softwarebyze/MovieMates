import "./App.sass";
import {BrowserRouter, Link, Routes, Route} from 'react-router-dom'
import Home from "./components/Home";
import Profile from "./components/Profile";
import GamePage from "./Pages/Game/GamePage";

function App() {
  return (<BrowserRouter>
    <div className="App">
      <Link to='/'>Home</Link>
      <Link to='/profile'>Profile</Link>
      <Routes><Route path="/" element={<Home/>} />
      <Route path="/profile" element={<Profile/>}/>
      <Route path="/game" element={<GamePage />}/></Routes>
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
