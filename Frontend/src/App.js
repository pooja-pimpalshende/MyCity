import "./App.css";
import React from "react";
import { BrowserRouter as Router, Routes, Route, Link } from "react-router-dom";
import HomeComponent from "./components/home/home";
import CollegeComponent from "./components/college/college";
import HostelComponent from "./components/hostel/hostel";
import LibraryComponent from "./components/library/library";
import CoachingComponent from "./components/coaching/coaching";
import StationaryComponent from "./components/stationary/stationary";
import ScholarshipComponent from "./components/scholarship/scholarship";
import LoginComponent from "./components/login/login";
import SignUpComponent from "./components/signup/signup";
import FormComponent from "./components/form/form";

function App() {
  return (
    <div className="App fixed-top">
      <Router>
        <div className="container-fluid sticky-top ">
          <div className="row sticky-top ">
            <img
              className=" col-md-3"
              id="image"
              src="http://picsum.photos/450/150"
              alt=""
            />
            <div className="col-md-6 d-flex justify-content-center align-items-center ">
              <div className="row  ">
                <h1 className="d-flex justify-content-start" id="mycity">
                  MY-CITY
                </h1>
                <br />
                <h4 className="d-flex justify-content-start">
                  welcome you will get all things related to this city.
                </h4>
              </div>
            </div>
            <div className="col-md-3 ">
              <div className=" d-flex justify-content-center ">
                <h4>
                  <a href="login">
                    <Link to="/login">Login</Link>
                  </a>
                </h4>
                <h4>/</h4>
                <h4>
                  <a href="signup">
                    <Link to="/signup">sign-up</Link>
                  </a>
                </h4>
              </div>
            </div>
          </div>
        </div>

        <div className="sticky-top">
          <div className="row  ">
            <button className="col-md-3 "></button>
            <div className="col-md-9 ">
              <button id="home">
                <Link to="/">Home</Link>
              </button>
              <button>
                <Link to="/college">college</Link>
              </button>
              <button>
                <Link to="/hostel">Hostel</Link>
              </button>
              <button>
                <Link to="/library">Library</Link>
              </button>
              <button>
                <Link to="/coaching">Coaching</Link>
              </button>
              <button>
                <Link to="/stationary">Stationary</Link>
              </button>
              <button>
                <Link to="/scholarship">Scholarship</Link>
              </button>
              <button>
                <Link to="/form">form</Link>
              </button>
            </div>
          </div>
        </div>

        <Routes>
          <Route path="/" element={<HomeComponent />} />
          <Route path="/college" element={<CollegeComponent />} />
          <Route path="/hostel" element={<HostelComponent />} />
          <Route path="/library" element={<LibraryComponent />} />
          <Route path="/coaching" element={<CoachingComponent />} />
          <Route path="/stationary" element={<StationaryComponent />} />
          <Route path="/scholarship" element={<ScholarshipComponent />} />
          <Route path="/login" element={<LoginComponent />} />
          <Route path="/signup" element={<SignUpComponent />} />
          <Route path="/form" element={<FormComponent />} />
        </Routes>
      </Router>

      {/* <Router>
        <div className="header">
          Welcome to mycity
          <ul>
            <li>
              <Link to="/">Home</Link>
            </li>
            <li>
              <Link to="/college">College</Link>
            </li>
            <li>
              <Link to="/hostel">Hostel</Link>
            </li>
            <li>
              <Link to="/library">Library</Link>
            </li>
            <li>
              <Link to="/coaching">Coaching</Link>
            </li>
            <li>
              <Link to="/stationary">Stationary</Link>
            </li>
            <li>
              <Link to="/scholarship">Scholarship</Link>
            </li>
          </ul>
        </div>
        <Routes>
          <Route path="/" element={<HomeComponent />} />
          <Route path="/college" element={<CollegeComponent />} />
          <Route path="/hostel" element={<HostelComponent />} />
          <Route path="/library" element={<LibraryComponent />} />
          <Route path="/coaching" element={<CoachingComponent />} />
          <Route path="/stationary" element={<StationaryComponent />} />
          <Route path="/scholarship" element={<ScholarshipComponent />} />
        </Routes>
      </Router> */}
    </div>
  );
}

export default App;
