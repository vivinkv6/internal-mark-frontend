import React from "react";
import Button from "react-bootstrap/Button";
import Container from "react-bootstrap/Container";
import Form from "react-bootstrap/Form";
import Nav from "react-bootstrap/Nav";
import Navbar from "react-bootstrap/Navbar";
import logo from "../assets/scam.png";
import { Link } from "react-router-dom";

function Navbars() {
  return (
    <>
      <Navbar bg="dark" expand="md">
        <Container fluid>
          <Navbar>
            <Container>
              <Link to="/">
                <Navbar.Brand>
                  <img
                    src={logo}
                    width="100"
                    height="100"
                    className="d-inline-block align-top text-light"
                    alt="college logo"
                  />
                </Navbar.Brand>
              </Link>
            </Container>
          </Navbar>
          <Navbar.Toggle aria-controls="navbarScroll" />
          <Navbar.Collapse id="navbarScroll">
            <Nav
              className="justify-content-end flex-grow-1 pe-3"
              style={{ maxHeight: "200px" }}
              navbarScroll
            >
              <Link to="/" href="#home" className="text-decoration-none">
                <Nav.Link
                  href="#action1"
                  className="text-light"
                  style={{ fontSize: "20px", fontWeight: "500" }}
                >
                  Home
                </Nav.Link>
              </Link>
              <Nav.Link
                href="#about"
                className="text-light"
                style={{ fontSize: "20px", fontWeight: "500" }}
              >
                About
              </Nav.Link>
              <Nav.Link
                href="#notification"
                className="text-light"
                style={{ fontSize: "20px", fontWeight: "500" }}
              >
                Notification
              </Nav.Link>
              <Nav.Link
                href="#contact"
                className="text-light"
                style={{ fontSize: "20px", fontWeight: "500" }}
              >
                Contact
              </Nav.Link>
              <Nav.Link
                href="#location"
                className="text-light"
                style={{ fontSize: "20px", fontWeight: "500" }}
              >
                Location
              </Nav.Link>
            </Nav>
          </Navbar.Collapse>
        </Container>
      </Navbar>
    </>
  );
}

export default Navbars;
