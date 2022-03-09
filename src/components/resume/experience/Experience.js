import React, { useState, useEffect } from "react";
import SectionHeader from "../../sectionHeader/SectionHeader";
import ExperienceItem from "./ExperienceItem";
import sanityClient from "../../../Client";

import "./experience.scss";

const Experience = () => {
  const [experienceData, setExperienceData] = useState(null);

  useEffect(() => {
    sanityClient
      .fetch(
        `*[_type == "resume"][0]{
          experience
        }`
      )
      .then((data) => {
        setExperienceData(data);
        console.log(data);
      })
      .catch(console.error);
  }, []);

  return (
    <>
      {experienceData !== null && (
        <article className="resumeSection__experience">
          <SectionHeader
            sectionHeader={experienceData.experience.sectionHeader}
          />
          <div className="resumeSection__experienceItems">
            {experienceData.experience.experienceList.map((item) => (
              <ExperienceItem key={item._key} experienceItemData={item} />
            ))}
          </div>
        </article>
      )}
    </>
  );
};

export default Experience;
