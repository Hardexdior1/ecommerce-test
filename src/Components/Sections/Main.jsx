import React, { useState } from "react";
import "../styles/Main.css";
import List from "./List";
import { FaShoppingCart } from "react-icons/fa";
import { Link } from "react-router-dom";

const Main = ({
  listItems,
  handleSearchChange,
  messageIfTheSearchHasNoResult,
  firstPage,
  secondPage,
  thirdPage,
  handleAddToCart,
  message,
}) => {
  const [style1, setStyle1] = useState(true);
  window.addEventListener("scroll", () => {
    if (window.scrollY > 300) {
      setStyle1(false);
    } else {
      setStyle1(true);
    }
  });

  return (
    <main>
      <marquee behavior="normal" direction="left">
        <b>
          {" "}
          Elevate Your Style with Affordable & Quality Clothes at Affordable
          Price !!!{" "}
        </b>
      </marquee>
      <div className={style1 ? "flexFiltering" : "fixedFilter"}>
        <input
          type="search"
          placeholder="Search by name, price or category"
          onChange={handleSearchChange}
          className="search"
        />
      </div>
      {messageIfTheSearchHasNoResult && (
        <p className="noResult">{messageIfTheSearchHasNoResult}</p>
      )}

      <center className="center">
        {message && <small className="small">{message}</small>}
      </center>
      <div className="gridProductCards">
        {listItems.map((datum) => {
          return (
            <List
              key={datum.id}
              {...datum}
              handleAddToCart={() => handleAddToCart(datum)}
            />
          );
        })}
      </div>

      <div className="buttons">
        <button onClick={firstPage}>1</button>
        <button onClick={secondPage}>2</button>
        <button onClick={thirdPage}>3</button>
      </div>
    </main>
  );
};

export default Main;
