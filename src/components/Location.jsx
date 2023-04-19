import React from "react";

function Location() {
  return (
    <div className="col-md-12 ms-2">
      <h1
        name="location"
        id="location"
        style={{
          color: "white",
          fontFamily: "Abril Fatface, cursive",
          fontSize: "55px",
          fontWeight: "900",
          letterSpacing:"2.5px"
        }}
      >
        Location
      </h1>

      <iframe
        src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3923.003992438407!2d76.25226661524003!3d10.500350767098931!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x3ba7efe2321e5bd5%3A0xf58b73959ae41e5c!2sSri%20C%20Achutha%20Menon%20Government%20College%2C%20Thrissur!5e0!3m2!1sen!2sin!4v1680224699597!5m2!1sen!2sin"
        className="rounded mb-5 "
        width="95%"
        height="400"
        style={{ border: "0px" }}
        allowfullscreen=""
        loading="lazy"
        referrerpolicy="no-referrer-when-downgrade"
      ></iframe>
    </div>
  );
}

export default Location;
