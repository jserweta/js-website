import React, { useState, useEffect, useRef } from "react";
import { useNav } from "../../hooks/useNav";
import "./home.scss";
import sanityClient from "../../Client";
import { init } from "ityped";

const Hero = () => {
  const [heroData, setHeroData] = useState(null);
  const motionTextRef = useRef();
  const homeRef = useNav("Home");

  useEffect(() => {
    sanityClient
      .fetch(
        `*[_type == "hero"][0]{
          image{
            asset->{
              _id,
              url
            },
            alt
          },
          header,
          profession
        }`
      )
      .then((data) => {
        setHeroData(data);
        // Motion text
        init(motionTextRef.current, {
          showCursor: true,
          backDelay: 1500,
          backSpeed: 60,
          strings: data.profession,
        });
      })
      .catch(console.error);
  }, []);

  return (
    <section id="home" ref={homeRef} className="heroSection">
      {heroData != null && (
        <div className="heroSection__wrapper">
          <img
            className="heroSection__image"
            src={heroData.image.asset.url}
            alt={heroData.image.alt}
          />
          <h1 className="heroSection__header">{heroData.header}</h1>
          <p className="heroSection__motionText">
            I'm a <span ref={motionTextRef}></span>
          </p>
        </div>
      )}
    </section>
  );
};

export default Hero;
