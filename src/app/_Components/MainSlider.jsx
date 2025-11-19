'use client'
import React from 'react';
import { Swiper, SwiperSlide } from 'swiper/react';
import Image from 'next/image';

// استيراد Swiper CSS
import './CSS/slider.css';
import 'swiper/css';
import 'swiper/css/pagination';
import 'swiper/css/navigation';

// استيراد الصور
import baner1 from "./assete/banner_home1.png";
import baner2 from "./assete/banner_home2.png";

// استيراد الموديولات المطلوبة
import { Pagination, Navigation, Autoplay } from 'swiper/modules';

export default function Slider() {
  return (
    <div className="slider-wrapper">
      <Swiper
        modules={[Pagination, Navigation, Autoplay]}
        pagination={{ dynamicBullets: true, clickable: true }}
        navigation={true}
        loop={true}
        autoplay={{
          delay: 3000, // كل 3 ثواني يتغير السلايد
          disableOnInteraction: false, // لو المستخدم ضغط على السلايدر، الاستمرار في autoplay
        }}
        className="mySwiper"
      >
        <SwiperSlide>
          <Image src={baner1} alt="banner1" layout="responsive" />
        </SwiperSlide>
        <SwiperSlide>
          <Image src={baner2} alt="banner2" layout="responsive" />
        </SwiperSlide>
      </Swiper>
    </div>
  );
}
