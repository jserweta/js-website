import React from "react";
import * as sanityURL from "../../../sanityURL.js";

const SkillsItem = ({ skillsItemData }) => {
  return (
    <div className="resumeSection__skillItem">
      <img src={sanityURL.urlFor(skillsItemData.skillIcon).url()} alt="" />
      <p>{skillsItemData.skillName}</p>
    </div>
  );
};

export default SkillsItem;
