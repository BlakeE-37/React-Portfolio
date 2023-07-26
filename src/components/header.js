import React from "react";
import "./header.css"

function Header() {

    return (
        <div className="headerContainer">
            <img className="headerImg" alt="My wife and Myself" src="portrait.jpg"></img>
            <h1 className="nameTitle">Blake Hollingsworth</h1>
            <ul>
                <li>Home</li>
                <li>About Me</li>
                <li>Contact Me</li>
            </ul>
        </div>
    )
};

export default Header;