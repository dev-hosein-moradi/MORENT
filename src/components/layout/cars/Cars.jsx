import React from "react";
import "./cars.css";
import CarCard from "../../car-card/CarCard";

const Cars = () => {
  return (
    <div className="cars">
      <section className="cars__popular">
        <div className="box__topbar">
          <h3>Popular Car</h3>
          <button>View All</button>
        </div>
        <div className="box__items">
          <CarCard />
        </div>
      </section>
      <section className="cars__recommend"></section>
    </div>
  );
};

export default Cars;
