import React, { useState, useEffect, useRef } from "react";
import ValidationBox from "./ValidationBox";
import emailjs from "emailjs-com";

const ContactForm = () => {
  const firstRender = useRef(true);

  const [disable, setDisabled] = useState(true);

  const [name, setName] = useState("");
  const [email, setEmail] = useState("");
  const [message, setMessage] = useState("");
  const [emailSent, setEmailSent] = useState(false);
  const [fillAll, setFillAll] = useState(false);
  const [validEmail, setValidEmail] = useState(true);

  useEffect(() => {
    if (firstRender.current) {
      firstRender.current = false;
      return;
    }

    setDisabled(formValidation());
  }, [name, email, message]);

  const formValidation = () => {
    if (!name || !email || !message) {
      setEmailSent(false);
      setFillAll(true);
    }

    if (email && !isValidEmail(email)) {
      setValidEmail(false);
      if (name && message) {
        setFillAll(false);
      }
    } else {
      setValidEmail(true);
    }

    if (name && email && message && validEmail) {
      setFillAll(false);
      return false;
    } else {
      return true;
    }
  };

  const submit = () => {
    const serviceId = "service_myek2jv";
    const templateId = "template_f4pcc2j";
    const userId = "9WzsiAWCH3B8EaCQ8";
    const templateParams = {
      name,
      email,
      message,
    };

    emailjs
      .send(serviceId, templateId, templateParams, userId)
      .then((response) => {
        console.log(response);
      })
      .then((error) => {
        console.log(error);
      });

    setName("");
    setEmail("");
    setMessage("");
    setEmailSent(true);
    firstRender.current = true;
    setDisabled(true);
  };

  const isValidEmail = (email) => {
    const regex =
      /^(([^<>()\[\]\\.,;:\s@"]+(\.[^<>()\[\]\\.,;:\s@"]+)*)|(".+"))@((\[[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\])|(([a-zA-Z\-0-9]+\.)+[a-zA-Z]{2,}))$/;
    return regex.test(String(email).toLowerCase());
  };

  return (
    <>
      <input
        type="text"
        id="myname"
        placeholder="Name"
        value={name}
        onChange={(e) => setName(e.target.value)}
      />
      <input
        type="email"
        placeholder="E-mail"
        value={email}
        onChange={(e) => setEmail(e.target.value)}
      />
      {!validEmail && (
        <ValidationBox message="Email address is incorrect." type="error" />
      )}
      <textarea
        placeholder="Message"
        value={message}
        onChange={(e) => setMessage(e.target.value)}
      ></textarea>
      {fillAll && <ValidationBox message="Fill in all fields." type="error" />}
      <button
        className="button"
        text="Send message"
        onClick={submit}
        disabled={disable}
      >
        Send message
      </button>
      {emailSent && (
        <ValidationBox
          message="Thank you for your message, we will be in touch in no time!"
          type="success"
        />
      )}
    </>
  );
};

export default ContactForm;
