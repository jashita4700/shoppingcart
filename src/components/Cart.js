import React, { useState } from "react";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import {
  faCartPlus,
  faMinus,
  faPlus,
  faClose,
} from "@fortawesome/free-solid-svg-icons";
import Items from "./Items";
import { Products } from "./Products";

import "./Cart.css";
const Cart = () => {
  const [item, setItem] = useState(Products);
  return (
    <>
      <header>
        <div className="continue-shopping">
          <img
            src="./images/arrow.png"
            alt="arrow"
            className="arrow-icon"
          ></img>
          <h3>Continue shopping </h3>
        </div>
        <div className="cart-icon">
          <FontAwesomeIcon icon={faCartPlus} size={"5x"} />
          <p>7</p>
        </div>
      </header>
      <section className="main-cart-section">
        <h1>shopping cart</h1>
        <p className="total-items">
          you have<span className="total-items-count"> 7 </span> items in
          shopping cart
        </p>
        <div className="cart-items">
          <div className="cart-items-container">
            {item.map((curItem) => {
              return <Items key={curItem.id} {...curItem} />;
            })}
          </div>
        </div>
        <div className="card-total">
          <h3>
            Cart Total : <span> 22000rs </span>{" "}
          </h3>
          <button> Checkout</button>
        </div>
      </section>
    </>
  );
};

export default Cart;
