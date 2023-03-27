import React from "react";
import logo from "../assets/scam.png";

function AdminForm() {
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
                    UserName
                  </label>
                </div>
                <div className="col-12">
                  <input type="text" className="rounded" />
                </div>
                <div className="col-12 mt-3">
                  <label
                    htmlFor="password"
                    className="fw-bold"
                    style={{ fontSize: "20px" }}
                  >
                    Password
                  </label>
                </div>
                <div className="col-12">
                  <input type="password" className="rounded" />
                </div>
                <center>
                  <button className="btn btn-primary mt-3">Submit</button>
                </center>
              </form>
            </div>
          </div>
        </div>
      </div>
    </>
  );
}

export default AdminForm;
