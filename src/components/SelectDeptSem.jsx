import React, { useState } from "react";
import Alert from "react-bootstrap/Alert";
import logo from "../assets/scam.png";
import { useNavigate } from "react-router-dom";

function SelectDeptSem() {
  const [department, setDepartment] = useState("");
  const [semester, setSemester] = useState("");
  const [nullAlert, setNullAlert] = useState(false);
  const navigate = useNavigate();
  const generateDashboard = (e) => {
    setNullAlert(false);
    e.preventDefault();
    if (semester == "" || department == "") {
      setNullAlert(true);
    } else {
      navigate(`${department}/${semester}/dashboard`);
    }
  };

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
                    htmlFor="department"
                    className="fw-bold"
                    style={{ fontSize: "20px" }}
                  >
                    Department &nbsp;&nbsp;&nbsp;
                  </label>

                  <select
                    value={department}
                    className="w-50 rounded  border border-3"
                    style={{ position: "relative", right: "0px" }}
                    onChange={(e) => setDepartment(e.target.value)}
                  >
                    <option>Department</option>
                    <option value="computerscience">Computer Science</option>
                    <option value={"economics"}>Economics</option>
                    <option value={"english"}>English</option>
                    <option value={"hindi"}>Hindi</option>
                    <option value={"malayalam"}>Malayalam</option>
                    <option value={"mathematics"}>Mathemathics</option>
                    <option value={"politicalscience"}>
                      Political Science
                    </option>
                    <option value={"Psychology"}>Psychology</option>
                    <option value={"Sanskrit"}>Sanskrit</option>
                    <option value={"Statistics"}>Statistics</option>
                  </select>
                </div>
                <br />
                <div className="col-12">
                  <label
                    htmlFor="password"
                    className="fw-bold"
                    style={{ fontSize: "20px" }}
                  >
                    Semester &nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;
                  </label>
                  <select
                    value={semester}
                    className="w-50 rounded border border-3"
                    style={{ position: "relative", right: "0px" }}
                    onChange={(e) => setSemester(e.target.value)}
                  >
                    <option>Semester</option>
                    <option value={"firstsem"}>1</option>
                    <option value={"secondsem"}>2</option>
                    <option value={"thirdsem"}>3</option>
                    <option value={"fourthsem"}>4</option>
                    <option value={"fifthsem"}>5</option>
                    <option value={"sixthsem"}>6</option>
                  </select>
                </div>
                <center>
                  <button
                    className="btn btn-primary mt-3"
                    onClick={generateDashboard}
                  >
                    Submit
                  </button>
                </center>
                {nullAlert ? (
                  <Alert variant="danger" className="mt-3">
                    Please fill all the details
                  </Alert>
                ) : (
                  <></>
                )}
              </form>
            </div>
          </div>
        </div>
      </div>
    </>
  );
}

export default SelectDeptSem;
