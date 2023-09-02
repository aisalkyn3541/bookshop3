import React from "react";
import "./index.scss";
import Logo1 from "../../../img/image 1.png";
import Logo2 from "../../../img/image 2.png";
import Logo3 from "../../../img/image 3.png";
import Logo4 from "../../../img/image 4.png";
import Logo5 from "../../../img/image 5.png";
import Logo6 from "../../../img/image 6.png";
import { NavLink } from "react-router-dom";

const Genres = () => {
  return (
    <div id="herotwo">
      <div className="container">
        <div className="herotwo">
          <div className="genres">
            {" "}
            <h1>Genres</h1>
            <div>
              <a href="">View all</a>
            </div>
          </div>
          <div className="herotwo--oheros">
            <div className="herotwo--oheros__divs">
              <img src={Logo1} alt="" />
              <p>Sci-Fi</p>
            </div>

            <div className="herotwo--oheros__divs2">
              <img src={Logo2} alt="" />
              <p>For kids</p>
            </div>
            <div className="herotwo--oheros__divs3">
              <img src={Logo3} alt="" />
              <p>Psychology</p>
            </div>
            <div className="herotwo--oheros__divs4">
              <img src={Logo4} alt="" />

              <p>Romantic</p>
            </div>
            <div className="herotwo--oheros__divs5">
              <img src={Logo5} alt="" />
              <p>Detective</p>
            </div>
            <div className="herotwo--oheros__divs6">
              <img src={Logo6} alt="" />
              <p>Finance</p>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Genres;
