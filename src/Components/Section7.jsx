import React from "react";
import { Link } from "react-router-dom";
import "../styles/Section7.css";
import twitter from "../Images/twitter.png";
import telegram from "../Images/telegram.png";
import whatsapp from "../Images/whatsapp.png";
import facebook from "../Images/facebook.png";

const Section7 = () => {
  return (
    <div>
      <div className="sec7-div">
        <div className="sec7-div1">
          <h5>Products</h5>
          <b>Bitcoin</b> <br />
          <b>Alt</b> <br />
          <b>Flat</b> <br />
          <b>Refill</b> <br />
          <b>P2P</b>
        </div>

        <div className="sec7-div2">
          <h5>Learn</h5>
          <b>Blog</b> <br />
          <b>Help Center</b> <br />
        </div>

        <div className="sec7-div3">
          <h5>Contact</h5>
          <b>hello@tradexpress.com</b> <br />
          <b>support@tradexpress.com</b> <br />
          <img src={twitter} alt="" />
          <img className="icon" src={telegram} alt="" />
          <img className="icon" src={whatsapp} alt="" />
          <img className="icon" src={facebook} alt="" />
        </div>

        <div className="sec7-div4">
          <h5>Company</h5>
          <b>About Us</b> <br />
          <b>Careers</b> <br />
          <b>Rates</b> <br />
          <b>Mobile</b>
        </div>
        <div className="sec7-div5">
          <h5>Legal</h5>
          <b>Privacy Policy</b> <br />
          <b>Anti-Money Laundering</b> <br />
          <b>Terms and Conditions</b> <br />
        </div>
      </div>

      <div className="last-div">
        <span className="copy">&copy;</span>{" "}
        <Link className="trad">
          {" "}
          2021 Tradexpress Technologies. All Right Reserved
        </Link>
      </div>
    </div>
  );
};

export default Section7;
