import { useSelector } from 'react-redux';
import { Navigate } from 'react-router-dom';

const ProtectedRoute = ({ children }) => {
  const isLoading = useSelector((state) => state.auth.isLoading);
  const isAuthenticated = useSelector((state) => state.auth.isLoggedIn);
  const token = localStorage.getItem('token');
  if (token) {
    if (isLoading) { 
      return <div>Chargement...</div>; 
    }
  }
  // Redirige vers la page de connexion si non authentifié après le chargement
  return isAuthenticated ? children : <Navigate to="/SignUp" />;
};

export default ProtectedRoute;