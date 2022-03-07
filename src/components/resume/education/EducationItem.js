import React from "react";
import "./educationItem.scss";

const EducationItem = ({ eduItemData }) => {
  const content = eduItemData.content;

  return (
    <div className="resumeSection__educationItem">
      <h3>{eduItemData.degree}</h3>
      <span>{eduItemData.graduationDate}</span>
      {content != null &&
        content.split("\n\n").map((str, index) => <p key={index}>{str}</p>)}
    </div>
  );
};

export default EducationItem;
