import React, { useEffect, useState } from "react";
import "../styles/List.css";
import { FaStar } from "react-icons/fa";
import { FaTimes } from "react-icons/fa";

import { Link } from "react-router-dom";

const List = ({ img, name, price, category, id, handleAddToCart }) => {
  const [showModule, setModule] = useState(false);


  // const [defaultImg, setDefaultImg] = useState(img);

  const handleImageClick = () => {
    setModule(true);
    window.scrollTo(0, 100);
  };

  

  return (
    <div>
     
      <div className="card">
        <div>
          <div
            onClick={() => {
              handleImageClick();
            }}>
            <img src={img} alt={name + "shirt"} />
          </div>

          <div className="flexTexts">
            <h4 className="price">${price}</h4>
            <h4 className="name">name : {name}</h4>

            <div className="ratings">
              <FaStar />
              <FaStar />
              <FaStar />
              <FaStar />
            </div>
          </div>

          <button
            onClick={() => {
              handleAddToCart();
            }}>
            Add to cart{" "}
          </button>
        </div>
      </div>

      {showModule ? (
        <div>
          <div className="absolute">
            <div>
              <div
                className="remove"
                onClick={() => {
                  setModule(false);
                }}>
                <FaTimes />
              </div>

              <div className="gridDetails">
                <img src={img} alt="image" />

                <div>
                  <h2>{name}</h2>
                  <p>
                    Latest <b>{name}</b> for <b>{category}</b>
                  </p>
                </div>

                <button
                  className="btn"
                  onClick={() => {
                    handleAddToCart();
                    setModule(false);
                    window.scrollTo(0, 0);
                  }}>
                  Add to cart{" "}
                </button>
              </div>
            </div>
          </div>
        </div>
      ) : (
        ""
      )}
    </div>
  );
};

export default List;
