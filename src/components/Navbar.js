import React, { useContext } from "react";
import LoginModal from "./modal/LoginModal";
// import SignupModal from "./modal/SignupModal";
import { NavLink } from "react-router-dom";
import classes from "../css/Navbar.module.css";
import img from "../assets/synkrino.png";
import AuthContext from "../store/auth-context";
import "../css/Navbar.css";

const Navbar = (props) => {
  const authCtx = useContext(AuthContext);
  const isLoggedIn = authCtx.isLoggedIn;
  const logoutHandler = () => {
    authCtx.logout();
    // optional: redirect the user
  };
  return (
    <React.Fragment>
      <header className={classes.header}>
        <nav className="navbar navbar-expand-lg navbar-dark py-1">
          <div className="container-fluid">
            <NavLink className="navbar-brand fs-4" to="/">
              <img src={img} alt="" style={{ width: "35px" }} />
            </NavLink>
            <button
              className="navbar-toggler"
              type="button"
              data-bs-toggle="collapse"
              data-bs-target="#navbarCollapse"
              aria-controls="navbarCollapse"
              aria-expanded="false"
              aria-label="Toggle navigation"
            >
              <span className="navbar-toggler-icon"></span>
            </button>
            <div className="collapse navbar-collapse" id="navbarCollapse">
              <ul className="navbar-nav me-auto mb-2">
                <li className="nav-item fs-5 mx-4">
                  <NavLink
                    activeClassName={classes.active}
                    className="nav-NavLink"
                    to="/home"
                  >
                    Home
                  </NavLink>
                </li>
                <li className="nav-item fs-5 mx-4">
                  <NavLink
                    activeClassName={classes.active}
                    className="nav-NavLink"
                    to="/laptop"
                  >
                    Laptops
                  </NavLink>
                </li>
                <li className="nav-item fs-5 mx-4">
                  <NavLink
                    activeClassName={classes.active}
                    className="nav-NavLink"
                    to="/mobiles"
                  >
                    Mobiles
                  </NavLink>
                </li>
                <li className="nav-item fs-5 mx-4">
                  <NavLink
                    activeClassName={classes.active}
                    className="nav-NavLink"
                    to="/tablets"
                  >
                    Tablets
                  </NavLink>
                </li>
                {/* <li className="nav-item fs-5 ">
                  <NavLink
                    activeClassName={classes.active}
                    className="nav-NavLink"
                    to="/users"
                  >
                    Users
                  </NavLink>
                </li> */}
                {/* <li className="nav-item fs-5 ">
                  <NavLink
                    activeClassName={classes.active}
                    className="nav-NavLink"
                    to="/mobile-api-test"
                  >
                    MobileApiTest
                  </NavLink>
                </li> */}
                {/* <li className="nav-item fs-5">
                  <button
                    className="btn btn-outline-secondary signup-button"
                    type="button"
                    data-bs-toggle="modal"
                    data-bs-target="#signupModal"
                    style={{ color: "white" }}
                  >
                    Search
                  </button>
                </li> */}
              </ul>
              <form className="d-flex">
                <input
                  className="form-control me-2"
                  // type="search"
                  type="text"
                  placeholder="Search"
                  aria-label="input"
                  style={{ width: "400px" }}
                />
                <button
                    className="btn btn-outline-secondary signup-button mr-2"
                    type="button"
                    data-bs-toggle="modal"
                    data-bs-target="#signupModal"
                    style={{ color: "white" }}
                  >
                    Search
                  </button>
                {!isLoggedIn && (
                  <button
                    className="btn btn-outline-secondary mr-2 login-button"
                    type="button"
                    data-bs-toggle="modal"
                    data-bs-target="#loginModal"
                    style={{ color: "white" }}
                  >
                    Login
                  </button>
                )}
                {isLoggedIn && (
                  <div>
                    <span style={{ color: "white", marginRight: "5px" }}>
                      Welcome to{" "}
                      <em style={{ fontWeight: "bold" }}>ellComp.com</em>
                    </span>
                    <button
                      className="btn btn-outline-secondary logout-button"
                      type="button"
                      style={{ color: "white" }}
                      onClick={logoutHandler}
                    >
                      Logout
                    </button>
                  </div>
                )}
              </form>
            </div>
          </div>
        </nav>
      </header>
      <LoginModal />
      {/* <SignupModal /> */}
    </React.Fragment>
  );
};
export default Navbar;
