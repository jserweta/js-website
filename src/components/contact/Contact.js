import React, { useState, useEffect } from "react";
import sanityClient from "../../Client";
import * as sanityURL from "../../SanityURL";
import { useNav } from "../../hooks/useNav";
import emailjs from "emailjs-com";
import SectionHeader from "../sectionHeader/SectionHeader";
import Button from "../button/Button";
import "./contact.scss";

const Contact = () => {
  const contactRef = useNav("Contact");

  const [name, setName] = useState("");
  const [email, setEmail] = useState("");
  const [message, setMessage] = useState("");
  const [emailSent, setEmailSent] = useState(false);

  const [contactData, setContactData] = useState(null);

  useEffect(() => {
    sanityClient
      .fetch(
        `*[_type == "contact"][0]{
          sectionHeader,
          content,
          contactDetails
        }`
      )
      .then((data) => {
        setContactData(data);
        console.log(data);
      })
      .catch(console.error);
  }, []);

  const submit = () => {
    if (name && email && message) {
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
        .then((response) => console.log(response))
        .then((error) => console.log(error));

      setName("");
      setEmail("");
      setMessage("");
      setEmailSent(true);
    } else {
      alert("Please fill in all fields.");
    }
  };

  const isValidEmail = (email) => {
    const regex =
      /^(([^<>()\[\]\\.,;:\s@"]+(\.[^<>()\[\]\\.,;:\s@"]+)*)|(".+"))@((\[[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\])|(([a-zA-Z\-0-9]+\.)+[a-zA-Z]{2,}))$/;
    return regex.test(String(email).toLowerCase());
  };

  return (
    <section id="contact" ref={contactRef} className="contactSection">
      {contactData !== null && (
        <>
          <SectionHeader sectionHeader={contactData.sectionHeader} />
          <div className="contactSection__wrapper">
            <div className="contactSection__info">
              <p>{contactData.content}</p>
              {contactData.contactDetails.map((item, index) => (
                <div className="detail" key={index}>
                  <img src={sanityURL.urlFor(item.iconImage).url()} alt="" />
                  {index === 2 ? (
                    <a href={`mailto:${item.iconCaption}`}>
                      {item.iconCaption}
                    </a>
                  ) : (
                    <p>{item.iconCaption}</p>
                  )}
                </div>
              ))}
            </div>
            <div className="contactSection__form">
              <input
                type="text"
                placeholder="Name"
                value={name}
                onChange={(e) => setName(e.target.value)}
              />
              <input
                type="email"
                name="from_email"
                placeholder="E-mail"
                value={email}
                onChange={(e) => setEmail(e.target.value)}
              />
              <textarea
                placeholder="Message"
                name="message"
                value={message}
                onChange={(e) => setMessage(e.target.value)}
              ></textarea>
              <button className="button" text="Send message" onClick={submit}>
                Send message
              </button>
              <span className={emailSent ? "visible" : null}>
                Thank you for your message, we will be in touch in no time!
              </span>
            </div>
          </div>
        </>
      )}
    </section>
  );
};

export default Contact;
