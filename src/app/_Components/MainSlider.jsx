'use client'
import React, { useRef, useState } from 'react';
import { Swiper, SwiperSlide } from 'swiper/react';
import Image from 'next/image';
// استيراد Swiper CSS
import '../../CSS/slider.css';
import 'swiper/css';
import 'swiper/css/pagination';
import 'swiper/css/navigation';

// استيراد الصور
import baner1 from "../../assete/banner_home1.png";
import baner2 from "../../assete/banner_home2.png";

// استيراد الموديولات المطلوبة
import { Pagination, Navigation, Autoplay } from 'swiper/modules';

export default function Slider() {
  
    const swiperRef = useRef(null);
  return (
    <div className="slider-wrapper relative -mt-6 p-12 mx-auto w-5xl">
       
          <button
            onClick={() => swiperRef.current?.slideNext()}
            className="nxt-btn absolute flex items-center justify-center -right-10 top-1/2 -translate-y-1/2 
                    bg-main w-16 h-16 cursor-pointer z-10 rounded-full shadow-lg"
          >
            
<svg width="13" height="33" viewBox="0 0 13 33" fill="none" xmlns="http://www.w3.org/2000/svg">
    <path
      d="M2.41277 1.75027L11.25 16.4906L2.41277 31.2308"
      stroke="#FFFBFB"
      strokeWidth="3.5"
      strokeLinecap="round"
      strokeLinejoin="round"
    />
  </svg>
          </button>
       
        
          <button
            onClick={() => swiperRef.current?.slidePrev()}
            className="prev-btn absolute flex items-center justify-center -left-10 top-1/2 -translate-y-1/2 
                    bg-main w-16 h-16 cursor-pointer z-10 rounded-full shadow-lg"
          >
            <svg width="13" height="33" viewBox="0 0 13 33" fill="none" xmlns="http://www.w3.org/2000/svg">
<path d="M10.5872 1.75027L1.74994 16.4906L10.5872 31.2308" stroke="#FFFBFB" strokeWidth="3.5" strokeLinecap="round" strokeLinejoin="round"/>
</svg>


          </button>
        
      <Swiper
        modules={[Pagination, Autoplay]}
        pagination={{ dynamicBullets: true, clickable: true }}
        navigation={true}
        loop={true}
        autoplay={{
          delay: 3000, // كل 3 ثواني يتغير السلايد
          disableOnInteraction: false, // لو المستخدم ضغط على السلايدر، الاستمرار في autoplay
        }}
        onSwiper={(swiper) => {
            swiperRef.current = swiper;
            
          }}
        className="mySwiper"
      >
        <SwiperSlide>
          <Image src={baner1} alt="banner1" className='w-100 rounded-xl' layout="responsive" />
        </SwiperSlide>
        <SwiperSlide>
          <Image src={baner2} alt="banner2" className='w-100 rounded-xl' layout="responsive" />
        </SwiperSlide>
      </Swiper>
    </div>
  );
}
