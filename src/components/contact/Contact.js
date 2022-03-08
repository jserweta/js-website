import React, { useState, useEffect } from "react";
import sanityClient from "../../Client";
import { useNav } from "../../hooks/useNav";
import SectionHeader from "../sectionHeader/SectionHeader";
import "./contact.scss";

const Contact = () => {
  const contactRef = useNav("Contact");

  const [contactData, setContactData] = useState(null);

  useEffect(() => {
    sanityClient
      .fetch(
        `*[_type == "contact"][0]{
          sectionHeader,
        }`
      )
      .then((data) => {
        setContactData(data);
        console.log(contactData);
      })
      .catch(console.error);
  }, []);

  return (
    <section id="contact" ref={contactRef} className="contactSection">
      {contactData !== null && (
        <>
          <SectionHeader sectionHeader={contactData.sectionHeader} />
        </>
      )}
    </section>
  );
};

export default Contact;
