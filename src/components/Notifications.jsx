import React, { useEffect, useState } from "react";
import axios from "axios";
import {Link} from 'react-router-dom';
function Notifications() {
  const [message, setMessage] = useState([]);
  const [loading, setLoading] = useState(false);

  const fetchNotification = async () => {
    const data = (
      await axios.get(`${import.meta.env.VITE_BACKEND_URL}/api/update`)
    ).data;
    console.log(data);
    setMessage(data);
  };

  useEffect(() => {
    fetchNotification();
  }, []);

  return (
    <>
      <h1
        name="notification"
        id="notification"
        style={{
          color: "white",
          fontFamily: "Abril Fatface cursive",
          fontSize: "55px",
          marginLeft: "20px",
          fontWeight: "900",
        }}
      >
        Notifications
      </h1>
      <div
        className="box ms-3 rounded"
        style={{
          backgroundColor: "white",
          height: "300px",
          width: "350px",
          overflow: "scroll",
        }}
      >
        <>
          {message.map((value) => {
            return (
              <div key={value._id}>
                <div className="notification border border-3 border-secondary mt-3 rounded ms-3 me-3">
                  <p>{value.message}</p>
                  <Link to='/result' style={{ textDecoration: "none" }}>
                    Open
                  </Link>
                </div>
              </div>
            );
          })}
        </>
      </div>
    </>
  );
}

export default Notifications;
