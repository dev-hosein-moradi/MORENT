import React, { useState } from "react";
import "./navbar.css";
import SvgSearch from "../../Svgs/SvgSearch";
import SvgFilter from "../../Svgs/SvgFilter";
import SvgUser from "../../Svgs/SvgUser";
import SvgSetting from "../../Svgs/SvgSetting";
import SvgBelt from "../../Svgs/SvgBelt";
import SvgHeart from "../../Svgs/SvgHeart";
import Hosein from "../../assets/image/hosein-prof.jpg";

const Navbar = () => {
  const [openLinks, setOpenLinks] = useState(false);
  console.log(openLinks);
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
        <div className="link__user" onClick={() => setOpenLinks(!openLinks)}>
          <SvgUser width={29} height={29} fill={"#596780"} />
        </div>

        <div className="links">
          <span className={`${openLinks ? "active" : "disable"}`}>
            <img src={Hosein} alt="hosein moradi" />
          </span>

          <span className={`${openLinks ? "active" : "disable"}`}>
            <SvgSetting width={20} height={18.8} fill={"#596780"} />
          </span>

          <span className={`${openLinks ? "active" : "disable"}`}>
            <SvgBelt width={18.35} height={17} fill={"#596780"} />
          </span>

          <span className={`${openLinks ? "active" : "disable"}`}>
            <SvgHeart width={20} height={17.8} fill={"#596780"} />
          </span>
        </div>
      </div>
    </nav>
  );
};

export default Navbar;
