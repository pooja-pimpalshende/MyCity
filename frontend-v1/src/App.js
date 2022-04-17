import React, { Component } from "react";
import { Switch, Route, Link } from "react-router-dom";
import "bootstrap/dist/css/bootstrap.min.css";
import "./App.css";
import AuthService from "./services/auth.service";
import Login from "./components/login.component";
import Register from "./components/register.component";
import Home from "./components/home/homecomponent";
import Profile from "./components/profile.component";
import BoardUser from "./components/board-user.component";
import BoardModerator from "./components/board-moderator.component";
import BoardAdmin from "./components/board-admin.component";
import PrivateCollegeComponent from "./components/college/College";
import PrivateCoachingComponent from "./components/coaching/Coaching";
import AddBusiness from "./components/addbusiness/AddBusiness";
import AddCollege from "./components/addbusiness/addcollege/Addcollege";
import AddCoaching from "./components/addbusiness/addcoaching/Addcoaching";
import Addhostel from "./components/addbusiness/addhostel/Addhostel";
import Addlibrary from "./components/addbusiness/addlibrary/Addlibrary";
import Addstationary from "./components/addbusiness/addstationary/Addstationary";
import Footer from "./components/footer/Footer";
import PrivateHostelComponent from "./components/hostel/Hostel";
import PrivateLibraryComponent from "./components/library/Library";
import StationaryComponent from "./components/stationary/Stationary";
import Allscholarship from "./components/scholarship/Allscholarship";


// import AuthVerify from "./common/auth-verify";
import EventBus from "./common/EventBus";

class App extends Component {
  constructor(props) {
    super(props);
    this.logOut = this.logOut.bind(this);

    this.state = {
      showModeratorBoard: false,
      showAdminBoard: false,
      currentUser: undefined,
    };
  }

  componentDidMount() {
    const user = AuthService.getCurrentUser();

    if (user) {
      this.setState({
        currentUser: user,
        showModeratorBoard: user.roles.includes("ROLE_MODERATOR"),
        showAdminBoard: user.roles.includes("ROLE_ADMIN"),
      });
    }

    EventBus.on("logout", () => {
      this.logOut();
    });
  }

  componentWillUnmount() {
    EventBus.remove("logout");
  }

  logOut() {
    AuthService.logout();
    this.setState({
      showModeratorBoard: false,
      showAdminBoard: false,
      currentUser: undefined,
    });
  }

  render() {
    const { currentUser, showModeratorBoard, showAdminBoard } = this.state;

    return (
      <div className="sticky">
        <nav className="navbar navbar-expand navbar-dark bg-dark">
          <Link to={"/"} className="navbar-brand">
            My-City
          </Link>
          <div className="navbar-nav mr-auto">
            <li className="nav-item">
              <Link to={"/home"} className="nav-link">
                Home
              </Link>
            </li>
            <li className="nav-item">
              <Link to={"/colleges"} className="nav-link">
                College
              </Link>
            </li>
            <li className="nav-item">
              <Link to={"/hostels"} className="nav-link">
                Hostel
              </Link>
            </li>
            <li className="nav-item">
              <Link to={"/librarys"} className="nav-link">
                Library
              </Link>
            </li>
            <li className="nav-item">
              <Link to={"/coachings"} className="nav-link">
                Coaching
              </Link>
            </li>
            <li className="nav-item">
              <Link to={"/stationarys"} className="nav-link">
                Stationary
              </Link>
            </li>
            <li className="nav-item">
              <Link to={"/scholarship"} className="nav-link">
                Scholarship
              </Link>
            </li>


            {/* dont want to show the boards */}
            {/* {showModeratorBoard && (
              <li className="nav-item">
                <Link to={"/mod"} className="nav-link">
                  Moderator Board
                </Link>
              </li>
            )}

            {showAdminBoard && (
              <li className="nav-item">
                <Link to={"/admin"} className="nav-link">
                  Admin Board
                </Link>
              </li>
            )}

            {currentUser && (
              <li className="nav-item">
                <Link to={"/user"} className="nav-link">
                  User
                </Link>
              </li>
            )} */}

            {currentUser && (
              <li className="nav-item">
                <Link to={"/addBusiness"} className="nav-link">
                  Add Business
                </Link>
              </li>
            )}
          </div>

          {currentUser ? (
            <div className="navbar-nav ml-auto">
              <li className="nav-item">
                <Link to={"/profile"} className="nav-link">
                  {currentUser.username}
                </Link>
              </li>
              <li className="nav-item">
                <a href="/login" className="nav-link" onClick={this.logOut}>
                  LogOut
                </a>
              </li>
            </div>
          ) : (
            <div className="navbar-nav ml-auto">
              <li className="nav-item">
                <Link to={"/login"} className="nav-link">
                  Login
                </Link>
              </li>

              <li className="nav-item">
                <Link to={"/register"} className="nav-link">
                  Sign Up
                </Link>
              </li>
            </div>
          )}
        </nav>

        <div className="Containt">
          <Switch>
            <Route exact path={["/", "/home"]} component={Home} />
            <Route exact path="/login" component={Login} />
            <Route exact path="/register" component={Register} />
            <Route exact path="/profile" component={Profile} />
            <Route path="/user" component={BoardUser} />
            <Route path="/mod" component={BoardModerator} />
            <Route path="/admin" component={BoardAdmin} />
            <Route path="/addbusiness" component={AddBusiness} />
            <Route path="/Addcollege" component={AddCollege} />
            <Route path="/Addcoaching" component={AddCoaching} />
            <Route path="/Addhostel" component={Addhostel} />
            <Route path="/Addlibrary" component={Addlibrary} />
            <Route path="/Addstationary" component={Addstationary} />
            <Route path="/colleges" component={PrivateCollegeComponent} />
            <Route path="/coachings" component={PrivateCoachingComponent} />
            <Route path="/hostels" component={PrivateHostelComponent} />
            <Route path="/librarys" component={PrivateLibraryComponent} />
            <Route path="/stationarys" component={StationaryComponent} />
            <Route path="/scholarship" component={Allscholarship} />
          </Switch>
        </div>
        <div>
          <Footer />
        </div>
        { /*<AuthVerify logOut={this.logOut}/> */}
      </div>
    );
  }
}

export default App;
