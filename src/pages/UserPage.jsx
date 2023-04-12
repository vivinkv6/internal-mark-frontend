import React from "react";
import About from "../components/About";
import Contact from "../components/Contact";
import ImageSlider from "../components/ImageSlider";
import Location from "../components/Location";
import Notifications from "../components/Notifications";

function UserPage() {
  return (
    <>
      <ImageSlider />
      <div style={{ marginTop: "200px" }}>
      <About />
      </div>
      <div style={{ marginTop: "200px" }}>
        <Notifications />
      </div>
      <div style={{ marginTop: "200px" }}>
        <Contact />
      </div>
      <div style={{ marginTop: "200px" }}>
        <Location />
      </div>
    </>
  );
}

export default UserPage;
