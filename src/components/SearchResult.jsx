import React, { useEffect, useState } from "react";
import logo from "../assets/scam.png";
import Table from "react-bootstrap/Table";
import "./styles/style.css";
import { Alert } from "react-bootstrap";
import Spinner from "react-bootstrap/Spinner";

function SearchResult() {
  const [name, setName] = useState("");
  const [register_no, setRegister_no] = useState("");
  const [department, setDepartment] = useState("");
  const [semester, setSemester] = useState(0);
  const [result, setResult] = useState([]);
  const [resultShow, setResultShow] = useState(false);
  const [loading, setLoading] = useState(false);
  const [hide, setHide] = useState(false);
  const [nullAlert, setNullAlert] = useState(false);
  const [notFound, setNotFound] = useState(false);

  const fetchResult = async (e) => {
    setNotFound(false);
    setHide(false);
    setResultShow(false);
    e.preventDefault();

    if (register_no == "" || department == "" || semester == 0) {
      setNullAlert(true);
    } else {
      setNullAlert(false);
      setLoading(true);
      const datas = { register_no, semester, department };

      const data = await fetch(
        `${import.meta.env.VITE_BACKEND_URL}api/result`,
        {
          method: "POST",
          body: JSON.stringify(datas),
          headers: {
            "Content-type": "application/json",
          },
        }
      )
        .then((res) => res.json())
        .then((data) => {
          if (data.length > 1) {
            setResult(data);
            setName(data[0].name);
            setHide(true);
            setResultShow(true);
          } else {
            setNotFound(true);
          }
          setLoading(false);
        })
        .catch((err) => setNullAlert(err));

      // if (result.length < 2) {
      //   setResultShow(false);
      //   setHide(false);
      // }
      // if (!result.length < 2) {
      //   setLoading(false);
      //   setHide(true);
      //   setResultShow(true);
      // }
    }
  };
  return (
    <>
      <div className="container">
        <div className="row">
          {hide ? (
            <>
              {result.length > 1 && (
                <>
                  <Table
                    responsive="md"
                    border={1}
                    striped
                    bordered
                    hover
                    variant="light"
                    className="mt-5 table"
                    cellPadding={4}
                  >
                    <thead>
                      <tr>
                        <th>Name</th>
                        <th colSpan={6}>{name}</th>
                      </tr>
                      <tr>
                        <th>RegisterNo.</th>
                        <th colSpan={6}>{register_no}</th>
                      </tr>
                      <tr>
                        <th>Semester</th>
                        <th colSpan={6}>{semester}</th>
                      </tr>
                      <tr>
                        <th>Department</th>
                        <th colSpan={6}>{department}</th>
                      </tr>
                      <tr>
                        <th colSpan={7}></th>
                      </tr>

                      <tr style={{ textAlign: "center" }}>
                        <th>SUB CODE</th>
                        <th>SUBJECT</th>
                        <th>SEMINAR</th>
                        <th>ASSIGNMENT</th>
                        <th>ATTENDENCE</th>
                        <th>INTERNAL</th>
                        <th>TOTAL</th>
                      </tr>
                    </thead>
                    <tbody>
                      <>
                        {result.map((value) => {
                          return (
                            <tr key={value._id} style={{ textAlign: "center" }}>
                              <td className="fw-bold">{value.subjectCode}</td>
                              <td className="fw-bold">{value.subject}</td>
                              <td>{value.seminar}</td>
                              <td>{value.assignment}</td>
                              <td>{value.attendence}</td>
                              <td>{value.internal}</td>
                              <td>{value.total}</td>
                            </tr>
                          );
                        })}
                      </>
                    </tbody>
                  </Table>

                  {/* <div className="mt-3">
            <h4>Discliamer</h4>
            <p></p>
          </div> */}

                  <center>
                    <button className="btn btn-primary m-3" onClick={print}>
                      Print
                    </button>

                    <button
                      className="btn btn-danger m-3"
                      onClick={() => {
                        setHide(false);
                        setResultShow(false);
                      }}
                    >
                      Close
                    </button>
                  </center>
                </>
              )}
            </>
          ) : (
            <>
              <div
                className="resultform"
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
                  <h1 className="text-center text-light fw-bold">
                    Internal Marks
                  </h1>
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
                        htmlFor="register_no"
                        className="fw-bold"
                        style={{ fontSize: "20px" }}
                      >
                        Register No &nbsp;&nbsp;&nbsp;&nbsp;
                      </label>
                      <input
                        value={register_no}
                        onChange={(e) => setRegister_no(e.target.value)}
                        type="text"
                        className="rounded  w-50 "
                      />
                    </div>
                    <br />
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
                        <option value="Computer Science">
                          Computer Science
                        </option>
                        <option value={"Economics"}>Economics</option>
                        <option value={"English"}>English</option>
                        <option value={"Hindi"}>Hindi</option>
                        <option value={"Malayalam"}>Malayalam</option>
                        <option value={"Mathematics"}>Mathemathics</option>
                        <option value={"Political Science"}>
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
                        Semester
                        &nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;
                      </label>
                      <select
                        value={semester}
                        className="w-50 rounded border border-3"
                        style={{ position: "relative", right: "0px" }}
                        onChange={(e) => setSemester(Number(e.target.value))}
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
                    <center>
                      <button
                        className="btn btn-primary mt-3"
                        onClick={fetchResult}
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

                  {loading && (
                    <h3 className="mt-3 text-light text-center">
                      Loading{" "}
                      <Spinner animation="grow" size="sm" className="me-1" />
                      <Spinner animation="grow" size="sm" className="me-1" />
                      <Spinner animation="grow" size="sm" className="me-1" />
                    </h3>
                  )}

                  {notFound ? (
                    <h3 className="text-center mt-3 text-light">
                      Result Not Found
                    </h3>
                  ) : (
                    <></>
                  )}
                </div>
              </div>
            </>
          )}
        </div>
      </div>
    </>
  );
}

export default SearchResult;
