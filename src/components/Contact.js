import "./vivify.min.css";
import "./Main.css";
import React, {useState, useEffect}from "react";


const Contact = ()=> {


    return (
        <div className="contact-form-wrapper fadeIn">
            Fill out the form and we'll get back to you shortly.
            <form>
            <div className="message-fields">
                <input type="text" id="fname" name="firstname" placeholder="First name" className="contact-input" />
                <input type="text" id="lname" name="lastname" placeholder="Last name" className="contact-input" />
                <input type="text" id="title" name="title" placeholder="Title" className="contact-input" />
                <textarea id="subject" name="subject" placeholder="Message" style={{height: "200px"}} className="contact-input"></textarea>
                <input type="submit" value="Submit" className="contact-input contact-form-button" />
            </div>
            </form>
        </div>
    )
}

export default Contact