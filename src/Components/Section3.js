import React from "react";
import "../styles/Section3.css";
import rafiki from "../Images/rafiki.png";
import cuate from "../Images/cuate.png";
import amicon from "../Images/amico.png";
import { useState } from "react";
import { useRef } from "react";
// import { useState } from "react";
const Section3 = () => {
  // const  [SeeMore,setSeeMore]=useState

  

  return (
    <div>
    

      
      <section className="section3">
        <h2>Why do people get involved with Cryptocurrencies?</h2>
        <div className="line"></div>

        <div className="threeFlexwrap">
          <div>
            <div>
              <img src={rafiki} alt="" />
            </div>
            <h3>Easy Mode Of Payment</h3>
            <p>
              People can now easily send and receive money from anywhere in the
              world to purchase goods and pay for services.
            </p>
          </div>
          

          <div>
            <div>
              <img src={cuate} alt="" />
            </div>
            <h3>Financial Freedom</h3>

            <p>
              Just like the internet no single entity controls the Crypto
              network which provides users transparency and privacy, which puts
              you in absolute control of your money.
            </p>
          </div>
          <div>
            <div>
              <img src={amicon} alt="" />

            </div>
            <h3>Investment</h3>
            <p>
              The constant demand as made Cryptocurrecies a Digital Gold used
              for alternative store of wealth on long term investments.
            </p>
          </div>
        </div>
      </section>
    </div>
  );
};

export default Section3;
