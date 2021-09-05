import React from "react";
import "../../css/AboutPage.css";
const About = () => {
  return (
    <>
      <div className="row">
        <div className="pt-4 pt-lg-0 ">
          <h3>About ellComp</h3> <hr style={{ height: "1.75px" }} />
          <p>
            <span style={{fontSize: '25px', fontWeight: 'bold'}}>Overview</span> <br/>
            ellComp.com is an awesome website founded by three undergraduated
            engineering students for online comparison of prices and features of
            products from different tech-gaint online shopping website such as
            Amazon, Flipkart, shopclues, etc. We make it surprisingly easy for
            the users to find the best product at convinent cost. Our goal is to
            provide users the best comparison shopping experience on the
            Internet, and establish ellComp.com as the most trusted and
            effective online destination to make a purchase decision.
          </p>
          <span style={{fontSize: '25px', fontWeight: 'bold'}}>Features</span> <br />
          <ul>
            <li style={{ listStyle: "none" }}>
              <i className="ri-check-double-line"></i> Get free information about
              electronics products.
            </li>
            <li style={{ listStyle: "none" }}>
              <i className="ri-check-double-line"></i> Compare product
              specification.
            </li>
            <li style={{ listStyle: "none" }}>
              <i className="ri-check-double-line"></i> compare product prices from
              different website.
            </li>
          </ul>
          <p>
            <span style={{fontSize: '25px', fontWeight: 'bold'}}>Description</span> <br />
            In this 21st century time and money is one of the most precious
            things people have. Keeping this in mind we have come up with a
            website which can save your time and money. Users can use ellComp to
            quickly obtain free and unbiased information about electronic
            products and make a purchase decision quickly. The website also
            offers shoppers the ability to view and compare mobile phones and
            their respective pricing information on different online stores,
            thereby enabling users to ultimately find the right product from the
            right store at the best price.
          </p>
        </div>
      </div>

      <section id="counts" className="counts">
        <div className="container" data-aos="fade-up">
          <div className="row">
            <div className="col-lg-3 col-md-6">
              <div className="count-box">
                <i className="bi bi-emoji-smile"></i>
                <span className="purecounter">232</span>
                <p>Happy Clients</p>
              </div>
            </div>

            <div className="col-lg-3 col-md-6 mt-5 mt-md-0">
              <div className="count-box">
                <i className="bi bi-journal-richtext"></i>
                <span className="purecounter">13</span>
                <p>Projects</p>
              </div>
            </div>

            <div className="col-lg-3 col-md-6 mt-5 mt-lg-0">
              <div className="count-box">
                <i className="bi bi-headset"></i>
                <span className="purecounter">1632</span>
                <p>Hours Of Support</p>
              </div>
            </div>

            <div className="col-lg-3 col-md-6 mt-5 mt-lg-0">
              <div className="count-box">
                <i className="bi bi-people"></i>
                <span className="purecounter">3</span>
                <p>Hard Workers</p>
              </div>
            </div>
          </div>
        </div>
      </section>
    </>
  );
};
export default About;
