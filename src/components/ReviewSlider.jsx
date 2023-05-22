import React from 'react'
import { Swiper, SwiperSlide } from "swiper/react";
import { Pagination } from 'swiper';
import "swiper/css";
import "swiper/css/pagination";
import { peopleDate } from '../constants'

const ReviewSlider = () => {
  return (
    <div>
      <Swiper
      modules={[Pagination]}
      spaceBetween={50}
      slidesPerView={1}
      pagination={{ clickable: true }}
      onSlideChange={() => console.log('slide change')}
      onSwiper={(swiper) => console.log(swiper)}
    >
        {peopleDate.map((content) => (
      <SwiperSlide key={content.image}>
        <div className=' text-center mx-auto'>
            <img src={content.image} alt="" className=' mx-auto rounded-[50%] smml:w-[12%] w-[25%] border-[4px] border-[#feb000] border-solid' />
            <h2 className=' text-[30px] font-semibold mt-[20px]'>{content.title}</h2>
            <h5 className=' text-[#feb000] text-[18px]'>{content.jobTitle}</h5>
            <p className=' text-center mt-[20px] max-w-[46rem] mx-auto text-[#7a808d]'>{content.description}</p>
            
        </div>
      </SwiperSlide>
      ))}
    </Swiper>

    </div>
  )
}

export default ReviewSlider
