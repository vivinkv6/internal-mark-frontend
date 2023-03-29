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
        style={{ position: "static", bottom: "0%" }}
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
                <th>Home</th>
                <th>About</th>
                <th>Notification</th>
            </tr>
         </table>
          </div>
        </Container>
      </Navbar>
    </>
  );
}

export default Footers;
