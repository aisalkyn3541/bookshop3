import React from "react";
import "./index.scss";
import logo from "../../img/Logo.png";
import { BiSearchAlt2 } from "react-icons/bi";
import { AiOutlineShopping } from "react-icons/ai";
import { NavLink } from "react-router-dom";
const Header = () => {
  return (
    <div id="header">
      <div className="container">
        <div className="header">
          <div className="header--nav">
            <img src={logo} alt="" />
            <NavLink>Categories</NavLink>
            <NavLink>Recent</NavLink>
            <NavLink>Books</NavLink>
            <NavLink>About Us</NavLink>
          </div>
          <div className="header--icons">
            <BiSearchAlt2 />
            <div>
              <AiOutlineShopping />
              <sup>0</sup>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Header;
