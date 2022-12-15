import React from "react";
import "../styles/Section2.css";

const Section2 = ({ rates }) => {
  console.log(rates);
  
  return (
    <div className="sec-2">
      {rates.map((each) => {
        return (
          <div key={each.id} className="rates-container">
            <div className="each-rate">
              <div className="top-section">
                <p>{each.name}</p>
                <p>{each.percent_change_24}</p>
              </div>
              <p>{each.price_usd}</p>
              <p>{each.time}</p>
              <p></p>
            </div>
          </div>
        );
      })}
    </div>
  );
};

export default Section2;
