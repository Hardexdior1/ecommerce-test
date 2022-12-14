import React from "react";
import "../styles/Section4.css";
import img1 from "../Images/Vector.png";
import cuate2 from "../Images/cuate2.png";
import piggy from "../Images/piggy.png";
import bitcoin from '../Images/bitcoin.png'
const Section4 = () => {
  return (
    <div>
      <div className="sec4-div">
        <div className="buy-div">
        <h2>Buy and Sell your Cryptocurrency in 3 simple steps</h2>
        <p>
          Lorem ipsum dolor sit amet, consectetur adipiscing elit. Est lectus
          faucibus et nunc id sollicitudin pretium nulla. Et nunc tempus mauris
          ullamcorper mauris, rhoncus sed magna. Eu consectetur nulla aliquam
          consectetur lectus. Rutrum feugiat et, tellus mattis donec et odio
          molestie amet.
        </p>
        </div>

        <div className="sec4-general-div">
          <div className="div1">
            <img className="img1" src={img1} alt="" />
            <span>Create Free Account</span>

            <p>
              Sign up for your free TradExpress Wallet on web, iOS, or Android
              devices and follow our easy process to set up your profile.
            </p>
          </div>
          <div className="div2">
            <img src={cuate2} alt="" />
          </div>
          <div className="div3">
            <img src={piggy} alt="" />
          </div>
          <div className="div4">
            <button className="btn">2</button>
            <span>Deposit</span>
            <p>
              Choose your preferred deposit option like bank transfer,
              credit/debit card or send digital asset directly to your wallet
              for easy funding/withdrawal.
            </p>
          </div>
          <div className="div5">
            <button className="btn">3</button>
            <span>Buy/ Sell Crypto</span>
            <p>
              Sign up for your free TradExpress Wallet on web, iOS, or Android
              devices and follow our easy process to set up your profile.
            </p>
          </div>
          <div className="div6"><img src={bitcoin} alt="" /></div>
        </div>
      </div>
    </div>
  );
};

export default Section4;
