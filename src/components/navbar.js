import React from "react";

const styles = {
    navbar: {
        display: 'flex',
        listStyleType: 'none',
        gap: '3vw',
        alignItems: 'end',
        marginRight: 10,
        marginLeft: 'auto'
    },

    links: {
        textDecoration: 'none',
        fontSize: '2.5vh',
        color: '#FBB13C'
    }
}

function Navbar() {

    return (
        <ul style={styles.navbar}>
            <li>
                <a style={styles.links} href="#aboutMe">About Me</a>
            </li>
            <li >
                <a style={styles.links} href="#portfolio">Portfolio</a>
            </li>
            <li >
                <a style={styles.links} href="#contact">Contact</a>
            </li>
            <li >
                <a style={styles.links} href="#resume">Resume</a>
            </li>
        </ul>
    )
}

export default Navbar