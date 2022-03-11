import React from "react";
import * as sanityURL from "../../../SanityURL";

const ExperienceItem = ({ experienceItemData }) => {
  const yearStart = new Date(experienceItemData.workStartDate).getFullYear();

  const yearEnd = new Date(experienceItemData.workEndDate).getFullYear();
  // console.log(experienceItemData.workEndDate);

  const monthStart = new Date(experienceItemData.workStartDate).toLocaleString(
    "en-US",
    { month: "short" }
  );

  const monthEnd = new Date(experienceItemData.workEndDate).toLocaleString(
    "en-US",
    { month: "short" }
  );

  let workPeriod = `${monthStart} ${yearStart}`;
  if (monthEnd !== monthStart || yearEnd !== yearStart) {
    experienceItemData.workEndDate != null
      ? (workPeriod = `${workPeriod} - ${monthEnd} ${yearEnd}`)
      : (workPeriod = `${workPeriod} - Present`);
  }

  return (
    <div className="resumeSection__experienceItem">
      <div className="highlight">
        <h2>{yearStart}</h2>
        <p>{workPeriod}</p>
      </div>

      <div className="content">
        <h3>{experienceItemData.jobPosition}</h3>
        <div className="company">
          <img
            src={sanityURL.urlFor(experienceItemData.companyLogo).url()}
            alt=""
          />
          <p>{experienceItemData.companyName}</p>
        </div>
      </div>
    </div>
  );
};

export default ExperienceItem;
