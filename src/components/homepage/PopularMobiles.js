import React from "react";
import "../../css/PopularMobiles.css";
import popularMobile from "./popularMobile.json";
import { Link } from "react-router-dom";

let shopclues_url = "";

const PopularMobiles = () => {
  return (
    <React.Fragment>
      <div className="container mt-2">
        <h4>Popular Mobiles</h4>
        <div className="row row-cols-2 row-cols-md-6 g-1">
          {popularMobile.map((item) => (
            <div className="col" key={item.id}>
              <div className="card h-100">
                <Link
                  to={"/mobiles/" + item.id}
                  className="card-image"
                  style={{ textAlign: "center" }}
                >
                  <img
                    src={item.Img_url[0]}
                    className="card-img-top popular-mobile"
                    alt="..."
                  />
                </Link>
                <div className="card-body">
                  <h5 className="card-title popular-mobile-card-title">
                    <Link
                      to={"/mobiles/" + item.id}
                      style={{ textDecoration: "none" }}
                    >
                      {item.Brand} {item.Model_Name}
                    </Link>
                  </h5>
                  <p className="card-text popular-mobile-card-text">
                    ({item.RAM} + {item.Internal_Storage}){" "}
                    {item.Operating_System}
                    {item.Display_Size} {item.Primary_Camera}{" "}
                    {item.Secondary_Camera}
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
                      href={shopclues_url}
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
export default PopularMobiles;
