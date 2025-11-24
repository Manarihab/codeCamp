"use client";

import Image from "next/image";
import OferImg from "../../../assets/0ed02d014fba2362439472ce01639d2a6853d13e.jpg";
import "../../../CSS/ProductsSlider.css";
import { poppins } from "@/app/layout";
import { ProdsBy } from "@/interfaces/prodByCat";
import Link from "next/link";

export default function ProductsSlider({data}:{data:ProdsBy}) {
 
  return (
    <div className={`${poppins.className} productsGridWrapper`}>
      <div className="productsGrid">
        {data.products.map((item) => (
          
          <div key={item.id} className="pBox">
            <Link href={`/ProductDetails/${item.id}`}>
            <Image
              src={item.images[0].url}
              width={250}
              height={180}
              alt="product"
              className="pImage"
              unoptimized
            />
            <div className="productRow ">
            <h3 className="pName line-clamp-1 ">{item.name}</h3>
            <p className="pPrice ">120$</p>
            </div>
            <h4>55”4k</h4>

            <button className="addBtn"><svg
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
                  </svg>Add to Cart</button>
                  </Link>
          </div>
          
        ))}
      </div>
    </div>
  );
}
