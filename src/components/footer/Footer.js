import React from "react";

let url = "";
const features = [
  { id: "1", fUrl: "", name: "Contact Us" },
  { id: "2", fUrl: "", name: "About Us" },
  { id: "3", fUrl: "", name: "Careers" },
  { id: "4", fUrl: "", name: "Feedback" },
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
  let footerstyle={
    color:"white",
    padding: "2px 0px"
  }
  return (
    <React.Fragment>
      <div
        className="container-fluid mt-3 py-4 px-5"
        style={{ backgroundColor: "rgb(68,88,99)", color: "white" }}
      >
        
        <div className="row px-5 my-4 mx-3">
          <div className="col-4 pl-4">
            <h4>Features</h4>
            <ul className="list-unstyled text-small">
              {features.map((item) => (
                <li key={item.id}>
                  <a style={footerstyle} className="nav-link no-decor px-0" href={item.fUrl}>
                    {item.name}
                  </a>
                </li>
              ))}
            </ul>
          </div>
          <div className="col-4">
            <h4>Resources</h4>
            <ul className="list-unstyled text-small">
              {resources.map((item) => (
                <li key={item.id}>
                  <a style={footerstyle} className="nav-link no-decor px-0" href={item.rUrl}>
                    {item.name}
                  </a>
                </li>
              ))}
            </ul>
          </div>
          <div className="col-4 pl-5">
            <h4>About</h4>
            <ul className="list-unstyled text-small">
              {about.map((item) => (
                <li key={item.id}>
                  <a style={footerstyle} className="nav-link no-decor px-0" href={item.aUrl}>
                    {item.name}
                  </a>
                </li>
              ))}
            </ul>
            <div className="py-2" ><a style={{color:"white"}} href={url}>
              Back to top <i className="fa fa-angle-double-up"></i></a>            
          </div>
          </div>
        </div>
      </div>
    </React.Fragment>
  );
};
export default Footer;
