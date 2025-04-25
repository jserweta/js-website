import {PortableTextBlock} from 'next-sanity';
import {ExperienceSectionQueryResult} from '../../../../sanity.types';
import SectionHeader from '../../SectionHeader';
import ExperienceItem from './ExperienceItem';

export default function ResumeExperience({data}: {data: ExperienceSectionQueryResult}) {
  const {sectionHeader, experienceList} = data || {};
  const {mainHeader, backgroundHeader} = sectionHeader || {};

  return (
    <article className="mb-36">
      {mainHeader && backgroundHeader && (
        <SectionHeader
          header={mainHeader as PortableTextBlock[]}
          backgroundHeader={backgroundHeader}
        />
      )}
      {experienceList && experienceList.length > 0 && (
        <div className="resumeSection__experienceItems grid grid-cols-1 gap-7 xl:grid-cols-2 xl:gap-20">
          {experienceList.map(
            (
              item: NonNullable<NonNullable<ExperienceSectionQueryResult>['experienceList']>[number]
            ) => (
              <ExperienceItem key={item._key} data={item} />
            )
          )}
        </div>
      )}
    </article>
  );
}
