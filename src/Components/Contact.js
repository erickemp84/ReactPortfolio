import React from 'react';
import contact from '../Assets/contact.jpg';

const Contact = () => {

    return (

        <div class="contact-main">
        <div class="contact-left">
            <img src={contact} />
        </div>
    <div className="contact-right">
        <div className="contact-text">
            <h1>Here's how to</h1>
            <h1>contact me.</h1>
            <p>I look forward to hearing from you!</p>
        </div>
    </div>
    </div>

    );

}

export default Contact;