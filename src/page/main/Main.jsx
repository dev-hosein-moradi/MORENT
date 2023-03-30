import React, { lazy, Suspense } from "react";
import LoadingSpinner from "../../components/loading-spinner/LoadingSpinner";
const Navbar = lazy(() => import("../../components/navbar/Navbar"));

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

        {/* content */}

        {/* footer */}
      </Suspense>
    </div>
  );
};

export default Main;
