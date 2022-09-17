import Login from './Views/Login'
import { BrowserRouter as Router, Route, Routes } from 'react-router-dom';
import Listing from './Views/Listing';
import Random from './Views/Random';

import './css/Listing.css'
import './css/Random.css'
import './css/Login.css'

function setToken(userToken) {
  localStorage.setItem("token", JSON.stringify(userToken));
}

function getToken() {
  const token = localStorage.getItem("token");
  return token;
}


function App() {

  const token = getToken();

  if(!token) {
    return <Login setToken={setToken} />
  }

  return (
    <Router>
      <Routes>
        <Route exact path="/" element={<Login/>} />
        <Route exact path="/listing" element={<Listing/>} />
        <Route exact path="/random" element={<Random/>} />
      </Routes>
    </Router>
  )
}

export default App
