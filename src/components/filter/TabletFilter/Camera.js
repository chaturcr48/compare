import React, {useState} from "react";

const fres = [
    { id: "1", mp: "2 MP", hmp: "2 mp" },
    { id: "2", mp: "8 MP", hmp: "8 mp" },
    { id: "3", mp: "Over 8 MP", hmp: "16 mp" },
  ];

const Camera = (props) => {
    const [rearCamera, setRearCamera] = useState({
        "2 mp": false,
        "8 mp": false,
        "16 mp": false,
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
export default Camera;
