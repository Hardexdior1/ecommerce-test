import React from "react";
import "../styles/Section4.css";
// import img1 from "../Images/Vector.png";
import cuate2 from "../Images/cuate2.png";
import piggy from "../Images/piggy.png";
import bitcoin from "../Images/bitcoin.png";
const Section4 = () => {
  return (
    <div>
       

      <section className="section4">
        <h2>
          {" "}
          <h2>Buy and Sell your Cryptocurrency in 3 simple steps</h2>
        </h2>
        <div className="section5Flex">
          <div>
            <button>1</button>
            <span>Create free account</span>
            <p>
              Sign up for your free TradExpress Wallet on web, iOS, or Android
              devices and follow our easy process to set up your profile.
            </p>
          </div>

          <div>
            <img src={cuate2} alt="image" />
          </div>
          <div>
            <button>2</button>
            <span>Deposit</span>
            <p>
              Choose your preferred deposit option like bank transfer,
              credit/debit card or send digital asset directly to your wallet
              for easy funding/withdrawal
            </p>
          </div>

          <div>
            <img src={piggy} alt="image" />
          </div>
          <div>
            <button>3</button>
            <span>Buy/ Sell Crypto</span>
            <p>
              Sign up for your free TradExpress Wallet on web, iOS, or Android
              devices and follow our easy process to set up your profile.
            </p>
          </div>

          <div>
            <img src={bitcoin} alt="image" />
          </div>
        </div>
      </section>
    </div>
  );
};

export default Section4;
