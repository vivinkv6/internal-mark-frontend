import React from "react";
import Card from "react-bootstrap/Card";
import logo from "../assets/scam.png";
function Contact() {
  return (
    <div>
      <h1
        name="contact"
        id="contact"
        style={{
          color: "white",
          fontFamily: "Abril Fatface cursive",
          fontSize: "55px",
          marginLeft: "20px",
          fontWeight: "900",
        }}
      >
        Contact
      </h1>
      <Card style={{ width: "18rem", marginLeft: "20px" }} className="p-2 mb-5">
        <Card.Img variant="top" src={logo} />
        <hr />
        <Card.Body>
          <Card.Title>Name</Card.Title>
          <Card.Subtitle className="mb-2 text-muted">Position</Card.Subtitle>
        </Card.Body>
      </Card>
    </div>
  );
}

export default Contact;
