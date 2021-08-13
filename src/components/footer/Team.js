import React from "react";
import { Link } from 'react-router-dom';
let url = "";
let feedbackUrl='feedback';

export const Team = () => {
  return (
    <React.Fragment>
      <nav className="navbar navbar-expand-lg navbar-light">
        <div className="container-fluid ">
          <button
            className="navbar-toggler"
            type="button"
            data-bs-toggle="collapse"
            data-bs-target="#navbarSupportedContent"
            aria-controls="navbarSupportedContent"
            aria-expanded="false"
            aria-label="Toggle navigation"
          >
            <span className="navbar-toggler-icon"></span>
          </button>
          <div
            className="collapse navbar-collapse "
            id="navbarSupportedContent"
            style={{ paddingLeft: "12vw" }}
          >
            <ul className="navbar-nav me-auto mb-2 mb-lg-0">
              <li className="nav-link  fs-3 px-5">
                <a className="nav-link active" aria-current="page" href={url}>
                  <u>Team</u>{" "}
                </a>
              </li>
              <li className="nav-link  fs-3 px-5">
                <Link className='nav-link' to={"/footer-"+feedbackUrl}>
                  About Us
                </Link>
              </li>
              <li className="nav-link fs-3 px-5">
                <a className="nav-link" href={url}>
                  Contact Us
                </a>
              </li>
              <li className="nav-link fs-3 px-5">
                <a className="nav-link" href={url}>
                  Feedback
                </a>
              </li>
            </ul>
          </div>
        </div>
      </nav>

      <div className="container">
        <div className="row featurette d-flex justify-content-center align-items-center">
          <div className="col-md-3 order-md-1">
            <img
              className="img-fluid"
              src="https://source.unsplash.com/200x200/?laptop"
              alt="..."
              style={{ borderRadius: "50%" }}
            />
          </div>
          <div className="col-md-8 order-md-2 my-3">
            <h3 className="featurette-heading">Afham Fardeen</h3>
            <span className="fs-6" style={{ color: "rgb(255,135,16)" }}>
              HR
            </span>
            <p className="fs-6">
              Some great placeholder content for the first featurette here.
              Imagine some exciting prose here.Some great placeholder content
              for the first featurette here. Imagine some exciting prose
              here.Some great placeholder content for the first featurette here.
              Imagine some exciting prose here.
            </p>
          </div>
        </div>
        <div className="my-5 py-3 row featurette d-flex justify-content-center align-items-center">
          <div className="col-md-8">
            <h3 className="featurette-heading">Kumar Chatur Ranjan</h3>
            <span className="fs-6" style={{ color: "rgb(255,135,16)" }}>
              Engineer
            </span>
            <p className="fs-6">
              Some great placeholder content for the first featurette here.
              Imagine some exciting prose here.Some great placeholder content
              for the first featurette here. Imagine some exciting prose
              here.Some great placeholder content for the first featurette here.
              Imagine some exciting prose here.
            </p>
          </div>
          <div className="col-md-3">
            <img
              className="img-fluid"
              src="https://source.unsplash.com/200x200/?laptop"
              alt="..."
              style={{ borderRadius: "50%" }}
            />
          </div>
        </div>
        <div className="mt-5 pt-3 row featurette d-flex justify-content-center align-items-center">
          <div className="col-md-3 order-md-1">
            <img
              className="img-fluid"
              src="https://source.unsplash.com/200x200/?laptop"
              alt="..."
              style={{ borderRadius: "50%" }}
            />
          </div>
          <div className="col-md-8 order-md-2">
            <h3 className="featurette-heading">Himanshu Kumar</h3>
            <span className="fs-6" style={{ color: "rgb(255,135,16)" }}>
              HR
            </span>
            <p className="fs-6">
              Some great placeholder content for the first featurette here.
              Imagine some exciting prose here.Some great placeholder content
              for the first featurette here. Imagine some exciting prose
              here.Some great placeholder content for the first featurette here.
              Imagine some exciting prose here.
            </p>
          </div>
        </div>
      </div>
    </React.Fragment>
  );
};
export default Team;
