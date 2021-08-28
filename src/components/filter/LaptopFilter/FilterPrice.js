import React, {useState} from "react";

const fPrice = [
  { id: "1", pRange: "Up to 30,000", hRange: '30000' },
  { id: "2", pRange: "30,000 to 50,000", hRange: '50000' },
  { id: "3", pRange: "50,000 to 70,000", hRange: '70000' },
  { id: "4", pRange: "70,000 to 90,000", hRange: '90000' },
  { id: "5", pRange: "Above 90,000", hRange: '100000' },
];

const FilterPrice = (props) => {
  const [price, setPrice] = useState({
    30000: false,
    50000: false,
    70000: false,
    90000: false,
    100000: false,
  });
  const checkClick = (event) => {
    let { value, checked } = event.target;
    setPrice({ [value]: checked });
  };
  const applyFilter = () => {
    props.filterByPrice(price);
  };
  return (
    <React.Fragment>
      {fPrice.map((range) => (
        <div className="form-check" key={range.id}>
          <input
            value={range.hRange}
            onInput={checkClick}
            className="form-check-input"
            type="radio"
            name="flexRadioDefault"
            id="flexRadioDefault1"
          />
          <label className="form-check-label" htmlFor="flexRadioDefault1">
            {range.pRange}
          </label>
        </div>
      ))}
      <button
        className="btn btn-secondary mt-2"
        data-bs-toggle="collapse"
        data-bs-target="#collapseThree"
        aria-controls="collapseThree"
        onClick={applyFilter}
      >
        Apply Price
      </button>
    </React.Fragment>
  );
};
export default FilterPrice;
