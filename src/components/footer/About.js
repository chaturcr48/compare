import React from "react";
import "../../css/AboutPage.css";
const About = () => {
  return (
    <>
      <div className="row">
        <div className="pt-4 pt-lg-0 ">
          <h3>About ellComp</h3> <hr style={{ height: "1.75px" }} />
          <p>
            <h4>Overview</h4>
            ellComp.com is an awesome website founded by three undergraduated
            engineering students for online comparison of prices and features of
            products from different tech-gaint online shopping website such as
            Amazon, Flipkart, shopclues, etc. We make it surprisingly easy for
            the users to find the best product at convinent cost. Our goal is to
            provide users the best comparison shopping experience on the
            Internet, and establish ellComp.com as the most trusted and
            effective online destination to make a purchase decision.
          </p>
          <h4>Features</h4>
          <ul>
            <li style={{ listStyle: "none" }}>
              <i class="ri-check-double-line"></i> Get free information about
              electronics products.
            </li>
            <li style={{ listStyle: "none" }}>
              <i class="ri-check-double-line"></i> Compare product
              specification.
            </li>
            <li style={{ listStyle: "none" }}>
              <i class="ri-check-double-line"></i> compare product prices from
              different website.
            </li>
          </ul>
          <p>
            <h4>Description</h4>
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

      <section id="counts" class="counts">
        <div class="container" data-aos="fade-up">
          <div class="row no-gutters">
            <div class="col-lg-3 col-md-6 d-md-flex align-items-md-stretch">
              <div class="count-box">
                <i class="ri-group-line"></i>
                <span class="purecounter">85</span>
                <p>
                  <strong>Members</strong> assosiated with ellcomp
                </p>
                <a href="www.google.com">Find out more &raquo;</a>
              </div>
            </div>
            <div class="col-lg-3 col-md-6 d-md-flex align-items-md-stretch">
              <div class="count-box">
                <i class="ri-group-line"></i>
                <span class="purecounter">85</span>
                <p>
                  <strong>Members</strong> assosiated with ellcomp
                </p>
                <a href="www.google.com">Find out more &raquo;</a>
              </div>
            </div>
            <div class="col-lg-3 col-md-6 d-md-flex align-items-md-stretch">
              <div class="count-box">
                <i class="ri-group-line"></i>
                <span class="purecounter">85</span>
                <p>
                  <strong>Members</strong> assosiated with ellcomp
                </p>
                <a href="www.google.com">Find out more &raquo;</a>
              </div>
            </div>
            <div class="col-lg-3 col-md-6 d-md-flex align-items-md-stretch">
              <div class="count-box">
                <i class="ri-group-line"></i>
                <span class="purecounter">85</span>
                <p>
                  <strong>Members</strong> assosiated with ellcomp
                </p>
                <a href="www.google.com">Find out more &raquo;</a>
              </div>
            </div>
          </div>
        </div>
      </section>
    </>
  );
};
export default About;
