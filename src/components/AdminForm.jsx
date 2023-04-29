import React, { useEffect, useMemo, useState } from "react";
import logo from "../assets/scam.png";
import { useNavigate } from "react-router-dom";
import Alert from "react-bootstrap/Alert";

function AdminForm({ isAdmin, setIsAdmin }) {
  const [username, setUsername] = useState("");
  const [password, setPassword] = useState("");
  // const [isAdmin, setIsAdmin] = useState(false);
  const [message, setMessage] = useState("");
  const navigate = useNavigate();
  //sampledev@2002

  const adminSubmition = async (e) => {
    setMessage("");

    e.preventDefault();

    if (username == "" || password == "") {
      setMessage("Please fill all the details");
    } else {
      const checkAdmin = await fetch(
        `${import.meta.env.VITE_BACKEND_URL}api/admin`,
        {
          method: "POST",
          headers: {
            "content-type": "application/json",
          },
          body: JSON.stringify({ username, password }),
        }
      )
        .then((res) => res.json())
        .then((data) => {
          setIsAdmin((isAdmin) => data.status);

          if (data.status) {
            navigate("selection");
          } else {
            setMessage("Invalid Username and Password");
          }
        });
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
                    htmlFor="username"
                    className="fw-bold"
                    style={{ fontSize: "20px" }}
                  >
                    UserName
                  </label>
                </div>
                <div className="col-12">
                  <input
                    value={username}
                    type="text"
                    onChange={(e) => setUsername(e.target.value)}
                    className="rounded"
                  />
                </div>
                <div className="col-12 mt-3">
                  <label
                    htmlFor="password"
                    className="fw-bold"
                    style={{ fontSize: "20px" }}
                  >
                    Password
                  </label>
                </div>
                <div className="col-12">
                  <input
                    value={password}
                    type="password"
                    onChange={(e) => setPassword(e.target.value)}
                    className="rounded"
                  />
                </div>
                <center>
                  <button
                    className="btn btn-primary mt-3"
                    onClick={adminSubmition}
                  >
                    Submit
                  </button>
                </center>
                {message.length > 0 && (
                  <Alert variant="danger" className="mt-3">
                    {message}
                  </Alert>
                )}
              </form>
            </div>
          </div>
        </div>
      </div>
    </>
  );
}

export default AdminForm;
