import React, { useState } from "react";
import "../Components/Review.css"
import people from "./ReviewsData";
import dami from "../Images/Group 205.png";
import Prince from "../Images/Group 130.png";
import filli2 from "../Images/Group 204.png";

const Review1 = () => {
  const [index, setIndex] = useState(0);
  const { img } = people[index];

  const checkNumber = (number) => {
    if (number > people.length - 1) {
      return 0;
    }
    if (number < 0) {
      return people.length - 1;
    }

    return number;
  };

  const randomPerson = () => {
    let randomNumber = Math.floor(Math.random() * people.length);
    if (randomNumber === index) {
      randomNumber = index - 1;
    }

    setIndex(checkNumber(randomNumber))
  };

  const nextPerson = () => {
    setIndex((index) => {
      let newIndex = index + 1;

      return checkNumber(newIndex);
    });
  };

  const prevPerson = () => {
    setIndex((index) => {
      let newIndex = index - 1;

      return checkNumber(newIndex);
    });
  };
  return (
    <div>
      <article className="review">
        <h2>Customer's  review</h2>
        <div className="underline"></div>

        <div className="img-container">
          <div className="img">

            <img className="test" src={img} alt="alt" />
          </div>
          
          <div className="button-cont">
            <button className="btn" onClick={prevPerson}>
              {'<'}
            </button>{" "}
            <button className="btn" onClick={nextPerson}>
              {'>'}
            </button>
          </div>
          <button className="randomBtn" onClick={()=>{
            randomPerson()
          }}>random reviews</button>
        </div>
        <div className="flex">
          <div><img src={dami} alt="img" /></div>
          <div><img src={Prince} alt="img" /></div>
          <div><img src={filli2} alt="img" /></div>


        </div>

      </article>
    </div>
  );
};

export default Review1;
