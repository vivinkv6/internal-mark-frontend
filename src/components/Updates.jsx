import React, { useState } from "react";
import logo from "../assets/scam.png";
import Alert from "react-bootstrap/Alert";

function Updates() {
  //store notification
  const [message, setMessage] = useState("");
  const [successAlert, setSuccessAlert] = useState(false);
  const [failureAlert, setFailureAlert] = useState(false);

  //publishing the notification

  const onPublish = async (e) => {
    setFailureAlert(false);
    setSuccessAlert(false);
    e.preventDefault();
    try {
      const publish = await fetch(
        `${import.meta.env.VITE_BACKEND_URL}api/publish`,
        {
          method: "POST",
          body: JSON.stringify({ message }),
          headers: {
            "Content-type": "application/json",
          },
        }
      );

      if (publish.ok) {
        setSuccessAlert(true);
        setFailureAlert(false);
        setMessage("");
      } else {
        setFailureAlert(true);
        setSuccessAlert(false);
      }
    } catch (err) {
      console.log(err);
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
                    htmlFor="username"
                    className="fw-bold"
                    style={{ fontSize: "20px" }}
                  >
                    Notification
                  </label>
                </div>
                <div className="col-12">
                  <textarea
                    name=""
                    id=""
                    cols="30"
                    rows="5"
                    className="rounded"
                    value={message}
                    onChange={(e) => setMessage(e.target.value)}
                  ></textarea>
                </div>

                <center>
                  <button className="btn btn-primary mt-3" onClick={onPublish}>
                    Publish
                  </button>
                </center>
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
              </form>
            </div>
          </div>
        </div>
      </div>
    </>
  );
}

export default Updates;
