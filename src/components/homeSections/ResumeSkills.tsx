import {PortableTextBlock} from 'next-sanity';
import {SkillsSectionQueryResult} from '../../../sanity.types';
import SectionHeader from '../SectionHeader';

export default function ResumeSkills({data}: {data: SkillsSectionQueryResult}) {
  const {sectionHeader, skillsList} = data || {};
  const {mainHeader, backgroundHeader} = sectionHeader || {};
  return (
    <article className="mb-24">
      {mainHeader && backgroundHeader && (
        <SectionHeader
          header={mainHeader as PortableTextBlock[]}
          backgroundHeader={backgroundHeader}
        />
      )}
    </article>
  );
}
