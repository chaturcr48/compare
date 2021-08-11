import React from "react";
import Filter from "../filter/laptopFilter/Filter";
import "./Laptops.css";
import LapDes from "./LapDes";

const Laptops = () => {
  return (
    <React.Fragment>
      <div className="container mt-4">
        <div className="row">
          <div className="bg-info filter-container">
              <h4>Filters</h4>
              <Filter />
          </div>
          <div className="lapDes-container">
            <div> Showing 1 – 20 of 2000 results for "laptop".</div>
            <div className="mt-2">
              <LapDes />
            </div>
          </div>
        </div>
      </div>
    </React.Fragment>
  );
};
export default Laptops;
