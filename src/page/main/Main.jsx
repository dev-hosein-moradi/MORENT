import React, { lazy, Suspense } from "react";
import "./main.css";
import LoadingSpinner from "../../components/loading-spinner/LoadingSpinner";
const Navbar = lazy(() => import("../../components/navbar/Navbar"));
const Ads = lazy(() => import("../../components/advertisement/Ads"));

/* 
 1--> Navbar
 2--> content ===> {
    top: introCar
    bottom: home
 }
 3--> Footer
*/
const Main = () => {
  return (
    <div className="Main">
      <Suspense fallback={<LoadingSpinner />}>
        {/* navbar */}
        <Navbar />
        <div className="Main__body">
          <Ads />
        </div>

        {/* content */}

        {/* footer */}
      </Suspense>
    </div>
  );
};

export default Main;
