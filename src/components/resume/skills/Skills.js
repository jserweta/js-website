import React, { useState, useEffect } from "react";
import SectionHeader from "../../sectionHeader/SectionHeader";
import sanityClient from "../../../Client";
import SkillsItem from "./SkillsItem";
import "./skills.scss";

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
        console.log(data.skillIcon);
      })
      .catch(console.error);
  }, []);

  return (
    <>
      {skillsData !== null && (
        <article className="resumeSection__skills">
          <SectionHeader sectionHeader={skillsData.skills.sectionHeader} />
          <div className="resumeSection__skillItems">
            {skillsData.skills.skillsList.map((item) => (
              <SkillsItem key={item._key} skillsItemData={item} />
            ))}
          </div>
        </article>
      )}
    </>
  );
};

export default Skills;
