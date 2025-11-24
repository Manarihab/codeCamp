"use client";
import React, { useState } from "react";
import { inter, poppins } from "@/app/layout";
import { SingleProd } from "@/interfaces/singleProd";

export default function ProductOptions({ prod }: { prod:SingleProd }) {
  const [color, setColor] = useState("");
  const [size, setSize] = useState("");
  const rate:number = 3.5
  // const starsnum = Math.floor(parseFloat(${rate}));
  // const hasHalf = parseFloat() % 1 !== 0;
  // const emptyStars = 5 - starsnum - (hasHalf ? 1 : 0);
  const [qty, setQty] = useState(1);
  console.log(prod);
  
  return (
    <div className={`${inter.className} pt-4`}>
      <p className="text-xs text-light-gray font-light pb-2">
        <span className="font-medium text-sec"> Availability:</span> Only{" "}
        2 in Stock
      </p>
      <h1 className="text-2xl  pb-1">{prod.name}</h1>
      <div className="flex gap-2 items-center">
        {Array(3)
          .fill(0)
          .map((_, i) => (
            <span key={i}>
              <svg
                width="24"
                height="24"
                viewBox="0 0 29 28"
                fill="none"
                xmlns="http://www.w3.org/2000/svg"
              >
                <path
                  d="M14.2656 0L17.6333 10.3647H28.5315L19.7147 16.7705L23.0824 27.1353L14.2656 20.7295L5.44885 27.1353L8.81656 16.7705L-0.00022316 10.3647H10.8979L14.2656 0Z"
                  fill="#413F9D"
                />
              </svg>
            </span>
          ))}
       
          <span>
            <svg
              width="24"
              height="24"
              viewBox="0 0 29 28"
              fill="none"
              xmlns="http://www.w3.org/2000/svg"
            >
              <path
                d="M14.2656 0L17.6333 10.3647H28.5315L19.7147 16.7705L23.0824 27.1353L14.2656 20.7295L5.44885 27.1353L8.81656 16.7705L-0.00022316 10.3647H10.8979L14.2656 0Z"
                fill="url(#paint0_linear_1141_676)"
              />
              <defs>
                <linearGradient
                  id="paint0_linear_1141_676"
                  x1="-0.73631"
                  y1="17.2739"
                  x2="29.2656"
                  y2="17.5"
                  gradientUnits="userSpaceOnUse"
                >
                  <stop offset="0.5" stopColor="#413F9D" />
                  <stop offset="0.5" stopColor="#C3C3C3" />
                </linearGradient>
              </defs>
            </svg>
          </span>
       
        {Array(1)
          .fill(0)
          .map((_, i) => (
            <span key={i} className="">
              <svg
                width="24"
                height="24"
                viewBox="0 0 29 28"
                fill="none"
                xmlns="http://www.w3.org/2000/svg"
              >
                <path
                  d="M14.2656 0L17.6333 10.3647H28.5315L19.7147 16.7705L23.0824 27.1353L14.2656 20.7295L5.44885 27.1353L8.81656 16.7705L-0.00022316 10.3647H10.8979L14.2656 0Z"
                  fill="#C3C3C3"
                />
              </svg>
            </span>
          ))}{" "}
        <p className="text-xs text-light-gray font-light">{rate}/5.0</p>
      </div>
      
      {prod.color.length != 0 &&<>
      <h2 className="text-xl font-semibold mt-5 mb-3">Color</h2>
       <div className="flex gap-4 row w-[90%]">
        {prod.color.map((c) => (
          <button
            key={c}
            onClick={() => setColor(c)}
            className={`px-1 py-2 cursor-pointer bg-[#D9D9D9] rounded-xl text-lg  w-1/4 ${
              color === c ? "border" : ""
            } `}
          >
            {c}
          </button>
        ))}
      </div>
      
      <hr className="mt-8 w-[90%] text-[#8D8D8D] bg-[#8D8D8D] font-extralight" /> </>}
      {prod.size.length !=0 && <>
      <h2 className="text-xl font-semibold mt-5 mb-2">Size</h2>
      <div className="flex gap-4 gap-y-1 row w-[90%]">
        <div>
          {" "}
          {prod.size.map((s) => (
            <button
              key={s}
              onClick={() => setSize(s)}
              className={`px-4 py-2 cursor-pointer  text-light-gray w-1/3
      ${size === s ? "text-main border border-main" : ""}`}
            >
              {s}
            </button>
          ))}
        </div>
      </div>
      
      </>}
      
      <hr className="mt-6 w-[90%] text-[#F0F0F0] bg-[#8D8D8D] font-extralight" />
      <p className="text-[#191919] text-xs font-light mt-3">
        USD(incl. of all taxes)
      </p>
      <div className={`flex gap-3 items-center  ${poppins.className}`}>
        <div className="text-2xl ">120$</div>
        {/* {prod.oldPrice && (
          <div className="text-xl text-[#d9d9d9] line-through">
            ${prod.oldPrice}
          </div>
        )} */}
      </div>
      <div className="flex gap-5">
        <div className="flex ">
            <button disabled={qty<=1 && true} onClick={()=>setQty(qty-1)} className={`border border-[#f0f0f0] cursor-pointer p-2 px-4 font-medium ${qty<=1 && 'text-gray-300'} text-xl`}>-</button>
            <div className="border border-[#f0f0f0] p-2 px-4 font-medium  text-xl">{qty}</div>
            <button  onClick={()=>setQty(qty+1)} className={`border border-[#f0f0f0] cursor-pointer p-2 px-4 font-medium  text-xl`}>+</button>
        </div>
        <button className="bg-main hover:bg-main2 transition-all duration-300 text-white px-4 py-2 rounded-lg cursor-pointer w-1/4">Buy Now</button>
        <button className="text-main border hover:bg-main transition-all duration-300 hover:text-white border-main px-4 py-2 rounded-lg cursor-pointer w-1/4 ">Add to Cart</button>
      </div>
    </div>
  );
}
