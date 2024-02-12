import './App.css';
import React, { useEffect } from 'react';
import { useDispatch } from 'react-redux';
import { fetchUserData } from './actions/userAction.js'; 


//ROUTES
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import Home from "../pages/Home/index.js";
import SignUp from "../pages/SignUp/index.js";
import Profil from "../pages/Profil/index.js";
import ProtectedRoute from './helpers/ProtectedRoute.js';
import Layout from "../common/containers/Layout/index.js";

function App() {
  const dispatch = useDispatch();

  useEffect(() => {
    const token = localStorage.getItem('token');
    if (token) {
      // Dispatch une action pour valider le token et récupérer les données utilisateur
      dispatch(fetchUserData(token));
    }
  }, [dispatch]);
  return (
    <div className='App'>
        <Router>
          <Routes>
          <Route path="/" element={<Layout><Home /></Layout>} />
          <Route path="/signUp" element={<Layout><SignUp /></Layout>} />
          <Route path="/Profil" element={<ProtectedRoute><Layout><Profil /></Layout></ProtectedRoute>} />
        </Routes>
        </Router>
      </div>
  );
}

export default App;
