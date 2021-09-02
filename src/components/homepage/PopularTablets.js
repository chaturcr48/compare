import React from "react";
import popularTablet from "./popularTablet.json";

let imgUrl_flipkart =
  "https://www.flipkart.com/realme-c11-2021-cool-grey-32-gb/p/itmbd856acb97c38?pid=MOBG4BEGX8QYNKGZ&lid=LSTMOBG4BEGX8QYNKGZMUPPAI&marketplace=FLIPKART&store=tyy%2F4io&srno=b_1_1&otracker=clp_banner_1_3.bannerX3.BANNER_mobile-phones-store_I14K6ZPZQWYL&fm=neo%2Fmerchandising&iid=9647dd25-2ea8-405c-98a4-cf8ab2901fe8.MOBG4BEGX8QYNKGZ.SEARCH&ppt=clp&ppn=mobile-phones-store&ssid=ol31wiv7hs0000001630558358689";
let imgUrl_amazon =
  "https://www.amazon.in/dp/B089MS8XQ3/ref=s9_acsd_al_bw_c2_x_1_i?pf_rd_m=A1K21FY43GMZF8&pf_rd_s=merchandised-search-4&pf_rd_r=YT17BG8KJ2RJ0C7HK1J9&pf_rd_t=101&pf_rd_p=0d9bd1b8-0a59-4839-a3f9-38a902ab3e28&pf_rd_i=21634722031";

const PopulatTablets = () => {
  return (
    <React.Fragment>
      <div className="container mt-2">
        <h3>Popular Tablets</h3>
        <div className="row">
          {popularTablet.map((item) => (
            <div className="col p-1" key={item.id}>
              <div className="card">
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
                <div className="card-body">
                  <h5 className="card-title">{item.Brand} </h5>
                  <p className="card-text">
                    {item.Internal_Storage} {item.Processor_Type}{" "}
                    {item.Internal_Storage}
                  </p>
                </div>
                <ul class="list-group list-group-flush">
                  <li class="list-group-item">
                    <a
                      href={imgUrl_flipkart}
                      class="card-link"
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
                      href={imgUrl_amazon}
                      class="card-link"
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
                      class="card-link"
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
