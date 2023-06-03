import React, { useState } from "react";
import "../styles/Section6.css";

import Reviews from "./ReviewsData";

const Section6 = () => {
  const [index, setIndex] = useState(0);
  const { img } = Reviews[index];
  const nextPerson = () => {
    setIndex((index) => {
      let newIndex = index + 1;
      return newIndex;
    });
  };
  const prevPerson = () => {
    setIndex((index) => {
      let newIndex = index - 1;
      return newIndex;
    });
  };
  return (
    <div className="section6">
      <h2>Customer’s Review</h2>

      <div>
        <div className="eachReview">
          <div>
            <img src={img} alt="" />
          </div>

          
        </div>
        <div>
            {" "}
            <button onClick={prevPerson}> {"<"}</button>
          </div>
          <div>
            <button onClick={nextPerson}> {">"}</button>
          </div>
      </div>
    </div>
  );
};

export default Section6;
