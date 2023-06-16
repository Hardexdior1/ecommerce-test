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
      <footer className="footer">
        <div>
          <h3>Products </h3>
          <li>
            <Link>Bitcoin</Link>
          </li>
          <li>
            <Link>Alt</Link>
          </li>
          <li>
            <Link>Flat</Link>
          </li>
          <li>
            <Link>Refill</Link>
          </li>
          <li>
            <Link>P2p</Link>
          </li>
        </div>
        <div>
          <h3>Learn</h3>
          <li>
            <Link>Blog</Link>
          </li>
          <li>
            <Link>Help center</Link>
          </li>
        </div>
        <div>
          <h3>Contact</h3>
          <li>
            <Link>Hello@tradexpress.com</Link>
          </li>
          <li>
            <Link>Support@tradexpress.com</Link>
          </li>
          <div>
            <Link>
              <img src={twitter} alt="" />
            </Link>
            <Link>
              <img src={telegram} alt="" />
            </Link>
            <Link>
              <img src={whatsapp} alt="" />
            </Link>
            <Link>
              <img src={facebook} alt="" />
            </Link>
          </div>
        </div>
        <div>
          <h3>Company</h3>
          <li>
            <Link>About us</Link>
          </li>
          <li>
            <Link>Careers</Link>
          </li>
          <li>
            <Link>Rates</Link>
          </li>
          <li>
            <Link>Mobile</Link>
          </li>
        </div>
        <div>
          <h3>Legal</h3>
          <li>
            <Link>Privacy Policy</Link>
          </li>
          <li>
            <Link>Anti-Money Laundering</Link>
          </li>
          <li>
            <Link>Terms and Conditions</Link>
          </li>
        </div>
      </footer>

      <div>
        <Link className="trad">
          <span className="copy">&copy;</span> 2023 Tradexpress Technologies.
          all right reserved
        </Link>
        <div>
          <small className="small"> coded by {"<> oluwadamilare </> "}</small>
        </div>{" "}
      </div>
      
    </div>
  );
};

export default Section7;
