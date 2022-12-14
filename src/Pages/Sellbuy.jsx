import React from "react";
import "../styles/BuySell.css";
import { useState } from "react";
const Sellbuy = () => {
  const [coinToBuy, setCoinToBuy] = useState("");
  const [Currency, SetCurrency] = useState("");
  const [amount, SetAmount] = useState("");
  const [text, setText] = useState("Coin to sell");
  const [active,setActive]=useState(false);
  // const handleClick=()=>{
  //   setActive(!active);
  // }
//   const [buy, setBuy] = useState("coin to buy");
  //   const style = {
  //     backgroundColor: "#7C20BE",
  //   };

  return (
    <div>
      <h2 className="bs-h2">Buy/Sell Instantly</h2>
      <div className="buy-sell">
        <button
          onClick={() => {
            setText("coin to buy");
          }}
          className="buy-btn">
          buy
        </button>{" "}
        <button
          onClick={() => {
            setText("coin to sell");
            // style={backgroundColor:'red'}
          }}
          className="sell-btn">
          Sell
        </button>
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
            <label htmlFor="coin">{text} </label>
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
          {/*        <h5>{text}</h5> */}
        </form>
      </div>
    </div>
  );
};

export default Sellbuy;
