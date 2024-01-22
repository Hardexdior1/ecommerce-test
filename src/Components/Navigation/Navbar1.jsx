import React, { useRef, useState } from "react";

import "../styles/Navbar.css";
import { Link } from "react-router-dom";
import { FaShoppingCart } from "react-icons/fa";

const Navbar1 = ({length}) => {
  const [style1, setStyle1] = useState(true);
  window.addEventListener("scroll", () => {
    if (window.scrollY > 300) {
      setStyle1(false);
    } else {
      setStyle1(true);
    }
  });

  return (
    <div>
      <header>
        <nav className={style1 ? "nav" : "fixedNav"}>
          <Link to="/">
            <h2>Home</h2>
          </Link>

          <Link to="/Cart">
            <div className="cartRelative">
              <b className={length> 0 ? "green":"red"} >{length}</b>
              <FaShoppingCart className="cartIcon" />
            </div>
          </Link>
        </nav>
      </header>
    </div>
  );
};

export default Navbar1;
