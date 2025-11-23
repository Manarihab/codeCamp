import React from "react";
import { kavoon } from "../layout";

export default function Navbar() {
  return (
    <>
      <nav className="bg-main fixed w-full z-20 top-0 start-0 ">
        <div className="max-w-screen-xl flex flex-wrap items-center mx-auto p-4">
          <div className={`${kavoon.className} text-white text-2xl mx-3 `}>
            CodeCamp
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
      </nav>
    </>
  );
}
