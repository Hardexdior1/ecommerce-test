import React from "react";
import { Container, Nav, Navbar } from "react-bootstrap";
import tradExpressLogo from "../Images/TradExpress (1).png";
// import Navbarcss from '../styles/Navbar.css';
import '../styles/Navbar.css'
import { Link } from "react-router-dom";
import '../Pages/Sellbuy'


const Navbar1 = () => {
  const style = {
    backgroundColor: "#7C20BE",
  };
  return (
    <Navbar className="navbar1" style={style} expand="lg">
      <Container>
        <Navbar.Brand href="#home">
          <Link to='/Landingpage' path='/landingPage'>
            <img src={tradExpressLogo} alt="" />
          </Link>
        </Navbar.Brand>
        <Navbar.Toggle aria-controls="basic-navbar-nav" />
        <Navbar.Collapse id="basic-navbar-nav">
          <Nav className="me-auto">
           
           <Link className="link" to='/Sellbuy'>instant buy/sell</Link>
            <Link className="link">Learn</Link>
            <Link className="button1" to='/login'>login</Link>
            <Link className="button2"  to='/Getstarted'>Get started</Link>
           

           
          </Nav>
        </Navbar.Collapse>
      </Container>
    </Navbar>
  );
};

export default Navbar1;
