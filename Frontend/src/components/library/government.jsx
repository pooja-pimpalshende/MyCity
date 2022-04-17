import React, { useEffect, useState } from "react";
import "./library.css";
import { Link } from "react-router-dom";
import axios from "axios";

function GovernmentLibraryComponent() {
  const [libraries, setlibraries] = useState("");
  const baseUrl = "http://localhost:8081";
  const apiUrl = baseUrl + "/library/government";

  useEffect(() => {
    axios
      .get(apiUrl)
      .then((res) => {
        setlibraries(res.data);
        console.log(libraries);
      })
      .catch((error) => {
        console.log(error);
      });
  }, [setlibraries]);

  return (
    <div className="container-library">
      <div className="left">
        <div>
          <button type="button" className="btn btn-secondary">
            <Link to="/private-library">Private library</Link>
          </button>
          <button type="button" className="btn btn-secondary">
            <Link to="/government-library">Government library</Link>
          </button>
        </div>
      </div>
      <div className="right">
        {libraries &&
          libraries.map(({ id, name, address, email, phone, photosImagePath }) => (
            <div className="libraryBox">
              <div className="library-info">
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

export default GovernmentLibraryComponent;
