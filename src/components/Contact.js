import "./vivify.min.css";
import "./Main.css";
import React, { useState, useEffect } from "react";
import axios from "axios";

const Contact = () => {
  const [isSubmitted, setIsSubmitted] = useState("");
  const [firstname, setFirstName] = useState("");
  const [lastname, setLastName] = useState("");
  const [email, setEmail] = useState("");
  const [title, setTitle] = useState("");
  const [message, setMessage] = useState("");

  const clearForm = () => {
    const inputs = document.querySelectorAll("input,textarea");
    inputs.forEach((item) => (item.value = ""));
  };

  const handleSubmit = () => {
    axios
      .post(
        // `https://travel-vision.herokuapp.com/new-message/${firstname}/${lastname}/${email}/${title}/${message}`
        `http://localhost:8080/new-message/${firstname}/${lastname}/${email}/${title}/${message}`
      )
      .then((result) => {
        console.log(result);
        setIsSubmitted(`Thank you ${firstname}! Your message has been sent.`);
      })
      .catch((err) => {
        console.log(err);
        setIsSubmitted(
          `There was an error sending your message, please fill out all the fields and try again.`
        );
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
            required
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
            required
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
            required
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
          required
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
          }}
          required></textarea>
        <button
          type="button"
          className="contact-input contact-form-button"
          onClick={() => {
            handleSubmit();
            clearForm();
          }}>
          Submit
        </button>
      </div>
      <div className="fill-form">{isSubmitted}</div>
    </div>
  );
};

export default Contact;
