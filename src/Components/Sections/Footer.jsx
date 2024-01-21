import React from "react";
import { Link } from "react-router-dom";
import '../styles/Main.css'

const Footer = () => {
  return (
    <div>
      <footer>
        <Link to="/">
          {" "}
          <h2>Logo</h2>
        </Link>

        <p>&copy; 2024 all right reserved </p>
      </footer>
    </div>
  );
};

export default Footer;
