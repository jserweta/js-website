import React, { useState, useEffect } from "react";
import SectionHeader from "../../sectionHeader/SectionHeader";
import sanityClient from "../../../Client";

const Skills = () => {
  const [skillsData, setSkillsData] = useState(null);

  useEffect(() => {
    sanityClient
      .fetch(
        `*[_type == "resume"][0]{
          skills
        }`
      )
      .then((data) => {
        setSkillsData(data);
        console.log(data);
      })
      .catch(console.error);
  }, []);

  return (
    <>
      {skillsData !== null && (
        <article className="resumeSection__skills">
          <SectionHeader
            sectionHeader={skillsData.skills.sectionHeader}
          />
        </article>
      )}
    </>
  );
};

export default Skills;
