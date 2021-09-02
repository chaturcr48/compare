import React, { useEffect } from "react";
import chaturImg from "../../assets/chatur-square-img.jpg";
const TeamDetail = () => {
  useEffect(() => {
    window.scrollTo({ behavior: "smooth", top: "0px" });
  }, []);
  return (
    <React.Fragment>
      <div className="row">
        <div className="col-lg-6">
          <div
            className="member d-flex align-items-start pt-2 pb-2"
            style={{ backgroundColor: "#ECFADF" }}
          >
            <div className="pic ml-2">
              <img
                src={chaturImg}
                className="img-fluid"
                alt=""
                style={{ borderRadius: "50%", width: "200px" }}
              />
            </div>
            <div className="member-info ml-3">
              <h4>Kumar Chatur Ranjan</h4>
              <span>
                <strong>Engineer</strong>
              </span>
              <p>Explicabo voluptatem mollitia et repellat qui dolorum quasi</p>
              <div className="social">
                <a
                  href="https://twitter.com/RanjanChatur"
                  target="_blank"
                  rel="noreferrer noopener"
                >
                  <i class="bi bi-twitter"></i>
                </a>
                &nbsp;&nbsp;
                <a
                  href="https://www.facebook.com/chatur.ranjan.1"
                  target="_blank"
                  rel="noreferrer noopener"
                >
                  <i class="bi bi-facebook"></i>
                </a>
                &nbsp;&nbsp;
                <a
                  href="https://www.instagram.com/chatur_48"
                  target="_blank"
                  rel="noreferrer noopener"
                >
                  <i class="bi bi-instagram"></i>
                </a>
                &nbsp;&nbsp;
                <a
                  href="https://www.linkedin.com/in/kumar-chatur-ranjan-538898179"
                  target="_blank"
                  rel="noreferrer noopener"
                >
                  <i class="bi bi-linkedin"></i>
                </a>
              </div>
            </div>
          </div>
        </div>

        <div className="col-lg-6 mt-4 mt-lg-0">
          <div
            className="member d-flex align-items-start pt-2 pb-2"
            style={{ backgroundColor: "#ECFADF" }}
          >
            <div className="pic ml-2">
              <img
                src={chaturImg}
                className="img-fluid"
                alt=""
                style={{ borderRadius: "50%", width: "200px" }}
              />
            </div>
            <div className="member-info ml-3">
              <h4>Kumar Chatur Ranjan</h4>
              <span>
                <strong>Engineer</strong>
              </span>
              <p>Explicabo voluptatem mollitia et repellat qui dolorum quasi</p>
              <div className="social">
                <a
                  href="https://twitter.com/RanjanChatur"
                  target="_blank"
                  rel="noreferrer noopener"
                >
                  <i class="bi bi-twitter"></i>
                </a>
                &nbsp;&nbsp;
                <a
                  href="https://www.facebook.com/chatur.ranjan.1"
                  target="_blank"
                  rel="noreferrer noopener"
                >
                  <i class="bi bi-facebook"></i>
                </a>
                &nbsp;&nbsp;
                <a
                  href="https://www.instagram.com/chatur_48"
                  target="_blank"
                  rel="noreferrer noopener"
                >
                  <i class="bi bi-instagram"></i>
                </a>
                &nbsp;&nbsp;
                <a
                  href="https://www.linkedin.com/in/kumar-chatur-ranjan-538898179"
                  target="_blank"
                  rel="noreferrer noopener"
                >
                  <i class="bi bi-linkedin"></i>
                </a>
              </div>
            </div>
          </div>
        </div>

        <div className="col-lg-6 mt-4">
          <div
            className="member d-flex align-items-start pt-2 pb-2"
            style={{ backgroundColor: "#ECFADF" }}
          >
            <div className="pic ml-2">
              <img
                src={chaturImg}
                className="img-fluid"
                alt=""
                style={{ borderRadius: "50%", width: "200px" }}
              />
            </div>
            <div className="member-info ml-3">
              <h4>Kumar Chatur Ranjan</h4>
              <span>
                <strong>Engineer</strong>
              </span>
              <p>Explicabo voluptatem mollitia et repellat qui dolorum quasi</p>
              <div className="social">
                <a
                  href="https://twitter.com/RanjanChatur"
                  target="_blank"
                  rel="noreferrer noopener"
                >
                  <i class="bi bi-twitter"></i>
                </a>
                &nbsp;&nbsp;
                <a
                  href="https://www.facebook.com/chatur.ranjan.1"
                  target="_blank"
                  rel="noreferrer noopener"
                >
                  <i class="bi bi-facebook"></i>
                </a>
                &nbsp;&nbsp;
                <a
                  href="https://www.instagram.com/chatur_48"
                  target="_blank"
                  rel="noreferrer noopener"
                >
                  <i class="bi bi-instagram"></i>
                </a>
                &nbsp;&nbsp;
                <a
                  href="https://www.linkedin.com/in/kumar-chatur-ranjan-538898179"
                  target="_blank"
                  rel="noreferrer noopener"
                >
                  <i class="bi bi-linkedin"></i>
                </a>
              </div>
            </div>
          </div>
        </div>
      </div>
    </React.Fragment>
  );
};
export default TeamDetail;
