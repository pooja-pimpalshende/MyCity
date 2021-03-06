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
        {/* <div className="searchBy">
          <input text="text" id="search" placeholder="Search By Name" />
        </div>
        <div className="dropdown-style">
          <div className="dropdown">
            <button
              className="btn btn-secondary dropdown-toggle"
              type="button"
              id="dropdownMenuButton"
              data-toggle="dropdown"
              aria-haspopup="true"
              aria-expanded="false"
            >
              Dropdown button
            </button>
            <div className="dropdown-menu" aria-labelledby="dropdownMenuButton">
              <a className="dropdown-item" href="#">
                Action
              </a>
              <a className="dropdown-item" href="#">
                Another action
              </a>
              <a className="dropdown-item" href="#">
                Something else here
              </a>
            </div>
          </div>
        </div> */}
        {libraries &&
          libraries.map(({ id, name, address, phone, photosImagePath }) => (
            <div className="libraryBox">
              <div className="library-info">
                <div><img src={baseUrl + photosImagePath} /></div>

                <div>
                  <h1>{name}</h1>
                  <h5>Address: {address}</h5>
                  <h5>Phone: {phone}</h5>
                </div>
                <div>
                  <button type="button" className="btn btn-success">
                    Enquire Now
                  </button>
                </div>
              </div>
            </div>
          ))}
      </div>
    </div>
  );
}

export default GovernmentLibraryComponent;
