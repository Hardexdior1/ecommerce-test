import React from "react";
import "../styles/Section6.css";
import group130 from '../Images/Group 130.png'
import group204 from "../Images/Group 204.png";
import group205 from "../Images/Group 205.png";

const Section6 = () => {
  return (
    <div>
      <div className="section6">
        <h3>Customer’s Review</h3>

        <div className="comment-div">
          <img src={group130} alt="" />
          <img className="uni-2" src={group204} alt="" />
          <img className="uni-3" src={group205} alt="" />
        </div>
      </div>
    </div>
  );
};

export default Section6;
