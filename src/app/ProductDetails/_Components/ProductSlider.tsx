"use client";
import Image from "next/image";
import "swiper/css";
import "swiper/css/navigation";
import React, { useRef, useState } from "react";
import type { Swiper as SwiperType } from "swiper";
import { Navigation } from "swiper/modules";
import { Swiper } from "swiper/react";
import { SwiperSlide } from "swiper/react";
import {  Img } from "@/interfaces/singleProd";

export default function ProductSlider({ images }: { images:Img[] }) {
  console.log(images);
  
  const swiperRef = useRef<SwiperType | null>(null);
  return (
    <div className="w-full h-full py-16 px-8 items-center rounded-2xl shadow-lg">
      <div className="relative flex items-center justify-center h-80 rounded-2xl">
        <button
          onClick={() => swiperRef.current?.slideNext()}
          className="nxt-btn absolute flex items-center justify-center -right-6 top-1/2 -translate-y-1/2 
                    bg-main w-9 h-9 cursor-pointer z-10 rounded-full shadow-lg"
        >
          <svg
            width="11"
            height="19"
            viewBox="0 0 11 19"
            fill="none"
            xmlns="http://www.w3.org/2000/svg"
          >
            <path
              d="M1.75 1.75001L8.37791 9.46735L1.75 17.1847"
              stroke="#FFFBFB"
              strokeWidth="3"
              strokeLinecap="round"
              strokeLinejoin="round"
            />
          </svg>
        </button>

        <button
          onClick={() => swiperRef.current?.slidePrev()}
          className="prev-btn absolute flex items-center justify-center -left-6 top-1/2 -translate-y-1/2 
                    bg-main w-9 h-9 cursor-pointer z-10 rounded-full shadow-lg"
        >
          <svg
            width="11"
            height="19"
            viewBox="0 0 11 19"
            fill="none"
            xmlns="http://www.w3.org/2000/svg"
          >
            <path
              d="M8.37793 1.75001L1.75002 9.46735L8.37793 17.1847"
              stroke="#FFFBFB"
              strokeWidth="3"
              strokeLinecap="round"
              strokeLinejoin="round"
            />
          </svg>
        </button>

        <Swiper
          modules={[Navigation]}
          slidesPerView={1}
          navigation={{ nextEl: ".nxt-btn", prevEl: ".prev-btn" }}
          loop={true}
          className="w-full h-full"
        >
          {images.map((image,i) => (
            <SwiperSlide key={i}>
              <Image
                width={350}
                height={350}
                src={image.url}
                className="w-full object-cover"
                alt=""
                  unoptimized
              />
            </SwiperSlide>
          ))}
        </Swiper>
      </div>
    </div>
  );
}
