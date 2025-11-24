"use client";
import { inter } from "@/app/layout";
import { useState } from "react";
import { Progress } from "@/components/ui/progress";
import { SingleProd } from "@/interfaces/singleProd";

export default function ProductDetailsTabs({prod}:{prod:SingleProd}) {
  const [activeTab, setActiveTab] = useState("description");
  // const starsnum = Math.floor(parseFloat(prod.rating));
  // const hasHalf = parseFloat(prod.rating) % 1 !== 0;
  // const emptyStars = 5 - starsnum - (hasHalf ? 1 : 0);

  return (
    <div className={`my-16 ${inter.className} text-[#191919]`}>
      <div className="flex justify-center border-b border-[#f0f0f0] my-10 font-medium">
        <div className="-ml-30">
            <button
          onClick={() => setActiveTab("description")}
          className={`px-2 cursor-pointer mx-2 py-2 ${
            activeTab === "description" ? "border-b-2 border-main" : ""
          }`}
        >
          Description
        </button>

        <button
          onClick={() => setActiveTab("reviews")}
          className={`px-2 cursor-pointer mx-2 py-2 ${
            activeTab === "reviews" ? "border-b-2 border-main" : ""
          }`}
        >
          Reviews
        </button>
        </div>
      </div>

      {activeTab === "description" && (
        <div className="mt-4 font-light w-2/3 mx-auto text-xl">
          {prod.description}
        </div>
      )}

      {activeTab === "reviews" && (
        <div className="mt-4 flex gap-5 w-2/3 mx-auto ">
          <div className="w-1/2">
            <h4 className="font-medium text-xl pb-2">Overall Rating</h4>
            <p className="text-sm pb-3">rating and reviews are verified and are from people who use the service</p>
            <div className="flex justify-center items-center">
                <div className="w-1/4 flex-col items-center">
                <span className="font-bold  text-5xl">3.5</span>
                 <div className="flex gap-1 mt-3 items-center">
  {Array(3)
    .fill(0)
    .map((_, i) => (
      <span key={i}>
        <svg
          width="14"
          height="14"
          viewBox="0 0 29 28"
          fill="none"
          xmlns="http://www.w3.org/2000/svg"
        >
          <path
            d="M14.2656 0L17.6333 10.3647H28.5315L19.7147 16.7705L23.0824 27.1353L14.2656 20.7295L5.44885 27.1353L8.81656 16.7705L-0.00022316 10.3647H10.8979L14.2656 0Z"
            fill="#FFD700"   // GOLD
          />
        </svg>
      </span>
    ))}

 
    <span>
      <svg
        width="14"
        height="14"
        viewBox="0 0 29 28"
        fill="none"
        xmlns="http://www.w3.org/2000/svg"
      >
        <path
          d="M14.2656 0L17.6333 10.3647H28.5315L19.7147 16.7705L23.0824 27.1353L14.2656 20.7295L5.44885 27.1353L8.81656 16.7705L-0.00022316 10.3647H10.8979L14.2656 0Z"
          fill="url(#halfStar)"
        />
        <defs>
          <linearGradient
            id="halfStar"
            x1="-0.73631"
            y1="17.2739"
            x2="29.2656"
            y2="17.5"
            gradientUnits="userSpaceOnUse"
          >
            <stop offset="0.5" stopColor="#FFD700" />   {/* gold */}
            <stop offset="0.5" stopColor="#C3C3C3" />   {/* gray */}
          </linearGradient>
        </defs>
      </svg>
    </span>
 

  {Array(1)
    .fill(0)
    .map((_, i) => (
      <span key={i}>
        <svg
          width="14"
          height="14"
          viewBox="0 0 29 28"
          fill="none"
          xmlns="http://www.w3.org/2000/svg"
        >
          <path
            d="M14.2656 0L17.6333 10.3647H28.5315L19.7147 16.7705L23.0824 27.1353L14.2656 20.7295L5.44885 27.1353L8.81656 16.7705L-0.00022316 10.3647H10.8979L14.2656 0Z"
            fill="#C3C3C3"   // gray
          />
        </svg>
      </span>
    ))}

                 </div>
                 <p className="text-lg text-light-gray mt-2">2,256,896</p>
                </div>
                <div className="w-3/4">
                <div className="flex gap-2 justify-center items-center">
                  <span className=" font-medium">5</span>
                  <Progress value={77} className="w-[80%]"/>
                </div>
                <div className="flex gap-2 justify-center items-center">
                  <span className=" font-medium">4</span>
                  <Progress value={60} className="w-[80%]"/>
                </div>
                <div className="flex gap-2 justify-center items-center">
                  <span className=" font-medium">3</span>
                  <Progress value={15} className="w-[80%]"/>
                </div>
                <div className="flex gap-2 justify-center items-center">
                  <span className=" font-medium">2</span>
                  <Progress value={17} className="w-[80%]"/>
                </div>
                <div className="flex gap-2 justify-center items-center">
                  <span className=" font-medium">1</span>
                  <Progress value={20} className="w-[80%]"/>
                </div>
                </div>
            </div>
          </div>
          <div className="w-1/2">
         <div className="mb-2">
           <p className="text-sm text-light-gray">jane smith</p>
          <p className="text-sm text-light-gray">March 5,2023</p>
          <div className="flex gap-1 mt-1 items-center">
  {Array(5)
    .fill(0)
    .map((_, i) => (
      <span key={i}>
        <svg
          width="14"
          height="14"
          viewBox="0 0 29 28"
          fill="none"
          xmlns="http://www.w3.org/2000/svg"
        >
          <path
            d="M14.2656 0L17.6333 10.3647H28.5315L19.7147 16.7705L23.0824 27.1353L14.2656 20.7295L5.44885 27.1353L8.81656 16.7705L-0.00022316 10.3647H10.8979L14.2656 0Z"
            fill="#FFD700"   // GOLD
          />
        </svg>
      </span>
    ))}

 
 

  {Array(0)
    .fill(0)
    .map((_, i) => (
      <span key={i}>
        <svg
          width="14"
          height="14"
          viewBox="0 0 29 28"
          fill="none"
          xmlns="http://www.w3.org/2000/svg"
        >
          <path
            d="M14.2656 0L17.6333 10.3647H28.5315L19.7147 16.7705L23.0824 27.1353L14.2656 20.7295L5.44885 27.1353L8.81656 16.7705L-0.00022316 10.3647H10.8979L14.2656 0Z"
            fill="#C3C3C3"   // gray
          />
        </svg>
      </span>
    ))}

                 </div>
                 <p className="text-sm">excellent product <br/>
                 excellent, with the same specifications and frankly, a respectable thing
                 </p>
         </div>
         <div className="mb-2">
           <p className="text-sm text-light-gray">john white</p>
          <p className="text-sm text-light-gray">March 5,2023</p>
          <div className="flex gap-1 mt-1 items-center">
  {Array(0)
    .fill(0)
    .map((_, i) => (
      <span key={i}>
        <svg
          width="14"
          height="14"
          viewBox="0 0 29 28"
          fill="none"
          xmlns="http://www.w3.org/2000/svg"
        >
          <path
            d="M14.2656 0L17.6333 10.3647H28.5315L19.7147 16.7705L23.0824 27.1353L14.2656 20.7295L5.44885 27.1353L8.81656 16.7705L-0.00022316 10.3647H10.8979L14.2656 0Z"
            fill="#FFD700"   // GOLD
          />
        </svg>
      </span>
    ))}

 
 

  {Array(5)
    .fill(0)
    .map((_, i) => (
      <span key={i}>
        <svg
          width="14"
          height="14"
          viewBox="0 0 29 28"
          fill="none"
          xmlns="http://www.w3.org/2000/svg"
        >
          <path
            d="M14.2656 0L17.6333 10.3647H28.5315L19.7147 16.7705L23.0824 27.1353L14.2656 20.7295L5.44885 27.1353L8.81656 16.7705L-0.00022316 10.3647H10.8979L14.2656 0Z"
            fill="#C3C3C3"   // gray
          />
        </svg>
      </span>
    ))}

                 </div>
                 <p className="text-sm">bad product
                 </p>
         </div>
          </div>
        </div>
      )}
    </div>
  );
}
