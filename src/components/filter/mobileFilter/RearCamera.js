import React, { useState } from "react";

const fres = [
  { id: "1", mp: "Under 5 MP", hmp: "5 mp" },
  { id: "2", mp: "5 - 13 MP", hmp: "13 mp" },
  { id: "3", mp: "13 - 32 MP", hmp: "32 mp" },
  { id: "4", mp: "32 - 40 MP", hmp: "40 mp" },
  { id: "5", mp: "Over 40 MP", hmp: "50 mp" },
];

const RearCamera = (props) => {
  const [rearCamera, setRearCamera] = useState({
    "5 mp": false,
    "13 mp": false,
    "32 mp": false,
    "40 mp": false,
    "50 mp": false,
  });
  const checkClick = (event) => {
    let { value, checked } = event.target;
    setRearCamera({ ...rearCamera, [value]: checked });
  };
  const applyFilter = () => {
    props.filterByRearCamera(rearCamera);
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
        data-bs-target="#collapseFive"
        aria-controls="collapseFive"
        onClick={applyFilter}
      >
        Apply RC
      </button>
    </React.Fragment>
  );
};
export default RearCamera;
