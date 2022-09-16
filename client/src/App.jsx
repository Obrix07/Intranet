import { useState } from 'react'
import reactLogo from './assets/react.svg'
import Login from './Views/Login'
import { BrowserRouter as Router, Route, Routes } from 'react-router-dom';
import Listing from './Views/Listing';
import Random from './Views/Random';
import UserModif from './Views/Modif';

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
        <Route exact path="/modif" element={<UserModif/>} />
      </Routes>
    </Router>
  )
}

export default App
