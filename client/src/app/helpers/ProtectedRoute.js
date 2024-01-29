import React from 'react';
import { Navigate } from 'react-router-dom';
import { useSelector } from 'react-redux';

const ProtectedRoute = ({ children }) => {
  const isAuthenticated = useSelector((state) => state.auth.isLoggedIn); // Assurez-vous que le chemin est correct

  if (!isAuthenticated) {
    // Redirigez vers la page de connexion si l'utilisateur n'est pas authentifié
    return <Navigate to="/signUp" />;
  }

  return children;
};

export default ProtectedRoute;