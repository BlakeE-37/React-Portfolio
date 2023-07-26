import React from "react";
import Navbar from "./navbar"

const styles = {
    header: {
        width: '100%',
        height: '20vh',
        background: '#303030',
        display: 'flex',
        color: '#EBF2FA'
    },

    h1: {
        margin: 10,
        marginTop: 0,
        fontSize: '10vh'
    },

    portrait: {
        margin: 10
    }

}

function Header() {

    return (
        <div style={styles.header}>
            <img style={styles.portrait} alt="My wife and Myself" src="portrait.jpg"></img>
            <h1 style={styles.h1}>Blake Hollingsworth</h1>
            <Navbar />
        </div>
    )
};

export default Header;