import React, { useEffect } from "react";
import img from "../../assets/Afham.jpg";
import img1 from "../../assets/himanshu.jpg";
import chaturImg from "../../assets/chatur-square-img.jpg";
import "../../css/TeamDetail.css";

const TeamDetail = () => {
  useEffect(() => {
    window.scrollTo({ behavior: "smooth", top: "0px" });
  }, []);
  return (
    <React.Fragment>
      <section id="team" className="team section-bg">
        <div className="container" data-aos="fade-up">
          <div className="section-title">
            <h3>
              Our Hardworking <span>Team</span>
            </h3>
            <p>
              Ut possimus qui ut temporibus culpa velit eveniet modi omnis est
              adipisci expedita at voluptas atque vitae autem.
            </p>
          </div>

          <div className="row">
            <div
              className="col-lg-3 col-md-6 d-flex align-items-stretch"
              data-aos="fade-up"
              data-aos-delay="100"
            >
              <div className="member">
                <div className="member-img">
                  <img src={img} className="img-fluid" alt="" />
                  <div className="social">
                    <a href="www.google.com">
                      <i className="bi bi-twitter"></i>
                    </a>
                    <a href="www.google.com">
                      <i className="bi bi-facebook"></i>
                    </a>
                    <a href="www.google.com">
                      <i className="bi bi-instagram"></i>
                    </a>
                    <a href="www.google.com">
                      <i className="bi bi-linkedin"></i>
                    </a>
                  </div>
                </div>
                <div className="member-info">
                  <h4>Afham Fardeen</h4>
                  <span>Designer</span>
                </div>
              </div>
            </div>

            <div
              className="col-lg-3 col-md-6 d-flex align-items-stretch"
              data-aos="fade-up"
              data-aos-delay="200"
            >
              <div className="member">
                <div className="member-img">
                  <img src={chaturImg} className="img-fluid" alt="" />
                  <div className="social">
                    <a href="www.google.com">
                      <i className="bi bi-twitter"></i>
                    </a>
                    <a href="www.google.com">
                      <i className="bi bi-facebook"></i>
                    </a>
                    <a href="www.google.com">
                      <i className="bi bi-instagram"></i>
                    </a>
                    <a href="www.google.com">
                      <i className="bi bi-linkedin"></i>
                    </a>
                  </div>
                </div>
                <div className="member-info">
                  <h4>Kumar Chatur Ranjan</h4>
                  <span>Engineer</span>
                </div>
              </div>
            </div>

            <div
              className="col-lg-3 col-md-6 d-flex align-items-stretch"
              data-aos="fade-up"
              data-aos-delay="300"
            >
              <div className="member">
                <div className="member-img">
                  <img src={img1} className="img-fluid" alt="" />
                  <div className="social">
                    <a href="www.google.com">
                      <i className="bi bi-twitter"></i>
                    </a>
                    <a href="www.google.com">
                      <i className="bi bi-facebook"></i>
                    </a>
                    <a href="www.google.com">
                      <i className="bi bi-instagram"></i>
                    </a>
                    <a href="www.google.com">
                      <i className="bi bi-linkedin"></i>
                    </a>
                  </div>
                </div>
                <div className="member-info">
                  <h4>Himanshu Kumar</h4>
                  <span>Developer</span>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>
    </React.Fragment>
  );
};
export default TeamDetail;
