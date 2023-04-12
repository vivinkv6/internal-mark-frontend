import React, { useEffect, useState } from "react";
import logo from "../assets/scam.png";
import Table from "react-bootstrap/Table";

function SearchResult() {
  const [register_no, setRegister_no] = useState("dj");
  const [department, setDepartment] = useState("Computer Science");
  const [semester, setSemester] = useState(1);
  const [result, setResult] = useState({});
  const [resultShow, setResultShow] = useState(false);
  const [loading, setLoading] = useState(false);

  

  const fetchResult = async (e) => {
    e.preventDefault();
    setLoading(true);
    const datas={ register_no, semester, department }
    console.log({ register_no, semester, department });

    const data = await fetch(`${import.meta.env.VITE_BACKEND_URL}api/result`, {
      method: "POST",
      body: JSON.stringify(datas),
      headers: {
        "Content-type": "application/json",
      },
    })
      .then((res) => res.json()).then(data=>{
        console.log(data)
        setResult(data);
        console.log(result.name);
      })
      .catch((err) => console.log(err));

      setLoading(false);

    if(result.length<1)
    {
      console.log("nothing");
      setResultShow(false);
    }
    else {
      setDepartment("");
      setSemester("");
      setRegister_no("");
      setResultShow(true);
    } 

    // useEffect(()=>{
    //   result.map((value)=>{

    //   })
    // })
    
  };
  return (
    <>
      <div className="container">
        <div className="row">
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
              <h1 className="text-center text-light fw-bold">Internal Marks</h1>
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
                    Register
                  </label>
                  <input
                   value={register_no}
                    type="text"
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
                    value={department}
                    className="w-50 mt-3 ms-4 rounded  border border-3"
                    style={{ position: "relative", right: "0px" }}
                    onchange={(e)=>setDepartment(e.target.value)}
                  
                  >
                    {/* <option selected>Department</option> */}
                    <option value="Computer Science">Computer Science</option>
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
                <div className="col-12">
                  <label
                    htmlFor="password"
                    className="fw-bold"
                    style={{ fontSize: "20px" }}
                  >
                    Semester
                  </label>
                  <select
                    value={semester}
                    className="w-50 rounded mt-3 ms-5 border border-3"
                    style={{ position: "relative", right: "0px" }}
                    onChange={(e)=>setSemester(e.target.value)}
                  >
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
              </form>

              {loading && <h1>loading</h1>}
            </div>
          </div>
        </div>
      </div>

      {resultShow ? (
        <>
          <Table
            responsive="md"
            border={1}
            striped
            bordered
            hover
            variant="light"
            className="mt-3"
            cellPadding={4}
           
           
          >
            <thead>
              <tr>
                <th>Name</th>
                <th colSpan={6}>{result.name}</th>
             
              </tr>
              <tr>
                <th>Register No.</th>
                <th colSpan={6}>{result.register_no}</th>
              
              </tr>
              <tr>
                <th>Semester</th>
                <th colSpan={6}>{result.semester}</th>
              
              </tr>
              <tr>
                <th>Department</th>
                <th colSpan={6}>{result.department}</th>
              </tr>
              <tr>
                <th colSpan={7}></th>
              </tr>

              <tr  style={{textAlign:'center'}}>
                <th>SUBJECT CODE</th>
                <th>SUBJECT</th>
                <th>SEMINAR</th>
                <th>ASSIGNMENT</th>
                <th>ATTENDENCE</th>
                <th>INTERNAL</th>
                <th>TOTAL</th>
              </tr>
            </thead>
            <tbody>
              {/* {result.map((value)=>{
                          return( */}
              <tr key={result._id}  style={{textAlign:'center'}}>
                <td className="fw-bold">{result.subjectCode}</td>
                <td className="fw-bold">{result.subject}</td>
                <td>{result.seminar}</td>
                <td>{result.assignment}</td>
                <td>{result.attendence}</td>
                <td>{result.internal}</td>
                <td>{result.total}</td>
              </tr>
              {/* )
                        })} */}
            </tbody>
          </Table>
        </>
      ):
      (
        <h1>Result Not Found</h1>
      )}
    </>
  );
}

export default SearchResult;
