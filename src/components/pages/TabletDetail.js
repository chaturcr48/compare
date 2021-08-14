import React from "react";
import { useParams, Link } from "react-router-dom";
import TabletData from "../tablet/TabletData.json";
let url = "";

const TabletDetail = () => {
  const params = useParams();
  const detail = TabletData[params.tabletId];

  return (
    <React.Fragment>
      <div className="container mt-2">
        <div className="row">
          <div className="col">
            <div className="row">
              <img src="" className="big-img" alt="..." />
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
                <h5>{detail.Brand}</h5>
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
                <strong style={{ color: "green" }}>
                  INR&nbsp; {detail.Discounted_price}
                </strong>
                <span className="text-decoration-line-through ml-1">
                  {" "}
                  {detail.MRP_Price}{" "}
                </span>
              </div>
              <div>
                Capacity:&nbsp;{" "}
                <strong>
                  {detail.RAM} RAM | {detail.SSD_Capacity} SSD
                </strong>
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
        <div className="specification-heading">Specification</div>
        <div className="row">
          <div className="col">
            <div className="specification-heading">General</div>
            <table className="table">
              <tbody>
                <tr>
                  <td className="table-feature">Sales Package</td>
                  <td>{detail.Sales_Package}</td>
                </tr>
                <tr>
                  <td className="table-feature">Model Number</td>
                  <td>{detail.Model_Number}</td>
                </tr>
                <tr>
                  <td className="table-feature">Part Number</td>
                  <td>{detail.Part_Number}</td>
                </tr>
                <tr>
                  <td className="table-feature">Series</td>
                  <td>{detail.Series} </td>
                </tr>
                <tr>
                  <td className="table-feature">Color</td>
                  <td>{detail.Color} </td>
                </tr>
                <tr>
                  <td className="table-feature">Type</td>
                  <td>{detail.Type}</td>
                </tr>
                <tr>
                  <td className="table-feature">Suitable For</td>
                  <td>{detail.Suitable_For} </td>
                </tr>
                <tr>
                  <td className="table-feature">Battery Cell</td>
                  <td>{detail.Battery_Cell} </td>
                </tr>
                <tr>
                  <td className="table-feature">MS Office Provided</td>
                  <td>{detail.MS_Office_Provided} </td>
                </tr>
              </tbody>
            </table>
          </div>
        </div>
        <div className="row">
          <div className="col">
            <div className="specification-heading">
              Processor And Memory Features
            </div>
            <table className="table">
              <tbody>
                <tr>
                  <td className="table-feature">Processor Brand</td>
                  <td>{detail.Processor_Brand}</td>
                </tr>
                <tr>
                  <td className="table-feature">Processor Name</td>
                  <td>{detail.Processor_Name}</td>
                </tr>
                <tr>
                  <td className="table-feature">Processor Generation</td>
                  <td>{detail.Processor_Generation}</td>
                </tr>
                <tr>
                  <td className="table-feature">SSD</td>
                  <td>{detail.SSD} </td>
                </tr>
                <tr>
                  <td className="table-feature">SSD Capacity</td>
                  <td>{detail.SSD_Capacity} </td>
                </tr>
                <tr>
                  <td className="table-feature">RAM</td>
                  <td>{detail.RAM}</td>
                </tr>
                <tr>
                  <td className="table-feature">RAM Type</td>
                  <td>{detail.RAM_Type} </td>
                </tr>
                <tr>
                  <td className="table-feature">Processor Variant</td>
                  <td>{detail.Processor_Variant} </td>
                </tr>
                <tr>
                  <td className="table-feature">Clock Speed</td>
                  <td>{detail.Clock_Speed} </td>
                </tr>
              </tbody>
            </table>
          </div>
        </div>
        <div className="row">
          <div className="col">
            <div className="specification-heading">Additional Features</div>
            <table className="table">
              <tbody>
                <tr>
                  <td>Disk Drive</td>
                  <td>{detail.Disk_Drive}</td>
                </tr>
                <tr>
                  <td>Web Camera</td>
                  <td>{detail.Web_Camera}</td>
                </tr>
                <tr>
                  <td>Keyboard</td>
                  <td>{detail.Keyboard}</td>
                </tr>
                <tr>
                  <td>Backlit Keyboard</td>
                  <td>{detail.Backlit_Keyboard} </td>
                </tr>
                <tr>
                  <td>Pointer Device</td>
                  <td>{detail.Pointer_Device} </td>
                </tr>
                <tr>
                  <td>Included Software</td>
                  <td>{detail.Included_Software}</td>
                </tr>
                <tr>
                  <td>Additional Features</td>
                  <td>{detail.Additional_Features} </td>
                </tr>
              </tbody>
            </table>
          </div>
        </div>
        <div className="row">
          <div className="col">
            <div className="specification-heading">Warranty</div>
            <table className="table">
              <tbody>
                <tr>
                  <td>Warranty Summary</td>
                  <td>{detail.Warranty_Summary}</td>
                </tr>
                <tr>
                  <td>Warranty Service Type</td>
                  <td>{detail.Warranty_Service_Type}</td>
                </tr>
                <tr>
                  <td>Covered In Warranty</td>
                  <td>{detail.Covered_in_Warranty}</td>
                </tr>
                <tr>
                  <td>Not Covered in Warrenty</td>
                  <td>{detail.Not_Covered_in_Warranty} </td>
                </tr>
                <tr>
                  <td>Domestic Warranty</td>
                  <td>{detail.Domestic_Warranty} </td>
                </tr>
              </tbody>
            </table>
          </div>
        </div>
        <div className="row">
          <div className="col">
            <div className="specification-heading">Connectivity Features</div>
            <table className="table">
              <tbody>
                <tr>
                  <td>Wireless LAN</td>
                  <td>{detail.Wireless_LAN}</td>
                </tr>
                <tr>
                  <td>Bluetooth</td>
                  <td>{detail.Bluetooth}</td>
                </tr>
              </tbody>
            </table>
          </div>
        </div>
        <div className="row">
          <div className="col">
            <div className="specification-heading">Dimensions</div>
            <table className="table">
              <tbody>
                <tr>
                  <td>Dimensions</td>
                  <td>{detail.Dimensions}</td>
                </tr>
                <tr>
                  <td>Weight</td>
                  <td>{detail.Weight}</td>
                </tr>
              </tbody>
            </table>
          </div>
        </div>
        <div className="row">
          <div className="col">
            <div className="specification-heading">Operating System</div>
            <table className="table">
              <tbody>
                <tr>
                  <td>OS Architecture</td>
                  <td>{detail.OS_Architecture}</td>
                </tr>
                <tr>
                  <td>Operating System</td>
                  <td>{detail.Operating_System}</td>
                </tr>
                <tr>
                  <td>System Architecture</td>
                  <td>{detail.System_Architecture}</td>
                </tr>
              </tbody>
            </table>
          </div>
        </div>
        <div className="row">
          <div className="specification-heading">
            Display And Audio Features
          </div>
          <div className="col">
            <table className="table">
              <tbody>
                <tr>
                  <td>Touch Screen</td>
                  <td>{detail.Touchscreen}</td>
                </tr>
                <tr>
                  <td>Screen Size</td>
                  <td>{detail.Screen_Size}</td>
                </tr>
                <tr>
                  <td>Screen Resolution</td>
                  <td>{detail.Screen_Resolution}</td>
                </tr>
                <tr>
                  <td>Screen Type</td>
                  <td>{detail.Screen_Type}</td>
                </tr>
                <tr>
                  <td>Speakers</td>
                  <td>{detail.Speakers}</td>
                </tr>
                <tr>
                  <td>Internal Mic</td>
                  <td>{detail.Internal_Mic}</td>
                </tr>
                <tr>
                  <td>Sound Properties</td>
                  <td>{detail.Sound_Properties}</td>
                </tr>
              </tbody>
            </table>
          </div>
        </div>
        <div className="row">
          <div className="col">
            <div className="specification-heading">Port And Slot Features</div>
            <table className="table">
              <tbody>
                <tr>
                  <td>Mic In</td>
                  <td>{detail.Mic_In}</td>
                </tr>
                <tr>
                  <td>USB Port</td>
                  <td>{detail.USB_Port}</td>
                </tr>
                <tr>
                  <td>HDMI Port</td>
                  <td>{detail.HDMI_Port}</td>
                </tr>
                <tr>
                  <td>Multi Card Slot</td>
                  <td>{detail.Multi_Card_Slot}</td>
                </tr>
                <tr>
                  <td>Hardware Interface</td>
                  <td>{detail.Hardware_Interface}</td>
                </tr>
              </tbody>
            </table>
          </div>
        </div>
      </div>
    </React.Fragment>
  );
};
export default TabletDetail;
