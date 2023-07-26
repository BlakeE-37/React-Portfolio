import React from "react";
import Navbar from "./navbar"

const styles = {
    header: {
        width: "100%",
        height: '20vh',
        background: '#9a74db',
        display: 'flex'
    }
}

function Header() {

    return (
        <div style={styles.header}>
            <img className="headerImg" alt="My wife and Myself" src="portrait.jpg"></img>
            <h1 className="nameTitle">Blake Hollingsworth</h1>
            <Navbar />
        </div>
    )
};

export default Header;