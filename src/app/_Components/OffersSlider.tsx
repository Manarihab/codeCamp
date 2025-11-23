"use client";
import { Swiper, SwiperSlide } from "swiper/react";
import { Navigation } from "swiper/modules";
import productImg from "../../assets/Racing Style Tee Sets - Beige _ M 1.png";
import "swiper/css";
import type { Swiper as SwiperType } from "swiper";
import "swiper/css/navigation";
import Image from "next/image";
import { useRef, useState } from "react";
import ProductSliderItem from "./ProductSliderItem";
import { inter } from "../layout";
import OfferItem from "./OfferItem";
export type products = {
  id: number;
  title: string;
  price: number;
  discribtion: string;
  image: unknown;
};

export default function OffersSlider() {
  const products = [
    {
      id: 1,
      title: "Racing Style Tee Sets",
      price: 120,
      discribtion: "Retro-inspired comfort for the track or street.",
      image: productImg,
    },
    {
      id: 2,
      title: "Racing Style Tee Sets",
      price: 120,
      discribtion: "Retro-inspired comfort for the track or street.",
      image: productImg,
    },
    {
      id: 3,
      title: "Racing Style Tee Sets",
      price: 120,
      discribtion: "Retro-inspired comfort for the track or street.",
      image: productImg,
    },
    {
      id: 4,
      title: "Racing Style Tee Sets",
      price: 120,
      discribtion: "Retro-inspired comfort for the track or street.",
      image: productImg,
    },
    {
      id: 5,
      title: "Racing Style Tee Sets",
      price: 120,
      discribtion: "Retro-inspired comfort for the track or street.",
      image: productImg,
    },
    {
      id: 6,
      title: "Racing Style Tee Sets",
      price: 120,
      discribtion: "Retro-inspired comfort for the track or street.",
      image: productImg,
    },
    {
      id: 7,
      title: "Racing Style Tee Sets",
      price: 120,
      discribtion: "Retro-inspired comfort for the track or street.",
      image: productImg,
    },
  ];
  const [isBeginning, setIsBeginning] = useState(true);
  const [isEnd, setIsEnd] = useState(false);
  const swiperRef = useRef<SwiperType | null>(null);
  return (
    <>
    <h3 className={`${inter.className} text-head text-2xl ml-1.5 pt-10 font-semibold`}>Don't Miss Out!</h3>
      <div className="relative px-6 py-8">
        {!isEnd && (
          <button
            onClick={() => swiperRef.current?.slideNext()}
            className="nxt-btn absolute flex items-center justify-center right-2 top-1/2 -translate-y-1/2 
                    bg-white w-16 h-16 cursor-pointer z-10 rounded-full shadow-lg"
          >
            <svg
              width="15"
              height="40"
              viewBox="0 0 15 40"
              fill="none"
              xmlns="http://www.w3.org/2000/svg"
            >
              <path
                d="M1.75024 1.7502L12.6427 19.9186L1.75024 38.0869"
                stroke="#413F9D"
                strokeWidth="3.5"
                strokeLinecap="round"
                strokeLinejoin="round"
              />
            </svg>
          </button>
        )}
        {!isBeginning && (
          <button
            onClick={() => swiperRef.current?.slidePrev()}
            className="prev-btn absolute flex items-center justify-center left-2 top-1/2 -translate-y-1/2 
                    bg-white w-16 h-16 cursor-pointer z-10 rounded-full shadow-lg"
          >
            <svg width="15" height="40" viewBox="0 0 15 40" fill="none" xmlns="http://www.w3.org/2000/svg">
  <path d="M13.2498 1.7502L2.3573 19.9186L13.2498 38.0869" stroke="#413F9D" strokeWidth="3.5" strokeLinecap="round" strokeLinejoin="round"/>
</svg>

          </button>
        )}
        <Swiper
          modules={[Navigation]}
          spaceBetween={2}
          slidesPerView={3.3}
          navigation={{ nextEl: ".nxt-btn", prevEl: ".prev-btn" }}
          onSwiper={(swiper) => {
            swiperRef.current = swiper;
            setIsBeginning(swiper.isBeginning);
            setIsEnd(swiper.isEnd);
          }}
          onSlideChange={(swiper) => {
            setIsBeginning(swiper.isBeginning);
            setIsEnd(swiper.isEnd);
          }}
        >
          {products.map((p) => (
            <SwiperSlide key={p.id}>
              <OfferItem p={p}/>
            </SwiperSlide>
          ))}
        </Swiper>
      </div>
    </>
  );
}
