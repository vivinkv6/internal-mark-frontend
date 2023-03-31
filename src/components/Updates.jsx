import React from "react";
import logo from "../assets/scam.png";

function Updates() {
  return (
    <>
      <div className="container">
        <div className="row">
          <div
            className="adminform"
            style={{
              height: "600px",
              padding: "10px",
              display: "flex",
              flexDirection: "column",
              justifyContent: "center",
              alignItems: "center",
            }}
          >
            <div>
              <form
                action=""
                className="rounded"
                style={{ backgroundColor: "white", padding: "50px" }}
              >
                <center>
                  <img
                    src={logo}
                    height="100"
                    className="mb-3"
                    alt="college logo"
                  />
                </center>
                <div className="col-12">
                  <label
                    htmlFor="username"
                    className="fw-bold"
                    style={{ fontSize: "20px" }}
                  >
                    Notification
                  </label>
                </div>
                <div className="col-12">
                  <textarea
                    name=""
                    id=""
                    cols="30"
                    rows="5"
                    className="rounded"
                  ></textarea>
                </div>

                <center>
                  <button className="btn btn-primary mt-3">Publish</button>
                </center>
              </form>
            </div>
          </div>
        </div>
      </div>
    </>
  );
}

export default Updates;
