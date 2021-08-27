import React, {useState} from "react";

const fPrice = [
  { id: "1", pRange: "Up to 30,000", lRange: '1', hRange: '30000' },
  { id: "2", pRange: "30,000 to 50,000", lRange: '30001', hRange: '50000' },
  { id: "3", pRange: "50,000 to 65,000", lRange: '50001', hRange: '65000' },
  { id: "4", pRange: "65,000 to 80,000", lRange: '65001', hRange: '80000' },
  { id: "5", pRange: "Above 80,000", lRange: '80001', hRange: '10000000' },
];

const FilterPrice = (props) => {
  const [price, setPrice] = useState({
    30000: false,
    50000: false,
    65000: false,
    80000: false,
    10000000: false,
  });
  const checkClick = (event) => {
    let { value, checked } = event.target;
    setPrice({ ...price, [value]: checked });
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
