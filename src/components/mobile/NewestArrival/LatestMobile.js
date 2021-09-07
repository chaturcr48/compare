import React from "react";
import latestMobile from "./LatestMobile.json";
import "../../../css/LatestMobile.css";
import { Link } from "react-router-dom";

let imgUrl_amazon =
  "https://www.amazon.in/dp/B089MS8XQ3/ref=s9_acsd_al_bw_c2_x_1_i?pf_rd_m=A1K21FY43GMZF8&pf_rd_s=merchandised-search-4&pf_rd_r=YT17BG8KJ2RJ0C7HK1J9&pf_rd_t=101&pf_rd_p=0d9bd1b8-0a59-4839-a3f9-38a902ab3e28&pf_rd_i=21634722031";

const LatestMobile = () => {
  return (
    <React.Fragment>
      <div className="container mt-2">
        <h4>Latest Mobile Phones</h4>
        <div className="animation-container">
          <div className="new-mobile-animation">
            <span className="animation-text">New</span>
            <span className="animation-text">New</span>
            <span className="animation-text">New</span>
          </div>
        </div>
        <div className="row row-cols-2 row-cols-md-6 g-1">
          {latestMobile.map((item) => (
            <div className="col" key={item.id}>
              <div className="card h-100">
              <Link to={"/mobiles/" + item.id} className='card-image' style={{textAlign: 'center'}}>
                <img
                  src={item.Img_url[0]}
                  className="card-img-top popular-mobile"
                  alt="..."
                />
                </Link>
                <div className="card-body">
                  <h5 className="card-title">
                    <Link
                      to={"/mobiles/" + item.id}
                      style={{ textDecoration: "none" }}
                    >
                      {item.Brand} {item.Model_Name}
                    </Link>{" "}
                  </h5>
                  <p className="card-text popular-mobile-card-text">
                    Rs {item.Discounted_price} ({item.RAM}+
                    {item.Internal_Storage}) {item.Primary_Camera} {item.Color}
                  </p>
                </div>
                <ul className="list-group list-group-flush">
                  <li className="list-group-item">
                    <a
                      href={item.Item_url}
                      className="card-link"
                      target="_blank"
                      rel="noreferrer noopener"
                    >
                      <img
                        src="https://seeklogo.com/images/F/flipkart-logo-3F33927DAA-seeklogo.com.png"
                        alt=""
                        className="popular-mobile-img-icon"
                        style={{ width: "20px" }}
                      ></img>
                    </a>
                    <a
                      href={item.Amazon_link}
                      className="card-link"
                      target="_blank"
                      rel="noreferrer noopener"
                    >
                      <img
                        src="https://upload.wikimedia.org/wikipedia/commons/4/4a/Amazon_icon.svg"
                        alt=""
                        style={{ width: "20px" }}
                      ></img>
                    </a>
                    <a
                      href={imgUrl_amazon}
                      className="card-link"
                      target="_blank"
                      rel="noreferrer noopener"
                    >
                      <img
                        src="https://cdn2.iconfinder.com/data/icons/social-icons-color/512/shopclues-512.png"
                        alt=""
                        style={{ width: "20px" }}
                      ></img>
                    </a>
                  </li>
                </ul>
              </div>
            </div>
          ))}
        </div>
      </div>
    </React.Fragment>
  );
};
export default LatestMobile;
