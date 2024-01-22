import './App.css';
import React from 'react';


//ROUTES
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom'
import Home from "./pages/Home/index.js";
import SignUp from "./pages/SignUp/index.js";
import Profil from "./pages/Profil/index.js";

function App() {
  return (
  <div className='App'>
    <Router>
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/signUp" element={<SignUp />} />
        <Route path="/Profil/:id" element={<Profil />} />
      </Routes>
    </Router>
  </div>
  );
}

export default App;
