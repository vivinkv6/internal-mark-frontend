import React from "react";

function Notifications() {
  return (
    <>
      <h1
        name="notification"
        id="notification"
        style={{
          color: "white",
          fontFamily: "Abril Fatface cursive",
          fontSize: "55px",
          marginLeft: "20px",
          fontWeight: "900",
        }}
      >
        Notifications
      </h1>
      <div
        className="box ms-3"
        style={{
          backgroundColor: "white",
          height: "300px",
          width: "350px",
          overflow: "scroll",
        }}
      >
        <div className="notification border border-3 border-secondary mt-3 rounded ms-3 me-3">
          <p>Notification One</p>
          <a href="link" style={{ textDecoration: "none" }}>
            Open
          </a>
        </div>
      </div>
    </>
  );
}

export default Notifications;
