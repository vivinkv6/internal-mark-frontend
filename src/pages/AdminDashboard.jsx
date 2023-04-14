import React, { useEffect, useState } from "react";

import Tables from "../components/Tables";
import { Link } from "react-router-dom";


function AdminDashboard() {


 

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
        <div className="mt-5">
       
         <Tables/>
       
        </div>
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

export default AdminDashboard;
