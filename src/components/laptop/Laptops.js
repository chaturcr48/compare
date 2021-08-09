import React from "react";
import Filter from "../filter/LaptopFilter/Filter";
<<<<<<< HEAD
import './laptop.css'
import LapDes from './LapDes'
=======
import './laptop.css';

const laptops = [
  {
    id: "1",
    imgUrl: "https://source.unsplash.com/400x300/?laptop",
    name: "Xiaomi Redmi Note 10",
    desc: "5G (6GB RAM +128GB)",
  },
  {
    id: "2",
    imgUrl: "https://source.unsplash.com/400x300/?LAptop",
    name: "Xiaomi Redmi Note 10",
    desc: "5G (6GB RAM +128GB)",
  },
  {
    id: "3",
    imgUrl: "https://source.unsplash.com/400x300/?Laptop",
    name: "Xiaomi Redmi Note 10",
    desc: "5G (6GB RAM +128GB)",
  },
];
>>>>>>> 090e6781cb77a1abaf8cf1f3e3dcd9b55425c37a

const Laptops = () => {
  return (
    <React.Fragment>
      <div className="row mt-4 mx-1">
        <div className="col-3 pl-4">
          <div
            className="filter container"
            style={{
              display: "inline-block",
              minWidth: "30px",     
              width: "18.5vw",
              backgroundColor: "rgb(240,240,240)",
              padding: "2vw",
              overflow: "hidden",
              border : "2px solid rgb(68,88,99)",
              borderRadius: "1vw",
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