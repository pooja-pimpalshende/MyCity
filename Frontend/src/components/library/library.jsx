import React from "react";
import "./library.css";
import library1 from "../../assets/images/library1.jpg";
import library2 from "../../assets/images/library2.jpg";
import library3 from "../../assets/images/library3.jpg";
import library4 from "../../assets/images/library4.jpg";
import Button from "react-bootstrap/Button";

function LibraryComponent() {
  return (
    <div className="container-library">
      <div className="left">
      <div>
      <button type="button" class="btn btn-secondary">Public Library</button>
        
        <button type="button" class="btn btn-secondary">Government Library</button>
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
              <img src={library1} />
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
        {/* <div className="libraryBox">
          <div className="library-info">
            <div>
              <img src={library2} />
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
        <div className="libraryBox">
          <div className="library-info">
            <div>
              <img src={library3} />
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
        <div className="libraryBox">
          <div className="library-info">
            <div>
              <img src={library4} />
            </div>
            <div>
              <h1>heading </h1>
              <p>
                <a href="">Click Here For More Info</a>
              </p>
            </div>
            <div>
              <button>Enquire Now</button>
            </div> */}
        {/* </div> */}
        {/* </div> */}
      </div>
    </div>
  );
}
export default LibraryComponent;
