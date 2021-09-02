import React, { useState, useEffect } from "react";
import { Link } from "react-router-dom";
import "../../css/LapDes.css";
import "./Laptops.css";

const dataLimit = 20;
const pageLimit = 5;

let button_style = {
  width: "45px",
  height: "33px",
  lineHeight: "0px",
  paddingLeft: "7px",
  borderRadius: "7px",
};

export const LapDes = (props) => {
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
        {getPaginatedData().map((Data) => (
          <div
            className="card full-card"
            key={Data.id}
            style={{ border: "none" }}
          >
            <div className="row" style={{ marginLeft: "3px" }}>
              <div className="col-md-4">
                <Link to={"/laptop/" + Data.id}>
                  <img src={Data.Img_url[0]} className="img-fluid" alt="..." />
                </Link>
              </div>
              <div className="col-md-8">
                <p className="heading card-title title">
                  <Link to={"/laptop/" + Data.id}>
                    {Data.Brand} {Data.Series} {Data.Type}{" "}
                    {Data.OS_Architecture} {Data.Processor_Brand}{" "}
                    {Data.Processor_Name} {Data.Processor_Generation}
                  </Link>
                </p>
                <ul className="card-text">
                  <li className="my-1" style={{ listStyle: "none" }}>
                    <a
                      className="px-1 goto-flipkart"
                      href={Data.Item_url}
                      target="_blank"
                      rel="noreferrer noopener"
                    >
                      Flipkart
                      <img
                        src="https://seeklogo.com/images/F/flipkart-logo-3F33927DAA-seeklogo.com.png"
                        alt=""
                        style={{ width: "18px" }}
                      />
                    </a>
                    <Link className="ml-2 px-1 goto-amazon" to="">
                      Amazon
                      <img
                        src="https://cdn.worldvectorlogo.com/logos/amazon-icon-1.svg"
                        alt=""
                        style={{ width: "15px" }}
                      />
                    </Link>
                    <Link className="ml-2 px-1 goto-reliance-trend" to="">
                      Reliance Digital
                      <img
                        src="https://seeklogo.com/images/R/reliance-logo-6CB9A8B72D-seeklogo.com.png"
                        alt=""
                        style={{ width: "20px" }}
                      />
                    </Link>
                  </li>
                  <li>
                    Storage : {Data.SSD_Capacity} SSD {Data.HDD_Capacity} HDD
                  </li>
                  <li>
                    Ram : {Data.RAM} {Data.RAM_Type}
                  </li>
                  <li>
                    Battery : {Data.Battery_Cell} {Data.Battery_Backup}
                  </li>
                  <li>Graphic : {Data.Graphic_Processor}</li>
                  <li>Weight : {Data.Weight}</li>
                  <li> Operating System : {Data.Operating_System}</li>
                  <li> Screen_Size : {Data.Screen_Size}</li>
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

export default LapDes;
