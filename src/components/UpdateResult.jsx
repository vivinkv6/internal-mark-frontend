import React, { useEffect, useState } from "react";
import { useParams } from "react-router-dom";
import logo from "../assets/scam.png";
import { Alert } from "react-bootstrap";
import "./styles/style.css";

function UpdateResult() {
  const { id } = useParams();
  const [name, setName] = useState("");
  const [register_no, setRegister_no] = useState("");
  const [department, setDepartment] = useState("");
  const [semester, setSemester] = useState("");
  const [subject, setSubject] = useState("");
  const [subjectCode, setSubjectCode] = useState("");
  const [assignment, setAssignment] = useState("");
  const [seminar, setSeminar] = useState("");
  const [attendence, setAttendence] = useState("");
  const [internal, setInternal] = useState("");
  const [total, setTotal] = useState("");
  const [failureAlert, setFailureAlert] = useState(false);
  const [message, setMessage] = useState("");

  return (
    <div className="container">
      <div className="row">
        <div
          className="addresult"
          // style={{
          //   height: "600px",
          //   padding: "10px",
          //   display: "flex",
          //   flexDirection: "column",
          //   justifyContent: "center",
          //   alignItems: "center",
          //   overflow: "scroll",
          // }}
        >
          <div>
            <h1 className="heading">Update Student Result</h1>
            <form
              className="rounded"
              style={{ backgroundColor: "white", padding: "30px" }}
            >
              <center>
                <img
                  src={logo}
                  height="100"
                  className="mb-5"
                  alt="college logo"
                />
              </center>
              <center>
                <div className="col-12">
                  <label
                    htmlFor="username"
                    className="fw-bold"
                    style={{ fontSize: "20px" }}
                  >
                    UserName &nbsp;&nbsp;&nbsp;&nbsp;
                  </label>
                  <input
                    value={name}
                    onChange={(e) => setName(e.target.value)}
                    type="text"
                    style={{ height: "30px" }}
                    className="rounded w-50"
                  />
                </div>

                <div className="col-12 mt-3">
                  <label
                    htmlFor="password"
                    className="fw-bold"
                    style={{ fontSize: "20px" }}
                  >
                    Register No. &nbsp;&nbsp;
                  </label>
                  <input
                    value={register_no}
                    onChange={(e) => setRegister_no(e.target.value)}
                    style={{ height: "30px" }}
                    type="text"
                    className="rounded w-50"
                  />
                </div>
                <div className="col-12 mt-3">
                  <label
                    htmlFor="password"
                    className="fw-bold"
                    style={{ fontSize: "20px" }}
                  >
                    Department &nbsp;&nbsp;
                  </label>
                  <select
                    className="w-50 rounded  border border-3 w-50"
                    style={{
                      position: "relative",
                      right: "0px",
                      height: "30px",
                    }}
                    value={department}
                    onChange={(e) => setDepartment(e.target.value)}
                  >
                    <option value={"Commerce and Management"}>
                      Commerce and Management
                    </option>
                    <option value={"Computer Science"}>Computer Science</option>
                    <option value={"Economics"}>Economics</option>
                    <option value={"English"}>English</option>
                    <option value={"Hindi"}>Hindi</option>
                    <option value={"Malayalam"}>Malayalam</option>
                    <option value={"Mathemathics"}>Mathemathics</option>
                    <option value={"Political Science"}>
                      Political Science
                    </option>
                    <option value={"Psychology"}>Psychology</option>
                    <option value={"Sanskrit"}>Sanskrit</option>
                    <option value={"Statistics"}>Statistics</option>
                  </select>
                </div>
                <div className="col-12 mt-3">
                  <label
                    htmlFor="password"
                    className="fw-bold"
                    style={{ fontSize: "20px" }}
                  >
                    Semester &nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;
                  </label>
                  <select
                    value={semester}
                    onChange={(e) => setSemester(e.target.value)}
                    className="w-50 rounded  border border-3"
                    style={{
                      position: "relative",
                      right: "0px",
                      height: "30px",
                    }}
                  >
                    <option>Semester</option>
                    <option value={1}>1</option>
                    <option value={2}>2</option>
                    <option value={3}>3</option>
                    <option value={4}>4</option>
                    <option value={5}>5</option>
                    <option value={6}>6</option>
                  </select>
                </div>
                <div className="col-12 mt-3">
                  <label
                    htmlFor="password"
                    className="fw-bold"
                    style={{ fontSize: "20px" }}
                  >
                    Subject
                    &nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;
                  </label>
                  <input
                    value={subject}
                    onChange={(e) => setSubject(e.target.value)}
                    type="text"
                    style={{ height: "30px" }}
                    className="rounded w-50"
                  />
                </div>
                <div className="col-12 mt-3">
                  <label
                    htmlFor="password"
                    className="fw-bold"
                    style={{ fontSize: "20px" }}
                  >
                    Subject Code &nbsp;
                  </label>
                  <input
                    value={subjectCode}
                    onChange={(e) => setSubjectCode(e.target.value)}
                    type="text"
                    style={{ height: "30px" }}
                    className="rounded w-50"
                  />
                </div>
              </center>
              <div className="col-12 mt-3">
                <label
                  className="fw-bold"
                  style={{
                    fontSize: "30px",
                    marginLeft: "32%",
                    textDecoration: "underline",
                  }}
                >
                  Marks
                </label>
              </div>
              <center>
                <div className="col- mt-3">
                  <label
                    htmlFor="password"
                    className="fw-bold"
                    style={{ fontSize: "20px" }}
                  >
                    Assignment &nbsp;&nbsp;&nbsp;
                  </label>
                  <input
                    value={assignment}
                    onChange={(e) => setAssignment(e.target.value)}
                    type="number"
                    className="rounded w-25"
                  />
                </div>
                <div className="col-12 mt-3">
                  <label
                    htmlFor="password"
                    className="fw-bold"
                    style={{ fontSize: "20px" }}
                  >
                    Seminar &nbsp;&nbsp;&nbsp; &nbsp;&nbsp;&nbsp; &nbsp;
                  </label>
                  <input
                    value={seminar}
                    onChange={(e) => setSeminar(e.target.value)}
                    type="number"
                    className="rounded w-25"
                  />
                </div>
                <div className="col-12 mt-3">
                  <label
                    htmlFor="password"
                    className="fw-bold"
                    style={{ fontSize: "20px" }}
                  >
                    Attendence &nbsp;&nbsp;&nbsp;
                  </label>
                  <input
                    value={attendence}
                    onChange={(e) => setAttendence(e.target.value)}
                    type="number"
                    className="rounded  w-25"
                  />
                </div>
                <div className="col-12 mt-3">
                  <label
                    htmlFor="password"
                    className="fw-bold"
                    style={{ fontSize: "20px" }}
                  >
                    Internal &nbsp;&nbsp;&nbsp; &nbsp;&nbsp;&nbsp; &nbsp;
                  </label>
                  <input
                    value={internal}
                    onChange={(e) => setInternal(e.target.value)}
                    type="number"
                    className="rounded  w-25"
                  />
                </div>
                <div className="col-12 mt-3">
                  <label
                    htmlFor="password"
                    className="fw-bold"
                    style={{ fontSize: "20px" }}
                  >
                    Total Score &nbsp;&nbsp;&nbsp;
                  </label>
                  <input
                    value={total}
                    onChange={(e) => setTotal(e.target.value)}
                    type="text"
                    className="rounded  w-25"
                  />
                </div>
              </center>
              <center>
                <button className="btn btn-primary mt-3">Update Result</button>
                <br />
                {message.length > 0 && (
                  <Alert variant="success" className="mt-4 w-50">
                    {message}
                  </Alert>
                )}
                {failureAlert && (
                  <Alert variant="danger" className="mt-4 w-50">
                    Please fill all the details
                  </Alert>
                )}
              </center>
            </form>
          </div>
        </div>
      </div>
    </div>
  );
}

export default UpdateResult;
