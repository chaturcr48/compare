import React from "react";
import Filter from "../filter/LaptopFilter/Filter";
import './laptop.css'

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

const Laptops = () => {
  return (
    <React.Fragment>
      <div className="row mt-4 mx-1">
        <div className="col-3 pl-4">
          <div
            className="filter container"
            style={{
              display: "inline-block",
<<<<<<< HEAD
              minWidth: "30px",     
              width: "18.5vw",
              backgroundColor: "rgb(240,240,240)",
              padding: "2vw",
              overflow: "hidden",
              border : "2px solid rgb(68,88,99)",
=======
              minWidth: "30px",
              width: "19.1vw",
              backgroundColor: "rgb(240,240,240)",
              padding: "2vw",
              overflow: "hidden",
              border: "2px solid rgb(68,88,99)",
>>>>>>> 3e14cfae5c0692834d6161997324ebf78c0d722b
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
            {laptops.map((laptop) => (
              <div
                className="card mb-3"
                key={laptop.id}
                style={{ maxWidth: "800px", border: "none" }}
              >
                <div className="row g-0">
                  <div className="col-md-4">
                    <img
                      src={laptop.imgUrl}
                      className="img-fluid rounded-start"
                      alt="..."
                    />
                  </div>
                  <div className="col-md-8">
                    <div className="card-body">
                      <h5 className="card-title">{laptop.name} </h5>
                      <p className="card-text">{laptop.desc} </p>
                    </div>
                  </div>
                </div>
              </div>
            ))}
          </div>
        </div>
      </div>
    </React.Fragment>
  );
};
export default Laptops;