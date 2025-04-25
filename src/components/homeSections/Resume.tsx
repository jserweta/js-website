'use client';

import {useNav} from '@/app/hooks/useNav';
import {
  EducationSectionQueryResult,
  ExperienceSectionQueryResult,
  SkillsSectionQueryResult,
} from '../../../sanity.types';
import ResumeCta from './ResumeCta';
import ResumeEducation from './ResumeEducation';
import ResumeExperience from './resumeExperience/ResumeExperience';
import ResumeSkills from './ResumeSkills';

export default function Resume({
  educationSectionData,
  experienceSectionData,
  skillsSectionData,
}: {
  educationSectionData: EducationSectionQueryResult;
  experienceSectionData: ExperienceSectionQueryResult;
  skillsSectionData: SkillsSectionQueryResult;
}) {
  const sectionRef = useNav('Resume');
  const {sectionId} = educationSectionData || {};

  return (
    <section id={sectionId || 'resume'} ref={sectionRef}>
      <ResumeEducation data={educationSectionData} />
      <ResumeExperience data={experienceSectionData} />
      <ResumeSkills data={skillsSectionData} />
      <ResumeCta />
    </section>
  );
}
