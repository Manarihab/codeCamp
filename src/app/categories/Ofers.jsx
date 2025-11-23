"use client";

import Image from "next/image";
import OferImg from "../../assets/0ed02d014fba2362439472ce01639d2a6853d13e.jpg";
import "../../CSS/ProductsSlider.css";

export default function ProductsSlider() {
  const Products = [
    { id: 1, image: OferImg, name: "LG UHD 4K TV", price: "120$" },
    { id: 2, image: OferImg, name: "LG UHD 4K TV", price: "120$" },
    { id: 3, image: OferImg, name: "LG UHD 4K TV", price: "120$" },
    { id: 4, image: OferImg, name: "LG UHD 4K TV", price: "120$" },
    { id: 5, image: OferImg, name: "LG UHD 4K TV", price: "120$" },
    { id: 6, image: OferImg, name: "LG UHD 4K TV", price: "120$" },
    { id: 7, image: OferImg, name: "LG UHD 4K TV", price: "120$" },
    { id: 8, image: OferImg, name: "LG UHD 4K TV", price: "120$" },
  ];

  return (
    <div className="productsGridWrapper">
      <div className="productsGrid">
        {Products.map((item) => (
          <div key={item.id} className="pBox">
            <Image
              src={item.image}
              width={250}
              height={180}
              alt="product"
              className="pImage"
            />
            <div className="productRow ">
            <h3 className="pName">{item.name}</h3>
            <p className="pPrice">{item.price}</p>
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
          </div>
        ))}
      </div>
    </div>
  );
}
