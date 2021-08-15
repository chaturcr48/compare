import React, { useState, useEffect } from "react";
import { Link } from "react-router-dom";

const dataLimit = 20;
const pageLimit = 5;

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
      <div className="my-2" style={{ gridRow: "1/2" }}>
        {getPaginatedData().map((mobile) => (
          <div
            className="card mb-3"
            key={mobile.id}
            style={{ maxWidth: "800px", border: "none" }}
          >
            <div className="row" style={{'marginLeft': 'auto'}}>
              <div className="col-md-4 image" style={{'display': 'flex', 'alignItems': 'center'}}>
                <Link to={"/mobiles/" + mobile.id}>
                  <img src="https://source.unsplash.com/400x300/?mobile" 
                  className="img-fluid" 
                  alt="..." />
                </Link>
              </div>
              <div className="col-md-8">
                <div className=" px-2">
                  <p className="fs-5 card-title title">
                    <Link to={"/mobiles/" + mobile.id}>
                      {mobile.Brand} {mobile.Model_Name} {mobile.Processor_Type} Processor 
                      {" "}{mobile.OS} Operating System {mobile.Internal_Storage}
                    </Link>
                  </p>
                  <ul className="card-text fs-6">
                    <li> Ram : {mobile.RAM} </li>
                    <li>Operating System : {mobile.Operating_System}</li>
                    <li>Internal Storage : {mobile.Internal_Storage } Expandable upto {mobile.Expandable_Storage} </li>
                    <li>
                      Display Size  : {mobile.Display_Size}{" "}
                    </li>
                    <li> Processor : {mobile.Processor_Type} {mobile.Processor_Core}</li>
                    <li> Camera :  {mobile.Primary_Camera} Primary; {mobile.Secondary_Camera} Secondary</li>
                    
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
    )
}
export default MobDes;