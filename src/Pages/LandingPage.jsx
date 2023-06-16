import React from "react";
import Section1 from "../Components/Section1";
import Section2 from "../Components/Section2";
import Section3 from "../Components/Section3";
import Section4 from "../Components/Section4";
import Section5 from "../Components/Section5";
import Section6 from "../Components/Section6";
import Section7 from "../Components/Section7";
import CarouselReview from '../Components/CarouselReview'
import News from "../Components/News";
import TestingRemove from "../Components/TestingRemove";
// import BuySell from "../Components/BuySell";
// import Sellbuy from "../Components/Sellbuy";


const LandingPage = ({rate}) => {
  
  
  return (
    <div>
    {/* <a href="">hello</a> */}
      
      
      <Section1 />
      {/* <Section2  rates={rate}/> */}
        <Section3 /> 
       <Section4 /> 
      <Section5 />
      <News />
      <CarouselReview />
      <Section7 /> 
      {/* <TestingRemove />   */}

     
    </div>
  );
};

export default LandingPage;
