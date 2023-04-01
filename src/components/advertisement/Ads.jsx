import React, { useEffect, useState } from "react";
import SvgBg from "../../Svgs/SvgBg";
import "./ads.css";
import SvgCar1 from "../../Svgs/SvgCar1";
import SvgCar2 from "../../Svgs/SvgCar2";

const adsDetail = [
  {
    id: 1001,
    title: "The Best Platform for Car Rental",
    desc: "Ease of doing a car rental safely and reliably. Of course at a low price.",
  },
  {
    id: 1002,
    title: "Easy way to rent a car at a low price",
    desc: "Providing cheap car rental services and safe and comfortable facilities.",
  },
];

const Ads = () => {
  return (
    <div className="Ads__wrapper">
      {adsDetail?.map((ads) => {
        return (
          <div key={ads?.id} className="ads__box">
            <div className="box__content">
              <h2>{ads?.title || null}</h2>
              <p>{ads?.desc || null}</p>
              <button>Rental Car</button>

              <div className="content__image">
                <SvgCar1 width={320} height={70} />
              </div>
            </div>
          </div>
        );
      })}
    </div>
  );
};

export default Ads;
