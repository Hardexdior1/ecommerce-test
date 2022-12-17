import React from "react";
import "../styles/BuySell.css";
import { useState } from "react";
const BuySell = () => {
  const [coinToBuy, setCoinToBuy] = useState("");
  const [Currency, SetCurrency] = useState("");
  const [amount, SetAmount] = useState("");

  return (
    <div>
      <h2 className="bs-h2">Buy/Sell Instantly</h2>

      <div className="buy-sell">
        <button className="buy-btn">Buy</button>{" "}
        <button className="sell-btn">Sell</button>
        <form
          action=""
          onSubmit={(event) => {
            event.preventDefault();
            const BuyerDetails = {
              coinToBuy: coinToBuy,
              Currency: Currency,
              amount: amount,
            };

            console.log(BuyerDetails);
          }}>
          <h4>
            <label htmlFor="coin">Coin to Buy</label>
          </h4>
          <input
            onChange={(event) => {
              console.log(event.target.value);
              setCoinToBuy(event.target.value);
            }}
            id="coin"
            type="text"
            placeholder="Bitcoin (BTC)"
          />
          <h4>
            <label htmlFor="naira">Currency</label>
          </h4>
          <input
            onChange={(event) => {
              console.log(event.target.value);
              SetCurrency(event.target.value);
            }}
            id="naira"
            type="text"
            placeholder="Naira (NGN)"
          />
          {/* <select name="" id="">
            <option value="dollars">dollars</option>
        </select> */}
          <h4>
            <label htmlFor="currency">Amount</label>
          </h4>
          <input
            onChange={(event) => {
             console.log(event.target.value);
              SetAmount(event.target.value);
            }}
            id="currency"
            type="number"
            placeholder="NGN   3,000.000.00"
          />{" "}
          <br /> <br />
          <button className="ctn">Continue</button>
        </form>
      </div>
    </div>
  );
};

export default BuySell;
