import React from "react";
import { inter } from "../layout";
import Link from "next/link";

export default function OurCategories() {
  const cats = [
    { category: "Kitchen" },
    { category: "Electronics" },
    { category: "Toys" },
    { category: "Fashion" },
    { category: "Baby Products" },
    { category: "Furniture" },
    {category:'Beauty' },
    {category:'Super Market' },
  ];
  return (
    <div className={`${inter.className} bg-white z-30 fixed left-1/2 -translate-x-1/2 rounded-lg p-3 text-2xl  -mt-10 font-semibold shadow-md w-[90%]  `}>
        <div className="container flex items-center justify-between">{cats.map((cat)=>(
            <Link href={'/categories'} key={cat.category} >{cat.category}</Link >
        ))}</div>
    </div>
  );
}
