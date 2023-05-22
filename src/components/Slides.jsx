import React, { useState } from "react";
import { Swiper, SwiperSlide } from "swiper/react";
import SwiperCore, { Navigation, Pagination } from "swiper/core";
import "swiper/swiper.min.css";

import { work } from "../constants";

SwiperCore.use([Navigation, Pagination]);
const Slides = () => {
    const [swiper, setSwiper] = useState(null);

    const handleResize = () => {
      swiper?.update();
    };
  return (
    <div className="max-w-[1100px] mx-auto ssms:px-[10px] smml:px-[20px] lg:px-0 mt-[3rem]">
    <Swiper
      onSwiper={(swiper) => setSwiper(swiper)}
      spaceBetween={10}
        slidesPerView={3}
        breakpoints={{
          0:{
            slidesPerView: 1,
            spaceBetween: 10,
          },
          480: {
            slidesPerView: 1,
            spaceBetween: 10,
          },
          720: {
            slidesPerView: 2,
            spaceBetween: 10,
          },
          1080: {
            slidesPerView: 3,
            spaceBetween: 10,
          },
        }}
      navigation
      pagination={{ clickable: true }}
    >
      {work.map((content) => (
        <SwiperSlide key={content.id}>
          <div className="slide-container mb-[20px] smml:w-[100%] ss:w-[70%] ssms:w-[95%] md:w-[92%] w-[80%] rounded-[10px] mx-auto  pb-[30px]  circle1  ">
            <img src={content.Image} alt="" className="slide-image rounded-t-lg ss:w-[100%] w-[100%]" />
            <h2 className="slide-title text-[22px] font-medium mt-[15px] ml-[20px]">{content.title}</h2>
            <p className="slide-description ml-[20px] text-[15px] text-[#7a808d] ">{content.description}</p>
          </div>
        </SwiperSlide>
      ))}
    </Swiper>
    </div>
  )
}

export default Slides
