import {PortableTextBlock} from 'next-sanity';
import Image from 'next/image';
import {useState} from 'react';
import type {Swiper as SwiperType} from 'swiper';
import {A11y, Keyboard, Navigation} from 'swiper/modules';
import {Swiper, SwiperSlide} from 'swiper/react';
import {EducationSectionQueryResult} from '../../../sanity.types';
import SectionHeader from '../SectionHeader';
import 'swiper/css';
import 'swiper/css/navigation';

export default function ResumeEducation({data}: {data: EducationSectionQueryResult}) {
  const {sectionHeader, eduList} = data || {};
  const {mainHeader, backgroundHeader} = sectionHeader || {};
  const [eduSwiper, setEduSwiper] = useState<SwiperType | null>(null);

  return (
    <article className="relative mb-36 pt-24 md:pt-16">
      {mainHeader && backgroundHeader && (
        <SectionHeader
          header={mainHeader as PortableTextBlock[]}
          backgroundHeader={backgroundHeader}
        />
      )}

      {eduList && eduList.length > 0 && (
        <>
          <nav className="absolute top-[200px] right-0 z-10 flex items-center justify-end gap-5 sm:top-[190px] md:top-[160px]">
            <div className="hover:cursor-pointer" onClick={() => eduSwiper?.slidePrev()}>
              <Image
                src={'/arrow-left.svg'}
                alt="Navigation arrow prev"
                className="hover:translate-x-[-5px]"
                width={23}
                height={18}
              />
            </div>
            <div className="hover:cursor-pointer" onClick={() => eduSwiper?.slideNext()}>
              <Image
                src={'/arrow-right.svg'}
                className="hover:translate-x-[5px]"
                alt="Navigation arrow next"
                width={23}
                height={18}
              />
            </div>
          </nav>

          <div className="absolute top-[246px] left-[-40px] z-0 w-[calc(100%+80px)] border-t border-white after:absolute after:top-[-1px] after:left-full after:w-[calc((100vw-var(--site-max-width))/2)] after:border-t after:border-white after:content-[''] md:top-[214px] xl:top-[223px] xl:left-[-56px] xl:w-[calc(100%+112px)]"></div>

          <Swiper
            onSwiper={setEduSwiper}
            navigation={false}
            slidesPerView={1}
            breakpoints={{
              576: {
                slidesPerView: 2,
              },
              768: {
                slidesPerView: 3,
              },
            }}
            keyboard={{
              enabled: true,
            }}
            loop={false}
            spaceBetween={10}
            modules={[Navigation, Keyboard, A11y]}
            className="hover:cursor-pointer"
          >
            {eduList.map((item) => (
              <SwiperSlide key={item._key}>
                <div className="relative z-0 pt-[45px] before:absolute before:top-0 before:z-10 before:h-[18px] before:w-[18px] before:bg-[url('/timeline-bullet.svg')] before:content-[''] hover:before:bg-[url('/timeline-bullet-hover.svg')] sm:max-w-[260px]">
                  <h3 className="mt-[18px] mb-2 text-[18px] font-[700]">{item.degree}</h3>
                  <span className="text-secondary">{item.graduationDate}</span>
                  {item.content &&
                    item.content.split('\n\n').map((str, index) => (
                      <p key={index} className={'mx-0 my-2.5 text-sm'}>
                        {index === 1 && <span className="font-[700]">F: </span>}
                        {index === 2 && <span className="font-[700]">S: </span>}
                        {str}
                      </p>
                    ))}
                </div>
              </SwiperSlide>
            ))}
          </Swiper>
        </>
      )}
    </article>
  );
}
