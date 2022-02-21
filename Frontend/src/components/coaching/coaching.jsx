import React from "react"
import "./coaching.css"
import coaching1 from "../../assets/images/coaching1.jpg";
import coaching2 from "../../assets/images/coaching2.jpg";
import coaching3 from "../../assets/images/coaching3.jpg";


function CoachingComponent() {
    return (
      
      <div className="container-coaching">
      <div className="left">
        <div>
        <button type="button" class="btn btn-secondary">Engineering Coaching</button>
        <button type="button" class="btn btn-secondary">Law Coaching</button>
        <button type="button" class="btn btn-secondary">Art Coaching</button>
        <button type="button" class="btn btn-secondary">MBA Coaching</button>
        <button type="button" class="btn btn-secondary">Pharmacy Coaching</button>
        <button type="button" class="btn btn-secondary">Government Coaching</button>
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
              <img src={coaching1} />
            </div>
  
            <div>
              <h1>Coaching </h1>
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
          {/* <div className="coachingBox">
            <div className="coaching-info">
              <div>
                <img src={coaching1} />
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
          <div className="coachingBox">
            <div className="coaching-info">
              <div>
                <img src={coaching2} />
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
          <div className="coachingBox">
            <div className="coaching-info">
              <div>
                <img src={coaching3} />
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

  export default CoachingComponent