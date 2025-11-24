"use client";

import "../../../CSS/Filter.css";

export default function FilterButton() {
  return (
    <button className="filter-btn">
      <svg
        xmlns="http://www.w3.org/2000/svg"
        width="20"
        height="20"
        viewBox="0 0 24 24"
        fill="none"
        stroke="#2F2FCD"
        strokeWidth="2"
        strokeLinecap="round"
        strokeLinejoin="round"
      >
        <path d="M3 4h18l-7 8v6l-4 2v-8L3 4z" />
      </svg>
      <span>Filter</span>
    </button>
  );
}
