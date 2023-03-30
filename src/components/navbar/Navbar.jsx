import React from "react";
import "./navbar.css";
import SvgSearch from "../../Svgs/SvgSearch";
import SvgFilter from "../../Svgs/SvgFilter";
import SvgUser from "../../Svgs/SvgUser";

const Navbar = () => {
  return (
    <nav className="Navbar">
      <div className="nav__brand">
        <h1>MORENT</h1>
      </div>

      <div className="nav__search">
        <div className="search__wrapper">
          <div className="search__box">
            <div className="box__search-icon">
              <SvgSearch width={20} height={20} stroke={"#596780"} />
            </div>
            <input
              type="text"
              name="search"
              placeholder="Search something here"
            />
          </div>

          <div className="search__filter-icon">
            <SvgFilter width={30} height={30} fill={"#596780"} />
          </div>
        </div>
      </div>

      <div className="nav__links">
        <SvgUser width={29} height={29} fill={"#596780"} />
      </div>
    </nav>
  );
};

export default Navbar;
