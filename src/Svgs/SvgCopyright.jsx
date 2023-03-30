import React from "react";

const SvgCopyright = (props) => {
  return (
    <svg
      xmlns="http://www.w3.org/2000/svg"
      viewBox="0 0 256 256"
      id="copyright"
      {...props}
    >
      <rect fill="none"></rect>
      <circle
        cx="128"
        cy="128"
        r="96"
        fill="none"
        stroke="#000"
        strokeLinecap="round"
        strokeLinejoin="round"
        strokeWidth="16"
      ></circle>
      <path
        fill="none"
        stroke="#000"
        strokeLinecap="round"
        strokeLinejoin="round"
        strokeWidth="16"
        d="M160.00112,152.00142a40,40,0,1,1-.00029-48.013"
      ></path>
    </svg>
  );
};

export default SvgCopyright;
