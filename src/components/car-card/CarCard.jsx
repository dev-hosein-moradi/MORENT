import React, { lazy } from "react";
import "./carCard.css";
import car1 from "../../assets/image/car1.png";
const SvgHeart = lazy(() => import("../../Svgs/SvgHeart"));
const SvgFuel = lazy(() => import("../../Svgs/SvgFuel"));
const SvgGearbox = lazy(() => import("../../Svgs/SvgGearbox"));
const SvgPeople = lazy(() => import("../../Svgs/SvgPeople"));

const CarCard = () => {
  return (
    <div className="car__item">
      <div className="item__topbar">
        <h4>Koenigsegg</h4>
        <SvgHeart width={25} height={25} />
      </div>

      <p className="item__category">sport</p>

      <div className="item__img">
        <img alt="car" src={car1} />
      </div>

      <div className="item__detail">
        <span>
          <SvgFuel width={25} height={25} />
          80L
        </span>
        <span>
          <SvgGearbox width={25} height={25} />
          Manual
        </span>
        <span>
          <SvgPeople width={25} height={25} />6 People
        </span>
      </div>

      <div className="item__footer">
        <div className="item__price">
          <div className="price1">
            $80.00/
            <p>day</p>
          </div>
          <div className="price2">$100.00</div>
        </div>
        <div className="item__cta">
          <button>Rent Now</button>
        </div>
      </div>
    </div>
  );
};

export default CarCard;
