import React from "react";
import { useNav } from "../../hooks/useNav";
import Education from "./education/Education";
import Experience from "./experience/Experience";
import Skills from "./skills/Skills";
import Cta from "./cta/Cta";
import "./resume.scss";

const Resume = () => {
  const resumeRef = useNav("Resume");
  return (
    <section id="resume" ref={resumeRef} className="resumeSection">
      {/* <div className="resumeSection__wrapper"> */}
        <Education />
      {/* </div> */}
      {/* <div className="resumeSection__wrapper"> */}
        <Experience />
      {/* </div> */}
      {/* <div className="resumeSection__wrapper"> */}
        <Skills />
      {/* </div> */}
      {/* <div className="resumeSection__wrapper"> */}
        <Cta />
      {/* </div> */}
    </section>
  );
};

export default Resume;
