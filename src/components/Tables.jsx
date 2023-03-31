import React from "react";
import Table from "react-bootstrap/Table";

function Tables() {
  return (
    <>
      <legend className="text-light fw-bold">Department - Semester</legend>
      <Table responsive="md" border={1} striped bordered hover variant="light">
        <thead>
          <tr>
            <th>Serial No</th>
            <th>Name</th>
            <th>Department</th>
            <th>Table heading</th>
            <th>Table heading</th>
            <th>Table heading</th>
            <th>Time</th>
          </tr>
        </thead>
        <tbody>
          <tr>
            <td>1</td>
            <td>Table cell</td>
            <td>Table cell</td>
            <td>Table cell</td>
            <td>Table cell</td>
            <td>Table cell</td>
            <td>Table cell</td>
          </tr>
        </tbody>
      </Table>
    </>
  );
}

export default Tables;
