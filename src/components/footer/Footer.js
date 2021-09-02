import React from "react";
import { Link } from "react-router-dom";
import "../../css/Footer.css";

const features = [
  { id: "1", fUrl: "features", name: "Team" },
  { id: "2", fUrl: "features", name: "About Us" },
  { id: "3", fUrl: "features", name: "Contact Us" },
  { id: "4", fUrl: "features", name: "Feedback" },
];
const resources = [
  { id: "1", rUrl: "https://www.amazon.com/", name: "Amazon" },
  { id: "2", rUrl: "https://www.flipkart.com/", name: "Flipkart" },
  { id: "3", rUrl: "https://www.tatacliq.com/", name: "TATA CliQ" },
  { id: "4", rUrl: "https://www.shopclues.com/", name: "Shopclues" },
  { id: "5", rUrl: "https://www.snapdeal.com", name: "Snapdeal" },
  { id: "6", rUrl: "https://www.reliancedigital.in", name: "Relaince Digital" },
];

const about = [
  { id: "1", aUrl: "", name: "Team" },
  { id: "2", aUrl: "", name: "Services" },
  { id: "3", aUrl: "", name: "Privacy" },
  { id: "4", aUrl: "", name: "HELP" },
];

const Footer = () => {
  let footerstyle = {
    color: "white",
    padding: "2px 0px",
  };
  return (
    <React.Fragment>
      <div className="container-fluid mt-2 bg-color">
        <div className="container">
          <div className="row">
            <i className="fa fa-globe globe-icon"></i>
          </div>
          <div className="row pt-2">
            <div className="col">
              <h4><Link style={{textDecoration: 'none', color: 'white'}} to={"/footer-features"}>Features</Link></h4>
              <ul className="list-unstyled text-small">
                {features.map((item) => (
                  <li key={item.id}>
                    <Link
                      style={footerstyle}
                      className="nav-link no-decor px-0"
                      to={"/footer-"+item.fUrl}
                    >
                      {item.name}
                    </Link>
                  </li>
                ))}
              </ul>
            </div>
            <div className="col">
              <h4>Resources</h4>
              <ul className="list-unstyled text-small">
                {resources.map((item) => (
                  <li key={item.id} className=''>
                    <a
                      style={footerstyle}
                      className="nav-link no-decor px-0"
                      href={item.rUrl}
                    >
                      {item.name}
                    </a>
                  </li>
                ))}
              </ul>
            </div>
            <div className="col">
              <h4>About</h4>
              <ul className="list-unstyled text-small">
                {about.map((item) => (
                  <li key={item.id}>
                    <a
                      style={footerstyle}
                      className="nav-link no-decor px-0"
                      href={item.aUrl}
                    >
                      {item.name}
                    </a>
                  </li>
                ))}
              </ul>
            </div>
          </div>
          <div className="row">
            <div className="pb-2">
              <Link style={{ color: "white" }} to="#" className="float-end">
                Back to top <i className="fa fa-angle-double-up"></i>
              </Link>
            </div>
          </div>
        </div>
      </div>
    </React.Fragment>
  );
};
export default Footer;
