"use client";

import { Swiper, SwiperSlide } from "swiper/react";
import { FreeMode } from "swiper/modules";
import sliderImg from "../../assets/image.png";
import "swiper/css";
import "swiper/css/free-mode";
import Image from "next/image";
import "../../CSS/Slider2.css"; // ملف CSS خارجي

export default function Slider() {
  // ===== الداتا اللي انت عاملها =====
  const Images = [
    { id: 1, image: sliderImg },
    { id: 2, image: sliderImg },
    { id: 3, image: sliderImg },
    { id: 4, image: sliderImg },
  ];

  return (
    <div className="sliderWrapper"> 
      {/* من CSS الخارجي */}
          <h2 style={{color:"black",fontSize: '24px', fontWeight:"500"}}>Ofers</h2>

      <Swiper
        slidesPerView={3}
        spaceBetween={20}
        modules={[FreeMode]}
        freeMode={true}
      >
        {Images.map((item) => (
          <SwiperSlide key={item.id} className="slide">
            <div className="box">
              <Image
                src={item.image}
                width={300}
                height={200}
                alt="product"
                className="image"
              />
            </div>
          </SwiperSlide>
        ))}
      </Swiper>
    </div>
  );
}
