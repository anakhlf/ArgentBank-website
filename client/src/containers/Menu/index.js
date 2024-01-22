import React from 'react';
import Logo from '../../components/Logo/index.js';
import Log from '../../components/Log/index.js';
import "./style.css"

function Menu() {
    return (
        <nav className="main-nav">
            <Logo />
            <Log />
        </nav>
    )
}

export default Menu;