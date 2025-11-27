"use client";
import { useEffect, useRef, useState } from "react";
import { inter, kavoon } from "../layout";
import { Swiper, SwiperSlide } from "swiper/react";
import { Navigation } from "swiper/modules";
import type { Swiper as SwiperType } from "swiper";
import type { NavigationOptions } from "swiper/types";
import "swiper/css";
import "swiper/css/navigation";
import Link from "next/link";
import { useQuery } from "@tanstack/react-query";
import getCats from "@/APIs/categories";
import { Cats } from "@/interfaces/cats";

export default function Navbar() {
  const nextRef = useRef<HTMLButtonElement | null>(null);
  const prevRef = useRef<HTMLButtonElement | null>(null);
  const swiperRef = useRef<SwiperType | null>(null);
  const [isBeginning, setIsBeginning] = useState(true);
  const [isEnd, setIsEnd] = useState(false);
  const [l, setL] = useState(0)
  const { data, isPending } = useQuery<Cats>({
    queryKey: ["cat"],
    queryFn: async () => await getCats(),
  });
  
  
useEffect(() => {
  if (!swiperRef.current || !prevRef.current || !nextRef.current) return;
  {!isPending &&  data!.data.length >=10 ? setL(10) : setL(data!.data.length)}
  const swiper = swiperRef.current;
  const nav = swiper.params.navigation as NavigationOptions;

  nav.prevEl = prevRef.current;
  nav.nextEl = nextRef.current;

  swiper.navigation.destroy();
  swiper.navigation.init();
  swiper.navigation.update();
}, [data]);
    
  return (
    <>
      <nav className="bg-main fixed w-full z-20 top-0 start-0 ">
        <div className="max-w-screen-xl flex flex-wrap items-center mx-auto p-4">
          <div className={`${kavoon.className} text-white text-2xl mx-3 `}>
            <Link href={'/'}>CodeCamp</Link>
          </div>
          <button
            data-collapse-toggle="navbar-default"
            type="button"
            className="inline-flex items-center p-2 w-10 h-10 justify-center text-sm text-body rounded-base md:hidden hover:bg-neutral-secondary-soft hover:text-heading focus:outline-none focus:ring-2 focus:ring-neutral-tertiary"
            aria-controls="navbar-default"
            aria-expanded="false"
          >
            <span className="sr-only">Open main menu</span>
            <svg
              className="w-6 h-6"
              aria-hidden="true"
              xmlns="http://www.w3.org/2000/svg"
              width={20}
              height={20}
              fill="none"
              viewBox="0 0 24 24"
            >
              <path
                stroke="currentColor"
                strokeLinecap="round"
                strokeWidth={2}
                d="M5 7h14M5 12h14M5 17h14"
              />
            </svg>
          </button>
          <div className="hidden w-full md:block md:w-auto" id="navbar-default">
            <div className="flex items-center justify-between">
              <div>
               <Link href='/'>
                <svg
                  xmlns="http://www.w3.org/2000/svg"
                  width={25}
                  height={25}
                  viewBox="0 0 24 24"
                >
                  <path
                    fill="none"
                    stroke="#fff"
                    strokeLinecap="round"
                    strokeLinejoin="round"
                    strokeWidth={2}
                    d="M20 19v-8.5a1 1 0 0 0-.4-.8l-7-5.25a1 1 0 0 0-1.2 0l-7 5.25a1 1 0 0 0-.4.8V19a1 1 0 0 0 1 1h4a1 1 0 0 0 1-1v-3a1 1 0 0 1 1-1h2a1 1 0 0 1 1 1v3a1 1 0 0 0 1 1h4a1 1 0 0 0 1-1"
                  ></path>
                </svg>
               </Link>
              </div>
              <div className="relative mx-5">
                <input
                  type="search"
                  className="w-2xl mx-3 rounded-s-full rounded-e-full p-1 px-5 bg-white"
                  placeholder="What are you looking for?"
                />
                <div className="absolute top-1 right-4">
                  <svg
                    xmlns="http://www.w3.org/2000/svg"
                    width={24}
                    height={24}
                    viewBox="0 0 24 24"
                  >
                    <path
                      fill="none"
                      stroke="#1E1E1E"
                      strokeLinecap="round"
                      strokeLinejoin="round"
                      strokeWidth={2}
                      d="m20 20l-4.05-4.05m0 0a7 7 0 1 0-9.9-9.9a7 7 0 0 0 9.9 9.9"
                    ></path>
                  </svg>
                </div>
              </div>
              <ul className="flex ml-5 gap-4 items-center">
                <li>
                  <svg
                    xmlns="http://www.w3.org/2000/svg"
                    width={25}
                    height={25}
                    viewBox="0 0 24 24"
                  >
                    <g
                      fill="none"
                      stroke="#fff"
                      strokeLinecap="round"
                      strokeLinejoin="round"
                      strokeWidth={2}
                    >
                      <path d="M3 3h2l.5 3m0 0L7 15h11l3-9z"></path>
                      <circle cx={8} cy={20} r={1}></circle>
                      <circle cx={17} cy={20} r={1}></circle>
                    </g>
                  </svg>
                </li>
                <li>
                  <svg
                    width={25}
                    height={25}
                    viewBox="0 0 40 36"
                    fill="none"
                    xmlns="http://www.w3.org/2000/svg"
                  >
                    <path
                      d="M20 35.35C19.5333 35.35 19.0587 35.2667 18.576 35.1C18.0933 34.9333 17.668 34.6667 17.3 34.3L13.85 31.15C10.3167 27.9167 7.12467 24.7087 4.274 21.526C1.42333 18.3433 -0.0013324 14.8347 9.35016e-07 11C9.35016e-07 7.86667 1.05 5.25 3.15 3.15C5.25 1.05 7.86667 0 11 0C12.7667 0 14.4333 0.374666 16 1.124C17.5667 1.87333 18.9 2.89867 20 4.2C21.1 2.9 22.4333 1.87533 24 1.126C25.5667 0.376667 27.2333 0.00133333 29 0C32.1333 0 34.75 1.05 36.85 3.15C38.95 5.25 40 7.86667 40 11C40 14.8333 38.5833 18.35 35.75 21.55C32.9167 24.75 29.7 27.9667 26.1 31.2L22.7 34.3C22.3333 34.6667 21.9087 34.9333 21.426 35.1C20.9433 35.2667 20.468 35.35 20 35.35ZM18.1 8.2C17.1333 6.83333 16.1 5.79133 15 5.074C13.9 4.35667 12.5667 3.99867 11 4C9 4 7.33333 4.66667 6 6C4.66667 7.33333 4 9 4 11C4 12.7333 4.61667 14.5753 5.85 16.526C7.08333 18.4767 8.55867 20.368 10.276 22.2C11.9933 24.032 13.76 25.7487 15.576 27.35C17.392 28.9513 18.8667 30.268 20 31.3C21.1333 30.2667 22.6087 28.95 24.426 27.35C26.2433 25.75 28.01 24.0333 29.726 22.2C31.442 20.3667 32.9167 18.4753 34.15 16.526C35.3833 14.5767 36 12.7347 36 11C36 9 35.3333 7.33333 34 6C32.6667 4.66667 31 4 29 4C27.4333 4 26.1 4.35867 25 5.076C23.9 5.79333 22.8667 6.83467 21.9 8.2C21.6667 8.53333 21.3833 8.78333 21.05 8.95C20.7167 9.11667 20.3667 9.2 20 9.2C19.6333 9.2 19.2833 9.11667 18.95 8.95C18.6167 8.78333 18.3333 8.53333 18.1 8.2Z"
                      fill="white"
                    />
                  </svg>
                </li>
                <li>
                  <svg
                    xmlns="http://www.w3.org/2000/svg"
                    width={25}
                    height={25}
                    viewBox="0 0 24 24"
                  >
                    <path
                      fill="none"
                      stroke="#fff"
                      strokeLinecap="round"
                      strokeLinejoin="round"
                      strokeWidth={2}
                      d="M12 5c-2 0-6 1.2-6 6v4l-2 2h5m3-12c4.8 0 6 4 6 6v4l2 2h-5M12 5V3M9 17v1c0 1 .6 3 3 3s3-2 3-3v-1m-6 0h6"
                    />
                  </svg>
                </li>
                <li>
                  <svg
                    xmlns="http://www.w3.org/2000/svg"
                    width={25}
                    height={25}
                    viewBox="0 0 24 24"
                  >
                    <g
                      fill="none"
                      stroke="#fff"
                      strokeLinecap="round"
                      strokeLinejoin="round"
                      strokeWidth={2}
                    >
                      <circle cx={12} cy={8} r={5} />
                      <path d="M20 21a8 8 0 1 0-16 0m16 0a8 8 0 1 0-16 0" />
                    </g>
                  </svg>
                </li>
                <li>
                  <svg
                    xmlns="http://www.w3.org/2000/svg"
                    width={25}
                    height={25}
                    viewBox="0 0 24 24"
                  >
                    <path
                      fill="none"
                      stroke="#fff"
                      strokeLinecap="round"
                      strokeLinejoin="round"
                      strokeWidth={2}
                      d="M9.353 3C5.849 4.408 3 7.463 3 11.47A9.53 9.53 0 0 0 12.53 21c4.007 0 7.062-2.849 8.47-6.353C8.17 17.065 8.14 8.14 9.353 3"
                    />
                  </svg>
                </li>
              </ul>
            </div>
          </div>
        </div>
        <div
      className={`${inter.className} absolute px-10 -bottom-12 bg-white z-20  flex left-1/2 -translate-x-1/2 rounded-lg p-3  shadow-md w-[90%]  `}
    >
      
        <button ref={nextRef} disabled={isEnd} className="absolute nxt-btn z-30 cursor-pointer right-2 top-1/2 -translate-y-1/2">
          <svg
            width="24"
            height="24"
            viewBox="0 0 26 28"
            fill="none"
            xmlns="http://www.w3.org/2000/svg"
          >
            <path
              d="M0.466767 27.2176C0.26467 27.0181 0.162754 26.7825 0.161021 26.511C0.159287 26.2395 0.258194 26.0036 0.457739 25.8034L12.4016 13.7061L0.304266 1.76227C0.10217 1.56274 0.000729666 1.32768 -5.4592e-05 1.05709C-0.00083884 0.786505 0.0980605 0.549695 0.296644 0.346662C0.495228 0.143629 0.730288 0.0421886 1.00182 0.0423411C1.27336 0.0424937 1.50922 0.141399 1.70942 0.339058L14.08 12.5527C14.4054 12.874 14.57 13.2538 14.5738 13.6922C14.5775 14.1306 14.4178 14.5126 14.0946 14.838L1.88095 27.2086C1.68142 27.4107 1.44636 27.5121 1.17577 27.5129C0.905186 27.5137 0.668376 27.4148 0.465343 27.2162M11.7507 27.1724C11.5496 26.9738 11.4486 26.7383 11.4478 26.4658C11.447 26.1934 11.5454 25.958 11.7431 25.7597L23.6869 13.6623L11.5896 1.71851C11.3875 1.51898 11.2861 1.28392 11.2853 1.01333C11.2845 0.742747 11.383 0.506412 11.5806 0.304328C11.7783 0.102243 12.0133 0.000803023 12.2858 6.66474e-06C12.5583 -0.000789693 12.7946 0.0976413 12.9948 0.2953L25.3654 12.5089C25.6917 12.8312 25.8559 13.2115 25.8577 13.6499C25.8596 14.0883 25.7003 14.4698 25.3799 14.7942L13.1663 27.1648C12.9668 27.3669 12.7317 27.4683 12.4611 27.4691C12.1906 27.4699 11.9538 27.371 11.7507 27.1724Z"
              fill="#4F4F4F"
            />
          </svg>
        </button>
    

        <button ref={prevRef} disabled={isBeginning} className="absolute z-30 prev-btn cursor-pointer left-2 top-1/2 -translate-y-1/2">
          <svg width="24" height="24" viewBox="0 0 26 28" xmlns="http://www.w3.org/2000/svg">
      <g transform="translate(26 0) scale(-1 1)">
        <path d="M0.466767 27.2176C0.26467 27.0181 0.162754 26.7825 0.161021 26.511C0.159287 26.2395 0.258194 26.0036 0.457739 25.8034L12.4016 13.7061L0.304266 1.76227C0.10217 1.56274 0.000729666 1.32768 -5.4592e-05 1.05709C-0.00083884 0.786505 0.0980605 0.549695 0.296644 0.346662C0.495228 0.143629 0.730288 0.0421886 1.00182 0.0423411C1.27336 0.0424937 1.50922 0.141399 1.70942 0.339058L14.08 12.5527C14.4054 12.874 14.57 13.2538 14.5738 13.6922C14.5775 14.1306 14.4178 14.5126 14.0946 14.838L1.88095 27.2086C1.68142 27.4107 1.44636 27.5121 1.17577 27.5129C0.905186 27.5137 0.668376 27.4148 0.465343 27.2162M11.7507 27.1724C11.5496 26.9738 11.4486 26.7383 11.4478 26.4658C11.447 26.1934 11.5454 25.958 11.7431 25.7597L23.6869 13.6623L11.5896 1.71851C11.3875 1.51898 11.2861 1.28392 11.2853 1.01333C11.2845 0.742747 11.383 0.506412 11.5806 0.304328C11.7783 0.102243 12.0133 0.000803023 12.2858 6.66474e-06C12.5583 -0.000789693 12.7946 0.0976413 12.9948 0.2953L25.3654 12.5089C25.6917 12.8312 25.8559 13.2115 25.8577 13.6499C25.8596 14.0883 25.7003 14.4698 25.3799 14.7942L13.1663 27.1648C12.9668 27.3669 12.7317 27.4683 12.4611 27.4691C12.1906 27.4699 11.9538 27.371 11.7507 27.1724Z" fill="#4F4F4F" />
      </g>
    </svg>
        </button>


{!isPending && <Swiper
  modules={[Navigation]}
  spaceBetween={1}
  slidesPerView={l}
  slidesPerGroup={5}
  observer={true}
observeParents={true}
  navigation={{
    prevEl: prevRef.current,
    nextEl: nextRef.current,
  } as NavigationOptions} 
  onSwiper={(swiper) => {
    swiperRef.current = swiper;

  
    if (prevRef.current && nextRef.current) {
      const nav = swiper.params.navigation as NavigationOptions;
      nav.prevEl = prevRef.current;
      nav.nextEl = nextRef.current;

      
      swiper.navigation.destroy();
      swiper.navigation.init();
      swiper.navigation.update();
    }
  }}
  onSlideChange={(swiper) => {
    setIsBeginning(swiper.isBeginning);
    setIsEnd(swiper.isEnd);
  }}
>
  {!isPending &&
    data!.data.map((cat) => (
      <SwiperSlide key={cat.id} className="w-auto! px-4">
        <Link href={`/categories/${cat.id}`}>{cat.name}</Link>
      </SwiperSlide>
    ))}
</Swiper>}

 





      

    </div>
      </nav>
      
          
    
    </>
  );
}
