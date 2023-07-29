import React from "react";
import './pages.css'

function Contact() {

    function handleInputChange() {
        return
    }

    function handleFormSubmit() {
        return
    }

    return (
        <div className="pageContainer">
            <div className="formContainer">
                <h2 className="contactTitle">Contact Me</h2>
                <form className="form">
                    <input
                        className="contactName"
                        name="name"
                        onChange={handleInputChange}
                        type="text"
                        placeholder="Name"
                    />
                    <input
                        className="contactEmail"
                        name="email"
                        onChange={handleInputChange}
                        type="email"
                        placeholder="Email"
                    />
                    <textarea
                        className="contactMessage"
                        name="message"
                        onChange={handleInputChange}
                        type="text"
                        placeholder="Message"
                    />
                    <button type="button" className="contactSubmit" onClick={handleFormSubmit}>
                        Submit
                    </button>
                </form>
            </div>
        </div>
    )
}

export default Contact