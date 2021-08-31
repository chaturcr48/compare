import React, { useState } from "react";

const fBbrand = [
  { id: "1", BBRange: "3G" },
  { id: "2", BBRange: "4G" },
  { id: "3", BBRange: "5G " },
];

const BroadbandGeneration = (props) => {
  const [broadbandgeneration, setBroadbandGeneration] = useState({
    "3G": false,
    "4G": false,
    "5G": false,
  });
  const checkClick = (event) => {
    let { value, checked } = event.target;
    setBroadbandGeneration({ ...broadbandgeneration, [value]: checked });
  };
  const applyFilter = () => {
    props.filterByBroadbandGeneration(broadbandgeneration);
  };
  return (
    <React.Fragment>
      {fBbrand.map((range) => (
        <div className="form-check" key={range.id}>
          <input
            value={range.BBRange}
            onInput={checkClick}
            className="form-check-input"
            type="checkbox"
            name="flexRadioDefault"
            id="flexRadioDefault2"
          />
          <label className="form-check-label" htmlFor="flexRadioDefault1">
            {range.BBRange}
          </label>
        </div>
      ))}
      <button
        className="btn btn-secondary mt-2"
        data-bs-toggle="collapse"
        data-bs-target="#collapseEight"
        aria-controls="collapseEight"
        onClick={applyFilter}
      >
        Apply BB Gen
      </button>
    </React.Fragment>
  );
};
export default BroadbandGeneration;
