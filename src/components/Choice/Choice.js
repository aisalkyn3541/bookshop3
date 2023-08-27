import React from "react";
import "./Choice.scss";
import choicelogo from "../../img/Product Image.png";
import { BackendBook } from "../Backend/BackendBook";
import { PiHeartStraightBold } from "react-icons/pi";
import { BiShareAlt } from "react-icons/bi";
import { useState } from "react";

const Choice = () => {
  const [quantity, setQuantity] = useState(1);
  return (
    <div id="choice">
      <div className="container">
        <div className="choice">
          <img src={choicelogo} alt="" />

          <div className="choice--block">
            <div className="choice--block__flu">
              <h2 className="choice--block__flu--title">
                THE BOY, THE MOLE, THE FOX <br /> AND THE HORSE
              </h2>

              <div className="choice--block__flu--icons">
                <PiHeartStraightBold />
                <BiShareAlt />
              </div>
            </div>
            <h6 className="choice--block__text">by Charlie Mackesy</h6>
            <div className="choice--block__parag">
              <p>
                Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do
                eiusmod tempor incididunt ut labore et dolore magna aliqua.
              </p>
            </div>
            <div className="choice--block__href">
              <p>$99</p>
            </div>
            <div className="choice--block__btns">
              <button className="choice--block__btns--btn">Add to Cart </button>
              <div className="choice--block__btns--symbol ">
                <button
                  className="choice--block__btns--symbol__minus"
                  onClick={() =>
                    setQuantity(quantity > 1 ? quantity - 1 : quantity)
                  }
                >
                  -
                </button>
                <p className="choice--block__btns--symbol__num">{quantity}</p>
                <button
                  className="choice--block__btns--symbol__plus"
                  onClick={() => setQuantity(quantity + 1)}
                >
                  +
                </button>
              </div>
              {/* {
                  BackendBook.map((el)=>(
                    <>
                    <img src={el.img} alt="img" />
                    <h2>{el.name}</h2>
                    <p>{el.by}</p>
                    </>
                  ))
                } */}
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Choice;
