import React, { useState, useEffect } from "react";
import SectionHeader from "../../sectionHeader/SectionHeader";
import sanityClient from "../../../Client";

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

          
        </article>
      )}
    </>
  );
};

export default Experience;
