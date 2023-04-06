import React, { lazy } from "react";
import "./home.css";
import PickUpForm from "../../pick-up/PickUpForm";
import DropOffForm from "../../drop-off/DropOffForm";
import SvgDataArrow from "../../../Svgs/SvgDataArrow";
const Cars = lazy(() => import("../cars/Cars"));

const Home = () => {
  return (
    <div className="Home">
      {/* form for pick up and drop off car, user should fill location date and time. */}
      <section className="pick-and-drop__form">
        <PickUpForm />
        <span className="form__Divider">
          <SvgDataArrow width={25} height={25} />
        </span>
        <DropOffForm />
      </section>

      {/* car lists */}
      <section className="cars__wrapper">
        <Cars />
      </section>
    </div>
  );
};

export default Home;
