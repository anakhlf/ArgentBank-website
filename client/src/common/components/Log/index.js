import React from 'react';
import { Link, useNavigate } from 'react-router-dom';
import { useSelector, useDispatch } from 'react-redux';
import "./style.css";

function Log() {
    const isAuthenticated = useSelector((state) => state.auth.isLoggedIn);
    const userName = useSelector((state) => state.auth.user?.name); 
    const dispatch = useDispatch();

    const handleLogout = () => {
        dispatch({ type: 'LOGOUT' });
        localStorage.removeItem('token'); // Supprimez le token du localStorage
    };

    return (
        <>
            {isAuthenticated ? (
                <div id='div_log'>
                    <Link to="/Profil" className="main-nav-item">
                        <i className="fa fa-user-circle"></i>
                        {userName}
                    </Link>
                    <Link to="/" className="main-nav-item" onClick={handleLogout}>
                        <i className="fa fa-sign-out"></i>
                        Sign Out
                    </Link>
                </div>
            ) : (
                <Link to="/SignUp" className="main-nav-item">
                    <i className="fa fa-user-circle"></i>
                    <p>Sign In</p>
                </Link>
            )}
        </>
    );
}

export default Log;