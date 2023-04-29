import React from "react";
import error from "../assets/404.svg";
function FileNotFound() {
  return (
    <>
      <img
        src={error}
        alt="File Not Found"
        style={{ width: "100%", height: "300px", marginTop: "50px" }}
      />
    </>
  );
}

export default FileNotFound;
