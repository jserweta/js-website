import React, { useState, useEffect, useRef } from "react";
import { useNav } from "../../hooks/useNav";
import { init } from "ityped";
import sanityClient from "../../Client";
import "./home.scss";

const Home = () => {
  const homeRef = useNav("Home");
  const [homeData, setHomeData] = useState(null);
  const motionTextRef = useRef();

  useEffect(() => {
    sanityClient
      .fetch(
        `*[_type == "home"][0]{
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
        setHomeData(data);
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
    <section id="home" ref={homeRef} className="homeSection">
      {homeData !== null && (
        <div className="homeSection__wrapper">
          <img
            className="homeSection__image"
            src={homeData.image.asset.url}
            alt={homeData.image.alt}
          />
          <h1 className="homeSection__header">{homeData.header}</h1>
          <p className="homeSection__motionText">
            I'm a <span ref={motionTextRef}></span>
          </p>
        </div>
      )}
    </section>
  );
};

export default Home;
