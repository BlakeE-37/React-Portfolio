import React from "react";
import Navbar from "./navbar"
import './components.css'

function Header() {

    return (
        <div className="header">
            <img className="portrait" alt="My wife and Myself" src="portrait.jpg"></img>
            <h1 className="h1">Blake Hollingsworth</h1>
            <Navbar />
        </div>
    )
};

export default Header;