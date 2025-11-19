import React from "react";
import Image from "next/image";
import deliveryTruck from "./assete/delivery-truck.svg";
import hours24 from "./assete/24-hours.svg";
import shield from "./assete/shield.svg";
import "./CSS/info.css"

export default function Features() {
  return (
    <div className="cont">
      <div className="Box">

        <div className="content">
          <svg
            xmlns="http://www.w3.org/2000/svg"
            width="48"
            height="48"
            viewBox="0 0 24 24"
          >
            <path
              fill="none"
              stroke="currentColor"
              strokeLinecap="round"
              strokeLinejoin="round"
              strokeWidth="2"
              d="m4 8l8-5l4 2.5M4 8v8l8 5M4 8l4 2.5m4 2.5l8-5m-8 5v8m0-8l-4-2.5M20 8v8l-8 5m8-13l-4-2.5m-8 5l8-5"
            />
          </svg>
          <div className="info">
            <h3>Discount</h3>
            <p>Every week new sales</p>
          </div>
        </div>

        <div className="content">
          <Image src={deliveryTruck} alt="Free Delivery" />
          <div className="info">
            <h3>Free Delivery</h3>
            <p>100% Free for all orders</p>
          </div>
        </div>

        <div className="content">
          <Image src={hours24} alt="Support 24/7" />
          <div className="info m-5">
            <h3>Great Support 24/7</h3>
            <p>We care your experiences</p>
          </div>
        </div>

        <div className="content">
          <Image src={shield} alt="Secure Payment" />
          <div className="info">
            <h3>Secure Payment</h3>
            <p>100% Secure Payment Method</p>
          </div>
        </div>

      </div>
    </div>
  );
}
