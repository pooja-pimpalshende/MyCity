import "./App.css";
import React from "react";
import { BrowserRouter as Router, Routes, Route, Link } from "react-router-dom";
import HomeComponent from "./components/home/home";

function App() {
  return (
    <div className="App ">
      <Router>
        <Link to="/">Home</Link>

        <Routes>
          <Route path="/" element={<HomeComponent />} />
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
