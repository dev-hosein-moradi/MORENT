import React, { lazy } from "react";
import "./home.css";
import PickUpForm from "../../pick-up/PickUpForm";

const Home = () => {
  return (
    <div className="Home">
      {/* form for pick up and drop off car, user should fill location date and time. */}
      <section className="pick-and-drop__form">
        <PickUpForm />
        <span></span>
      </section>
    </div>
  );
};

export default Home;
