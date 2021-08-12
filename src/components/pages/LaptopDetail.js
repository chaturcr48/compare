import React from "react";
import { useParams, Link } from "react-router-dom";
import Data from "../laptop/Data.json";
import '../../css/DetailPage.css';
let url = "";

const LaptopDetail = () => {
  const params = useParams();
  const detail = Data[params.laptopId];
  return (
    <React.Fragment>
      <div className="container mt-2">
        <div className="row">
          <div className="col">
            <div className="row">
              <img
                src="https://source.unsplash.com/400x400/?nature,water"
                className="big-img"
                alt="..."
              />
            </div>
            <div className="row mt-1">
              <div className="col-3">
                <img
                  src="https://source.unsplash.com/50x50/?nature,water"
                  className="small-img"
                  alt="..."
                />
              </div>
              <div className="col-3">
                <img
                  src="https://source.unsplash.com/50x50/?nature,water"
                  className="small-img"
                  alt="..."
                />
              </div>
              <div className="col-3">
                <img
                  src="https://source.unsplash.com/50x50/?nature,water"
                  className="small-img"
                  alt="..."
                />
              </div>
              <div className="col-3">
                <img
                  src="https://source.unsplash.com/50x50/?nature,water"
                  className="small-img"
                  alt="..."
                />
              </div>
            </div>
          </div>
          <div className="col">
            <div className="row py-2">
              <div>
                <h5 className="">
                  {detail.Brand}
                  {detail.Series} {detail.Type} {detail.OS_Architecture}{" "}
                  {detail.Processor_Brand} {detail.Processor_Name}{" "}
                  {detail.Processor_Generation}
                </h5>
              </div>
              <div>
                <Link to="">Visit the HP store</Link>
              </div>
              <div>
                <span>
                  <i className="fa fa-star"></i>
                  <i className="fa fa-star"></i>
                  <i className="fa fa-star"></i>
                  <i className="fa fa-star"></i>
                  <i className="fa fa-star-half-o"></i>
                </span>{" "}
                <span>345 ratings and 55 reviews</span>
              </div>
              <div>
                Price:&nbsp;
                <strong style={{ color: "green" }}>INR&nbsp;34323.87</strong>
              </div>
              <div>
                Capacity:&nbsp; <strong>16GB RAM | 512GB SSD</strong>
              </div>
            </div>
            <div className="row mt-2 stores">
              <div>
                <h4>Stores</h4>
              </div>
              <div>
                <table className="table">
                  <thead>
                    <tr className="">
                      <td>
                        <b>Sold By</b>
                      </td>
                      <td>
                        <b>Details</b>
                      </td>
                      <td>
                        <b>Item Price</b>
                      </td>
                      <td>
                        <b>Total Price</b>
                      </td>
                      <td>
                        <b>Visit</b>
                      </td>
                    </tr>
                  </thead>
                  <tbody>
                    <tr className="">
                      <td>Flipkart</td>
                      <td>Free Delivery</td>
                      <td>Thornton</td>
                      <td>Thornton</td>
                      <td>
                        <a href={url}>Visit</a>
                      </td>
                    </tr>
                    <tr className="">
                      <td>Amazon</td>
                      <td>Free Delivery</td>
                      <td>Thornton</td>
                      <td>Thornton</td>
                      <td>
                        <a href={url}>Visit</a>
                      </td>
                    </tr>
                    <tr className="">
                      <td>CliQ</td>
                      <td>Free Delivery</td>
                      <td>Thornton</td>
                      <td>Thornton</td>
                      <td>
                        <a href={url}>Visit</a>
                      </td>
                    </tr>
                    <tr className="">
                      <td>Shopclues</td>
                      <td>Free Delivery</td>
                      <td>Thornton</td>
                      <td>Thornton</td>
                      <td>
                        <a href={url}>Visit</a>
                      </td>
                    </tr>
                    <tr className="">
                      <td>Reliance Trend</td>
                      <td>Free Delivery</td>
                      <td>Thornton</td>
                      <td>Thornton</td>
                      <td>
                        <a href={url}>Visit</a>
                      </td>
                    </tr>
                  </tbody>
                </table>
              </div>
            </div>
          </div>
        </div>

        <div className="row mt-2">
          <h4>Specification</h4>
          <div className="col">
            <table className="table">
              <thead>
                <tr>
                  <td>
                    <b>General</b>
                  </td>
                  <td>
                    <b>General</b>
                  </td>
                </tr>
              </thead>
              <tbody>
                <tr>
                  <td>Sales Package</td>
                  <td>Model Number</td>
                </tr>
                <tr>
                  <td>Model Number</td>
                  <td>Thornton</td>
                </tr>
                <tr>
                  <td>Part Number</td>
                  <td>Thornton</td>
                </tr>
                <tr>
                  <td>Series</td>
                  <td>Thornton</td>
                </tr>
                <tr>
                  <td>Color</td>
                  <td>Thornton</td>
                </tr>
                <tr>
                  <td>Type</td>
                  <td>Thornton</td>
                </tr>
                <tr>
                  <td>Suitable For</td>
                  <td>Thornton</td>
                </tr>
                <tr>
                  <td>Battery Cell</td>
                  <td>Thornton</td>
                </tr>
                <tr>
                  <td>MS Office Provided</td>
                  <td>Thornton</td>
                </tr>
              </tbody>
            </table>
          </div>
          <div className="col">
            <table className="table">
              <thead>
                <tr>
                  <td>
                    <b>Processor And Memory Features</b>
                  </td>
                  <td>
                    <b>Features</b>
                  </td>
                </tr>
              </thead>
              <tbody>
                <tr>
                  <td>Sales Package</td>
                  <td>Model Number</td>
                </tr>
                <tr>
                  <td>Model Number</td>
                  <td>Thornton</td>
                </tr>
                <tr>
                  <td>Part Number</td>
                  <td>Thornton</td>
                </tr>
                <tr>
                  <td>Series</td>
                  <td>Thornton</td>
                </tr>
                <tr>
                  <td>Color</td>
                  <td>Thornton</td>
                </tr>
                <tr>
                  <td>Type</td>
                  <td>Thornton</td>
                </tr>
                <tr>
                  <td>Suitable For</td>
                  <td>Thornton</td>
                </tr>
                <tr>
                  <td>Battery Cell</td>
                  <td>Thornton</td>
                </tr>
                <tr>
                  <td>MS Office Provided</td>
                  <td>Thornton</td>
                </tr>
              </tbody>
            </table>
          </div>
        </div>
        <div className="row">
          <div className="col">
            <table className="table">
              <thead>
                <tr>
                  <td>
                    <b>Operating System</b>
                  </td>
                  <td>
                    <b>System</b>
                  </td>
                </tr>
              </thead>
              <tbody>
                <tr>
                  <td>Sales Package</td>
                  <td>Model Number</td>
                </tr>
                <tr>
                  <td>Model Number</td>
                  <td>Thornton</td>
                </tr>
                <tr>
                  <td>Part Number</td>
                  <td>Thornton</td>
                </tr>
              </tbody>
            </table>
          </div>
          <div className="col">
            <table className="table">
              <thead>
                <tr>
                  <td>
                    <b>D And A Features</b>
                  </td>
                  <td>
                    <b>Features</b>
                  </td>
                </tr>
              </thead>
              <tbody>
                <tr>
                  <td>Sales Package</td>
                  <td>Model Number</td>
                </tr>
                <tr>
                  <td>Model Number</td>
                  <td>Thornton</td>
                </tr>
                <tr>
                  <td>Part Number</td>
                  <td>Thornton</td>
                </tr>
              </tbody>
            </table>
          </div>
          <div className="col">
            <table className="table">
              <thead>
                <tr>
                  <td>
                    <b>Warranty</b>
                  </td>
                  <td>
                    <b>Warranty</b>
                  </td>
                </tr>
              </thead>
              <tbody>
                <tr>
                  <td>Sales Package</td>
                  <td>Model Number</td>
                </tr>
                <tr>
                  <td>Model Number</td>
                  <td>Thornton</td>
                </tr>
                <tr>
                  <td>Part Number</td>
                  <td>Thornton</td>
                </tr>
              </tbody>
            </table>
          </div>
        </div>
        <div className="row">
          <div className="col">
            <table className="table">
              <thead>
                <tr>
                  <td>
                    <b>Port And Slot Features</b>
                  </td>
                  <td>
                    <b>Features</b>
                  </td>
                </tr>
              </thead>
              <tbody>
                <tr>
                  <td>Sales Package</td>
                  <td>Model Number</td>
                </tr>
                <tr>
                  <td>Model Number</td>
                  <td>Thornton</td>
                </tr>
                <tr>
                  <td>Part Number</td>
                  <td>Thornton</td>
                </tr>
                <tr>
                  <td>Series</td>
                  <td>Thornton</td>
                </tr>
                <tr>
                  <td>Color</td>
                  <td>Thornton</td>
                </tr>
              </tbody>
            </table>
          </div>
          <div className="col">
            <table className="table">
              <thead>
                <tr>
                  <td>
                    <b>Additional Features</b>
                  </td>
                  <td>
                    <b>Additional Features</b>
                  </td>
                </tr>
              </thead>
              <tbody>
                <tr>
                  <td>Sales Package</td>
                  <td>Model Number</td>
                </tr>
                <tr>
                  <td>Model Number</td>
                  <td>Thornton</td>
                </tr>
                <tr>
                  <td>Part Number</td>
                  <td>Thornton</td>
                </tr>
                <tr>
                  <td>Series</td>
                  <td>Thornton</td>
                </tr>
                <tr>
                  <td>Color</td>
                  <td>Thornton</td>
                </tr>
                <tr>
                  <td>Type</td>
                  <td>Thornton</td>
                </tr>
                <tr>
                  <td>Suitable For</td>
                  <td>Thornton</td>
                </tr>
              </tbody>
            </table>
          </div>
        </div>
      </div>
    </React.Fragment>
  );
};
export default LaptopDetail;
