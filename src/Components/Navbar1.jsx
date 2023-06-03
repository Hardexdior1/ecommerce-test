import React, { useRef } from "react";
import { Container, Nav, Navbar } from "react-bootstrap";
import tradExpressLogo from "../Images/TradExpress (1).png";
// import Navbarcss from '../styles/Navbar.css';
import "../styles/Navbar.css";
import { Link } from "react-router-dom";
// import '../Pages/Sellbuy'
// const useRef=(nav);
const Navbar1 = () => {
  const nav =useRef()

  const Click=()=>{
    if(nav.current.classList.contains('ul')){
      nav.current.classList.remove('ul')
      nav.current.classList.add('showUl')


    }
    else{
      nav.current.classList.remove('showUl')

      nav.current.classList.add('ul')

    }
  }
  const style = {
    backgroundColor: "#7C20BE",
  };
  return (
    <div>
      {/* <h1>hello world</h1> */}
      <nav className="navBar" >
        <div>
          {" "}
          <Link to='/' path='/'>
            {" "}
            <img src={tradExpressLogo} alt="" />
          </Link>
        </div>
        <ul className="ul" ref={nav}>
          <li>
            <Link className="Link" to="/Sellbuy"> instant Buy/Sell </Link>
          </li>
          <li>
            <Link className="Link"> Learn </Link>
          </li>
          <li>
            <Link className="Login" to="/Login"> Login</Link>
          </li>
          <li>
              <Link className="getStartedLink"to="/Getstarted" > Get started</Link>
          </li>
        </ul>
        <div className="menu" onClick={Click}>
          <div></div>
          <div></div>
          <div></div>      
        </div>
      </nav>
      
      
    </div>
  );
};

export default Navbar1;
