import React from "react";

function About() {
  return (
    <>
      <h1
        name="about"
        id="about"
        style={{
          color: "white",
          fontFamily: "Abril Fatface, cursive",
          fontSize: "55px",
          marginLeft: "5px",
          fontWeight: "900",
          letterSpacing:"2.5px"
        }}
      >
        About
      </h1>
      <div style={{marginLeft:'5px',fontSize:'25px',color:'#d1d1d1',fontFamily:'Jost, sans-serif'}}>
      <p>
        Welcome to our web app that provides a platform for students to access
        their internal marks. We believe that transparency and accessibility are
        essential components of a student-centric education system. Therefore,
        we have designed this web app to enable students to access their
        internal marks conveniently and easily.
      </p>
      <p>
        Our web app is a secure platform that allows students to view their
        internal marks from any location with an internet connection. The
        internal marks published on our web app are the result of a fair and
        transparent assessment process. We ensure that the evaluation process is
        based on a set of predefined criteria, and the marking is done
        objectively.
      </p>
      </div>
    </>
  );
}

export default About;
