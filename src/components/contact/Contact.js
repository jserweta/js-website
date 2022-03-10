import React, { useState, useEffect } from "react";
import sanityClient from "../../Client";
import * as sanityURL from "../../SanityURL";
import { useNav } from "../../hooks/useNav";
import SectionHeader from "../sectionHeader/SectionHeader";
import ContactForm from "./ContactForm";
import "./contact.scss";

const Contact = () => {
  const contactRef = useNav("Contact");

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
      })
      .catch(console.error);
  }, []);

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
              <ContactForm />
            </div>
          </div>
        </>
      )}
    </section>
  );
};

export default Contact;
