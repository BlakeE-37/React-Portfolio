import React from "react";
import './components.css'

function Navbar({ handlePageChange, activePage }) {

    return (
        <ul className="navbar">
            <li>
                <a className="links" href="#aboutMe" onClick={() => handlePageChange('aboutMe')}>About Me</a>
            </li>
            <li >
                <a className="links" href="#portfolio" onClick={() => handlePageChange('portfolio')}>Portfolio</a>
            </li>
            <li >
                <a className="links" href="#contact" onClick={() => handlePageChange('contact')}>Contact</a>
            </li>
            <li >
                <a className="links" href="#resume" onClick={() => handlePageChange('resume')}>Resume</a>
            </li>
        </ul>
    )
}

export default Navbar