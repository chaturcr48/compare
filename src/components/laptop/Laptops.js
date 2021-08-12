import React from "react";
import Filter from "../filter/LaptopFilter/Filter";
import './laptop.css'
import LapDes from './LapDes'
import './laptop.css';

const Laptops = () => {
  return (
    <React.Fragment>
      <div className="row mt-4 mx-1">
        <div className="col-3 pl-4">
          <div
            className="filter container"
            style={{
              backgroundColor: "rgb(240,240,240)",
              padding: "2vw",
              border : "2px solid rgb(68,88,99)",
              fontFamily: "Quicksand",
            }}
          >
            <h4>Filters</h4>
            <br />
            <Filter />
            <br />
          </div>
        </div>
        <div className="col-9">
          <div> Showing 1 – 20 of 2000 results for "laptop".</div>
          <div className="my-2" style={{ gridRow: "1/2" }}>
            <LapDes/>
          </div>
        </div>
      </div>
    </React.Fragment>
  );
};
export default Laptops;