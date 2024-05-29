import React from 'react'
import { Swiper, SwiperSlide } from 'swiper/react';
import 'swiper/css';
import One from "../assets/1.png"
import two from "../assets/2.png"
import three from "../assets/3.png"
import four from "../assets/4.png"
import  five from "../assets/5.png"
import six from "../assets/6.png"
import seven from "../assets/7.png"
import eight from "../assets/8.png"
import TEN from "../assets/9.png"
export const Sliderpage1 = () => {
  return (
    <Swiper
    spaceBetween={20}
    slidesPerView={2}
    onSlideChange={() => console.log('slide change')}
    onSwiper={(swiper) => console.log(swiper)}
  >
    
    <SwiperSlide ><img  className = "" src={One} alt="" /> <h4 className='my-1'> MANGO</h4></SwiperSlide>
    <SwiperSlide><img src={two} alt="" /> <h4 className='my-1'>COWBOY </h4></SwiperSlide>
    <SwiperSlide> <img src={three} alt="" /><h4 className='my-1'>WEAR WELL </h4></SwiperSlide>
    <SwiperSlide> <img src={four} alt="" /><h4 className='my-1'> TRADJINI</h4></SwiperSlide>
    <SwiperSlide><img src={five} alt="" /><h4 className='my-1'> KLUB</h4></SwiperSlide>
    <SwiperSlide><img src={TEN} alt="" /><h4 className='my-1'>BRITANNIA </h4></SwiperSlide>
    <SwiperSlide> <img src= {six} alt="" /><h4 className='my-1'>IKEA</h4></SwiperSlide>
  
  </Swiper>
  )
}
