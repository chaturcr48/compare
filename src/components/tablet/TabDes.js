import React, { useState, useEffect } from "react";
import { Link } from "react-router-dom";

const dataLimit = 20;
const pageLimit = 5;

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
      <div className="my-2" style={{ gridRow: "1/2" }}>
        {getPaginatedData().map((tablet) => (
          <div
            className="card mb-3"
            key={tablet.id}
            style={{ maxWidth: "800px", border: "none" }}
          >
            <div className="row g-0">
              <div className="col-md-4">
                <img src="" className="img-fluid rounded-start" alt="..." />
              </div>
              <div className="col-md-8">
                <div className="card-body">
                  <Link to={"/tablets/" + tablet.id}>{tablet.Brand}</Link>
                  <p className="card-text">
                    {tablet.Display_Size} {tablet.OS}
                  </p>
                </div>
              </div>
            </div>
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
export default TabDes;
