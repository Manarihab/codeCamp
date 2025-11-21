'use client'
import React from 'react';
import Image from 'next/image';
import "./CSS/footer.css"
import paypalImg from './assete/paypal.png';
import visaImg from './assete/visa.png';
import stripeImg from './assete/stripe.png';

export default function Footer() {
  return (
    <footer className="footer">
      <div className="footer-section about">
        <h2>CodeCamp</h2>
        <p>
          Your one-stop shop for everything you need. Browse our massive
          selection of quality products and enjoy a seamless shopping
          experience with fast, reliable shipping.
        </p>
      </div>

      <div className="footer-section payments">
        <Image src={paypalImg} alt="PayPal" width={60} height={40} />
        <Image src={visaImg} alt="Visa" width={60} height={40} />
        <Image src={stripeImg} alt="Stripe" width={60} height={40} />
      </div>

      <div className="footer-section links">
        <p>About us</p>
        <p>Privacy policy</p>
        <p>Return and shipment policy</p>
        <p>Terms of services</p>
        <p>Help Center</p>
      </div>

      {/* قسم التواصل */}
      <div className="footer-section contact">
        <p>Contact Us</p>
        <div className="message-box">
          <input type="text" placeholder="Your Message" />
          <button>Send</button>
        </div>
        <div className="social-icons">
          <i className="fa-brands fa-whatsapp"></i>
          <i className="fa-brands fa-facebook"></i>
          <i className="fa-solid fa-at"></i>
        </div>
      </div>
    </footer>
  );
}
