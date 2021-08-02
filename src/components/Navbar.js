import React from "react";
import LoginModal from "./modal/LoginModal";
import SignupModal from "./modal/SignupModal";
let url='';
const Navbar = () => {
  return (
    <React.Fragment>
      <nav className="navbar navbar-expand-md navbar-dark fixed-top" style={{backgroundColor: 'rgb(68,88,99)'}}>
        <div className="container-fluid">
          <a className="navbar-brand fs-4" href={url}>
            Fixed navbar
          </a>
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
              <li className="nav-item fs-5 px-3">
                <a className="nav-link active" aria-current="page" href={url}>
                  Home
                </a>
              </li>
              <li className="nav-item fs-5 px-3">
                <a className="nav-link" href={url}>
                  Laptops
                </a>
              </li>
              <li className="nav-item fs-5 px-3">
                <a className="nav-link" href={url}>
                  Mobiles
                </a>
              </li>
              <li className="nav-item fs-5 px-3">
                <a className="nav-link" href={url}>
                  Tablets
                </a>
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
                  style={{color: 'white'}}
                >
                  Login
                </button>
              </li>
              <li>
                <button
                  className="btn btn-outline-secondary  "
                  type="button"
                  data-bs-toggle="modal"
                  data-bs-target="#signupModal"
                  style={{color: 'white'}}
                >
                  Signup
                </button>
              </li>
              <li className="text-center">
                <div className="container">
                  <i className="fa fa-bell" style={{ color: "white" }}></i>
                </div>
              </li>
            </ul>
          </div>
        </div>
      </nav>
      <LoginModal />
      <SignupModal />
    </React.Fragment>
  );
};
export default Navbar;