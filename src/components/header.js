import React from "react";
import Navbar from "./navbar"
import './components.css'

function Header({ handlePageChange, activePage }) {

    return (
        <div className="header">
            <img className="portrait" alt="My wife and Myself" src="portrait.jpg"></img>
            <h1 className="h1">Blake Hollingsworth</h1>
            <Navbar handlePageChange={handlePageChange} activePage={activePage} />
        </div>
    )
};

export default Header;