import React from "react";

const fRam = [
  { id: "1", ram: "Upto 4 Gb " },
  { id: "2", ram: "6 Gb" },
  { id: "3", ram: "8 Gb" },
  { id: "4", ram: "12 GB" },
  { id: "5", ram: "16 GB and Above" },
];

const FilterRam = () => {
  return (
    <React.Fragment>
      <br />
      <p>
        <b>Ram</b>
      </p>
      {fRam.map((ram) => (
        <div className="form-check" key={ram.id}>
          <input
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
    </React.Fragment>
  );
};
export default FilterRam;