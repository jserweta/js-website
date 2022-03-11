import React, { useEffect, useState } from "react";
import sanityClient from "../../Client.js";
import { ReactComponent as FacebookIcon } from "../../img/logo-facebook.svg";
import { ReactComponent as LinkedInIcon } from "../../img/logo-linkedin.svg";
import { ReactComponent as GithubIcon } from "../../img/logo-github.svg";
import "./socialMediaIcons.scss";

const SocialMediaIcons = () => {
  const [socialData, setSocialData] = useState(null);

  useEffect(() => {
    sanityClient
      .fetch(
        `*[_type == "socialMedia"][0]{
          facebook,
          linkedin,
          github
        }`
      )
      .then((data) => {
        setSocialData(data);
      })
      .catch(console.error);
  }, []);

  return (
    <div className="socialMediaIcons">
      {socialData !== null && (
        <>
          <a href={socialData.facebook} target="_blank" rel="noreferrer">
            <FacebookIcon />
          </a>
          <a href={socialData.linkedin} target="_blank" rel="noreferrer">
            <LinkedInIcon />
          </a>
          <a href={socialData.github} target="_blank" rel="noreferrer" >
            <GithubIcon />
          </a>
        </>
      )}
    </div>
  );
};

export default SocialMediaIcons;
