import React from 'react';
import contact from '../Assets/contact.jpg';

const Contact = () => {

    return (

        <div class="contact-main">
        <div class="contact-left">
            <img src={contact} alt="a phone with some text on screen" />
        </div>
    <div className="contact-right">
        <div className="contact-text">
            <h1>Here's how to</h1>
            <h1>contact me.</h1>
            <p>I look forward to hearing from you!</p>
        </div>
        <div className="contact-info">
            <h2>eric.kemp84@gmail.com</h2>
            <h2>(405)962-9777</h2>
            <h2><a href="https://github.com/erickemp84" target="_blank" rel="noreferrer noopener">Github</a></h2>
            <h2><a href="https://www.linkedin.com/in/eric-kemp-564272148/" target="_blank" rel="noreferrer noopener">LinkedIn</a></h2>
        </div>
    </div>
    </div>

    );

}

export default Contact;