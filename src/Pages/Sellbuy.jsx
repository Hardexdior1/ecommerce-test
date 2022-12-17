import React from "react";
import "../styles/BuySell.css";
import { useState } from "react";
import { Link } from "react-router-dom";

const Sellbuy = () => {
  const [coinToBuy, setCoinToBuy] = useState("");
  const [Currency, SetCurrency] = useState("");
  const [amount, SetAmount] = useState("");
  const [text, setText] = useState("coin to buy");
  const [active,setActive]=useState(false);
  
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
        
        <Link to='/Sell' onClick={() => {
            setText("Coin to sell");
            // style={backgroundColor:'red'}
          }}
          className="buy-btn4">Sell</Link>
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
          <select  name="" id="">

          <option value="BTC">Bitcoin (BTC)</option>
          <option value="BTC">Etherum (ETH)</option>
          <option value="BTC">Koins (K)</option>
          <option value="BTC">Shiftcoin (SH)</option>






          </select>
          {/* <input
            onChange={(event) => {
              console.log(event.target.value);
              setCoinToBuy(event.target.value);
            }}
            id="coin"
            type="text"
            placeholder="Bitcoin (BTC)"
          /> */}
          <h4>
            <label htmlFor="naira">Currency</label>
          </h4>
          <select  name="" id="">

          <option value="BTC">Naira (NGN)</option>
          <option value="BTC">Dollars (USDT)</option>
          <option value="BTC">Euro (E)</option>
          <option value="BTC">Cedis (C)</option>






          </select>
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









