import React, { useState } from "react";

import { images } from "../../constants";
import { AppWrap, MotionWrap } from "../../wrapper";
import "./Footer.scss";
import emailjs from "@emailjs/browser";


const Footer = () => {
  const [name, setName] = useState("");
  const [email, setEmail] = useState("");
  const [message, setMessage] = useState("");
  const [isNameValid, setIsNameValid] = useState(true);
  const [isEmailValid, setIsEmailValid] = useState(true);

  const validateEmail = (email) => {
    return /\S+@\S+\.\S+/.test(email);
  };

  const handleSubmit = (e) => {
    e.preventDefault();

    const nameIsValid = name.trim() !== "";
    const emailIsValid = validateEmail(email);
    setIsNameValid(nameIsValid);
    setIsEmailValid(emailIsValid);

    if (!nameIsValid || !emailIsValid) {
      return;
    }

    const serviceId = process.env.REACT_APP_SERVICE_ID;
    const templateId = process.env.REACT_APP_TEMPLATE_ID;
    const publicKey = process.env.REACT_APP_PUBLIC_KEY;

    const templateParams = {
      from_name: name,
      from_email: email,
      to_name: "Mohamed Ebraheem",
      message: message,
    };

    emailjs
      .send(serviceId, templateId, templateParams, publicKey)
      .then((response) => {
        console.log("Email sent successfully", response);
        alert(
          "Thank you.  I will respond to you shortly."
        );
        setName("");
        setEmail("");
        setMessage("");
      })
      .catch((error) => {
        console.log("Error Sending email:", error);
      });
  };

  const inputStyle = (isValid) => ({
    borderColor: isValid ? "initial" : "red",
  });

  return (
    <>
      <h2 className="head-text">Take a coffee & chat with me</h2>

      <div className="app__footer-cards">
        <div className="app__footer-card ">
          <img src={images.email} alt="email" />
          <a href="mailto:ebraheemohamed26@gmail.com" className="p-text">
            ebraheemohamed26@gmail.com
          </a>
        </div>
        <div className="app__footer-card">
          <img src={images.mobile} alt="phone" />
          <a href="tel:+1 (647) 767-6066" className="p-text">
            +1 (647) 767-6066
          </a>
        </div>
      </div>

      <form className="app__footer-form app__flex" onSubmit={handleSubmit}>
        <div className="app__flex">
          <input
            className="p-text"
            id="name"
            required
            type="text"
            placeholder="Your Name"
            name="name"
            value={name}
            onChange={(e) => setName(e.target.value)}
            style={inputStyle(isNameValid)}
          />
        </div>
        <div className="app__flex">
          <input
            className="p-text"
            type="email" name="email" id="email" required
              placeholder="Email"
              value={email}
              onChange={(e) => setEmail(e.target.value)}
              style={inputStyle(isEmailValid)}
          />
        </div>
        <div>
          <textarea
            className="p-text"
            placeholder="Your Message"
            value={message}
            name="message"
onChange={(e) => setMessage(e.target.value)}          />
        </div>
        <button
          type="button"
          className="p-text"
          onClick={handleSubmit}
        >
          Submit
        </button>
      </form>
    </>
  );
};

export default AppWrap(
  MotionWrap(Footer, "app__footer"),
  "contact",
  "app__whitebg"
);
