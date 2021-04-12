import React from 'react';
import logo from '../../images/logo.png';
import './Header.css'

const Header = () => {
    return (
        <div className="header">
            <img src={logo} alt=""/>
            <nav>
                <a href="/home">Home</a>
                <a href="/suggest">Suggestion</a>
                <a href="/back">Back</a></nav>
        </div>
    );
};

export default Header;