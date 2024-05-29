import React from 'react'
import { Swiper, SwiperSlide } from 'swiper/react';
import 'swiper/css';
export const Sliderpage = () => {
  return (
    <Swiper
      spaceBetween={50}
      slidesPerView={3}
      onSlideChange={() => console.log('slide change')}
      onSwiper={(swiper) => console.log(swiper)}
    >
      <SwiperSlide className=' w-full '> 
      <div className='w-full  flex     my-28' >
         <h1 className=' text-[9rem]  w-96' > CONSULTING AND STRATEGY</h1>
         <p className='w-1'>MAEKET RESERCH STAKEHOLDER WORKSHOPS PRODUCT WORKSHOPS PRODUCT STRATEGY AND ROADMAPPLING  <span> TECHNOLOGY CONSULTING AND PLATFORM PLANNING  GTM STRATEGY</span></p>
        </div></SwiperSlide>
      <SwiperSlide>Slide 2</SwiperSlide>
      <SwiperSlide>Slide 3</SwiperSlide>
      <SwiperSlide>Slide 4</SwiperSlide>
      <SwiperSlide>Slide 4</SwiperSlide>
      <SwiperSlide>Slide 4</SwiperSlide>
      <SwiperSlide>Slide 4</SwiperSlide>
      <SwiperSlide>Slide 4</SwiperSlide>
      ...
    </Swiper>
  )
}

