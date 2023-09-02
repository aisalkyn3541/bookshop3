import React, { useState } from "react";
import {} from "react-icons/sl";
import { BackendBook } from "../Backend/BackendBook";
import "./List.scss";
const List = () => {
  const [hello, setHello] = useState("");

  const [hello2, setHello2] = useState("");
  const [hello3, setHello3] = useState("");
  const [hello4, setHello4] = useState("");
  const [hello5, setHello5] = useState("");
  const [hello6, setHello6] = useState("");
  const [hello7, setHello7] = useState("");
  const [hello8, setHello8] = useState("");
  const [hello9, setHello9] = useState("");
  const [hello10, setHello10] = useState("");
  const [hello11, setHello11] = useState("");

  const [hello1, setHello1] = useState(1);
  const filter = BackendBook.filter((el) => {
    if (hello1 === 1) {
      return el.name.includes(hello);
    }
  });
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
                <input onClick={() => setHello("")} type="radio" />
                <label>Autographed Books</label>
              </div>
              <div className="filter--inp--inside">
                <input onClick={() => setHello("HARRY POTTER")} type="radio" />
                <label>Sci-Fi</label>
              </div>
              <div className="filter--inp--inside">
                <input
                  onClick={() =>
                    setHello("THE BOY, THE MOLE, THE FOX AND THE HORSE")
                  }
                  type="radio"
                />
                <label>For kids</label>
              </div>
              <div className="filter--inp--inside">
                <input onClick={() => setHello("")} type="radio" />
                <label>For teenagers</label>
              </div>
              <div className="filter--inp--inside">
                <input
                  onClick={() => setHello("IT STARTS WITH US")}
                  type="radio"
                />
                <label>Finance</label>
              </div>
              <div className="filter--inp--inside">
                <input
                  onClick={() => setHello("THE CREATIVE ACT")}
                  type="radio"
                />
                <label> Detective</label>
              </div>
              <div className="filter--inp--inside">
                <input
                  onClick={() => setHello("8 RULES OF LOVE")}
                  type="radio"
                />
                <label>Romantic </label>
              </div>
              <div className="filter--inp--inside">
                <input onClick={() => setHello("")} type="radio" />
                <label> Psychology</label>
              </div>
              <div className="filter--inp--inside">
                <input
                  onClick={() =>
                    setHello("THE SUBTLE ART OF NOT GIVING A F*CK")
                  }
                  type="radio"
                />
                <label>Self-Improvement </label>
              </div>
              <div className="filter--inp--inside">
                <input onClick={() => setHello("")} type="radio" />
                <label> Educational</label>
              </div>
              <div className="filter--inp--inside">
                <input onClick={() => setHello("HEART BONES")} type="radio" />
                <label>Literature </label>
              </div>
              <div className="filter--inp--inside">
                <input onClick={() => setHello("")} type="radio" />
                <label>Religion </label>
              </div>
            </div>
            <div id="kniga">
              <div className="kniga">
                <div className="kniga--book">
                  {filter.map((el) => (
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
