import React from "react";
import About from "../components/About";
import Contact from "../components/Contact";
import ImageSlider from "../components/ImageSlider";
import Notifications from "../components/Notifications";

function UserPage() {
  return (
    <>
      {/* <ImageSlider/> */}
      <About />
      <div style={{ marginTop: "200px" }}>
        <Notifications />
      </div>
      <div style={{ marginTop: "200px" }}>
        <Contact />
      </div>
    </>
  );
}

export default UserPage;
