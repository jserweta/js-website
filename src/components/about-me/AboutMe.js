import React, { useState, useEffect } from "react";
import { useNav } from "../../hooks/useNav";
import sanityClient from "../../Client.js";
import SectionHeader from "../sectionHeader/SectionHeader";
import SocialMediaIcons from "../socialMediaIcons/SocialMediaIcons";
import "./aboutMe.scss";

const AboutMe = () => {
  const aboutRef = useNav("About me");

  const [aboutData, setAboutData] = useState(null);

  useEffect(() => {
    sanityClient
      .fetch(
        `*[_type == "about"][0]{
          sectionHeader,
          content,
          cta,
          image{
            asset->{
              _id,
              url
            },
            alt
          },
          imageCaption
        }`
      )
      .then((data) => {
        setAboutData(data);
      })
      .catch(console.error);
  }, []);

  return (
    <section id="about-me" ref={aboutRef} className="aboutMeSection">
      {aboutData !== null && (
        <>
          <SectionHeader sectionHeader={aboutData.sectionHeader} />
          <div className="aboutMeSection__wrapper">
            <div className="aboutMeSection__content">
              <p>{aboutData.content}</p>
              <div className="aboutMeSection__cta">
                <h3 className="accentHighlight">{aboutData.cta}</h3>
                <SocialMediaIcons />
              </div>
            </div>
            <div className="aboutMeSection__imageWrapper">
              <img
                className="aboutMeSection__image"
                src={aboutData.image.asset.url}
                alt={aboutData.image.alt}
              />
              <div className="aboutMeSection__imageCaption">
                <h3>
                  {aboutData.imageCaption} <br /> <span>of experience</span>
                </h3>
              </div>
            </div>
          </div>
        </>
      )}
    </section>
  );
};

export default AboutMe;
