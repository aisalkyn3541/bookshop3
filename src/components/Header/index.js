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
  const [search, setSearch] = useState(true);

  return (
    <div id="header">
      <div className="container">
        <div className="header">
          <div className="header--nav">
            <NavLink to={"/"} onClick={() => window.scroll(0, 0)}>
              <img src={logo} alt="" />
            </NavLink>
            <NavLink to={"/"} onClick={() => window.scroll(0, 800)}>
              Categories
            </NavLink>
            <NavLink to={"/newbooks"}>Recent</NavLink>
            <NavLink to={"/books"}>Books</NavLink>
            <NavLink to={"/aboutus"}>About Us</NavLink>
          </div>
          <div className="header--icons">
            <div
              className="header--icons__logo"
              style={{
                background: search ? "transparent" : "",
                marginTop: "-4",
              }}
            >
              <CiSearch
                className="header--icons__logo--search"
                onClick={() => {
                  setSearch(!search);
                }}
                style={{ fontSize: "20px", marginRight: "10px" }}
              />
              <input type="text" style={{ width: search ? "" : "120px" }} />
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
