import React, { useState, useEffect } from "react";
import { Link } from "react-router-dom";
import "../../css/LapDes.css";

const dataLimit = 20;
const pageLimit = 5;

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
      <div>
        {getPaginatedData().map((Data) => (
          <div
            className="card full-card"
            key={Data.id}
            style={{ border: "none" }}
          >
            <div className="row">
              <div className="col-md-4 image">
                <Link to={"/laptop/" + Data.id}>
                  <img src={Data.imgUrl} className="img-fluid" alt="..." />
                </Link>
              </div>
              <div className="col-md-8">
                <div className="px-2">
                  <h5 className="card-title title">
                    <Link to={"/laptop/" + Data.id}>
                      {Data.Brand} {Data.Series} {Data.Type}
                      {Data.OS_Architecture} {Data.Processor_Brand}
                      {Data.Processor_Name} {Data.Processor_Generation}
                    </Link>
                  </h5>
                  <ul className="card-text">
                    <li>
                      Storage : {Data.SSD_Capacity} SSD {Data.HDD_Capacity} HDD
                    </li>
                    <li>
                      Ram : {Data.RAM} {Data.RAM_Type}
                    </li>
                    <li> Suitable_For : {Data.Suitable_For}</li>
                    <li>
                      Battery : {Data.Battery_Cell} {Data.Battery_Backup}
                    </li>
                    <li>
                      Graphic : {Data.Dedicated_Graphic_Memory_Capacity}{" "}
                      {Data.Dedicated_Graphic_Memory_Type}
                    </li>
                    <li> Operating System : {Data.Operating_System}</li>
                    <li> Screen_Size : {Data.Screen_Size}</li>
                  </ul>
                </div>
              </div>
            </div>
            <hr />
          </div>
        ))}
      </div>

      <div className="pagination mt-2">
        <button
          onClick={goToPreviousPage}
          className={`prev ${currentPage === 1 ? "disabled" : ""}`}
        >
          prev
        </button>
        {getPaginationGroup().map((item, index) => (
          <button
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
          onClick={goToNextPage}
          className={`next ${currentPage === pages ? "disabled" : ""}`}
        >
          next
        </button>
        <span>Total Page({pages})</span>
      </div>
    </React.Fragment>
  );
};

export default LapDes;
