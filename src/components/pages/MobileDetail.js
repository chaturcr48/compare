import React from "react";
import { useParams } from "react-router-dom";
import MobileData from "../mobile/mobileData.json";
import Images from "./Images";

let url={}

const MobileDetail = () => {
  const params = useParams();
  const detail = MobileData[params.mobileId];
  return (
    <React.Fragment>
      <div className="container mt-2">
        <div className="row">
          <Images data={detail.Img_url} />
          <div className="col">
            <div className="row py-2">
              <div>
                <h3>{detail.Brand} {detail.Model_Name}</h3>
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
                  {detail.RAM} RAM | {detail.Internal_Storage} Storage
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
        <div className="fs-3 mb-2">Specification</div>
        <div className="row">
          <div className="col">
            <div className="fs-4 mb-1">General</div>
            <table className="table" style={{'width': '75vw'}}>
              <tbody>
                <tr>
                  <td style={{'width': '25vw'}} >In The Box</td>
                  <td style={{'width': '25vw'}}>{detail.In_The_Box}</td>
                </tr>
                <tr>
                  <td style={{'width': '25vw'}} >Model Number</td>
                  <td style={{'width': '25vw'}}>{detail.Model_Number}</td>
                </tr>
                <tr>
                  <td style={{'width': '25vw'}} >Model Name</td>
                  <td style={{'width': '25vw'}}>{detail.Model_Name}</td>
                </tr>
                <tr>
                  <td style={{'width': '25vw'}} >Color</td>
                  <td style={{'width': '25vw'}}>{detail.Color} </td>
                </tr>
                <tr>
                  <td style={{'width': '25vw'}} >Browse Type</td>
                  <td style={{'width': '25vw'}}>{detail.Browse_Type} </td>
                </tr>
                <tr>
                  <td style={{'width': '25vw'}} >SIM Type</td>
                  <td style={{'width': '25vw'}}>{detail.SIM_Type}</td>
                </tr>
                <tr>
                  <td style={{'width': '25vw'}} >Hybrid Sim Slot</td>
                  <td style={{'width': '25vw'}}>{detail.Hybrid_Sim_Slot} </td>
                </tr>
                <tr>
                  <td style={{'width': '25vw'}} >OTG Compatible</td>
                  <td style={{'width': '25vw'}}>{detail.OTG_Compatible} </td>
                </tr>
              </tbody>
            </table>
          </div>
        </div>
        <div className="row">
          <div className="col">
            <div className="fs-4 mb-1">
              Display Features
            </div>
            <table className="table" style={{'width': '75vw'}}>
              <tbody>
                <tr>
                  <td style={{'width': '25vw'}} >Display Size</td>
                  <td style={{'width': '25vw'}}>{detail.Display_Size}</td>
                </tr>
                <tr>
                  <td style={{'width': '25vw'}} >Resolution</td>
                  <td style={{'width': '25vw'}}>{detail.Resolution}</td>
                </tr>
                <tr>
                  <td style={{'width': '25vw'}} >Resolution Type</td>
                  <td style={{'width': '25vw'}}>{detail.Resolution_Type}</td>
                </tr>
                <tr>
                  <td style={{'width': '25vw'}} >Display Type</td>
                  <td style={{'width': '25vw'}}>{detail.Display_Type} </td>
                </tr>
              </tbody>
            </table>
          </div>
        </div>
        <div className="row">
          <div className="col">
            <div className="fs-4 mb-1">Memory and Storage Features</div>
            <table className="table" style={{'width': '75vw'}}>
              <tbody>
                <tr>
                  <td style={{'width': '25vw'}}>Internal Storage</td>
                  <td style={{'width': '25vw'}}>{detail.Internal_Storage}</td>
                </tr>
                <tr>
                  <td style={{'width': '25vw'}}>RAM</td>
                  <td style={{'width': '25vw'}}>{detail.RAM}</td>
                </tr>
                <tr>
                  <td style={{'width': '25vw'}}>Expandable Storage</td>
                  <td style={{'width': '25vw'}}>{detail.Expandable_Storage}</td>
                </tr>
                <tr>
                  <td style={{'width': '25vw'}}>Supported Memory Card Type</td>
                  <td style={{'width': '25vw'}}>{detail.Supported_Memory_Card_Type} </td>
                </tr>
                <tr>
                  <td style={{'width': '25vw'}}>Memory Card Slot Type</td>
                  <td style={{'width': '25vw'}}>{detail.Memory_Card_Slot_Type} </td>
                </tr>
              </tbody>
            </table>
          </div>
        </div>
        <div className="row">
          <div className="col">
            <div className="fs-4 mb-1">Os and Processor Features </div>
            <table className="table" style={{'width': '75vw'}}>
              <tbody>
                <tr>
                  <td style={{'width': '25vw'}}>Operating System</td>
                  <td style={{'width': '25vw'}}>{detail.Operating_System}</td>
                </tr>
                <tr>
                  <td style={{'width': '25vw'}}>Processor Type</td>
                  <td style={{'width': '25vw'}}>{detail.Processor_Type}</td>
                </tr>
                <tr>
                  <td style={{'width': '25vw'}}>Processor Core</td>
                  <td style={{'width': '25vw'}}>{detail.Processor_Core}</td>
                </tr>
                <tr>
                  <td style={{'width': '25vw'}}> Primary Clock Speed</td>
                  <td style={{'width': '25vw'}}>{detail.Primary_Clock_Speed} </td>
                </tr>
              </tbody>
            </table>
          </div>
        </div>
        <div className="row">
          <div className="col">
            <div className="fs-4 mb-1">Connectivity Features</div>
            <table className="table" style={{'width': '75vw'}}>
              <tbody>
                <tr>
                  <td style={{'width': '25vw'}}>Wireless LAN</td>
                  <td style={{'width': '25vw'}}>{detail.Wireless_LAN}</td>
                </tr>
                <tr>
                  <td style={{'width': '25vw'}}>Bluetooth</td>
                  <td style={{'width': '25vw'}}>{detail.Bluetooth}</td>
                </tr>
              </tbody>
            </table>
          </div>
        </div>
        <div className="row">
          <div className="col">
            <div className="fs-4 mb-1">Dimensions</div>
            <table className="table" style={{'width': '75vw'}}>
              <tbody>
                <tr>
                  <td style={{'width': '25vw'}}>Dimensions</td>
                  <td style={{'width': '25vw'}}>{detail.Dimensions}</td>
                </tr>
                <tr>
                  <td style={{'width': '25vw'}}>Weight</td>
                  <td style={{'width': '25vw'}}>{detail.Weight}</td>
                </tr>
              </tbody>
            </table>
          </div>
        </div>
        <div className="row">
          <div className="col">
            <div className="fs-4 mb-1">Operating System</div>
            <table className="table" style={{'width': '75vw'}}>
              <tbody>
                <tr>
                  <td style={{'width': '25vw'}}>OS Architecture</td>
                  <td style={{'width': '25vw'}}>{detail.OS_Architecture}</td>
                </tr>
                <tr>
                  <td style={{'width': '25vw'}}>Operating System</td>
                  <td style={{'width': '25vw'}}>{detail.Operating_System}</td>
                </tr>
                <tr>
                  <td style={{'width': '25vw'}}>System Architecture</td>
                  <td style={{'width': '25vw'}}>{detail.System_Architecture}</td>
                </tr>
              </tbody>
            </table>
          </div>
        </div>
        <div className="row">
          <div className="fs-4 mb-1">
            Display And Audio Features
          </div>
          <div className="col">
            <table className="table" style={{'width': '75vw'}}>
              <tbody>
                <tr>
                  <td style={{'width': '25vw'}}>Touch Screen</td>
                  <td style={{'width': '25vw'}}>{detail.Touchscreen}</td>
                </tr>
                <tr>
                  <td style={{'width': '25vw'}}>Screen Size</td>
                  <td style={{'width': '25vw'}}>{detail.Screen_Size}</td>
                </tr>
                <tr>
                  <td style={{'width': '25vw'}}>Screen Resolution</td>
                  <td style={{'width': '25vw'}}>{detail.Screen_Resolution}</td>
                </tr>
                <tr>
                  <td style={{'width': '25vw'}}>Screen Type</td>
                  <td style={{'width': '25vw'}}>{detail.Screen_Type}</td>
                </tr>
                <tr>
                  <td style={{'width': '25vw'}}>Speakers</td>
                  <td style={{'width': '25vw'}}>{detail.Speakers}</td>
                </tr>
                <tr>
                  <td style={{'width': '25vw'}}>Internal Mic</td>
                  <td style={{'width': '25vw'}}>{detail.Internal_Mic}</td>
                </tr>
                <tr>
                  <td style={{'width': '25vw'}}>Sound Properties</td>
                  <td style={{'width': '25vw'}}>{detail.Sound_Properties}</td>
                </tr>
              </tbody>
            </table>
          </div>
        </div>
        <div className="row">
          <div className="col">
            <div className="fs-4 mb-1">Port And Slot Features</div>
            <table className="table" style={{'width': '75vw'}}>
              <tbody>
                <tr>
                  <td style={{'width': '25vw'}}>Mic In</td>
                  <td style={{'width': '25vw'}}>{detail.Mic_In}</td>
                </tr>
                <tr>
                  <td style={{'width': '25vw'}}>USB Port</td>
                  <td style={{'width': '25vw'}}>{detail.USB_Port}</td>
                </tr>
                <tr>
                  <td style={{'width': '25vw'}}>HDMI Port</td>
                  <td style={{'width': '25vw'}}>{detail.HDMI_Port}</td>
                </tr>
                <tr>
                  <td style={{'width': '25vw'}}>Multi Card Slot</td>
                  <td style={{'width': '25vw'}}>{detail.Multi_Card_Slot}</td>
                </tr>
                <tr>
                  <td style={{'width': '25vw'}}>Hardware Interface</td>
                  <td style={{'width': '25vw'}}>{detail.Hardware_Interface}</td>
                </tr>
              </tbody>
            </table>
          </div>
        </div>
      </div>
    </React.Fragment>
  );
};
export default MobileDetail;
