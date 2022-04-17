import React, { useEffect } from "react";
import "./addBusiness.css";
import 'bootstrap/dist/css/bootstrap.min.css';
import { Dropdown } from "react-bootstrap";
import { Link } from "react-router-dom";


// AddBusiness method for taking input from user
function AddBusiness() {
  return (
    <div className="form">
      <form className="addbusinessform" >
        <br />
        <h2>Add-Business</h2>
        <br />

        {/* first row  */}
        {/* Business Name we will implement it with select box later */}
        <div className="row">
          <div className="col-1"></div>

          <div className="form-inputs col-10">
            <Dropdown>
              <Dropdown.Toggle className="bg bg-primary"  variant="" id="" style={{width: '250px'}}>Select type of Business{" "}</Dropdown.Toggle>

              <Dropdown.Menu>

                <Dropdown.Item>
                  <Link className="nav-link" to="/Addcollege">Colleges</Link>{" "}
                </Dropdown.Item>

                <Dropdown.Item>
                  <Link className="nav-link" to="/Addcoaching">Coachings</Link>{" "}
                </Dropdown.Item>

                <Dropdown.Item>
                  <Link className="nav-link" to="/Addhostel">Hostels</Link>{" "}
                </Dropdown.Item>

                <Dropdown.Item>
                  <Link className="nav-link" to="/Addlibrary">Libraries</Link>{" "}
                </Dropdown.Item>

                <Dropdown.Item>
                  <Link className="nav-link" to="/Addstationary">Stationary</Link>{" "}
                </Dropdown.Item>

              </Dropdown.Menu>
            </Dropdown>
          </div>

          <div className="col-1"></div>

        </div>
      </form>
      <br />
      <div>
        <h4>Please select the type of buisness you want to add</h4>
      </div>

    </div>
  );
}

export default AddBusiness;
