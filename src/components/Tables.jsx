import React, { useState, useEffect } from "react";
import Table from "react-bootstrap/Table";
import { Link, useParams } from "react-router-dom";
import { formatDistanceToNow } from "date-fns";
function Tables() {
  const { department } = useParams();
  const { semester } = useParams();
  const [result, setResult] = useState([]);
  const [errorHandling, setErrorHandling] = useState(false);
  useEffect(() => {
    setErrorHandling(false);
    const data = fetch(
      `${import.meta.env.VITE_BACKEND_URL}api/${department}/${semester}`
    )
      .then((res) => res.json())
      .then((data) => {
        if (data.length > 0) {
          setResult(data);
        } else {
          setErrorHandling(true);
        }
      })
      .catch((err) => console.log(err));
  }, [department, semester]);

  return (
    <>
      <legend className="text-light fw-bold mt-5">
        {department} - {semester}
      </legend>
      <Table responsive="md" border={1} striped bordered hover variant="light">
        <thead>
          <tr>
            <th>RegisterNo</th>
            <th>Name</th>
            <th>Department</th>
            <th>Semester</th>
            <th>Subject</th>
            <th>Total</th>
            <th>Time</th>
            <th>Status</th>
          </tr>
        </thead>
        <tbody>
          {!errorHandling ? (
            <>
              {result.map((value, index) => {
                return (
                  <tr key={value._id}>
                    <td>{value.register_no}</td>
                    <td>{value.name}</td>
                    <td>{value.department}</td>
                    <td>{value.semester}</td>
                    <td>{value.subject}</td>
                    <td>{value.total}</td>
                    <td>
                  {formatDistanceToNow(new Date(value.createdAt), {
                    addSuffix: true,
                  })}
                </td>
                    <td>
                    <Link to={`/${value._id}`}><i className="bi bi-pencil-square fs-2 ms-3 text-dark"></i></Link>  
                      <i className="bi bi-trash fs-2 ms-3"></i>
                    </td>
                  </tr>
                );
              })}
            </>
          ) : (
            <>
              <tr>
                <td>No Result</td>
                <td></td>
                <td></td>
                <td></td>
                <td></td>
                <td></td>
                <td></td>
                <td>
                  <i className="bi bi-pencil-square fs-2 ms-3"></i>
                  <i className="bi bi-trash fs-2 ms-3"></i>
                </td>
              </tr>
            </>
          )}
        </tbody>
      </Table>
    </>
  );
}

export default Tables;
