import React from "react";
import './pages.css'

function Resume() {
    return (
        <div className="pageContainer">
            <img className="resumeImage" alt="resume" src="resume-image.jpg"></img>
            <a className="resumeDownloadLink" target="_blank" href="resume.pdf">Download</a>
        </div>
    )
}

export default Resume