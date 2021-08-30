import React, { useState, useEffect } from "react";
import { Link } from "react-router-dom";
import "./tablet.css";

const dataLimit = 20;
const pageLimit = 5;

let button_style = {
  width: "45px",
  height: "33px",
  lineHeight: "0px",
  paddingLeft: "7px",
  color: "white",
};

const TabDes = (props) => {
  const Data = props.data;
  const [pages] = useState(Math.round(Data.length / dataLimit));
  const [currentPage, setCurrentPage] = useState(1);

  useEffect(() => {
    window.scrollTo({ behavior: "smooth", top: "0px" });
  }, [currentPage]);

  function goToNextPage() {
    setCurrentPage((page) => page + 1);
  }

  function goToPreviousPage() {
    setCurrentPage((page) => page - 1);
  }

  function changePage(event) {
    const pageNumber = Number(event.target.textContent);
    setCurrentPage(pageNumber);
  }

  const getPaginatedData = () => {
    const startIndex = currentPage * dataLimit - dataLimit;
    const endIndex = startIndex + dataLimit;
    return Data.slice(startIndex, endIndex);
  };

  const getPaginationGroup = () => {
    let start = Math.floor((currentPage - 1) / pageLimit) * pageLimit;
    return new Array(pageLimit).fill().map((_, idx) => start + idx + 1);
  };
  return (
    <React.Fragment>
      <div style={{ width: "auto" }}>
        {getPaginatedData().map((tablet) => (
          <div
            className="card full-card"
            key={tablet.id}
            style={{ border: "none" }}
          >
            <div className="row" style={{ marginLeft: "3px" }}>
              <div
                className="col-md-4 image"
                style={{ display: "flex", alignItems: "center", width: "31%" }}
              >
                <Link to={"/tablets/" + tablet.id} style={{ margin: "auto" }}>
                  <img
                    src={tablet.Img_url[0]}
                    className="img-fluid"
                    alt="..."
                    style={{ height: "21vh" }}
                  />
                </Link>
              </div>
              <div className="col-md-8" style={{ width: "63%" }}>
                <p className="heading card-title title">
                  <Link to={"/tablets/" + tablet.id}>
                    {tablet.Brand} {tablet.Model_Name} {tablet.Processor_Type}{" "}
                    {tablet.Internal_Storage}
                  </Link>
                </p>
                <ul
                  className="card-text des"
                  style={{ paddingLeft: "inherit" }}
                >
                  <li>
                    {" "}
                    Price : {tablet.Discounted_price}
                    <Link className="ml-2 p-1 goto-flipkart" to="">
                      Flipkart
                      <img
                        src="https://seeklogo.com/images/F/flipkart-logo-3F33927DAA-seeklogo.com.png"
                        alt=""
                        style={{ width: "18px" }}
                      />
                    </Link>
                    <Link className="ml-2 p-1 goto-amazon" to="">
                      Amazon
                      <img
                        src="https://cdn.worldvectorlogo.com/logos/amazon-icon-1.svg"
                        alt=""
                        style={{ width: "15px" }}
                      />
                    </Link>
                    <Link className="ml-2 p-1 goto-reliance-trend" to="">
                      Reliance Digital
                      <img
                        src="https://seeklogo.com/images/R/reliance-logo-6CB9A8B72D-seeklogo.com.png"
                        alt=""
                        style={{ width: "20px" }}
                      />
                    </Link>
                  </li>
                  <li> Ram : {tablet.RAM} </li>
                  <li>
                    Operating System : {tablet.OS}{" "}
                    {tablet.Operating_System_Version}
                  </li>
                  <li>Battery : {tablet.Battery_Capacity} </li>
                  <li>Display Size : {tablet.Display_Size} </li>
                  <li> Voice Call : {tablet.Voice_Call}</li>
                  <li>
                    {" "}
                    Camera : {tablet.Primary_Camera} Primary;{" "}
                    {tablet.Secondary_Camera} Secondary
                  </li>
                </ul>
              </div>
            </div>
            <hr className="my-2" />
          </div>
        ))}
      </div>

      <div className="pagination mt-2">
        <button
          style={button_style}
          onClick={goToPreviousPage}
          className={`prev ${currentPage === 1 ? "disabled" : ""}`}
        >
          prev
        </button>
        {getPaginationGroup().map((item, index) => (
          <button
            style={{ width: "35px", height: "35px" }}
            key={index}
            onClick={changePage}
            className={`paginationItem ${
              currentPage === item ? "active" : null
            }`}
          >
            <span>{item}</span>
          </button>
        ))}
        <button
          style={button_style}
          onClick={goToNextPage}
          className={`next ${currentPage === pages ? "disabled" : ""}`}
        >
          next
        </button>
        {/* <span>Total Page({pages})</span> */}
      </div>
    </React.Fragment>
  );
};
export default TabDes;
