import React, { useEffect, useState } from "react";
import "./hostel.css";
import { Link } from "react-router-dom";
import axios from "axios";

function GovernmentHostelComponent() {
  const [hostels, setHostels] = useState("");
  const baseUrl = "http://localhost:8081";
  const apiUrl = baseUrl + "/hostel/government";

  useEffect(() => {
    axios
      .get(apiUrl)
      .then((res) => {
        setHostels(res.data);
        console.log(hostels);
      })
      .catch((error) => {
        console.log(error);
      });
  }, [setHostels]);

  return (
    <div className="container-hostel">
      <div className="left">
        <div>
          <button type="button" className="btn btn-secondary">
            <Link to="/private-hostel">Private Hostel</Link>
          </button>
          <button type="button" className="btn btn-secondary">
            <Link to="/government-hostel">Government Hostel</Link>
          </button>
        </div>
      </div>
      <div className="right">
        {hostels &&
          hostels.map(({ id, name, address,email, phone, photosImagePath }) => (
            <div className="hostelBox">
              <div className="hostel-info">
                <div><img src={baseUrl + photosImagePath} /></div>

                <div>
                  <h1>{name}</h1>
                  <h5>Address: {address}</h5>
                  <h5>Email: {email}</h5>
                  <h5>Phone: {phone}</h5>
                </div>
              </div>
            </div>
          ))}
      </div>
    </div>
  );
}

export default GovernmentHostelComponent;
