import React from "react";
import "./hostel.css";

function HostelComponent() {
  return (
    <div className="container-hostel">
      <div className="left">
        <div>
          <button type="button" class="btn btn-secondary">
            Private Hostel
          </button>

          <button type="button" class="btn btn-secondary">
            Government Hostel
          </button>
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
              <img src="http://picsum.photos/450/150" />
            </div>

            <div>
              <h1>heading </h1>
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
        {/* <div className="hostelBox">
          <div className="hostel-info">
            <div>
              <img src={hostel1} />
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
        <div className="hostelBox">
          <div className="hostel-info">
            <div>
              <img src={hostel2} />
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
        <div className="hostelBox">
          <div className="hostel-info">
            <div>
              <img src={hostel} />
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

export default HostelComponent;
