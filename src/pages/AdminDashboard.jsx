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
        
        
        <div className="mt-2">
        
            <Link to="/admin/addresult">
           
              <i
                class="bi bi-plus-circle text-light text-center"
                style={{ fontSize: "50px",float:'right' }}
              ></i>
            </Link>
            <Link to="/admin/updates">
             
              <i class="bi bi-bell text-light" style={{ fontSize: "50px",float:'right',marginRight:'20px' }}></i>
            </Link>
         
         
        </div>
        <div >
         <Tables/>
       
        </div>
        
      </div>
    </div>
  );
}

export default AdminDashboard;
