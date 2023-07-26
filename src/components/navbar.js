import React from "react";

const styles = {
    header: {

    }
}

function Navbar() {

    return (
        <ul className="">
            <li>
                <a href="#aboutMe" className="nav-link">About Me</a>
            </li>
            <li >
                <a href="#portfolio" className="nav-link">Portfolio</a>
            </li>
            <li >
                <a href="#contact" className="nav-link">Contact</a>
            </li>
            <li >
                <a href="#resume" className="nav-link">Resume</a>
            </li>
        </ul>
    )
}

export default Navbar