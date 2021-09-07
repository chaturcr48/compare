import React from "react";
import popularTablet from "./popularTablet.json";
import "../../css/PopularTablet.css";
import { Link } from 'react-router-dom';


let imgUrl_amazon =
  "https://www.amazon.in/dp/B089MS8XQ3/ref=s9_acsd_al_bw_c2_x_1_i?pf_rd_m=A1K21FY43GMZF8&pf_rd_s=merchandised-search-4&pf_rd_r=YT17BG8KJ2RJ0C7HK1J9&pf_rd_t=101&pf_rd_p=0d9bd1b8-0a59-4839-a3f9-38a902ab3e28&pf_rd_i=21634722031";

const PopulatTablets = () => {
  return (
    <React.Fragment>
      <div className="container mt-2">
        <h3>Popular Tablets</h3>
        <div className="row row-cols-1 row-cols-md-4 g-1">
          {popularTablet.map((item) => (
            <div className="col" key={item.id}>
              <div className="card h-100">
              <Link to={'/tablets/'+item.id} className='card-image'>
                <img
                  src={item.Img_url[0]}
                  className="card-img-top"
                  style={{
                    width: "",
                    height: "",
                    margin: "auto",
                    padding: "3px",
                  }}
                  alt="..."
                />
                </Link>
                <div className="card-body">
                  <h5 className="card-title popular-tablet-card-title">
                    <Link to={'/tablets/'+item.id} style={{textDecoration: 'none'}}>{item.Brand} {item.Model_Name} {item.id} </Link> </h5>
                  <p className="card-text popular-tablet-card-text">
                    {item.RAM} RAM {item.Processor_Type}{" "}
                    {item.Internal_Storage} Storage
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
export default PopulatTablets;
