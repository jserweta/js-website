'use client';

import {useNav} from '@/app/hooks/useNav';
import ResumeCta from './ResumeCta';
import ResumeEducation from './ResumeEducation';
import ResumeExperience from './ResumeExperience';
import ResumeSkills from './ResumeSkills';

export default function Resume() {
  const sectionRef = useNav('Resume');

  return (
    <section id="resume" ref={sectionRef}>
      <ResumeEducation />
      <ResumeExperience />
      <ResumeSkills />
      <ResumeCta />
    </section>
  );
}
