import React, { useEffect, useState } from "react";
import "./hostel.css";
import { Link } from "react-router-dom";
import axios from "axios";

function PrivateHostelComponent() {
  const [hostels, setHostels] = useState("");
  const url = "http://localhost:8081/hostel/private";

  useEffect(() => {
    axios
      .get(url)
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
        <div className="searchBy">
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
        </div>
        {hostels &&
          hostels.map(({ id, name, address }) => (
            <div className="libraryBox">
              <div className="library-info">
                <div>{/* <img src={hostel1} /> */}</div>

                <div>
                  <h1>{name}</h1>
                  <p>{address}</p>
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

export default PrivateHostelComponent;
