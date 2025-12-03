import React, { useRef, useState } from 'react';
import { Swiper, SwiperSlide } from 'swiper/react';
import takami from '../assets/img/takami.png'
import vdiyo from '../assets/img/vdiyo.png'
import malchik from '../assets/img/malchik.png'
import kepma from '../assets/img/kepma.png'

import 'swiper/css';
import 'swiper/css/pagination';
import 'swiper/css/navigation';

import { Autoplay, Pagination, Navigation } from 'swiper/modules';

const Hero = () => {
  return (
    <div className='mb-25'>
         <Swiper
        spaceBetween={30}
        centeredSlides={true}
        autoplay={{
          delay: 2500,
          disableOnInteraction: false,
        }}
        pagination={{
          clickable: true,
        }}
        navigation={true}
        modules={[Autoplay, Pagination, Navigation]}
        className="mySwiper"
      >
        <SwiperSlide><img className='w-full' src={takami} alt="" /></SwiperSlide>
        <SwiperSlide><img className='w-full' src={vdiyo} alt="" /></SwiperSlide>
        <SwiperSlide><img className='w-full' src={malchik} alt="" /></SwiperSlide>
        <SwiperSlide><img className='w-full' src={kepma} alt="" /></SwiperSlide>
      </Swiper>
    </div>
  )
}

export default Hero