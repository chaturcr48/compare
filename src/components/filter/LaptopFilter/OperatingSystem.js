import React from "react";

const fos = [
  { id: "1", os: "Window Os" },
  { id: "2", os: "Linux/Ubuntu" },
  { id: "3", os: "Mac Os " },
  { id: "4", os: "DOS Os" },
  { id: "5", os: "Chrome OS" },
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
        data-bs-target="#collapseSeven"
        aria-controls="collapseSeven"
      >
        Apply OS
      </button>
    </React.Fragment>
  );
};
export default OperatingSystem;
