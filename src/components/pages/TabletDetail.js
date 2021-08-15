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
        <div className="specification-heading fs-3">Specification</div>
        <div className="row">
          <div className="col">
            <div className="specification-heading fs-4">General</div>
            <table className="table"  style={{'width': '75vw'}}>
              <tbody>
                <tr>
                  <td style={{'width': '25vw'}}>Model Number</td>
                  <td style={{'width': '25vw'}}>{detail.Model_Number}</td>
                </tr>
                <tr>
                  <td style={{'width': '25vw'}}>Model Name</td>
                  <td style={{'width': '25vw'}}>{detail.Model_Name}</td>
                </tr>
                <tr>
                  <td style={{'width': '25vw'}}>Color</td>
                  <td style={{'width': '25vw'}}>{detail.Color}</td>
                </tr>
                <tr>
                  <td style={{'width': '25vw'}}>Connectivity</td>
                  <td style={{'width': '25vw'}}>{detail.Connectivity} </td>
                </tr>
                <tr>
                  <td style={{'width': '25vw'}}>OS</td>
                  <td style={{'width': '25vw'}}>{detail.OS} </td>
                </tr>
                <tr>
                  <td style={{'width': '25vw'}}>Operating System Version</td>
                  <td style={{'width': '25vw'}}>{detail.Operating_System_Version}</td>
                </tr>
                <tr>
                  <td style={{'width': '25vw'}}>RAM</td>
                  <td style={{'width': '25vw'}}>{detail.RAM} </td>
                </tr>
                <tr>
                  <td style={{'width': '25vw'}}>Voice Call</td>
                  <td style={{'width': '25vw'}}>{detail.Voice_Call} </td>
                </tr>
              </tbody>
            </table>
          </div>
        </div>
        <div className="row">
          <div className="col">
            <div className="specification-heading fs-4">
              Processor And Memory Features
            </div>
            <table className="table"  style={{'width': '75vw'}}>
              <tbody>
                <tr>
                  <td style={{'width': '25vw'}}>Display Size</td>
                  <td style={{'width': '25vw'}}>{detail.Display_Size}</td>
                </tr>
                <tr>
                  <td style={{'width': '25vw'}}>Sales Package</td>
                  <td style={{'width': '25vw'}}>{detail.Sales_Package}</td>
                </tr>
                <tr>
                  <td style={{'width': '25vw'}}>Processor Generation</td>
                  <td style={{'width': '25vw'}}>{detail.Processor_Generation}</td>
                </tr>
                <tr>
                  <td style={{'width': '25vw'}}>SSD</td>
                  <td style={{'width': '25vw'}}>{detail.SSD} </td>
                </tr>
                <tr>
                  <td style={{'width': '25vw'}}>SSD Capacity</td>
                  <td style={{'width': '25vw'}}>{detail.SSD_Capacity} </td>
                </tr>
                <tr>
                  <td style={{'width': '25vw'}}>RAM</td>
                  <td style={{'width': '25vw'}}>{detail.RAM}</td>
                </tr>
                <tr>
                  <td style={{'width': '25vw'}}>RAM Type</td>
                  <td style={{'width': '25vw'}}>{detail.RAM_Type} </td>
                </tr>
                <tr>
                  <td style={{'width': '25vw'}}>HDD Capacity</td>
                  <td style={{'width': '25vw'}}>{detail.HDD_Capacity} </td>
                </tr>
                <tr>
                  <td style={{'width': '25vw'}}>Processor Variant</td>
                  <td style={{'width': '25vw'}}>{detail.Processor_Variant} </td>
                </tr>
                <tr>
                  <td style={{'width': '25vw'}}>Clock Speed</td>
                  <td style={{'width': '25vw'}}>{detail.Clock_Speed} </td>
                </tr>
                <tr>
                  <td style={{'width': '25vw'}}>Expandable Memory</td>
                  <td style={{'width': '25vw'}}>{detail.Expandable_Memory} </td>
                </tr>
                <tr>
                  <td style={{'width': '25vw'}}>RAM Frequency</td>
                  <td style={{'width': '25vw'}}>{detail.RAM_Frequency} </td>
                </tr>
                <tr>
                  <td style={{'width': '25vw'}}>Cache</td>
                  <td style={{'width': '25vw'}}>{detail.Cache} </td>
                </tr>
                <tr>
                  <td style={{'width': '25vw'}}>RPM</td>
                  <td style={{'width': '25vw'}}>{detail.RPM} </td>
                </tr>
                <tr>
                  <td style={{'width': '25vw'}}>Graphic Processor</td>
                  <td style={{'width': '25vw'}}>{detail.Graphic_Processor} </td>
                </tr>
                <tr>
                  <td style={{'width': '25vw'}}>Number of Cores</td>
                  <td style={{'width': '25vw'}}>{detail.Number_of_Cores} </td>
                </tr>
              </tbody>
            </table>
          </div>
        </div>
        <div className="row">
          <div className="col">
            <div className="specification-heading fs-4">Additional Features</div>
            <table className="table" style={{'width': '75vw'}}>
              <tbody>
                <tr>
                  <td style={{'width': '25vw'}}>Disk Drive</td>
                  <td style={{'width': '25vw'}}>{detail.Disk_Drive}</td>
                </tr>
                <tr>
                  <td style={{'width': '25vw'}}>Web Camera</td>
                  <td style={{'width': '25vw'}}>{detail.Web_Camera}</td>
                </tr>
                <tr>
                  <td style={{'width': '25vw'}}>Keyboard</td>
                  <td style={{'width': '25vw'}}>{detail.Keyboard}</td>
                </tr>
                <tr>
                  <td style={{'width': '25vw'}}>Backlit Keyboard</td>
                  <td style={{'width': '25vw'}}>{detail.Backlit_Keyboard} </td>
                </tr>
                <tr>
                  <td style={{'width': '25vw'}}>Pointer Device</td>
                  <td style={{'width': '25vw'}}>{detail.Pointer_Device} </td>
                </tr>
                <tr>
                  <td style={{'width': '25vw'}}>Included Software</td>
                  <td style={{'width': '25vw'}}>{detail.Included_Software}</td>
                </tr>
                <tr>
                  <td style={{'width': '25vw'}}>Additional Features</td>
                  <td style={{'width': '25vw'}}>{detail.Additional_Features} </td>
                </tr>
              </tbody>
            </table>
          </div>
        </div>
        <div className="row">
          <div className="col">
            <div className="specification-heading fs-4">Warranty</div>
            <table className="table" style={{'width': '75vw'}}>
              <tbody>
                <tr>
                  <td style={{'width':'25vw'}}>Warranty Summary</td>
                  <td style={{'width':'25vw'}}>{detail.Warranty_Summary}</td>
                </tr>
                <tr>
                  <td style={{'width':'25vw'}}>Warranty Service Type</td>
                  <td style={{'width':'25vw'}}>{detail.Warranty_Service_Type}</td>
                </tr>
                <tr>
                  <td style={{'width':'25vw'}}>Covered In Warranty</td>
                  <td style={{'width':'25vw'}}>{detail.Covered_in_Warranty}</td>
                </tr>
                <tr>
                  <td style={{'width':'25vw'}}>Not Covered in Warrenty</td>
                  <td style={{'width':'25vw'}}>{detail.Not_Covered_in_Warranty} </td>
                </tr>
                <tr>
                  <td style={{'width':'25vw'}}>Domestic Warranty</td>
                  <td style={{'width':'25vw'}}>{detail.Domestic_Warranty} </td>
                </tr>
              </tbody>
            </table>
          </div>
        </div>
        <div className="row">
          <div className="col">
            <div className="specification-heading fs-4">Connectivity Features</div>
            <table className="table" style={{'width': '75vw'}}>
              <tbody>
                <tr>
                  <td style={{'width':'25vw'}}>Wireless LAN</td>
                  <td style={{'width':'25vw'}}>{detail.Wireless_LAN}</td>
                </tr>
                <tr>
                  <td style={{'width':'25vw'}}>Bluetooth</td>
                  <td style={{'width':'25vw'}}>{detail.Bluetooth}</td>
                </tr>
              </tbody>
            </table>
          </div>
        </div>
        <div className="row">
          <div className="col">
            <div className="specification-heading fs-4">Dimensions</div>
            <table className="table" style={{'width': '75vw'}}>
              <tbody>
                <tr>
                  <td style={{'width':'25vw'}}>Dimensions</td>
                  <td style={{'width':'25vw'}}>{detail.Dimensions}</td>
                </tr>
                <tr>
                  <td style={{'width':'25vw'}}>Weight</td>
                  <td style={{'width':'25vw'}}>{detail.Weight}</td>
                </tr>
              </tbody>
            </table>
          </div>
        </div>
        <div className="row">
          <div className="col">
            <div className="specification-heading fs-4">Operating System</div>
            <table className="table" style={{'width': '75vw'}}>
              <tbody>
                <tr>
                  <td style={{'width':'25vw'}}>OS Architecture</td>
                  <td style={{'width':'25vw'}}>{detail.OS_Architecture}</td>
                </tr>
                <tr>
                  <td style={{'width':'25vw'}}>Operating System</td>
                  <td style={{'width':'25vw'}}>{detail.Operating_System}</td>
                </tr>
                <tr>
                  <td style={{'width':'25vw'}}>System Architecture</td>
                  <td style={{'width':'25vw'}}>{detail.System_Architecture}</td>
                </tr>
              </tbody>
            </table>
          </div>
        </div>
        <div className="row">
          <div className="specification-heading fs-4">
            Display And Audio Features
          </div>
          <div className="col">
            <table className="table" style={{'width': '75vw'}}>
              <tbody>
                <tr>
                  <td style={{'width':'25vw'}}>Touch Screen</td>
                  <td style={{'width':'25vw'}}>{detail.Touchscreen}</td>
                </tr>
                <tr>
                  <td style={{'width':'25vw'}}>Screen Size</td>
                  <td style={{'width':'25vw'}}>{detail.Screen_Size}</td>
                </tr>
                <tr>
                  <td style={{'width':'25vw'}}>Screen Resolution</td>
                  <td style={{'width':'25vw'}}>{detail.Screen_Resolution}</td>
                </tr>
                <tr>
                  <td style={{'width':'25vw'}}>Screen Type</td>
                  <td style={{'width':'25vw'}}>{detail.Screen_Type}</td>
                </tr>
                <tr>
                  <td style={{'width':'25vw'}}>Speakers</td>
                  <td style={{'width':'25vw'}}>{detail.Speakers}</td>
                </tr>
                <tr>
                  <td style={{'width':'25vw'}}>Internal Mic</td>
                  <td style={{'width':'25vw'}}>{detail.Internal_Mic}</td>
                </tr>
                <tr>
                  <td style={{'width':'25vw'}}>Sound Properties</td>
                  <td style={{'width':'25vw'}}>{detail.Sound_Properties}</td>
                </tr>
              </tbody>
            </table>
          </div>
        </div>
        <div className="row">
          <div className="col">
            <div className="specification-heading fs-4">Port And Slot Features</div>
            <table className="table" style={{'width': '75vw'}}>
              <tbody>
                <tr>
                  <td style={{'width':'25vw'}}>Mic In</td>
                  <td style={{'width':'25vw'}}>{detail.Mic_In}</td>
                </tr>
                <tr>
                  <td style={{'width':'25vw'}}>USB Port</td>
                  <td style={{'width':'25vw'}}>{detail.USB_Port}</td>
                </tr>
                <tr>
                  <td style={{'width':'25vw'}}>HDMI Port</td>
                  <td style={{'width':'25vw'}}>{detail.HDMI_Port}</td>
                </tr>
                <tr>
                  <td style={{'width':'25vw'}}>Multi Card Slot</td>
                  <td style={{'width':'25vw'}}>{detail.Multi_Card_Slot}</td>
                </tr>
                <tr>
                  <td style={{'width':'25vw'}}>Hardware Interface</td>
                  <td style={{'width':'25vw'}}>{detail.Hardware_Interface}</td>
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
