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
<<<<<<< HEAD
            <div className="row" style={{'marginLeft': 'auto'}}>
              <div className="col-md-4 image" style={{'display': 'flex', 'alignItems': 'center'}}>
                <Link to={"/tablets/" + tablet.id}>
                  <img src="https://source.unsplash.com/400x300/?tablet" 
                  className="img-fluid" 
                  alt="..." />
=======
            <div className="row g-0">
              <div className="col-md-4">
                <Link to={"/tablets/" + tablet.id}>
                <img src="" className="img-fluid rounded-start" alt="..." />
>>>>>>> fe1dea7d5fa4392a0780ae19b59075c9705b5858
                </Link>
              </div>
              <div className="col-md-8">
                <div className=" px-2">
                  <p className="fs-5 card-title title">
                    <Link to={"/tablets/" + tablet.id}>
                      {tablet.Brand} {tablet.Model_Name} {tablet.Processor_Type} Processor 
                      {" "}{tablet.OS} Operating System {tablet.Internal_Storage}
                    </Link>
                  </p>
<<<<<<< HEAD
                  <ul className="card-text fs-6">
                    <li> Ram : {tablet.RAM} </li>
                    <li>Operating System : {tablet.OS} {tablet.Operating_System_Version}</li>
                    <li>Battery : {tablet.Battery_Capacity } </li>
                    <li>
                      Display Size  : {tablet.Display_Size}{" "}
                    </li>
                    <li> Voice Call : {tablet.Voice_Call}</li>
                    <li> Camera :  {tablet.Primary_Camera} Primary; {tablet.Secondary_Camera} Secondary</li>
                    
                  </ul>
                </div>
=======
                
              </div>
>>>>>>> fe1dea7d5fa4392a0780ae19b59075c9705b5858
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
export default TabDes;
