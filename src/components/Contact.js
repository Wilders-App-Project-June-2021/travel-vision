import "./vivify.min.css";
import "./Main.css";
import React, { useState, useEffect } from "react";
import axios from "axios";

const Contact = () => {
  const [isSubmitted, setIsSubmitted] = useState(false);
  const [firstname, setFirstName] = useState("");
  const [lastname, setLastName] = useState("");
  const [email, setEmail] = useState("");
  const [title, setTitle] = useState("");
  const [message, setMessage] = useState("");

  const handleSubmit = () => {
    axios
      .post(
        `http://localhost:8080/new-message/${firstname}/${lastname}/${email}/${title}/${message}`
      )
      .then((result) => {
        console.log(result);
      })
      .catch((err) => {
        console.log(err);
      });
  };

  return (
    <div className="contact-form-wrapper fadeIn">
      <span className="fill-form">
        Fill out the form and we'll get back to you shortly.
      </span>
      <div className="message-fields">
        <div className="contact-name-mobile">
          <input
            type="text"
            id="fname"
            name="firstname"
            placeholder="First name"
            className="contact-input"
            onChange={(e) => {
              setFirstName(e.target.value);
            }}
          />
          <input
            type="text"
            id="lname"
            name="lastname"
            placeholder="Last name"
            className="contact-input"
            onChange={(e) => {
              setLastName(e.target.value);
            }}
          />
          <input
            type="text"
            id="email"
            name="email"
            placeholder="email@emailaddress.com"
            className="contact-input"
            onChange={(e) => {
              setEmail(e.target.value);
            }}
          />
        </div>
        <input
          type="text"
          id="title"
          name="title"
          placeholder="Title"
          className="contact-input"
          onChange={(e) => {
            setTitle(e.target.value);
          }}
        />
        <textarea
          id="subject"
          name="subject"
          name="message"
          placeholder="Message"
          style={{ height: "200px" }}
          className="contact-input"
          onChange={(e) => {
            setMessage(e.target.value);
          }}></textarea>
        <input
          type="button"
          value="Submit"
          className="contact-input contact-form-button"
          onClick={() => handleSubmit()}
        />
      </div>
      <div> Message </div>
    </div>
  );
};

export default Contact;
