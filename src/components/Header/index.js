import React from "react";
import "./index.scss";
import logo from "../../img/Logo.png";
import { CiSearch } from "react-icons/ci";
import { AiOutlineShopping } from "react-icons/ai";
import { Link, NavLink } from "react-router-dom";
import { useSelector } from "react-redux";
import { useState } from "react";
const Header = () => {
  const { basket } = useSelector((r) => r);
  const [search, setsearch] = useState(false);

  return (
    <div id="header">
      <div className="container">
        <div className="header">
          <div className="header--nav">
            <NavLink onClick={() => window.scroll(0, 0)} to={"/"}>
              <img src={logo} alt="" />
            </NavLink>
            <NavLink onClick={() => window.scroll(0, 800)} to={"/"}>
              Categories
            </NavLink>
            <NavLink to={"/newbooks"}>Recent</NavLink>
            <NavLink to={"/books"}>Books</NavLink>
            <NavLink to={"/aboutus"}>About Us</NavLink>
          </div>
          <div style={{ display: "flex" }} className="header--icons">
            <div className="header--icons__h1">
              <CiSearch
                className="header--icons__h1--onclick"
                onClick={() => {
                  setsearch(!search);
                }}
                style={{
                  color: "red",
                  fontSize: "20px",
                  zIndex: "100",
                  opacity: "o.5",
                }}
              />
              <input
                type="text"
                style={{
                  top: "-7px",
                  position: "relative",
                  width: search ? "200px" : "0",
                  transition: "0.5s",
                  border: "none",
                  fontSize: "10px",
                  background: " #e2e4e6d0",
                  borderRadius: "2px",
                  height: "20px",
                }}
              />
            </div>
            <Link to={"/basket"}>
              <AiOutlineShopping
                style={{
                  fontSize: "20px",
                  color: "#000",
                }}
              />
            </Link>
            <sup>{basket.length}</sup>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Header;
