import React, { useRef, useState } from 'react';
// Import Swiper React components
import { Swiper, SwiperSlide } from 'swiper/react';

// Import Swiper styles
import 'swiper/css';
import 'swiper/css/pagination';

import './styles.css';

// import required modules
import { Pagination } from 'swiper/modules';

// Import Image
import imageExam from './image/pngwing.png'

export default function App() {
  return (
    <>
    <header className="p-1">
      <div className='flex items-center justify-center'>
    <h1 className='text-2xl font-bold  text-orange-400 my-3'>PROJECT'S</h1>
    </div>
          </header>
      <Swiper
        pagination={{
          dynamicBullets: true,
        }}
        modules={[Pagination]}
        className="mySwiper"
        style={{ maxWidth: '1875px', maxHeight: '770px' }}
      >
        <SwiperSlide><img src={imageExam} alt="projects__one" /></SwiperSlide>
        <SwiperSlide><img src={imageExam} alt="projects__one" /></SwiperSlide>
        <SwiperSlide><img src={imageExam} alt="projects__one" /></SwiperSlide>
        <SwiperSlide><img src={imageExam} alt="projects__one" /></SwiperSlide>
        <SwiperSlide><img src={imageExam} alt="projects__one" /></SwiperSlide>
        <SwiperSlide><img src={imageExam} alt="projects__one" /></SwiperSlide>
        <SwiperSlide><img src={imageExam} alt="projects__one" /></SwiperSlide>
        <SwiperSlide><img src={imageExam} alt="projects__one" /></SwiperSlide>
        <SwiperSlide><img src={imageExam} alt="projects__one" /></SwiperSlide>
      </Swiper>

    </>
  );
}