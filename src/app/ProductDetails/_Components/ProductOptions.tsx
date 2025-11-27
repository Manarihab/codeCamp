"use client";
import React, { useEffect, useState } from "react";
import { inter, poppins } from "@/app/layout";
import { SingleProd, Variant } from "@/interfaces/singleProd";

export default function ProductOptions({ prod }: { prod:SingleProd }) {
  const variant:Variant[] = prod.variants
  const [selectedColor,setColor]= useState('')
  const [selectedSize,setSize]= useState('')
  const [selectedVar, setVar]= useState<Variant |null>(null)
 
useEffect(() => {
  const def = variant.find(v => v.is_default);

  if (def) {
    setColor(def.color);
    setSize(def.size);
    setVar(def);
  }
}, []);


useEffect(() => {
  const found = variant.find(
    v => v.color === selectedColor && v.size === selectedSize
  );
  if(found){
  setVar(found);
}
}, [selectedColor, selectedSize]);

  function handleColor(a:string){
    setColor(a)
    const sizes = variant.filter((x)=>(x.color == a))
    setSize(sizes[0].size)
  }
  const rate:number = 3.5
  // const starsnum = Math.floor(parseFloat(${rate}));
  // const hasHalf = parseFloat() % 1 !== 0;
  // const emptyStars = 5 - starsnum - (hasHalf ? 1 : 0);
  const [qty, setQty] = useState(1);
  console.log(prod);
  
  return (
    <div className={`${inter.className} pt-4`}>
      {selectedVar && <div className="flex gap-2 items-center pb-2">
        <span className="font-medium text-sec"> Availability:</span>{selectedVar.stock_quantity >=10 ?<p className=" text-green-600 font-semibold ">in stock</p> : <p className=" text-red-600 font-semibold ">only {selectedVar.stock_quantity} in stock</p>}</div>
      }
      
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
         <h2 className="text-xl font-semibold mt-5 mb-3">Color</h2>
       <div className="flex gap-4 row w-[90%]">
      {variant.map((v)=>(
        <div key={v.id}>
        
   
      
      
          <button
          onClick={()=>{handleColor(v.color)}}
          style={{backgroundColor:v.hex_code}}
            className={`px-1 py-2 cursor-pointer box-border text-white  ${v.color == selectedColor  && 'border-black border-2'} rounded-lg text-lg  w-24 `}
          >
           {v.color}
          </button>
      
      
       </div>
      ))}
      </div>
      <hr className="mt-8 w-[90%] text-[#8D8D8D] bg-[#8D8D8D] font-extralight" />

      <h2 className="text-xl font-semibold mt-5 mb-2">Size</h2>





       <div className="flex justify-start items-center  gap-y-1 row w-[90%]">
    
    
    
    
    {variant.map((va)=>(
      <div key={va.id}>
     
        <div>
          {" "}{va.color==selectedColor && <button  
              onClick={() => setSize(va.size)}
              className={`px-12 py-2 cursor-pointer mx-2 flex justify-center items-center  text-light-gray w-1/3
      ${va.size == selectedSize ? "text-main border border-main" : ""}`}
            >
              {va.size}
            </button>}
            
         
        </div>
      </div>
      
     
    ))} </div>
      
      <hr className="mt-6 w-[90%] text-[#F0F0F0] bg-[#8D8D8D] font-extralight" />
      <p className="text-[#191919] text-xs font-light mt-3">
        USD(incl. of all taxes)
      </p>
        <div className="text-2xl ">{selectedVar?.price}$</div>
     {selectedVar && <div className="flex gap-5">
        <div className="flex ">
            <button disabled={qty<=1 && true} onClick={()=>setQty(qty-1)} className={`border border-[#f0f0f0] cursor-pointer p-2 px-4 font-medium ${qty<=1 && 'text-gray-300'} text-xl`}>-</button>
            <div className="border border-[#f0f0f0] p-2 px-4 font-medium  text-xl">{qty}</div>
            <button disabled={qty>= selectedVar.stock_quantity}  onClick={()=>setQty(qty+1)} className={`border border-[#f0f0f0] cursor-pointer p-2 px-4 font-medium ${qty>= selectedVar.stock_quantity && 'text-gray-300'} text-xl`}>+</button>
        </div>
        <button className="bg-main hover:bg-main2 transition-all duration-300 text-white px-4 py-2 rounded-lg cursor-pointer w-1/4">Buy Now</button>
        <button className="text-main border hover:bg-main transition-all duration-300 hover:text-white border-main px-4 py-2 rounded-lg cursor-pointer w-1/4 ">Add to Cart</button>
      </div> }
      
    </div>
  );
}
