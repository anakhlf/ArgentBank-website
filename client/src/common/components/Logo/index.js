import React from 'react';
import "./style.css"

import logo from '../../../assets/img/argentBankLogo.png';

function Logo() {
    return (
        <a className="main-nav-logo" href="http://localhost:3001/">
            <img
            className="main-nav-logo-image"
            src={logo}
            alt='logo ArgentBank'
            />
        <h1 className="sr-only">Argent Bank</h1>
        </a>
    )
}

export default Logo;