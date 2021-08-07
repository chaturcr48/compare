import React from "react";
import Filter from "../filter/mobileFilter/Filter";

const mobiles = [
    {
        id: "1",
        imgUrl:
          "https://source.unsplash.com/400x300/?Mobile",
        name: "Xiaomi Redmi Note 10",
        desc: "5G (6GB RAM +128GB)",
    },
    {
        id: "2",
        imgUrl:
          "https://source.unsplash.com/400x300/?MObile",
        name: "Xiaomi Redmi Note 10",
        desc: "5G (6GB RAM +128GB)",
    },
    {
        id: "3",
        imgUrl:
          "https://source.unsplash.com/400x300/?MOBile",
        name: "Xiaomi Redmi Note 10",
        desc: "5G (6GB RAM +128GB)",
    },
]
const Mobiles = () => {
  return (
    <React.Fragment>
      <div className="row mt-4 mx-4">
        <div className="col-3 pl-4">
          <div
            className="filter container"
            style={{
              gridRow: "1/10",
              display: "inline-block",
              minWidth: "30px",
            }}
          >
            <h4>Filters</h4>
            <br />
            <Filter />
            <br />
          </div>
        </div>
        <div className="col-9">
          <div> Showing 1 – 20 of 2000 results for "mobiles".</div>
          <div className="my-2" style={{ gridRow: "1/2" }}>
            {mobiles.map((mobile) => (
              <div
                className="card mb-3"
                key={mobile.id}
                style={{ maxWidth: "800px", border: "none" }}
              >
                <div className="row g-0">
                  <div className="col-md-4">
                    <img
                      src={mobile.imgUrl}
                      className="img-fluid rounded-start"
                      alt="..."
                    />
                  </div>
                  <div className="col-md-8">
                    <div className="card-body">
                      <h5 className="card-title">{mobile.name} </h5>
                      <p className="card-text">{mobile.desc} </p>
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
export default Mobiles;
