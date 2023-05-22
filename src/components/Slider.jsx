import React from "react";
import { banner1, banner2, banner3, headerShape } from "../assets";
import { useState } from "react";
import HomePageSlider from "./HomePageSlider";
import { Swiper, SwiperSlide } from "swiper/react";
import { Pagination } from "swiper";
import "swiper/css";
import "swiper/css/pagination";

const Slider = () => {
  const [toggle, setToggle] = useState(true);

 

  return (
    <>
    <div className=" flex-wrap">

    
      <div className=" headerShape absolute top-[50px]  ">
        <img src={headerShape} alt="" className=" min-w-[90%] w-[20%] " />
      </div>
      <div className=" homeSlider">

      
      <Swiper
        className=" lg:w-[1100px] sm:w-[900px] smml:w-[1000px] "
        modules={[Pagination]}
        spaceBetween={10}
        slidesPerView={1}
        
        pagination={{ clickable: true }}
        onSlideChange={() => onsole.log()}
        onSwiper={(swiper) => console.log()}
      >
          <SwiperSlide>
            <HomePageSlider
              heading="We Are Creative"
              agency="Deneb Agency"
              image={banner1}
            />
          </SwiperSlide>
          <SwiperSlide>
          <HomePageSlider
              heading="We Are Creative"
              agency="Deneb Agency"
              image={banner2}
            />
            </SwiperSlide>
            <SwiperSlide>
            <HomePageSlider
              heading="We Are Creative"
              agency="Deneb Agency"
              image={banner3}
            />
            </SwiperSlide>
      </Swiper>
      </div>
      </div>
    </>
  );
};

export default Slider;
