import React from "react";
import Filter from "../filter/TabletFilter/Filter";
import './tablet.css'

const tablets = [
  {
    id: "1",
    imgUrl: "https://source.unsplash.com/400x300/?tablet",
    name: "Xiaomi Redmi Note 10",
    desc: "5G (6GB RAM +128GB)",
  },
  {
    id: "2",
    imgUrl: "https://source.unsplash.com/400x300/?tablet",
    name: "Xiaomi Redmi Note 10",
    desc: "5G (6GB RAM +128GB)",
  },
  {
    id: "3",
    imgUrl: "https://source.unsplash.com/400x300/?tablet",
    name: "Xiaomi Redmi Note 10",
    desc: "5G (6GB RAM +128GB)",
  },
];

const Tablet = () => {
  return (
    <React.Fragment>
      <div className="row mt-4 mx-1">
        <div className="col-3 pl-4">
          <div
            className="filter container"
            style={{
              display: "inline-block",
              minWidth: "30px",
              width: "19.1vw",
              backgroundColor: "rgb(240,240,240)",
              padding: "2vw",
              overflow: "hidden",
              border: "2px solid rgb(68,88,99)",
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
          <div> Showing 1 – 20 of 2000 results for "tablet".</div>
          <div className="my-2" style={{ gridRow: "1/2" }}>
            {tablets.map((tablet) => (
              <div
                className="card mb-3"
                key={tablet.id}
                style={{ maxWidth: "800px", border: "none" }}
              >
                <div className="row g-0">
                  <div className="col-md-4">
                    <img
                      src={tablet.imgUrl}
                      className="img-fluid rounded-start"
                      alt="..."
                    />
                  </div>
                  <div className="col-md-8">
                    <div className="card-body">
                      <h5 className="card-title">{tablet.name} </h5>
                      <p className="card-text">{tablet.desc} </p>
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
export default Tablet;