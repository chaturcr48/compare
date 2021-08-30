import React, {useState} from "react";

const fPrice = [
  { id: "1", pRange: "Up to 5,000", hRange: '5000' },
  { id: "2", pRange: "5,000 to 10,000", hRange: '10000' },
  { id: "3", pRange: "10,00 to 25,000", hRange: '25000' },
  { id: "4", pRange: "Above 25,000 ", hRange: '30000' },
];

const Price = (props) => {
  const [price, setPrice] = useState({
    5000: false,
    10000: false,
    25000: false,
    30000: false,
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
export default Price;