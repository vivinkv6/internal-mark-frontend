import React from "react";
import Dropdown from "react-bootstrap/Dropdown";
import Tables from "../components/Tables";
import { Link } from "react-router-dom";
function AdminPage() {
  return (
    <div className="container">
      <div
        className="row"
        style={{
          display: "flex",
          flexDirection: "row",
          justifyContent: "right",
        }}
      >
        <div className="col-md-4"></div>
        <div className="col-md-5" style={{ display: "inline" }}>
          <select
            className="btn btn-primary mt-3 w-50"
            style={{ position: "relative", right: "0px" }}
          >
            <option selected>Departments</option>
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
          <select
            className="btn btn-primary mt-3 w-50 ms-1"
            style={{ position: "relative", right: "0px" }}
          >
            <option selected>Semester</option>
            <option>First Semester</option>
            <option>Second Semester</option>
            <option>Third Semester</option>
            <option>Fourth Semester</option>
            <option>Fifth Semester</option>
            <option>Sixth Semester</option>
          </select>
        </div>
        <Tables />
        <div>
          <div style={{ position: "fixed", top: "150px", right: "10px" }}>
            <Link to="/admin/addresult">
              <i
                class="bi bi-plus-circle text-light"
                style={{ fontSize: "50px" }}
              ></i>
            </Link>
          </div>
          <div style={{ position: "fixed", top: "150px", right: "80px" }}>
            <Link to="/admin/updates">
              {" "}
              <i class="bi bi-bell text-light" style={{ fontSize: "50px" }}></i>
            </Link>
          </div>
        </div>
      </div>
    </div>
  );
}

export default AdminPage;
