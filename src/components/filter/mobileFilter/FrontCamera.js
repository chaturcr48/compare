import React, { useState } from "react";

const fres = [
  { id: "1", mp: "Under 2 MP", hmp: "2 mp" },
  { id: "2", mp: "2 - 5 MP", hmp: "5 mp" },
  { id: "3", mp: "5 - 8 MP", hmp: "8 mp" },
  { id: "4", mp: "8 - 13 MP", hmp: "13 mp" },
  { id: "5", mp: "13 - 24 MP", hmp: "24 mp" },
  { id: "6", mp: "24 - 40 MP", hmp: "40 mp" },
  { id: "7", mp: "Over 40 MP", hmp: "50 mp" },
];

const FrontCamera = (props) => {
  const [frontCamera, setFrontCamera] = useState({
    "2 mp": false,
    "5 mp": false,
    "8 mp": false,
    "13 mp": false,
    "24 mp": false,
    "40 mp": false,
    "50 mp": false,
  });
  const checkClick = (event) => {
    let { value, checked } = event.target;
    setFrontCamera({ ...frontCamera, [value]: checked });
  };
  const applyFilter = () => {
    props.filterByFrontCamera(frontCamera);
  };
  return (
    <React.Fragment>
      {fres.map((res) => (
        <div className="form-check" key={res.id}>
          <input
            value={res.hmp}
            onInput={checkClick}
            className="form-check-input"
            type="checkbox"
            name="flexRadioDefault"
            id="flexRadioDefault1"
          />
          <label className="form-check-label" htmlFor="flexRadioDefault1">
            {res.mp}
          </label>
        </div>
      ))}
      <button
        className="btn btn-secondary mt-2"
        data-bs-toggle="collapse"
        data-bs-target="#collapseSix"
        aria-controls="collapseSix"
        onClick={applyFilter}
      >
        Apply FC
      </button>
    </React.Fragment>
  );
};
export default FrontCamera;
