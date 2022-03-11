import React, { useState, useEffect } from "react";
import { Swiper, SwiperSlide } from "swiper/react";
import { Controller } from "swiper";
import SectionHeader from "../../sectionHeader/SectionHeader";
import { ReactComponent as ArrowRight } from "../../../img/arrow-right.svg";
import { ReactComponent as ArrowLeft } from "../../../img/arrow-left.svg";
import sanityClient from "../../../Client.js";
import EducationItem from "./EducationItem";

import "./education.scss";
import "swiper/scss";
import "swiper/scss/navigation";

const Education = () => {
  const [educationData, setEducationData] = useState(null);
  const [eduSwiper, setEduSwiper] = useState(null);
  // const eduSwiper = useSwiper();

  useEffect(() => {
    sanityClient
      .fetch(
        `*[_type == "resume"][0]{
          education
        }`
      )
      .then((data) => {
        setEducationData(data);
        // console.log(data);
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

          <div className="resumeSection__swiperNavigation">
            <div
              className="resumeSection__swiperNavigationItem"
              onClick={() => eduSwiper.slidePrev()}
            >
              <ArrowLeft />
            </div>
            <div
              className="resumeSection__swiperNavigationItem"
              onClick={() => eduSwiper.slideNext()}
            >
              <ArrowRight />
            </div>
          </div>

          <div className="resumeSection__timeline"></div>

          <Swiper
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
            loop={true}
            spaceBetween={10}
            modules={[Controller]}
            onSwiper={setEduSwiper}
            controller={{ control: eduSwiper }}
            className="resumeSection__eduList"
          >
            {educationData.education.eduList.map((item) => (
              <SwiperSlide key={item._key}>
                <EducationItem eduItemData={item} />
              </SwiperSlide>
            ))}
          </Swiper>
        </article>
      )}
    </>
  );
};

export default Education;
