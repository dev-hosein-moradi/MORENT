import React from "react";
import SvgTire from "../../Svgs/SvgTire";
import "./loadingSpinner.css";

const LoadingSpinner = () => {
  return (
    <div className="spinner">
      <div className="spinner__tire">
        <SvgTire width={70} height={70} />
      </div>

      <div className="spinner__text">
        <h1>Loading</h1>
        <div className="text__dots">
          <span></span>
          <span></span>
          <span></span>
        </div>
      </div>
    </div>
  );
};

export default LoadingSpinner;
