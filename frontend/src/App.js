import './App.css';
import { Route, Routes, Link } from 'react-router-dom';

function App() {
  return (
    <div className="App">
      <div className='NavBar'><Link to='/'>Home</Link></div>
      <Routes>
        <Route
        path='/'
        element={<Home />}></Route>
      </Routes>
    </div>
  );
}

export default App;
