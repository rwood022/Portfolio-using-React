import React, { useState } from "react";
import "../styles/Contact.css";
import pdf from "../images/resume.pdf";

const styles = {
    contactStyle: {
      color: "white",
      justifyContent: 'center',
      background: "#e5989b",
    },
};

function validateEmail(email) {
    const re = /^(([^<>()[\]\\.,;:\s@"]+(\.[^<>()[\]\\.,;:\s@"]+)*)|(".+"))@((\[[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\])|(([a-zA-Z\-0-9]+\.)+[a-zA-Z]{2,}))$/;
    return re.test(String(email).toLowerCase());
}

function validateMessage(message) {
    const re = /^.*(?=.{3,})(?=.*[a-zA-Z]).*$/;
    return re.test(String(message));
}

export default function Contact() {
    // card for name, email and description
    const [email, setEmail] = useState('');
    const [userName, setUserName] = useState('');
    const [message, setMessage] = useState('');
    const [errorMessage, setErrorMessage] = useState('');


    const handleInputChange = (e) => {
        const { target } = e;
        const inputType = target.name;
        const inputValue = target.value;

        if (inputType === 'email') {
            setEmail(inputValue);
        } else if (inputType === 'userName') {
            setUserName(inputValue);
        } else {
            setMessage(inputValue);
        }
    };

    const handleFormSubmit = (e) => {
        e.preventDefault();

        if (!validateEmail(email)) {
            setErrorMessage('Email is invalid');
            return;
        }
        if (!validateMessage(message)) {
            setErrorMessage('Invalid message');
            return;
        }

        alert(`Thank you, ${userName}. Your message and contact has been sent!`);

        setUserName('');
        setEmail('');
        setMessage('');

    }


    return(
        <div style={styles.contactStyle} className="contact">
            <h2>Please contact me for more info!</h2>
            <form className="form">
                <input
                value={userName}
                name="userName"
                onChange={handleInputChange}
                type="text"
                placeHolder="name"
                />
                <input
                value={email}
                 name="email"
                onChange={handleInputChange}
                type="email"
                placeholder="email"
                />
                <input
                value={message}
                name="message"
                onChange={handleInputChange}
                type="text"
                placeholder="message (MUST END WITH A PERIOD)"
                />
                <button type="button" onClick={handleFormSubmit}>Submit</button>
            </form>
            {errorMessage && (
            <div>
                <p className="error-text">{errorMessage}</p>
             </div>
             )}
        </div>
    );
}