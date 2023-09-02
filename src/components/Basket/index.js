import React from "react";
import { useDispatch, useSelector } from "react-redux";
import BasketCard from "./BasketCart";
import "./index.scss";
import Summary from "./Summary";
const Basket = () => {
  const { basket } = useSelector((s) => s);
  return (
    <div id="cart">
      <div className="container">
        <div className="cart__text">
          <h1>Your cart</h1>
          <p>
            Not ready to checkout? <span>Continue Shopping</span>{" "}
          </p>
          {basket.length === 0 ? (
            <h1 style={{ color: "red", paddingTop: "50px" }}>
              Ваша карзина пусто!!!
            </h1>
          ) : (
            <div className="cart__text-block">
              <div>
                {basket.map((el) => (
                  <BasketCard el={el} key={el.id} />
                ))}
              </div>
              <Summary />
            </div>
          )}
        </div>
      </div>
    </div>
  );
};

export default Basket;
