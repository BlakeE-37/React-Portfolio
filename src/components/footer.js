import React from "react";
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faInstagram } from '@fortawesome/free-brands-svg-icons'
import './components.css'

const element = <FontAwesomeIcon icon={faInstagram} className="socialLink" />

function Footer() {
    return (
        <footer className="footer">
            <a>{element}</a>
            <a></a>
            <a></a>
        </footer>
    )
}

export default Footer