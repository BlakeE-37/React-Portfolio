import React from "react";
import './components.css'

function Navbar() {

    return (
        <ul className="navbar">
            <li>
                <a className="links" href="#aboutMe">About Me</a>
            </li>
            <li >
                <a className="links" href="#portfolio">Portfolio</a>
            </li>
            <li >
                <a className="links" href="#contact">Contact</a>
            </li>
            <li >
                <a className="links" href="#resume">Resume</a>
            </li>
        </ul>
    )
}

export default Navbar