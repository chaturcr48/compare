import React from "react";

const fcalling = [
  { id: "1", calling: "Yes" },
  { id: "2", calling: "No" },
];

const Calling = () => {
  return (
    <React.Fragment>
      {fcalling.map((range) => (
        <div className="form-check" key={range.id}>
          <input
            className="form-check-input"
            type="radio"
            name="flexRadioDefault"
            id="flexRadioDefault1"
          />
          <label className="form-check-label" htmlFor="flexRadioDefault1">
            {range.calling}
          </label>
        </div>
      ))}
      <button
        className="btn btn-secondary mt-2"
        data-bs-toggle="collapse"
        data-bs-target="#collapseNine"
        aria-controls="collapseNine"
      >
        Apply Calling
      </button>
    </React.Fragment>
  );
};
export default Calling;
