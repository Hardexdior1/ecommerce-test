import React, { useState } from "react";
import { FaTimes } from "react-icons/fa";
import "../styles/Main.css";

const Cart = ({ cart, removeFromCart, clear }) => {
  return (
    <div>
      {cart.length > 1 ? (
        <p className="itemMessage">{cart.length} items in your cart </p>
      ) : (
        <p className="itemMessage">No items in your cart </p>
      )}
      <div className="flexCart">
        {cart.map((datum) => {
          const { img, name, price, id } = datum;
          return (
            <div key={id} className="cartWrap">
              <div className="flex1">
                <img src={img} alt="" />

                <h4>name: {name}</h4>
              </div>
              <div className="flex">
                <b>
                  price: <em>${price}</em>
                </b>
                <FaTimes
                  className="removed"
                  onClick={() => {
                    removeFromCart(datum);
                  }}
                />
              </div>
            </div>
          );
        })}
      </div>
      {cart.length > 0 && (
        <center className="center1">
          <button
            className="clear"
            onClick={() => {
              clear();
            }}>
            Clear cart{" "}
          </button>
        </center>
      )}
    </div>
  );
};

export default Cart;
