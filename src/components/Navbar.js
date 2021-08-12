import React from "react";
import LoginModal from "./modal/LoginModal";
import SignupModal from "./modal/SignupModal";
import { NavLink } from "react-router-dom";
import classes from "../css/Navbar.module.css";
import img from "../assets/synkrino.jpg";

const Navbar = (props) => {
  return (
    <React.Fragment>
      <header className={classes.header}>
        <nav
          className="navbar navbar-expand-lg navbar-dark"
          style={{ backgroundColor: "rgb(68,88,99)" }}
        >
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
              <ul className="navbar-nav me-auto mb-2 mb-md-0">
                <li className="nav-item fs-5">
                  <NavLink
                    activeClassName={classes.active}
                    className="nav-NavLink"
                    to="/home"
                  >
                    Home
                  </NavLink>
                </li>
                <li className="nav-item fs-5 ">
                  <NavLink
                    activeClassName={classes.active}
                    className="nav-NavLink"
                    to="/laptop"
                  >
                    Laptops
                  </NavLink>
                </li>
                <li className="nav-item fs-5 ">
                  <NavLink
                    activeClassName={classes.active}
                    className="nav-NavLink"
                    to="/mobiles"
                  >
                    Mobiles
                  </NavLink>
                </li>
                <li className="nav-item fs-5 ">
                  <NavLink
                    activeClassName={classes.active}
                    className="nav-NavLink"
                    to="/tablets"
                  >
                    Tablets
                  </NavLink>
                </li>
                {/* <li className="nav-item fs-5 ">
                <NavLink activeClassName={classes.active} className="nav-NavLink tabs" onClick={handleTab} to="/test">
                  Test
                </NavLink>
              </li> */}
                {/* <li className="nav-item fs-5 ">
                <NavLink
                activeClassName={classes.active}
                  className="nav-NavLink"
                  onClick={handleTab}
                  to="/applyPagination"
                >
                  Pagination
                </NavLink>
              </li> */}
                <li className="nav-item fs-5 ">
                  <NavLink
                    activeClassName={classes.active}
                    className="nav-NavLink"
                    to="users"
                  >
                    Users
                  </NavLink>
                </li>
                <li className="nav-item fs-5 ">
                  <NavLink
                    activeClassName={classes.active}
                    className="nav-NavLink"
                    to="feedback"
                  >
                    Feedback
                  </NavLink>
                </li>
                <li className="nav-item fs-5 ">
                  <NavLink
                    activeClassName={classes.active}
                    className="nav-NavLink"
                    to="/details"
                  >
                    Details
                  </NavLink>
                </li>
                <li className="nav-item fs-5 ">
                  <NavLink
                    activeClassName={classes.active}
                    className="nav-NavLink"
                    to="/contactus"
                  >
                    Contact Us
                  </NavLink>
                </li>
              </ul>
              <form className="d-flex">
                <input
                  className="form-control me-2"
                  type="search"
                  placeholder="Search"
                  aria-label="Search"
                />
                <button
                  className="btn btn-outline-secondary "
                  type="submit"
                  style={{ coor: "white" }}
                >
                  Search
                </button>
              </form>
              <ul className="navbar-nav me-auto mb-2 mb-md-0">
                <li>
                  <button
                    className="btn btn-outline-secondary mx-2 "
                    type="button"
                    data-bs-toggle="modal"
                    data-bs-target="#loginModal"
                    style={{ color: "white" }}
                  >
                    Login
                  </button>
                </li>
                <li className="nav-item fs-5">
                  <button
                    className="btn btn-outline-secondary  "
                    type="button"
                    data-bs-toggle="modal"
                    data-bs-target="#signupModal"
                    style={{ color: "white" }}
                  >
                    Signup
                  </button>
                </li>
              </ul>
            </div>
          </div>
        </nav>
      </header>
      <LoginModal />
      <SignupModal />
    </React.Fragment>
  );
};
export default Navbar;
