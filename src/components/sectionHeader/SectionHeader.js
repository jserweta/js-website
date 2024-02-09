import React from "react";
import "./sectionHeader.scss";

const SectionHeader = ({ sectionHeader }) => {
  return (
    <div className="sectionHeader">
      <span className="sectionHeader__background">
        {sectionHeader.subHeader}
      </span>
      <h2 className="sectionHeader__main">
        {sectionHeader.headerBasic}{" "}
        <span className="accentHighlight">
          {sectionHeader.headerHighlight}
        </span>
      </h2>
    </div>
  );
};

export default SectionHeader;
