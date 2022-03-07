import React from "react";
import { useNav } from "../../hooks/useNav";
import "./aboutMe.scss";

const AboutMe = () => {
  const aboutRef = useNav("About me");
  return (
    <section id="about-me" ref={aboutRef} className="aboutMe">
      Aboutme
    </section>
  );
};

export default AboutMe;
