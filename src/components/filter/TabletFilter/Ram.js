import React from "react";

const fRam = [
  { id: "1", ram: "Upto 2 GB" },
  { id: "2", ram: "2 - 4 GB" },
  { id: "3", ram: "4 - 8 GB" },
  { id: "4", ram: "Above 8 GB" },
];

const Ram = () => {
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
export default Ram;
