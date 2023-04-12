import React from "react";
import Button from "react-bootstrap/Button";
import Container from "react-bootstrap/Container";
import Form from "react-bootstrap/Form";
import Nav from "react-bootstrap/Nav";
import Navbar from "react-bootstrap/Navbar";
import Offcanvas from "react-bootstrap/Offcanvas";
import logo from "../assets/scam.png";
import { Link } from "react-router-dom";
import NavDropdown from "react-bootstrap/NavDropdown";

function Footers() {
  return (
    <>
      <Navbar
        bg="dark"
        expand="lg"
        style={{ position: "static", bottom: "0%",marginTop:'300px' }}
      >
        <Container fluid>
          <Navbar>
            <Container>
              <Navbar.Brand href="#home">
                <img
                  src={logo}
                  width="100"
                  height="100"
                  className="d-inline-block align-top text-light"
                  alt="college logo"
                />
              </Navbar.Brand>
            </Container>
          </Navbar>
          <div style={{color:'white'}}>
         <table cellPadding={5}>
            <tr>
                
                
              <a href="http://govtcollegethrissur.ac.in/" target="_blank"> <th className="bi bi-globe fs-3"></th></a> 
                <th className="bi bi-youtube fs-3 text-danger"></th>
                <th className="bi bi-instagram fs-3" style={{color:'#C02E71'}}></th>
                <th className="bi bi-linkedin fs-3" style={{color:' #0077B5'}}></th>
            </tr>
         </table>
          </div>
        </Container>
      </Navbar>
    </>
  );
}

export default Footers;
