import React from "react";
import './Navbar.css';

function Navbar () {
    return (
    <nav className= "navbar">
        <a href="/" className="title">Portfolio</a>
        <ul>
            <li>
                <a href="https://github.com/MichaelS0521">GitHub</a>
            </li>
            <li>
                <a href="/Contact">Contact</a>
            </li>
        </ul>
    </nav>
    )
}

export default Navbar;