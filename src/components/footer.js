import React from "react";
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faInstagram, faGithub, faLinkedin } from '@fortawesome/free-brands-svg-icons'
import './components.css'

const githubElement = <FontAwesomeIcon icon={faGithub} className="socialLink" />
const linkedinElement = <FontAwesomeIcon icon={faLinkedin} className="socialLink" />
const instagramElement = <FontAwesomeIcon icon={faInstagram} className="socialLink" />

function Footer() {
    return (
        <footer className="footer">
            <a href="https://github.com/BlakeE-37" target="_blank" rel="noreferrer">{githubElement}</a>
            <a href="https://www.linkedin.com/in/blakeevanhollingsworth/" target="_blank" rel="noreferrer">{linkedinElement}</a>
            <a href="https://www.instagram.com/blake.e717/" target="_blank" rel="noreferrer">{instagramElement}</a>
        </footer>
    )
}

export default Footer