import React from "react"
import "./stationary.css"
import stationary1 from "../../assets/images/stationary1.jpeg";
import stationary2 from "../../assets/images/stationary2.jpg";
import stationary3 from "../../assets/images/stationary3.jpg";


function StationaryComponent() {
    return (
      <div className="container-stationary">
      <div className="left">
        <div>
        <button type="button" class="btn btn-secondary">Engineering Students</button>
        <button type="button" class="btn btn-secondary">Law Students</button>
        <button type="button" class="btn btn-secondary">Art Students</button>
        <button type="button" class="btn btn-secondary">Medical Students</button>
        <button type="button" class="btn btn-secondary">Commerce Students</button>
        </div>
      </div>
      <div className="right">
        <div className="searchBy">
          <input text="text" id="search" placeholder="Search By Name" />
        </div>
        <div className="dropdown-style">
          <div class="dropdown">
            <button
              class="btn btn-secondary dropdown-toggle"
              type="button"
              id="dropdownMenuButton"
              data-toggle="dropdown"
              aria-haspopup="true"
              aria-expanded="false"
            >
              Dropdown button
            </button>
            <div class="dropdown-menu" aria-labelledby="dropdownMenuButton">
              <a class="dropdown-item" href="#">
                Action
              </a>
              <a class="dropdown-item" href="#">
                Another action
              </a>
              <a class="dropdown-item" href="#">
                Something else here
              </a>
            </div>
          </div>
        </div>
  
        <div className="libraryBox">
          <div className="library-info">
            <div>
              <img src={stationary1} />
            </div>
  
            <div>
              <h1>Stationary Items</h1>
              <p>
                <a href="">Click Here For More Info</a>
              </p>
            </div>
            <div>
              <button type="button" class="btn btn-success">
              Enquire Now
              </button>
            </div>
            
          </div>
        </div>
          {/* <div className="stationaryBox">
            <div className="stationary-info">
              <div>
                <img src={stationary1} />
              </div>
              <div>
                <h1>heading </h1>
                <p>
                  <a href="">Click Here For More Info</a>
                </p>
              </div>
              <div>
                <button>Enquire Now</button>
              </div>
            </div>
          </div>
          <div className="stationaryBox">
            <div className="stationary-info">
              <div>
                <img src={stationary2} />
              </div>
              <div>
                <h1>heading </h1>
                <p>
                  <a href="">Click Here For More Info</a>
                </p>
              </div>
              <div>
                <button>Enquire Now</button>
              </div>
            </div>
          </div>
          <div className="stationaryBox">
            <div className="stationary-info">
              <div>
                <img src={stationary3} />
              </div>
              <div>
                <h1>heading </h1>
                <p>
                  <a href="">Click Here For More Info</a>
                </p>
              </div>
              <div>
                <button>Enquire Now</button>
              </div>
            </div>
    </div> */}
        </div>
      </div>
     
      
    );
  }
 export default StationaryComponent;