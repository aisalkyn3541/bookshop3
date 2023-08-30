import React, { useState } from "react";
import "./index.scss";
import { useDispatch, useSelector } from "react-redux";
import { MdExpandLess } from "react-icons/md";
import Logo from "../../../img/PayPal1.png";

const Summary = () => {
  const { basket } = useSelector((s) => s);
  let total = basket.reduce((acc, el) => acc + el.counter * el.quantity, 0);
  const [select, setSelect] = useState(false);
  const [select2, setSelect2] = useState(false);
  return (
    <div id="summary">
      <div className="summary">
        <h1>Order Summary</h1>
        <div className="summary__block">
          <p>Shipping</p>
          <h3>
            Select Method{" "}
            <MdExpandLess
              style={{
                transform: select ? "rotate(180deg)" : "rotate(90deg)",
              }}
              className="icon"
              onClick={() => {
                setSelect(!select);
                setSelect2(false);
              }}
            />
          </h3>
        </div>
        <div
          className="summary__shipping"
          style={{
            display: select ? "block" : "none",
          }}
        >
          <div>
            <span>
              <input type="checkbox" />
              UPS Ground Shipping{" "}
            </span>
            <p>3-5 Business Days</p>
          </div>
        </div>
        <div
          className="summary__shipping"
          style={{
            display: select ? "block" : "none",
          }}
        >
          <div>
            <span>
              <input type="checkbox" />
              UPS/USPS Surepost{" "}
            </span>
            <p>4-7 Business Days</p>
          </div>
        </div>
        <div className="summary__block">
          <p>Payment</p>
          <h3>
            Select Method{" "}
            <MdExpandLess
              style={{
                transform: select2 ? "rotate(180deg)" : "rotate(90deg)",
              }}
              className="icon"
              onClick={() => {
                setSelect2(!select2);
                setSelect(false);
              }}
            />
          </h3>
        </div>
        <div
          className="summary__payment"
          style={{
            display: select2 ? "block" : "none",
          }}
        >
            <div className="summary__payment--carta">
                <div className="summary__payment--carta__cartaButton">
                    <div className="summary__payment--carta__cartaButton--payPal">
                        <button><img src={Logo} alt="payPal"/></button>
                    </div>

                    <div className="summary__payment--carta__cartaButton--payPal2">
                        <button><p>Credit Card</p></button>
                    </div>
                </div>
                <div className="summary__payment--carta__email">
                  <div  className="summary__payment--carta__email--name">
                    <input type="text" placeholder="Cardholder Name" />

                  </div>

                  <div  className="summary__payment--carta__email--name">
                    <input type="text" placeholder="Card Number" />
          
                  </div>

                  <div  className="summary__payment--carta__email--name2">
                    <input type="text" placeholder="Month" />
                    <input type="text" placeholder="Year" />
                  </div>

                  <div  className="summary__payment--carta__email--name">
                    <input type="text" placeholder="CVC" />
          
                  </div>

                </div>
          



            </div>
        </div>
        <hr />
        <div className="summary__total">
          <h4>Total</h4>
          <p>${total}</p>
        </div>
        <button>Continue to checkout</button>
      </div>
    </div>
  );
};

export default Summary;
