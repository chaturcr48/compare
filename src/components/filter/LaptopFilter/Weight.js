import React, {useState} from "react";

const fweight = [
  { id: "1", weight: "Under 1.25 Kg ", lWeight: '1.25 kg', hWeight: '1.25 kg' },
  { id: "2", weight: "1.25 - 1.5 Kg", lWeight: '1.251 kg', hWeight: '1.5 kg' },
  { id: "3", weight: "1.5 - 1.75 Kg", lWeight: '1.51 kg', hWeight: '1.75 kg' },
  { id: "4", weight: "1.75 - 2.0 Kg", lWeight: '1.751 kg', hWeight: '2.0 kg' },
  { id: "5", weight: "2.0 - 2.25 Kg", lWeight: '2.1 kg', hWeight: '2.25 kg' },
  { id: "6", weight: "Over 2.25 Kg", lWeight: '2.251 kg', hWeight: '5 kg' },
];
const Weight = (props) => {
  const [weight, setWeight] = useState({
    "1.25 kg": false,
    "1.251 kg": false,
    "1.51 kg": false,
    "1.751 kg": false,
    "2.1 kg": false,
    "2.251 kg": false,
  });
  const checkClick = (event) => {
    let { value, checked } = event.target;
    setWeight({ ...weight, [value]: checked });
  };
  const applyFilter = () => {
    props.filterByWeight(weight);
  };
  return (
    <React.Fragment>
      {fweight.map((item) => (
        <div className="form-check" key={item.id}>
          <input
            value={item.lWeight}
            onInput={checkClick}
            className="form-check-input"
            type="checkbox"
            name="flexRadioDefault"
            id="flexRadioDefault1"
          />
          <label className="form-check-label" htmlFor="flexRadioDefault1">
            {item.weight}
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
        Apply Weight
      </button>
    </React.Fragment>
  );
};
export default Weight;
