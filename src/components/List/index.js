import React from "react";
import {} from "react-icons/sl";
import { BackendBook } from "../Backend/BackendBook";
import "./List.scss";
const List = () => {
  return (
    <div id="List">
      <div className="container">
        <div className="list">
          <div className="list--allbook">
            <h2>All Books</h2>
            <p>Here you can find all the books you need</p>
          </div>
          <div className="list--filter--block">
            {/* <div className="list--filter--block--div"> */}
            <div
              style={{
                display: "flex",
                justifyContent: "space-between",
                width: "200px",
              }}
            >
              <h5 className="list--filter--block--text">Filters</h5>
              <a href="#" className="list--filter--block--title">
                Clear filters
              </a>
            </div>
            {/* </div> */}
            <div className="list--filter--block--sort">
              <select className="list--filter--block--sort--btn">
                <option>Popular</option>
                <option>Popular</option>
              </select>
            </div>
          </div>
          
          <div className="list--filter">
            <div className="list--filter--inp">
              <h5 className="list--filter--inp--h5">Genres</h5>
              <div className="filter--inp--inside">
                <input type="radio" />
                <label>Autographed Books</label>
              </div>
              <div className="filter--inp--inside">
                <input type="radio" />
                <label>Sci-Fi</label>
              </div>
              <div className="filter--inp--inside">
                <input type="radio" />
                <label>For kids</label>
              </div>
              <div className="filter--inp--inside">
                <input type="radio" />
                <label>For teenagers</label>
              </div>
              <div className="filter--inp--inside">
                <input type="radio" />
                <label>Finance</label>
              </div>
              <div className="filter--inp--inside">
                <input type="radio" />
                <label> Detective</label>
              </div>
              <div className="filter--inp--inside">
                <input type="radio" />
                <label>Romantic </label>
              </div>
              <div className="filter--inp--inside">
                <input type="radio" />
                <label> Psychology</label>
              </div>
              <div className="filter--inp--inside">
                <input type="radio" />
                <label>Self-Improvement </label>
              </div>
              <div className="filter--inp--inside">
                <input type="radio" />
                <label> Educational</label>
              </div>
              <div className="filter--inp--inside">
                <input type="radio" />
                <label>Literature </label>
              </div>
              <div className="filter--inp--inside">
                <input type="radio" />
                <label>Religion </label>
              </div>
            </div>
            <div id="kniga">
              <div className="kniga">
                <div className="kniga--book">
                  {BackendBook.map((el) => (
                    <div className="kniga--book--df">
                      <img src={el.img} alt="" />
                      <h2>{el.name}</h2>
                      <p>{el.by}</p>
                    </div>
                  ))}
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default List;
