import React, { useState, useEffect } from "react";
import sanityClient from "../../../Client.js";
import Button from "../../button/Button";
import "./cta.scss";

const Cta = () => {
  const [ctaData, setCtaData] = useState(null);

  useEffect(() => {
    sanityClient
      .fetch(
        `*[_type == "resume"][0]{
          ctaContent,
          ctaButton,
          buttonLink,
          "downloadFile": downloadFile.asset->url
        }`
      )
      .then((data) => {
        setCtaData(data);
        // console.log(data.downloadFile);
      })
      .catch(console.error);
  }, []);

  return (
    <>
      {ctaData !== null && (
        <article className="resumeSection__cta">
          <p>
            {ctaData.ctaContent.slice(0, ctaData.ctaContent.length - 2)}{" "}
            <span className="accentHighlight">
              {ctaData.ctaContent.slice(-2)}
            </span>
          </p>
          <Button text={ctaData.ctaButton} file={ctaData.downloadFile} />
        </article>
      )}
    </>
  );
};

export default Cta;
