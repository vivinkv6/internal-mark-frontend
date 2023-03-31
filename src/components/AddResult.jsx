import React from "react";
import logo from "../assets/scam.png";
import "./styles/style.css";
function AddResult() {
  return (
    <>
      <div className="container">
        <div className="row">
          <div
            className="addresult"
            style={{
              height: "600px",
              padding: "10px",
              display: "flex",
              flexDirection: "column",
              justifyContent: "center",
              alignItems: "center",
              overflow: "scroll",
            }}
          >
            <div>
              <h1 className="heading">Add Student Result</h1>
              <form
                action=""
                className="rounded"
                style={{ backgroundColor: "white", padding: "50px" }}
              >
                <center>
                  <img
                    src={logo}
                    height="100"
                    className="mb-5"
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
                  <input type="text" className="rounded ms-4" />
                </div>

                <div className="col-12 mt-3">
                  <label
                    htmlFor="password"
                    className="fw-bold"
                    style={{ fontSize: "20px" }}
                  >
                    Register No.
                  </label>
                  <input type="password" className="rounded ms-2" />
                </div>
                <div className="col-12 mt-3">
                  <label
                    htmlFor="password"
                    className="fw-bold"
                    style={{ fontSize: "20px" }}
                  >
                    Department
                  </label>
                  <select
                    className="w-50 rounded ms-2 border border-3"
                    style={{ position: "relative", right: "0px" }}
                  >
                    <option selected>Department</option>
                    <option>Commerce and Management</option>
                    <option>Computer Science</option>
                    <option>Economics</option>
                    <option>English</option>
                    <option>Hindi</option>
                    <option>Malayalam</option>
                    <option>Mathemathics</option>
                    <option>Political Science</option>
                    <option>Psychology</option>
                    <option>Sanskrit</option>
                    <option>Statistics</option>
                  </select>
                </div>
                <div className="col-12 mt-3">
                  <label
                    htmlFor="password"
                    className="fw-bold"
                    style={{ fontSize: "20px" }}
                  >
                    Semester
                  </label>
                  <select
                    className="w-50 rounded ms-4 border border-3"
                    style={{ position: "relative", right: "0px" }}
                  >
                    <option selected>Semester</option>
                    <option>1</option>
                    <option>2</option>
                    <option>3</option>
                    <option>4</option>
                    <option>5</option>
                    <option>6</option>
                  </select>
                </div>
                <div className="col-12 mt-3">
                  <label
                    htmlFor="password"
                    className="fw-bold"
                    style={{ fontSize: "20px" }}
                  >
                    Subject
                  </label>
                  <input type="text" className="rounded ms-5" />
                </div>
                <div className="col-12 mt-3">
                  <label
                    htmlFor="password"
                    className="fw-bold"
                    style={{ fontSize: "20px" }}
                  >
                    Subject Code
                  </label>
                  <input type="text" className="rounded ms-3" />
                </div>
                <div className="col-12 mt-3">
                  <label className="fw-bold" style={{ fontSize: "30px" }}>
                    Marks
                  </label>
                </div>
                <div className="col- mt-3">
                  <label
                    htmlFor="password"
                    className="fw-bold"
                    style={{ fontSize: "20px" }}
                  >
                    Assignment
                  </label>
                  <input type="number" className="rounded ms-3 w-25" />
                </div>
                <div className="col-12 mt-3">
                  <label
                    htmlFor="password"
                    className="fw-bold"
                    style={{ fontSize: "20px" }}
                  >
                    Seminar
                  </label>
                  <input type="number" className="rounded ms-5 w-25" />
                </div>
                <div className="col-12 mt-3">
                  <label
                    htmlFor="password"
                    className="fw-bold"
                    style={{ fontSize: "20px" }}
                  >
                    Attendence
                  </label>
                  <input type="number" className="rounded ms-3 w-25" />
                </div>
                <div className="col-12 mt-3">
                  <label
                    htmlFor="password"
                    className="fw-bold"
                    style={{ fontSize: "20px" }}
                  >
                    Internal
                  </label>
                  <input type="number" className="rounded ms-5 w-25" />
                </div>
                <div className="col-12 mt-3">
                  <label
                    htmlFor="password"
                    className="fw-bold"
                    style={{ fontSize: "20px" }}
                  >
                    Total Score
                  </label>
                  <input type="text" className="rounded ms-3 w-25" />
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

export default AddResult;
