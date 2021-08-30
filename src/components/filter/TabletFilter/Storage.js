import React, { useState } from "react";

const fBrand = [
  { id: "1", ssd: "2 GB" },
  { id: "2", ssd: "8 GB " },
  { id: "3", ssd: "16 GB " },
  { id: "4", ssd: "32 GB " },
  { id: "5", ssd: "64 GB" },
  { id: "6", ssd: "128 GB" },
  { id: "7", ssd: "256 GB" },
  { id: "8", ssd: "512 GB" },
];

const StorageCapacity = (props) => {
  const [ssd, setSSD] = useState({
    "2 GB": false,
    "8 GB": false,
    "16 GB": false,
    "32 GB": false,
    "64 GB": false,
    "128 GB": false,
    "256 GB": false,
    "512 GB": false,
  });
  const checkClick = (event) => {
    let { value, checked } = event.target;
    setSSD({ ...ssd, [value]: checked });
  };
  const applyFilter = () => {
    props.filterBySSD(ssd);
  };
  return (
    <React.Fragment>
      {fBrand.map((brand1) => (
        <div className="form-check" key={brand1.id}>
          <input
            value={brand1.ssd}
            onInput={checkClick}
            className="form-check-input"
            type="checkbox"
            name="flexRadioDefault"
            id="flexRadioDefault1"
          />
          <label className="form-check-label" htmlFor="flexRadioDefault1">
            {brand1.ssd}
          </label>
        </div>
      ))}
      <button
        className="btn btn-secondary mt-2"
        data-bs-toggle="collapse"
        data-bs-target="#collapseFour"
        aria-controls="collapseFour"
        onClick={applyFilter}
      >
        Apply ssd
      </button>
    </React.Fragment>
  );
};
export default StorageCapacity;
