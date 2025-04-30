'use client';

import {useNav} from '@/app/hooks/useNav';
import {PortableTextBlock} from 'next-sanity';
import {ReactSVG} from 'react-svg';
import {ContactSectionQueryResult} from '../../../sanity.types';
import ContactForm from '../forms/ContactForm';
import SectionHeader from '../SectionHeader';

export default function Contact({data}: {data: ContactSectionQueryResult}) {
  const sectionRef = useNav('Contact');
  const {sectionId, sectionHeader, content, contactDetails} = data || {};
  const {mainHeader, backgroundHeader} = sectionHeader || {};

  return (
    <section
      id={sectionId || 'contact'}
      ref={sectionRef}
      className="flex flex-col justify-center pt-14 pb-20 text-sm xl:min-h-[60vh]"
    >
      {mainHeader && backgroundHeader && (
        <SectionHeader
          header={mainHeader as PortableTextBlock[]}
          backgroundHeader={backgroundHeader}
          classMainHeader="-translate-y-full sm:-translate-y-1/3 md:-translate-y-1/4"
        />
      )}

      {content && contactDetails && contactDetails.length > 0 && (
        <div className="flex gap-16">
          <div className="flex-1/3">
            <p className="mb-9 leading-5">{content}</p>
            {contactDetails.map((item, index) => (
              <div className="mx-0 my-6 flex items-center gap-3.5" key={index}>
                {item.iconURL && (
                  <ReactSVG
                    src={item.iconURL}
                    beforeInjection={(svg) => {
                      svg.classList.add('hover:fill-primary', 'h-[18px]', 'w-[20px]', 'fill-white');
                    }}
                  />
                )}
                {index === 2 ? (
                  <a className="hover:text-primary" href={`mailto:${item.url}`}>
                    {item.url}
                  </a>
                ) : (
                  <p className="m-0">{item.url}</p>
                )}
              </div>
            ))}
          </div>
          <div className="flex-2/3">
            <ContactForm />
          </div>
        </div>
      )}
    </section>
  );
}
