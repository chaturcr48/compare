import React from "react";
import popularLaptop from "./popularLaptop.json";
import "../../css/PopularLaptop.css";

let shopclues_url = "";

const PopulatLaptop = () => {
  return (
    <React.Fragment>
      <div className="container mt-2">
        <h3>Popular Laptops</h3>
        <div className="row row-cols-1 row-cols-md-5 g-1">
          {popularLaptop.map((item) => (
            <div className="col" key={item.id}>
              <div className="card h-100">
                <img
                  src={item.Img_url[0]}
                  className="card-img-top img-fluid"
                  alt="..."
                  style={{
                    // width: "200px",
                    // height: "170px",
                    margin: "auto",
                    padding: "3px",
                  }}
                />
                <div className="card-body">
                  <h5 className="card-title popular-laptop-card-title">{item.Brand} {item.Series}</h5>
                  <p className="card-text popular-laptop-card-text">
                    {item.SSD_Capacity} {item.RAM} {item.RAM_Type}{" "}
                    {item.Graphic_Processor} {item.Screen_Size}{" "}
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
export default PopulatLaptop;
