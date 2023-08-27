import React from "react";
import "./index.scss";
import logo from "../../img/Logo.png";
import { BiSearchAlt2 } from "react-icons/bi";
import { AiOutlineShopping } from "react-icons/ai";
import { Link, NavLink } from "react-router-dom";
import { useSelector } from "react-redux";
const Header = () => {
  const { basket } = useSelector((r) => r);
  return (
    <div id="header">
      <div className="container">
        <div className="header">
          <div className="header--nav">
            <NavLink to={"/"}>
              <img src={logo} alt="" />
            </NavLink>
            <NavLink to={"/categories"}>Categories</NavLink>
            <NavLink to={"/newbooks"}>Recent</NavLink>
            <NavLink to={"/books"}>Books</NavLink>
            <NavLink to={"/aboutus"}>About Us</NavLink>
          </div>
          <div className="header--icons">
            <BiSearchAlt2 />
            <div>
              <Link to={"/basket"}>
                <AiOutlineShopping className="basket"/>
              </Link>
              <sup>{basket.length}</sup>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Header;
