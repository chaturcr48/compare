import React from "react";

const fos = [
  { id: "1", os: "Android" },
  { id: "2", os: "IOS" },
  { id: "3", os: " Windows" },
];

const OperatingSystem = () => {
  return (
    <React.Fragment>
      {fos.map((range) => (
        <div className="form-check" key={range.id}>
          <input
            className="form-check-input"
            type="checkbox"
            name="flexRadioDefault"
            id="flexRadioDefault1"
          />
          <label className="form-check-label" htmlFor="flexRadioDefault1">
            {range.os}
          </label>
        </div>
      ))}
      <button
        className="btn btn-secondary mt-2"
        data-bs-toggle="collapse"
        data-bs-target="#collapseEight"
        aria-controls="collapseEight"
      >
        Apply OS
      </button>
    </React.Fragment>
  );
};
export default OperatingSystem;
