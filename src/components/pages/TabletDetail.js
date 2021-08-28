import React from "react";
import { useParams } from "react-router-dom";
import TabletData from "../tablet/tabletData.json";
import Images from './Images'
let url = "";

const TabletDetail = () => {
  const params = useParams();
  const detail = TabletData[params.tabletId];

  return (
    <React.Fragment>
      <div className="container mt-2">
        <div className="row">
          <Images data={detail.Img_url}/>
          <div className="col my-2 mx-3">
            <div className="row py-2">
              <div>
                <h3>{detail.Brand} {detail.Model_Name} </h3>
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
        <div className="fs-3 my-2">Specification</div>
        <div className="row">
          <div className="col">
            <div className=" fs-4 mb-1">General</div>
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
            <div className="fs-4 my-1">
              Product Details
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
                  <td style={{'width': '25vw'}}>Display Resolution</td>
                  <td style={{'width': '25vw'}}>{detail.Display_Resolution}</td>
                </tr>
                <tr>
                  <td style={{'width': '25vw'}}>Primary Camera</td>
                  <td style={{'width': '25vw'}}>{detail.Primary_Camera} </td>
                </tr>
                <tr>
                  <td style={{'width': '25vw'}}>Internal Storage</td>
                  <td style={{'width': '25vw'}}>{detail.Internal_Storage} </td>
                </tr>
                <tr>
                  <td style={{'width': '25vw'}}>Processor Speed</td>
                  <td style={{'width': '25vw'}}>{detail.Processor_Speed}</td>
                </tr>
                <tr>
                  <td style={{'width': '25vw'}}>Sim Type</td>
                  <td style={{'width': '25vw'}}>{detail.Sim_Type} </td>
                </tr>
                <tr>
                  <td style={{'width': '25vw'}}>Multi touch</td>
                  <td style={{'width': '25vw'}}>{detail.MultiTouch} </td>
                </tr>
                <tr>
                  <td style={{'width': '25vw'}}>Sim_Size</td>
                  <td style={{'width': '25vw'}}>{detail.Sim_Size} </td>
                </tr>
                <tr>
                  <td style={{'width': '25vw'}}>Sensors</td>
                  <td style={{'width': '25vw'}}>{detail.Sensors} </td>
                </tr>
                <tr>
                  <td style={{'width': '25vw'}}>ROM</td>
                  <td style={{'width': '25vw'}}>{detail.ROM} </td>
                </tr>
                <tr>
                  <td style={{'width': '25vw'}}>RAM Type</td>
                  <td style={{'width': '25vw'}}>{detail.RAM_Type} </td>
                </tr>
              </tbody>
            </table>
          </div>
        </div>
        <div className="row">
          <div className="col">
            <div className="fs-4 my-1">Battery Features</div>
            <table className="table" style={{'width': '75vw'}}>
              <tbody>
                <tr>
                  <td style={{'width': '25vw'}}>Battery Capacity</td>
                  <td style={{'width': '25vw'}}>{detail.Battery_Capacity}</td>
                </tr>
                <tr>
                  <td style={{'width': '25vw'}}>Battery Type</td>
                  <td style={{'width': '25vw'}}>{detail.Battery_Type}</td>
                </tr>
                <tr>
                  <td style={{'width': '25vw'}}>Battery Features</td>
                  <td style={{'width': '25vw'}}>{detail.Battery_Features}</td>
                </tr>
              </tbody>
            </table>
          </div>
        </div>
        <div className="row">
          <div className="col">
            <div className="fs-4 my-1">Warranty</div>
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
            <div className="fs-4 my-1">Display Features</div>
            <table className="table" style={{'width': '75vw'}}>
              <tbody>
                <tr>
                  <td style={{'width':'25vw'}}>Display_Size</td>
                  <td style={{'width':'25vw'}}>{detail.Display_Size}</td>
                </tr>
                <tr>
                  <td style={{'width':'25vw'}}>Display_Resolution</td>
                  <td style={{'width':'25vw'}}>{detail.Display_Resolution}</td>
                </tr>
                <tr>
                  <td style={{'width':'25vw'}}>Display_Resolution_Type</td>
                  <td style={{'width':'25vw'}}>{detail.Display_Resolution_Type}</td>
                </tr>
                <tr>
                  <td style={{'width':'25vw'}}>Display_Supported_Network</td>
                  <td style={{'width':'25vw'}}>{detail.Display_Supported_Network}</td>
                </tr>
                <tr>
                  <td style={{'width':'25vw'}}>Other_Display_Features</td>
                  <td style={{'width':'25vw'}}>{detail.Other_Display_Features}</td>
                </tr>
                <tr>
                  <td style={{'width':'25vw'}}>Display_Type</td>
                  <td style={{'width':'25vw'}}>{detail.Display_Type}</td>
                </tr>
                <tr>
                  <td style={{'width':'25vw'}}>Display_PPI</td>
                  <td style={{'width':'25vw'}}>{detail.Display_PPI}</td>
                </tr>
              </tbody>
            </table>
          </div>
        </div>
        <div className="row">
          <div className="col">
            <div className="fs-4 my-1">Camera features</div>
            <table className="table" style={{'width': '75vw'}}>
              <tbody>
                <tr>
                  <td style={{'width':'25vw'}}>Primary Camera</td>
                  <td style={{'width':'25vw'}}>{detail.Primary_Camera}</td>
                </tr>
                <tr>
                  <td style={{'width':'25vw'}}>Secondary Camera</td>
                  <td style={{'width':'25vw'}}>{detail.Secondary_Camera}</td>
                </tr>
                <tr>
                  <td style={{'width':'25vw'}}>Other Camera Features</td>
                  <td style={{'width':'25vw'}}>{detail.Other_Camera_Features}</td>
                </tr>
              </tbody>
            </table>
          </div>
        </div>
        <div className="row">
          <div className="col">
            <div className="fs-4 my-1">Storag Features</div>
            <table className="table" style={{'width': '75vw'}}>
              <tbody>
                <tr>
                  <td style={{'width':'25vw'}}>Internal Storage</td>
                  <td style={{'width':'25vw'}}>{detail.Internal_Storage}</td>
                </tr>
                <tr>
                  <td style={{'width':'25vw'}}>Expandable Storage Capacity</td>
                  <td style={{'width':'25vw'}}>{detail.Expandable_Storage_Capacity}</td>
                </tr>
                <tr>
                  <td style={{'width':'25vw'}}>Memory Card Support</td>
                  <td style={{'width':'25vw'}}>{detail.Memory_Card_Support}</td>
                </tr>
                <tr>
                  <td style={{'width':'25vw'}}>Memory Card Slot Type</td>
                  <td style={{'width':'25vw'}}>{detail.Memory_Card_Slot_Type}</td>
                </tr>
              </tbody>
            </table>
          </div>
        </div>
        <div className="row">
          <div className="fs-4 my-1">
            Connectivity Features
          </div>
          <div className="col">
            <table className="table" style={{'width': '75vw'}}>
              <tbody>
                <tr>
                  <td style={{'width':'25vw'}}>Bluetooth_Version</td>
                  <td style={{'width':'25vw'}}>{detail.Bluetooth_Version}</td>
                </tr>
                <tr>
                  <td style={{'width':'25vw'}}>USB</td>
                  <td style={{'width':'25vw'}}>{detail.USB}</td>
                </tr>
                <tr>
                  <td style={{'width':'25vw'}}>Headphone_Jack</td>
                  <td style={{'width':'25vw'}}>{detail.Headphone_Jack}</td>
                </tr>
                <tr>
                  <td style={{'width':'25vw'}}>Wi-fi_Version</td>
                  <td style={{'width':'25vw'}}>{detail.Screen_Type}</td>
                </tr>
                <tr>
                  <td style={{'width':'25vw'}}>Other_Connectivity_Features</td>
                  <td style={{'width':'25vw'}}>{detail.Other_Connectivity_Features}</td>
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
