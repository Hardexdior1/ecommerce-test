import React, { useRef, useState } from "react";

import "../styles/Navbar.css";
import { Link } from "react-router-dom";
import { FaShoppingCart } from "react-icons/fa";


const Navbar1 = () => {
  const [style1,setStyle1]=useState(true)
  window.addEventListener('scroll',()=>{
    if(window.scrollY>300){
        setStyle1(false)
    }
    else{
      setStyle1(true)
    }
  })
 
  return (
    <div>
        <header>
          <nav className={style1?"nav":"fixedNav"}>
            <Link to="/" >
            <h2>Logo</h2></Link>

            <div>
            <FaShoppingCart />
          </div>
          </nav>
          
        </header>
       
      
      
    </div>
  );
};

export default Navbar1;
