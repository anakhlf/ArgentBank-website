import React from 'react';
import "./style.css"

import logo from '../../assets/img/argentBankLogo.png';

function Logo() {
    return (
        <a class="main-nav-logo" href="./index.html">
            <img
            class="main-nav-logo-image"
            src={logo}
            alt='logo ArgentBank'
            />
        <h1 class="sr-only">Argent Bank</h1>
        </a>
    )
}

export default Logo;