import React, { useState } from "react";

const fos = [
  { id: "1", os: "Window Os" },
  { id: "2", os: "Linux/Ubuntu" },
  { id: "3", os: "Mac Os " },
  { id: "4", os: "DOS Os" },
  { id: "5", os: "Chrome OS" },
];

const OperatingSystem = (props) => {
  const[os, setOS] = useState({
    Windows: false,
    Linux: false,
    Ubuntu: false,
    Mac: false,
    Dos: false,
    Chrome: false,
  });
  const checkClick = (event) => {
    let { value, checked } = event.target;
    setOS({ ...os, [value]: checked });
  }
  const applyFilter = () => {
    props.filterByOS(os);
  }

  return (
    <React.Fragment>
      {fos.map((range) => (
        <div className="form-check" key={range.id}>
          <input
            value={range.os}
            onInput={checkClick}
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
        onClick={applyFilter}
      >
        Apply OS
      </button>
    </React.Fragment>
  );
};
export default OperatingSystem;
