import React from "react";
import "../styles/Section5.css";
import {Link} from 'react-router-dom'
import apple from '../Images/Group 68@2x.png'
import google from '../Images/Group 69.png'
const Section5 = () => {
  return (
    <div>
      <div className="section5">
        <p>Ready to trade Buy/Sell cryptocurrencies in just 10 minutes?</p>
        <h2>Create your account for free and start trading today!</h2>

        <div>
          {" "}
          
          <Link className="started"  to="/getstarted">Get started</Link>

        </div>
        <Link><img className="apple2" src={apple} alt="" /></Link>
        <Link ><img className="google2" src={google} alt="" /></Link>
      </div>
    </div>
  );
};

export default Section5;
