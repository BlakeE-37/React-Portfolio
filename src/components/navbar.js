import React from "react";
import './components.css'

function Navbar({ handlePageChange, activePage }) {
    // className={activePage === 'aboutMe' ? "links activeLink" : "links"}
    return (
        <ul className="navbar">
            <li className={activePage === 'aboutMe' ? "linkContainer activeLinkContainer" : "linkContainer"}>
                <a className="linkText" href="#aboutMe" onClick={() => handlePageChange('aboutMe')}>About Me</a>
            </li>
            <li className={activePage === 'portfolio' ? "linkContainer activeLinkContainer" : "linkContainer"}>
                <a className="linkText" href="#portfolio" onClick={() => handlePageChange('portfolio')}>Portfolio</a>
            </li>
            <li className={activePage === 'contact' ? "linkContainer activeLinkContainer" : "linkContainer"}>
                <a className="linkText" href="#contact" onClick={() => handlePageChange('contact')}>Contact</a>
            </li>
            <li className={activePage === 'resume' ? "linkContainer activeLinkContainer" : "linkContainer"}>
                <a className="linkText" href="#resume" onClick={() => handlePageChange('resume')}>Resume</a>
            </li>
        </ul>
    )
}

export default Navbar