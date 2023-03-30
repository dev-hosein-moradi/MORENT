import React from "react";

const SvgSearch = (props) => {
  return (
    <svg
      xmlns="http://www.w3.org/2000/svg"
      {...props}
      viewBox="0 0 24 24"
      id="search"
    >
      <g
        fill="none"
        fillRule="evenodd"
        strokeLinecap="round"
        strokeLinejoin="round"
        strokeWidth="1.5"
        transform="translate(2 2)"
      >
        <circle cx="9.767" cy="9.767" r="8.989"></circle>
        <line x1="16.018" x2="19.542" y1="16.485" y2="20"></line>
      </g>
    </svg>
  );
};

export default SvgSearch;
