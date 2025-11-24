import Image from "next/image";
import React, { useState } from "react";
import productImg from "../../assets/Racing Style Tee Sets - Beige _ M 1.png";
import { poppins } from "../layout";
import { Product } from "@/interfaces/latestProd";
import Link from "next/link";

export default function OfferItem({ p }: { p:Product }) {
 
  return (
    <Link href={`ProductDetails/${p.id}`}>
    <div
      className={`${poppins.className} relative bg-white card-shadow rounded-2xl shadow-lg py-4 p-4 w-80 h-115`}
    > <span className="absolute p-1 top-0 right-0 left-0 bg-[#FF1313] z-10 text-2xl font-semibold rounded-tl-2xl rounded-tr-2xl text-white flex justify-center items-center">
        2:59:59
    </span>
      <div className="relative">
        <div className="absolute p-3 border border-main bottom-2 right-2 rounded-full">
          <svg
            width="30"
            height="30"
            viewBox="0 0 38 34"
            fill="none"
            xmlns="http://www.w3.org/2000/svg"
          >
            <path
              d="M35.7467 11.5378C35.7526 14.1727 34.7375 16.7074 32.9145 18.6099C28.7346 22.9439 24.6798 27.4628 20.3458 31.6375C19.3509 32.5793 17.7738 32.5451 16.8235 31.5604L4.33181 18.6116C0.556062 14.6971 0.556062 8.37854 4.33181 4.4658C5.22419 3.52914 6.29749 2.78345 7.48664 2.27394C8.6758 1.76443 9.95603 1.50171 11.2497 1.50171C12.5434 1.50171 13.8237 1.76443 15.0128 2.27394C16.202 2.78345 17.2753 3.52914 18.1677 4.4658L18.6232 4.93499L19.0769 4.4658C19.9704 3.53042 21.0439 2.78546 22.2327 2.27577C23.4216 1.76608 24.7013 1.5022 25.9949 1.5C28.5976 1.5 31.0857 2.56851 32.9128 4.4658C34.7364 6.36797 35.7522 8.90272 35.7467 11.5378Z"
              stroke="#413F9D"
              strokeWidth="3"
              strokeLinejoin="round"
            />
          </svg>
        </div>
        <Image
          src={p.images[0].url}
          width={300}
          height={300}
          className="w-full rounded-xl object-cover"
          alt=""
          unoptimized
        />
      </div>
      <div className="flex pb-3">
          <h3 className="text-lg w-3/4 text-sec mt-4 line-clamp-1 ">{p.name}</h3>
      <h2 className="text-2xl w-1/4 text-sec  mt-4 ">$120</h2>
      </div>
      

      <div className="flex gap-1.5 items-center">
        <p className="text-light-gray text-xs w-50 line-clamp-2 mt-2 mb-5">{p.description}</p>
        <button className="bg-main2 text-xs gap-1 text-white py-3 rounded-lg w-50 flex justify-center items-center ">
          <svg
            width="30"
            height="27"
            viewBox="0 0 30 27"
            fill="none"
            xmlns="http://www.w3.org/2000/svg"
          >
            <path
              d="M8.75293 22.6816C9.62834 22.6816 10.3387 23.3912 10.3389 24.2666C10.3389 25.1421 9.62843 25.8525 8.75293 25.8525C7.87755 25.8524 7.16797 25.142 7.16797 24.2666C7.16811 23.3913 7.87764 22.6818 8.75293 22.6816Z"
              fill="#201F4A"
              stroke="white"
              strokeWidth="2"
            />
            <path
              d="M24.2646 22.6816C25.1401 22.6816 25.8504 23.3912 25.8506 24.2666C25.8506 25.1421 25.1401 25.8525 24.2646 25.8525C23.3893 25.8524 22.6797 25.142 22.6797 24.2666C22.6798 23.3913 23.3894 22.6818 24.2646 22.6816Z"
              fill="#201F4A"
              stroke="white"
              strokeWidth="2"
            />
            <path
              d="M1 1H4.44696L5.48105 6.17043M5.48105 6.17043L7.89392 18.2348H25.1287L28.5757 6.17043H5.48105Z"
              stroke="white"
              strokeWidth="2"
              strokeLinecap="round"
              strokeLinejoin="round"
            />
          </svg>
          Add to cart
        </button>
      </div>
    </div>
    </Link>
  );
}
