import React, { useState } from "react";
import logo from "../assets/scam.png";
import axios from "axios";
import Modal from 'react-bootstrap/Modal';

function SearchResult() {
  const [register_no, setReg_no] = useState("");
  const [department, setDepartment] = useState("");
  const [semester, setSemester] = useState(0);
  const [result, setResult] = useState({});
  const [successAlert, setSuccessAlert] = useState(false);
  const [failureAlert, setFailureAlert] = useState(false);

  const fetchResult = async (e) => {
    e.preventDefault();
    const data = { register_no, semester, department };
    const datas = await fetch(`${import.meta.env.VITE_BACKEND_URL}api/result`, {
      method: "POST",
      body: JSON.stringify({ data }),
      headers: {
        'Content-type': 'application/json'
      }
    });
    console.log(datas.json());
    if (datas.ok) {
      setSuccessAlert(true);
      setFailureAlert(false);
      setDepartment("");
      setSemester("");
      setReg_no("");
    } else {
      setFailureAlert(true);
      setSuccessAlert(false);
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
              <h1 className="text-center text-light fw-bold">Internal Marks</h1>
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
                    htmlFor="register_no"
                    className="fw-bold"
                    style={{ fontSize: "20px" }}
                  >
                    Register
                  </label>
                  <input
                    type="text"
                    onchange={(e) => register_no(e.target.value)}
                    className="rounded ms-3"
                  />
                </div>
                <div className="col-12">
                  <label
                    htmlFor="department"
                    className="fw-bold"
                    style={{ fontSize: "20px" }}
                  >
                    Department
                  </label>
                  <select
                    className="w-50 mt-3 ms-4 rounded  border border-3"
                    style={{ position: "relative", right: "0px" }}
                  >
                    <option selected>Department</option>
                    <option
                      value={department}
                      onChange={() => setDepartment("Commerce and Management")}
                    >
                      Commerce and Management
                    </option>
                    <option
                      value={department}
                      onChange={() => setDepartment("Computer Science")}
                    >
                      Computer Science
                    </option>
                    <option
                      value={department}
                      onChange={() => setDepartment("Economics")}
                    >
                      Economics
                    </option>
                    <option
                      value={department}
                      onChange={() => setDepartment("English")}
                    >
                      English
                    </option>
                    <option
                      value={department}
                      onChange={() => setDepartment("Hindi")}
                    >
                      Hindi
                    </option>
                    <option
                      value={department}
                      onChange={() => setDepartment("Malayalam")}
                    >
                      Malayalam
                    </option>
                    <option
                      value={department}
                      onChange={() => setDepartment("Mathematics")}
                    >
                      Mathemathics
                    </option>
                    <option
                      value={department}
                      onChange={() => setDepartment("Political Science")}
                    >
                      Political Science
                    </option>
                    <option
                      value={department}
                      onChange={() => setDepartment("Psychology")}
                    >
                      Psychology
                    </option>
                    <option
                      value={department}
                      onChange={() => setDepartment("Sanskrit")}
                    >
                      Sanskrit
                    </option>
                    <option
                      value={department}
                      onChange={() => setDepartment("Statistics")}
                    >
                      Statistics
                    </option>
                  </select>
                </div>
                <div className="col-12">
                  <label
                    htmlFor="password"
                    className="fw-bold"
                    style={{ fontSize: "20px" }}
                  >
                    Semester
                  </label>
                  <select
                    className="w-50 rounded mt-3 ms-5 border border-3"
                    style={{ position: "relative", right: "0px" }}
                  >
                    <option selected>Semester</option>
                    <option value={semester} onchange={() => setSemester(1)}>
                      1
                    </option>
                    <option value={semester} onchange={() => setSemester(2)}>
                      2
                    </option>
                    <option value={semester} onchange={() => setSemester(3)}>
                      3
                    </option>
                    <option value={semester} onchange={() => setSemester(4)}>
                      4
                    </option>
                    <option value={semester} onchange={() => setSemester(5)}>
                      5
                    </option>
                    <option value={semester} onchange={() => setSemester(6)}>
                      6
                    </option>
                  </select>
                </div>
                <center>
                  <button
                    className="btn btn-primary mt-3"
                    onClick={fetchResult}
                  >
                    Submit
                  </button>

                  {successAlert && (
                    <Alert variant="success" className="mt-5">
                      Notification Send successfully
                    </Alert>
                  )}
                  {failureAlert && (
                    <Alert variant="danger" className="mt-5">
                      Something went Wrong!!
                    </Alert>
                  )}
                </center>
              </form>
            </div>
          </div>
        </div>
      </div>
    </>
  );
}

export default SearchResult;
