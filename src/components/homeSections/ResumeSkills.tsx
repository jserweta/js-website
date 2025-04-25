import {PortableTextBlock} from 'next-sanity';
import {ReactSVG} from 'react-svg';
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

      {skillsList && skillsList.length > 0 && (
        <div className="grid grid-cols-1 gap-7 sm:grid-cols-2 sm:grid-rows-4 md:grid-cols-3 md:grid-rows-3 xl:grid-cols-4 xl:grid-rows-2">
          {skillsList.map((item) => (
            <div
              key={item._key}
              className="bg-card hover:bg-card-hover flex aspect-[1.75] flex-col items-center justify-center p-5 sm:aspect-square"
            >
              {item.iconURL && (
                <ReactSVG
                  src={item.iconURL}
                  beforeInjection={(svg) => {
                    svg.classList.add('h-[42px]', 'w-[50px]', 'fill-white');
                  }}
                />
              )}
              <p className="font-futura mt-7 mb-0 text-xl">{item.url}</p>
            </div>
          ))}
        </div>
      )}
    </article>
  );
}
