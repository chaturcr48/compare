import React, { useState } from "react";

const fSC = [
  { id: "1", ssd: "32 GB" },
  { id: "2", ssd: "64 GB" },
  { id: "3", ssd: "128 GB" },
  { id: "4", ssd: "256 GB" },
  { id: "5", ssd: "512 GB" },
];

const StorageCapacity = (props) => {
  const [ssd, setSSD] = useState({
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
      {fSC.map((item) => (
        <div className="form-check" key={item.id}>
          <input
            value={item.ssd}
            onInput={checkClick}
            className="form-check-input"
            type="checkbox"
            name="flexRadioDefault"
            id="flexRadioDefault1"
          />
          <label className="form-check-label" htmlFor="flexRadioDefault1">
            {item.ssd}
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
