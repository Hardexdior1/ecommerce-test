import React from "react";
import "../styles/Section1.css";
import circleimg from "../Images/Group 127.png";
import apple from '../Images/Group 68@2x.png'
import google from '../Images/Group 69.png'
import { Link } from "react-router-dom";


const Section1 = () => {
  return (
    <div>
      <div className="sec1-div1">
        <div className="buy-sell-div">
          <h1>Buy Sell and Manage Your Crypto On TradExpress.</h1>
          <p>
            Easily Trade Cryptocurrencies like BTC, USDT, ETH, LTC & XRP with
            NGN.
          </p>
        </div>

        <div className="circle-img">
          {" "}
          <img src={circleimg} alt="" />
        </div>
        <Link className="get-started">Get Started</Link>
        <Link className="apple"><img src={apple} alt="" /></Link>
        <Link className="google"><img src={google} alt="" /></Link>
      </div>
    </div>
  );
};

export default Section1;
