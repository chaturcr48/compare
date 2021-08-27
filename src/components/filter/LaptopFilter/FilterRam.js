import React, { useState } from "react";

const fRam = [
  { id: "1", ram: "4 GB" },
  { id: "2", ram: "8 GB" },
  { id: "3", ram: "16 GB" },
];

const FilterRam = (props) => {
  const [ram, setRam] = useState({
    "4 GB": false,
    "8 GB": false,
    "16 GB": false,
  });
  const checkClick = (event) => {
    let { value, checked } = event.target;
    setRam({ ...ram, [value]: checked });
  };
  const applyFilter = () => {
    props.filterByRam(ram);
  };
  return (
    <React.Fragment>
      {fRam.map((ram) => (
        <div className="form-check" key={ram.id}>
          <input
            value={ram.ram}
            onInput={checkClick}
            className="form-check-input"
            type="checkbox"
            name="flexRadioDefault"
            id="flexRadioDefault1"
          />
          <label className="form-check-label" htmlFor="flexRadioDefault1">
            {ram.ram}
          </label>
        </div>
      ))}
      <button
        className="btn btn-secondary mt-2"
        data-bs-toggle="collapse"
        data-bs-target="#collapseTwo"
        aria-controls="collapseTwo"
        onClick={applyFilter}
      >
        Apply Ram
      </button>
    </React.Fragment>
  );
};
export default FilterRam;
