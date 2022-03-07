import React, { useState, useEffect } from "react";
import SectionHeader from "../../sectionHeader/SectionHeader";
import sanityClient from "../../../Client";

const Education = () => {
  const [educationData, setEducationData] = useState(null);

  useEffect(() => {
    sanityClient
      .fetch(
        `*[_type == "resume"][0]{
          education
        }`
      )
      .then((data) => {
        setEducationData(data);
        console.log(data);
      })
      .catch(console.error);
  }, []);

  return (
    <>
      {educationData !== null && (
        <article className="resumeSection__education">
          <SectionHeader
            sectionHeader={educationData.education.sectionHeader}
          />
        </article>
      )}
    </>
  );
};

export default Education;
