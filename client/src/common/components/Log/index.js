import React from 'react';
import { Link } from 'react-router-dom';
import "./style.css"

function Log() {
    return (
        <Link to="/SignUp" className="main-nav-item">
            <i className="fa fa-user-circle"></i>
            <p> Sign In</p>
        </Link>
    )
}

export default Log;