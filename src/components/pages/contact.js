import React, { useState } from "react";
import './pages.css'

function Contact() {

    const [errorMessage, setErrorMessage] = useState("")
    const [name, setName] = useState("")
    const [email, setEmail] = useState("")
    const [message, setMessage] = useState("")

    function handleInputChange(e) {
        const { target } = e
        const inputType = target.name
        const inputValue = target.value

        // sync the state and the value in the dom
        if (inputType === "name") {
            setName(inputValue)
        } else if (inputType === "email") {
            setEmail(inputValue)
        } else {
            setMessage(inputValue)
        }
    };

    // set error message if the input is left blank when cursor leaves 
    function handleBlur(e) {
        const { target } = e
        const inputType = target.name
        const inputValue = target.value

        if (inputType === "name") {
            if (!inputValue) {
                setErrorMessage('Name is Required')
            } else {
                setErrorMessage('')
            }
        } else if (inputType === "email") {
            if (!inputValue) {
                setErrorMessage('Email is Required')
                // validate email
            } else if (!validateEmail(inputValue)) {
                setErrorMessage('Not a Valid Email')
            } else {
                setErrorMessage('')
            }
        } else {
            if (!inputValue) {
                setErrorMessage('Message is Required')
            } else {
                setErrorMessage('')
            }
        }
    };

    function validateEmail(email) {
        const emailRegex = /^[A-Za-z0-9._%+-]+@[A-Za-z0-9.-]+\.[A-Za-z]{2,}$/;
        return emailRegex.test(email);
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
                        value={name}
                        className="contactName"
                        name="name"
                        onChange={handleInputChange}
                        onBlur={handleBlur}
                        type="text"
                        placeholder="Name"
                    />
                    <input
                        value={email}
                        className="contactEmail"
                        name="email"
                        onChange={handleInputChange}
                        onBlur={handleBlur}
                        type="email"
                        placeholder="Email"
                    />
                    <textarea
                        value={message}
                        className="contactMessage"
                        name="message"
                        onChange={handleInputChange}
                        onBlur={handleBlur}
                        type="text"
                        placeholder="Message"
                    />
                    <button type="button" className="contactSubmit" onClick={handleFormSubmit}>
                        Submit
                    </button>
                </form>
                {errorMessage && <p className="errorMessage">{errorMessage}</p>}
            </div>
        </div>
    )
}

export default Contact