import React, { useEffect, useState } from "react";
import axios from "axios";
import {Link} from 'react-router-dom';
function Notifications() {
  const [message, setMessage] = useState([]);
  const [loading, setLoading] = useState(false);

  const fetchNotification = async () => {
    setLoading(true);
    const data = (
      await axios.get(`${import.meta.env.VITE_BACKEND_URL}/api/update`)
    ).data;
    setMessage(data);
    setLoading(false);
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
          fontFamily: "Abril Fatface, cursive",
          fontSize: "55px",
          marginLeft: "5px",
          fontWeight: "900",
          letterSpacing:"1px"
        }}
      >
        Notifications
      </h1>
      <div
        className="box ms-1 rounded"
        style={{
          backgroundColor: "white",
          height: "300px",
          width: "350px",
          overflow: "scroll",
        }}
      >
        <>
        {message.length < 1 && <h3>No Notifications</h3> }
        {loading &&  <h3>Loading...</h3> }
          {message.map((value) => {
            return (
              <div key={value._id}>
                <div className="notification border border-3 border-secondary mt-3 ms-3 me-3 rounded">
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
