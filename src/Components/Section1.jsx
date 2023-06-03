import React from "react";
import "../styles/Section1.css";
import circleimg from "../Images/Group 127.png";
import apple from '../Images/Group 68@2x.png'
import google from '../Images/Group 69.png'
import { Link } from "react-router-dom";


const Section1 = () => {
  return (
    <div>
      

      <div className="section1">
        <div className="textCarrier">
          <div>
          <h1>Buy Sell and Manage Your Crypto On TradExpress.</h1>
          <div><small>
            Easily Trade Cryptocurrencies like BTC, USDT, ETH, LTC & XRP with
            NGN.
          </small></div>
          </div>
  <div className="linkCarrier">
          
  <Link to='Getstarted' className="get-started2">Get Started</Link>
    <div className="link2Carrier">
    <Link className="appleSecond"><img src={apple} alt="" /></Link>
        <Link className="googleSecond" ><img src={google} alt="" /></Link>
    </div>
  </div>

        </div>

      </div>
    </div>
  );
};

export default Section1;
