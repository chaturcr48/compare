import React, { useState, useEffect } from "react";
import { Link } from "react-router-dom";
import "./mobile.css";

const dataLimit = 20;
const pageLimit = 5;

let button_style = {
  width: "45px",
  height: "33px",
  lineHeight: "0px",
  paddingLeft: "7px",
  color: "white",
  borderRadius: "7px",
  backgroundColor: "rgb(77,88,99)",
};

const MobDes = (props) => {
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
        {getPaginatedData().map((mobile) => (
          // console.log(mobile.Img_url)

          <div
            className="card full-card"
            key={mobile.id}
            style={{ border: "none" }}
          >
            <div className="row" style={{ marginLeft: "3px" }}>
              <div
                className="col-md-4"
                style={{ display: "flex", alignItems: "center", width: "22%" }}
              >
                <Link to={"/mobiles/" + mobile.id} style={{ margin: "auto" }}>
                  <img
                    src={mobile.Img_url[0]}
                    className="img-fluid"
                    alt="..."
                    style={{ height: "21vh" }}
                  />
                </Link>
              </div>

              <div className="col-md-8" style={{ width: "72%" }}>
                <p className="heading card-title title">
                  <Link to={"/mobiles/" + mobile.id}>
                    {mobile.Brand} {mobile.Model_Name} {mobile.Processor_Type}{" "}
                    Processor {mobile.OS} Operating System{" "}
                    {mobile.Internal_Storage}
                  </Link>
                </p>
                <ul className="card-text">
                  <li className='my-1' style={{listStyle: 'none'}}>
                    <a className=" p-1 goto-flipkart" href={mobile.Item_url}
                      target="_blank"
                      rel="noreferrer noopener">
                      Flipkart
                      <img
                        src="https://seeklogo.com/images/F/flipkart-logo-3F33927DAA-seeklogo.com.png"
                        alt=""
                        style={{ width: "18px" }}
                      />
                    </a>
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
                  <li> Ram : {mobile.RAM} </li>
                  <li>Operating System : {mobile.Operating_System}</li>
                  <li>
                    Internal Storage : {mobile.Internal_Storage} Expandable upto{" "}
                    {mobile.Expandable_Storage}{" "}
                  </li>
                  <li>Display Size : {mobile.Display_Size}</li>
                  <li>
                    {" "}
                    Processor : {mobile.Processor_Type} {mobile.Processor_Core}
                  </li>
                  <li>
                    {" "}
                    Camera : {mobile.Primary_Camera} Primary;{" "}
                    {mobile.Secondary_Camera} Secondary
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
export default MobDes;
